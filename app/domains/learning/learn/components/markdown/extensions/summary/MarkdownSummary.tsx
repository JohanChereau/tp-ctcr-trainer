import { BookCheck, Check, ListChecks, Rows3 } from "lucide-react"

import type {
  MarkdownSummaryItem,
  MarkdownSummarySection,
} from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownSummaryProps = {
  title?: string
  sections: MarkdownSummarySection[]
}

export function MarkdownSummary({ title, sections }: MarkdownSummaryProps) {
  const populatedSections = sections.filter(
    (section) => section.items.length > 0
  )

  if (populatedSections.length === 0) {
    return null
  }

  const itemCount = populatedSections.reduce(
    (total, section) => total + section.items.length,
    0
  )

  const hasSeveralSections = populatedSections.length > 1

  return (
    <section className="not-prose relative max-w-full min-w-0 overflow-hidden rounded-xl border border-sky-200 bg-linear-to-br from-sky-50 via-background to-cyan-50 p-5 shadow-sm sm:p-6 dark:border-sky-900 dark:from-sky-950/30 dark:via-background dark:to-cyan-950/30">
      <div
        className="absolute -top-12 -right-12 size-40 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-700/20"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-16 -left-16 size-40 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-700/10"
        aria-hidden="true"
      />

      <div className="relative min-w-0">
        <header className="flex min-w-0 items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300">
              <BookCheck className="size-5" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-sky-700 uppercase dark:text-sky-300">
                Fiche de révision
              </p>

              <h3 className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">
                {title ?? "L'essentiel à retenir"}
              </h3>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            {hasSeveralSections && (
              <span className="flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-xs backdrop-blur-sm dark:border-sky-900 dark:text-sky-300">
                <Rows3 className="size-3.5" aria-hidden="true" />
                {populatedSections.length} sections
              </span>
            )}

            <span className="flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-background/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-xs backdrop-blur-sm dark:border-sky-900 dark:text-sky-300">
              <ListChecks className="size-3.5" aria-hidden="true" />
              {itemCount} point{itemCount > 1 ? "s" : ""}
            </span>
          </div>
        </header>

        <div className="mt-5 min-w-0 space-y-7">
          {populatedSections.map((section, sectionIndex) => (
            <SummarySection
              key={`${section.title ?? "summary"}-${sectionIndex}`}
              section={section}
              showTitle={Boolean(section.title) || populatedSections.length > 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type SummarySectionProps = {
  section: MarkdownSummarySection
  showTitle: boolean
}

function SummarySection({ section, showTitle }: SummarySectionProps) {
  return (
    <section className="min-w-0">
      {showTitle && section.title && (
        <header className="mb-3 flex min-w-0 items-center gap-3">
          <h4 className="shrink-0 text-sm font-semibold text-sky-800 dark:text-sky-200">
            {section.title}
          </h4>

          <span
            className="h-px min-w-0 flex-1 bg-sky-200/80 dark:bg-sky-900"
            aria-hidden="true"
          />

          <span className="shrink-0 text-xs font-medium text-sky-700/60 dark:text-sky-300/60">
            {section.items.length} point
            {section.items.length > 1 ? "s" : ""}
          </span>
        </header>
      )}

      <dl className="grid min-w-0 gap-3 lg:grid-cols-2">
        {section.items.map((item, itemIndex) => (
          <SummaryItem
            key={`${item.key}-${item.value}-${itemIndex}`}
            item={item}
            index={itemIndex}
          />
        ))}
      </dl>
    </section>
  )
}

type SummaryItemProps = {
  item: MarkdownSummaryItem
  index: number
}

function SummaryItem({ item, index }: SummaryItemProps) {
  return (
    <div className="group max-w-full min-w-0 overflow-hidden rounded-xl border border-sky-200/80 bg-background/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md sm:p-5 dark:border-sky-900 dark:bg-background/70 dark:hover:border-sky-800">
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition-colors group-hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-300 dark:group-hover:bg-sky-800">
          <Check className="size-4" aria-hidden="true" />
        </span>

        <dt className="min-w-0 flex-1">
          <MarkdownContent
            content={item.key}
            className="prose-sm min-w-0 font-semibold text-foreground *:my-0"
          />
        </dt>

        <span className="shrink-0 text-xs font-medium text-sky-700/50 tabular-nums dark:text-sky-300/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <dd className="mt-3 max-w-full min-w-0 overflow-hidden">
        <MarkdownContent
          content={item.value}
          className="summary-formula max-w-full min-w-0 text-center font-bold tracking-tight text-sky-700 *:my-0 dark:text-sky-300"
        />
      </dd>

      {item.detail && (
        <MarkdownContent
          content={item.detail}
          className="prose-sm mt-3 min-w-0 border-t border-sky-200/70 pt-3 leading-relaxed text-muted-foreground *:my-0 dark:border-sky-900"
        />
      )}
    </div>
  )
}
