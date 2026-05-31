import { useState } from "react"
import { useParams, useNavigate } from "react-router"

import { getCategoryById, getCategoryQuestions } from "~/domains/learning/data"

import { QuizPlayer } from "~/domains/learning/quiz/components/QuizPlayer"

import { QuizSetupCard } from "~/domains/learning/quiz/components/setup/QuizSetupCard"

import type { QuizConfig } from "~/domains/learning/quiz/types/quiz"

import { AppLayout } from "~/layouts/AppLayout"

export default function QuizPage() {
  const { categoryId } = useParams()

  const navigate = useNavigate()

  const category = getCategoryById(categoryId ?? "")

  const questions = getCategoryQuestions(categoryId ?? "")

  const [config, setConfig] = useState<QuizConfig>()

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  if (!config) {
    return (
      <AppLayout>
        <QuizSetupCard defaultMode="training" onStart={setConfig} />
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <QuizPlayer
        title={`${category.title} - Quiz global`}
        questions={questions}
        config={config}
        onBack={() => navigate(`/learning/${category.id}`)}
      />
    </AppLayout>
  )
}
