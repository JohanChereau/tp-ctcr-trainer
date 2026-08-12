import { useEffect, useRef } from "react"
import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const mathContainer = container

    function fitMathFormulas() {
      const formulas =
        mathContainer.querySelectorAll<HTMLElement>(".katex-display")

      formulas.forEach((display) => {
        const katex = display.querySelector<HTMLElement>(".katex")

        if (!katex) {
          return
        }

        katex.style.fontSize = ""

        const availableWidth = display.clientWidth
        const formulaWidth = katex.scrollWidth

        if (formulaWidth <= availableWidth || availableWidth === 0) {
          return
        }

        const ratio = availableWidth / formulaWidth

        katex.style.fontSize = `${Math.max(ratio, 0.65)}em`
      })
    }

    fitMathFormulas()

    const resizeObserver = new ResizeObserver(fitMathFormulas)
    resizeObserver.observe(mathContainer)

    return () => {
      resizeObserver.disconnect()
    }
  }, [content])

  return (
    <div
      ref={containerRef}
      className={cn(
        "prose max-w-none prose-neutral dark:prose-invert",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          [
            rehypeKatex,
            {
              throwOnError: false,
              strict: false,
            },
          ],
        ]}
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
