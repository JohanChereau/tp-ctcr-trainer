import type { Lesson } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"

export function getLessonSuccessRate(lesson: Lesson) {
  let correctAnswers = 0

  let totalAnswers = 0

  for (const question of lesson.questions) {
    const stats = getQuestionStats(question.id)

    if (!stats) {
      continue
    }

    correctAnswers += stats.correctCount

    totalAnswers += stats.correctCount + stats.incorrectCount
  }

  if (totalAnswers === 0) {
    return null
  }

  return Math.round((correctAnswers / totalAnswers) * 100)
}
