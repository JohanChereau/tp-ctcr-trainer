import { useEffect, useState } from "react"

import type { TrainingCalendarResponse } from "../types/types"

type UseTrainingCalendarState = {
  data: TrainingCalendarResponse | null
  loading: boolean
  error: boolean
}

export function useTrainingCalendar() {
  const [state, setState] = useState<UseTrainingCalendarState>({
    data: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    let ignore = false

    async function fetchCalendar() {
      try {
        const response = await fetch("/api/training-calendar")

        if (!response.ok) {
          throw new Error("Unable to fetch training calendar")
        }

        const data = (await response.json()) as TrainingCalendarResponse

        if (!ignore) {
          setState({
            data,
            loading: false,
            error: false,
          })
        }
      } catch {
        if (!ignore) {
          setState({
            data: null,
            loading: false,
            error: true,
          })
        }
      }
    }

    fetchCalendar()

    return () => {
      ignore = true
    }
  }, [])

  return state
}
