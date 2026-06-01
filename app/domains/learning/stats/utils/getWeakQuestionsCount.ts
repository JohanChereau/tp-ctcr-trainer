import { getWeakQuestions } from "./getWeakQuestions"

export function getWeakQuestionsCount(categoryId?: string) {
  return getWeakQuestions({
    categoryId,
  }).length
}
