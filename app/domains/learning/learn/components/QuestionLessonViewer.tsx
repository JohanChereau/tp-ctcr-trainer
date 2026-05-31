import type { Lesson } from "~/domains/learning/types/learning"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

type QuestionLessonViewerProps = {
  lesson: Lesson
}

export function QuestionLessonViewer({ lesson }: QuestionLessonViewerProps) {
  return (
    <Accordion type="multiple" className="space-y-4">
      {lesson.questions.map((question, index) => (
        <AccordionItem
          key={question.id}
          value={question.id}
          className="overflow-hidden rounded-xl border"
        >
          {question.image && (
            <div className="border-b bg-muted/30 p-6">
              <img
                src={question.image}
                alt={question.imageAlt}
                className="mx-auto max-h-80 rounded-lg border bg-background object-contain"
              />
            </div>
          )}

          <AccordionTrigger className="px-6 text-left hover:no-underline">
            <div className="flex items-start gap-3">
              <span className="font-semibold text-muted-foreground">
                {index + 1}.
              </span>

              <span>{question.question}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-6 px-6 pb-6">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Réponse
              </p>

              <div className="rounded-md bg-muted p-3">
                {question.canonicalAnswer}
              </div>
            </div>

            {question.explanation && (
              <div className="space-y-2">
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  Explication
                </p>

                <div className="rounded-md border p-3">
                  {question.explanation}
                </div>
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
      ))}
    </Accordion>
  )
}
