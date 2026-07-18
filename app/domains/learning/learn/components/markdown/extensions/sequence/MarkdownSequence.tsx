import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  BusFront,
  Circle,
  Coffee,
  Moon,
  type LucideIcon,
} from "lucide-react"

import type { MarkdownSequenceItem } from "../../parser/types"

type MarkdownSequenceProps = {
  title?: string
  items: MarkdownSequenceItem[]
}

const sequenceIcons: Record<string, LucideIcon> = {
  drive: BusFront,
  conduite: BusFront,

  break: Coffee,
  pause: Coffee,

  rest: Moon,
  repos: Moon,

  work: BriefcaseBusiness,
  travail: BriefcaseBusiness,
}

export function MarkdownSequence({ title, items }: MarkdownSequenceProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="not-prose space-y-4 rounded-xl border bg-card p-5 shadow-sm">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
        {items.map((item, index) => {
          const Icon = item.kind ? (sequenceIcons[item.kind] ?? Circle) : Circle

          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.title}-${index}`}
              className="flex min-w-0 flex-1 flex-col md:flex-row md:items-center"
            >
              <article className="flex h-full min-w-0 flex-1 items-center gap-3 rounded-xl border bg-muted/30 p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <div className="min-w-0">
                  <p className="font-semibold text-card-foreground">
                    {item.title}
                  </p>

                  {item.value && (
                    <p className="mt-0.5 text-lg font-bold text-primary">
                      {item.value}
                    </p>
                  )}
                </div>
              </article>

              {!isLast && (
                <>
                  <ArrowDown
                    className="mx-auto my-2 size-5 shrink-0 text-muted-foreground md:hidden"
                    aria-hidden="true"
                  />

                  <ArrowRight
                    className="mx-2 hidden size-5 shrink-0 text-muted-foreground md:block"
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
