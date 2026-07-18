import { Eye, EyeOff, MessagesSquare } from "lucide-react"
import { useState } from "react"

import type { MarkdownScenario } from "../../parser/types"
import { MarkdownContent } from "../../shared/MarkdownContent"

type MarkdownScenarioProps = {
  title?: string
  scenario: MarkdownScenario
}

export function MarkdownScenario({ title, scenario }: MarkdownScenarioProps) {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)

  return (
    <section className="not-prose overflow-hidden rounded-xl border bg-card shadow-sm">
      <header className="flex items-center gap-3 border-b bg-violet-50 px-5 py-4 dark:bg-violet-950/25">
        <span className="flex size-10 items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300">
          <MessagesSquare className="size-5" aria-hidden="true" />
        </span>

        <div>
          <p className="text-xs font-semibold tracking-wide text-violet-700 uppercase dark:text-violet-300">
            Mise en situation
          </p>

          <h3 className="font-semibold text-foreground">
            {title ?? "Cas pratique"}
          </h3>
        </div>
      </header>

      <div className="p-5">
        <MarkdownContent content={scenario.situation} className="prose-sm" />

        {scenario.solution && (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => setIsSolutionVisible((current) => !current)}
              aria-expanded={isSolutionVisible}
              className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {isSolutionVisible ? (
                <EyeOff className="size-4" aria-hidden="true" />
              ) : (
                <Eye className="size-4" aria-hidden="true" />
              )}

              {isSolutionVisible
                ? "Masquer la correction"
                : "Afficher la correction"}
            </button>

            {isSolutionVisible && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
                <p className="font-semibold text-emerald-800 dark:text-emerald-300">
                  Correction
                </p>

                <MarkdownContent
                  content={scenario.solution}
                  className="prose-sm mt-2"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
