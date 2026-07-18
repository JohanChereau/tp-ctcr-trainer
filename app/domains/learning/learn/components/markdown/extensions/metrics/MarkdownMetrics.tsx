import type { MarkdownMetric } from "../../parser/types"

type MarkdownMetricsProps = {
  title?: string
  metrics: MarkdownMetric[]
}

export function MarkdownMetrics({ title, metrics }: MarkdownMetricsProps) {
  if (metrics.length === 0) {
    return null
  }

  return (
    <section className="not-prose space-y-3">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric, index) => (
          <article
            key={`${metric.value}-${metric.label}-${index}`}
            className="rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-2xl font-bold tracking-tight text-primary">
              {metric.value}
            </p>

            <p className="mt-1 font-medium text-card-foreground">
              {metric.label}
            </p>

            {metric.detail && (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {metric.detail}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
