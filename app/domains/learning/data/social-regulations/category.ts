import type { LearningCategory } from "../../types/learning"

import { rse01 } from "./rse-01"
import { rsfIntercity01 } from "./rsf-intercity"

export const socialRegulationsCategory: LearningCategory = {
  id: "social-regulations",

  type: "social-regulations",

  title: "Réglementation sociale",

  description:
    "Réglementation sociale française et européenne applicable au transport routier.",

  icon: "🕒",

  lessons: [rse01, rsfIntercity01],
}
