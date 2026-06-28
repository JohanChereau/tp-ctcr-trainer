import { Link } from "react-router"

import { Target } from "lucide-react"

import { Button } from "~/components/ui/button"

type DailyMissionCardProps = {
  categoryId: string
}

export function DailyMissionCard({ categoryId }: DailyMissionCardProps) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Target className="size-4 text-primary" />
        <p className="text-sm font-semibold">Mission du jour</p>
      </div>

      <p className="text-sm text-muted-foreground">
        Travaille tes points faibles sur les fiches écrites pour consolider tes
        bases avant l'examen.
      </p>

      <Button className="mt-4 w-full" asChild>
        <Link to={`/learning/${categoryId}/weak-questions`}>
          Lancer la mission
        </Link>
      </Button>
    </div>
  )
}
