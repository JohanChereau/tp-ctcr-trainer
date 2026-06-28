import { learningCategories } from "~/domains/learning/data"

import { CategoryCard } from "~/domains/learning/categories/components/CategoryCard"

export function CategoriesGrid() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Modules</p>

          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            Modules d'apprentissage
          </h2>
        </div>

        <p className="max-w-md text-sm text-muted-foreground">
          Choisissez un module pour consulter les fiches, lancer un quiz ou
          reprendre vos points faibles.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {learningCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
