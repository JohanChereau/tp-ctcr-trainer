import type { Lesson } from "../../types/learning"

export const fiche04: Lesson = {
  id: "oral-04",

  title: "Fiche orale 4 - Gestes et postures - accident du travail",

  contentType: "markdown",

  youtubeVideoId: "lAtO3h9sjMw",

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

⚠️ Ces chiffres doivent être actualisés auprès du formateur.

On recense approximativement :

* 75 000 salariés.
* 2 900 accidents du travail.
* 3 décès.

Concernant les accidents de circulation :

* 95 conducteurs blessés.
* 0 conducteur tué.

---

# 3. Dangers et risques

## Véhicule à l'arrêt

Il faut retenir qu'il existe :

**13 fois plus d'accidents du travail lorsque le véhicule est à l'arrêt que lorsqu'il est en circulation.**

Par exemple :

* Environ 10 000 accidents par an concernent la montée ou la descente de cabine.

Je dois donc rester vigilant même lorsque le véhicule est immobilisé.

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

* Ils peuvent survenir à l'arrêt comme en circulation.
* Les accidents à l'arrêt sont beaucoup plus fréquents.

## Principaux risques

* Chutes.
* Coincements.
* Écrasements.
* Mauvaises manipulations de charges.

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
        "garder le dos droit",
        "utiliser les jambes",
        "dos droit utiliser les jambes",
      ],
    },
  ],
}
