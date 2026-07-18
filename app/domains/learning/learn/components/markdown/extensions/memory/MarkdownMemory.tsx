import { Brain } from "lucide-react"

import type { MarkdownMemory } from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownMemoryProps = {
  title?: string
  memory: MarkdownMemory
}

export function MarkdownMemory({ title, memory }: MarkdownMemoryProps) {
  return (
    <section className="not-prose relative overflow-hidden rounded-xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-background to-violet-50 p-6 shadow-sm dark:border-fuchsia-900 dark:from-fuchsia-950/30 dark:via-background dark:to-violet-950/30">
      <div
        className="absolute -top-10 -right-10 size-32 rounded-full bg-fuchsia-200/40 blur-2xl dark:bg-fuchsia-700/20"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900 dark:text-fuchsia-300">
            <Brain className="size-5" aria-hidden="true" />
          </span>

          <div>
            <p className="text-xs font-semibold tracking-wide text-fuchsia-700 uppercase dark:text-fuchsia-300">
              Mémo
            </p>

            <h3 className="font-semibold text-foreground">
              {title ?? "À mémoriser"}
            </h3>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-fuchsia-200/80 bg-background/80 px-5 py-4 text-center shadow-sm dark:border-fuchsia-900">
          <MarkdownContent
            content={memory.content}
            className="prose-lg font-semibold *:my-0"
          />
        </div>

        {memory.explanation && (
          <MarkdownContent
            content={memory.explanation}
            className="prose-sm mt-4 text-muted-foreground"
          />
        )}
      </div>
    </section>
  )
}
