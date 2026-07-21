import type { LearningCategory } from "../../types/learning"

import { professionalCalculations01 } from "./professional-calculations-01"

export const mapsAndProfessionalCalculationsCategory: LearningCategory = {
  id: "maps-and-professional-calculations",

  type: "maps-and-professional-calculations",

  title: "Cartes et calculs professionnels",

  description:
    "Apprenez à lire une carte et maîtrisez les calculs professionnels utiles à la préparation et à la réalisation d'un trajet.",

  icon: "🧭",

  lessons: [professionalCalculations01],
}
