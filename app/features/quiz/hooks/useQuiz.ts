import { useState } from "react"

import type { Question } from "~/domains/learning/types/learning"

import type { QuizMode, QuizState } from "../types/quiz"

import { isAnswerCorrect } from "../utils/isAnswerCorrect"

type UseQuizOptions = {
  questions: Question[]

  mode?: QuizMode
}

export function useQuiz({ questions, mode = "training" }: UseQuizOptions) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [answer, setAnswer] = useState("")

  const [quizState, setQuizState] = useState<QuizState>("question")

  const [isCorrect, setIsCorrect] = useState(false)

  const [score, setScore] = useState(0)

  const [failedQuestions, setFailedQuestions] = useState<Question[]>([])

  const [activeQuestions, setActiveQuestions] = useState(questions)

  const currentQuestion = activeQuestions[currentIndex]

  const totalQuestions = activeQuestions.length

  const progress =
    totalQuestions === 0 ? 0 : ((currentIndex + 1) / totalQuestions) * 100

  function submitAnswer() {
    if (!answer.trim()) {
      return
    }

    const correct = isAnswerCorrect(answer, currentQuestion.acceptedAnswers)

    setIsCorrect(correct)

    if (correct) {
      setScore((current) => current + 1)
    } else {
      setFailedQuestions((current) => [...current, currentQuestion])
    }

    if (mode === "training") {
      setQuizState("correction")
    }
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
    setCurrentIndex(0)

    setAnswer("")

    setQuizState("question")

    setActiveQuestions(questions)

    setIsCorrect(false)

    setScore(0)

    setFailedQuestions([])
  }

  function retryFailedQuestions() {
    if (failedQuestions.length === 0) {
      return
    }

    setActiveQuestions(failedQuestions)

    setCurrentIndex(0)

    setAnswer("")

    setQuizState("question")

    setScore(0)

    setFailedQuestions([])

    setIsCorrect(false)
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

    failedQuestions,

    submitAnswer,

    nextQuestion,

    restartQuiz,

    retryFailedQuestions,
  }
}
