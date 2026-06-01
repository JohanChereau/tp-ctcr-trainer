import { useNavigate, useParams } from "react-router"

import { AppLayout } from "~/layouts/AppLayout"

import { QuizPlayer } from "~/domains/learning/quiz/components/QuizPlayer"

import { getCategoryById } from "~/domains/learning/data"

import { getWeakQuestions } from "~/domains/learning/stats/utils/getWeakQuestions"
import { QuizBackButton } from "~/domains/learning/quiz/components/QuizBackButton"

export default function WeakQuestionsPage() {
  const { categoryId } = useParams()

  const navigate = useNavigate()

  const category = getCategoryById(categoryId ?? "")

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  const weakQuestions = getWeakQuestions({
    categoryId,
  })

  if (weakQuestions.length === 0) {
    return (
      <AppLayout>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Points faibles</h1>

          <p className="text-muted-foreground">
            Aucun point faible détecté pour le moment 🎉
          </p>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <QuizBackButton />
      <QuizPlayer
        title="Révision des points faibles"
        questions={weakQuestions.map((item) => item.question)}
        onBack={() => navigate(`/learning/${categoryId}`)}
      />
    </AppLayout>
  )
}
