import { learningCategories } from "../app/domains/learning/data/index"
import { normalizeAnswer } from "../app/domains/learning/quiz/utils/normalizeAnswer"

import type { Question } from "../app/domains/learning/types/learning"

type ValidationIssue = {
  level: "error" | "warning"
  location: string
  message: string
}

const issues: ValidationIssue[] = []

function addError(location: string, message: string) {
  issues.push({
    level: "error",
    location,
    message,
  })
}

function addWarning(location: string, message: string) {
  issues.push({
    level: "warning",
    location,
    message,
  })
}

function hasDuplicateValues(values: string[]) {
  const normalizedValues = values.map(normalizeAnswer)

  return new Set(normalizedValues).size !== normalizedValues.length
}

function validateQuestion(
  question: Question,
  categoryId: string,
  lessonId: string
) {
  const location = `${categoryId} > ${lessonId} > ${question.id}`

  if (!question.question.trim()) {
    addError(location, "La question est vide.")
  }

  const normalizedQuestion = question.question
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

  if (
    /(situation|question|exemple|cas)\s+precedent(e)?/.test(normalizedQuestion)
  ) {
    addError(
      location,
      "La question dépend d'un contexte précédent et peut casser dans un quiz mélangé ou une révision des erreurs."
    )
  }

  switch (question.type) {
    case "text": {
      if (!question.canonicalAnswer.trim()) {
        addError(location, "La réponse canonique est vide.")
      }

      if (question.acceptedAnswers.some((answer) => !answer.trim())) {
        addError(location, "Une réponse acceptée est vide.")
      }

      break
    }

    case "single-choice": {
      if (question.options.length < 2) {
        addError(location, "La question doit contenir au moins deux options.")
      }

      if (hasDuplicateValues(question.options)) {
        addError(location, "La question contient des options dupliquées.")
      }

      if (!question.options.includes(question.correctOption)) {
        addError(
          location,
          `La bonne réponse "${question.correctOption}" n'existe pas dans les options.`
        )
      }

      break
    }

    case "multiple-choice": {
      if (question.options.length < 2) {
        addError(location, "La question doit contenir au moins deux options.")
      }

      if (hasDuplicateValues(question.options)) {
        addError(location, "La question contient des options dupliquées.")
      }

      if (question.correctOptions.length === 0) {
        addError(location, "Aucune bonne réponse n'est définie.")
      }

      if (hasDuplicateValues(question.correctOptions)) {
        addError(location, "Les bonnes réponses contiennent des doublons.")
      }

      for (const correctOption of question.correctOptions) {
        if (!question.options.includes(correctOption)) {
          addError(
            location,
            `La bonne réponse "${correctOption}" n'existe pas dans les options.`
          )
        }
      }

      break
    }

    case "true-false":
    case "yes-no":
      break
  }
}

const categoryIds = new Set<string>()
const questionIds = new Set<string>()

let lessonCount = 0
let questionCount = 0

for (const category of learningCategories) {
  if (categoryIds.has(category.id)) {
    addError(category.id, "ID de catégorie dupliqué.")
  }

  categoryIds.add(category.id)

  const lessonIds = new Set<string>()

  for (const lesson of category.lessons) {
    lessonCount += 1

    const lessonLocation = `${category.id} > ${lesson.id}`

    if (lessonIds.has(lesson.id)) {
      addError(lessonLocation, "ID de leçon dupliqué dans la catégorie.")
    }

    lessonIds.add(lesson.id)

    if (!lesson.title.trim()) {
      addError(lessonLocation, "Le titre de la leçon est vide.")
    }

    if (lesson.contentType === "questions" && lesson.questions.length === 0) {
      addWarning(
        lessonLocation,
        'La leçon utilise contentType "questions" mais ne contient aucune question.'
      )
    }

    if (lesson.contentType === "markdown" && !lesson.markdown?.trim()) {
      addError(
        lessonLocation,
        'La leçon utilise contentType "markdown" mais ne contient aucun Markdown.'
      )
    }

    for (const question of lesson.questions) {
      questionCount += 1

      if (questionIds.has(question.id)) {
        addError(
          `${lessonLocation} > ${question.id}`,
          "ID de question dupliqué. Les statistiques utilisent l'ID de question comme identifiant unique."
        )
      }

      questionIds.add(question.id)

      validateQuestion(question, category.id, lesson.id)
    }
  }
}

const errors = issues.filter((issue) => issue.level === "error")
const warnings = issues.filter((issue) => issue.level === "warning")

console.log()
console.log("Validation du contenu CTCR")
console.log(
  `${learningCategories.length} catégories · ${lessonCount} leçons · ${questionCount} questions`
)
console.log()

for (const issue of issues) {
  const prefix = issue.level === "error" ? "❌" : "⚠️"

  console.log(`${prefix} ${issue.location}`)
  console.log(`   ${issue.message}`)
}

if (issues.length > 0) {
  console.log()
}

if (errors.length > 0) {
  console.error(
    `Validation échouée : ${errors.length} erreur(s), ${warnings.length} avertissement(s).`
  )

  process.exitCode = 1
} else if (warnings.length > 0) {
  console.log(`✅ Contenu valide avec ${warnings.length} avertissement(s).`)
} else {
  console.log("✅ Contenu valide.")
}
