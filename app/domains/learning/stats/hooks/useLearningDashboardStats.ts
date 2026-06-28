import { useEffect, useState } from "react"

import { getAllQuestionStats } from "../storage"

type LearningDashboardStats = {
  answeredQuestionsCount: number
  totalAnswers: number
  successRate: number | null
}

const initialStats: LearningDashboardStats = {
  answeredQuestionsCount: 0,
  totalAnswers: 0,
  successRate: null,
}

function computeDashboardStats(): LearningDashboardStats {
  const questionStats = getAllQuestionStats()

  const totalCorrect = questionStats.reduce(
    (total, stat) => total + stat.correctCount,
    0
  )

  const totalIncorrect = questionStats.reduce(
    (total, stat) => total + stat.incorrectCount,
    0
  )

  const totalAnswers = totalCorrect + totalIncorrect

  return {
    answeredQuestionsCount: questionStats.length,
    totalAnswers,
    successRate:
      totalAnswers === 0
        ? null
        : Math.round((totalCorrect / totalAnswers) * 100),
  }
}

export function useLearningDashboardStats() {
  const [stats, setStats] = useState<LearningDashboardStats>(initialStats)

  useEffect(() => {
    setStats(computeDashboardStats())
  }, [])

  return stats
}
