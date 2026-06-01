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
  return (
    <>
      <QuestionCard question={question} />

      {question.type === "true-false" ? (
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
      ) : (
        <AnswerInput
          value={answer}
          onChange={onAnswerChange}
          onSubmit={onSubmit}
        />
      )}

      {question.type === "true-false" && answer && (
        <Button onClick={onSubmit}>Valider</Button>
      )}
    </>
  )
}
