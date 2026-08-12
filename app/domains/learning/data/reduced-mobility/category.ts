import type { LearningCategory } from "../../types/learning"

import { pmrCare01 } from "./pmr-care"

export const reducedMobilityCategory: LearningCategory = {
  id: "reduced-mobility",

  type: "reduced-mobility",

  title: "Personnes à mobilité réduite",

  description:
    "Accueil, accompagnement et prise en charge des personnes à mobilité réduite.",

  icon: "♿",

  lessons: [pmrCare01],
}
