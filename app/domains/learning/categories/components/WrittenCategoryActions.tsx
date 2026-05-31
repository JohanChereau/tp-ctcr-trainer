import { Link } from "react-router"

import { BookOpen, GraduationCap, FileText, Flame } from "lucide-react"

import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { useWeakQuestionsCount } from "../../stats/hooks/useWeakQuestionsCount"

type WrittenCategoryActionsProps = {
  categoryId: string
}

export function WrittenCategoryActions({
  categoryId,
}: WrittenCategoryActionsProps) {
  const weakQuestionsCount = useWeakQuestionsCount(categoryId)

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Link to={`/learning/${categoryId}/revision`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <BookOpen className="h-6 w-6" />

            <h2 className="text-xl font-semibold">Révision fiche par fiche</h2>

            <p className="text-sm text-muted-foreground">
              Consultez chaque fiche individuellement et révisez à votre rythme.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link to={`/learning/${categoryId}/quiz`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <GraduationCap className="h-6 w-6" />

            <h2 className="text-xl font-semibold">Quiz global</h2>

            <p className="text-sm text-muted-foreground">
              Questions aléatoires parmi toutes les fiches.
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
              Travaillez uniquement les questions où vous avez le plus de
              difficultés.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link to={`/learning/${categoryId}/exam`}>
        <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="space-y-4 p-8">
            <FileText className="h-6 w-6" />

            <h2 className="text-xl font-semibold">Examen blanc</h2>

            <p className="text-sm text-muted-foreground">
              Simulation chronométrée de l'examen.
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
