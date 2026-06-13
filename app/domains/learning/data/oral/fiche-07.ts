import type { Lesson } from "../../types/learning"

export const fiche07: Lesson = {
  id: "oral-07",

  title: "Fiche orale 7 - Dynamique du véhicule",

  contentType: "markdown",

  youtubeVideoId: "TCwBLu7BoVw",

  markdown: `
# Dynamique du véhicule

## Plan

* Vitesse
* Centre de gravité
* Force centrifuge
* Adaptation de la conduite

---

## Vitesse

Lorsqu'un véhicule est en mouvement, il prend de la vitesse et donc de l'élan. Cet élan est appelé **énergie cinétique**.

L'importance de cette énergie dépend :

* de la masse du véhicule ;
* du carré de la vitesse.

Lors d'un choc, cette énergie se disperse violemment et provoque d'importants dégâts.

L'énergie cinétique est particulièrement importante pour les véhicules lourds. La vitesse constitue toujours un facteur aggravant dans un accident.

Les accidents impliquant des poids lourds sont généralement plus graves que ceux impliquant uniquement des véhicules légers.

**Exemple :**

* Environ **70 personnes sont tuées dans les poids lourds** lors d'accidents mortels.
* Environ **500 personnes sont tuées dans les véhicules légers ou parmi les piétons**.

---

## Centre de gravité

  ![Centre de gravité](/images/lesson-content/centre_de_gravite.png)

Le centre de gravité peut être défini comme le **point d'équilibre du véhicule**.

À l'origine, il est déterminé par le constructeur, qui cherche à le positionner le plus bas possible afin d'améliorer la stabilité du véhicule.

Cependant, sa position évolue en fonction du chargement.

Plus le centre de gravité est haut ou déséquilibré, plus la conduite devient difficile.

Cela peut entraîner :

* un balancement vers l'avant ;
* un balancement vers l'arrière ;
* un balancement de droite à gauche.

Dans les cas les plus importants, cela peut aller jusqu'au **renversement du véhicule**.

---

## Force centrifuge

  ![Force centrifuge](/images/lesson-content/force_centrifuge.png)

La force centrifuge est une force qui attire le véhicule vers l'extérieur d'un virage.

Elle dépend :

* de la masse du véhicule ;
* du carré de la vitesse ;
* du rayon du virage.

### Influence du rayon du virage

* Plus le rayon du virage est petit, plus la force centrifuge est importante.
* Plus le rayon du virage est grand, plus la force centrifuge est faible.

Cette force peut surprendre le conducteur et modifier la trajectoire du véhicule.

---

## Adaptation de la conduite

Le conducteur doit adapter sa conduite :

* à l'homme ;
* au véhicule ;
* à l'environnement.

### Adaptation à l'homme

La conduite doit être adaptée :

* à l'expérience du conducteur ;
* à son état de fatigue ;
* à ses capacités physiques et mentales.

### Adaptation à l'environnement

La conduite doit être adaptée :

- à l'état de la route ;
- aux conditions météorologiques ;
- à la visibilité.

Une chaussée mouillée réduit l'adhérence des pneumatiques.

**Sur route mouillée, la distance de freinage est multipliée par 2**, ce qui augmente considérablement la distance d'arrêt.

Le conducteur doit donc réduire sa vitesse et augmenter les distances de sécurité.

Les véhicules lourds disposent de limitations de vitesse spécifiques selon le type de route.

Ils sont également équipés d'un **limiteur de vitesse non modifiable**.

`,

  questions: [
    {
      id: "fop07-q01",

      type: "single-choice",

      question: "Comment appelle-t-on l'élan d'un véhicule en mouvement ?",

      options: [
        "L'énergie cinétique",
        "La force centrifuge",
        "Le centre de gravité",
        "L'énergie potentielle",
      ],

      correctOption: "L'énergie cinétique",
    },

    {
      id: "fop07-q02",

      type: "multiple-choice",

      question: "De quels éléments dépend l'énergie cinétique ?",

      options: [
        "La masse du véhicule",
        "Le carré de la vitesse",
        "Le rayon du virage",
        "Le chargement",
      ],

      correctOptions: ["La masse du véhicule", "Le carré de la vitesse"],
    },

    {
      id: "fop07-q03",

      type: "true-false",

      question:
        "La vitesse est toujours un facteur aggravant lors d'un accident.",

      correctAnswer: true,
    },

    {
      id: "fop07-q04",

      type: "single-choice",

      question: "Comment définit-on le centre de gravité ?",

      options: [
        "Le point d'équilibre du véhicule",
        "Le point de rotation des roues",
        "Le centre du moteur",
        "Le point d'appui du conducteur",
      ],

      correctOption: "Le point d'équilibre du véhicule",
    },

    {
      id: "fop07-q05",

      type: "yes-no",

      question:
        "Le constructeur cherche à positionner le centre de gravité le plus bas possible.",

      correctAnswer: true,
    },

    {
      id: "fop07-q06",

      type: "multiple-choice",

      question:
        "Quels mouvements peuvent être provoqués par un centre de gravité instable ?",

      options: [
        "Balancement vers l'avant",
        "Balancement vers l'arrière",
        "Balancement de droite à gauche",
        "Patinage des roues",
      ],

      correctOptions: [
        "Balancement vers l'avant",
        "Balancement vers l'arrière",
        "Balancement de droite à gauche",
      ],
    },

    {
      id: "fop07-q07",

      type: "true-false",

      question:
        "Un centre de gravité mal réparti peut entraîner le renversement du véhicule.",

      correctAnswer: true,
    },

    {
      id: "fop07-q08",

      type: "single-choice",

      question: "Dans un virage, la force centrifuge attire le véhicule :",

      options: [
        "Vers l'extérieur du virage",
        "Vers l'intérieur du virage",
        "Vers le centre de la route",
        "Vers l'avant",
      ],

      correctOption: "Vers l'extérieur du virage",
    },

    {
      id: "fop07-q09",

      type: "multiple-choice",

      question: "De quels éléments dépend la force centrifuge ?",

      options: [
        "La masse",
        "Le carré de la vitesse",
        "Le rayon du virage",
        "Le centre de gravité",
      ],

      correctOptions: [
        "La masse",
        "Le carré de la vitesse",
        "Le rayon du virage",
      ],
    },

    {
      id: "fop07-q10",

      type: "single-choice",

      question: "Que se passe-t-il lorsque le rayon d'un virage diminue ?",

      options: [
        "La force centrifuge augmente",
        "La force centrifuge diminue",
        "Le véhicule devient plus léger",
        "Le centre de gravité descend",
      ],

      correctOption: "La force centrifuge augmente",
    },

    {
      id: "fop07-q11",

      type: "true-false",

      question:
        "Plus le rayon du virage est grand, moins la force centrifuge est importante.",

      correctAnswer: true,
    },

    {
      id: "fop07-q12",

      type: "yes-no",

      question: "La force centrifuge peut modifier la trajectoire du véhicule.",

      correctAnswer: true,
    },

    {
      id: "fop07-q13",

      type: "multiple-choice",

      question: "À quels éléments le conducteur doit-il adapter sa conduite ?",

      options: [
        "À l'homme",
        "Au véhicule",
        "À l'environnement",
        "À la signalisation lumineuse uniquement",
      ],

      correctOptions: ["À l'homme", "Au véhicule", "À l'environnement"],
    },

    {
      id: "fop07-q14",

      type: "multiple-choice",

      question:
        "Quels éléments liés au conducteur doivent être pris en compte ?",

      options: [
        "L'expérience",
        "L'état de fatigue",
        "Les capacités physiques et mentales",
        "Le type de chargement",
      ],

      correctOptions: [
        "L'expérience",
        "L'état de fatigue",
        "Les capacités physiques et mentales",
      ],
    },

    {
      id: "fop07-q15",

      type: "multiple-choice",

      question: "Quels éléments de l'environnement influencent la conduite ?",

      options: [
        "L'état de la route",
        "La météo",
        "La visibilité",
        "Le type de chargement",
      ],

      correctOptions: ["L'état de la route", "La météo", "La visibilité"],
    },

    {
      id: "fop07-q16",

      type: "yes-no",

      question:
        "Les véhicules lourds disposent d'un limiteur de vitesse non modifiable.",

      correctAnswer: true,
    },

    {
      id: "fop07-q17",

      type: "text",

      question: "Comment appelle-t-on le point d'équilibre du véhicule ?",

      canonicalAnswer: "Centre de gravité",

      acceptedAnswers: ["centre de gravité", "le centre de gravité"],
    },

    {
      id: "fop07-q18",

      type: "text",

      question:
        "Quelle force attire le véhicule vers l'extérieur d'un virage ?",

      canonicalAnswer: "Force centrifuge",

      acceptedAnswers: ["force centrifuge", "la force centrifuge"],
    },
  ],
}
