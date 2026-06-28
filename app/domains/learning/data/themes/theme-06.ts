import type { Lesson } from "../../types/learning"

export const theme06: Lesson = {
  id: "theme-06",

  title: "Thème 6 - Transport de voyageurs",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "13m23s",
  },

  markdown: `
# Thème 6 - Transport de voyageurs

Ce thème consiste à contrôler différents équipements et dispositifs liés au transport des voyageurs.

---

# 1. Lampe autonome

Contrôler le fonctionnement de la lampe autonome.

---

# 2. Inscriptions réglementaires

Vérifier la présence des inscriptions réglementaires obligatoires :

- Interdiction de parler au conducteur.
- Nombre de passagers.
- Port obligatoire de la ceinture de sécurité (sur les véhicules équipés).

---

# 3. Issues de secours

Présenter les différentes issues de secours signalées comme telles :

- Porte de secours.
- Fenêtre de secours.
- Trappe d'évacuation des passagers.

---

# 4. Siège

Contrôler un siège en vérifiant :

- Son état.
- Sa propreté.
- La présence de la ceinture de sécurité.
- L'état de la ceinture de sécurité.
- La fixation de la ceinture de sécurité.

---

# 5. Éclairage intérieur

Contrôler le fonctionnement :

- De l'éclairage des marches.
- De l'éclairage intérieur.
`,
  questions: [
    {
      id: "theme06-q01",

      type: "yes-no",

      question: "Faut-il contrôler le fonctionnement de la lampe autonome ?",

      correctAnswer: true,
    },

    {
      id: "theme06-q02",

      type: "multiple-choice",

      question:
        "Quelles inscriptions réglementaires doivent être présentes dans le véhicule ?",

      options: [
        "Interdiction de parler au conducteur",
        "Nombre de passagers",
        "Port obligatoire de la ceinture de sécurité",
        "Interdiction de manger",
      ],

      correctOptions: [
        "Interdiction de parler au conducteur",
        "Nombre de passagers",
        "Port obligatoire de la ceinture de sécurité",
      ],
    },

    {
      id: "theme06-q03",

      type: "true-false",

      question:
        "L'inscription relative au port obligatoire de la ceinture de sécurité est présente uniquement sur les véhicules équipés.",

      correctAnswer: true,
    },

    {
      id: "theme06-q04",

      type: "multiple-choice",

      question: "Quelles issues de secours peuvent être présentées ?",

      options: [
        "Porte de secours",
        "Fenêtre de secours",
        "Trappe d'évacuation des passagers",
        "Porte conducteur",
      ],

      correctOptions: [
        "Porte de secours",
        "Fenêtre de secours",
        "Trappe d'évacuation des passagers",
      ],
    },

    {
      id: "theme06-q05",

      type: "multiple-choice",

      question: "Que faut-il vérifier sur un siège ?",

      options: [
        "Son état",
        "Sa propreté",
        "La présence de la ceinture de sécurité",
        "L'état de la ceinture de sécurité",
        "La fixation de la ceinture de sécurité",
      ],

      correctOptions: [
        "Son état",
        "Sa propreté",
        "La présence de la ceinture de sécurité",
        "L'état de la ceinture de sécurité",
        "La fixation de la ceinture de sécurité",
      ],
    },

    {
      id: "theme06-q06",

      type: "true-false",

      question:
        "Il suffit de vérifier que la ceinture de sécurité est présente.",

      correctAnswer: false,
    },

    {
      id: "theme06-q07",

      type: "multiple-choice",

      question: "Quels éclairages doivent être contrôlés lors de ce thème ?",

      options: [
        "L'éclairage des marches",
        "L'éclairage intérieur",
        "L'éclairage de plaque d'immatriculation",
        "Les feux de route",
      ],

      correctOptions: ["L'éclairage des marches", "L'éclairage intérieur"],
    },

    {
      id: "theme06-q08",

      type: "true-false",

      question:
        "La porte conducteur est considérée comme une issue de secours.",

      correctAnswer: false,
    },

    {
      id: "theme06-q09",

      type: "yes-no",

      question:
        "Les issues de secours doivent-elles être signalées comme telles ?",

      correctAnswer: true,
    },

    {
      id: "theme06-q10",

      type: "multiple-choice",

      question:
        "Parmi les éléments suivants, lesquels sont concernés par le thème « Transport de voyageurs » ?",

      options: [
        "Lampe autonome",
        "Issues de secours",
        "Sièges",
        "Éclairage intérieur",
        "Pneumatiques",
      ],

      correctOptions: [
        "Lampe autonome",
        "Issues de secours",
        "Sièges",
        "Éclairage intérieur",
      ],
    },
  ],
}
