import type { Lesson, Question } from "~/domains/learning/types/learning"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import { getQuestionExpectedAnswer } from "~/domains/learning/quiz/utils/getQuestionExpectedAnswer"
import { ProgressBadge } from "~/domains/learning/stats/components/ProgressBadge"
import { useQuestionStats } from "~/domains/learning/stats/hooks/useQuestionStats"
import { getProgressStatus } from "~/domains/learning/stats/utils/getProgressStatus"

type QuestionLessonViewerProps = {
  lesson: Lesson
}

export function QuestionLessonViewer({ lesson }: QuestionLessonViewerProps) {
  return (
    <Accordion type="multiple" className="space-y-4">
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

  const totalAnswers = stats ? stats.correctCount + stats.incorrectCount : 0

  const status = getProgressStatus({
    successRate: stats ? successRate : null,
    answeredCount: totalAnswers,
  })

  return (
    <AccordionItem
      value={question.id}
      className="overflow-hidden rounded-3xl border bg-background/80 shadow-sm transition-all hover:bg-background hover:shadow-md"
    >
      <AccordionTrigger className="px-5 py-5 text-left hover:no-underline md:px-6">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:gap-6">
          <div className="flex min-w-0 gap-3 md:gap-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-muted/40 text-sm font-semibold text-muted-foreground">
              {index + 1}
            </div>

            <div className="min-w-0 space-y-2">
              <span className="block text-left leading-relaxed font-medium">
                {question.question}
              </span>

              <ProgressBadge
                status={status}
                successRate={stats ? successRate : null}
                answeredCount={totalAnswers}
                labelType="question"
              />
            </div>
          </div>

          {"image" in question && question.image && (
            <div className="w-full sm:w-auto sm:shrink-0">
              <img
                src={question.image}
                alt={question.imageAlt}
                className="max-h-40 w-full rounded-xl border bg-background object-contain sm:size-24"
              />
            </div>
          )}
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-5 pb-5 md:px-6 md:pb-6">
        <div className="space-y-5">
          <QuestionInfoBlock title="Réponse" variant="muted">
            {getQuestionExpectedAnswer(question)}
          </QuestionInfoBlock>

          {question.explanation && (
            <QuestionInfoBlock title="Explication">
              {question.explanation}
            </QuestionInfoBlock>
          )}

          {question.hint && (
            <QuestionInfoBlock title="Indice">
              {question.hint}
            </QuestionInfoBlock>
          )}

          {question.tags && question.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

type QuestionInfoBlockProps = {
  title: string
  children: React.ReactNode
  variant?: "default" | "muted"
}

function QuestionInfoBlock({
  title,
  children,
  variant = "default",
}: QuestionInfoBlockProps) {
  return (
    <section className="space-y-2">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </p>

      <div
        className={
          variant === "muted"
            ? "rounded-2xl border bg-muted/40 p-4 text-sm leading-relaxed"
            : "rounded-2xl border bg-background p-4 text-sm leading-relaxed"
        }
      >
        {children}
      </div>
    </section>
  )
}
