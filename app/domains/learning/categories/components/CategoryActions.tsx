import { CategoryActionCard } from "./CategoryActionCard"

import type { CategoryAction } from "../types/categoryAction"

type CategoryActionsProps = {
  actions: CategoryAction[]
}

export function CategoryActions({ actions }: CategoryActionsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((action) => (
        <CategoryActionCard key={action.href} action={action} />
      ))}
    </div>
  )
}
