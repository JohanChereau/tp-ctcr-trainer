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
import { fiche13 } from "./fiche-13"
import { fiche14 } from "./fiche-14"
import { fiche15 } from "./fiche-15"
import { fiche16 } from "./fiche-16"
import { fiche17 } from "./fiche-17"
import { fiche18 } from "./fiche-18"
import { fiche19 } from "./fiche-19"
import { fiche20 } from "./fiche-20"

export const writtenCategory: LearningCategory = {
  id: "fiches-ecrites-plateau",

  type: "written",

  title: "Fiches écrites",

  description: "Révision des fiches écrites du TP CTCR",

  icon: "📖",

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
    fiche13,
    fiche14,
    fiche15,
    fiche16,
    fiche17,
    fiche18,
    fiche19,
    fiche20,
  ],
}
