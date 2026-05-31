import type { LearningCategory } from "../../types/learning"

import { fiche01 } from "./fiche-01"
import { fiche02 } from "./fiche-02"

export const writtenCategory: LearningCategory = {
  id: "fiches-ecrites",

  type: "written",

  title: "Fiches écrites",

  description: "Révision des fiches écrites du TP CTCR",

  icon: "📖",

  lessons: [fiche01, fiche02],
}
