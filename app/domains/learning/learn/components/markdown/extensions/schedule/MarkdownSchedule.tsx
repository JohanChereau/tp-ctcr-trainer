import {
  BriefcaseBusiness,
  BusFront,
  CirclePause,
  Clock3,
  Moon,
  Route,
  type LucideIcon,
} from "lucide-react"

import { cn } from "~/lib/utils"

import type {
  MarkdownScheduleItem,
  MarkdownScheduleKind,
} from "../../parser/types"

type MarkdownScheduleProps = {
  title?: string
  items: MarkdownScheduleItem[]
}

type ScheduleKindConfig = {
  label: string
  icon: LucideIcon

  blockClassName: string
  accentClassName: string
  iconContainerClassName: string
  labelClassName: string
  durationClassName: string
  legendClassName: string
}

const scheduleKindConfig: Record<MarkdownScheduleKind, ScheduleKindConfig> = {
  drive: {
    label: "Conduite",
    icon: BusFront,

    blockClassName:
      "border-blue-200/80 bg-linear-to-br from-blue-50/95 via-background/95 to-sky-50/90 dark:border-blue-900/80 dark:from-blue-950/45 dark:via-background/90 dark:to-sky-950/30",

    accentClassName:
      "from-blue-500 to-sky-400 dark:from-blue-400 dark:to-sky-300",

    iconContainerClassName:
      "bg-blue-100 text-blue-700 ring-blue-200/80 dark:bg-blue-900/70 dark:text-blue-300 dark:ring-blue-800",

    labelClassName: "text-blue-700 dark:text-blue-300",

    durationClassName: "text-blue-700 dark:text-blue-300",

    legendClassName: "bg-blue-500 dark:bg-blue-400",
  },

  work: {
    label: "Autres tâches",
    icon: BriefcaseBusiness,

    blockClassName:
      "border-amber-200/80 bg-linear-to-br from-amber-50/95 via-background/95 to-orange-50/90 dark:border-amber-900/80 dark:from-amber-950/45 dark:via-background/90 dark:to-orange-950/30",

    accentClassName:
      "from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300",

    iconContainerClassName:
      "bg-amber-100 text-amber-700 ring-amber-200/80 dark:bg-amber-900/70 dark:text-amber-300 dark:ring-amber-800",

    labelClassName: "text-amber-700 dark:text-amber-300",

    durationClassName: "text-amber-700 dark:text-amber-300",

    legendClassName: "bg-amber-500 dark:bg-amber-400",
  },

  availability: {
    label: "Disponibilité",
    icon: Clock3,

    blockClassName:
      "border-violet-200/80 bg-linear-to-br from-violet-50/95 via-background/95 to-fuchsia-50/90 dark:border-violet-900/80 dark:from-violet-950/45 dark:via-background/90 dark:to-fuchsia-950/30",

    accentClassName:
      "from-violet-500 to-fuchsia-400 dark:from-violet-400 dark:to-fuchsia-300",

    iconContainerClassName:
      "bg-violet-100 text-violet-700 ring-violet-200/80 dark:bg-violet-900/70 dark:text-violet-300 dark:ring-violet-800",

    labelClassName: "text-violet-700 dark:text-violet-300",

    durationClassName: "text-violet-700 dark:text-violet-300",

    legendClassName: "bg-violet-500 dark:bg-violet-400",
  },

  break: {
    label: "Pause",
    icon: CirclePause,

    blockClassName:
      "border-emerald-200/80 bg-linear-to-br from-emerald-50/95 via-background/95 to-teal-50/90 dark:border-emerald-900/80 dark:from-emerald-950/45 dark:via-background/90 dark:to-teal-950/30",

    accentClassName:
      "from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300",

    iconContainerClassName:
      "bg-emerald-100 text-emerald-700 ring-emerald-200/80 dark:bg-emerald-900/70 dark:text-emerald-300 dark:ring-emerald-800",

    labelClassName: "text-emerald-700 dark:text-emerald-300",

    durationClassName: "text-emerald-700 dark:text-emerald-300",

    legendClassName: "bg-emerald-500 dark:bg-emerald-400",
  },

  rest: {
    label: "Repos",
    icon: Moon,

    blockClassName:
      "border-slate-200/90 bg-linear-to-br from-slate-50/95 via-background/95 to-slate-100/90 dark:border-slate-800 dark:from-slate-900/90 dark:via-background/90 dark:to-slate-950/80",

    accentClassName:
      "from-slate-500 to-slate-400 dark:from-slate-400 dark:to-slate-300",

    iconContainerClassName:
      "bg-slate-200/80 text-slate-700 ring-slate-300/80 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",

    labelClassName: "text-slate-600 dark:text-slate-300",

    durationClassName: "text-slate-700 dark:text-slate-200",

    legendClassName: "bg-slate-500 dark:bg-slate-400",
  },
}

const PIXELS_PER_MINUTE = 1.35
const MINIMUM_BLOCK_WIDTH = 150

export function MarkdownSchedule({ title, items }: MarkdownScheduleProps) {
  if (items.length === 0) {
    return null
  }

  const usedKinds = Array.from(new Set(items.map((item) => item.kind)))
  const totalDurationMinutes = items.reduce(
    (total, item) => total + item.durationMinutes,
    0
  )

  return (
    <section className="not-prose relative overflow-hidden rounded-2xl border border-indigo-200 bg-linear-to-br from-indigo-50 via-background to-blue-50 shadow-sm dark:border-indigo-900 dark:from-indigo-950/25 dark:via-background dark:to-blue-950/25">
      <div
        className="absolute -top-20 -right-20 size-56 rounded-full bg-indigo-200/35 blur-3xl dark:bg-indigo-700/15"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-24 -left-20 size-56 rounded-full bg-blue-200/25 blur-3xl dark:bg-blue-700/10"
        aria-hidden="true"
      />

      <div className="relative">
        <header className="flex items-start justify-between gap-4 border-b border-indigo-200/70 px-5 py-5 sm:px-6 dark:border-indigo-900/70">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 shadow-xs ring-1 ring-indigo-200/80 dark:bg-indigo-900 dark:text-indigo-300 dark:ring-indigo-800">
              <Route className="size-5" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-indigo-700 uppercase dark:text-indigo-300">
                Déroulement du service
              </p>

              <h3 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                {title ?? "Chronologie du service"}
              </h3>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <span className="rounded-full border border-indigo-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-indigo-700 shadow-xs backdrop-blur-sm dark:border-indigo-900 dark:text-indigo-300">
              {items.length} période{items.length > 1 ? "s" : ""}
            </span>

            <span className="rounded-full border border-indigo-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-xs backdrop-blur-sm dark:border-indigo-900">
              {formatDuration(totalDurationMinutes)}
            </span>
          </div>
        </header>

        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <div
            className="-mx-1 overflow-x-auto px-1 pb-3"
            role="region"
            aria-label={title ?? "Composition chronologique du service"}
            tabIndex={0}
          >
            <div className="relative min-w-max pt-5">
              <div
                className="absolute top-9 right-0 left-0 h-px bg-linear-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-800"
                aria-hidden="true"
              />

              <ol className="relative flex items-stretch gap-3">
                {items.map((item, index) => {
                  const config = scheduleKindConfig[item.kind]
                  const Icon = config.icon

                  const width = Math.max(
                    item.durationMinutes * PIXELS_PER_MINUTE,
                    MINIMUM_BLOCK_WIDTH
                  )

                  return (
                    <li
                      key={`${item.label}-${item.duration}-${index}`}
                      className="relative pt-5"
                    >
                      <span
                        className={cn(
                          "absolute top-0 left-1/2 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-br text-xs font-bold text-white shadow-sm ring-4 ring-background",
                          config.accentClassName
                        )}
                      >
                        {index + 1}
                      </span>

                      <article
                        className={cn(
                          "group relative flex min-h-44 shrink-0 flex-col overflow-hidden rounded-xl border p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5",
                          config.blockClassName
                        )}
                        style={{ width }}
                      >
                        <div
                          className={cn(
                            "absolute inset-x-0 top-0 h-1 bg-linear-to-r",
                            config.accentClassName
                          )}
                          aria-hidden="true"
                        />

                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={cn(
                              "flex size-10 shrink-0 items-center justify-center rounded-xl shadow-xs ring-1",
                              config.iconContainerClassName
                            )}
                          >
                            <Icon className="size-5" aria-hidden="true" />
                          </span>

                          <span
                            className={cn(
                              "rounded-full bg-background/70 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide uppercase shadow-xs backdrop-blur-sm",
                              config.labelClassName
                            )}
                          >
                            {config.label}
                          </span>
                        </div>

                        <div className="mt-auto pt-6">
                          <p className="text-sm leading-snug font-semibold wrap-break-word text-foreground">
                            {item.label}
                          </p>

                          <p
                            className={cn(
                              "mt-2 text-2xl leading-none font-bold tracking-tight tabular-nums",
                              config.durationClassName
                            )}
                          >
                            {item.duration}
                          </p>
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground sm:hidden">
            <span className="h-px flex-1 bg-border" />

            <span>Faire défiler horizontalement</span>

            <span className="h-px flex-1 bg-border" />
          </div>
        </div>

        <footer className="border-t border-indigo-200/70 bg-background/35 px-5 py-4 backdrop-blur-sm sm:px-6 dark:border-indigo-900/70">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs text-muted-foreground"
            aria-label="Légende des activités"
          >
            {usedKinds.map((kind) => {
              const config = scheduleKindConfig[kind]
              const Icon = config.icon

              return (
                <li key={kind} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex size-6 items-center justify-center rounded-lg text-white shadow-xs",
                      config.legendClassName
                    )}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>

                  <span>{config.label}</span>
                </li>
              )
            })}
          </ul>
        </footer>
      </div>
    </section>
  )
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours === 0) {
    return `${minutes} min`
  }

  if (minutes === 0) {
    return `${hours} h`
  }

  return `${hours} h ${minutes.toString().padStart(2, "0")}`
}
