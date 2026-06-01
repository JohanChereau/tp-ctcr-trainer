import type { LucideIcon } from "lucide-react"

export type CategoryAction = {
  title: string

  description: string

  href: string

  icon: LucideIcon

  badge?: number | null

  iconClassName?: string
}
