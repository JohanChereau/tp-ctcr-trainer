import { useEffect, useState } from "react"

type UseQuizTimerOptions = {
  enabled: boolean

  durationInSeconds?: number

  onTimeExpired: () => void
}

/**
 * Quiz timer management.
 *
 * Handles:
 * - countdown
 * - expiration callback
 * - timer reset
 */
export function useQuizTimer({
  enabled,
  durationInSeconds,
  onTimeExpired,
}: UseQuizTimerOptions) {
  const [remainingSeconds, setRemainingSeconds] = useState<number | undefined>(
    durationInSeconds
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    if (remainingSeconds == null) {
      return
    }

    if (remainingSeconds <= 0) {
      onTimeExpired()

      return
    }

    const interval = setInterval(() => {
      setRemainingSeconds((current) =>
        current == null ? current : current - 1
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [enabled, remainingSeconds, onTimeExpired])

  /**
   * Resets the timer to its initial duration.
   */
  function resetTimer() {
    setRemainingSeconds(durationInSeconds)
  }

  /**
   * Sets a specific timer value.
   */
  function setTimer(seconds: number | undefined) {
    setRemainingSeconds(seconds)
  }

  return {
    remainingSeconds,

    resetTimer,

    setTimer,
  }
}
