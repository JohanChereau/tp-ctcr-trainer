import { GraduationCap } from "lucide-react"

import { learningCategories } from "~/domains/learning/data"

import { CategoryCard } from "~/domains/learning/categories/components/CategoryCard"

export function CategoriesGrid() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
          <GraduationCap className="size-4 text-primary" />
          Modules
        </div>

        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
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
