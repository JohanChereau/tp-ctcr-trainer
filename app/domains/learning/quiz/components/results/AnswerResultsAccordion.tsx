import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"

import { Accordion } from "~/components/ui/accordion"

import { AnswerResultItem } from "./AnswerResultItem"

type AnswerResultsAccordionProps = {
  answers: AnswerResult[]
}

export function AnswerResultsAccordion({
  answers,
}: AnswerResultsAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {answers.map((answer) => (
        <AnswerResultItem key={answer.question.id} answer={answer} />
      ))}
    </Accordion>
  )
}
