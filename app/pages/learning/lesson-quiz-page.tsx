import { useNavigate, useParams } from "react-router"

import { getLessonById, getLessonQuestions } from "~/domains/learning/data"

import { QuizBackButton } from "~/domains/learning/quiz/components/QuizBackButton"
import { QuizPlayer } from "~/domains/learning/quiz/components/QuizPlayer"

import { AppLayout } from "~/layouts/AppLayout"

export default function LessonQuizPage() {
  const { categoryId, lessonId } = useParams()

  const navigate = useNavigate()

  const lesson = getLessonById(categoryId ?? "", lessonId ?? "")

  const questions = getLessonQuestions(categoryId ?? "", lessonId ?? "")

  if (!lesson) {
    return (
      <AppLayout>
        <p>Fiche introuvable.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <QuizBackButton />

      <QuizPlayer
        title={lesson.title}
        questions={questions}
        onBack={() => navigate(`/learning/${categoryId}/${lessonId}`)}
      />
    </AppLayout>
  )
}
