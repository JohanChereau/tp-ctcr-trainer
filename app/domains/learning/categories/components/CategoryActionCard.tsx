import { Link } from "react-router"

import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"

import type { CategoryAction } from "../types/categoryAction"

type CategoryActionCardProps = {
  action: CategoryAction
}

export function CategoryActionCard({ action }: CategoryActionCardProps) {
  const Icon = action.icon

  return (
    <Link to={action.href}>
      <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="space-y-4 p-8">
          <div className="flex items-center justify-between">
            <Icon className={`h-6 w-6 ${action.iconClassName ?? ""}`} />

            {action.badge !== null &&
              action.badge !== undefined &&
              action.badge > 0 && (
                <Badge variant="destructive">{action.badge}</Badge>
              )}
          </div>

          <h2 className="text-xl font-semibold">{action.title}</h2>

          <p className="text-sm text-muted-foreground">{action.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
