import { Link } from "react-router"

import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "~/components/ui/card"

import type { Category } from "../../../categories/types/category"

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/learning/${category.id}`} className="block">
      <Card className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col gap-6 p-8">
          <div className="flex items-center justify-between">
            <span className="text-3xl">{category.icon}</span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{category.title}</h3>

            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="mt-auto text-sm font-medium text-muted-foreground">
            {category.questionsCount} questions
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
