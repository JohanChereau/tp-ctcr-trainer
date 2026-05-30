import { useState } from "react"

import type { Question } from "~/domains/learning/types/learning"

import type { QuizConfig, QuizState, AnswerResult } from "../types/quiz"

import { isAnswerCorrect } from "../utils/isAnswerCorrect"
import { shuffleQuestions } from "../utils/shuffleQuestions"

type UseQuizOptions = {
  questions: Question[]

  config?: QuizConfig
}

export function useQuiz({ questions, config }: UseQuizOptions) {
  const mode = config?.mode ?? "training"

  function getInitialQuestions() {
    const preparedQuestions = config?.shuffleQuestions
      ? shuffleQuestions(questions)
      : questions

    return config?.questionCount
      ? preparedQuestions.slice(0, config.questionCount)
      : preparedQuestions
  }

  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() =>
    getInitialQuestions()
  )

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

  function resetQuizState() {
    setCurrentIndex(0)

    setAnswer("")

    setQuizState("question")

    setIsCorrect(false)

    setScore(0)

    setFailedQuestions([])

    setAnswers([])
  }

  function evaluateAnswer() {
    const correct = isAnswerCorrect(answer, currentQuestion.acceptedAnswers)

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
  }

  function retryFailedQuestions() {
    if (failedQuestions.length === 0) {
      return
    }

    const questionsToRetry = [...failedQuestions]

    resetQuizState()

    setActiveQuestions(questionsToRetry)
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

    submitAnswer,

    nextQuestion,

    restartQuiz,

    retryFailedQuestions,
  }
}
