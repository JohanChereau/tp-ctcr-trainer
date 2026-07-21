import { useEffect, useRef } from "react"

import { QuizHeader } from "./QuizHeader"
import { QuizTimer } from "./QuizTimer"

import { QuestionScreen } from "./screens/QuestionScreen"
import { CorrectionScreen } from "./screens/CorrectionScreen"
import { ResultsScreen } from "./screens/ResultsScreen"

import { useQuiz } from "../hooks/useQuiz"
import { useQuizExitGuard } from "../hooks/useQuizExitGuard"

import { saveQuestionResult } from "../../stats/storage"

import { getQuestionExpectedAnswer } from "../utils/getQuestionExpectedAnswer"

import type { QuizPlayerProps } from "../types/quiz"

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

  useQuizExitGuard({
    enabled: quiz.quizState !== "results",
  })

  const statsSavedRef = useRef(false)

  const questionTopRef = useRef<HTMLDivElement>(null)
  const correctionTopRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (quiz.quizState !== "question") {
      return
    }

    const animationFrame = window.requestAnimationFrame(() => {
      questionTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [quiz.currentIndex, quiz.quizState])

  useEffect(() => {
    if (quiz.quizState !== "correction") {
      return
    }

    const animationFrame = window.requestAnimationFrame(() => {
      correctionTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [quiz.quizState])

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 sm:gap-6 md:gap-8">
      <QuizHeader
        title={title}
        currentQuestion={quiz.currentIndex}
        totalQuestions={quiz.totalQuestions}
      />

      {config?.mode === "exam" && quiz.remainingSeconds != null && (
        <QuizTimer remainingSeconds={quiz.remainingSeconds} />
      )}

      {quiz.quizState === "question" && (
        <>
          <div
            ref={questionTopRef}
            className="scroll-mt-20 sm:scroll-mt-24"
            aria-hidden="true"
          />

          <QuestionScreen
            question={quiz.currentQuestion}
            answer={quiz.answer}
            onAnswerChange={quiz.setAnswer}
            onSubmit={quiz.submitAnswer}
          />
        </>
      )}

      {quiz.quizState === "correction" && (
        <>
          <div
            ref={correctionTopRef}
            className="scroll-mt-20 sm:scroll-mt-24"
            aria-hidden="true"
          />

          <CorrectionScreen
            isCorrect={quiz.isCorrect}
            isLastQuestion={quiz.currentIndex === quiz.totalQuestions - 1}
            canonicalAnswer={getQuestionExpectedAnswer(quiz.currentQuestion)}
            explanation={quiz.currentQuestion.explanation}
            onNext={quiz.nextQuestion}
          />
        </>
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
