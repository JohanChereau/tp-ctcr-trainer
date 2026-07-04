import type { LearningCategory } from "../../types/learning"

import { preDriveCheckLesson } from "./pre-drive-check"

export const circulationCategory: LearningCategory = {
  id: "circulation",

  type: "circulation",

  title: "Circulation",

  description:
    "Préparation à l'épreuve de circulation : vérifications et annonces avant le départ avec l'inspecteur.",

  icon: "🚦",

  lessons: [preDriveCheckLesson],
}
