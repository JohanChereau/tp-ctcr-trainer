export type BaseQuestion = {
  id: string

  question: string

  image?: string

  imageAlt?: string

  hint?: string

  explanation?: string

  tags?: string[]
}

export type TextQuestion = BaseQuestion & {
  type: "text"

  canonicalAnswer: string

  acceptedAnswers: string[]
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
  | TrueFalseQuestion
  | YesNoQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion

export type LessonContentType = "questions" | "markdown"

export type VideoProvider = "youtube" | "vimeo"

export type VideoStart =
  | number
  | `${number}s`
  | `${number}m${number}s`
  | `${number}h${number}m${number}s`

export type LessonVideo = {
  provider: VideoProvider

  videoId: string

  hash?: string

  start?: VideoStart
}

export type Lesson = {
  id: string

  title: string

  contentType: LessonContentType

  questions: Question[]

  markdown?: string

  video?: LessonVideo
}

export type LearningCategoryType =
  | "written"
  | "oral"
  | "rse"
  | "vocabulary"
  | "socle 1"
  | "socle 2"
  | "themes"
  | "maneuvers"
  | "circulation"
  | "road-code"

export type LearningCategory = {
  id: string

  type: LearningCategoryType

  title: string

  description: string

  icon: string

  lessons: Lesson[]
}
