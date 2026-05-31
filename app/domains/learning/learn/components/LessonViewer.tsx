import type { Lesson } from "~/domains/learning/types/learning"

import { QuestionLessonViewer } from "./QuestionLessonViewer"

type LessonViewerProps = {
  lesson: Lesson
}

export function LessonViewer({ lesson }: LessonViewerProps) {
  switch (lesson.contentType) {
    case "questions":
      return <QuestionLessonViewer lesson={lesson} />

    case "markdown":
      return <div>Markdown renderer coming soon.</div>

    default:
      return null
  }
}
