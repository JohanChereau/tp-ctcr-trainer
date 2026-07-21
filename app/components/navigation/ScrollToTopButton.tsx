import { ArrowUp } from "lucide-react"

import { Button } from "~/components/ui/button"

import { useScrollToTopButton } from "~/hooks/useScrollToTopButton"

import { cn } from "~/lib/utils"

type ScrollToTopButtonProps = {
  minScrollPosition?: number
  directionThreshold?: number
  className?: string
}

export function ScrollToTopButton({
  minScrollPosition = 400,
  directionThreshold = 10,
  className,
}: ScrollToTopButtonProps) {
  const { isVisible, scrollToTop } = useScrollToTopButton({
    minScrollPosition,
    directionThreshold,
  })

  return (
    <Button
      type="button"
      size="icon"
      variant="secondary"
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50",
        "size-12 rounded-full border shadow-lg",
        "transition-[opacity,transform,box-shadow] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-xl",
        "md:right-8 md:bottom-8",
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-3 scale-90 opacity-0",
        className
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </Button>
  )
}
