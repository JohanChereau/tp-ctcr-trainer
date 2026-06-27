import type { Lesson } from "../../types/learning"

export const fiche06: Lesson = {
  id: "oral-06",

  title: "Fiche orale 6 - Dépassement",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "g1UVQCceG78",
  },

  markdown: `
# Dépassement

## Plan

* Précautions avant le dépassement
* Précautions pendant le dépassement
* Précautions après le dépassement
* Dangers liés au dépassement
* Être dépassé
* Dispositifs de protection anti-encastrement

---

# 1. Précautions avant le dépassement

Le dépassement avec un véhicule lourd nécessite une grande attention en raison :

* De sa masse.
* De son gabarit.
* De ses angles morts.
* De ses porte-à-faux.
* De sa faible capacité d'accélération.

---

## Vérifications préalables

Avant de dépasser, je dois :

* Vérifier que le dépassement est autorisé.
* Respecter les panneaux et les marquages au sol.
* Vérifier que la distance disponible est suffisante.
* M'assurer que ma vitesse est adaptée.
* Connaître les capacités d'accélération et de reprise de mon véhicule.
* Tenir compte du limiteur et du régulateur de vitesse.
* Contrôler mes rétroviseurs.

Je peux utiliser :

* Les avertisseurs lumineux.
* Les avertisseurs sonores lorsque cela est nécessaire.

---

## Cas particuliers

Je ne dois pas dépasser :

* Si la chaussée est couverte de neige.
* Si la signalisation l'interdit.

Attention également :

* Les véhicules ou ensembles de véhicules de plus de 7 mètres de long et de plus de 3,5 tonnes sont soumis à des restrictions d'utilisation de la troisième voie sur autoroute.

---

# 2. Précautions pendant le dépassement

Pendant le dépassement, je dois :

* Respecter les distances de sécurité.
* Surveiller ma trajectoire.
* Adapter ma vitesse.
* Contrôler régulièrement mes rétroviseurs.
* Surveiller les angles morts.

---

## Dépassement des usagers vulnérables

Lors du dépassement d'un piéton ou d'un deux-roues :

* Je laisse au minimum 1 mètre en agglomération.
* Je laisse au minimum 1,50 mètre hors agglomération.

---

# 3. Précautions après le dépassement

Après avoir dépassé :

* Je ne gêne pas le véhicule dépassé.
* Je surveille mon rabattement dans les rétroviseurs.
* Je signale mon rabattement avec le clignotant.
* Je contrôle les angles morts.
* Je fais attention au porte-à-faux.

---

## Distance après dépassement

Lorsque je dépasse un véhicule de même catégorie que le mien :

* Je dois conserver une distance minimale de 50 mètres avant de me rabattre.

---

# 4. Dangers liés au dépassement

Le principal danger est l'accrochage.

Les causes les plus fréquentes sont :

* Une mauvaise évaluation des distances.
* Une mauvaise évaluation des vitesses.
* Un écart de trajectoire.
* Un manque d'observation des angles morts.
* Un déport du véhicule provoqué par le vent.

---

## Attention au vent

Le vent peut provoquer un déplacement latéral du véhicule, notamment :

* Lors du croisement ou du dépassement d'un autre véhicule.
* Lors du passage d'une zone abritée à une zone exposée au vent.

---

# 5. Être dépassé

Lorsqu'un autre véhicule me dépasse :

* Je maintiens mon allure.
* Je serre à droite lorsque cela est possible.
* Je facilite les distances de sécurité.
* Je reste attentif aux écarts de trajectoire.
* Je fais attention au vent.

En cas de dépassement mal engagé, je peux ralentir afin de faciliter la manœuvre et éviter un danger.

---

# 6. Dispositifs de protection anti-encastrement

## Dispositifs latéraux

Ils protègent principalement :

* Les cyclistes.
* Les usagers vulnérables.

Ils évitent notamment :

* Le passage sous les roues arrière du véhicule.
* Le passage sous l'ensemble du véhicule.

---

## Dispositif arrière

Il protège :

* Les usagers arrivant par l'arrière du véhicule.

Il évite :

* L'encastrement sous le véhicule en cas de collision.

---

# À retenir

## Avant le dépassement

* Vérifier que le dépassement est autorisé.
* Contrôler la distance disponible.
* Utiliser les rétroviseurs.
* Tenir compte du gabarit, de la masse et de l'accélération du véhicule.

## Pendant le dépassement

* Respecter les distances latérales.
* Surveiller les angles morts.
* Contrôler les rétroviseurs.

## Après le dépassement

* Se rabattre sans gêner.
* Signaler avec le clignotant.
* Respecter les 50 m avec un véhicule de même catégorie.

## Chiffres à retenir

* 1 m : distance minimale en agglomération.
* 1,50 m : distance minimale hors agglomération.
* 50 m : distance avant rabattement derrière un véhicule de même catégorie.
* 7 m : longueur à partir de laquelle certaines restrictions de voie s'appliquent.

## Dangers

* Accrochage.
* Mauvaise appréciation des distances.
* Mauvaise appréciation des vitesses.
* Vent latéral.
* Écarts de trajectoire.

`,
  questions: [
    {
      id: "fop06-q01",

      type: "true-false",

      question:
        "Le dépassement avec un véhicule lourd nécessite une attention particulière en raison de sa masse et de son gabarit.",

      correctAnswer: true,
    },

    {
      id: "fop06-q02",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être pris en compte avant un dépassement ?",

      options: [
        "La masse du véhicule",
        "Le gabarit",
        "Les angles morts",
        "Les porte-à-faux",
        "La couleur du véhicule",
      ],

      correctOptions: [
        "La masse du véhicule",
        "Le gabarit",
        "Les angles morts",
        "Les porte-à-faux",
      ],
    },

    {
      id: "fop06-q03",

      type: "multiple-choice",

      question:
        "Quelles vérifications doivent être réalisées avant un dépassement ?",

      options: [
        "Vérifier que le dépassement est autorisé",
        "Contrôler la distance disponible",
        "Vérifier les capacités d'accélération",
        "Observer les rétroviseurs",
        "Vérifier le niveau de carburant",
      ],

      correctOptions: [
        "Vérifier que le dépassement est autorisé",
        "Contrôler la distance disponible",
        "Vérifier les capacités d'accélération",
        "Observer les rétroviseurs",
      ],
    },

    {
      id: "fop06-q04",

      type: "yes-no",

      question:
        "Le conducteur peut utiliser les avertisseurs lumineux pour signaler son intention de dépasser.",

      correctAnswer: true,
    },

    {
      id: "fop06-q05",

      type: "true-false",

      question:
        "Il est autorisé de dépasser lorsque la chaussée est recouverte de neige.",

      correctAnswer: false,
    },

    {
      id: "fop06-q06",

      type: "multiple-choice",

      question: "Pendant le dépassement, le conducteur doit :",

      options: [
        "Respecter les distances de sécurité",
        "Surveiller les angles morts",
        "Contrôler les rétroviseurs",
        "Adapter sa vitesse",
        "Couper le régulateur systématiquement",
      ],

      correctOptions: [
        "Respecter les distances de sécurité",
        "Surveiller les angles morts",
        "Contrôler les rétroviseurs",
        "Adapter sa vitesse",
      ],
    },

    {
      id: "fop06-q07",

      type: "single-choice",

      question: "Quel est le principal danger lors d'un dépassement ?",

      options: [
        "L'accrochage",
        "La panne moteur",
        "L'usure des pneus",
        "La surconsommation",
      ],

      correctOption: "L'accrochage",
    },

    {
      id: "fop06-q08",

      type: "multiple-choice",

      question:
        "Quelles causes peuvent conduire à un accrochage lors d'un dépassement ?",

      options: [
        "Mauvaise évaluation des distances",
        "Mauvaise évaluation des vitesses",
        "Vent latéral",
        "Écart de trajectoire",
        "Température extérieure",
      ],

      correctOptions: [
        "Mauvaise évaluation des distances",
        "Mauvaise évaluation des vitesses",
        "Vent latéral",
        "Écart de trajectoire",
      ],
    },

    {
      id: "fop06-q09",

      type: "yes-no",

      question:
        "Le vent peut provoquer un déport du véhicule lors d'un dépassement.",

      correctAnswer: true,
    },

    {
      id: "fop06-q10",

      type: "multiple-choice",

      question: "Lorsqu'un autre véhicule vous dépasse, vous devez :",

      options: [
        "Maintenir votre allure",
        "Serrer à droite",
        "Faciliter les distances de sécurité",
        "Accélérer",
      ],

      correctOptions: [
        "Maintenir votre allure",
        "Serrer à droite",
        "Faciliter les distances de sécurité",
      ],
    },

    {
      id: "fop06-q11",

      type: "true-false",

      question:
        "En cas de dépassement mal engagé, il peut être préférable de ralentir pour faciliter la manœuvre.",

      correctAnswer: true,
    },

    {
      id: "fop06-q12",

      type: "multiple-choice",

      question:
        "Après un dépassement, quelles précautions doivent être prises ?",

      options: [
        "Ne pas gêner le véhicule dépassé",
        "Contrôler les angles morts",
        "Surveiller le rabattement",
        "Actionner le clignotant",
        "Freiner immédiatement",
      ],

      correctOptions: [
        "Ne pas gêner le véhicule dépassé",
        "Contrôler les angles morts",
        "Surveiller le rabattement",
        "Actionner le clignotant",
      ],
    },

    {
      id: "fop06-q13",

      type: "multiple-choice",

      question:
        "Quels usagers nécessitent une vigilance particulière lors d'un dépassement ?",

      options: ["Piétons", "Cyclistes", "Deux-roues motorisés", "Poids lourds"],

      correctOptions: ["Piétons", "Cyclistes", "Deux-roues motorisés"],
    },

    {
      id: "fop06-q14",

      type: "true-false",

      question:
        "Les dispositifs anti-encastrement latéraux protègent principalement les cyclistes.",

      correctAnswer: true,
    },

    {
      id: "fop06-q15",

      type: "yes-no",

      question:
        "Le dispositif anti-encastrement arrière protège les usagers arrivant par l'arrière du véhicule.",

      correctAnswer: true,
    },

    {
      id: "fop06-q16",

      type: "text",

      question:
        "Quelle distance minimale doit être laissée lors du dépassement d'un piéton ou d'un deux-roues en agglomération ?",

      canonicalAnswer: "1m",

      acceptedAnswers: ["1", "1m", "1 m"],
    },

    {
      id: "fop06-q17",

      type: "text",

      question:
        "Quelle distance minimale doit être laissée lors du dépassement d'un piéton ou d'un deux-roues hors agglomération ?",

      canonicalAnswer: "1.5m",

      acceptedAnswers: ["1.5", "1,5", "1.5m", "1,5m", "1,50", "1,50 m"],
    },

    {
      id: "fop06-q18",

      type: "text",

      question:
        "Quelle distance minimale doit être conservée avant de se rabattre après avoir dépassé un véhicule de même catégorie ?",

      canonicalAnswer: "50m",

      acceptedAnswers: ["50", "50m", "50 m"],
    },

    {
      id: "fop06-q19",

      type: "text",

      question:
        "À partir de quelle longueur un véhicule ou ensemble de véhicules est-il soumis à certaines restrictions d'utilisation de la troisième voie ?",

      canonicalAnswer: "7m",

      acceptedAnswers: ["7", "7m", "7 m"],
    },

    {
      id: "fop06-q20",

      type: "text",

      question:
        "À partir de quel PTAC les restrictions d'utilisation de la troisième voie peuvent-elles s'appliquer ?",

      canonicalAnswer: "3.5t",

      acceptedAnswers: ["3.5", "3,5", "3.5t", "3,5t", "3,5 tonnes"],
    },

    {
      id: "fop06-q21",

      type: "text",

      question:
        "Quel dispositif protège principalement les cyclistes contre le risque de passage sous le véhicule ?",

      canonicalAnswer: "Dispositif anti-encastrement latéral",

      acceptedAnswers: [
        "anti encastrement lateral",
        "dispositif anti encastrement lateral",
        "plaque anti encastrement lateral",
        "protection anti encastrement lateral",
      ],
    },

    {
      id: "fop06-q22",

      type: "text",

      question: "Quel est le principal danger lié au dépassement ?",

      canonicalAnswer: "Accrochage",

      acceptedAnswers: ["accrochage", "un accrochage", "l'accrochage"],
    },
  ],
}
