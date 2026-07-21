import { Clock3 } from "lucide-react"

import type { MarkdownTimelineStep } from "../../parser/types"

type MarkdownTimelineProps = {
  title?: string
  steps: MarkdownTimelineStep[]
}

export function MarkdownTimeline({ title, steps }: MarkdownTimelineProps) {
  if (steps.length === 0) {
    return null
  }

  return (
    <section className="not-prose relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 via-background to-zinc-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950/40 dark:via-background dark:to-zinc-950/30">
      <div
        className="absolute -top-12 -right-12 size-36 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-700/20"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Clock3 className="size-5" aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-slate-400">
              Chronologie
            </p>

            <h3 className="font-semibold text-foreground">
              {title ?? "Déroulement"}
            </h3>
          </div>
        </div>

        <ol className="mt-6">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1

            return (
              <li
                key={`${step.title}-${index}`}
                className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3"
              >
                <div className="flex flex-col items-center">
                  <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-background text-sm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:text-slate-300">
                    {index + 1}
                  </span>

                  {!isLast && (
                    <span
                      className="min-h-6 w-px flex-1 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className={isLast ? "" : "pb-4"}>
                  <div className="rounded-xl border border-slate-200/80 bg-background/80 px-4 py-3 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800">
                    <p className="font-semibold text-foreground">
                      {step.title}
                    </p>

                    {step.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
