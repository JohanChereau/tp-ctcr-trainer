import { Link, useParams } from "react-router"

import { ArrowRight } from "lucide-react"

import { getCategoryById } from "~/domains/learning/data"

import { SuccessRateBadge } from "~/domains/learning/stats/components/SuccessRateBadge"
import { useLessonSuccessRate } from "~/domains/learning/stats/hooks/useLessonSuccessRate"

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
        <BackButton to={`/learning/${categoryId}`} />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Révision fiche par fiche</h1>

          <p className="text-muted-foreground">
            Sélectionnez une fiche à consulter ou à réviser.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {category.lessons.map((lesson) => (
            <RevisionLessonCard
              key={lesson.id}
              categoryId={category.id}
              lesson={lesson}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

type RevisionLessonCardProps = {
  categoryId: string
  lesson: NonNullable<ReturnType<typeof getCategoryById>>["lessons"][number]
}

function RevisionLessonCard({ categoryId, lesson }: RevisionLessonCardProps) {
  const successRate = useLessonSuccessRate(lesson)

  return (
    <Link to={`/learning/${categoryId}/${lesson.id}`} className="h-full">
      <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">Fiche</span>

            <div className="flex shrink-0 items-center gap-2">
              <SuccessRateBadge successRate={successRate} />

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          <h2 className="mt-4 text-xl font-semibold">{lesson.title}</h2>

          <p className="mt-auto pt-6 text-sm text-muted-foreground">
            {lesson.questions.length} questions
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
