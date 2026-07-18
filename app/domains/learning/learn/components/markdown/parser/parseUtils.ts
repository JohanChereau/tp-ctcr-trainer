export function parseNonEmptyLines(content: string): string[] {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

export function parseColumns(line: string): string[] {
  return line.split("|").map((column) => column.trim())
}

export function splitContent(
  content: string,
  separator = /^\s*---\s*$/m
): [string, string | undefined] {
  const match = separator.exec(content)

  if (!match || match.index === undefined) {
    return [content.trim(), undefined]
  }

  const before = content.slice(0, match.index).trim()
  const after = content.slice(match.index + match[0].length).trim()

  return [before, after || undefined]
}

export function cleanListPrefix(line: string): string {
  return line
    .replace(/^[-*+]\s+/, "")
    .replace(/^\d+\.\s+/, "")
    .replace(/^\[[ xX]\]\s*/, "")
    .trim()
}
