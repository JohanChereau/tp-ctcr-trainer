import { Timer } from "lucide-react"

import { formatTime } from "../utils/formatTime"

type QuizTimerProps = {
  remainingSeconds: number
}

export function QuizTimer({ remainingSeconds }: QuizTimerProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border px-4 py-2">
      <Timer className="h-4 w-4" />

      <span className="font-medium">{formatTime(remainingSeconds)}</span>
    </div>
  )
}
