import { CalendarDays } from "lucide-react"

import { BackButton } from "~/components/navigation/BackButton"
import { AppLayout } from "~/layouts/AppLayout"

import { TrainingCalendar } from "~/domains/training-calendar/components/TrainingCalendar"
import { useTrainingCalendar } from "~/domains/training-calendar/hooks/useTrainingCalendar"

export default function TrainingCalendarPage() {
  const { data, loading, error } = useTrainingCalendar()

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to="/" />

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <CalendarDays className="size-4 text-primary" />
            Planning formation
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Agenda TP CTCR
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            Visualisez vos prochaines séances de formation directement depuis
            votre calendrier Google.
          </p>
        </div>

        <TrainingCalendar
          events={data?.events ?? []}
          loading={loading}
          error={error}
        />
      </div>
    </AppLayout>
  )
}
