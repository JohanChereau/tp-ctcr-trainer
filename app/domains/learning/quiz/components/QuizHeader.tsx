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
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <BookOpen className="size-6 text-primary" />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

          <p className="text-sm text-muted-foreground">
            {currentQuestion + 1} sur {totalQuestions} questions
          </p>
        </div>
      </div>

      <Progress value={progress} />
    </div>
  )
}
