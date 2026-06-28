export type ChangelogSection = {
  title: string
  items: string[]
}

export type Release = {
  version: string
  title: string
  date: string
  sections: ChangelogSection[]
}
