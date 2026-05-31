import { useParams } from "react-router"

import { getCategoryById } from "~/domains/learning/data"

import { AppLayout } from "~/layouts/AppLayout"
import { WrittenCategoryActions } from "~/domains/learning/categories/components/WrittenCategoryActions"
import { RseCategoryActions } from "~/domains/learning/categories/components/RseCategoryActions"
import { BackButton } from "~/components/navigation/BackButton"

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

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton />

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{category.title}</h1>

          <p className="max-w-2xl text-muted-foreground">
            {category.description}
          </p>
        </div>

        {category.type === "written" && (
          <WrittenCategoryActions categoryId={category.id} />
        )}

        {category.type === "rse" && (
          <RseCategoryActions categoryId={category.id} />
        )}
      </div>
    </AppLayout>
  )
}
