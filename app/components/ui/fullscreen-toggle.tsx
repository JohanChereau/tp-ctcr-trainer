import { useEffect, useState } from "react"

import { Maximize, Minimize } from "lucide-react"

import { Button } from "~/components/ui/button"

export function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    handleFullscreenChange()

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()

        return
      }

      await document.documentElement.requestFullscreen()
    } catch (error) {
      console.error("Failed to toggle fullscreen mode.", error)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      title={
        isFullscreen ? "Quitter le mode plein écran" : "Passer en plein écran"
      }
      aria-label={
        isFullscreen ? "Quitter le mode plein écran" : "Passer en plein écran"
      }
    >
      {isFullscreen ? <Minimize /> : <Maximize />}
    </Button>
  )
}
