import { Check, ListChecks } from "lucide-react"

import type { MarkdownChecklistItem } from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownChecklistProps = {
  title?: string
  items: MarkdownChecklistItem[]
}

export function MarkdownChecklist({ title, items }: MarkdownChecklistProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="not-prose relative overflow-hidden rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-background to-teal-50 p-5 shadow-sm sm:p-6 dark:border-emerald-900 dark:from-emerald-950/25 dark:via-background dark:to-teal-950/25">
      <div
        className="absolute -top-14 -right-14 size-40 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-700/15"
        aria-hidden="true"
      />

      <div className="relative">
        <header className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
              <ListChecks className="size-5" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-300">
                Checklist
              </p>

              <h3 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                {title ?? "Points à vérifier"}
              </h3>
            </div>
          </div>

          <span className="hidden shrink-0 rounded-full border border-emerald-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-xs backdrop-blur-sm sm:inline-flex dark:border-emerald-900 dark:text-emerald-300">
            {items.length} élément{items.length > 1 ? "s" : ""}
          </span>
        </header>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={`${item.content}-${index}`}
              className="group flex min-w-0 items-start gap-3 rounded-xl border border-emerald-200/80 bg-background/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-emerald-900 dark:bg-background/70 dark:hover:border-emerald-800"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:group-hover:bg-emerald-800">
                <Check className="size-4" aria-hidden="true" />
              </span>

              <MarkdownContent
                content={item.content}
                className="prose-sm min-w-0 flex-1 text-foreground/90 *:my-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
