import {
  AlertTriangle,
  CircleAlert,
  Info,
  Lightbulb,
  type LucideIcon,
} from "lucide-react"

import { cn } from "~/lib/utils"

import type { MarkdownCalloutVariant } from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownCalloutProps = {
  variant: MarkdownCalloutVariant
  title?: string
  content: string
}

type CalloutConfiguration = {
  icon: LucideIcon
  defaultTitle: string
  className: string
  iconClassName: string
}

const variants: Record<MarkdownCalloutVariant, CalloutConfiguration> = {
  info: {
    icon: Info,
    defaultTitle: "Information",
    className:
      "border-blue-200 bg-blue-50/80 dark:border-blue-900 dark:bg-blue-950/30",
    iconClassName: "text-blue-600 dark:text-blue-400",
  },

  tip: {
    icon: Lightbulb,
    defaultTitle: "Astuce",
    className:
      "border-emerald-200 bg-emerald-50/80 dark:border-emerald-900 dark:bg-emerald-950/30",
    iconClassName: "text-emerald-600 dark:text-emerald-400",
  },

  warning: {
    icon: AlertTriangle,
    defaultTitle: "Attention",
    className:
      "border-amber-200 bg-amber-50/80 dark:border-amber-900 dark:bg-amber-950/30",
    iconClassName: "text-amber-600 dark:text-amber-400",
  },

  danger: {
    icon: CircleAlert,
    defaultTitle: "À retenir",
    className:
      "border-red-200 bg-red-50/80 dark:border-red-900 dark:bg-red-950/30",
    iconClassName: "text-red-600 dark:text-red-400",
  },
}

export function MarkdownCallout({
  variant,
  title,
  content,
}: MarkdownCalloutProps) {
  const configuration = variants[variant]
  const Icon = configuration.icon

  return (
    <aside
      className={cn("not-prose rounded-xl border p-4", configuration.className)}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={cn("mt-0.5 size-5 shrink-0", configuration.iconClassName)}
          aria-hidden="true"
        />

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground">
            {title ?? configuration.defaultTitle}
          </p>

          <MarkdownContent
            content={content}
            className="prose-sm mt-1 text-foreground/85"
          />
        </div>
      </div>
    </aside>
  )
}
