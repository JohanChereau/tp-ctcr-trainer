import { useMemo, useState } from "react"

import { CheckCircle2, ListChecks, XCircle } from "lucide-react"

import { Accordion } from "~/components/ui/accordion"
import { Button } from "~/components/ui/button"

import { cn } from "~/lib/utils"

import { AnswerResultItem } from "./AnswerResultItem"

import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"

type AnswerResultsAccordionProps = {
  answers: AnswerResult[]
}

type AnswerFilter = "all" | "errors"

export function AnswerResultsAccordion({
  answers,
}: AnswerResultsAccordionProps) {
  const failedAnswersCount = answers.filter(
    (answer) => !answer.isCorrect
  ).length

  const [filter, setFilter] = useState<AnswerFilter>(
    failedAnswersCount > 0 ? "errors" : "all"
  )

  const displayedAnswers = useMemo(() => {
    if (filter === "errors") {
      return answers.filter((answer) => !answer.isCorrect)
    }

    return answers
  }, [answers, filter])

  return (
    <div className="space-y-4">
      {failedAnswersCount > 0 && (
        <div className="grid grid-cols-2 gap-2 rounded-xl border bg-muted/20 p-1">
          <FilterButton
            active={filter === "errors"}
            icon={XCircle}
            label="Mes erreurs"
            count={failedAnswersCount}
            onClick={() => setFilter("errors")}
          />

          <FilterButton
            active={filter === "all"}
            icon={ListChecks}
            label="Toutes"
            count={answers.length}
            onClick={() => setFilter("all")}
          />
        </div>
      )}

      <Accordion
        type="multiple"
        className="overflow-hidden rounded-xl border bg-background/50"
      >
        {displayedAnswers.map((answer, index) => (
          <AnswerResultItem
            key={answer.question.id}
            answer={answer}
            questionNumber={
              answers.findIndex(
                (item) => item.question.id === answer.question.id
              ) + 1
            }
            isLast={index === displayedAnswers.length - 1}
          />
        ))}
      </Accordion>

      {displayedAnswers.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed p-8 text-center">
          <div className="flex size-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
            <CheckCircle2 className="size-5" />
          </div>

          <div>
            <p className="font-semibold">Aucune erreur à afficher</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Toutes les réponses sont correctes.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

type FilterButtonProps = {
  active: boolean

  icon: typeof XCircle

  label: string

  count: number

  onClick: () => void
}

function FilterButton({
  active,
  icon: Icon,
  label,
  count,
  onClick,
}: FilterButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-10 justify-center gap-2 rounded-lg px-2 text-xs sm:text-sm",
        active && "bg-background text-foreground shadow-xs hover:bg-background"
      )}
    >
      <Icon className="size-4" />

      <span>{label}</span>

      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
          active
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"
        )}
      >
        {count}
      </span>
    </Button>
  )
}
