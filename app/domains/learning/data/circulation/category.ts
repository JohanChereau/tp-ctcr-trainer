import type { LearningCategory } from "../../types/learning"

import { circulation01 } from "./circulation-01"

export const circulationCategory: LearningCategory = {
  id: "circulation",

  type: "circulation",

  title: "Circulation",

  description:
    "Préparation à l'épreuve de circulation : vérifications et annonces avant le départ avec l'inspecteur.",

  icon: "🚦",

  lessons: [circulation01],
}
