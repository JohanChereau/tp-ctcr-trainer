import { Link, useParams } from "react-router"

import { ArrowRight } from "lucide-react"

import { getCategoryById } from "~/domains/learning/data"

import { getLessonSuccessRate } from "~/domains/learning/stats/utils/getLessonSuccessRate"

import { SuccessRateBadge } from "~/domains/learning/stats/components/SuccessRateBadge"

import { AppLayout } from "~/layouts/AppLayout"

import { Card, CardContent } from "~/components/ui/card"
import { BackButton } from "~/components/navigation/BackButton"

export default function RevisionPage() {
  const { categoryId } = useParams()

  const category = getCategoryById(categoryId ?? "")

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Révision fiche par fiche</h1>

          <p className="text-muted-foreground">
            Sélectionnez une fiche à consulter ou à réviser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {category.lessons.map((lesson) => {
            const successRate = getLessonSuccessRate(lesson)

            return (
              <Link
                key={lesson.id}
                to={`/learning/${category.id}/${lesson.id}`}
              >
                <Card className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="space-y-4 p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Fiche
                      </span>

                      <div className="flex items-center gap-2">
                        <SuccessRateBadge successRate={successRate} />

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold">{lesson.title}</h2>

                    <p className="text-sm text-muted-foreground">
                      {lesson.questions.length} questions
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </AppLayout>
  )
}
