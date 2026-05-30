import { QuizPlayer } from "~/features/quiz/QuizPlayer"

import { crtWrittenCategory } from "~/domains/learning/data/crt-written"
import { DEFAULT_EXAM_DURATION } from "~/features/quiz/types/quiz"

export default function Home() {
  const lesson = crtWrittenCategory.lessons[0]

  return (
    <div className="p-8">
      <QuizPlayer
        title="Examen blanc"
        questions={lesson.questions}
        config={{
          mode: "exam",
          shuffleQuestions: true,
          questionCount: 2,
          durationInSeconds: DEFAULT_EXAM_DURATION,
        }}
      />
    </div>
  )
}
