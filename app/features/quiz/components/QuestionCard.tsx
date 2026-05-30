import type { Question } from "~/domains/learning/types/learning"

import { Card, CardContent } from "~/components/ui/card"

import { HintCard } from "./HintCard"

type QuestionCardProps = {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-8 md:p-10">
        <div className="space-y-8">
          {question.image && (
            <div className="overflow-hidden rounded-2xl border bg-muted">
              <img
                src={question.image}
                alt={question.imageAlt ?? question.question}
                className="max-h-80 w-full object-contain"
              />
            </div>
          )}

          <h2 className="text-2xl leading-relaxed font-semibold tracking-tight md:text-3xl">
            {question.question}
          </h2>

          {question.hint && (
            <div className="mt-6">
              <HintCard hint={question.hint} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
