import type { Lesson } from "../../types/learning"

export const theme03: Lesson = {
  id: "theme-03",

  title: "Thème 3 - Niveaux, glaces, rétroviseurs et essuie-glaces",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "8m24s",
  },

  markdown: `
# Thème 3 - Niveaux, glaces, rétroviseurs et essuie-glaces

Ce thème consiste à présenter les différents niveaux du véhicule puis à contrôler les glaces, les rétroviseurs et les essuie-glaces.

---

# 1. Niveaux

Selon l'accessibilité et l'équipement du véhicule, annoncer et montrer les orifices de remplissage des différents liquides.

Les niveaux pouvant être demandés sont notamment :

- Huile moteur.
- Liquide de refroidissement.
- Lave-glace.
- Liquide dépolluant (AdBlue / urée) pour les véhicules équipés.
- Liquide d'assistance de direction.
- Liquide d'assistance d'embrayage.
- Liquide de frein.

⚠️ Il est demandé d'indiquer et de montrer les orifices de remplissage. Il n'est pas nécessaire d'effectuer un remplissage.

---

# 2. Contrôle des glaces et des rétroviseurs

Contrôler les rétroviseurs :

- État.
- Fixation.

Contrôler les glaces et le pare-brise :

- État.
- Propreté.

---

# 3. Contrôle des essuie-glaces

Contrôler les essuie-glaces.

Vérifier uniquement leur état apparent.

⚠️ Il ne s'agit pas de tester leur fonctionnement, mais uniquement de vérifier leur état visuel.
`,
  questions: [
    {
      id: "theme03-q01",

      type: "multiple-choice",

      question:
        "Quels liquides peuvent être demandés lors de la vérification des niveaux ?",

      options: [
        "Huile moteur",
        "Liquide de refroidissement",
        "Lave-glace",
        "Liquide de frein",
        "Liquide lave-vaisselle",
      ],

      correctOptions: [
        "Huile moteur",
        "Liquide de refroidissement",
        "Lave-glace",
        "Liquide de frein",
      ],
    },

    {
      id: "theme03-q02",

      type: "true-false",

      question:
        "Lors de cette épreuve, il faut effectuer le remplissage des différents liquides.",

      correctAnswer: false,
    },

    {
      id: "theme03-q03",

      type: "multiple-choice",

      question:
        "Que faut-il faire concernant les différents niveaux du véhicule ?",

      options: [
        "Annoncer les orifices de remplissage",
        "Montrer les orifices de remplissage",
        "Effectuer le remplissage",
        "Vérifier le niveau de chaque liquide",
      ],

      correctOptions: [
        "Annoncer les orifices de remplissage",
        "Montrer les orifices de remplissage",
      ],
    },

    {
      id: "theme03-q04",

      type: "yes-no",

      question:
        "Le liquide dépolluant (AdBlue / urée) peut-il être demandé sur un véhicule équipé ?",

      correctAnswer: true,
    },

    {
      id: "theme03-q05",

      type: "multiple-choice",

      question: "Quels éléments doivent être contrôlés sur les rétroviseurs ?",

      options: ["Leur état", "Leur fixation", "Leur couleur", "Leur taille"],

      correctOptions: ["Leur état", "Leur fixation"],
    },

    {
      id: "theme03-q06",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être contrôlés sur les glaces et le pare-brise ?",

      options: ["Leur état", "Leur propreté", "Leur épaisseur", "Leur teinte"],

      correctOptions: ["Leur état", "Leur propreté"],
    },

    {
      id: "theme03-q07",

      type: "true-false",

      question:
        "Les essuie-glaces doivent être contrôlés uniquement sur leur état apparent.",

      correctAnswer: true,
    },

    {
      id: "theme03-q08",

      type: "true-false",

      question:
        "Il est nécessaire de faire fonctionner les essuie-glaces lors de cette vérification.",

      correctAnswer: false,
    },

    {
      id: "theme03-q09",

      type: "multiple-choice",

      question:
        "Quels liquides peuvent être présents selon l'équipement du véhicule ?",

      options: [
        "Liquide d'assistance de direction",
        "Liquide d'assistance d'embrayage",
        "Liquide dépolluant (AdBlue / urée)",
        "Liquide de climatisation",
      ],

      correctOptions: [
        "Liquide d'assistance de direction",
        "Liquide d'assistance d'embrayage",
        "Liquide dépolluant (AdBlue / urée)",
      ],
    },

    {
      id: "theme03-q10",

      type: "true-false",

      question:
        "Le pare-brise doit être contrôlé pour son état et sa propreté.",

      correctAnswer: true,
    },
  ],
}
