type VideoProvider = "youtube" | "vimeo"

type VideoEmbedProps = {
  provider: VideoProvider
  videoId: string
  hash?: string
  start?: number
  title?: string
}

export function VideoEmbed({
  provider,
  videoId,
  hash,
  start,
  title,
}: VideoEmbedProps) {
  const src =
    provider === "youtube"
      ? buildYoutubeSrc(videoId, start)
      : buildVimeoSrc(videoId, hash, start)

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
