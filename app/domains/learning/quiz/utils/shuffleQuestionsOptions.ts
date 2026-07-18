import type { Question } from "~/domains/learning/types/learning"

function shuffleOptions(options: string[]) {
  const shuffled = [...options]

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))

    ;[shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ]
  }

  return shuffled
}

/**
 * Returns a copy of the question with its answer options shuffled.
 * Only applies to single-choice and multiple-choice questions.
 */
export function shuffleQuestionOptions(question: Question): Question {
  switch (question.type) {
    case "single-choice":
    case "multiple-choice":
      return {
        ...question,
        options: shuffleOptions(question.options),
      }

    default:
      return question
  }
}
