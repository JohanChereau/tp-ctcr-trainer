import { normalizeAnswer } from "./normalizeAnswer"

export function isAnswerCorrect(
  answer: string,
  canonicalAnswer: string,
  acceptedAnswers: string[]
) {
  const normalizedAnswer = normalizeAnswer(answer)

  const validAnswers = [canonicalAnswer, ...acceptedAnswers].map(
    normalizeAnswer
  )

  return validAnswers.includes(normalizedAnswer)
}
