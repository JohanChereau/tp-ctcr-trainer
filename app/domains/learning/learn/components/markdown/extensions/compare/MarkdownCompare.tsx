import { Scale } from "lucide-react"

import type { MarkdownCompareItem } from "../../parser/types"

type MarkdownCompareProps = {
  title?: string
  items: MarkdownCompareItem[]
}

export function MarkdownCompare({ title, items }: MarkdownCompareProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="not-prose space-y-4">
      {title && (
        <div className="flex items-center gap-2">
          <Scale className="size-5 text-primary" aria-hidden="true" />

          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 bg-primary"
              aria-hidden="true"
            />

            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {item.title}
            </p>

            <p className="mt-3 text-2xl font-bold tracking-tight text-primary">
              {item.value}
            </p>

            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
