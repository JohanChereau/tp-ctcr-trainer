import type { Question } from "~/domains/learning/types/learning"

import { Button } from "~/components/ui/button"

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
  function renderAnswerInput() {
    switch (question.type) {
      case "text":
      case "image":
        return (
          <AnswerInput
            value={answer}
            onChange={onAnswerChange}
            onSubmit={onSubmit}
          />
        )

      case "true-false":
        return (
          <div className="flex gap-4">
            <Button
              variant={answer === "true" ? "default" : "outline"}
              onClick={() => onAnswerChange("true")}
              className="flex-1"
            >
              Vrai
            </Button>

            <Button
              variant={answer === "false" ? "default" : "outline"}
              onClick={() => onAnswerChange("false")}
              className="flex-1"
            >
              Faux
            </Button>
          </div>
        )

      case "yes-no":
        return (
          <div className="flex gap-4">
            <Button
              variant={answer === "true" ? "default" : "outline"}
              onClick={() => onAnswerChange("true")}
              className="flex-1"
            >
              Oui
            </Button>

            <Button
              variant={answer === "false" ? "default" : "outline"}
              onClick={() => onAnswerChange("false")}
              className="flex-1"
            >
              Non
            </Button>
          </div>
        )

      case "single-choice":
        return (
          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <Button
                key={option}
                variant={answer === option ? "default" : "outline"}
                onClick={() => onAnswerChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )

      case "multiple-choice":
        const selectedOptions = answer ? (JSON.parse(answer) as string[]) : []

        return (
          <div className="flex flex-col gap-3">
            {question.options.map((option) => {
              const selected = selectedOptions.includes(option)

              return (
                <Button
                  key={option}
                  variant={selected ? "default" : "outline"}
                  onClick={() => {
                    const nextSelection = selected
                      ? selectedOptions.filter((item) => item !== option)
                      : [...selectedOptions, option]

                    onAnswerChange(JSON.stringify(nextSelection))
                  }}
                >
                  {option}
                </Button>
              )
            })}
          </div>
        )

      default:
        return null
    }
  }

  const requiresValidationButton =
    question.type === "true-false" ||
    question.type === "yes-no" ||
    question.type === "single-choice" ||
    question.type === "multiple-choice"

  return (
    <>
      <QuestionCard question={question} />

      {renderAnswerInput()}

      {requiresValidationButton && answer && (
        <Button onClick={onSubmit}>Valider</Button>
      )}
    </>
  )
}
