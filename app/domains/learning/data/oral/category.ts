import type { LearningCategory } from "../../types/learning"

import { fiche01 } from "./fiche-01"
import { fiche02 } from "./fiche-02"
import { fiche03 } from "./fiche-03"
import { fiche04 } from "./fiche-04"
import { fiche07 } from "./fiche-07"
import { fiche10 } from "./fiche-10"

export const oralCategory: LearningCategory = {
  id: "fiches-orales-plateau",

  type: "oral",

  title: "Fiches orales",

  description: "Révision des fiches orales du TP CTCR",

  icon: "🎤",

  lessons: [fiche01, fiche02, fiche03, fiche04, fiche07, fiche10],
}
