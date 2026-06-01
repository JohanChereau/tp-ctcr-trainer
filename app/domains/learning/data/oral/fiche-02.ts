import type { Lesson } from "../../types/learning"

export const fiche02: Lesson = {
  id: "oral-02",

  title: "Fiche orale 2 - Comportement en cas d'accident",

  contentType: "markdown",

  youtubeVideoId: "j27SX8iOFeI",

  markdown: `
# Comportement en cas d'accident

## Plan

* Gestes d'urgence
* Gestes dangereux et conduite à tenir
* Spécificités de la catégorie D (transport en commun)

---

# 1. Gestes d'urgence

Si je suis le premier sur les lieux d'un accident, je dois :

* Porter un gilet de haute visibilité.
* Appliquer la règle **P.A.S.**

## P.A.S.

### Protéger

Je protège les lieux afin d'éviter un suraccident.

Pour cela, je peux utiliser :

* Le triangle de présignalisation.
* Les feux de détresse.
* Un éclairage des lieux de l'accident la nuit si cela est possible.

### Alerter

Je recueille le maximum d'informations :

* Le lieu exact de l'accident.
* Le type de véhicule impliqué.
* Le nombre de blessés.
* L'état apparent des blessés.

Numéros d'urgence :

| Service                   | Numéro |
| ------------------------- | ------ |
| Police / Gendarmerie      | 17     |
| Pompiers                  | 18     |
| SAMU                      | 15     |
| Numéro d'urgence européen | 112    |

### Secourir

Je retourne auprès des blessés.

Je peux :

* Les couvrir.
* Leur parler.
* Les rassurer.

⚠️ Je ne réalise aucun geste que je ne maîtrise pas.

---

# 2. Gestes dangereux

Il ne faut jamais :

* Donner à boire à un blessé.
* Réaliser un geste non maîtrisé.
* Déplacer un blessé.

Exception :

* Risque immédiat d'incendie.
* Risque de noyade.

⚠️ Il ne faut jamais retirer le casque d'un motard.

---

# 3. Conduite à tenir lors d'un accident matériel

Lorsqu'il n'y a que des dégâts matériels :

* Je reste calme et courtois.
* Je préviens mon entreprise si possible.
* Je dégage les véhicules pour sécuriser les lieux.
* Je réalise un constat amiable.

## Le constat amiable

Le constat est fortement conseillé car son format est identique dans toute l'Europe.

Je remplis soigneusement le recto :

* Identité des conducteurs.
* Informations d'assurance.
* Date.
* Heure.
* Lieu.
* Dégâts apparents.

Je réalise un croquis clair indiquant :

* Les circonstances de l'accident.
* Les positions des véhicules.
* Le nombre et l'emplacement des croix.

Chaque partie conserve un exemplaire.

⚠️ Une fois signé, le recto ne peut plus être modifié.

Le verso peut être complété ultérieurement.

Le constat doit être transmis à l'assurance dans un délai de **5 jours ouvrés**.

---

# 4. Spécificités de la catégorie D

## Véhicules affectés au transport de personnes

En cas d'accident :

* Je garde mon calme.
* J'arrête le moteur.
* J'allume les feux de détresse.
* Je coupe immédiatement le coupe-batterie.

---

## Hors agglomération

Je fais évacuer les passagers :

* En indiquant les issues de secours.
* En regroupant les personnes.
* En les éloignant de la route et du danger.

Si possible :

* Je les place derrière les glissières de sécurité.

---

## En agglomération

Les passagers restent à l'intérieur du véhicule.

Exception :

* Risque d'incendie.
* Danger immédiat.

---

## Alerter les secours

Je contacte ou fais contacter les secours le plus rapidement possible.

---

## Aide au secours des passagers

Je peux indiquer l'emplacement :

* Des extincteurs.
* Des trousses de secours.
* Des marteaux brise-vitres.
* De la lampe autonome.
* Des gilets de sécurité.

`,

  questions: [
    {
      id: "fop02-q01",

      type: "text",

      question:
        "Quelle règle faut-il appliquer lorsqu'on est le premier sur les lieux d'un accident ?",

      canonicalAnswer: "P.A.S.",

      acceptedAnswers: ["pas", "p.a.s", "p a s"],
    },

    {
      id: "fop02-q02",

      type: "single-choice",

      question: "Que signifie la lettre P de la règle P.A.S. ?",

      options: ["Prévenir", "Protéger", "Porter secours", "Patrouiller"],

      correctOption: "Protéger",
    },

    {
      id: "fop02-q03",

      type: "single-choice",

      question: "Que signifie la lettre A de la règle P.A.S. ?",

      options: ["Aider", "Avertir", "Alerter", "Assister"],

      correctOption: "Alerter",
    },

    {
      id: "fop02-q04",

      type: "single-choice",

      question: "Que signifie la lettre S de la règle P.A.S. ?",

      options: ["Secourir", "Sécuriser", "Surveiller", "Signaler"],

      correctOption: "Secourir",
    },

    {
      id: "fop02-q05",

      type: "multiple-choice",

      question: "Quels moyens permettent de protéger les lieux d'un accident ?",

      options: [
        "Triangle de présignalisation",
        "Feux de détresse",
        "Éclairage des lieux la nuit",
        "Klaxon continu",
      ],

      correctOptions: [
        "Triangle de présignalisation",
        "Feux de détresse",
        "Éclairage des lieux la nuit",
      ],
    },

    {
      id: "fop02-q06",

      type: "single-choice",

      question: "Quel numéro permet de joindre les pompiers ?",

      options: ["15", "17", "18", "112"],

      correctOption: "18",
    },

    {
      id: "fop02-q07",

      type: "single-choice",

      question: "Quel numéro permet de joindre le SAMU ?",

      options: ["15", "17", "18", "112"],

      correctOption: "15",
    },

    {
      id: "fop02-q08",

      type: "single-choice",

      question: "Quel numéro permet de joindre la police ou la gendarmerie ?",

      options: ["15", "17", "18", "112"],

      correctOption: "17",
    },

    {
      id: "fop02-q09",

      type: "single-choice",

      question: "Quel est le numéro d'urgence européen ?",

      options: ["15", "17", "18", "112"],

      correctOption: "112",
    },

    {
      id: "fop02-q10",

      type: "true-false",

      question: "Il est recommandé de donner à boire à un blessé.",

      correctAnswer: false,
    },

    {
      id: "fop02-q11",

      type: "true-false",

      question: "Il ne faut jamais retirer le casque d'un motard.",

      correctAnswer: true,
    },

    {
      id: "fop02-q12",

      type: "yes-no",

      question:
        "Peut-on déplacer un blessé s'il existe un risque immédiat d'incendie ?",

      correctAnswer: true,
    },

    {
      id: "fop02-q13",

      type: "yes-no",

      question:
        "Le constat amiable est-il recommandé lors d'un accident matériel ?",

      correctAnswer: true,
    },

    {
      id: "fop02-q14",

      type: "single-choice",

      question:
        "Dans quel délai le constat doit-il être transmis à l'assurance ?",

      options: ["24 heures", "48 heures", "5 jours ouvrés", "15 jours"],

      correctOption: "5 jours ouvrés",
    },

    {
      id: "fop02-q15",

      type: "multiple-choice",

      question: "Quelles informations doivent figurer sur le constat ?",

      options: ["Date", "Heure", "Lieu", "Dégâts apparents"],

      correctOptions: ["Date", "Heure", "Lieu", "Dégâts apparents"],
    },

    {
      id: "fop02-q16",

      type: "yes-no",

      question: "Dans un autocar accidenté, faut-il couper le coupe-batterie ?",

      correctAnswer: true,
    },

    {
      id: "fop02-q17",

      type: "true-false",

      question:
        "Hors agglomération, les passagers doivent être éloignés de la route.",

      correctAnswer: true,
    },

    {
      id: "fop02-q18",

      type: "true-false",

      question:
        "En agglomération, les passagers doivent toujours être évacués immédiatement.",

      correctAnswer: false,
    },

    {
      id: "fop02-q19",

      type: "multiple-choice",

      question: "Quels équipements de secours peut-on indiquer aux passagers ?",

      options: [
        "Extincteurs",
        "Trousse de secours",
        "Marteaux brise-vitres",
        "Lampe autonome",
      ],

      correctOptions: [
        "Extincteurs",
        "Trousse de secours",
        "Marteaux brise-vitres",
        "Lampe autonome",
      ],
    },

    {
      id: "fop02-q20",

      type: "text",

      question: "Que signifient les lettres P.A.S. ?",

      canonicalAnswer: "Protéger, Alerter, Secourir",

      acceptedAnswers: [
        "proteger alerter secourir",
        "protéger alerter secourir",
      ],
    },
  ],
}
