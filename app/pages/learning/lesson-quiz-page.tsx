import { useParams } from "react-router"

import { getLessonById } from "~/domains/learning/data"

import { QuizPlayer } from "~/domains/learning/quiz/components/QuizPlayer"

import { AppLayout } from "~/layouts/AppLayout"

export default function LessonQuizPage() {
  const { categoryId, lessonId } = useParams()

  const lesson = getLessonById(categoryId ?? "", lessonId ?? "")

  if (!lesson) {
    return (
      <AppLayout>
        <p>Fiche introuvable.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <QuizPlayer title={lesson.title} questions={lesson.questions} />
    </AppLayout>
  )
}
