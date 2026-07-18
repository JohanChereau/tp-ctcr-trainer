import type { Components } from "react-markdown"

export const markdownComponents: Components = {
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

  th: ({ children }) => (
    <th className="border-r border-b px-4 py-3 font-semibold last:border-r-0">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-r border-b px-4 py-3 align-top text-card-foreground last:border-r-0 empty:bg-muted/30">
      {children}
    </td>
  ),

  tr: ({ children }) => (
    <tr className="transition-colors even:bg-muted/25 hover:bg-muted/50 last:[&>td]:border-b-0">
      {children}
    </tr>
  ),
}
