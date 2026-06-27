import ical from "node-ical"

type TrainingCalendarEvent = {
  id: string
  title: string
  location: string | null
  description: string | null
  start: string
  end: string
  isAllDay: boolean
}

type IcalTextValue =
  | string
  | {
      val?: string
    }
  | null
  | undefined

function getTextValue(value: IcalTextValue) {
  if (!value) {
    return null
  }

  if (typeof value === "string") {
    return value
  }

  return value.val ?? null
}

function getDayRange(date: Date) {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)

  const end = new Date(date)
  end.setHours(23, 59, 59, 999)

  return { start, end }
}

function isEventInRange(event: TrainingCalendarEvent, start: Date, end: Date) {
  const eventStart = new Date(event.start)
  const eventEnd = new Date(event.end)

  return eventStart <= end && eventEnd >= start
}

export async function loader() {
  const calendarUrl = process.env.TRAINING_CALENDAR_ICS_URL

  if (!calendarUrl) {
    throw new Response("URL du calendrier manquante.", {
      status: 500,
    })
  }

  const response = await fetch(calendarUrl)

  if (!response.ok) {
    throw new Response("Impossible de récupérer le calendrier.", {
      status: 502,
    })
  }

  const ics = await response.text()

  const calendar = ical.sync.parseICS(ics)

  const calendarEvents = Object.values(calendar).filter(
    (event): event is ical.VEvent =>
      event !== undefined &&
      event.type === "VEVENT" &&
      event.start !== undefined
  )

  const events: TrainingCalendarEvent[] = calendarEvents
    .map((event) => {
      const start = event.start
      const end = event.end ?? event.start

      return {
        id: event.uid,
        title: getTextValue(event.summary) ?? "Événement",
        location: getTextValue(event.location),
        description: getTextValue(event.description),
        start: start.toISOString(),
        end: end.toISOString(),
        isAllDay: event.datetype === "date",
      }
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  const now = new Date()

  const todayRange = getDayRange(now)

  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const tomorrowRange = getDayRange(tomorrow)

  const today = events.filter((event) =>
    isEventInRange(event, todayRange.start, todayRange.end)
  )

  const tomorrowEvents = events.filter((event) =>
    isEventInRange(event, tomorrowRange.start, tomorrowRange.end)
  )

  const upcoming = events
    .filter((event) => new Date(event.end) >= now)
    .slice(0, 5)

  return Response.json(
    {
      events,
      today,
      tomorrow: tomorrowEvents,
      upcoming,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    }
  )
}
