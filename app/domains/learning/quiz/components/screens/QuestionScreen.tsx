import { Check, SendHorizontal } from "lucide-react"

import type { Question } from "~/domains/learning/types/learning"

import { Button } from "~/components/ui/button"

import { cn } from "~/lib/utils"

import { AnswerInput } from "../AnswerInput"
import { QuestionCard } from "../QuestionCard"

type QuestionScreenProps = {
  question: Question

  answer: string

  onAnswerChange: (value: string) => void

  onSubmit: () => void
}

export function QuestionScreen({
  question,
  answer,
  onAnswerChange,
  onSubmit,
}: QuestionScreenProps) {
  function renderBinaryAnswers(firstLabel: string, secondLabel: string) {
    return (
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <AnswerOption
          label={firstLabel}
          selected={answer === "true"}
          onClick={() => onAnswerChange("true")}
        />

        <AnswerOption
          label={secondLabel}
          selected={answer === "false"}
          onClick={() => onAnswerChange("false")}
        />
      </div>
    )
  }

  function renderAnswerInput() {
    switch (question.type) {
      case "text":
        return (
          <AnswerInput
            value={answer}
            onChange={onAnswerChange}
            onSubmit={onSubmit}
          />
        )

      case "true-false":
        return renderBinaryAnswers("Vrai", "Faux")

      case "yes-no":
        return renderBinaryAnswers("Oui", "Non")

      case "single-choice":
        return (
          <div className="grid gap-2.5 sm:gap-3">
            {question.options.map((option) => (
              <AnswerOption
                key={option}
                label={option}
                selected={answer === option}
                onClick={() => onAnswerChange(option)}
              />
            ))}
          </div>
        )

      case "multiple-choice": {
        const selectedOptions = answer ? (JSON.parse(answer) as string[]) : []

        return (
          <div className="grid gap-2.5 sm:gap-3">
            {question.options.map((option) => {
              const selected = selectedOptions.includes(option)

              return (
                <AnswerOption
                  key={option}
                  label={option}
                  selected={selected}
                  onClick={() => {
                    const nextSelection = selected
                      ? selectedOptions.filter((item) => item !== option)
                      : [...selectedOptions, option]

                    onAnswerChange(JSON.stringify(nextSelection))
                  }}
                />
              )
            })}
          </div>
        )
      }

      default:
        return null
    }
  }

  function getAnswerInstruction() {
    switch (question.type) {
      case "multiple-choice":
        return "Plusieurs réponses peuvent être sélectionnées"

      case "single-choice":
        return "Sélectionnez la réponse qui vous semble correcte"

      case "true-false":
        return "Sélectionnez la bonne affirmation"

      case "yes-no":
        return "Sélectionnez la bonne réponse"

      case "text":
        return "Saisissez votre réponse dans le champ ci-dessous"

      default:
        return ""
    }
  }

  const requiresValidationButton =
    question.type === "true-false" ||
    question.type === "yes-no" ||
    question.type === "single-choice" ||
    question.type === "multiple-choice"

  const answerInstruction = getAnswerInstruction()

  return (
    <div className="space-y-4 sm:space-y-5">
      <QuestionCard question={question} />

      <section className="space-y-4 rounded-2xl border bg-background/80 p-3 shadow-sm sm:rounded-3xl sm:p-6">
        <div className="flex flex-col gap-1 px-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-bold tracking-tight sm:text-base">
            Votre réponse
          </h3>

          {answerInstruction && (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {answerInstruction}
            </p>
          )}
        </div>

        {renderAnswerInput()}

        {requiresValidationButton && (
          <Button
            size="lg"
            disabled={!answer}
            onClick={onSubmit}
            className="h-11 w-full rounded-xl sm:h-12"
          >
            <SendHorizontal className="size-4" />
            Valider ma réponse
          </Button>
        )}
      </section>
    </div>
  )
}

type AnswerOptionProps = {
  label: string

  selected: boolean

  onClick: () => void
}

function AnswerOption({ label, selected, onClick }: AnswerOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "group flex min-h-13 w-full items-center gap-3 rounded-xl border bg-background/70 px-4 py-3 text-left shadow-xs transition-all",
        "sm:min-h-16 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4",
        "hover:border-foreground/20 hover:bg-background hover:shadow-sm",
        "sm:hover:-translate-y-0.5",
        "focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none",
        selected &&
          "border-primary/40 bg-primary/5 shadow-sm ring-1 ring-primary/20"
      )}
    >
      <span
        className={cn(
          "min-w-0 flex-1 text-sm leading-relaxed font-medium sm:text-base",
          selected && "text-foreground"
        )}
      >
        {label}
      </span>

      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all sm:size-6",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-transparent group-hover:border-foreground/30"
        )}
      >
        <Check className="size-3 sm:size-3.5" />
      </span>
    </button>
  )
}
