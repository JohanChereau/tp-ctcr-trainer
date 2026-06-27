import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { parseMarkdown } from "./markdown/parseMarkdown"
import { VideoEmbed } from "./VideoEmbed"

type MarkdownLessonViewerProps = {
  markdown: string
  youtubeVideoId?: string
}

export function MarkdownLessonViewer({
  markdown,
  youtubeVideoId,
}: MarkdownLessonViewerProps) {
  const parts = parseMarkdown(markdown)

  return (
    <div className="space-y-8">
      {youtubeVideoId && (
        <VideoEmbed
          provider="youtube"
          videoId={youtubeVideoId}
          title="Lesson video"
        />
      )}

      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <div className="space-y-6">
          {parts.map((part, index) => {
            if (part.type === "video") {
              if (!part.videoId) {
                return null
              }

              return (
                <VideoEmbed
                  key={index}
                  provider={part.provider}
                  videoId={part.videoId}
                  hash={part.hash}
                  start={part.start}
                />
              )
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
