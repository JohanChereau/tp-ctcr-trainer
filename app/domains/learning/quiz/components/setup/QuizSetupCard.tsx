import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

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

import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

import { Clock3, ListChecks, Play, Shuffle } from "lucide-react"

import type { QuizConfig, QuizMode } from "~/domains/learning/quiz/types/quiz"

type QuizSetupCardProps = {
  onStart: (config: QuizConfig) => void
}

export function QuizSetupCard({ onStart }: QuizSetupCardProps) {
  const [mode, setMode] = useState<QuizMode>("training")

  const [questionCount, setQuestionCount] = useState("10")

  const [durationMinutes, setDurationMinutes] = useState("6")

  const [shuffleQuestions, setShuffleQuestions] = useState(true)

  function handleStart() {
    onStart({
      mode,

      questionCount:
        questionCount === "all" ? undefined : Number(questionCount),

      durationInSeconds:
        mode === "exam" ? Number(durationMinutes) * 60 : undefined,

      shuffleQuestions: mode === "exam" ? true : shuffleQuestions,
    })
  }

  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader className="space-y-2">
        <CardTitle>Configuration du quiz</CardTitle>

        <CardDescription>
          Configurez votre session avant de commencer.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>Mode</Label>

          <RadioGroup
            value={mode}
            onValueChange={(value) => setMode(value as QuizMode)}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="training" id="training" />

              <Label htmlFor="training" className="cursor-pointer">
                Révision
              </Label>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="exam" id="exam" />

              <Label htmlFor="exam" className="cursor-pointer">
                Examen
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ListChecks className="h-4 w-4 text-muted-foreground" />

            <Label>Nombre de questions</Label>
          </div>

          <Select value={questionCount} onValueChange={setQuestionCount}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="5">5 questions</SelectItem>

              <SelectItem value="10">10 questions</SelectItem>

              <SelectItem value="20">20 questions</SelectItem>

              <SelectItem value="all">Toutes les questions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {mode === "exam" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-muted-foreground" />

              <Label>Durée</Label>
            </div>

            <Select value={durationMinutes} onValueChange={setDurationMinutes}>
              <SelectTrigger>
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

        {mode === "training" && (
          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Checkbox
              checked={shuffleQuestions}
              onCheckedChange={(checked) =>
                setShuffleQuestions(Boolean(checked))
              }
            />

            <div className="flex items-center gap-2">
              <Shuffle className="h-4 w-4 text-muted-foreground" />

              <Label className="cursor-pointer">Mélanger les questions</Label>
            </div>
          </div>
        )}

        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <p className="mb-3 font-medium">Session configurée</p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Mode : {mode === "training" ? "Révision" : "Examen"}</li>

              <li>
                •{" "}
                {questionCount === "all"
                  ? "Toutes les questions"
                  : `${questionCount} questions`}
              </li>

              {mode === "exam" && <li>• {durationMinutes} minutes</li>}

              <li>
                •{" "}
                {mode === "exam"
                  ? "Questions mélangées automatiquement"
                  : shuffleQuestions
                    ? "Questions mélangées"
                    : "Ordre original"}
              </li>
            </ul>
          </CardContent>
        </Card>

        <Button size="lg" className="w-full" onClick={handleStart}>
          <Play />
          Commencer
        </Button>
      </CardContent>
    </Card>
  )
}
