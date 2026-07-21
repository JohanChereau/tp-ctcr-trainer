import { useState } from "react"

import {
  ArrowLeft,
  ChevronDown,
  ClipboardList,
  Medal,
  RefreshCcw,
  RotateCcw,
  Target,
  TriangleAlert,
  Trophy,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

import { Button } from "~/components/ui/button"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"

import { cn } from "~/lib/utils"

import { AnswerResultsAccordion } from "./results/AnswerResultsAccordion"

import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"

type QuizResultsProps = {
  score: number

  totalQuestions: number

  failedQuestionsCount: number

  answers: AnswerResult[]

  onRestart: () => void

  onRetryErrors: () => void

  onBack?: () => void
}

export function QuizResults({
  score,
  totalQuestions,
  answers,
  failedQuestionsCount,
  onRestart,
  onRetryErrors,
  onBack,
}: QuizResultsProps) {
  const [areDetailsOpen, setAreDetailsOpen] = useState(false)

  const percentage =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100)

  const resultContent = getResultContent(percentage)
  const ResultIcon = resultContent.icon

  return (
    <article className="relative overflow-hidden rounded-2xl border bg-background/80 shadow-sm sm:rounded-3xl">
      <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-primary/10 to-transparent opacity-80 sm:h-64" />

      <div className="relative space-y-6 p-4 sm:space-y-8 sm:p-8 md:p-10">
        <header className="flex items-start justify-between gap-4 sm:gap-6">
          <div className="min-w-0 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-2 text-xs font-medium shadow-xs sm:px-4 sm:text-sm">
              <Trophy className="size-4 text-primary" />
              Quiz terminé
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl leading-tight font-black tracking-tight sm:text-4xl">
                {resultContent.title}
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-xl sm:text-base">
                {resultContent.description}
              </p>
            </div>
          </div>

          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-xl border sm:size-20 sm:rounded-2xl",
              resultContent.iconClassName
            )}
          >
            <ResultIcon className="size-6 sm:size-10" />
          </div>
        </header>

        <section className="relative overflow-hidden rounded-2xl border bg-background/70 p-5 shadow-xs sm:rounded-3xl sm:p-8">
          <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:text-sm">
                Votre score
              </p>

              <div className="flex items-end gap-2 sm:gap-3">
                <p className="text-5xl leading-none font-black tracking-tight sm:text-7xl">
                  {score}
                </p>

                <p className="pb-1 text-lg font-bold text-muted-foreground sm:text-2xl">
                  / {totalQuestions}
                </p>
              </div>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                {percentage} %
              </p>

              <p className="hidden text-sm text-muted-foreground min-[380px]:block">
                de bonnes réponses
              </p>
            </div>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-muted sm:mt-6 sm:h-3">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 sm:gap-4">
          <ResultStatCard
            icon={Target}
            label="Réussites"
            value={score}
            description={`${percentage} % des questions`}
            className="border-green-600/20 bg-green-500/5"
            iconClassName="border-green-600/20 bg-green-500/10 text-green-600"
          />

          <ResultStatCard
            icon={TriangleAlert}
            label="Erreurs"
            value={failedQuestionsCount}
            description={
              failedQuestionsCount === 0
                ? "Aucune erreur"
                : `${failedQuestionsCount} question${
                    failedQuestionsCount > 1 ? "s" : ""
                  } à revoir`
            }
            className="border-orange-500/20 bg-orange-500/5"
            iconClassName="border-orange-500/20 bg-orange-500/10 text-orange-600"
          />
        </section>

        <Collapsible
          open={areDetailsOpen}
          onOpenChange={setAreDetailsOpen}
          className="space-y-3 sm:space-y-4"
        >
          <CollapsibleTrigger className="group flex w-full items-center justify-between gap-3 rounded-2xl border bg-background/70 p-4 text-left shadow-xs transition-all hover:bg-muted/30 sm:gap-4 sm:p-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border bg-muted/40 text-muted-foreground sm:size-10">
                <ClipboardList className="size-4 sm:size-5" />
              </div>

              <div className="min-w-0">
                <p className="font-bold tracking-tight">Détails des réponses</p>

                <p className="hidden text-sm text-muted-foreground min-[360px]:block">
                  Consultez la correction des {answers.length} question
                  {answers.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                areDetailsOpen && "rotate-180"
              )}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <AnswerResultsAccordion answers={answers} />
          </CollapsibleContent>
        </Collapsible>

        <section className="grid gap-3 sm:grid-cols-2">
          <Button
            size="lg"
            onClick={onRestart}
            className="h-11 rounded-xl sm:col-span-2 sm:h-12"
          >
            <RotateCcw className="size-4" />
            Refaire le quiz
          </Button>

          {failedQuestionsCount > 0 && (
            <Button
              variant="secondary"
              size="lg"
              onClick={onRetryErrors}
              className="h-11 rounded-xl sm:h-12"
            >
              <RefreshCcw className="size-4" />
              Réviser mes erreurs
            </Button>
          )}

          {onBack && (
            <Button
              variant="outline"
              size="lg"
              onClick={onBack}
              className={cn(
                "h-11 rounded-xl sm:h-12",
                failedQuestionsCount === 0 && "sm:col-span-2"
              )}
            >
              <ArrowLeft className="size-4" />
              Retour
            </Button>
          )}
        </section>
      </div>
    </article>
  )
}

type ResultStatCardProps = {
  icon: LucideIcon

  label: string

  value: number

  description: string

  className?: string

  iconClassName?: string
}

function ResultStatCard({
  icon: Icon,
  label,
  value,
  description,
  className,
  iconClassName,
}: ResultStatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 rounded-2xl border p-4 shadow-xs sm:flex-row sm:items-center sm:gap-4 sm:p-5",
        className
      )}
    >
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl border sm:size-12 sm:rounded-2xl",
          iconClassName
        )}
      >
        <Icon className="size-5 sm:size-6" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">
          {label}
        </p>

        <p className="text-xl font-black tracking-tight sm:text-2xl">{value}</p>

        <p className="text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

function getResultContent(percentage: number) {
  if (percentage === 100) {
    return {
      title: "Sans faute, magnifique !",
      description:
        "Vous maîtrisez parfaitement ce questionnaire. Rien à signaler, le car peut repartir.",
      icon: Trophy,
      iconClassName: "border-yellow-500/20 bg-yellow-500/10 text-yellow-600",
    }
  }

  if (percentage >= 80) {
    return {
      title: "Excellent résultat !",
      description:
        "Les connaissances sont très bien maîtrisées. Quelques révisions ciblées suffiront pour atteindre le sans-faute.",
      icon: Medal,
      iconClassName: "border-green-600/20 bg-green-500/10 text-green-600",
    }
  }

  if (percentage >= 60) {
    return {
      title: "C’est une bonne base",
      description:
        "Le principal est acquis. Prenez quelques minutes pour revoir vos erreurs et consolider les points plus fragiles.",
      icon: Target,
      iconClassName: "border-primary/20 bg-primary/10 text-primary",
    }
  }

  return {
    title: "Encore un petit effort",
    description:
      "Certaines notions méritent d’être retravaillées. Révisez vos erreurs, puis retentez le quiz pour mesurer votre progression.",
    icon: RefreshCcw,
    iconClassName: "border-orange-500/20 bg-orange-500/10 text-orange-600",
  }
}
