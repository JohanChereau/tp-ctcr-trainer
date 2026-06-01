export type BaseQuestion = {
  id: string

  question: string

  hint?: string

  explanation?: string

  tags?: string[]
}

export type TextQuestion = BaseQuestion & {
  type: "text"

  canonicalAnswer: string

  acceptedAnswers: string[]
}

export type ImageQuestion = BaseQuestion & {
  type: "image"

  canonicalAnswer: string

  acceptedAnswers: string[]

  image: string

  imageAlt?: string
}

export type TrueFalseQuestion = BaseQuestion & {
  type: "true-false"

  correctAnswer: boolean
}

export type YesNoQuestion = BaseQuestion & {
  type: "yes-no"

  correctAnswer: boolean
}

export type SingleChoiceQuestion = BaseQuestion & {
  type: "single-choice"

  options: string[]

  correctOption: string
}

export type MultipleChoiceQuestion = BaseQuestion & {
  type: "multiple-choice"

  options: string[]

  correctOptions: string[]
}

export type Question =
  | TextQuestion
  | ImageQuestion
  | TrueFalseQuestion
  | YesNoQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion

export type LessonContentType = "questions" | "markdown"

export type Lesson = {
  id: string

  title: string

  contentType: LessonContentType

  questions: Question[]

  markdown?: string

  youtubeVideoId?: string
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
