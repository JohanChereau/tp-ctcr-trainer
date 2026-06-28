import { getWeakQuestions } from "./getWeakQuestions"

type GetWeakQuestionsCountOptions = {
  categoryId?: string
  includeUnanswered?: boolean
}

export function getWeakQuestionsCount({
  categoryId,
  includeUnanswered = true,
}: GetWeakQuestionsCountOptions = {}) {
  return getWeakQuestions({
    categoryId,
    includeUnanswered,
  }).length
}
