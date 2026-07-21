import type { LessonVideo } from "~/domains/learning/types/learning"

import { MarkdownPartRenderer } from "./markdown/MarkdownPartRenderer"
import { parseMarkdown } from "./markdown/parser/parseMarkdown"
import { VideoEmbed } from "./VideoEmbed"

type MarkdownLessonViewerProps = {
  markdown: string
  video?: LessonVideo
}

export function MarkdownLessonViewer({
  markdown,
  video,
}: MarkdownLessonViewerProps) {
  const parts = parseMarkdown(markdown)

  return (
    <div className="space-y-8">
      {video && <VideoEmbed {...video} title="Vidéo de la leçon" />}

      <article className="space-y-6">
        {parts.map((part, index) => (
          <MarkdownPartRenderer key={`${part.type}-${index}`} part={part} />
        ))}
      </article>
    </div>
  )
}
