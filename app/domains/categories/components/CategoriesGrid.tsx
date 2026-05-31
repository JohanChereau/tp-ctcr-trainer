import { learningCategories } from "~/domains/learning/data"

import { CategoryCard } from "./CategoryCard"

function getQuestionCount(category: {
  lessons: {
    questions: unknown[]
  }[]
}) {
  return category.lessons.reduce(
    (total, lesson) => total + lesson.questions.length,
    0
  )
}

export function CategoriesGrid() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Modules d'apprentissage</h2>

        <p className="text-muted-foreground">
          Choisissez une catégorie pour commencer.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {learningCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={{
              id: category.id,

              title: category.title,

              description: category.description,

              icon: category.icon,

              questionsCount: getQuestionCount(category),
            }}
          />
        ))}
      </div>
    </section>
  )
}
