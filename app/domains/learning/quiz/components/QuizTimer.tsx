import { Timer } from "lucide-react"

import { cn } from "~/lib/utils"

import { formatTime } from "../utils/formatTime"

type QuizTimerProps = {
  remainingSeconds: number
}

export function QuizTimer({ remainingSeconds }: QuizTimerProps) {
  const isWarning = remainingSeconds <= 300 // 5 min
  const isDanger = remainingSeconds <= 60 // 1 min

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border bg-background/80 p-3 shadow-xs transition-colors sm:px-4 sm:py-3",
        isWarning && "border-orange-500/20 bg-orange-500/5",
        isDanger && "border-destructive/20 bg-destructive/5"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-9 items-center justify-center rounded-xl border bg-muted/40 text-muted-foreground sm:size-10",
            isWarning &&
              "border-orange-500/20 bg-orange-500/10 text-orange-600",
            isDanger &&
              "border-destructive/20 bg-destructive/10 text-destructive"
          )}
        >
          <Timer className="size-4 sm:size-5" />
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
            Temps restant
          </p>

          <p
            className={cn(
              "text-lg font-black tracking-tight sm:text-xl",
              isWarning && "text-orange-600",
              isDanger && "animate-pulse text-destructive"
            )}
          >
            {formatTime(remainingSeconds)}
          </p>
        </div>
      </div>
    </div>
  )
}
