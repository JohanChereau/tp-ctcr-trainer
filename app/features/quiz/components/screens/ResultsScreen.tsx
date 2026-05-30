import type { AnswerResult } from "../../types/quiz"
import { QuizResults } from "../QuizResults"

type ResultsScreenProps = {
  score: number

  totalQuestions: number

  answers: AnswerResult[]

  failedQuestionsCount: number

  onRestart: () => void

  onRetryErrors: () => void
}

export function ResultsScreen({
  score,
  totalQuestions,
  answers,
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
      answers={answers}
    />
  )
}
