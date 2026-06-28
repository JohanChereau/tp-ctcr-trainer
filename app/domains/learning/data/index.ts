import { writtenCategory } from "./written"
import { rseCategory } from "./rse"
import { oralCategory } from "./oral"
import { socle1Category } from "./socle_1"
import { themesCategory } from "./themes"
import { socle2Category } from "./socle-2"
import { maneuversCategory } from "./maneuvers"
import { circulationCategory } from "./circulation"
import { roadCodeCategory } from "./road-code"

export const learningCategories = [
  writtenCategory,
  socle1Category,
  themesCategory,
  oralCategory,
  socle2Category,
  maneuversCategory,
  roadCodeCategory,
  circulationCategory,
  rseCategory,
]

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

export function getAllQuestions() {
  return learningCategories.flatMap((category) =>
    category.lessons.flatMap((lesson) =>
      lesson.questions.map((question) => ({
        categoryId: category.id,

        lessonId: lesson.id,

        question,
      }))
    )
  )
}
