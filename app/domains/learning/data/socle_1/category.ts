import type { LearningCategory } from "../../types/learning"
import { socle101 } from "./routine-safety-checks"

export const socle1Category: LearningCategory = {
  id: "socle_1",

  type: "Socle 1",

  title: "Socle 1",

  description:
    "Préparation au socle 1 : vérifications courantes de sécurité intérieures et extérieures.",

  icon: "🚌",

  lessons: [socle101],
}
