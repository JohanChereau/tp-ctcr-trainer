import type { Question } from "~/domains/learning/types/learning"

export type QuizMode = "training" | "exam"

export type QuizState = "question" | "correction" | "results"

export const DEFAULT_EXAM_DURATION = 360

export type QuizConfig = {
  mode: QuizMode

  questionCount?: number

  shuffleQuestions?: boolean

  durationInSeconds?: number
}

export type QuizPlayerProps = {
  title: string

  questions: Question[]

  config?: QuizConfig
}

export type AnswerResult = {
  question: Question

  userAnswer: string

  isCorrect: boolean
}

export type QuizResult = {
  score: number

  totalQuestions: number

  failedQuestions: Question[]
}
