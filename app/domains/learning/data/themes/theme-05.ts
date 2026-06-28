import type { Lesson } from "../../types/learning"

export const theme05: Lesson = {
  id: "theme-05",

  title:
    "Thème 5 - Caractéristiques du véhicule : plaques, disques, catadioptres et protections",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "12m14s",
  },

  markdown: `
# Thème 5 - Caractéristiques du véhicule : plaques, disques, catadioptres et protections

Ce thème consiste à présenter les principales caractéristiques techniques du véhicule puis à contrôler les différents affichages et protections extérieurs.

---

# 1. Caractéristiques techniques

Présenter l'autocar en indiquant :

- Sa marque.
- Son type.
- Sa puissance.

Annoncer également :

- La longueur du porte-à-faux avant.
- La longueur du porte-à-faux arrière.

⚠️ Ces informations sont généralement apprises à l'aide du mémento fourni pendant la formation.

## Véhicules de formation

### Iveco Crossway

| Caractéristique | Valeur |
| --------------- | ------ |
| **Marque** | Iveco |
| **Type** | Crossway |
| **Puissance** | À compléter |
| **Porte-à-faux avant** | À compléter |
| **Porte-à-faux arrière** | À compléter |

### MAN Lion's Intercity

| Caractéristique | Valeur |
| --------------- | ------ |
| **Marque** | MAN |
| **Type** | Lion's Intercity |
| **Puissance** | À compléter |
| **Porte-à-faux avant** | À compléter |
| **Porte-à-faux arrière** | À compléter |

---

# 2. Affichages et protections extérieurs

Vérifier la présence et l'état des éléments suivants :

- Plaque de tare.
- Catadioptres latéraux.
- Plaque d'immatriculation.
- Catadioptres arrière.
- Disques de limitation de vitesse.

---

# 3. Véhicule avec remorque (catégorie DE)

Pour la catégorie **DE**, vérifier également la présence et l'état des éléments suivants sur la remorque :

- Plaque de tare.
- Catadioptres latéraux.
- Plaque d'immatriculation.
- Catadioptres arrière.
`,
  questions: [
    {
      id: "theme05-q01",

      type: "multiple-choice",

      question:
        "Quelles caractéristiques techniques doivent être présentées à l'expert ?",

      options: ["La marque", "Le type", "La puissance", "Le kilométrage"],

      correctOptions: ["La marque", "Le type", "La puissance"],
    },

    {
      id: "theme05-q02",

      type: "multiple-choice",

      question:
        "Quelles longueurs doivent être annoncées lors de la présentation du véhicule ?",

      options: [
        "Le porte-à-faux avant",
        "Le porte-à-faux arrière",
        "L'empattement",
        "La longueur totale",
      ],

      correctOptions: ["Le porte-à-faux avant", "Le porte-à-faux arrière"],
    },

    {
      id: "theme05-q03",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être contrôlés lors des affichages et protections extérieurs ?",

      options: [
        "Plaque de tare",
        "Catadioptres latéraux",
        "Plaque d'immatriculation",
        "Catadioptres arrière",
        "Disques de limitation de vitesse",
      ],

      correctOptions: [
        "Plaque de tare",
        "Catadioptres latéraux",
        "Plaque d'immatriculation",
        "Catadioptres arrière",
        "Disques de limitation de vitesse",
      ],
    },

    {
      id: "theme05-q04",

      type: "true-false",

      question:
        "La présence et l'état de la plaque d'immatriculation doivent être vérifiés.",

      correctAnswer: true,
    },

    {
      id: "theme05-q05",

      type: "true-false",

      question:
        "Les disques de limitation de vitesse n'ont pas besoin d'être contrôlés.",

      correctAnswer: false,
    },

    {
      id: "theme05-q06",

      type: "yes-no",

      question:
        "En catégorie DE, faut-il également contrôler certains éléments sur la remorque ?",

      correctAnswer: true,
    },

    {
      id: "theme05-q07",

      type: "multiple-choice",

      question:
        "Quels éléments doivent également être vérifiés sur la remorque en catégorie DE ?",

      options: [
        "Plaque de tare",
        "Catadioptres latéraux",
        "Plaque d'immatriculation",
        "Catadioptres arrière",
        "Disques de limitation de vitesse",
      ],

      correctOptions: [
        "Plaque de tare",
        "Catadioptres latéraux",
        "Plaque d'immatriculation",
        "Catadioptres arrière",
      ],
    },

    {
      id: "theme05-q08",

      type: "true-false",

      question:
        "Les catadioptres latéraux et arrière doivent être présents et en bon état.",

      correctAnswer: true,
    },

    {
      id: "theme05-q09",

      type: "multiple-choice",

      question:
        "Que faut-il vérifier pour les affichages et protections extérieurs ?",

      options: [
        "Leur présence",
        "Leur état",
        "Leur date de fabrication",
        "Leur couleur",
      ],

      correctOptions: ["Leur présence", "Leur état"],
    },

    {
      id: "theme05-q10",

      type: "true-false",

      question:
        "La puissance du véhicule fait partie des caractéristiques techniques à présenter.",

      correctAnswer: true,
    },
  ],
}
