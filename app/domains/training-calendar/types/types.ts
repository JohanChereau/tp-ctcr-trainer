export type TrainingCalendarEvent = {
  id: string
  title: string
  location: string | null
  description: string | null
  start: string
  end: string
  isAllDay: boolean
}

export type TrainingCalendarResponse = {
  events: TrainingCalendarEvent[]
  today: TrainingCalendarEvent[]
  tomorrow: TrainingCalendarEvent[]
  upcoming: TrainingCalendarEvent[]
}
