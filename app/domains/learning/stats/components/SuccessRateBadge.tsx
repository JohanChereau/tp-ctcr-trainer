import { Badge } from "~/components/ui/badge"

type SuccessRateBadgeProps = {
  successRate: number | null
}

export function SuccessRateBadge({ successRate }: SuccessRateBadgeProps) {
  if (successRate === null) {
    return <Badge variant="secondary">Non commencé</Badge>
  }

  if (successRate >= 90) {
    return (
      <Badge className="bg-green-600 hover:bg-green-600">
        Maîtrisé · {successRate}%
      </Badge>
    )
  }

  if (successRate >= 75) {
    return (
      <Badge className="bg-emerald-500 hover:bg-emerald-500">
        Bon · {successRate}%
      </Badge>
    )
  }

  if (successRate >= 50) {
    return (
      <Badge className="bg-amber-500 hover:bg-amber-500">
        À revoir · {successRate}%
      </Badge>
    )
  }

  return <Badge variant="destructive">Faible · {successRate}%</Badge>
}
