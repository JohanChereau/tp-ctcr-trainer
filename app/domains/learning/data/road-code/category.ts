import type { LearningCategory } from "../../types/learning"

import { roadCode01 } from "./road-code-01"

export const roadCodeCategory: LearningCategory = {
  id: "road-code",

  type: "road-code",

  title: "Code de la route",

  description:
    "Révision des notions utiles du code de la route : distances, sécurité, signalisation et règles de conduite.",

  icon: "🚗",

  lessons: [roadCode01],
}
