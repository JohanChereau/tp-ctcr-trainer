import { useKeyboardShortcut } from "../../hooks/useKeyboardShortcut"
import { CorrectionCard } from "../CorrectionCard"

type CorrectionScreenProps = {
  isCorrect: boolean

  isLastQuestion: boolean

  canonicalAnswer: string

  explanation?: string

  onNext: () => void
}

export function CorrectionScreen({
  isCorrect,
  isLastQuestion,
  canonicalAnswer,
  explanation,
  onNext,
}: CorrectionScreenProps) {
  useKeyboardShortcut(["ArrowRight"], onNext)

  return (
    <CorrectionCard
      isCorrect={isCorrect}
      isLastQuestion={isLastQuestion}
      canonicalAnswer={canonicalAnswer}
      explanation={explanation}
      onNext={onNext}
    />
  )
}
