import { useParams } from "react-router"

import { getLessonById } from "~/domains/learning/data"

import { LessonViewer } from "~/domains/learning/learn/components/LessonViewer"

import { AppLayout } from "~/layouts/AppLayout"

export default function LearnPage() {
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
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">{lesson.title}</h1>

          <p className="text-muted-foreground">
            Consultez les questions et réponses de la fiche.
          </p>
        </div>

        <LessonViewer lesson={lesson} />
      </div>
    </AppLayout>
  )
}
