export type QuestionType = "text" | "image"

export type Question = {
  id: string

  type: QuestionType

  question: string

  canonicalAnswer: string

  acceptedAnswers: string[]

  image?: string

  imageAlt?: string

  hint?: string

  explanation?: string

  tags?: string[]
}

export type LessonContentType = "questions" | "markdown"

export type Lesson = {
  id: string

  title: string

  contentType: LessonContentType

  questions: Question[]

  markdown?: string
}

export type LearningCategoryType = "written" | "oral" | "rse" | "vocabulary"

export type LearningCategory = {
  id: string

  type: LearningCategoryType

  title: string

  description: string

  icon: string

  lessons: Lesson[]
}
