import { BookOpen, CircleCheckBig } from "lucide-react"

import { Progress } from "~/components/ui/progress"

type QuizHeaderProps = {
  title: string

  currentQuestion: number

  totalQuestions: number
}

export function QuizHeader({
  title,
  currentQuestion,
  totalQuestions,
}: QuizHeaderProps) {
  const displayedQuestion = Math.min(currentQuestion + 1, totalQuestions)

  const progress =
    totalQuestions === 0 ? 0 : (displayedQuestion / totalQuestions) * 100

  return (
    <header className="space-y-4 sm:space-y-6">
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium shadow-xs sm:px-4 sm:py-2 sm:text-sm">
          <BookOpen className="size-3.5 text-primary sm:size-4" />
          Quiz
        </div>

        <div className="flex flex-col justify-between gap-3 sm:gap-4 md:flex-row md:items-end">
          <div className="space-y-2">
            <h1 className="text-2xl leading-tight font-black tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sélectionnez votre réponse puis validez pour découvrir la
              correction.
            </p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:px-4 sm:py-2 sm:text-sm md:self-auto">
            <CircleCheckBig className="size-3.5 sm:size-4" />

            <span>
              Question {displayedQuestion} sur {totalQuestions}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-background/80 p-3 shadow-xs sm:rounded-2xl sm:p-4">
        <div className="mb-2 flex items-center justify-between px-0.5 text-xs font-medium text-muted-foreground">
          <span>Progression</span>
          <span>{Math.round(progress)} %</span>
        </div>

        <Progress value={progress} className="h-2 sm:h-2.5" />
      </div>
    </header>
  )
}
