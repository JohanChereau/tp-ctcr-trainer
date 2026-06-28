import type {
  LessonVideo,
  VideoProvider,
} from "~/domains/learning/types/learning"

type MarkdownTextPart = {
  type: "text"
  content: string
}

type MarkdownVideoPart = {
  type: "video"
} & LessonVideo

export type MarkdownPart = MarkdownTextPart | MarkdownVideoPart

export function parseMarkdown(markdown: string): MarkdownPart[] {
  const regex = /(::(?:youtube|vimeo)\[[^\]]+\])/g

  return markdown
    .split(regex)
    .filter(Boolean)
    .map((part): MarkdownPart => {
      const match = part.match(/^::(youtube|vimeo)\[([^\]]+)\]$/)

      if (!match) {
        return {
          type: "text",
          content: part,
        }
      }

      const provider = match[1] as VideoProvider
      const value = match[2].trim()

      return {
        type: "video",
        ...parseVideoValue(provider, value),
      }
    })
}

function parseVideoValue(provider: VideoProvider, value: string): LessonVideo {
  if (provider === "youtube") {
    return parseYoutubeValue(value)
  }

  return parseVimeoValue(value)
}

function parseYoutubeValue(value: string): LessonVideo {
  const start = parseStartTime(value)

  try {
    const url = new URL(value)

    if (url.hostname.includes("youtu.be")) {
      return {
        provider: "youtube",
        videoId: cleanVideoId(url.pathname.replace("/", "")),
        start,
      }
    }

    const videoId = url.searchParams.get("v")

    if (videoId) {
      return {
        provider: "youtube",
        videoId: cleanVideoId(videoId),
        start,
      }
    }

    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/)

    if (embedMatch) {
      return {
        provider: "youtube",
        videoId: cleanVideoId(embedMatch[1]),
        start,
      }
    }
  } catch {
    // Not an URL, probably a simple YouTube ID
  }

  return {
    provider: "youtube",
    videoId: cleanVideoId(removeTimeFragment(value)),
    start,
  }
}

function parseVimeoValue(value: string): LessonVideo {
  const start = parseStartTime(value)

  try {
    const url = new URL(value)

    const pathParts = url.pathname.split("/").filter(Boolean)

    return {
      provider: "vimeo",
      videoId: pathParts[0] ?? "",
      hash: url.searchParams.get("h") ?? pathParts[1],
      start,
    }
  } catch {
    // Not an URL, probably a simple Vimeo ID
  }

  const valueWithoutTime = removeTimeFragment(value)
  const [videoId, hash] = valueWithoutTime
    .replace("?h=", "/")
    .split("/")
    .filter(Boolean)

  return {
    provider: "vimeo",
    videoId,
    hash,
    start,
  }
}

function parseStartTime(value: string): LessonVideo["start"] | undefined {
  try {
    const url = new URL(value)

    const time =
      url.searchParams.get("t") ??
      url.searchParams.get("start") ??
      url.hash.replace("#t=", "")

    return time ? normalizeStartTime(time) : undefined
  } catch {
    const hashMatch = value.match(/#t=([^&]+)/)
    const queryMatch = value.match(/[?&](?:t|start)=([^&]+)/)

    const time = hashMatch?.[1] ?? queryMatch?.[1]

    return time ? normalizeStartTime(time) : undefined
  }
}

function normalizeStartTime(value: string): LessonVideo["start"] {
  if (/^\d+$/.test(value)) {
    return Number(value)
  }

  return value as LessonVideo["start"]
}

function removeTimeFragment(value: string) {
  return value.split("#")[0].split("&t=")[0].split("?t=")[0].split("?start=")[0]
}

function cleanVideoId(value: string) {
  return value.split("?")[0].split("&")[0].split("#")[0]
}
