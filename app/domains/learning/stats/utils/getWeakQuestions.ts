import { getAllQuestionStats } from "../storage"

export function getWeakQuestionIds(maxSuccessRate = 70) {
  return getAllQuestionStats()
    .filter((stat) => {
      const total = stat.correctCount + stat.incorrectCount

      if (total === 0) {
        return false
      }

      const successRate = (stat.correctCount / total) * 100

      return successRate < maxSuccessRate
    })
    .map((stat) => stat.questionId)
}
