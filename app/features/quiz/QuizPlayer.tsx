import { QuizHeader } from "./components/QuizHeader"

import { QuestionScreen } from "./components/screens/QuestionScreen"
import { CorrectionScreen } from "./components/screens/CorrectionScreen"
import { ResultsScreen } from "./components/screens/ResultsScreen"

import { useQuiz } from "./hooks/useQuiz"

import type { QuizPlayerProps } from "./types/quiz"

export function QuizPlayer({ title, questions, config }: QuizPlayerProps) {
  const quiz = useQuiz({
    questions,
    config,
  })

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <QuizHeader
        title={title}
        currentQuestion={quiz.currentIndex}
        totalQuestions={quiz.totalQuestions}
      />

      {quiz.quizState === "question" && (
        <QuestionScreen
          question={quiz.currentQuestion}
          answer={quiz.answer}
          onAnswerChange={quiz.setAnswer}
          onSubmit={quiz.submitAnswer}
        />
      )}

      {quiz.quizState === "correction" && (
        <CorrectionScreen
          isCorrect={quiz.isCorrect}
          canonicalAnswer={quiz.currentQuestion.canonicalAnswer}
          explanation={quiz.currentQuestion.explanation}
          onNext={quiz.nextQuestion}
        />
      )}

      {quiz.quizState === "results" && (
        <ResultsScreen
          score={quiz.score}
          totalQuestions={quiz.totalQuestions}
          failedQuestionsCount={quiz.failedQuestions.length}
          onRestart={quiz.restartQuiz}
          onRetryErrors={quiz.retryFailedQuestions}
        />
      )}
    </div>
  )
}
