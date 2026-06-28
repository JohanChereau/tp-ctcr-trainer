import { useEffect, useState } from "react"

import type { Question } from "~/domains/learning/types/learning"

import { getWeakQuestions } from "../utils/getWeakQuestions"

type UseWeakQuestionsOptions = {
  categoryId?: string
  maxSuccessRate?: number
  includeUnanswered?: boolean
}

export function useWeakQuestions({
  categoryId,
  maxSuccessRate = 70,
  includeUnanswered = true,
}: UseWeakQuestionsOptions = {}) {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    const weakQuestions = getWeakQuestions({
      categoryId,
      maxSuccessRate,
      includeUnanswered,
    }).map((item) => item.question)

    setQuestions(weakQuestions)
  }, [categoryId, maxSuccessRate, includeUnanswered])

  return questions
}
