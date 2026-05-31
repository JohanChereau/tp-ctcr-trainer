import { Link } from "react-router"

import { BookOpen, GraduationCap, Flame } from "lucide-react"

import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

import { useWeakQuestionsCount } from "../../stats/hooks/useWeakQuestionsCount"

type RseCategoryActionsProps = {
  categoryId: string
}

export function RseCategoryActions({ categoryId }: RseCategoryActionsProps) {
  const weakQuestionsCount = useWeakQuestionsCount(categoryId)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Link to={`/learning/${categoryId}/revision`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <BookOpen className="h-6 w-6" />

            <h2 className="text-xl font-semibold">Consulter les leçons</h2>

            <p className="text-sm text-muted-foreground">
              Parcourez les contenus pédagogiques de la RSE.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link to={`/learning/${categoryId}/quiz`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <GraduationCap className="h-6 w-6" />

            <h2 className="text-xl font-semibold">Quiz RSE</h2>

            <p className="text-sm text-muted-foreground">
              Testez vos connaissances.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link to={`/learning/${categoryId}/weak-questions`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center justify-between">
              <Flame className="h-6 w-6 text-orange-500" />

              {weakQuestionsCount !== null && weakQuestionsCount > 0 && (
                <Badge variant="destructive">{weakQuestionsCount}</Badge>
              )}
            </div>

            <h2 className="text-xl font-semibold">
              Réviser mes points faibles
            </h2>

            <p className="text-sm text-muted-foreground">
              Travaillez uniquement les notions de RSE où vous avez le plus de
              difficultés.
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
