import { Link, useParams } from "react-router"

import { getCategoryById } from "~/domains/learning/data"

import { Card, CardContent } from "~/components/ui/card"

import { AppLayout } from "~/layouts/AppLayout"

export default function LearningCategoryPage() {
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
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{category.title}</h1>

          <p className="text-muted-foreground">{category.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.lessons.map((lesson) => (
            <Link key={lesson.id} to={`/learning/${category.id}/${lesson.id}`}>
              <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="space-y-2 p-6">
                  <h2 className="font-semibold">{lesson.title}</h2>

                  <p className="text-sm text-muted-foreground">
                    {lesson.questions.length} questions
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
