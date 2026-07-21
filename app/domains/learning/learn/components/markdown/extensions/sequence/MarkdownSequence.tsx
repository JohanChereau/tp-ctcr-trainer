import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  BusFront,
  Circle,
  Coffee,
  GitBranch,
  Moon,
  type LucideIcon,
} from "lucide-react"

import { cn } from "~/lib/utils"

import type { MarkdownSequenceItem } from "../../parser/types"

type MarkdownSequenceProps = {
  title?: string
  items: MarkdownSequenceItem[]
}

type SequenceKindConfig = {
  icon: LucideIcon
  cardClassName: string
  iconContainerClassName: string
  iconClassName: string
  valueClassName: string
  connectorClassName: string
}

const defaultSequenceConfig: SequenceKindConfig = {
  icon: Circle,
  cardClassName:
    "border-border/80 bg-background/80 dark:border-border dark:bg-background/70",
  iconContainerClassName:
    "border-border bg-muted text-muted-foreground dark:bg-muted/70",
  iconClassName: "text-muted-foreground",
  valueClassName: "text-foreground",
  connectorClassName: "text-muted-foreground/60",
}

const sequenceKindConfig: Record<string, SequenceKindConfig> = {
  drive: {
    icon: BusFront,
    cardClassName:
      "border-blue-200/80 bg-blue-50/70 dark:border-blue-900/70 dark:bg-blue-950/25",
    iconContainerClassName:
      "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
    iconClassName: "text-blue-700 dark:text-blue-300",
    valueClassName: "text-blue-700 dark:text-blue-300",
    connectorClassName: "text-blue-300 dark:text-blue-700",
  },

  conduite: {
    icon: BusFront,
    cardClassName:
      "border-blue-200/80 bg-blue-50/70 dark:border-blue-900/70 dark:bg-blue-950/25",
    iconContainerClassName:
      "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
    iconClassName: "text-blue-700 dark:text-blue-300",
    valueClassName: "text-blue-700 dark:text-blue-300",
    connectorClassName: "text-blue-300 dark:text-blue-700",
  },

  break: {
    icon: Coffee,
    cardClassName:
      "border-amber-200/80 bg-amber-50/70 dark:border-amber-900/70 dark:bg-amber-950/25",
    iconContainerClassName:
      "border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
    iconClassName: "text-amber-700 dark:text-amber-300",
    valueClassName: "text-amber-700 dark:text-amber-300",
    connectorClassName: "text-amber-300 dark:text-amber-700",
  },

  pause: {
    icon: Coffee,
    cardClassName:
      "border-amber-200/80 bg-amber-50/70 dark:border-amber-900/70 dark:bg-amber-950/25",
    iconContainerClassName:
      "border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
    iconClassName: "text-amber-700 dark:text-amber-300",
    valueClassName: "text-amber-700 dark:text-amber-300",
    connectorClassName: "text-amber-300 dark:text-amber-700",
  },

  rest: {
    icon: Moon,
    cardClassName:
      "border-violet-200/80 bg-violet-50/70 dark:border-violet-900/70 dark:bg-violet-950/25",
    iconContainerClassName:
      "border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800 dark:bg-violet-900/60 dark:text-violet-300",
    iconClassName: "text-violet-700 dark:text-violet-300",
    valueClassName: "text-violet-700 dark:text-violet-300",
    connectorClassName: "text-violet-300 dark:text-violet-700",
  },

  repos: {
    icon: Moon,
    cardClassName:
      "border-violet-200/80 bg-violet-50/70 dark:border-violet-900/70 dark:bg-violet-950/25",
    iconContainerClassName:
      "border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800 dark:bg-violet-900/60 dark:text-violet-300",
    iconClassName: "text-violet-700 dark:text-violet-300",
    valueClassName: "text-violet-700 dark:text-violet-300",
    connectorClassName: "text-violet-300 dark:text-violet-700",
  },

  work: {
    icon: BriefcaseBusiness,
    cardClassName:
      "border-emerald-200/80 bg-emerald-50/70 dark:border-emerald-900/70 dark:bg-emerald-950/25",
    iconContainerClassName:
      "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
    iconClassName: "text-emerald-700 dark:text-emerald-300",
    valueClassName: "text-emerald-700 dark:text-emerald-300",
    connectorClassName: "text-emerald-300 dark:text-emerald-700",
  },

  travail: {
    icon: BriefcaseBusiness,
    cardClassName:
      "border-emerald-200/80 bg-emerald-50/70 dark:border-emerald-900/70 dark:bg-emerald-950/25",
    iconContainerClassName:
      "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
    iconClassName: "text-emerald-700 dark:text-emerald-300",
    valueClassName: "text-emerald-700 dark:text-emerald-300",
    connectorClassName: "text-emerald-300 dark:text-emerald-700",
  },
}

function getSequenceConfig(kind?: string) {
  const normalizedKind = kind?.toLowerCase().trim()

  if (!normalizedKind) {
    return defaultSequenceConfig
  }

  return sequenceKindConfig[normalizedKind] ?? defaultSequenceConfig
}

export function MarkdownSequence({ title, items }: MarkdownSequenceProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="not-prose relative overflow-hidden rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 via-background to-emerald-50 p-5 shadow-sm sm:p-6 dark:border-teal-900 dark:from-teal-950/30 dark:via-background dark:to-emerald-950/25">
      <div
        className="absolute -top-12 -right-12 size-36 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-700/20"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
            <GitBranch className="size-5" aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase dark:text-teal-300">
              Séquence
            </p>

            <h3 className="font-semibold text-foreground">
              {title ?? "Déroulement"}
            </h3>
          </div>
        </div>

        <div
          className="mt-6 overflow-x-auto xl:-mx-1 xl:px-1 xl:pb-2"
          role="region"
          aria-label={title ?? "Séquence chronologique"}
          tabIndex={0}
        >
          <ol className="flex flex-col xl:min-w-max xl:flex-row xl:items-stretch">
            {items.map((item, index) => {
              const config = getSequenceConfig(item.kind)
              const Icon = config.icon
              const isLast = index === items.length - 1

              return (
                <li
                  key={`${item.title}-${index}`}
                  className="flex min-w-0 flex-col xl:min-w-56 xl:flex-row xl:items-center"
                >
                  <article
                    className={cn(
                      "group relative flex min-h-28 min-w-0 flex-1 items-center gap-4 overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md xl:min-h-36 xl:flex-col xl:justify-center xl:text-center",
                      config.cardClassName
                    )}
                  >
                    <div
                      className="absolute -top-8 -right-8 size-24 rounded-full bg-current/5 blur-2xl"
                      aria-hidden="true"
                    />

                    <span
                      className={cn(
                        "relative flex size-11 shrink-0 items-center justify-center rounded-full border shadow-sm transition-transform duration-200 group-hover:scale-105 xl:size-12",
                        config.iconContainerClassName
                      )}
                    >
                      <Icon
                        className={cn("size-5 xl:size-6", config.iconClassName)}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="relative min-w-0 flex-1 xl:flex-none">
                      <p className="text-sm leading-snug font-semibold break-words text-foreground sm:text-base">
                        {item.title}
                      </p>

                      {item.value && (
                        <p
                          className={cn(
                            "mt-1.5 text-base font-bold break-words sm:text-lg xl:mt-2 xl:text-xl",
                            config.valueClassName
                          )}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </article>

                  {!isLast && (
                    <>
                      <div className="flex h-11 items-center justify-center xl:hidden">
                        <span className="flex h-full flex-col items-center">
                          <span className="h-3 w-px bg-border" />

                          <ArrowDown
                            className={cn(
                              "size-5 shrink-0",
                              config.connectorClassName
                            )}
                            aria-hidden="true"
                          />

                          <span className="h-3 w-px bg-border" />
                        </span>
                      </div>

                      <div className="hidden w-14 shrink-0 items-center justify-center xl:flex">
                        <div className="flex w-full items-center">
                          <span className="h-px flex-1 bg-border" />

                          <ArrowRight
                            className={cn(
                              "mx-1 size-5 shrink-0",
                              config.connectorClassName
                            )}
                            aria-hidden="true"
                          />

                          <span className="h-px flex-1 bg-border" />
                        </div>
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-4 hidden items-center gap-2 text-xs text-muted-foreground xl:flex">
          <span className="h-px flex-1 bg-border/70" />

          <span>Faire défiler horizontalement si nécessaire</span>

          <span className="h-px flex-1 bg-border/70" />
        </div>
      </div>
    </section>
  )
}
