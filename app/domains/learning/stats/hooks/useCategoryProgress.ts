import { useEffect, useState } from "react"

import type { LearningCategory } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"
import { getCategoryMastery } from "../utils/getCategoryMastery"
import { getProgressStatus } from "../utils/getProgressStatus"

type CategoryProgress = {
  successRate: number | null
  answeredQuestionsCount: number
  totalQuestionsCount: number
  status: ReturnType<typeof getProgressStatus>
}

export function useCategoryProgress(category: LearningCategory) {
  const totalQuestionsCount = category.lessons.reduce(
    (total, lesson) => total + lesson.questions.length,
    0
  )

  const [progress, setProgress] = useState<CategoryProgress>({
    successRate: null,
    answeredQuestionsCount: 0,
    totalQuestionsCount,
    status: "not-started",
  })

  useEffect(() => {
    const questions = category.lessons.flatMap((lesson) => lesson.questions)

    const answeredQuestionsCount = questions.filter((question) => {
      const stats = getQuestionStats(question.id)

      if (!stats) {
        return false
      }

      return stats.correctCount + stats.incorrectCount > 0
    }).length

    const successRate =
      answeredQuestionsCount === 0 ? null : getCategoryMastery(category)

    const status = getProgressStatus({
      successRate,
      answeredCount: answeredQuestionsCount,
      minAnswersForMastery: totalQuestionsCount,
    })

    setProgress({
      successRate,
      answeredQuestionsCount,
      totalQuestionsCount,
      status,
    })
  }, [category, totalQuestionsCount])

  return progress
}
