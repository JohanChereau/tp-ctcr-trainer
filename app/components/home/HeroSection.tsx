import { Link } from "react-router"

import {
  BookOpen,
  BusFront,
  GraduationCap,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react"

import { Button } from "~/components/ui/button"

import { getCategoryById } from "~/domains/learning/data"
import { useLearningDashboardStats } from "~/domains/learning/stats/hooks/useLearningDashboardStats"
import { useWeakQuestionsCount } from "~/domains/learning/stats/hooks/useWeakQuestionsCount"
import { TrainingCalendarCard } from "~/domains/training-calendar/components/TrainingCalendarCard"
import { useTrainingCalendar } from "~/domains/training-calendar/hooks/useTrainingCalendar"

export function HeroSection() {
  const { answeredQuestionsCount, totalAnswers, successRate } =
    useLearningDashboardStats()

  const weakQuestionsCount = useWeakQuestionsCount()

  const writtenCategory = getCategoryById("fiches-ecrites-plateau")

  const {
    data: trainingCalendar,
    loading: trainingCalendarLoading,
    error: trainingCalendarError,
  } = useTrainingCalendar()

  return (
    <section className="pb-10">
      <div className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-background via-background to-muted/40 p-6 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_42%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col gap-8">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur md:text-sm">
                <BusFront className="size-4 shrink-0 text-primary" />
                <span className="line-clamp-2">
                  TP Conducteur de Transport en Commun sur Route
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl leading-[0.95] font-black tracking-tight sm:text-5xl md:text-6xl">
                  Réviser moins au hasard.
                  <span className="block text-primary">
                    Progresser pour de vrai.
                  </span>
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Fiches, quiz, examens blancs, oraux, socles, thèmes et
                  manœuvres réunis dans une seule application pour préparer le
                  TP CTCR sereinement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:mt-auto">
              <HeroFeature
                icon={BookOpen}
                title="Leçons"
                text="Tout au même endroit"
              />

              <HeroFeature
                icon={GraduationCap}
                title="Quiz"
                text="Pour s'entraîner"
              />

              <HeroFeature
                icon={Trophy}
                title="Progression"
                text="Suivi automatique"
              />
            </div>
          </div>

          <div className="rounded-3xl border bg-background/75 p-5 shadow-sm backdrop-blur md:p-6">
            <div className="space-y-5 md:space-y-6">
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
                <StatCard
                  label="Réussite"
                  value={successRate === null ? "—" : `${successRate}%`}
                />

                <StatCard label="Réponses" value={totalAnswers} />

                <StatCard
                  label="Questions vues"
                  value={answeredQuestionsCount}
                />

                <StatCard
                  label="Points faibles"
                  value={weakQuestionsCount ?? "—"}
                />
              </div>

              <TrainingCalendarCard
                today={trainingCalendar?.today ?? []}
                tomorrow={trainingCalendar?.tomorrow ?? []}
                loading={trainingCalendarLoading}
                error={trainingCalendarError}
              />

              <div className="rounded-2xl border bg-muted/30 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Target className="size-4 text-primary" />
                  <p className="text-sm font-semibold">Mission du jour</p>
                </div>

                <p className="text-sm text-muted-foreground">
                  Travaille tes points faibles sur les fiches écrites pour
                  consolider tes bases avant l'examen.
                </p>

                {writtenCategory && (
                  <Button className="mt-4 w-full" asChild>
                    <Link to={`/learning/${writtenCategory.id}/weak-questions`}>
                      Lancer la mission
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type HeroFeatureProps = {
  icon: typeof BookOpen
  title: string
  text: string
}

function HeroFeature({ icon: Icon, title, text }: HeroFeatureProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border bg-background/80 px-2 py-3 text-center backdrop-blur sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left">
      <Icon className="size-5 shrink-0 text-primary" />

      <div className="min-w-0">
        <p className="text-xs font-semibold sm:text-sm">{title}</p>
        <p className="hidden text-xs text-muted-foreground sm:block">{text}</p>
      </div>
    </div>
  )
}

type StatCardProps = {
  label: string
  value: string | number
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-4">
      <p className="text-2xl font-black tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground md:text-sm">{label}</p>
    </div>
  )
}
