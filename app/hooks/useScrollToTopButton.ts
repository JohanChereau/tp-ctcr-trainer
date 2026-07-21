import { useCallback, useEffect, useRef, useState } from "react"

type ScrollDirection = "up" | "down" | null

type UseScrollToTopButtonOptions = {
  minScrollPosition?: number
  directionThreshold?: number
}

export function useScrollToTopButton({
  minScrollPosition = 400,
  directionThreshold = 10,
}: UseScrollToTopButtonOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)

  const previousScrollPositionRef = useRef(0)
  const directionStartPositionRef = useRef(0)
  const previousDirectionRef = useRef<ScrollDirection>(null)

  useEffect(() => {
    const initialScrollPosition = window.scrollY

    previousScrollPositionRef.current = initialScrollPosition
    directionStartPositionRef.current = initialScrollPosition

    function handleScroll() {
      const currentScrollPosition = window.scrollY
      const previousScrollPosition = previousScrollPositionRef.current

      const scrollDifference = currentScrollPosition - previousScrollPosition

      if (scrollDifference === 0) {
        return
      }

      const currentDirection: ScrollDirection =
        scrollDifference > 0 ? "down" : "up"

      if (currentDirection !== previousDirectionRef.current) {
        previousDirectionRef.current = currentDirection
        directionStartPositionRef.current = currentScrollPosition
      }

      const directionDistance = Math.abs(
        currentScrollPosition - directionStartPositionRef.current
      )

      if (currentScrollPosition < minScrollPosition) {
        setIsVisible(false)
      } else if (
        currentDirection === "up" &&
        directionDistance >= directionThreshold
      ) {
        setIsVisible(true)
      } else if (
        currentDirection === "down" &&
        directionDistance >= directionThreshold
      ) {
        setIsVisible(false)
      }

      previousScrollPositionRef.current = currentScrollPosition
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [directionThreshold, minScrollPosition])

  const scrollToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })

    setIsVisible(false)
  }, [])

  return {
    isVisible,
    scrollToTop,
  }
}
