import type { LearningCategory } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"

export function getCategoryMastery(category: LearningCategory) {
  let correctAnswers = 0

  let incorrectAnswers = 0

  category.lessons.forEach((lesson) => {
    lesson.questions.forEach((question) => {
      const stats = getQuestionStats(question.id)

      if (!stats) {
        return
      }

      correctAnswers += stats.correctCount

      incorrectAnswers += stats.incorrectCount
    })
  })

  const totalAnswers = correctAnswers + incorrectAnswers

  if (totalAnswers === 0) {
    return null
  }

  return Math.round((correctAnswers / totalAnswers) * 100)
}
