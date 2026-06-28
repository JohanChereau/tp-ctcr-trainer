import type { Lesson } from "../../types/learning"

export const theme02: Lesson = {
  id: "theme-02",

  title: "Thème 2 - Feux, dispositifs de contrôle et accessoires",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "6m10s",
  },

  markdown: `
# Thème 2 - Feux, dispositifs de contrôle et accessoires

Ce thème consiste à vérifier des feux du véhicule, puis à présenter des dispositifs de contrôle et un accessoire désignés par l'expert.

---

# 1. Vérification des feux

L'expert désigne **3 feux** à contrôler.

Pour chacun d'eux, il faut vérifier :

- Leur état.
- Leur bon fonctionnement.

Les feux pouvant être demandés sont notamment :

- Feux de position.
- Feux de croisement.
- Feux de route.
- Feux de brouillard avant.
- Feux de brouillard arrière.
- Feux de marche arrière.
- Feux stop.
- Feux d'encombrement.
- Indicateurs de direction.
- Feux de détresse.
- Éclairage de plaque d'immatriculation.
- Feux diurnes.
- Feux d'angle.
- Feux de stationnement.

---

# 2. Dispositifs de contrôle

L'expert désigne **2 dispositifs de contrôle**.

Pour chacun d'eux, il faut :

- Indiquer son emplacement.
- Expliquer son rôle.
- Expliquer son fonctionnement.

Les dispositifs peuvent être choisis parmi :

- Les voyants.
- Les témoins.
- L'ordinateur de bord.
- Les cadrans de contrôle.

⚠️ Le chronotachygraphe ne peut pas être demandé dans ce thème.

---

# 3. Accessoire

L'expert désigne **1 accessoire**.

Pour celui-ci, il faut :

- Indiquer son emplacement.
- Expliquer son rôle.
- Expliquer son fonctionnement.

Les accessoires pouvant être demandés sont notamment :

- Les essuie-glaces.
- La ventilation.
- L'avertisseur sonore.
- Les commandes du poste de conduite.

⚠️ L'autoradio et le GPS ne peuvent pas être demandés.

---

# Vidéo

Cette vidéo présente le tableau de bord du **MAN Lion's Intercity** ainsi que les principales commandes du poste de conduite.

Elle permet de se familiariser avec les différents boutons, voyants et commandes susceptibles d'être demandés par l'expert lors de l'épreuve.

::youtube[Hh_sIK2bRJc]
`,
  questions: [
    {
      id: "theme02-q01",

      type: "single-choice",

      question:
        "Combien de feux sont désignés par l'expert lors de cette épreuve ?",

      options: ["1", "2", "3", "5"],

      correctOption: "3",
    },

    {
      id: "theme02-q02",

      type: "multiple-choice",

      question:
        "Que faut-il vérifier pour chacun des feux désignés par l'expert ?",

      options: [
        "Leur état",
        "Leur bon fonctionnement",
        "Leur puissance en watts",
        "Leur couleur",
      ],

      correctOptions: ["Leur état", "Leur bon fonctionnement"],
    },

    {
      id: "theme02-q03",

      type: "single-choice",

      question:
        "Combien de dispositifs de contrôle sont choisis par l'expert ?",

      options: ["1", "2", "3", "4"],

      correctOption: "2",
    },

    {
      id: "theme02-q04",

      type: "multiple-choice",

      question: "Que faut-il présenter pour chaque dispositif de contrôle ?",

      options: [
        "Son emplacement",
        "Son rôle",
        "Son fonctionnement",
        "Son prix",
      ],

      correctOptions: ["Son emplacement", "Son rôle", "Son fonctionnement"],
    },

    {
      id: "theme02-q05",

      type: "true-false",

      question:
        "Le chronotachygraphe peut être choisi comme dispositif de contrôle.",

      correctAnswer: false,
    },

    {
      id: "theme02-q06",

      type: "single-choice",

      question:
        "Combien d'accessoires sont désignés par l'expert lors de cette épreuve ?",

      options: ["1", "2", "3", "4"],

      correctOption: "1",
    },

    {
      id: "theme02-q07",

      type: "multiple-choice",

      question: "Que faut-il présenter pour l'accessoire désigné ?",

      options: [
        "Son emplacement",
        "Son rôle",
        "Son fonctionnement",
        "Sa date de fabrication",
      ],

      correctOptions: ["Son emplacement", "Son rôle", "Son fonctionnement"],
    },

    {
      id: "theme02-q08",

      type: "multiple-choice",

      question:
        "Quels éléments peuvent être choisis comme dispositifs de contrôle ?",

      options: [
        "Voyants",
        "Témoins",
        "Ordinateur de bord",
        "Cadrans de contrôle",
        "Chronotachygraphe",
      ],

      correctOptions: [
        "Voyants",
        "Témoins",
        "Ordinateur de bord",
        "Cadrans de contrôle",
      ],
    },

    {
      id: "theme02-q09",

      type: "multiple-choice",

      question: "Quels accessoires peuvent être demandés par l'expert ?",

      options: [
        "Essuie-glaces",
        "Ventilation",
        "Avertisseur sonore",
        "Commandes du poste de conduite",
        "Autoradio",
        "GPS",
      ],

      correctOptions: [
        "Essuie-glaces",
        "Ventilation",
        "Avertisseur sonore",
        "Commandes du poste de conduite",
      ],
    },

    {
      id: "theme02-q10",

      type: "true-false",

      question:
        "L'autoradio et le GPS peuvent être demandés comme accessoires.",

      correctAnswer: false,
    },
  ],
}
