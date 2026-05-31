import { useKeyboardShortcut } from "../../hooks/useKeyboardShortcut"
import { CorrectionCard } from "../CorrectionCard"

type CorrectionScreenProps = {
  isCorrect: boolean

  canonicalAnswer: string

  explanation?: string

  onNext: () => void
}

export function CorrectionScreen({
  isCorrect,
  canonicalAnswer,
  explanation,
  onNext,
}: CorrectionScreenProps) {
  useKeyboardShortcut(["ArrowRight"], onNext)
  return (
    <CorrectionCard
      isCorrect={isCorrect}
      canonicalAnswer={canonicalAnswer}
      explanation={explanation}
      onNext={onNext}
    />
  )
}
