import type { LearningCategory } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"

export function getCategoryMastery(category: LearningCategory) {
  const questions = category.lessons.flatMap((lesson) => lesson.questions)

  if (questions.length === 0) {
    return null
  }

  const totalRate = questions.reduce((total, question) => {
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

  return Math.round(totalRate / questions.length)
}
