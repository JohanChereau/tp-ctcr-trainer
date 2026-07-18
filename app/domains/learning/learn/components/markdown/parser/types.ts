import type { LessonVideo } from "~/domains/learning/types/learning"

export type MarkdownCalloutVariant = "info" | "tip" | "warning" | "danger"

export type MarkdownMetric = {
  value: string
  label: string
  detail?: string
}

export type MarkdownTimelineStep = {
  title: string
  description?: string
}

export type MarkdownCompareItem = {
  title: string
  value: string
  description?: string
}

export type MarkdownSequenceItem = {
  title: string
  value?: string
  kind?: string
}

export type MarkdownScenario = {
  situation: string
  solution?: string
}

export type MarkdownChecklistItem = {
  content: string
}

export type MarkdownMemory = {
  content: string
  explanation?: string
}

export type MarkdownTextPart = {
  type: "text"
  content: string
}

export type MarkdownVideoPart = {
  type: "video"
} & LessonVideo

export type MarkdownCalloutPart = {
  type: "callout"
  variant: MarkdownCalloutVariant
  title?: string
  content: string
}

export type MarkdownMetricsPart = {
  type: "metrics"
  title?: string
  metrics: MarkdownMetric[]
}

export type MarkdownTimelinePart = {
  type: "timeline"
  title?: string
  steps: MarkdownTimelineStep[]
}

export type MarkdownComparePart = {
  type: "compare"
  title?: string
  items: MarkdownCompareItem[]
}

export type MarkdownSequencePart = {
  type: "sequence"
  title?: string
  items: MarkdownSequenceItem[]
}

export type MarkdownScenarioPart = {
  type: "scenario"
  title?: string
  scenario: MarkdownScenario
}

export type MarkdownChecklistPart = {
  type: "checklist"
  title?: string
  items: MarkdownChecklistItem[]
}

export type MarkdownMemoryPart = {
  type: "memory"
  title?: string
  memory: MarkdownMemory
}

export type MarkdownPart =
  | MarkdownTextPart
  | MarkdownVideoPart
  | MarkdownCalloutPart
  | MarkdownMetricsPart
  | MarkdownTimelinePart
  | MarkdownComparePart
  | MarkdownSequencePart
  | MarkdownScenarioPart
  | MarkdownChecklistPart
  | MarkdownMemoryPart
