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
  return (
    <CorrectionCard
      isCorrect={isCorrect}
      canonicalAnswer={canonicalAnswer}
      explanation={explanation}
      onNext={onNext}
    />
  )
}
