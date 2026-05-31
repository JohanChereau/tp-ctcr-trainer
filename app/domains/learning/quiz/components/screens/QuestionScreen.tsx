import type { Question } from "~/domains/learning/types/learning"

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

      <AnswerInput
        value={answer}
        onChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    </>
  )
}
