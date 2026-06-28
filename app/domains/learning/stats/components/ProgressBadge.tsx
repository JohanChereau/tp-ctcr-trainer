import { Badge } from "~/components/ui/badge"

import type { ProgressStatus } from "../utils/getProgressStatus"

type ProgressBadgeProps = {
  status: ProgressStatus
  successRate: number | null
  answeredCount?: number
  labelType?: "question" | "lesson" | "category"
}

export function ProgressBadge({
  status,
  successRate,
  answeredCount,
  labelType = "lesson",
}: ProgressBadgeProps) {
  const content = getProgressBadgeContent({
    status,
    successRate,
    answeredCount,
    labelType,
  })

  return (
    <Badge
      variant="outline"
      className={[
        "h-6 rounded-full border px-2.5 text-[11px] font-medium shadow-none",
        "bg-background/70 backdrop-blur transition-colors",
        content.className,
      ].join(" ")}
    >
      <span
        className={["mr-1.5 size-1.5 rounded-full", content.dotClassName].join(
          " "
        )}
      />

      {content.label}
    </Badge>
  )
}

type GetProgressBadgeContentOptions = {
  status: ProgressStatus
  successRate: number | null
  answeredCount?: number
  labelType: "question" | "lesson" | "category"
}

function getProgressBadgeContent({
  status,
  successRate,
  answeredCount,
  labelType,
}: GetProgressBadgeContentOptions) {
  const rate = successRate === null ? "" : ` · ${successRate}%`

  const attempts =
    labelType === "question" && answeredCount
      ? ` · ${answeredCount} essai${answeredCount > 1 ? "s" : ""}`
      : ""

  switch (status) {
    case "not-started":
      return {
        label: labelType === "question" ? "Jamais faite" : "Non commencé",
        className:
          "border-border/80 bg-muted/30 text-muted-foreground hover:bg-muted/30",
        dotClassName: "bg-muted-foreground/45",
      }

    case "weak":
      return {
        label: `À retravailler${rate}${attempts}`,
        className:
          "border-rose-200/70 bg-rose-50/40 text-rose-700 hover:bg-rose-50/40 dark:border-rose-900/60 dark:bg-rose-950/20 dark:text-rose-300",
        dotClassName: "bg-rose-500/70",
      }

    case "in-progress":
      return {
        label: `En progression${rate}${attempts}`,
        className:
          "border-amber-200/70 bg-amber-50/40 text-amber-700 hover:bg-amber-50/40 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-amber-300",
        dotClassName: "bg-amber-500/70",
      }

    case "good":
      return {
        label: `Bien acquis${rate}${attempts}`,
        className:
          "border-sky-200/70 bg-sky-50/40 text-sky-700 hover:bg-sky-50/40 dark:border-sky-900/60 dark:bg-sky-950/20 dark:text-sky-300",
        dotClassName: "bg-sky-500/70",
      }

    case "mastered":
      return {
        label: `Maîtrisé${rate}${attempts}`,
        className:
          "border-emerald-200/70 bg-emerald-50/40 text-emerald-700 hover:bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:text-emerald-300",
        dotClassName: "bg-emerald-500/70",
      }
  }
}
