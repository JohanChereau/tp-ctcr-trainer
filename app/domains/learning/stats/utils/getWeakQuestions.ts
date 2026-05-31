import { getAllQuestions } from "~/domains/learning/data"

import { getQuestionStats } from "../storage"

type GetWeakQuestionsOptions = {
  categoryId?: string

  maxSuccessRate?: number
}

export function getWeakQuestions({
  categoryId,

  maxSuccessRate = 70,
}: GetWeakQuestionsOptions = {}) {
  return getAllQuestions().filter((item) => {
    if (categoryId && item.categoryId !== categoryId) {
      return false
    }

    const stats = getQuestionStats(item.question.id)

    if (!stats) {
      return false
    }

    const total = stats.correctCount + stats.incorrectCount

    if (total === 0) {
      return false
    }

    const successRate = (stats.correctCount / total) * 100

    return successRate < maxSuccessRate
  })
}
