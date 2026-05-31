import { getWeakQuestionIds } from "./getWeakQuestions"

export function getWeakQuestionsCount(maxSuccessRate = 70) {
  return getWeakQuestionIds(maxSuccessRate).length
}
