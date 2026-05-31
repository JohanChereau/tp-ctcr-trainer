import { CheckCircle2 } from "lucide-react"
import { XCircle } from "lucide-react"

import { Card, CardContent } from "~/components/ui/card"

import { Button } from "~/components/ui/button"

type CorrectionCardProps = {
  isCorrect: boolean

  canonicalAnswer: string

  explanation?: string

  onNext: () => void
}

export function CorrectionCard({
  isCorrect,
  canonicalAnswer,
  explanation,
  onNext,
}: CorrectionCardProps) {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <CheckCircle2 className="text-green-600" />
          ) : (
            <XCircle className="text-red-600" />
          )}

          <h3 className="text-xl font-semibold">
            {isCorrect ? "Bonne réponse" : "Mauvaise réponse"}
          </h3>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Réponse attendue</p>

          <p className="text-lg font-medium">{canonicalAnswer}</p>
        </div>

        {explanation && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Explication</p>

            <p>{explanation}</p>
          </div>
        )}

        <Button size="lg" className="w-full" onClick={onNext}>
          Question suivante
        </Button>
      </CardContent>
    </Card>
  )
}
