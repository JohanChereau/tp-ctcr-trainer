import { learningCategories } from "~/domains/learning/data"

import { CategoryCard } from "~/domains/learning/categories/components/CategoryCard"

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
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
