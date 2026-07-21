import { VideoEmbed } from "../VideoEmbed"
import { MarkdownCallout } from "./extensions/callout/MarkdownCallout"
import { MarkdownChecklist } from "./extensions/checklist/MarkdownChecklist"
import { MarkdownCompare } from "./extensions/compare/MarkdownCompare"
import { MarkdownMemory } from "./extensions/memory/MarkdownMemory"
import { MarkdownMetrics } from "./extensions/metrics/MarkdownMetrics"
import { MarkdownScenario } from "./extensions/scenario/MarkdownScenario"
import { MarkdownSchedule } from "./extensions/schedule/MarkdownSchedule"
import { MarkdownSequence } from "./extensions/sequence/MarkdownSequence"
import { MarkdownSummary } from "./extensions/summary/MarkdownSummary"
import { MarkdownTimeline } from "./extensions/timeline/MarkdownTimeline"
import type { MarkdownPart } from "./parser/types"
import { MarkdownContent } from "./shared/MarkdownContent"

type MarkdownPartRendererProps = {
  part: MarkdownPart
}

export function MarkdownPartRenderer({ part }: MarkdownPartRendererProps) {
  switch (part.type) {
    case "video":
      if (!part.videoId) {
        return null
      }

      return <VideoEmbed {...part} />

    case "callout":
      return <MarkdownCallout {...part} />

    case "metrics":
      return <MarkdownMetrics {...part} />

    case "timeline":
      return <MarkdownTimeline {...part} />

    case "compare":
      return <MarkdownCompare {...part} />

    case "sequence":
      return <MarkdownSequence {...part} />

    case "scenario":
      return <MarkdownScenario {...part} />

    case "checklist":
      return <MarkdownChecklist {...part} />

    case "memory":
      return <MarkdownMemory {...part} />

    case "summary":
      return <MarkdownSummary {...part} />

    case "schedule":
      return <MarkdownSchedule {...part} />

    case "text":
      return <MarkdownContent content={part.content} />
  }
}
