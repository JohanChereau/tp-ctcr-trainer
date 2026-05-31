import { QuizHeader } from "./QuizHeader"
import { QuizTimer } from "./QuizTimer"

import { QuestionScreen } from "./screens/QuestionScreen"
import { CorrectionScreen } from "./screens/CorrectionScreen"
import { ResultsScreen } from "./screens/ResultsScreen"

import { useQuiz } from "../hooks/useQuiz"

import type { QuizPlayerProps } from "../types/quiz"
import { useEffect, useRef } from "react"
import { saveQuestionResult } from "../../stats/storage"

export function QuizPlayer({
  title,
  questions,
  config,
  onBack,
}: QuizPlayerProps) {
  const quiz = useQuiz({
    questions,
    config,
  })

  const statsSavedRef = useRef(false)

  function handleRestart() {
    statsSavedRef.current = false

    quiz.restartQuiz()
  }

  function handleRetryErrors() {
    statsSavedRef.current = false

    quiz.retryFailedQuestions()
  }

  useEffect(() => {
    if (quiz.quizState !== "results" || statsSavedRef.current) {
      return
    }

    for (const answer of quiz.answers) {
      saveQuestionResult(answer.question.id, answer.isCorrect)
    }

    statsSavedRef.current = true
  }, [quiz.quizState, quiz.answers])

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <QuizHeader
        title={title}
        currentQuestion={quiz.currentIndex}
        totalQuestions={quiz.totalQuestions}
      />

      {config?.mode === "exam" && quiz.remainingSeconds != null && (
        <QuizTimer remainingSeconds={quiz.remainingSeconds} />
      )}

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
          answers={quiz.answers}
          failedQuestionsCount={quiz.failedQuestions.length}
          onRestart={handleRestart}
          onRetryErrors={handleRetryErrors}
          onBack={onBack}
        />
      )}
    </div>
  )
}
