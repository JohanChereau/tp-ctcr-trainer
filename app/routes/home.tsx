import { QuizPlayer } from "~/features/quiz/QuizPlayer"

import { crtWrittenCategory } from "~/domains/learning/data/crt-written"

export default function Home() {
  const lesson = crtWrittenCategory.lessons[0]

  return (
    <div className="p-8">
      <QuizPlayer title={lesson.title} questions={lesson.questions} />
    </div>
  )
}
