export type OralExamSection = {
  title: string

  markdown?: string

  children?: OralExamSection[]
}

export type OralExamCard = {
  lessonId: string

  number: number

  title: string

  sections: OralExamSection[]
}
