import { Check } from "lucide-react"

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
    <section className="not-prose rounded-xl border bg-card p-5 shadow-sm">
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={`${item.content}-${index}`}
            className="flex items-start gap-3"
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <Check className="size-4" aria-hidden="true" />
            </span>

            <MarkdownContent
              content={item.content}
              className="prose-sm min-w-0 flex-1"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
