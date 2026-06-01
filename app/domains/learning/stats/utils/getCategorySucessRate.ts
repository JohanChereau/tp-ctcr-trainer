import type { LearningCategory } from "~/domains/learning/types/learning"

import { getLessonSuccessRate } from "./getLessonSuccessRate"

export function getCategorySuccessRate(category: LearningCategory) {
  const rates = category.lessons
    .map(getLessonSuccessRate)
    .filter((rate): rate is number => rate !== null)

  if (rates.length === 0) {
    return null
  }

  return Math.round(
    rates.reduce((total, rate) => total + rate, 0) / rates.length
  )
}
