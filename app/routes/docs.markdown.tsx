import { readFile } from "node:fs/promises"
import path from "node:path"

import { data, useLoaderData } from "react-router"

import { MarkdownLessonViewer } from "~/domains/learning/learn/components/MarkdownLessonViewer"

export async function loader() {
  const documentationPath = path.join(
    process.cwd(),
    "docs",
    "markdown-extensions.md"
  )

  try {
    const markdown = await readFile(documentationPath, "utf-8")

    return data({
      markdown,
    })
  } catch (error) {
    console.error("Impossible de charger la documentation Markdown :", error)

    throw new Response("La documentation Markdown est introuvable.", {
      status: 404,
    })
  }
}

export default function MarkdownDocumentationRoute() {
  const { markdown } = useLoaderData<typeof loader>()

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <MarkdownLessonViewer markdown={markdown} />
    </main>
  )
}
