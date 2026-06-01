import { Link, useParams } from "react-router"

import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"

import { getCategoryById, getLessonById } from "~/domains/learning/data"

import { AppLayout } from "~/layouts/AppLayout"

import { Card, CardContent } from "~/components/ui/card"
import { BackButton } from "~/components/navigation/BackButton"

export default function LessonPage() {
  const { categoryId, lessonId } = useParams()

  const category = getCategoryById(categoryId ?? "")

  const lesson = getLessonById(categoryId ?? "", lessonId ?? "")

  if (!category || !lesson) {
    return (
      <AppLayout>
        <p>Fiche introuvable.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}/revision`} />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{lesson.title}</h1>

          <p className="text-muted-foreground">
            {lesson.questions.length} questions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link to={`/learning/${category.id}/${lesson.id}/learn`}>
            <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="space-y-4 p-8">
                <div className="flex items-center justify-between">
                  <BookOpen className="h-6 w-6" />

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                <h2 className="text-xl font-semibold">Consulter la fiche</h2>

                <p className="text-muted-foreground">
                  Consultez le contenu complet de la fiche avant de vous tester.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={`/learning/${category.id}/${lesson.id}/quiz`}>
            <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="space-y-4 p-8">
                <div className="flex items-center justify-between">
                  <GraduationCap className="h-6 w-6" />

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                <h2 className="text-xl font-semibold">Faire le quiz</h2>

                <p className="text-muted-foreground">
                  Lancez un quiz uniquement sur cette fiche.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}
