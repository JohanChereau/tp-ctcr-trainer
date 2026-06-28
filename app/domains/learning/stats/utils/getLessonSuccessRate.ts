import type { Lesson } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"

export function getLessonSuccessRate(lesson: Lesson) {
  if (lesson.questions.length === 0) {
    return null
  }

  const totalRate = lesson.questions.reduce((total, question) => {
    const stats = getQuestionStats(question.id)

    if (!stats) {
      return total
    }

    const totalAnswers = stats.correctCount + stats.incorrectCount

    if (totalAnswers === 0) {
      return total
    }

    return total + (stats.correctCount / totalAnswers) * 100
  }, 0)

  return Math.round(totalRate / lesson.questions.length)
}
