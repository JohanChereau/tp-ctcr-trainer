import type { Question } from "~/domains/learning/types/learning"

export type QuizMode = "training" | "exam"

export type QuizState = "question" | "correction" | "results"

export type QuizPlayerProps = {
  title: string

  questions: Question[]

  mode?: QuizMode
}

export type QuizResult = {
  score: number

  totalQuestions: number

  failedQuestions: Question[]
}
