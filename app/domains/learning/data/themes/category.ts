import type { LearningCategory } from "../../types/learning"
import { theme01 } from "./theme-01"
import { theme02 } from "./theme-02"
import { theme03 } from "./theme-03"
import { theme04 } from "./theme-04"
import { theme05 } from "./theme-05"
import { theme06 } from "./theme-06"

export const themesCategory: LearningCategory = {
  id: "themes",

  type: "themes",

  title: "Thèmes",

  description:
    "Préparation aux thèmes de vérification du véhicule pour l'épreuve plateau du permis D.",

  icon: "🔧",

  lessons: [theme01, theme02, theme03, theme04, theme05, theme06],
}
