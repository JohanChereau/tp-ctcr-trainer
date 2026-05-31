import { useEffect } from "react"

export function useKeyboardShortcut(keys: string[], callback: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (keys.includes(event.key)) {
        callback()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [keys, callback])
}
