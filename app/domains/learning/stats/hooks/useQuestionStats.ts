import { useEffect, useState } from "react"

import type { QuestionStats } from "../types"

import { getQuestionStats } from "../storage"
import { getSuccessRate } from "../utils/getSuccessRate"

type QuestionStatsState = {
  stats: QuestionStats | undefined
  successRate: number
}

export function useQuestionStats(questionId: string) {
  const [state, setState] = useState<QuestionStatsState>({
    stats: undefined,
    successRate: 0,
  })

  useEffect(() => {
    const stats = getQuestionStats(questionId)

    setState({
      stats,
      successRate: getSuccessRate(stats),
    })
  }, [questionId])

  return state
}
