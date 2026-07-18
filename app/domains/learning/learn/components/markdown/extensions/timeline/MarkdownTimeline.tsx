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
    <section className="not-prose space-y-4 rounded-xl border bg-card p-5 shadow-sm">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <ol>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1

          return (
            <li
              key={`${step.title}-${index}`}
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              <div className="flex w-10 shrink-0 flex-col items-center">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm leading-none font-bold text-primary-foreground">
                  {index + 1}
                </span>

                {!isLast && (
                  <span
                    className="mt-1 h-full w-px bg-border"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="min-w-0 pt-1">
                <p className="font-semibold text-card-foreground">
                  {step.title}
                </p>

                {step.description && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
