import { normalizeAnswer } from "./normalizeAnswer"

export function isAnswerCorrect(answer: string, acceptedAnswers: string[]) {
  const normalizedAnswer = normalizeAnswer(answer)

  return acceptedAnswers.map(normalizeAnswer).includes(normalizedAnswer)
}
