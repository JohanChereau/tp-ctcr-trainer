import { BookOpen, GraduationCap, FileText, Flame } from "lucide-react"

import type { LearningCategory } from "~/domains/learning/types/learning"

import type { CategoryAction } from "../types/categoryAction"

export function getCategoryActions(
  category: LearningCategory,
  weakQuestionsCount: number | null
): CategoryAction[] {
  switch (category.type) {
    case "written":
      return [
        {
          title: "Révision fiche par fiche",
          description:
            "Consultez chaque fiche individuellement et révisez à votre rythme.",
          href: `/learning/${category.id}/revision`,
          icon: BookOpen,
        },

        {
          title: "Quiz global",
          description: "Questions aléatoires parmi toutes les fiches.",
          href: `/learning/${category.id}/quiz`,
          icon: GraduationCap,
        },

        {
          title: "Réviser mes points faibles",
          description:
            "Travaillez uniquement les questions où vous avez le plus de difficultés.",
          href: `/learning/${category.id}/weak-questions`,
          icon: Flame,
          badge: weakQuestionsCount,
          iconClassName: "text-orange-500",
        },

        {
          title: "Examen blanc",
          description: "Simulation chronométrée de l'examen.",
          href: `/learning/${category.id}/exam`,
          icon: FileText,
        },
      ]

    case "rse":
      return [
        {
          title: "Consulter les leçons",
          description: "Parcourez les contenus pédagogiques de la RSE.",
          href: `/learning/${category.id}/revision`,
          icon: BookOpen,
        },

        {
          title: "Quiz RSE",
          description: "Testez vos connaissances.",
          href: `/learning/${category.id}/quiz`,
          icon: GraduationCap,
        },

        {
          title: "Réviser mes points faibles",
          description:
            "Travaillez uniquement les notions de RSE où vous avez le plus de difficultés.",
          href: `/learning/${category.id}/weak-questions`,
          icon: Flame,
          badge: weakQuestionsCount,
          iconClassName: "text-orange-500",
        },
      ]

    case "oral":
      return [
        {
          title: "Consulter les fiches",
          description: "Parcourez les fiches d'interrogation orale du TP CTCR.",
          href: `/learning/${category.id}/revision`,
          icon: BookOpen,
        },

        {
          title: "Quiz oral",
          description:
            "Entraînez-vous sur les questions d'interrogation orale.",
          href: `/learning/${category.id}/quiz`,
          icon: GraduationCap,
        },

        {
          title: "Réviser mes points faibles",
          description:
            "Travaillez uniquement les notions orales où vous avez le plus de difficultés.",
          href: `/learning/${category.id}/weak-questions`,
          icon: Flame,
          badge: weakQuestionsCount,
          iconClassName: "text-orange-500",
        },
      ]

    default:
      return []
  }
}
