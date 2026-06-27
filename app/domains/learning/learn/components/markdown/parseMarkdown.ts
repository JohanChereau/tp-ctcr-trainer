type VideoProvider = "youtube" | "vimeo"

type MarkdownTextPart = {
  type: "text"
  content: string
}

type MarkdownVideoPart = {
  type: "video"
  provider: VideoProvider
  videoId: string
  hash?: string
  start?: number
}

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
        provider,
        ...parseVideoValue(provider, value),
      }
    })
}

function parseVideoValue(provider: VideoProvider, value: string) {
  if (provider === "youtube") {
    return parseYoutubeValue(value)
  }

  return parseVimeoValue(value)
}

function parseYoutubeValue(value: string) {
  const start = parseStartTime(value)

  try {
    const url = new URL(value)

    if (url.hostname.includes("youtu.be")) {
      return {
        videoId: cleanVideoId(url.pathname.replace("/", "")),
        start,
      }
    }

    const videoId = url.searchParams.get("v")

    if (videoId) {
      return {
        videoId: cleanVideoId(videoId),
        start,
      }
    }

    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/)

    if (embedMatch) {
      return {
        videoId: cleanVideoId(embedMatch[1]),
        start,
      }
    }
  } catch {
    // Not an URL, probably a simple YouTube ID
  }

  return {
    videoId: cleanVideoId(removeTimeFragment(value)),
    start,
  }
}

function parseVimeoValue(value: string) {
  const start = parseStartTime(value)

  try {
    const url = new URL(value)

    const pathParts = url.pathname.split("/").filter(Boolean)

    return {
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
    videoId,
    hash,
    start,
  }
}

function parseStartTime(value: string): number | undefined {
  try {
    const url = new URL(value)

    const time =
      url.searchParams.get("t") ??
      url.searchParams.get("start") ??
      url.hash.replace("#t=", "")

    return time ? parseTimeToSeconds(time) : undefined
  } catch {
    const hashMatch = value.match(/#t=([^&]+)/)
    const queryMatch = value.match(/[?&](?:t|start)=([^&]+)/)

    const time = hashMatch?.[1] ?? queryMatch?.[1]

    return time ? parseTimeToSeconds(time) : undefined
  }
}

function parseTimeToSeconds(value: string): number {
  if (/^\d+$/.test(value)) {
    return Number(value)
  }

  const hours = value.match(/(\d+)h/)?.[1]
  const minutes = value.match(/(\d+)m/)?.[1]
  const seconds = value.match(/(\d+)s/)?.[1]

  return (
    Number(hours ?? 0) * 3600 + Number(minutes ?? 0) * 60 + Number(seconds ?? 0)
  )
}

function removeTimeFragment(value: string) {
  return value.split("#")[0].split("&t=")[0].split("?t=")[0].split("?start=")[0]
}

function cleanVideoId(value: string) {
  return value.split("?")[0].split("&")[0].split("#")[0]
}
