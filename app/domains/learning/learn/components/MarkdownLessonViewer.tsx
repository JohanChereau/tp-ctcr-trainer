import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type MarkdownLessonViewerProps = {
  markdown: string
}

export function MarkdownLessonViewer({ markdown }: MarkdownLessonViewerProps) {
  return (
    <article className="prose max-w-none prose-neutral dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  )
}
