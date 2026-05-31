import { RotateCcw } from "lucide-react"
import { Target } from "lucide-react"
import { TriangleAlert } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

import { ChevronDown, ClipboardList } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"

import { AnswerResultsAccordion } from "./results/AnswerResultsAccordion"

import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"

type QuizResultsProps = {
  score: number

  totalQuestions: number

  failedQuestionsCount: number

  answers: AnswerResult[]

  onRestart: () => void

  onRetryErrors: () => void

  onBack?: () => void
}

export function QuizResults({
  score,
  totalQuestions,
  answers,
  failedQuestionsCount,
  onRestart,
  onRetryErrors,
  onBack,
}: QuizResultsProps) {
  const percentage =
    totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100)

  return (
    <Card>
      <CardContent className="space-y-8 p-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">🎉 Quiz terminé</h2>

          <p className="text-muted-foreground">Voici vos résultats.</p>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">Score</p>

          <p className="text-6xl font-bold">
            {score} / {totalQuestions}
          </p>

          <p className="text-xl font-medium text-primary">{percentage}%</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Target className="text-green-600" />

              <div>
                <p className="text-sm text-muted-foreground">Réussites</p>

                <p className="font-semibold">{score}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <TriangleAlert className="text-orange-500" />

              <div>
                <p className="text-sm text-muted-foreground">Erreurs</p>

                <p className="font-semibold">{failedQuestionsCount}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl border p-4 text-left font-medium">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />

              <span>Détails des réponses ({answers.length})</span>
            </div>

            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4">
            <AnswerResultsAccordion answers={answers} />
          </CollapsibleContent>
        </Collapsible>

        <div className="flex flex-col gap-3">
          <Button size="lg" onClick={onRestart}>
            <RotateCcw />
            Refaire le quiz
          </Button>

          {failedQuestionsCount > 0 && (
            <Button variant="secondary" size="lg" onClick={onRetryErrors}>
              Réviser les erreurs
            </Button>
          )}

          {onBack && (
            <Button variant="outline" size="lg" onClick={onBack}>
              Retour
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
