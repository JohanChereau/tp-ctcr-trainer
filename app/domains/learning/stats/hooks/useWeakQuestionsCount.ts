import { useEffect, useState } from "react"

import { getWeakQuestionsCount } from "../utils/getWeakQuestionsCount"

export function useWeakQuestionsCount(categoryId?: string) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    setCount(getWeakQuestionsCount(categoryId))
  }, [categoryId])

  return count
}
