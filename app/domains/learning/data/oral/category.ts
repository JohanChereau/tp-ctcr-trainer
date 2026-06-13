import type { LearningCategory } from "../../types/learning"

import { fiche01 } from "./fiche-01"
import { fiche02 } from "./fiche-02"
import { fiche03 } from "./fiche-03"
import { fiche04 } from "./fiche-04"
import { fiche05 } from "./fiche-05"
import { fiche06 } from "./fiche-06"
import { fiche07 } from "./fiche-07"
import { fiche08 } from "./fiche-08"
import { fiche09 } from "./fiche-09"
import { fiche10 } from "./fiche-10"
import { fiche11 } from "./fiche-11"
import { fiche12 } from "./fiche-12"

export const oralCategory: LearningCategory = {
  id: "fiches-orales-plateau",

  type: "oral",

  title: "Fiches orales",

  description: "Révision des fiches orales du TP CTCR",

  icon: "🎤",

  lessons: [
    fiche01,
    fiche02,
    fiche03,
    fiche04,
    fiche05,
    fiche06,
    fiche07,
    fiche08,
    fiche09,
    fiche10,
    fiche11,
    fiche12,
  ],
}
