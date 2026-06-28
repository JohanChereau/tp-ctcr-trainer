import type { Lesson } from "../../types/learning"

export const fiche04: Lesson = {
  id: "oral-04",

  title: "Fiche orale 4 - Gestes et postures - accident du travail",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "c8Yn4tyLZIg",
  },

  markdown: `
# Gestes et postures - Accidents du travail

## Plan

* Les gestes et postures à adopter
* L'importance des accidents du travail
* Les dangers et les risques

---

# 1. Gestes et postures à adopter

## Montée et descente du véhicule

Lors de la montée ou de la descente de l'autocar, je dois être particulièrement vigilant.

Les principaux risques sont :

* Les chutes.
* Les foulures.
* Les fractures.
* Les entorses.

Pour limiter ces risques :

* Je ne saute jamais les marches.
* Je vérifie que les marches ne sont pas glissantes.
* Je me tiens correctement aux poignées prévues à cet effet.
* Je conserve trois points d'appui lorsque cela est possible.

### Côté conducteur

Si mon véhicule dispose d'une porte côté conducteur, je reste vigilant vis-à-vis des véhicules pouvant arriver par l'arrière lors de ma descente.

---

## Chargement et déchargement

Lors du chargement ou du déchargement des bagages :

* Je garde le dos droit.
* J'utilise la force de mes jambes.
* Je veille à conserver un bon équilibre.
* Je fais attention à la stabilité des charges.

---

## Lavage du véhicule

Lors du nettoyage du véhicule :

* Je fais attention aux travaux en hauteur.
* Je prends garde aux surfaces glissantes.
* Je respecte les consignes de sécurité.

---

## Équipements de Protection Individuelle (EPI)

J'utilise les équipements adaptés à ma mission :

* Gants.
* Chaussures de sécurité.
* Vêtements adaptés.

---

# 2. Importance des accidents du travail

Les accidents peuvent se produire :

* À l'arrêt.
* En circulation.

---

## Définition de l'accident du travail

Un accident du travail est un accident qui survient à un salarié :

* Pendant son activité professionnelle.
* À l'occasion de son travail.

Le lieu de l'accident importe peu dès lors qu'il est lié à l'activité professionnelle.

---

## Définition de l'accident de trajet

L'accident de trajet est un accident qui survient :

* Lors du trajet domicile-travail.
* Lors du trajet travail-domicile.
* Lors du trajet effectué pendant une coupure (pause déjeuner par exemple).

---

## Quelques chiffres

Selon les données les plus récentes :

* En 2024, 223 accidents corporels ont impliqué un autocar.
* 36 personnes ont été tuées.
* La moitié des personnes tuées l'ont été sur les routes hors agglomération et hors autoroute.
* L'autocar reste environ 14 fois plus sûr que l'automobile.

---

# 3. Dangers et risques

## Quelques chiffres

Il est important de retenir qu'un véhicule lourd est :

**13 fois plus dangereux à l'arrêt qu'en circulation.**

En 2022, on a recensé :

* 2 914 accidents du travail.
* 479 accidents de trajet.

Ces chiffres concernent plus de 100 000 conducteurs salariés.

---

## Principales causes d'accidents du travail

Les accidents du travail sont principalement liés à :

* La montée et la descente du véhicule.
* Les chutes de hauteur.
* Les chutes de plain-pied.
* Les risques routiers.
* Les agressions.

---

## Principales lésions observées

Les accidents du travail peuvent entraîner :

* Des traumatismes physiques ou psychiques.
* Des entorses.
* Des douleurs au dos, aux bras ou aux épaules.
* Des intoxications.
* Des allergies.
* Des brûlures liées aux produits de nettoyage.

Les causes les plus fréquentes sont :

* Une mauvaise posture.
* Une position assise prolongée.
* Le port de charges lourdes (valises, vélos, etc.).

---

## Portes d'accès

Les risques peuvent varier selon le type de véhicule.

### Risques liés aux portes

* Blessure d'un voyageur lors de l'ouverture ou de la fermeture d'une porte.
* Coincement d'une main.
* Écrasement d'un membre.

### Risques liés aux soutes

* Coincement de la main.
* Écrasement lors de la fermeture d'une soute.

---

# À retenir

## Gestes et postures

* Ne pas sauter les marches.
* Utiliser les jambes pour porter les charges.
* Garder le dos droit.
* Porter les EPI adaptés.

## Accidents du travail

* 2 914 accidents du travail recensés en 2022.
* 479 accidents de trajet.
* Les accidents peuvent survenir à l'arrêt comme en circulation.
* Un véhicule lourd est 13 fois plus dangereux à l'arrêt qu'en circulation.

## Sécurité

* L'autocar est environ 14 fois plus sûr que l'automobile.
* Même à l'arrêt, la vigilance reste indispensable.

## Principaux risques

* Chutes.
* Coincements.
* Écrasements.
* Mauvaises manipulations de charges.
* Risques routiers.

`,

  questions: [
    {
      id: "fop04-q01",

      type: "true-false",

      question:
        "Il est recommandé de sauter les dernières marches en descendant de l'autocar pour gagner du temps.",

      correctAnswer: false,
    },

    {
      id: "fop04-q02",

      type: "multiple-choice",

      question:
        "Quels risques sont liés à la montée et à la descente du véhicule ?",

      options: ["Chute", "Entorse", "Fracture", "Foulure"],

      correctOptions: ["Chute", "Entorse", "Fracture", "Foulure"],
    },

    {
      id: "fop04-q03",

      type: "yes-no",

      question:
        "Lors de la descente côté conducteur, faut-il être attentif aux véhicules pouvant arriver par l'arrière ?",

      correctAnswer: true,
    },

    {
      id: "fop04-q04",

      type: "single-choice",

      question: "Quelle est la bonne posture lors du port d'une charge ?",

      options: [
        "Dos courbé",
        "Dos droit et jambes fléchies",
        "Bras tendus uniquement",
        "Dos droit sans plier les jambes",
      ],

      correctOption: "Dos droit et jambes fléchies",
    },

    {
      id: "fop04-q05",

      type: "true-false",

      question:
        "Lors du chargement des bagages, l'équilibre et la stabilité sont importants.",

      correctAnswer: true,
    },

    {
      id: "fop04-q06",

      type: "multiple-choice",

      question: "Quels risques peut-on rencontrer lors du lavage du véhicule ?",

      options: [
        "Travail en hauteur",
        "Zones glissantes",
        "Électrocution systématique",
        "Chute",
      ],

      correctOptions: ["Travail en hauteur", "Zones glissantes", "Chute"],
    },

    {
      id: "fop04-q07",

      type: "multiple-choice",

      question:
        "Quels équipements de protection individuelle peuvent être utilisés ?",

      options: [
        "Gants",
        "Chaussures de sécurité",
        "Vêtements adaptés",
        "Casque audio",
      ],

      correctOptions: ["Gants", "Chaussures de sécurité", "Vêtements adaptés"],
    },

    {
      id: "fop04-q08",

      type: "single-choice",

      question: "Qu'est-ce qu'un accident du travail ?",

      options: [
        "Un accident lié à l'activité professionnelle",
        "Un accident uniquement dans les locaux de l'entreprise",
        "Un accident uniquement sur la route",
        "Un accident pendant les congés",
      ],

      correctOption: "Un accident lié à l'activité professionnelle",
    },

    {
      id: "fop04-q09",

      type: "single-choice",

      question: "Qu'est-ce qu'un accident de trajet ?",

      options: [
        "Un accident pendant les vacances",
        "Un accident survenu lors du trajet domicile-travail",
        "Un accident sur un parking uniquement",
        "Un accident dans l'entreprise",
      ],

      correctOption: "Un accident survenu lors du trajet domicile-travail",
    },

    {
      id: "fop04-q10",

      type: "yes-no",

      question:
        "Un accident de trajet peut survenir lors de la pause déjeuner.",

      correctAnswer: true,
    },

    {
      id: "fop04-q11",

      type: "single-choice",

      question:
        "Combien de fois y a-t-il plus d'accidents du travail à l'arrêt qu'en circulation ?",

      options: ["2 fois", "5 fois", "10 fois", "13 fois"],

      correctOption: "13 fois",
    },

    {
      id: "fop04-q12",

      type: "single-choice",

      question:
        "Combien d'accidents par an concernent environ la montée ou la descente de cabine ?",

      options: ["1 000", "5 000", "10 000", "20 000"],

      correctOption: "10 000",
    },

    {
      id: "fop04-q13",

      type: "true-false",

      question:
        "Les accidents peuvent uniquement arriver lorsque le véhicule circule.",

      correctAnswer: false,
    },

    {
      id: "fop04-q14",

      type: "multiple-choice",

      question:
        "Quels risques existent lors de l'ouverture ou de la fermeture d'une porte ?",

      options: [
        "Blesser un voyageur",
        "Coincer une main",
        "Écraser une main",
        "Crever un pneu",
      ],

      correctOptions: [
        "Blesser un voyageur",
        "Coincer une main",
        "Écraser une main",
      ],
    },

    {
      id: "fop04-q15",

      type: "yes-no",

      question:
        "Une soute peut provoquer un risque de coincement ou d'écrasement.",

      correctAnswer: true,
    },

    {
      id: "fop04-q16",

      type: "true-false",

      question: "Les chaussures de sécurité font partie des EPI.",

      correctAnswer: true,
    },

    {
      id: "fop04-q17",

      type: "single-choice",

      question:
        "Quelle partie du corps doit principalement fournir l'effort lors du port d'une charge ?",

      options: ["Le dos", "Les jambes", "Les épaules", "Les bras uniquement"],

      correctOption: "Les jambes",
    },

    {
      id: "fop04-q18",

      type: "yes-no",

      question:
        "Il faut être particulièrement vigilant aux marches glissantes.",

      correctAnswer: true,
    },

    {
      id: "fop04-q19",

      type: "multiple-choice",

      question:
        "Parmi les situations suivantes, lesquelles peuvent être à l'origine d'un accident du travail ?",

      options: [
        "Montée dans le véhicule",
        "Descente du véhicule",
        "Chargement de bagages",
        "Fermeture d'une porte",
      ],

      correctOptions: [
        "Montée dans le véhicule",
        "Descente du véhicule",
        "Chargement de bagages",
        "Fermeture d'une porte",
      ],
    },

    {
      id: "fop04-q20",

      type: "text",

      question:
        "Quelle règle essentielle faut-il respecter lors du port d'une charge ?",

      canonicalAnswer: "Garder le dos droit et utiliser les jambes",

      acceptedAnswers: [
        "dos droit et jambes",
        "dos droit et jambes fléchies",
        "garder le dos droit",
        "utiliser les jambes",
        "dos droit utiliser les jambes",
        "dos droit et utiliser les jambes",
        "garder dos droit et utiliser les jambes",
      ],
    },
    {
      id: "fop04-q21",

      type: "text",

      question:
        "Combien d'accidents du travail ont été recensés en 2022 chez les conducteurs salariés ?",

      canonicalAnswer: "2914",

      acceptedAnswers: ["2914", "2 914"],
    },

    {
      id: "fop04-q22",

      type: "text",

      question: "Combien d'accidents de trajet ont été recensés en 2022 ?",

      canonicalAnswer: "479",

      acceptedAnswers: ["479"],
    },

    {
      id: "fop04-q23",

      type: "single-choice",

      question:
        "Combien de fois un véhicule lourd est-il plus dangereux à l'arrêt qu'en circulation ?",

      options: ["5 fois", "10 fois", "13 fois", "20 fois"],

      correctOption: "13 fois",
    },

    {
      id: "fop04-q24",

      type: "text",

      question:
        "Combien d'accidents corporels impliquant un autocar ont été recensés en 2024 ?",

      canonicalAnswer: "223",

      acceptedAnswers: ["223"],
    },

    {
      id: "fop04-q25",

      type: "text",

      question:
        "Combien de personnes ont été tuées dans les accidents corporels impliquant un autocar en 2024 ?",

      canonicalAnswer: "36",

      acceptedAnswers: ["36"],
    },

    {
      id: "fop04-q26",

      type: "single-choice",

      question:
        "L'autocar est environ combien de fois plus sûr que l'automobile ?",

      options: ["5 fois", "8 fois", "10 fois", "14 fois"],

      correctOption: "14 fois",
    },

    {
      id: "fop04-q27",

      type: "multiple-choice",

      question: "Quelles sont les principales causes d'accidents du travail ?",

      options: [
        "Montée et descente du véhicule",
        "Chutes de hauteur",
        "Chutes de plain-pied",
        "Risques routiers",
        "Agressions",
        "Panne moteur",
      ],

      correctOptions: [
        "Montée et descente du véhicule",
        "Chutes de hauteur",
        "Chutes de plain-pied",
        "Risques routiers",
        "Agressions",
      ],
    },

    {
      id: "fop04-q28",

      type: "multiple-choice",

      question: "Quelles lésions peuvent résulter d'un accident du travail ?",

      options: [
        "Entorses",
        "Douleurs au dos",
        "Brûlures",
        "Allergies",
        "Intoxications",
        "Myopie",
      ],

      correctOptions: [
        "Entorses",
        "Douleurs au dos",
        "Brûlures",
        "Allergies",
        "Intoxications",
      ],
    },
  ],
}
