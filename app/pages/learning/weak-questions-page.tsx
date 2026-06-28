import { useNavigate, useParams } from "react-router"

import { AppLayout } from "~/layouts/AppLayout"

import { getCategoryById } from "~/domains/learning/data"
import { QuizBackButton } from "~/domains/learning/quiz/components/QuizBackButton"
import { QuizPlayer } from "~/domains/learning/quiz/components/QuizPlayer"
import { useWeakQuestions } from "~/domains/learning/stats/hooks/useWeakQuestions"

export default function WeakQuestionsPage() {
  const { categoryId } = useParams()

  const navigate = useNavigate()

  const category = getCategoryById(categoryId ?? "")

  const weakQuestions = useWeakQuestions({
    categoryId,
    includeUnanswered: true,
  })

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  if (weakQuestions === null) {
    return (
      <AppLayout>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Points faibles</h1>

          <p className="text-muted-foreground">
            Préparation de votre révision...
          </p>
        </div>
      </AppLayout>
    )
  }

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
        questions={weakQuestions}
        onBack={() => navigate(`/learning/${categoryId}`)}
      />
    </AppLayout>
  )
}
