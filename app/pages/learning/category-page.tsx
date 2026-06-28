import { useParams } from "react-router"

import { BackButton } from "~/components/navigation/BackButton"

import { CategoryActions } from "~/domains/learning/categories/components/CategoryActions"
import { getCategoryActions } from "~/domains/learning/categories/utils/getCategoryActions"
import { getCategoryById } from "~/domains/learning/data"
import { useWeakQuestionsCount } from "~/domains/learning/stats/hooks/useWeakQuestionsCount"

import { AppLayout } from "~/layouts/AppLayout"

export default function CategoryPage() {
  const { categoryId } = useParams()

  const category = getCategoryById(categoryId ?? "")

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  const weakQuestionsCount = useWeakQuestionsCount(category.id)

  const actions = getCategoryActions(category, weakQuestionsCount)

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to="/" />

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <span>{category.icon}</span>
            Module
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {category.title}
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            {category.description}
          </p>
        </div>

        <CategoryActions actions={actions} />
      </div>
    </AppLayout>
  )
}
