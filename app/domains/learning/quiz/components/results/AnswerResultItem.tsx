import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import { CheckCircle2, Lightbulb, XCircle } from "lucide-react"

import { getQuestionExpectedAnswer } from "../../utils/getQuestionExpectedAnswer"
import { formatQuizAnswer } from "../../utils/formatQuizAnswer"

type AnswerResultItemProps = {
  answer: AnswerResult
}

export function AnswerResultItem({ answer }: AnswerResultItemProps) {
  return (
    <AccordionItem value={answer.question.id}>
      <AccordionTrigger>
        <div className="flex items-center gap-3">
          {answer.isCorrect ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <XCircle className="h-4 w-4 text-red-600" />
          )}

          <span className="text-left font-medium">
            {answer.question.question}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <div className="mt-4 space-y-6 rounded-xl border p-5">
          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Votre réponse
            </p>

            <div className="mt-2 rounded-md bg-muted p-3 font-medium">
              {formatQuizAnswer(answer.userAnswer, answer.question)}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Réponse attendue
            </p>

            <div className="mt-2 rounded-md bg-muted p-3 font-medium">
              {getQuestionExpectedAnswer(answer.question)}
            </div>
          </div>

          {answer.question.explanation && (
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />

                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  Explication
                </p>
              </div>

              <div className="rounded-md border bg-muted/30 p-3 text-sm leading-relaxed">
                {answer.question.explanation}
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
