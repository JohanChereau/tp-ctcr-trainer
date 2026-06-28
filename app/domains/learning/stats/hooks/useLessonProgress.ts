import { useEffect, useState } from "react"

import type { Lesson } from "~/domains/learning/types/learning"

import { getQuestionStats } from "../storage"
import { getLessonSuccessRate } from "../utils/getLessonSuccessRate"
import { getProgressStatus } from "../utils/getProgressStatus"

type LessonProgress = {
  successRate: number | null
  answeredQuestionsCount: number
  status: ReturnType<typeof getProgressStatus>
}

export function useLessonProgress(lesson: Lesson) {
  const [progress, setProgress] = useState<LessonProgress>({
    successRate: null,
    answeredQuestionsCount: 0,
    status: "not-started",
  })

  useEffect(() => {
    const answeredQuestionsCount = lesson.questions.filter((question) => {
      const stats = getQuestionStats(question.id)

      if (!stats) {
        return false
      }

      return stats.correctCount + stats.incorrectCount > 0
    }).length

    const successRate =
      answeredQuestionsCount === 0 ? null : getLessonSuccessRate(lesson)

    const status = getProgressStatus({
      successRate,
      answeredCount: answeredQuestionsCount,
    })

    setProgress({
      successRate,
      answeredQuestionsCount,
      status,
    })
  }, [lesson])

  return progress
}
