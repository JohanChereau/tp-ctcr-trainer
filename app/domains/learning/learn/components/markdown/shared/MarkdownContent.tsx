import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { cn } from "~/lib/utils"

import { markdownComponents } from "./markdownComponents"

type MarkdownContentProps = {
  content: string
  className?: string
  components?: Components
}

export function MarkdownContent({
  content,
  className,
  components,
}: MarkdownContentProps) {
  return (
    <div
      className={cn(
        "prose max-w-none prose-neutral dark:prose-invert",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ...markdownComponents,
          ...components,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
