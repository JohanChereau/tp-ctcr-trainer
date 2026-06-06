import { useCallback, useEffect, useState } from "react"

import { useQuizTimer } from "~/domains/learning/quiz/hooks/useQuizTimer"

import type { Question } from "~/domains/learning/types/learning"

import type { AnswerResult, QuizConfig, QuizState } from "../types/quiz"

import { isAnswerCorrect } from "~/domains/learning/quiz/utils/isAnswerCorrect"
import { shuffleQuestions } from "~/domains/learning/quiz/utils/shuffleQuestions"

type UseQuizOptions = {
  questions: Question[]

  config?: QuizConfig
}

/**
 * Quiz state management.
 *
 * Handles:
 * - training mode
 * - exam mode
 * - score calculation
 * - answer validation
 * - failed questions tracking
 * - retry failed questions
 * - optional timer
 */
export function useQuiz({ questions, config }: UseQuizOptions) {
  const mode = config?.mode ?? "training"

  /**
   * Builds the initial question set based on the current configuration.
   *
   * Features:
   * - optional question shuffling
   * - optional question limit
   */
  function getInitialQuestions() {
    const preparedQuestions = config?.shuffleQuestions
      ? shuffleQuestions([...questions])
      : questions

    return config?.questionCount
      ? preparedQuestions.slice(0, config.questionCount)
      : preparedQuestions
  }

  const [activeQuestions, setActiveQuestions] = useState<Question[]>(questions)

  const [currentIndex, setCurrentIndex] = useState(0)

  const [answer, setAnswer] = useState("")

  const [quizState, setQuizState] = useState<QuizState>("question")

  const [isCorrect, setIsCorrect] = useState(false)

  const [score, setScore] = useState(0)

  const [answers, setAnswers] = useState<AnswerResult[]>([])

  const [failedQuestions, setFailedQuestions] = useState<Question[]>([])

  const currentQuestion = activeQuestions[currentIndex]

  const totalQuestions = activeQuestions.length

  const progress =
    totalQuestions === 0 ? 0 : ((currentIndex + 1) / totalQuestions) * 100

  /**
   * Called when the exam timer reaches zero.
   */
  const handleTimeExpired = useCallback(() => {
    setQuizState("results")
  }, [])

  const {
    remainingSeconds,

    resetTimer,
  } = useQuizTimer({
    enabled: mode === "exam" && quizState !== "results",

    durationInSeconds: config?.durationInSeconds,

    onTimeExpired: handleTimeExpired,
  })

  /**
   * Initializes questions on the client.
   *
   * This avoids SSR hydration issues when
   * question shuffling is enabled.
   */
  useEffect(() => {
    setActiveQuestions(getInitialQuestions())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Resets the quiz runtime state.
   *
   * Does not modify the active question set.
   */
  function resetQuizState() {
    setCurrentIndex(0)

    setAnswer("")

    setQuizState("question")

    setIsCorrect(false)

    setScore(0)

    setFailedQuestions([])

    setAnswers([])
  }

  /**
   * Evaluates the current answer and updates quiz statistics.
   *
   * Returns whether the answer is correct.
   */
  function evaluateAnswer() {
    let correct = false

    switch (currentQuestion.type) {
      case "text":
        correct = isAnswerCorrect(answer, currentQuestion.acceptedAnswers)
        break

      case "true-false":
      case "yes-no":
        correct = answer === String(currentQuestion.correctAnswer)

        break

      case "single-choice":
        correct = answer === currentQuestion.correctOption

        break

      case "multiple-choice":
        const selected = answer ? (JSON.parse(answer) as string[]) : []

        const expected = [...currentQuestion.correctOptions].sort()

        correct = JSON.stringify(selected.sort()) === JSON.stringify(expected)

        break

      default:
        correct = false
    }

    setIsCorrect(correct)

    setAnswers((current) => [
      ...current,
      {
        question: currentQuestion,
        userAnswer: answer,
        isCorrect: correct,
      },
    ])

    if (correct) {
      setScore((current) => current + 1)
    } else {
      setFailedQuestions((current) => [...current, currentQuestion])
    }

    return correct
  }

  function submitAnswer() {
    if (!answer.trim()) {
      return
    }

    evaluateAnswer()

    if (mode === "training") {
      setQuizState("correction")

      return
    }

    nextQuestion()
  }

  function nextQuestion() {
    const isLastQuestion = currentIndex === totalQuestions - 1

    if (isLastQuestion) {
      setQuizState("results")

      return
    }

    setCurrentIndex((current) => current + 1)

    setAnswer("")

    setQuizState("question")
  }

  function restartQuiz() {
    resetQuizState()

    setActiveQuestions(getInitialQuestions())

    resetTimer()
  }

  function retryFailedQuestions() {
    if (failedQuestions.length === 0) {
      return
    }

    const questionsToRetry = [...failedQuestions]

    resetQuizState()

    setActiveQuestions(questionsToRetry)

    resetTimer()
  }

  return {
    answer,

    setAnswer,

    currentIndex,

    currentQuestion,

    totalQuestions,

    progress,

    quizState,

    isCorrect,

    score,

    answers,

    failedQuestions,

    remainingSeconds,

    submitAnswer,

    nextQuestion,

    restartQuiz,

    retryFailedQuestions,
  }
}
