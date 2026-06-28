import { Sparkles } from "lucide-react"

import { getCategoryById } from "~/domains/learning/data"
import { useLearningDashboardStats } from "~/domains/learning/stats/hooks/useLearningDashboardStats"
import { useWeakQuestionsCount } from "~/domains/learning/stats/hooks/useWeakQuestionsCount"
import { TrainingCalendarCard } from "~/domains/training-calendar/components/TrainingCalendarCard"
import { useTrainingCalendar } from "~/domains/training-calendar/hooks/useTrainingCalendar"

import { DailyMissionCard } from "./DailyMissionCard"
import { DashboardStatCard } from "./DashboardStatCard"

export function HomeDashboard() {
  const { answeredQuestionsCount, totalAnswers, successRate } =
    useLearningDashboardStats()

  const writtenCategory = getCategoryById("fiches-ecrites-plateau")

  const allWeakQuestionsCount = useWeakQuestionsCount(undefined, {
    includeUnanswered: true,
  })

  const writtenWeakQuestionsCount = useWeakQuestionsCount(writtenCategory?.id, {
    includeUnanswered: true,
  })

  const {
    data: trainingCalendar,
    loading: trainingCalendarLoading,
    error: trainingCalendarError,
  } = useTrainingCalendar()

  return (
    <div className="p-0 md:rounded-3xl md:border md:bg-background/75 md:p-6 md:shadow-sm md:backdrop-blur">
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">Tableau de bord</p>
            <p className="text-sm text-muted-foreground">
              Ton entraînement en un coup d'œil.
            </p>
          </div>

          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <Sparkles className="size-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <DashboardStatCard
            label="Réussite"
            value={successRate === null ? "—" : `${successRate}%`}
          />

          <DashboardStatCard label="Réponses" value={totalAnswers} />

          <DashboardStatCard
            label="Questions vues"
            value={answeredQuestionsCount}
          />

          <DashboardStatCard
            label="À travailler"
            value={allWeakQuestionsCount ?? "—"}
          />
        </div>

        <TrainingCalendarCard
          today={trainingCalendar?.today ?? []}
          tomorrow={trainingCalendar?.tomorrow ?? []}
          loading={trainingCalendarLoading}
          error={trainingCalendarError}
        />

        {writtenCategory && (
          <DailyMissionCard
            categoryId={writtenCategory.id}
            weakQuestionsCount={writtenWeakQuestionsCount}
          />
        )}
      </div>
    </div>
  )
}
