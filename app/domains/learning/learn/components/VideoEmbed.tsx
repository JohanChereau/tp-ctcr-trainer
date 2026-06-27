import type { LessonVideo } from "~/domains/learning/types/learning"

type VideoEmbedProps = LessonVideo & {
  title?: string
}

export function VideoEmbed({
  provider,
  videoId,
  hash,
  start,
  title,
}: VideoEmbedProps) {
  const startInSeconds = parseVideoStart(start)

  const src =
    provider === "youtube"
      ? buildYoutubeSrc(videoId, startInSeconds)
      : buildVimeoSrc(videoId, hash, startInSeconds)

  return (
    <div className="not-prose overflow-hidden rounded-xl border bg-muted">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          title={title ?? `${provider} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )
}

function buildYoutubeSrc(videoId: string, start?: number) {
  const params = new URLSearchParams()

  if (start) {
    params.set("start", String(start))
  }

  const query = params.toString()

  return `https://www.youtube.com/embed/${videoId}${query ? `?${query}` : ""}`
}

function buildVimeoSrc(videoId: string, hash?: string, start?: number) {
  const params = new URLSearchParams()

  if (hash) {
    params.set("h", hash)
  }

  const query = params.toString()
  const fragment = start ? `#t=${start}s` : ""

  return `https://player.vimeo.com/video/${videoId}${query ? `?${query}` : ""}${fragment}`
}

function parseVideoStart(start?: LessonVideo["start"]) {
  if (!start) return undefined

  if (typeof start === "number") return start

  const hours = start.match(/(\d+)h/)?.[1]
  const minutes = start.match(/(\d+)m/)?.[1]
  const seconds = start.match(/(\d+)s/)?.[1]

  return (
    Number(hours ?? 0) * 3600 + Number(minutes ?? 0) * 60 + Number(seconds ?? 0)
  )
}
