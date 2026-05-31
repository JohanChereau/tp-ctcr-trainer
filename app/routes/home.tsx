import { useState } from "react"

import { QuizSetupCard } from "~/features/quiz/components/setup/QuizSetupCard"

import { QuizPlayer } from "~/features/quiz/QuizPlayer"

import type { QuizConfig } from "~/features/quiz/types/quiz"

import { crtWrittenCategory } from "~/domains/learning/data/written/crt-written"

export default function Home() {
  const [config, setConfig] = useState<QuizConfig>()

  const questions = crtWrittenCategory.lessons.flatMap(
    (lesson) => lesson.questions
  )

  if (!config) {
    return (
      <div className="p-8">
        <QuizSetupCard onStart={setConfig} />
      </div>
    )
  }

  return (
    <div className="p-8">
      <QuizPlayer title="Examen blanc" questions={questions} config={config} />
    </div>
  )
}
