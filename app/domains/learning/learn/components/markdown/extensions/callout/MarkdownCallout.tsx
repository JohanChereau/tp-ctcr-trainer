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
  label: string

  containerClassName: string
  glowClassName: string
  secondaryGlowClassName: string

  iconWrapperClassName: string
  labelClassName: string
  contentClassName: string
}

const variants: Record<MarkdownCalloutVariant, CalloutConfiguration> = {
  info: {
    icon: Info,
    defaultTitle: "Information",
    label: "Information",

    containerClassName:
      "border-sky-200 bg-linear-to-br from-sky-50 via-background to-cyan-50 dark:border-sky-900 dark:from-sky-950/30 dark:via-background dark:to-cyan-950/30",

    glowClassName: "bg-sky-200/40 dark:bg-sky-700/20",

    secondaryGlowClassName: "bg-cyan-200/25 dark:bg-cyan-700/10",

    iconWrapperClassName:
      "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",

    labelClassName: "text-sky-700 dark:text-sky-300",

    contentClassName: "text-sky-950/85 dark:text-sky-50/85",
  },

  tip: {
    icon: Lightbulb,
    defaultTitle: "Astuce",
    label: "Conseil",

    containerClassName:
      "border-emerald-200 bg-linear-to-br from-emerald-50 via-background to-green-50 dark:border-emerald-900 dark:from-emerald-950/30 dark:via-background dark:to-green-950/30",

    glowClassName: "bg-emerald-200/40 dark:bg-emerald-700/20",

    secondaryGlowClassName: "bg-green-200/25 dark:bg-green-700/10",

    iconWrapperClassName:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",

    labelClassName: "text-emerald-700 dark:text-emerald-300",

    contentClassName: "text-emerald-950/85 dark:text-emerald-50/85",
  },

  warning: {
    icon: AlertTriangle,
    defaultTitle: "Attention",
    label: "Attention",

    containerClassName:
      "border-amber-200 bg-linear-to-br from-amber-50 via-background to-orange-50 dark:border-amber-900 dark:from-amber-950/30 dark:via-background dark:to-orange-950/30",

    glowClassName: "bg-amber-200/40 dark:bg-amber-700/20",

    secondaryGlowClassName: "bg-orange-200/25 dark:bg-orange-700/10",

    iconWrapperClassName:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",

    labelClassName: "text-amber-700 dark:text-amber-300",

    contentClassName: "text-amber-950/85 dark:text-amber-50/85",
  },

  danger: {
    icon: CircleAlert,
    defaultTitle: "À retenir",
    label: "Important",

    containerClassName:
      "border-red-200 bg-linear-to-br from-red-50 via-background to-rose-50 dark:border-red-900 dark:from-red-950/30 dark:via-background dark:to-rose-950/30",

    glowClassName: "bg-red-200/40 dark:bg-red-700/20",

    secondaryGlowClassName: "bg-rose-200/25 dark:bg-rose-700/10",

    iconWrapperClassName:
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",

    labelClassName: "text-red-700 dark:text-red-300",

    contentClassName: "text-red-950/85 dark:text-red-50/85",
  },
}

export function MarkdownCallout({
  variant,
  title,
  content,
}: MarkdownCalloutProps) {
  const configuration = variants[variant]
  const Icon = configuration.icon

  const hasCustomTitle = Boolean(title)

  return (
    <aside
      className={cn(
        "not-prose relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6",
        configuration.containerClassName
      )}
    >
      <div
        className={cn(
          "absolute -top-12 -right-12 size-40 rounded-full blur-3xl",
          configuration.glowClassName
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "absolute -bottom-16 -left-16 size-40 rounded-full blur-3xl",
          configuration.secondaryGlowClassName
        )}
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-3.5">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full shadow-xs",
            configuration.iconWrapperClassName
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <header>
            {hasCustomTitle ? (
              <>
                <p
                  className={cn(
                    "text-xs font-semibold tracking-wide uppercase",
                    configuration.labelClassName
                  )}
                >
                  {configuration.label}
                </p>

                <h3 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                  {title}
                </h3>
              </>
            ) : (
              <h3
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase",
                  configuration.labelClassName
                )}
              >
                {configuration.defaultTitle}
              </h3>
            )}
          </header>

          <MarkdownContent
            content={content}
            className={cn(
              "prose-sm mt-4 max-w-none leading-relaxed",
              "prose-p:my-3 prose-p:first:mt-0 prose-p:last:mb-0",
              "prose-ol:my-3 prose-ul:my-3 prose-li:my-1",
              configuration.contentClassName
            )}
          />
        </div>
      </div>
    </aside>
  )
}
