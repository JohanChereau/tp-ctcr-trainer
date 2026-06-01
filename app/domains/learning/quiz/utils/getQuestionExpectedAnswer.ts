import type { Question } from "~/domains/learning/types/learning"

export function getQuestionExpectedAnswer(question: Question): string {
  switch (question.type) {
    case "text":
    case "image":
      return question.canonicalAnswer

    case "true-false":
      return question.correctAnswer ? "Vrai" : "Faux"

    case "yes-no":
      return question.correctAnswer ? "Oui" : "Non"

    default:
      return ""
  }
}
