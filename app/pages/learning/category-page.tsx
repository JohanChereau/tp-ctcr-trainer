import { Link, useParams } from "react-router"

import { ArrowLeft } from "lucide-react"

import { Button } from "~/components/ui/button"

import { getCategoryById } from "~/domains/learning/data"

import { AppLayout } from "~/layouts/AppLayout"
import { WrittenCategoryActions } from "~/domains/learning/categories/components/WrittenCategoryActions"

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
        <Link to="/">
          <Button variant="ghost">
            <ArrowLeft />
            Retour
          </Button>
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{category.title}</h1>

          <p className="max-w-2xl text-muted-foreground">
            {category.description}
          </p>
        </div>

        {category.type === "written" && (
          <WrittenCategoryActions categoryId={category.id} />
        )}
      </div>
    </AppLayout>
  )
}
