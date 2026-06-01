import type { QuestionStats } from "../types"

export function getQuestionSuccessRate(stats?: QuestionStats) {
  if (!stats) {
    return null
  }

  const total = stats.correctCount + stats.incorrectCount

  if (total === 0) {
    return null
  }

  return Math.round((stats.correctCount / total) * 100)
}
