import type { Lesson } from "~/domains/learning/types/learning"

import { QuestionLessonViewer } from "./QuestionLessonViewer"
import { MarkdownLessonViewer } from "./MarkdownLessonViewer"

type LessonViewerProps = {
  lesson: Lesson
}

export function LessonViewer({ lesson }: LessonViewerProps) {
  switch (lesson.contentType) {
    case "questions":
      return <QuestionLessonViewer lesson={lesson} />

    case "markdown":
      return (
        <MarkdownLessonViewer
          markdown={lesson.markdown ?? ""}
          youtubeVideoId={lesson.youtubeVideoId}
        />
      )

    default:
      return null
  }
}
