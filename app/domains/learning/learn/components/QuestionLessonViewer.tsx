import type { Question } from "~/domains/learning/types/learning"
import type { Lesson } from "~/domains/learning/types/learning"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import { getQuestionExpectedAnswer } from "~/domains/learning/quiz/utils/getQuestionExpectedAnswer"
import { useQuestionStats } from "~/domains/learning/stats/hooks/useQuestionStats"

type QuestionLessonViewerProps = {
  lesson: Lesson
}

export function QuestionLessonViewer({ lesson }: QuestionLessonViewerProps) {
  return (
    <Accordion type="multiple" className="space-y-5">
      {lesson.questions.map((question, index) => (
        <QuestionAccordionItem
          key={question.id}
          question={question}
          index={index}
        />
      ))}
    </Accordion>
  )
}

type QuestionAccordionItemProps = {
  question: Question
  index: number
}

function QuestionAccordionItem({
  question,
  index,
}: QuestionAccordionItemProps) {
  const { stats, successRate } = useQuestionStats(question.id)

  return (
    <AccordionItem
      value={question.id}
      className="overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
        <div className="flex w-full items-start justify-between gap-6">
          <div className="flex min-w-0 gap-3">
            <span className="font-semibold text-muted-foreground">
              {index + 1}.
            </span>

            <div className="min-w-0 space-y-2">
              <span className="block text-left">{question.question}</span>

              <QuestionSuccessBadge stats={stats} successRate={successRate} />
            </div>
          </div>

          {"image" in question && question.image && (
            <img
              src={question.image}
              alt={question.imageAlt}
              className="h-20 w-20 shrink-0 rounded-md border bg-background object-contain md:h-24 md:w-24"
            />
          )}
        </div>
      </AccordionTrigger>

      <AccordionContent className="space-y-6 px-6 pb-6">
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Réponse
          </p>

          <div className="rounded-md bg-muted p-3">
            {getQuestionExpectedAnswer(question)}
          </div>
        </div>

        {question.explanation && (
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Explication
            </p>

            <div className="rounded-md border p-3">{question.explanation}</div>
          </div>
        )}

        {question.hint && (
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Indice
            </p>

            <div className="rounded-md border p-3">{question.hint}</div>
          </div>
        )}

        {question.tags && question.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  )
}

type QuestionSuccessBadgeProps = {
  stats: ReturnType<typeof useQuestionStats>["stats"]
  successRate: number
}

function QuestionSuccessBadge({
  stats,
  successRate,
}: QuestionSuccessBadgeProps) {
  if (!stats) {
    return (
      <span className="inline-flex w-fit items-center rounded-full border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
        Jamais faite
      </span>
    )
  }

  const totalAnswers = stats.correctCount + stats.incorrectCount

  if (successRate < 70) {
    return (
      <span className="inline-flex w-fit items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700">
        À retravailler · {successRate}% · {totalAnswers} essai
        {totalAnswers > 1 ? "s" : ""}
      </span>
    )
  }

  if (successRate < 90) {
    return (
      <span className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
        Correct · {successRate}% · {totalAnswers} essai
        {totalAnswers > 1 ? "s" : ""}
      </span>
    )
  }

  return (
    <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
      Maîtrisée · {successRate}% · {totalAnswers} essai
      {totalAnswers > 1 ? "s" : ""}
    </span>
  )
}
