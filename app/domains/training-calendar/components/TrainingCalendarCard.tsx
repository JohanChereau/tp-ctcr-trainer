import { Link } from "react-router"

import { CalendarDays, MapPin } from "lucide-react"

import type { TrainingCalendarEvent } from "../types/types"

type TrainingCalendarCardProps = {
  today: TrainingCalendarEvent[]
  tomorrow: TrainingCalendarEvent[]
  loading: boolean
  error: boolean
}

export function TrainingCalendarCard({
  today,
  tomorrow,
  loading,
  error,
}: TrainingCalendarCardProps) {
  const todayDate = new Date()
  const day = todayDate.getDay()
  const isWeekend = day === 0 || day === 6

  if (loading) {
    return (
      <TrainingCalendarCardLink>
        <p className="text-sm font-semibold">Formation</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Chargement du planning...
        </p>
      </TrainingCalendarCardLink>
    )
  }

  if (error) {
    return (
      <TrainingCalendarCardLink>
        <p className="text-sm font-semibold">Formation</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Impossible de charger le planning.
        </p>
      </TrainingCalendarCardLink>
    )
  }

  if (isWeekend) {
    return (
      <TrainingCalendarCardLink>
        <div className="mb-2 flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" />
          <p className="text-sm font-semibold">Formation</p>
        </div>

        <p className="text-xs font-medium text-muted-foreground uppercase">
          Week-end
        </p>

        <p className="mt-1 text-lg font-bold">Repos</p>

        <p className="mt-2 text-sm text-muted-foreground">
          Aucun cours prévu aujourd'hui. Profites-en pour réviser
          tranquillement.
        </p>
      </TrainingCalendarCardLink>
    )
  }

  const mainEvent = today[0] ?? tomorrow[0]

  if (!mainEvent) {
    return (
      <TrainingCalendarCardLink>
        <div className="mb-2 flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" />
          <p className="text-sm font-semibold">Formation</p>
        </div>

        <p className="text-sm text-muted-foreground">
          Aucun événement prévu aujourd'hui ou demain.
        </p>
      </TrainingCalendarCardLink>
    )
  }

  const label = today.length > 0 ? "Aujourd'hui" : "Demain"

  return (
    <TrainingCalendarCardLink>
      <div className="mb-3 flex items-center gap-2">
        <CalendarDays className="size-4 text-primary" />
        <p className="text-sm font-semibold">Formation</p>
      </div>

      <p className="text-xs font-medium text-muted-foreground uppercase">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold">{mainEvent.title}</p>

      {mainEvent.location && (
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {mainEvent.location}
        </div>
      )}

      <p className="mt-2 text-sm text-muted-foreground">
        {formatEventTime(mainEvent)}
      </p>

      {mainEvent.description && (
        <p className="mt-3 text-sm text-muted-foreground">
          {mainEvent.description}
        </p>
      )}
    </TrainingCalendarCardLink>
  )
}

type TrainingCalendarCardLinkProps = {
  children: React.ReactNode
}

function TrainingCalendarCardLink({ children }: TrainingCalendarCardLinkProps) {
  return (
    <Link
      to="/training-calendar"
      className="block rounded-2xl border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:bg-muted/50 hover:shadow-sm"
    >
      {children}
    </Link>
  )
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
