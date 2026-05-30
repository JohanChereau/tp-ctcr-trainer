import { QuizResults } from "../QuizResults"

type ResultsScreenProps = {
  score: number

  totalQuestions: number

  failedQuestionsCount: number

  onRestart: () => void

  onRetryErrors: () => void
}

export function ResultsScreen({
  score,
  totalQuestions,
  failedQuestionsCount,
  onRestart,
  onRetryErrors,
}: ResultsScreenProps) {
  return (
    <QuizResults
      score={score}
      totalQuestions={totalQuestions}
      failedQuestionsCount={failedQuestionsCount}
      onRestart={onRestart}
      onRetryErrors={onRetryErrors}
    />
  )
}
