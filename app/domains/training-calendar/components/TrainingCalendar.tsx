import {
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react"

import {
  AlignLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"

import type { TrainingCalendarEvent } from "../types/types"

type TrainingCalendarProps = {
  events: TrainingCalendarEvent[]
  loading: boolean
  error: boolean
}

type TrainingEventKind =
  | "simulator"
  | "driving"
  | "plateau"
  | "theory"
  | "msp"
  | "op"
  | "exam"
  | "holiday"
  | "vacation"
  | "rest"
  | "default"

type MobileWeekDay = {
  date: Date
  dateKey: string
  events: TrainingCalendarEvent[]
  isToday: boolean
  isPast: boolean
}

type WeekTransitionDirection = "previous" | "next"

const SWIPE_THRESHOLD = 50

export function TrainingCalendar({
  events,
  loading,
  error,
}: TrainingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() =>
    getMonthDate(new Date())
  )

  const [currentWeek, setCurrentWeek] = useState(() =>
    getStartOfWeek(new Date())
  )

  const [selectedEvent, setSelectedEvent] =
    useState<TrainingCalendarEvent | null>(null)

  const touchStartX = useRef<number | null>(null)

  const days = useMemo(() => getCalendarDays(currentMonth), [currentMonth])

  const eventsByDate = useMemo(() => groupEventsByDate(events), [events])

  const currentMonthEvents = useMemo(
    () =>
      events
        .filter((event) => isSameMonth(new Date(event.start), currentMonth))
        .sort(compareEvents),
    [events, currentMonth]
  )

  const monthHours = useMemo(
    () => getTotalHours(currentMonthEvents),
    [currentMonthEvents]
  )

  const mobileWeekDays = useMemo(
    () => getMobileWeekDays(currentWeek, events),
    [currentWeek, events]
  )

  const mobileWeekEvents = useMemo(
    () =>
      mobileWeekDays
        .flatMap((day) => day.events)
        .filter(
          (event, index, array) =>
            array.findIndex((candidate) => candidate.id === event.id) === index
        ),
    [mobileWeekDays]
  )

  const weekHours = useMemo(
    () => getTotalHours(mobileWeekEvents),
    [mobileWeekEvents]
  )

  const [weekTransitionDirection, setWeekTransitionDirection] =
    useState<WeekTransitionDirection>("next")

  const [weekTransitionKey, setWeekTransitionKey] = useState(0)

  if (loading) {
    return (
      <CalendarStateCard
        title="Chargement du planning..."
        description="Récupération des événements depuis Google Calendar."
      />
    )
  }

  if (error) {
    return (
      <CalendarStateCard
        title="Impossible de charger le planning."
        description="Vérifiez la connexion ou le flux du calendrier."
      />
    )
  }

  function goToPreviousMonth() {
    setCurrentMonth(
      (date) => new Date(date.getFullYear(), date.getMonth() - 1, 1)
    )
  }

  function goToNextMonth() {
    setCurrentMonth(
      (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1)
    )
  }

  function goToCurrentMonth() {
    setCurrentMonth(getMonthDate(new Date()))
  }

  function goToPreviousWeek() {
    setWeekTransitionDirection("previous")
    setCurrentWeek((date) => addDays(date, -7))
    setWeekTransitionKey((key) => key + 1)
  }

  function goToNextWeek() {
    setWeekTransitionDirection("next")
    setCurrentWeek((date) => addDays(date, 7))
    setWeekTransitionKey((key) => key + 1)
  }
  function goToCurrentWeek() {
    const todayWeek = getStartOfWeek(new Date())

    setWeekTransitionDirection(
      currentWeek.getTime() > todayWeek.getTime() ? "previous" : "next"
    )

    setCurrentWeek(todayWeek)
    setWeekTransitionKey((key) => key + 1)
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) {
      return
    }

    const touchEndX = event.changedTouches[0]?.clientX

    if (touchEndX === undefined) {
      touchStartX.current = null
      return
    }

    const distance = touchEndX - touchStartX.current

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      if (distance > 0) {
        goToPreviousWeek()
      } else {
        goToNextWeek()
      }
    }

    touchStartX.current = null
  }

  return (
    <>
      <div className="overflow-hidden rounded-3xl border bg-background shadow-sm">
        {/* Desktop header */}
        <div className="hidden gap-4 border-b bg-muted/30 p-6 md:flex md:items-center md:justify-between">
          <CalendarHeading
            title={formatMonthLabel(currentMonth)}
            description={
              currentMonthEvents.length === 0
                ? "Aucune séance prévue"
                : `${currentMonthEvents.length} événement${
                    currentMonthEvents.length > 1 ? "s" : ""
                  } • ${monthHours} h de formation`
            }
          />

          <CalendarNavigation
            onPrevious={goToPreviousMonth}
            onToday={goToCurrentMonth}
            onNext={goToNextMonth}
            previousLabel="Mois précédent"
            nextLabel="Mois suivant"
          />
        </div>

        {/* Mobile header */}
        <div className="space-y-4 border-b bg-muted/30 p-4 md:hidden">
          <CalendarHeading
            title={formatWeekLabel(currentWeek)}
            description={
              mobileWeekEvents.length === 0
                ? "Aucune séance cette semaine"
                : `${mobileWeekEvents.length} événement${
                    mobileWeekEvents.length > 1 ? "s" : ""
                  } • ${weekHours} h de formation`
            }
          />

          <CalendarNavigation
            onPrevious={goToPreviousWeek}
            onToday={goToCurrentWeek}
            onNext={goToNextWeek}
            previousLabel="Semaine précédente"
            nextLabel="Semaine suivante"
          />

          <p className="text-center text-xs text-muted-foreground">
            Glissez horizontalement pour changer de semaine
          </p>
        </div>

        {/* Desktop day names*/}
        <div className="hidden grid-cols-7 border-b bg-muted/20 md:grid">
          {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
            <div
              key={day}
              className="border-r p-3 text-center text-xs font-semibold text-muted-foreground last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Desktop monthly calendar */}
        <div className="hidden grid-cols-7 md:grid">
          {days.map((day) => {
            const dateKey = formatDateKey(day.date)
            const dayEvents = eventsByDate.get(dateKey) ?? []

            return (
              <div
                key={dateKey}
                className="min-h-36 border-r border-b p-3 last:border-r-0"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p
                    className={
                      day.isToday
                        ? "flex size-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
                        : day.isCurrentMonth
                          ? "text-sm font-semibold"
                          : "text-sm font-semibold text-muted-foreground/40"
                    }
                  >
                    {day.date.getDate()}
                  </p>

                  {day.isToday && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      Aujourd’hui
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {dayEvents.slice(0, 3).map((event) => (
                    <EventPill
                      key={event.id}
                      event={event}
                      onClick={() => setSelectedEvent(event)}
                    />
                  ))}

                  {dayEvents.length > 3 && (
                    <p className="text-xs font-medium text-muted-foreground">
                      +{dayEvents.length - 3} autre
                      {dayEvents.length - 3 > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile weekly calendar */}
        <div
          className="touch-pan-y overflow-hidden p-4 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={weekTransitionKey}
            className={
              weekTransitionDirection === "next"
                ? "animate-in duration-300 fade-in slide-in-from-right-4"
                : "animate-in duration-300 fade-in slide-in-from-left-4"
            }
          >
            <div className="space-y-4">
              {mobileWeekDays.map((day) => (
                <MobileDaySection
                  key={day.dateKey}
                  day={day}
                  onSelectEvent={setSelectedEvent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EventDetailsDialog
        event={selectedEvent}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedEvent(null)
          }
        }}
      />
    </>
  )
}

function CalendarHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-primary/10 p-3 text-primary">
        <CalendarDays className="size-5" />
      </div>

      <div className="min-w-0">
        <h2 className="truncate text-xl font-black tracking-tight capitalize md:text-2xl">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function CalendarNavigation({
  onPrevious,
  onToday,
  onNext,
  previousLabel,
  nextLabel,
}: {
  onPrevious: () => void
  onToday: () => void
  onNext: () => void
  previousLabel: string
  nextLabel: string
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 md:flex">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onPrevious}
        aria-label={previousLabel}
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onToday}
        className="w-full md:w-auto"
      >
        Aujourd’hui
      </Button>

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onNext}
        aria-label={nextLabel}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}

function MobileDaySection({
  day,
  onSelectEvent,
}: {
  day: MobileWeekDay
  onSelectEvent: (event: TrainingCalendarEvent) => void
}) {
  return (
    <section
      className={`rounded-2xl border p-4 ${
        day.isToday
          ? "border-primary/40 bg-primary/5"
          : day.isPast
            ? "bg-muted/20 opacity-65"
            : "bg-background"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            {getRelativeDayLabel(day.date)}
          </p>

          <h3 className="font-bold capitalize">{formatDateLabel(day.date)}</h3>
        </div>

        {day.isToday && (
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
            Aujourd’hui
          </span>
        )}
      </div>

      {day.events.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Aucun événement prévu.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {day.events.map((event) => (
            <MobileEventCard
              key={event.id}
              event={event}
              onClick={() => onSelectEvent(event)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function EventPill({
  event,
  onClick,
}: {
  event: TrainingCalendarEvent
  onClick: () => void
}) {
  const styles = getEventKindStyles(getEventKind(event))

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border p-2 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${styles.card}`}
    >
      <p className="truncate text-xs font-bold">{event.title}</p>

      <p className="mt-1 truncate text-xs opacity-80">
        {formatEventTime(event)}
      </p>
    </button>
  )
}

function MobileEventCard({
  event,
  onClick,
}: {
  event: TrainingCalendarEvent
  onClick: () => void
}) {
  const styles = getEventKindStyles(getEventKind(event))

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition active:scale-[0.99] ${styles.card}`}
    >
      <span
        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${styles.badge}`}
      >
        {styles.label}
      </span>

      <h4 className="mt-3 text-base font-bold">{event.title}</h4>

      <div className="mt-3 space-y-2 text-sm opacity-80">
        <div className="flex items-center gap-2">
          <Clock className="size-4 shrink-0" />
          <span>{formatEventTime(event)}</span>
        </div>

        {event.location && (
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>{event.location}</span>
          </div>
        )}
      </div>
    </button>
  )
}

function EventDetailsDialog({
  event,
  onOpenChange,
}: {
  event: TrainingCalendarEvent | null
  onOpenChange: (open: boolean) => void
}) {
  const kind = event ? getEventKind(event) : "default"
  const styles = getEventKindStyles(kind)

  return (
    <Dialog open={!!event} onOpenChange={onOpenChange}>
      <DialogContent>
        {event && (
          <>
            <DialogHeader>
              <div className="mb-2">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${styles.badge}`}
                >
                  {styles.label}
                </span>
              </div>

              <DialogTitle>{event.title}</DialogTitle>

              <DialogDescription className="capitalize">
                {formatDateLabel(new Date(event.start))}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <InfoRow icon={<Clock className="size-4" />}>
                {formatEventTime(event)}
              </InfoRow>

              {event.location && (
                <InfoRow icon={<MapPin className="size-4" />}>
                  {event.location}
                </InfoRow>
              )}

              {event.description && (
                <div className="rounded-2xl border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlignLeft className="size-4 text-primary" />
                    <p className="text-sm font-semibold">Description</p>
                  </div>

                  <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function InfoRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {children}
    </div>
  )
}

function CalendarStateCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="rounded-3xl border bg-muted/30 p-8">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function getEventKind(event: TrainingCalendarEvent): TrainingEventKind {
  const text = normalizeText(
    `${event.title} ${event.location ?? ""} ${event.description ?? ""}`
  )

  if (
    text.includes("jour ferie") ||
    text.includes("ferie") ||
    text.includes("feries")
  ) {
    return "holiday"
  }

  if (
    text.includes("vacances") ||
    text.includes("conge") ||
    text.includes("conges")
  ) {
    return "vacation"
  }

  if (
    text.includes("mise en situation professionnelle") ||
    containsWord(text, "msp")
  ) {
    return "msp"
  }

  if (
    text.includes("opération professionnelle") ||
    containsWord(text, "op") ||
    containsWord(text, "opération pro")
  ) {
    return "op"
  }

  if (
    text.includes("theorie") ||
    text.includes("cours theorique") ||
    text.includes("en salle") ||
    containsWord(text, "salle") ||
    containsWord(text, "cours")
  ) {
    return "theory"
  }

  if (text.includes("examen")) {
    return "exam"
  }

  if (text.includes("simulateur")) {
    return "simulator"
  }

  if (text.includes("conduite")) {
    return "driving"
  }

  if (text.includes("plateau")) {
    return "plateau"
  }

  if (
    text.includes("repos") ||
    text.includes("weekend") ||
    text.includes("week-end")
  ) {
    return "rest"
  }

  return "default"
}

function getEventKindStyles(kind: TrainingEventKind) {
  switch (kind) {
    case "simulator":
      return {
        label: "Simulateur",
        card: "border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-sky-100",
        badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-200",
      }

    case "driving":
      return {
        label: "Conduite",
        card: "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-100",
        badge:
          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200",
      }

    case "plateau":
      return {
        label: "Plateau",
        card: "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100",
        badge:
          "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-200",
      }

    case "theory":
      return {
        label: "Théorie",
        card: "border-violet-200 bg-violet-50 text-violet-950 dark:border-violet-900/60 dark:bg-violet-950/30 dark:text-violet-100",
        badge:
          "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-200",
      }

    case "msp":
      return {
        label: "MSP",
        card: "border-cyan-200 bg-cyan-50 text-cyan-950 dark:border-cyan-900/60 dark:bg-cyan-950/30 dark:text-cyan-100",
        badge:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-200",
      }

    case "op":
      return {
        label: "OP",
        card: "border-cyan-200 bg-cyan-50 text-cyan-950 dark:border-cyan-900/60 dark:bg-cyan-950/30 dark:text-cyan-100",
        badge:
          "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-200",
      }

    case "exam":
      return {
        label: "Examen",
        card: "border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-100",
        badge:
          "bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200",
      }

    case "holiday":
      return {
        label: "Férié",
        card: "border-red-200 bg-red-50 text-red-950 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100",
        badge: "bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-200",
      }

    case "vacation":
      return {
        label: "Vacances",
        card: "border-orange-200 bg-orange-50 text-orange-950 dark:border-orange-900/60 dark:bg-orange-950/30 dark:text-orange-100",
        badge:
          "bg-orange-100 text-orange-700 dark:bg-orange-900/60 dark:text-orange-200",
      }

    case "rest":
      return {
        label: "Repos",
        card: "border-zinc-200 bg-zinc-50 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100",
        badge: "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
      }

    default:
      return {
        label: "Formation",
        card: "border-border bg-muted/30 text-foreground",
        badge: "bg-primary/10 text-primary",
      }
  }
}

function getCalendarDays(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDay = new Date(year, month, 1)
  const start = getStartOfWeek(firstDay)

  return Array.from({ length: 42 }, (_, index) => {
    const current = addDays(start, index)

    return {
      date: current,
      isToday: isSameDay(current, new Date()),
      isCurrentMonth: current.getMonth() === month,
    }
  })
}

function getMobileWeekDays(
  weekStart: Date,
  events: TrainingCalendarEvent[]
): MobileWeekDay[] {
  const today = getStartOfDay(new Date())

  return Array.from({ length: 7 }, (_, index) => {
    const date = addDays(weekStart, index)
    const dateStart = getStartOfDay(date)
    const dateEnd = getEndOfDay(date)

    return {
      date,
      dateKey: formatDateKey(date),
      events: events
        .filter((event) => isEventInRange(event, dateStart, dateEnd))
        .sort(compareEvents),
      isToday: isSameDay(date, today),
      isPast: dateEnd.getTime() < today.getTime(),
    }
  })
}

function groupEventsByDate(events: TrainingCalendarEvent[]) {
  const groups = new Map<string, TrainingCalendarEvent[]>()

  for (const event of events) {
    const eventStart = getStartOfDay(new Date(event.start))
    const eventEnd = getInclusiveEventEnd(event)

    let currentDate = eventStart

    while (currentDate <= eventEnd) {
      const key = formatDateKey(currentDate)
      const existingEvents = groups.get(key) ?? []

      if (!existingEvents.some((candidate) => candidate.id === event.id)) {
        groups.set(key, [...existingEvents, event].sort(compareEvents))
      }

      currentDate = addDays(currentDate, 1)
    }
  }

  return groups
}

function getInclusiveEventEnd(event: TrainingCalendarEvent) {
  const end = new Date(event.end)

  /* In an ICS feed, the end of an all-day event
   * is generally exclusive.
   *
   * Example:
   * Start: July 12 at 12:00 a.m.
   * End: July 13 at 12:00 a.m.
   *
   * The event belongs solely to July 12.
   */
  if (
    event.isAllDay &&
    end.getHours() === 0 &&
    end.getMinutes() === 0 &&
    end.getSeconds() === 0
  ) {
    return getEndOfDay(addDays(end, -1))
  }

  return end
}

function isEventInRange(
  event: TrainingCalendarEvent,
  rangeStart: Date,
  rangeEnd: Date
) {
  const eventStart = new Date(event.start)
  const eventEnd = getInclusiveEventEnd(event)

  return eventStart <= rangeEnd && eventEnd >= rangeStart
}

function compareEvents(
  first: TrainingCalendarEvent,
  second: TrainingCalendarEvent
) {
  return new Date(first.start).getTime() - new Date(second.start).getTime()
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
}

function containsWord(text: string, word: string) {
  return new RegExp(`\\b${word}\\b`, "i").test(text)
}

function getMonthDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getStartOfWeek(date: Date) {
  const start = getStartOfDay(date)
  const day = start.getDay()
  const offset = day === 0 ? 6 : day - 1

  return addDays(start, -offset)
}

function getStartOfDay(date: Date) {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  return result
}

function getEndOfDay(date: Date) {
  const result = new Date(date)
  result.setHours(23, 59, 59, 999)
  return result
}

function addDays(date: Date, numberOfDays: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + numberOfDays)
  return result
}

function isSameDay(first: Date, second: Date) {
  return formatDateKey(first) === formatDateKey(second)
}

function isSameMonth(date: Date, month: Date) {
  return (
    date.getFullYear() === month.getFullYear() &&
    date.getMonth() === month.getMonth()
  )
}

function getTotalHours(events: TrainingCalendarEvent[]) {
  const total = events.reduce((sum, event) => {
    if (event.isAllDay) {
      return sum
    }

    const start = new Date(event.start).getTime()
    const end = new Date(event.end).getTime()

    return sum + Math.max(0, end - start)
  }, 0)

  return Math.round(total / 1000 / 60 / 60)
}

function getRelativeDayLabel(date: Date) {
  const today = getStartOfDay(new Date())
  const comparedDate = getStartOfDay(date)
  const difference = Math.round(
    (comparedDate.getTime() - today.getTime()) / 86_400_000
  )

  if (difference === -1) {
    return "Hier"
  }

  if (difference === 0) {
    return "Aujourd’hui"
  }

  if (difference === 1) {
    return "Demain"
  }

  if (difference < 0) {
    return "Passé"
  }

  return "À venir"
}

function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(date)
}

function formatWeekLabel(weekStart: Date) {
  const weekEnd = addDays(weekStart, 6)

  const startMonth = weekStart.getMonth()
  const endMonth = weekEnd.getMonth()
  const startYear = weekStart.getFullYear()
  const endYear = weekEnd.getFullYear()

  if (startYear !== endYear) {
    return `${formatShortDate(weekStart, true)} – ${formatShortDate(
      weekEnd,
      true
    )}`
  }

  if (startMonth !== endMonth) {
    return `${formatShortDate(weekStart)} – ${formatShortDate(weekEnd, true)}`
  }

  return `${weekStart.getDate()} – ${formatShortDate(weekEnd, true)}`
}

function formatShortDate(date: Date, includeYear = false) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    ...(includeYear ? { year: "numeric" as const } : {}),
    timeZone: "Europe/Paris",
  }).format(date)
}

function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  }).format(date)
}

function formatDateKey(date: Date) {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Europe/Paris",
  }).format(date)
}

function formatEventTime(event: TrainingCalendarEvent) {
  if (event.isAllDay) {
    return "Toute la journée"
  }

  const start = new Date(event.start)
  const end = new Date(event.end)

  return `${formatTime(start)} → ${formatTime(end)}`
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris",
  }).format(date)
}
