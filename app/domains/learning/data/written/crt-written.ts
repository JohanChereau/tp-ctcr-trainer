import type { LearningCategory } from "../../types/learning"

export const crtWrittenCategory: LearningCategory = {
  id: "fiches-ecrites",

  title: "Fiches écrites",

  type: "written",

  description: "Révision des fiches écrites du TP CTCR",

  icon: "📖",

  lessons: [
    {
      id: "fiche-01",

      title: "Fiche 1",

      questions: [
        {
          id: "f1-q1",

          type: "text",

          question: "Quelle est la largeur maximale autorisée ?",

          canonicalAnswer: "2,55 m",

          acceptedAnswers: ["2,55 m", "2.55 m", "2,55 mètres", "2.55 mètres"],

          explanation:
            "La largeur maximale autorisée pour un véhicule est de 2,55 mètres.",

          hint: "Réponse en mètres.",

          tags: ["dimensions"],
        },

        {
          id: "f1-q2",

          type: "text",

          question:
            "Quelle est la périodicité de vérification du chronotachygraphe ?",

          canonicalAnswer: "2 ans",

          acceptedAnswers: ["2 ans", "deux ans"],

          explanation:
            "Le chronotachygraphe doit être contrôlé périodiquement tous les deux ans.",

          tags: ["chronotachygraphe", "contrôle"],
        },

        {
          id: "f1-q3",

          type: "image",

          question: "Quel symbole représente la période de repos ?",

          image:
            "https://cdn.pixabay.com/photo/2021/10/15/10/02/icon-6711587_1280.png",

          imageAlt: "Symbole du repos",

          canonicalAnswer: "lit",

          acceptedAnswers: ["lit", "symbole lit"],

          explanation:
            "Le symbole du lit représente la période de repos du conducteur.",

          tags: ["chronotachygraphe", "symboles"],
        },
      ],
    },
  ],
}
