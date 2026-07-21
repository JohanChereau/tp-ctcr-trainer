import type { Components } from "react-markdown"

export const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="my-3 leading-relaxed first:mt-0 last:mb-0">{children}</p>
  ),

  ul: ({ children }) => (
    <ul className="my-3 list-disc space-y-1.5 pl-5 marker:text-current marker:opacity-60 first:mt-0 last:mb-0">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="my-3 list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-current marker:opacity-70 first:mt-0 last:mb-0">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-1 leading-relaxed [&>p]:my-0">{children}</li>
  ),

  strong: ({ children }) => (
    <strong className="font-bold text-inherit">{children}</strong>
  ),

  em: ({ children }) => <em className="text-inherit">{children}</em>,

  a: ({ children, href }) => (
    <a
      href={href}
      className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-primary/30 bg-muted/30 py-2 pr-4 pl-4 text-muted-foreground italic first:mt-0 last:mb-0">
      {children}
    </blockquote>
  ),

  code: ({ children, className }) => {
    const isCodeBlock = Boolean(className)

    if (isCodeBlock) {
      return <code className={className}>{children}</code>
    }

    return (
      <code className="rounded-md border bg-muted px-1.5 py-0.5 font-mono text-[0.875em] font-medium text-foreground">
        {children}
      </code>
    )
  },

  pre: ({ children }) => (
    <pre className="not-prose my-5 overflow-x-auto rounded-xl border bg-muted/50 p-4 font-mono text-sm leading-relaxed text-foreground shadow-sm">
      {children}
    </pre>
  ),

  hr: () => <hr className="my-8 border-border" />,

  table: ({ children }) => (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border bg-card shadow-sm">
      <table className="w-full min-w-xl border-collapse text-sm">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-muted/80 text-left text-foreground">{children}</thead>
  ),

  tbody: ({ children }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),

  th: ({ children }) => (
    <th className="border-r border-b px-4 py-3 font-semibold last:border-r-0">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-r px-4 py-3 align-top text-card-foreground last:border-r-0 empty:bg-muted/30 [&>p]:my-0">
      {children}
    </td>
  ),

  tr: ({ children }) => (
    <tr className="transition-colors even:bg-muted/25 hover:bg-muted/50">
      {children}
    </tr>
  ),
}
