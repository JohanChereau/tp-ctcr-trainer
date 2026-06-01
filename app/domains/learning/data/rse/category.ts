import type { LearningCategory } from "../../types/learning"

import { rse01 } from "./rse-01"

export const rseCategory: LearningCategory = {
  id: "rse",

  type: "rse",

  title: "Réglementation Sociale Européenne",

  description: "Temps de conduite, pauses et repos des conducteurs.",

  icon: "🕒",

  lessons: [rse01],
}
