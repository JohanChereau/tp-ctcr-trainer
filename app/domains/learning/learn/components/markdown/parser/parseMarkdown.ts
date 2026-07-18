import type { VideoProvider } from "~/domains/learning/types/learning"

import {
  cleanListPrefix,
  parseColumns,
  parseNonEmptyLines,
  splitContent,
} from "./parseUtils"
import { parseVideoValue } from "./parseVideo"
import type {
  MarkdownCalloutVariant,
  MarkdownChecklistItem,
  MarkdownCompareItem,
  MarkdownMetric,
  MarkdownPart,
  MarkdownSequenceItem,
  MarkdownTimelineStep,
} from "./types"

/**
 * Names of all supported fenced Markdown extensions.
 */
const BLOCK_NAMES = [
  "info",
  "tip",
  "warning",
  "danger",
  "metrics",
  "timeline",
  "compare",
  "sequence",
  "scenario",
  "checklist",
  "memory",
] as const

type MarkdownBlockName = (typeof BLOCK_NAMES)[number]

/**
 * Describes an opening custom Markdown block.
 */
type MarkdownBlockOpening = {
  kind: MarkdownBlockName
  title?: string
}

/**
 * Describes a Markdown code fence.
 */
type MarkdownCodeFence = {
  character: "`" | "~"
  length: number
}

/**
 * Matches a standalone YouTube or Vimeo embed.
 *
 * Leading and trailing whitespace is allowed.
 */
const VIDEO_REGEX = /^\s*::(youtube|vimeo)\[([^\]]+)\]\s*$/

/**
 * Matches the opening line of a custom Markdown block.
 *
 * Leading and trailing whitespace is allowed so blocks may be used in
 * indented Markdown contexts.
 */
const BLOCK_OPENING_REGEX = /^\s*:::([a-z]+)(?:\[([^\]]+)\])?\s*$/

/**
 * Matches the closing line of a custom Markdown block.
 *
 * Leading and trailing whitespace is allowed.
 */
const BLOCK_CLOSING_REGEX = /^\s*:::\s*$/

/**
 * Matches the opening or closing line of a fenced code block.
 *
 * Both backtick and tilde fences are supported.
 *
 * @example
 * ```md
 *
 * @example
 * ~~~ts
 */
const CODE_FENCE_REGEX = /^\s*(`{3,}|~{3,})/

/**
 * Parses a Markdown document into ordered renderable parts.
 *
 * The parser scans the document line by line instead of splitting it with a
 * multiline regular expression. This ensures that custom extension syntax
 * written inside fenced code blocks remains regular Markdown code.
 *
 * The parser supports:
 *
 * - regular Markdown;
 * - fenced Markdown code blocks;
 * - YouTube and Vimeo embeds;
 * - custom fenced extensions.
 *
 * Malformed or unclosed custom blocks are preserved as regular Markdown
 * instead of consuming the rest of the document.
 *
 * @param markdown - Raw Markdown document.
 * @returns Ordered Markdown parts ready to be rendered.
 */
export function parseMarkdown(markdown: string): MarkdownPart[] {
  const normalizedMarkdown = normalizeLineEndings(markdown)
  const lines = normalizedMarkdown.split("\n")

  const parts: MarkdownPart[] = []
  const textBuffer: string[] = []

  let lineIndex = 0

  while (lineIndex < lines.length) {
    const line = lines[lineIndex]

    const codeFence = parseCodeFence(line)

    if (codeFence) {
      const codeBlock = consumeCodeBlock(lines, lineIndex, codeFence)

      textBuffer.push(...codeBlock.lines)
      lineIndex = codeBlock.nextLineIndex

      continue
    }

    const videoPart = parseVideoLine(line)

    if (videoPart) {
      flushTextBuffer(parts, textBuffer)
      parts.push(videoPart)

      lineIndex += 1

      continue
    }

    const blockOpening = parseBlockOpening(line)

    if (blockOpening) {
      const block = consumeMarkdownBlock(lines, lineIndex)

      if (block) {
        flushTextBuffer(parts, textBuffer)

        parts.push(
          createMarkdownBlockPart(
            blockOpening.kind,
            blockOpening.title,
            block.content
          )
        )

        lineIndex = block.nextLineIndex

        continue
      }
    }

    textBuffer.push(line)
    lineIndex += 1
  }

  flushTextBuffer(parts, textBuffer)

  return parts
}

/**
 * Normalizes Windows and legacy carriage-return line endings to `\n`.
 *
 * @param value - Text whose line endings should be normalized.
 * @returns Text using line-feed characters only.
 */
function normalizeLineEndings(value: string): string {
  return value.replace(/\r\n?/g, "\n")
}

/**
 * Adds the current text buffer to the parsed parts.
 *
 * Empty or whitespace-only buffers are discarded. The existing buffer is
 * always cleared after the operation.
 *
 * @param parts - Parsed part collection.
 * @param textBuffer - Buffered regular Markdown lines.
 */
function flushTextBuffer(parts: MarkdownPart[], textBuffer: string[]): void {
  const content = textBuffer.join("\n")

  textBuffer.length = 0

  if (!content.trim()) {
    return
  }

  parts.push({
    type: "text",
    content,
  })
}

/**
 * Parses a standalone video embed line.
 *
 * @param line - Current Markdown line.
 * @returns A video part when the line is valid, otherwise `undefined`.
 */
function parseVideoLine(line: string): MarkdownPart | undefined {
  const match = line.match(VIDEO_REGEX)

  if (!match) {
    return undefined
  }

  const provider = match[1] as VideoProvider
  const value = match[2].trim()

  return {
    type: "video",
    ...parseVideoValue(provider, value),
  }
}

/**
 * Parses the opening line of a custom Markdown block.
 *
 * Unknown block names are ignored and remain regular Markdown.
 *
 * @param line - Current Markdown line.
 * @returns Parsed opening information when supported.
 */
function parseBlockOpening(line: string): MarkdownBlockOpening | undefined {
  const match = line.match(BLOCK_OPENING_REGEX)

  if (!match) {
    return undefined
  }

  const rawKind = match[1]
  const rawTitle = match[2]

  if (!isMarkdownBlockName(rawKind)) {
    return undefined
  }

  return {
    kind: rawKind,
    title: rawTitle?.trim() || undefined,
  }
}

/**
 * Determines whether a value is a supported custom block name.
 *
 * @param value - Block name to validate.
 * @returns `true` when the block name is supported.
 */
function isMarkdownBlockName(value: string): value is MarkdownBlockName {
  return BLOCK_NAMES.includes(value as MarkdownBlockName)
}

/**
 * Consumes a custom Markdown block until its closing `:::` line.
 *
 * Fenced code blocks inside an extension are skipped while searching for the
 * extension closing line. Therefore a `:::` line written inside a code sample
 * cannot accidentally close the surrounding extension.
 *
 * @param lines - Complete Markdown line collection.
 * @param openingLineIndex - Index of the block opening line.
 * @returns Parsed block content, or `undefined` if no closing line exists.
 */
function consumeMarkdownBlock(
  lines: string[],
  openingLineIndex: number
):
  | {
      content: string
      nextLineIndex: number
    }
  | undefined {
  const contentLines: string[] = []

  let lineIndex = openingLineIndex + 1

  while (lineIndex < lines.length) {
    const line = lines[lineIndex]
    const codeFence = parseCodeFence(line)

    if (codeFence) {
      const codeBlock = consumeCodeBlock(lines, lineIndex, codeFence)

      contentLines.push(...codeBlock.lines)
      lineIndex = codeBlock.nextLineIndex

      continue
    }

    if (BLOCK_CLOSING_REGEX.test(line)) {
      return {
        content: contentLines.join("\n").trim(),
        nextLineIndex: lineIndex + 1,
      }
    }

    contentLines.push(line)
    lineIndex += 1
  }

  return undefined
}

/**
 * Parses a Markdown code-fence marker.
 *
 * @param line - Markdown line to inspect.
 * @returns Fence description when the line opens or closes a code block.
 */
function parseCodeFence(line: string): MarkdownCodeFence | undefined {
  const match = line.match(CODE_FENCE_REGEX)

  if (!match) {
    return undefined
  }

  const marker = match[1]
  const character = marker[0]

  if (character !== "`" && character !== "~") {
    return undefined
  }

  return {
    character,
    length: marker.length,
  }
}

/**
 * Consumes a fenced code block including its opening and closing lines.
 *
 * The closing fence must use the same character and contain at least as many
 * characters as the opening fence.
 *
 * When no closing fence exists, all remaining lines are treated as code.
 *
 * @param lines - Complete Markdown line collection.
 * @param openingLineIndex - Index of the opening fence.
 * @param openingFence - Description of the opening fence.
 * @returns Consumed lines and the index at which parsing should continue.
 */
function consumeCodeBlock(
  lines: string[],
  openingLineIndex: number,
  openingFence: MarkdownCodeFence
): {
  lines: string[]
  nextLineIndex: number
} {
  const codeLines = [lines[openingLineIndex]]

  let lineIndex = openingLineIndex + 1

  while (lineIndex < lines.length) {
    const line = lines[lineIndex]

    codeLines.push(line)

    if (isMatchingClosingFence(line, openingFence)) {
      return {
        lines: codeLines,
        nextLineIndex: lineIndex + 1,
      }
    }

    lineIndex += 1
  }

  return {
    lines: codeLines,
    nextLineIndex: lines.length,
  }
}

/**
 * Determines whether a line closes a specific Markdown code fence.
 *
 * A closing fence:
 *
 * - uses the same character as the opening fence;
 * - contains at least the same number of fence characters;
 * - contains no language identifier or other non-whitespace content.
 *
 * @param line - Candidate closing line.
 * @param openingFence - Fence that opened the code block.
 * @returns `true` when the line closes the code block.
 */
function isMatchingClosingFence(
  line: string,
  openingFence: MarkdownCodeFence
): boolean {
  const trimmedLine = line.trim()

  if (!trimmedLine) {
    return false
  }

  const expectedCharacter = openingFence.character

  if (
    trimmedLine[0] !== expectedCharacter ||
    trimmedLine.length < openingFence.length
  ) {
    return false
  }

  return [...trimmedLine].every((character) => character === expectedCharacter)
}

/**
 * Creates a typed Markdown part from a custom extension.
 *
 * @param kind - Supported extension name.
 * @param title - Optional extension title.
 * @param content - Raw extension content.
 * @returns Typed Markdown part.
 */
function createMarkdownBlockPart(
  kind: MarkdownBlockName,
  title: string | undefined,
  content: string
): MarkdownPart {
  switch (kind) {
    case "metrics":
      return {
        type: "metrics",
        title,
        metrics: parseMetrics(content),
      }

    case "timeline":
      return {
        type: "timeline",
        title,
        steps: parseTimeline(content),
      }

    case "compare":
      return {
        type: "compare",
        title,
        items: parseCompare(content),
      }

    case "sequence":
      return {
        type: "sequence",
        title,
        items: parseSequence(content),
      }

    case "scenario":
      return {
        type: "scenario",
        title,
        scenario: parseScenario(content),
      }

    case "checklist":
      return {
        type: "checklist",
        title,
        items: parseChecklist(content),
      }

    case "memory":
      return {
        type: "memory",
        title,
        memory: parseMemory(content),
      }

    case "info":
    case "tip":
    case "warning":
    case "danger":
      return {
        type: "callout",
        variant: kind as MarkdownCalloutVariant,
        title,
        content,
      }
  }
}

/**
 * Parses metric rows.
 *
 * Expected format:
 *
 * ```text
 * Value | Label | Optional detail
 * ```
 *
 * @param content - Raw metrics content.
 * @returns Valid metric entries.
 */
function parseMetrics(content: string): MarkdownMetric[] {
  return parseNonEmptyLines(content)
    .map((line) => {
      const [value = "", label = "", detail] = parseColumns(line)

      return {
        value,
        label,
        detail: detail || undefined,
      }
    })
    .filter((metric) => metric.value && metric.label)
}

/**
 * Parses timeline rows.
 *
 * Expected format:
 *
 * ```text
 * Title | Optional description
 * ```
 *
 * @param content - Raw timeline content.
 * @returns Valid timeline steps.
 */
function parseTimeline(content: string): MarkdownTimelineStep[] {
  return parseNonEmptyLines(content)
    .map((line) => {
      const [title = "", description] = parseColumns(line)

      return {
        title,
        description: description || undefined,
      }
    })
    .filter((step) => step.title)
}

/**
 * Parses comparison rows.
 *
 * Expected format:
 *
 * ```text
 * Title | Value | Optional description
 * ```
 *
 * @param content - Raw comparison content.
 * @returns Valid comparison entries.
 */
function parseCompare(content: string): MarkdownCompareItem[] {
  return parseNonEmptyLines(content)
    .map((line) => {
      const [title = "", value = "", description] = parseColumns(line)

      return {
        title,
        value,
        description: description || undefined,
      }
    })
    .filter((item) => item.title && item.value)
}

/**
 * Parses sequence rows.
 *
 * Expected format:
 *
 * ```text
 * Title | Optional value | Optional kind
 * ```
 *
 * @param content - Raw sequence content.
 * @returns Valid sequence entries.
 */
function parseSequence(content: string): MarkdownSequenceItem[] {
  return parseNonEmptyLines(content)
    .map((line) => {
      const [title = "", value, kind] = parseColumns(line)

      return {
        title,
        value: value || undefined,
        kind: kind?.toLowerCase() || undefined,
      }
    })
    .filter((item) => item.title)
}

/**
 * Parses a scenario into its situation and optional solution.
 *
 * The first line containing only `---` separates both sections.
 *
 * @param content - Raw scenario content.
 * @returns Parsed scenario.
 */
function parseScenario(content: string) {
  const [situation, solution] = splitContent(content)

  return {
    situation,
    solution,
  }
}

/**
 * Parses checklist lines into checklist items.
 *
 * Markdown list prefixes such as `-`, `*`, and `+` are removed.
 *
 * @param content - Raw checklist content.
 * @returns Parsed checklist items.
 */
function parseChecklist(content: string): MarkdownChecklistItem[] {
  return parseNonEmptyLines(content)
    .map(cleanListPrefix)
    .filter(Boolean)
    .map((item) => ({
      content: item,
    }))
}

/**
 * Parses a memory block into its main content and optional explanation.
 *
 * The first line containing only `---` separates both sections.
 *
 * @param content - Raw memory content.
 * @returns Parsed memory block.
 */
function parseMemory(content: string) {
  const [memoryContent, explanation] = splitContent(content)

  return {
    content: memoryContent,
    explanation,
  }
}
