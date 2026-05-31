import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"
import { QuizResults } from "../QuizResults"

type ResultsScreenProps = {
  score: number

  totalQuestions: number

  answers: AnswerResult[]

  failedQuestionsCount: number

  onRestart: () => void

  onRetryErrors: () => void

  onBack?: () => void
}

export function ResultsScreen({
  score,
  totalQuestions,
  answers,
  failedQuestionsCount,
  onRestart,
  onRetryErrors,
  onBack,
}: ResultsScreenProps) {
  return (
    <QuizResults
      score={score}
      totalQuestions={totalQuestions}
      failedQuestionsCount={failedQuestionsCount}
      onRestart={onRestart}
      onRetryErrors={onRetryErrors}
      answers={answers}
      onBack={onBack}
    />
  )
}
