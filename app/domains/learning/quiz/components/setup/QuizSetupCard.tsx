import { useState } from "react"

import { Clock3, ListChecks, Play, Settings2, Shuffle } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

import type { QuizConfig, QuizMode } from "~/domains/learning/quiz/types/quiz"

type QuizSetupCardProps = {
  onStart: (config: QuizConfig) => void

  totalQuestions: number

  defaultMode?: QuizMode
}

function getQuestionCountOptions(totalQuestions: number) {
  const half = Math.round(totalQuestions / 2 / 5) * 5

  return [...new Set([5, 10, 15, 20, 30, 50, half])]
    .filter((count) => count > 0 && count < totalQuestions)
    .sort((a, b) => a - b)
}

function getDefaultQuestionCount(totalQuestions: number) {
  return totalQuestions > 10 ? "10" : "all"
}

export function QuizSetupCard({
  onStart,
  totalQuestions,
  defaultMode = "training",
}: QuizSetupCardProps) {
  const [questionCount, setQuestionCount] = useState(() =>
    getDefaultQuestionCount(totalQuestions)
  )

  const [durationMinutes, setDurationMinutes] = useState("6")

  const [shuffleQuestions, setShuffleQuestions] = useState(true)

  const questionCountOptions = getQuestionCountOptions(totalQuestions)

  function handleStart() {
    onStart({
      mode: defaultMode,

      questionCount:
        questionCount === "all" ? undefined : Number(questionCount),

      durationInSeconds:
        defaultMode === "exam" ? Number(durationMinutes) * 60 : undefined,

      shuffleQuestions,
    })
  }

  return (
    <section className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border bg-background/80 shadow-sm sm:rounded-3xl">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-muted/60 to-transparent" />

      <div className="relative space-y-6 p-4 sm:p-6 md:p-8">
        {/* Header */}
        <header className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-muted/40 text-primary sm:size-11 sm:rounded-2xl">
            <Settings2 className="size-5" />
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">
              Configuration du quiz
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Prépare ta session avant de commencer.
            </p>
          </div>
        </header>

        {/* Configuration */}
        <div className="space-y-3">
          <div className="rounded-xl border bg-muted/20 p-4 sm:rounded-2xl">
            <div className="mb-3 flex items-center gap-2">
              <ListChecks className="size-4 text-primary" />

              <Label className="font-semibold">Nombre de questions</Label>
            </div>

            <Select value={questionCount} onValueChange={setQuestionCount}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {questionCountOptions.map((count) => (
                  <SelectItem key={count} value={String(count)}>
                    {count} questions
                  </SelectItem>
                ))}

                <SelectItem value="all">
                  Toutes les questions ({totalQuestions})
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {defaultMode === "exam" && (
            <div className="rounded-xl border bg-muted/20 p-4 sm:rounded-2xl">
              <div className="mb-3 flex items-center gap-2">
                <Clock3 className="size-4 text-primary" />

                <Label className="font-semibold">Durée</Label>
              </div>

              <Select
                value={durationMinutes}
                onValueChange={setDurationMinutes}
              >
                <SelectTrigger className="w-full bg-background">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="5">5 minutes</SelectItem>

                  <SelectItem value="6">6 minutes</SelectItem>

                  <SelectItem value="10">10 minutes</SelectItem>

                  <SelectItem value="15">15 minutes</SelectItem>

                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {defaultMode === "training" && (
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border bg-muted/20 p-4 transition-colors hover:bg-muted/35 sm:rounded-2xl">
              <Checkbox
                checked={shuffleQuestions}
                onCheckedChange={(checked) =>
                  setShuffleQuestions(Boolean(checked))
                }
              />

              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Shuffle className="size-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Mélanger les questions
                  </p>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Évite de mémoriser simplement leur ordre.
                  </p>
                </div>
              </div>
            </label>
          )}
        </div>

        {/* Summary */}
        <div className="rounded-xl border bg-muted/30 p-4 sm:rounded-2xl">
          <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Session configurée
          </p>

          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-background/70 px-3 py-2">
              <span className="text-muted-foreground">Mode</span>

              <p className="font-semibold">
                {defaultMode === "training" ? "Révision" : "Examen"}
              </p>
            </div>

            <div className="rounded-lg bg-background/70 px-3 py-2">
              <span className="text-muted-foreground">Questions</span>

              <p className="font-semibold">
                {questionCount === "all"
                  ? `Toutes (${totalQuestions})`
                  : questionCount}
              </p>
            </div>

            {defaultMode === "exam" && (
              <div className="rounded-lg bg-background/70 px-3 py-2">
                <span className="text-muted-foreground">Durée</span>

                <p className="font-semibold">{durationMinutes} min</p>
              </div>
            )}

            <div className="rounded-lg bg-background/70 px-3 py-2">
              <span className="text-muted-foreground">Ordre</span>

              <p className="font-semibold">
                {defaultMode === "exam" || shuffleQuestions
                  ? "Aléatoire"
                  : "Original"}
              </p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="h-12 w-full rounded-xl font-semibold sm:rounded-2xl"
          onClick={handleStart}
        >
          <Play className="size-4" />
          Commencer
        </Button>
      </div>
    </section>
  )
}
