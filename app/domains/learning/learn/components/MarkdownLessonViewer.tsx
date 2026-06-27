import type { LessonVideo } from "~/domains/learning/types/learning"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { parseMarkdown } from "./markdown/parseMarkdown"
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
      {video && <VideoEmbed {...video} title="Lesson video" />}

      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <div className="space-y-6">
          {parts.map((part, index) => {
            if (part.type === "video") {
              if (!part.videoId) {
                return null
              }

              return <VideoEmbed key={index} {...part} />
            }

            return (
              <ReactMarkdown key={index} remarkPlugins={[remarkGfm]}>
                {part.content}
              </ReactMarkdown>
            )
          })}
        </div>
      </article>
    </div>
  )
}
