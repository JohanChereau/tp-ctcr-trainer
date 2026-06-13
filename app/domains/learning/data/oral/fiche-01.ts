import type { Lesson } from "../../types/learning"

export const fiche01: Lesson = {
  id: "oral-01",

  title: "Fiche orale 1 - Météo difficile, route de nuit",

  contentType: "markdown",

  youtubeVideoId: "KuV5Bdd9Aew",

  markdown: `
# Conduite dans des conditions atmosphériques difficiles, route de nuit

## Plan

* Conduite et comportement (pluie, brouillard, vent, neige, verglas et nuit)
* Précautions à prendre avant et pendant le trajet
* Information routière

---

# 1. Conduite et comportement

## De manière générale

Dans tous les cas :

* Je réduis ma vitesse.
* J'augmente les distances de sécurité.

---

## 1.1 Pluie

Lorsqu'il pleut :

* J'allume les feux de croisement.
* Je peux allumer les feux de brouillard avant.
* J'utilise la ventilation, le dégivrage et la climatisation.
* Je conduis de façon beaucoup plus souple.
* J'anticipe davantage mes actions.
* J'utilise davantage le frein moteur.

---

## 1.2 Brouillard

Lorsqu'il y a du brouillard, j'applique la règle des **3 × 50** :

* Si la visibilité est inférieure à 50 mètres.
* Je roule à 50 km/h maximum.
* Je laisse 50 mètres d'interdistance avec le véhicule qui me précède.

J'allume :

* Les feux de croisement.
* Les feux de brouillard avant.
* Les feux de brouillard arrière.

---

## 1.3 Vent

Le risque est particulièrement important avec les véhicules encombrants, surtout lorsqu'ils sont vides.

Je suis particulièrement vigilant :

* Dans les endroits exposés signalés par un panneau ou une manche à air.
* Lors du passage d'un endroit abrité à un endroit exposé.
* Lors des croisements.
* Lors des dépassements.
* Sur les ponts.
* Lors du franchissement des collines.

---

## 1.4 Neige et verglas

Avant le départ :

* Je me renseigne sur les conditions de circulation.

Pendant la circulation :

* J'utilise les équipements autorisés (chaînes si nécessaire).
* J'allume les feux de croisement.
* Je peux allumer les feux de brouillard avant.
* J'allume les feux de brouillard arrière.
* J'adopte une conduite extrêmement souple.
* J'anticipe au maximum.

Je respecte :

* Les barrières de dégel.

Si les conditions deviennent trop dangereuses :

* Je ne pars pas.
* Ou j'interromps immédiatement la conduite.

---

## 1.5 La nuit

Les accidents sont souvent plus graves la nuit en raison :

* D'une vitesse parfois excessive.
* Du manque de visibilité.
* De la fatigue.
* De la consommation d'alcool.
* De la présence d'animaux sauvages sur les routes.

Les problèmes de vision sont amplifiés :

* Vision des couleurs altérée.
* Champ visuel réduit.

---

# 2. Précautions à prendre

## 2.1 Avant le trajet

Je dois être suffisamment reposé.

Je vérifie :

* Le bon état des dispositifs de visibilité.
* Leur propreté.
* Le bon fonctionnement de l'éclairage.
* La charge de la batterie.

Je m'assure également de disposer :

* D'une boîte d'ampoules.
* D'une boîte de fusibles.
* D'une lampe torche.

---

## 2.2 Pendant le trajet

* Je fais des pauses plus fréquentes.
* J'adapte mon allure à la météo et à la visibilité.
* Je ralentis pour ne pas être surpris par les virages ou les obstacles.
* Je me guide grâce au marquage au sol.
* Je reste attentif au « coup de pompe » du matin.

---

# 3. Information routière

Aujourd'hui, les informations routières peuvent être obtenues :

* Sur Internet.
* Auprès des Centres Nationaux et Régionaux d'Information Routière.
* Sur Autoroute Info.
* À la radio.
* Auprès de la Police.
* Auprès de la Gendarmerie.

`,

  questions: [
    {
      id: "fop01-q01",

      type: "single-choice",

      question: "Quelle règle doit être appliquée en cas de brouillard ?",

      options: [
        "Règle des 2 x 50",
        "Règle des 3 x 50",
        "Règle des 4 x 50",
        "Règle des 5 x 50",
      ],

      correctOption: "Règle des 3 x 50",
    },

    {
      id: "fop01-q02",

      type: "single-choice",

      question:
        "Si la visibilité est inférieure à 50 mètres, quelle est la vitesse maximale autorisée ?",

      options: ["30 km/h", "40 km/h", "50 km/h", "70 km/h"],

      correctOption: "50 km/h",
    },

    {
      id: "fop01-q03",

      type: "single-choice",

      question:
        "Quelle distance de sécurité faut-il conserver dans le brouillard ?",

      options: ["20 m", "30 m", "50 m", "100 m"],

      correctOption: "50 m",
    },

    {
      id: "fop01-q04",

      type: "multiple-choice",

      question: "Quels feux peuvent être utilisés dans le brouillard ?",

      options: [
        "Feux de croisement",
        "Feux de brouillard avant",
        "Feux de brouillard arrière",
        "Feux de route",
      ],

      correctOptions: [
        "Feux de croisement",
        "Feux de brouillard avant",
        "Feux de brouillard arrière",
      ],
    },

    {
      id: "fop01-q05",

      type: "yes-no",

      question:
        "Sous la pluie, il est recommandé d'utiliser davantage le frein moteur.",

      correctAnswer: true,
    },

    {
      id: "fop01-q06",

      type: "multiple-choice",

      question: "Quels équipements permettent de limiter la buée ?",

      options: [
        "Ventilation",
        "Climatisation",
        "Dégivrage",
        "Régulateur de vitesse",
      ],

      correctOptions: ["Ventilation", "Climatisation", "Dégivrage"],
    },

    {
      id: "fop01-q07",

      type: "true-false",

      question:
        "Lorsqu'il pleut, il faut conduire de manière plus brusque afin d'éviter l'aquaplaning.",

      correctAnswer: false,
    },

    {
      id: "fop01-q08",

      type: "single-choice",

      question:
        "Pourquoi le vent est-il particulièrement dangereux pour un autocar vide ?",

      options: [
        "Car il offre davantage de prise au vent",
        "Car il est plus léger",
        "Car il est plus rapide",
        "Car il consomme moins",
      ],

      correctOption: "Car il offre davantage de prise au vent",
    },

    {
      id: "fop01-q09",

      type: "multiple-choice",

      question:
        "Dans quelles situations faut-il être particulièrement vigilant en cas de vent ?",

      options: [
        "Sur les ponts",
        "Lors d'un dépassement",
        "Lors d'un croisement",
        "À l'arrêt sur un parking",
      ],

      correctOptions: [
        "Sur les ponts",
        "Lors d'un dépassement",
        "Lors d'un croisement",
      ],
    },

    {
      id: "fop01-q10",

      type: "yes-no",

      question:
        "Avant de partir sur neige ou verglas, il est conseillé de se renseigner sur les conditions de circulation.",

      correctAnswer: true,
    },

    {
      id: "fop01-q11",

      type: "single-choice",

      question:
        "Quel équipement peut être utilisé en cas de fortes chutes de neige ?",

      options: [
        "Les chaînes",
        "Le régulateur",
        "Les feux de route",
        "Le ralentisseur",
      ],

      correctOption: "Les chaînes",
    },

    {
      id: "fop01-q12",

      type: "true-false",

      question:
        "Sur neige ou verglas, il faut adopter une conduite extrêmement souple.",

      correctAnswer: true,
    },

    {
      id: "fop01-q13",

      type: "yes-no",

      question:
        "Si les conditions deviennent trop dangereuses, il faut poursuivre la conduite pour respecter l'horaire.",

      correctAnswer: false,
    },

    {
      id: "fop01-q14",

      type: "multiple-choice",

      question:
        "Quels facteurs expliquent que les accidents soient plus graves la nuit ?",

      options: [
        "Fatigue",
        "Manque de visibilité",
        "Présence d'animaux",
        "Alcool",
      ],

      correctOptions: [
        "Fatigue",
        "Manque de visibilité",
        "Présence d'animaux",
        "Alcool",
      ],
    },

    {
      id: "fop01-q15",

      type: "multiple-choice",

      question: "Quels problèmes de vision sont accentués la nuit ?",

      options: [
        "Vision des couleurs altérée",
        "Champ visuel réduit",
        "Vision périphérique améliorée",
        "Éblouissement accru",
      ],

      correctOptions: ["Vision des couleurs altérée", "Champ visuel réduit"],
    },

    {
      id: "fop01-q16",

      type: "multiple-choice",

      question: "Que faut-il vérifier avant un trajet de nuit ?",

      options: [
        "L'éclairage",
        "La visibilité",
        "La batterie",
        "Le niveau de musique",
      ],

      correctOptions: ["L'éclairage", "La visibilité", "La batterie"],
    },

    {
      id: "fop01-q17",

      type: "multiple-choice",

      question: "Quels équipements de secours doivent être présents à bord ?",

      options: [
        "Boîte d'ampoules",
        "Boîte de fusibles",
        "Lampe torche",
        "Extincteur de cuisine",
      ],

      correctOptions: ["Boîte d'ampoules", "Boîte de fusibles", "Lampe torche"],
    },

    {
      id: "fop01-q18",

      type: "yes-no",

      question:
        "Pendant le trajet, il est recommandé de faire des pauses plus fréquentes.",

      correctAnswer: true,
    },

    {
      id: "fop01-q19",

      type: "single-choice",

      question:
        "À quel phénomène faut-il être particulièrement attentif lors d'un trajet de nuit ?",

      options: [
        "Le coup de pompe",
        "L'aquaplaning",
        "Le sous-virage",
        "Le patinage",
      ],

      correctOption: "Le coup de pompe",
    },

    {
      id: "fop01-q20",

      type: "multiple-choice",

      question:
        "Parmi les propositions suivantes, quelles sont des sources d'information routière ?",

      options: ["Internet", "Autoroute Info", "Radio", "Police ou Gendarmerie"],

      correctOptions: [
        "Internet",
        "Autoroute Info",
        "Radio",
        "Police ou Gendarmerie",
      ],
    },
  ],
}
