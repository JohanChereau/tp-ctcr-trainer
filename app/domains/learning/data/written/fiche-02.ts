import type { Lesson } from "../../types/learning"

export const fiche02: Lesson = {
  id: "fiche-02",

  title: "Fiche 2",

  contentType: "questions",

  questions: [
    {
      id: "f2-q1",

      type: "text",

      question:
        "Quels sont les trois gestes fondamentaux de premiers secours ?",

      canonicalAnswer: "Protéger, alerter, secourir",

      acceptedAnswers: [
        "protéger alerter secourir",
        "protéger, alerter, secourir",
      ],

      explanation:
        "Les trois actions fondamentales sont protéger, alerter et secourir.",

      tags: ["secours"],
    },

    {
      id: "f2-q2",

      type: "text",

      question: "Quel numéro permet de joindre les secours européens ?",

      canonicalAnswer: "112",

      acceptedAnswers: ["112"],

      explanation: "Le 112 est le numéro d'urgence européen.",

      tags: ["urgence"],
    },

    {
      id: "f2-q3",

      type: "text",

      question:
        "Avant d'intervenir sur un accident, quelle est la première action à réaliser ?",

      canonicalAnswer: "Protéger",

      acceptedAnswers: ["protéger"],

      explanation:
        "La protection est toujours la première étape afin d'éviter un sur-accident.",

      tags: ["secours"],
    },
  ],
}
