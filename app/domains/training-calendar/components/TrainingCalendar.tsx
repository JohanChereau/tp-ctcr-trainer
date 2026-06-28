import { useMemo, useState, type ReactNode } from "react"

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
  | "classroom"
  | "exam"
  | "rest"
  | "default"

export function TrainingCalendar({
  events,
  loading,
  error,
}: TrainingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() =>
    getMonthDate(new Date())
  )
  const [selectedEvent, setSelectedEvent] =
    useState<TrainingCalendarEvent | null>(null)

  const days = useMemo(() => getCalendarDays(currentMonth), [currentMonth])
  const eventsByDate = useMemo(() => groupEventsByDate(events), [events])

  const currentMonthEvents = useMemo(
    () =>
      events
        .filter((event) => isSameMonth(new Date(event.start), currentMonth))
        .sort(
          (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
        ),
    [events, currentMonth]
  )

  const mobileGroups = useMemo(
    () => groupEventsForMobile(currentMonthEvents),
    [currentMonthEvents]
  )

  const monthHours = useMemo(
    () => getTotalHours(currentMonthEvents),
    [currentMonthEvents]
  )

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

  return (
    <>
      <div className="overflow-hidden rounded-3xl border bg-background shadow-sm">
        <div className="flex flex-col gap-4 border-b bg-muted/30 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <CalendarDays className="size-5" />
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight capitalize">
                {formatMonthLabel(currentMonth)}
              </h2>

              <p className="text-sm text-muted-foreground">
                {currentMonthEvents.length === 0
                  ? "Aucune séance prévue"
                  : `${currentMonthEvents.length} événement${currentMonthEvents.length > 1 ? "s" : ""} • ${monthHours}h de formation`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
              <ChevronLeft className="size-4" />
            </Button>

            <Button variant="outline" onClick={goToCurrentMonth}>
              Aujourd'hui
            </Button>

            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

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
                      Aujourd'hui
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
                      +{dayEvents.length - 3} autre(s)
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="space-y-6 p-4 md:hidden">
          {currentMonthEvents.length === 0 ? (
            <div className="rounded-2xl border bg-muted/30 p-4">
              <p className="font-semibold">Aucun événement ce mois-ci.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Le planning est vide pour cette période.
              </p>
            </div>
          ) : (
            mobileGroups.map((group) => (
              <section key={group.dateKey} className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">
                    {group.relativeLabel}
                  </p>
                  <h3 className="text-lg font-bold">{group.label}</h3>
                </div>

                <div className="space-y-3">
                  {group.events.map((event) => (
                    <MobileEventCard
                      key={event.id}
                      event={event}
                      onClick={() => setSelectedEvent(event)}
                    />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>

      <EventDetailsDialog
        event={selectedEvent}
        onOpenChange={(open) => {
          if (!open) setSelectedEvent(null)
        }}
      />
    </>
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
      className={`w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${styles.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${styles.badge}`}
          >
            {styles.label}
          </p>

          <h3 className="mt-3 text-lg font-bold">{event.title}</h3>
        </div>
      </div>

      <div className="mt-3 space-y-2 text-sm opacity-80">
        <div className="flex items-center gap-2">
          <Clock className="size-4" />
          {formatEventTime(event)}
        </div>

        {event.location && (
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            {event.location}
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
              <DialogDescription>
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

                  <p className="text-sm leading-relaxed text-muted-foreground">
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
  const text = `${event.title} ${event.location ?? ""} ${
    event.description ?? ""
  }`.toLowerCase()

  if (text.includes("examen")) return "exam"

  if (text.includes("simulateur")) return "simulator"
  if (text.includes("conduite")) return "driving"
  if (text.includes("plateau")) return "plateau"
  if (text.includes("salle") || text.includes("cours")) return "classroom"

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

    case "classroom":
      return {
        label: "Salle",
        card: "border-violet-200 bg-violet-50 text-violet-950 dark:border-violet-900/60 dark:bg-violet-950/30 dark:text-violet-100",
        badge:
          "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-200",
      }

    case "exam":
      return {
        label: "Examen",
        card: "border-rose-200 bg-rose-50 text-rose-950 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-100",
        badge:
          "bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-200",
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
  const start = new Date(firstDay)

  const day = firstDay.getDay()
  const offset = day === 0 ? 6 : day - 1

  start.setDate(firstDay.getDate() - offset)

  return Array.from({ length: 42 }, (_, index) => {
    const current = new Date(start)
    current.setDate(start.getDate() + index)

    return {
      date: current,
      isToday: formatDateKey(current) === formatDateKey(new Date()),
      isCurrentMonth: current.getMonth() === month,
    }
  })
}

function groupEventsByDate(events: TrainingCalendarEvent[]) {
  const groups = new Map<string, TrainingCalendarEvent[]>()

  for (const event of events) {
    const key = formatDateKey(new Date(event.start))
    groups.set(key, [...(groups.get(key) ?? []), event])
  }

  return groups
}

function groupEventsForMobile(events: TrainingCalendarEvent[]) {
  const groups = groupEventsByDate(events)

  return Array.from(groups.entries()).map(([dateKey, groupedEvents]) => {
    const date = new Date(groupedEvents[0].start)

    return {
      dateKey,
      label: formatDateLabel(date),
      relativeLabel: getRelativeDayLabel(date),
      events: groupedEvents,
    }
  })
}

function getMonthDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function isSameMonth(date: Date, month: Date) {
  return (
    date.getFullYear() === month.getFullYear() &&
    date.getMonth() === month.getMonth()
  )
}

function getTotalHours(events: TrainingCalendarEvent[]) {
  const total = events.reduce((sum, event) => {
    if (event.isAllDay) return sum

    const start = new Date(event.start).getTime()
    const end = new Date(event.end).getTime()

    return sum + Math.max(0, end - start)
  }, 0)

  return Math.round(total / 1000 / 60 / 60)
}

function getRelativeDayLabel(date: Date) {
  const today = formatDateKey(new Date())

  const tomorrowDate = new Date()
  tomorrowDate.setDate(tomorrowDate.getDate() + 1)

  const tomorrow = formatDateKey(tomorrowDate)
  const current = formatDateKey(date)

  if (current === today) return "Aujourd'hui"
  if (current === tomorrow) return "Demain"

  return "À venir"
}

function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
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
  if (event.isAllDay) return "Toute la journée"

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
