import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownLessonViewerProps = {
  markdown: string

  youtubeVideoId?: string
}

export function MarkdownLessonViewer({
  markdown,
  youtubeVideoId,
}: MarkdownLessonViewerProps) {
  return (
    <div className="space-y-8">
      {youtubeVideoId && (
        <div className="overflow-hidden rounded-xl border">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Lesson video"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  )
}
