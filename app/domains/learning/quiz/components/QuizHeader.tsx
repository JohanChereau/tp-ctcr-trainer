import { BookOpen } from "lucide-react"

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
  const progress =
    totalQuestions === 0 ? 0 : ((currentQuestion + 1) / totalQuestions) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
          <BookOpen className="size-6 text-primary" />
        </div>

        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {currentQuestion + 1} sur {totalQuestions} questions
          </p>
        </div>
      </div>

      <Progress value={progress} />
    </div>
  )
}
