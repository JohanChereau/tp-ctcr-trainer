import type { Lesson } from "../../types/learning"

export const theme04: Lesson = {
  id: "theme-04",

  title: "Thème 4 - Pneumatiques, roues, suspension et direction",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "11m02s",
  },

  markdown: `
# Thème 4 - Pneumatiques, roues, suspension et direction

Ce thème consiste à contrôler l'état des pneumatiques, des roues, de la suspension et de la direction du véhicule.

---

# 1. Pneumatiques, roues et suspension

Le contrôle s'effectue sur :

- Une roue de l'autocar.
- Une roue de la remorque (si le véhicule en est équipé).

⚠️ En présence d'un essieu avec roues jumelées, le contrôle s'effectue impérativement sur un jumelage.

## Contrôle des pneumatiques

Pour chaque pneu, vérifier :

- L'état de la bande de roulement.
- L'état des flancs.
- La pression (contrôle visuel).

## Contrôle des roues

Si le carrossage et/ou l'enjoliveur le permettent, vérifier :

- L'absence de corps étrangers dans le jumelage.
- La présence et le serrage apparent des écrous de roues.

## Contrôle de la suspension

Contrôler visuellement :

- L'état des lames.
- L'état des coussins d'air.
- L'absence de fuite d'air.
- L'absence de fuite hydraulique sur les amortisseurs.

## Contrôle du garde-boue

Vérifier visuellement l'état du garde-boue.

---

# 2. Direction

Vérifier le niveau du bocal d'assistance de direction.

⚠️ Si le bocal n'est pas visible, annoncer simplement que le niveau est correct.

Expliquer à l'expert comment contrôler l'assistance de direction juste avant le repérage du parcours de maniabilité.

Exemple de réponse :

> « Je tournerai le volant d'un demi-tour à droite, puis à gauche tout en avançant, afin de détecter d'éventuels points de résistance et/ou bruits anormaux. »
`,
  questions: [
    {
      id: "theme04-q01",

      type: "multiple-choice",

      question: "Que faut-il vérifier sur chaque pneumatique ?",

      options: [
        "L'état de la bande de roulement",
        "L'état des flancs",
        "La pression (visuellement)",
        "La date de fabrication",
      ],

      correctOptions: [
        "L'état de la bande de roulement",
        "L'état des flancs",
        "La pression (visuellement)",
      ],
    },

    {
      id: "theme04-q02",

      type: "true-false",

      question:
        "En présence de roues jumelées, le contrôle doit être effectué sur un jumelage.",

      correctAnswer: true,
    },

    {
      id: "theme04-q03",

      type: "multiple-choice",

      question:
        "Si le carrossage ou l'enjoliveur le permet, que faut-il vérifier sur les roues ?",

      options: [
        "L'absence de corps étrangers dans le jumelage",
        "La présence et le serrage apparent des écrous de roues",
        "La couleur de la jante",
        "La pression avec un manomètre",
      ],

      correctOptions: [
        "L'absence de corps étrangers dans le jumelage",
        "La présence et le serrage apparent des écrous de roues",
      ],
    },

    {
      id: "theme04-q04",

      type: "multiple-choice",

      question: "Que faut-il contrôler visuellement sur la suspension ?",

      options: [
        "L'état des lames",
        "L'état des coussins d'air",
        "L'absence de fuite d'air",
        "L'absence de fuite hydraulique sur les amortisseurs",
      ],

      correctOptions: [
        "L'état des lames",
        "L'état des coussins d'air",
        "L'absence de fuite d'air",
        "L'absence de fuite hydraulique sur les amortisseurs",
      ],
    },

    {
      id: "theme04-q05",

      type: "yes-no",

      question: "Faut-il également contrôler visuellement le garde-boue ?",

      correctAnswer: true,
    },

    {
      id: "theme04-q06",

      type: "true-false",

      question:
        "Si le bocal d'assistance de direction n'est pas visible, il suffit d'annoncer que le niveau est correct.",

      correctAnswer: true,
    },

    {
      id: "theme04-q07",

      type: "single-choice",

      question:
        "Comment contrôle-t-on l'assistance de direction avant le parcours de maniabilité ?",

      options: [
        "En tournant le volant d'un demi-tour à droite puis à gauche tout en avançant",
        "En tournant le volant à l'arrêt de butée à butée",
        "En coupant le moteur",
        "En appuyant plusieurs fois sur la pédale de frein",
      ],

      correctOption:
        "En tournant le volant d'un demi-tour à droite puis à gauche tout en avançant",
    },

    {
      id: "theme04-q08",

      type: "multiple-choice",

      question:
        "Que cherche-t-on à détecter lors du contrôle de l'assistance de direction ?",

      options: [
        "Des points de résistance",
        "Des bruits anormaux",
        "Une fuite d'huile moteur",
        "Une usure des essuie-glaces",
      ],

      correctOptions: ["Des points de résistance", "Des bruits anormaux"],
    },

    {
      id: "theme04-q09",

      type: "true-false",

      question:
        "Le contrôle de la pression des pneumatiques se fait visuellement lors de cette épreuve.",

      correctAnswer: true,
    },

    {
      id: "theme04-q10",

      type: "yes-no",

      question:
        "Le contrôle des pneumatiques s'effectue-t-il sur une roue de l'autocar ?",

      correctAnswer: true,
    },
  ],
}
