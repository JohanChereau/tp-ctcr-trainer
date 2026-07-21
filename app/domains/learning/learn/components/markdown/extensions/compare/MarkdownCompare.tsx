import { Scale } from "lucide-react"

import type { MarkdownCompareItem } from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownCompareProps = {
  title?: string
  items: MarkdownCompareItem[]
}

export function MarkdownCompare({ title, items }: MarkdownCompareProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="not-prose relative overflow-hidden rounded-2xl border border-violet-200 bg-linear-to-br from-violet-50 via-background to-indigo-50 p-5 shadow-sm sm:p-6 dark:border-violet-900 dark:from-violet-950/25 dark:via-background dark:to-indigo-950/25">
      <div
        className="absolute -top-16 -right-16 size-48 rounded-full bg-violet-200/35 blur-3xl dark:bg-violet-700/15"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-20 -left-20 size-48 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-700/10"
        aria-hidden="true"
      />

      <div className="relative">
        <header className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 shadow-xs dark:bg-violet-900 dark:text-violet-300">
              <Scale className="size-5" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-violet-700 uppercase dark:text-violet-300">
                Comparaison
              </p>

              <h3 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                {title ?? "À comparer"}
              </h3>
            </div>
          </div>

          <span className="hidden shrink-0 rounded-full border border-violet-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-violet-700 shadow-xs backdrop-blur-sm sm:inline-flex dark:border-violet-900 dark:text-violet-300">
            {items.length} élément{items.length > 1 ? "s" : ""}
          </span>
        </header>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group relative min-w-0 overflow-hidden rounded-xl border border-violet-200/80 bg-background/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md sm:p-5 dark:border-violet-900 dark:bg-background/70 dark:hover:border-violet-800"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-violet-500 to-indigo-500 opacity-70"
                aria-hidden="true"
              />

              <div className="flex items-start gap-3 pl-1">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-semibold text-violet-700 tabular-nums dark:bg-violet-900 dark:text-violet-300">
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug font-semibold wrap-break-word text-foreground">
                    {item.title}
                  </p>

                  <p className="mt-3 text-xl leading-tight font-bold tracking-tight wrap-break-word text-violet-700 sm:text-2xl dark:text-violet-300">
                    {item.value}
                  </p>

                  {item.description && (
                    <MarkdownContent
                      content={item.description}
                      className="prose-sm mt-3 min-w-0 text-muted-foreground *:first:mt-0 *:last:mb-0"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
