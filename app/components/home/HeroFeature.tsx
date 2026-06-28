import type { LucideIcon } from "lucide-react"

type HeroFeatureProps = {
  icon: LucideIcon
  title: string
  text: string
}

export function HeroFeature({ icon: Icon, title, text }: HeroFeatureProps) {
  return (
    <div className="flex min-h-16 flex-col items-center justify-center gap-2 rounded-xl border bg-background/80 px-2 py-4 text-center backdrop-blur sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left md:min-h-auto md:py-3">
      <Icon className="size-5 shrink-0 text-primary" />

      <div className="min-w-0">
        <p className="text-xs font-semibold sm:text-sm">{title}</p>
        <p className="hidden text-xs text-muted-foreground sm:block">{text}</p>
      </div>
    </div>
  )
}
