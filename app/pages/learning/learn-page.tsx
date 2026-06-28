import { useParams } from "react-router"

import { BookOpen } from "lucide-react"

import { BackButton } from "~/components/navigation/BackButton"

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
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <BookOpen className="size-4 text-primary" />
            Consultation
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {lesson.title}
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            Consultez le contenu pédagogique de cette leçon à votre rythme.
          </p>
        </div>

        <LessonViewer lesson={lesson} />
      </div>
    </AppLayout>
  )
}
