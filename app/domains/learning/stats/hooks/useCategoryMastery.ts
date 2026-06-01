import { useEffect, useState } from "react"

import type { LearningCategory } from "~/domains/learning/types/learning"

import { getCategoryMastery } from "../utils/getCategoryMastery"

export function useCategoryMastery(category: LearningCategory) {
  const [masteryRate, setMasteryRate] = useState<number | null>(null)

  useEffect(() => {
    setMasteryRate(getCategoryMastery(category))
  }, [category])

  return masteryRate
}
