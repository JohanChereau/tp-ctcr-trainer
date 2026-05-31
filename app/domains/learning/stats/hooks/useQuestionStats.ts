import { useMemo } from "react"

import { getQuestionStats } from "../storage"

import { getSuccessRate } from "../utils/getSuccessRate"

export function useQuestionStats(questionId: string) {
  return useMemo(() => {
    const stats = getQuestionStats(questionId)

    return {
      stats,

      successRate: getSuccessRate(stats),
    }
  }, [questionId])
}
