import type { Question } from "~/domains/learning/types/learning"

export function formatQuizAnswer(answer: string, question: Question) {
  switch (question.type) {
    case "true-false":
      return answer === "true" ? "Vrai" : "Faux"

    case "yes-no":
      return answer === "true" ? "Oui" : "Non"

    case "multiple-choice":
      try {
        const values = JSON.parse(answer)

        return Array.isArray(values) ? values.join(", ") : answer
      } catch {
        return answer
      }

    default:
      return answer
  }
}
