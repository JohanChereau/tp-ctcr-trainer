import type { Question } from "~/domains/learning/types/learning"

export type QuizMode = "training" | "exam"

export type QuizState = "question" | "correction" | "results"

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

export type QuizResult = {
  score: number

  totalQuestions: number

  failedQuestions: Question[]
}
