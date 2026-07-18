import type { LearningCategory } from "../../types/learning"

import { rse01 } from "./rse-01"

export const socialRegulationsCategory: LearningCategory = {
  id: "social-regulations",

  type: "social-regulations",

  title: "Réglementation sociale",

  description:
    "Réglementation sociale française et européenne applicable au transport routier.",

  icon: "🕒",

  lessons: [rse01],
}
