import type { QuestionStats } from "../types"

export function getSuccessRate(stats?: QuestionStats) {
  if (!stats) {
    return 0
  }

  const totalAnswers = stats.correctCount + stats.incorrectCount

  if (totalAnswers === 0) {
    return 0
  }

  return Math.round((stats.correctCount / totalAnswers) * 100)
}
