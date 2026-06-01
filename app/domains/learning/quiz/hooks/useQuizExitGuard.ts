import { useEffect } from "react"

type UseQuizExitGuardOptions = {
  enabled: boolean
}

export function useQuizExitGuard({ enabled }: UseQuizExitGuardOptions) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()

      event.returnValue = ""
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [enabled])
}
