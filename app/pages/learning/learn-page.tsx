import { useParams } from "react-router"

import { BackButton } from "~/components/navigation/BackButton"
import { Separator } from "~/components/ui/separator"

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
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}/${lessonId}`} />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{lesson.title}</h1>

          <p className="text-muted-foreground">
            Consultez le contenu pédagogique de cette leçon.
          </p>
        </div>

        <Separator />

        <LessonViewer lesson={lesson} />
      </div>
    </AppLayout>
  )
}
