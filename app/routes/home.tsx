import { useState } from "react"

import { ExamSetupCard } from "~/features/quiz/components/exam/ExamSetupCard"

import { QuizPlayer } from "~/features/quiz/QuizPlayer"

import type { QuizConfig } from "~/features/quiz/types/quiz"

import { crtWrittenCategory } from "~/domains/learning/data/crt-written"

export default function Home() {
  const [config, setConfig] = useState<QuizConfig>()

  const questions = crtWrittenCategory.lessons.flatMap(
    (lesson) => lesson.questions
  )

  if (!config) {
    return (
      <div className="p-8">
        <ExamSetupCard onStart={setConfig} />
      </div>
    )
  }

  return (
    <div className="p-8">
      <QuizPlayer title="Examen blanc" questions={questions} config={config} />
    </div>
  )
}
