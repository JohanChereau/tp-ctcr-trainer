import type { LearningCategory } from "../../types/learning"
import { brakeCheckLesson } from "./brake-test"

export const socle2Category: LearningCategory = {
  id: "socle_2",

  type: "socle 2",

  title: "Socle 2",

  description:
    "Préparation au socle 2 : contrôles, installation, essais de freins avant manœuvre.",

  icon: "🛑",

  lessons: [brakeCheckLesson],
}
