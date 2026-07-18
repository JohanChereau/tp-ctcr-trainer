import { HelpCircle } from "lucide-react"

import type { Question } from "~/domains/learning/types/learning"

import { HintCard } from "./HintCard"

type QuestionCardProps = {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border bg-background/80 shadow-sm sm:rounded-3xl">
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-muted/60 to-transparent opacity-80 sm:h-32" />

      <div className="relative space-y-5 p-4 sm:space-y-6 sm:p-8 md:space-y-8 md:p-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border bg-muted/40 text-muted-foreground sm:size-11 sm:rounded-2xl">
              <HelpCircle className="size-4 sm:size-5" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase sm:text-xs">
                Votre question
              </p>

              <p className="mt-0.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                Une ou plusieurs réponses peuvent être attendues selon le type
                de question.
              </p>
            </div>
          </div>

          <details className="group relative sm:hidden">
            <summary
              aria-label="Afficher les informations sur le type de réponse"
              className="flex size-8 cursor-pointer list-none items-center justify-center rounded-full border bg-background/70 text-sm font-bold text-muted-foreground shadow-xs transition-colors hover:bg-muted"
            >
              ?
            </summary>

            <div className="absolute top-10 right-0 z-10 w-64 rounded-xl border bg-popover p-3 text-xs leading-relaxed text-popover-foreground shadow-lg">
              Une ou plusieurs réponses peuvent être attendues selon le type de
              question.
            </div>
          </details>
        </div>

        {question.image && (
          <div className="overflow-hidden rounded-xl border bg-muted/30 p-2 sm:rounded-2xl">
            <img
              src={question.image}
              alt={question.imageAlt ?? question.question}
              className="max-h-72 w-full rounded-lg object-contain sm:max-h-96 sm:rounded-xl"
            />
          </div>
        )}

        <h2 className="max-w-3xl text-xl leading-snug font-black tracking-tight sm:text-2xl sm:leading-relaxed md:text-3xl">
          {question.question}
        </h2>

        {question.hint && <HintCard hint={question.hint} />}
      </div>
    </article>
  )
}
