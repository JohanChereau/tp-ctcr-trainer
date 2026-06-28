import { useEffect, useState } from "react"

import { getWeakQuestionsCount } from "../utils/getWeakQuestionsCount"

type UseWeakQuestionsCountOptions = {
  includeUnanswered?: boolean
}

export function useWeakQuestionsCount(
  categoryId?: string,
  options: UseWeakQuestionsCountOptions = {}
) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    setCount(
      getWeakQuestionsCount({
        categoryId,
        includeUnanswered: options.includeUnanswered,
      })
    )
  }, [categoryId, options.includeUnanswered])

  return count
}
