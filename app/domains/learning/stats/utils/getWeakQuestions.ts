import { getAllQuestions } from "~/domains/learning/data"

import { getQuestionStats } from "../storage"

type GetWeakQuestionsOptions = {
  categoryId?: string
  maxSuccessRate?: number
  includeUnanswered?: boolean
}

export function getWeakQuestions({
  categoryId,
  maxSuccessRate = 70,
  includeUnanswered = true,
}: GetWeakQuestionsOptions = {}) {
  return getAllQuestions().filter((item) => {
    if (categoryId && item.categoryId !== categoryId) {
      return false
    }

    const stats = getQuestionStats(item.question.id)

    if (!stats) {
      return includeUnanswered
    }

    const totalAnswers = stats.correctCount + stats.incorrectCount

    if (totalAnswers === 0) {
      return includeUnanswered
    }

    const successRate = (stats.correctCount / totalAnswers) * 100

    return successRate < maxSuccessRate
  })
}
