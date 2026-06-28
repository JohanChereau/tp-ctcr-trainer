import { Link } from "react-router"

import { ArrowRight } from "lucide-react"

import { Badge } from "~/components/ui/badge"

import type { CategoryAction } from "../types/categoryAction"

type CategoryActionCardProps = {
  action: CategoryAction
}

export function CategoryActionCard({ action }: CategoryActionCardProps) {
  const Icon = action.icon

  const hasBadge =
    action.badge !== null && action.badge !== undefined && action.badge > 0

  return (
    <Link to={action.href} className="group block h-full">
      <article className="relative flex h-full min-h-52 flex-col overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-muted/50 to-transparent opacity-70" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted/40 text-muted-foreground">
            <Icon className={`size-5 ${action.iconClassName ?? ""}`} />
          </div>

          <div className="flex items-center gap-2">
            {hasBadge && (
              <Badge
                variant="outline"
                className="h-6 rounded-full border-rose-200/70 bg-rose-50/40 px-2.5 text-[11px] font-medium text-rose-700 shadow-none hover:bg-rose-50/40"
              >
                {action.badge}
              </Badge>
            )}

            <div className="rounded-full border bg-background/80 p-2 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>

        <div className="relative mt-6 space-y-3">
          <h2 className="line-clamp-2 text-xl font-black tracking-tight">
            {action.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {action.description}
          </p>
        </div>
      </article>
    </Link>
  )
}
