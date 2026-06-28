import { useEffect, useState } from "react"

import type { Lesson } from "~/domains/learning/types/learning"

import { getLessonSuccessRate } from "../utils/getLessonSuccessRate"

export function useLessonSuccessRate(lesson: Lesson) {
  const [successRate, setSuccessRate] = useState<number | null>(null)

  useEffect(() => {
    setSuccessRate(getLessonSuccessRate(lesson))
  }, [lesson])

  return successRate
}
