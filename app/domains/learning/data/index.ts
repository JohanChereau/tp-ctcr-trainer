import { writtenCategory } from "./written"

export const learningCategories = [writtenCategory]

export function getCategoryById(categoryId: string) {
  return learningCategories.find((category) => category.id === categoryId)
}

export function getLessonById(categoryId: string, lessonId: string) {
  const category = getCategoryById(categoryId)

  return category?.lessons.find((lesson) => lesson.id === lessonId)
}

export function getCategoryQuestions(categoryId: string) {
  const category = getCategoryById(categoryId)

  if (!category) {
    return []
  }

  return category.lessons.flatMap((lesson) => lesson.questions)
}
