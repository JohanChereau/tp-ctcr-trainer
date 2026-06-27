import type { LearningCategory } from "../../types/learning"
import { maneuver01 } from "./maneuver-01"

export const maneuversCategory: LearningCategory = {
  id: "maneuvers",

  type: "maneuvers",

  title: "Manœuvres",

  description: "Préparation aux manœuvres de l'épreuve plateau du permis D.",

  icon: "🚧",

  lessons: [maneuver01],
}
