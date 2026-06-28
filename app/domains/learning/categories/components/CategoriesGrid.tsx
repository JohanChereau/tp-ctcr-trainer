import { learningCategories } from "~/domains/learning/data"

import { CategoryCard } from "~/domains/learning/categories/components/CategoryCard"

export function CategoriesGrid() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-primary">Modules</p>

        <h2 className="text-3xl font-black tracking-tight">
          Modules d'apprentissage
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Choisissez un module pour poursuivre votre préparation au TP CTCR.
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
