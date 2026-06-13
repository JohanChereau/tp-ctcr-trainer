import type { Lesson } from "../../types/learning"

export const fiche09: Lesson = {
  id: "oral-09",

  title: "Fiche orale 9 - Écoconduite, conduite citoyenne",

  contentType: "markdown",

  youtubeVideoId: "jfLQYvLZ2MA",

  markdown: `
# Écoconduite - Conduite citoyenne

## Plan

* Écoconduite

  * Règles de base
* Conduite citoyenne

  * Bruit
  * Pollution

---

# 1. Écoconduite

L'écoconduite, ou conduite économique, a pour objectif :

* De préserver l'environnement.
* De réduire la consommation de carburant.
* De limiter l'usure du matériel.
* D'améliorer le confort des passagers.

---

## Règles de base

### Bien connaître son véhicule

Je dois :

* Connaître les caractéristiques du véhicule.
* Connaître le régime moteur optimal.
* Connaître la zone de couple maximal.
* Utiliser le compte-tours.

---

### Utilisation de la boîte de vitesses

Avec une boîte de vitesses manuelle :

* Je change les rapports à bas régime.
* Je respecte les indications du compte-tours.

Avec une boîte automatique ou robotisée :

* J'utilise les programmes économiques proposés par le constructeur.

---

### Maintenir une vitesse adaptée

Je dois :

* Maintenir une vitesse stable lorsque cela est possible.
* Éviter les accélérations inutiles.

Sur route ou autoroute :

* Il est préférable de rouler à une vitesse légèrement réduite pour économiser du carburant.
* Une faible réduction de vitesse entraîne souvent une économie importante de carburant.

---

### Anticiper la circulation

Je dois :

* Anticiper le trafic.
* Conduire avec souplesse.
* Utiliser au maximum l'inertie du véhicule.
* Lever le pied suffisamment tôt.
* Éviter les freinages brusques.

---

### Respecter les distances de sécurité

Le maintien des distances de sécurité permet :

* D'anticiper davantage.
* De réduire les freinages inutiles.
* D'améliorer la sécurité.

---

### Entretenir correctement le véhicule

Je dois veiller à :

* Un entretien régulier.
* Une surveillance des équipements.
* Un bon état général du véhicule.

---

### Limiter les consommations inutiles

Je dois :

* Limiter l'utilisation de la climatisation lorsque cela est possible.
* Choisir les itinéraires les plus adaptés.
* Éviter de laisser tourner le moteur inutilement à l'arrêt.

---

### Départ à froid

Lors d'un démarrage à froid :

* Je pars doucement.
* Je laisse progressivement monter le moteur en température.
* Je laisse également monter en température les autres organes mécaniques.

La température normale de fonctionnement est d'environ :

* 80 °C.

---

# 2. Conduite citoyenne

La conduite citoyenne consiste à limiter les nuisances pour les autres usagers, les riverains et l'environnement.

---

## Bruit

### Précautions

Je dois :

* Maintenir le système d'échappement en bon état.
* Respecter les normes sonores en vigueur.
* Éviter les accélérations inutiles, particulièrement en agglomération.
* Arrêter le moteur lors d'un stationnement prolongé.
* Couper les équipements inutilisés.

---

### Sanctions

En cas de non-respect de la réglementation :

* Amende.
* Immobilisation du véhicule.
* Mise en fourrière.

---

## Pollution

La pollution automobile est dangereuse :

* Pour la population.
* Pour l'environnement.

---

### Interdictions

Je ne dois pas :

* Émettre des fumées opaques.
* Émettre des fumées persistantes.
* Dépasser les normes de pollution en vigueur.

---

### Sanctions

En cas de dépassement des normes :

* Amende.
* Immobilisation du véhicule.
* Mise en fourrière.

---

# 3. Moyens de lutte contre la pollution

## Évolutions techniques

Pour réduire la pollution, les constructeurs utilisent notamment :

* L'AdBlue.
* Les systèmes SCR.
* Les vannes EGR.
* Les véhicules hybrides.
* Les véhicules électriques.
* Les carburants alternatifs (gaz naturel, etc.).

---

## Équipements permettant de réduire la consommation

Les équipementiers développent également :

* Des huiles de synthèse.
* Des déflecteurs.
* Des pneumatiques économiques.
* Des outils de suivi d'entretien.

---

## Réglementation

L'Union européenne impose des normes environnementales :

* Euro 5.
* Euro 6.

Ces normes permettent de limiter les émissions polluantes des véhicules.

---

## Formation des conducteurs

Les entreprises de transport forment leurs conducteurs :

* À l'écoconduite.
* Aux bonnes pratiques environnementales.

Ces formations comprennent notamment :

* La FIMO.
* La FCO.

---

# À retenir

## Écoconduite

* Changer les rapports à bas régime.
* Utiliser les programmes économiques.
* Maintenir une vitesse stable.
* Utiliser l'inertie du véhicule.
* Anticiper le trafic.
* Respecter les distances de sécurité.
* Limiter la climatisation.
* Ne pas laisser tourner le moteur inutilement.

---

## Conduite citoyenne

### Bruit

* Échappement en bon état.
* Éviter les accélérations inutiles.
* Couper le moteur lors des stationnements prolongés.

### Pollution

* Pas de fumées opaques ou persistantes.
* Respect des normes de pollution.
* Respect des normes Euro 5 et Euro 6.

---

## Moyens de lutte contre la pollution

* AdBlue.
* SCR.
* Vanne EGR.
* Véhicules hybrides.
* Véhicules électriques.
* Carburants alternatifs.

---

## Chiffres à retenir

* Température normale de fonctionnement : environ 80 °C.
* Normes environnementales : Euro 5 et Euro 6.

`,
  questions: [
    {
      id: "fop09-q01",

      type: "true-false",

      question:
        "L'écoconduite permet de réduire la consommation de carburant et de préserver l'environnement.",

      correctAnswer: true,
    },

    {
      id: "fop09-q02",

      type: "multiple-choice",

      question: "Quels sont les objectifs de l'écoconduite ?",

      options: [
        "Préserver l'environnement",
        "Réduire la consommation de carburant",
        "Limiter l'usure du matériel",
        "Améliorer le confort des passagers",
        "Augmenter la vitesse moyenne",
      ],

      correctOptions: [
        "Préserver l'environnement",
        "Réduire la consommation de carburant",
        "Limiter l'usure du matériel",
        "Améliorer le confort des passagers",
      ],
    },

    {
      id: "fop09-q03",

      type: "multiple-choice",

      question: "Pour pratiquer l'écoconduite, il est recommandé de :",

      options: [
        "Changer les rapports à bas régime",
        "Utiliser le compte-tours",
        "Connaître les caractéristiques du véhicule",
        "Accélérer fortement à chaque démarrage",
      ],

      correctOptions: [
        "Changer les rapports à bas régime",
        "Utiliser le compte-tours",
        "Connaître les caractéristiques du véhicule",
      ],
    },

    {
      id: "fop09-q04",

      type: "yes-no",

      question:
        "Avec une boîte automatique ou robotisée, il est conseillé d'utiliser les programmes économiques proposés par le constructeur.",

      correctAnswer: true,
    },

    {
      id: "fop09-q05",

      type: "multiple-choice",

      question: "Quels comportements favorisent l'écoconduite ?",

      options: [
        "Maintenir une vitesse stable",
        "Anticiper le trafic",
        "Utiliser l'inertie du véhicule",
        "Conduire avec souplesse",
        "Freiner brutalement",
      ],

      correctOptions: [
        "Maintenir une vitesse stable",
        "Anticiper le trafic",
        "Utiliser l'inertie du véhicule",
        "Conduire avec souplesse",
      ],
    },

    {
      id: "fop09-q06",

      type: "true-false",

      question:
        "Les distances de sécurité participent à une conduite économique.",

      correctAnswer: true,
    },

    {
      id: "fop09-q07",

      type: "multiple-choice",

      question:
        "Quelles actions permettent de limiter la consommation de carburant ?",

      options: [
        "Limiter l'utilisation de la climatisation",
        "Choisir un itinéraire adapté",
        "Éviter de laisser tourner le moteur à l'arrêt",
        "Utiliser l'inertie du véhicule",
        "Faire chauffer le moteur plusieurs minutes à l'arrêt",
      ],

      correctOptions: [
        "Limiter l'utilisation de la climatisation",
        "Choisir un itinéraire adapté",
        "Éviter de laisser tourner le moteur à l'arrêt",
        "Utiliser l'inertie du véhicule",
      ],
    },

    {
      id: "fop09-q08",

      type: "true-false",

      question:
        "Lors d'un départ à froid, il est préférable de partir doucement afin de faire monter progressivement le véhicule en température.",

      correctAnswer: true,
    },

    {
      id: "fop09-q09",

      type: "text",

      question:
        "Quelle est la température normale de fonctionnement d'un moteur ?",

      canonicalAnswer: "80 °C",

      acceptedAnswers: ["80", "80°", "80°c", "80 °c", "80 c"],
    },

    {
      id: "fop09-q10",

      type: "multiple-choice",

      question:
        "Quels éléments doivent monter progressivement en température lors d'un départ à froid ?",

      options: [
        "Le moteur",
        "Le pont",
        "La boîte de vitesses",
        "Les pneumatiques",
      ],

      correctOptions: ["Le moteur", "Le pont", "La boîte de vitesses"],
    },

    {
      id: "fop09-q11",

      type: "multiple-choice",

      question:
        "Quelles précautions permettent de limiter les nuisances sonores ?",

      options: [
        "Maintenir l'échappement en bon état",
        "Éviter les accélérations inutiles",
        "Couper le moteur lors d'un stationnement prolongé",
        "Respecter les normes sonores",
        "Utiliser le klaxon régulièrement",
      ],

      correctOptions: [
        "Maintenir l'échappement en bon état",
        "Éviter les accélérations inutiles",
        "Couper le moteur lors d'un stationnement prolongé",
        "Respecter les normes sonores",
      ],
    },

    {
      id: "fop09-q12",

      type: "true-false",

      question:
        "Les accélérations intempestives en agglomération augmentent les nuisances sonores.",

      correctAnswer: true,
    },

    {
      id: "fop09-q13",

      type: "multiple-choice",

      question:
        "Quelles sanctions peuvent être appliquées en cas de non-respect des règles liées au bruit ?",

      options: [
        "Amende",
        "Immobilisation",
        "Mise en fourrière",
        "Retrait automatique du permis",
      ],

      correctOptions: ["Amende", "Immobilisation", "Mise en fourrière"],
    },

    {
      id: "fop09-q14",

      type: "true-false",

      question: "Il est interdit d'émettre des fumées opaques ou persistantes.",

      correctAnswer: true,
    },

    {
      id: "fop09-q15",

      type: "multiple-choice",

      question:
        "Quels moyens permettent de lutter contre la pollution automobile ?",

      options: [
        "AdBlue",
        "SCR",
        "Vanne EGR",
        "Véhicules hybrides",
        "Véhicules électriques",
      ],

      correctOptions: [
        "AdBlue",
        "SCR",
        "Vanne EGR",
        "Véhicules hybrides",
        "Véhicules électriques",
      ],
    },

    {
      id: "fop09-q16",

      type: "multiple-choice",

      question:
        "Quels carburants ou technologies contribuent à réduire les émissions polluantes ?",

      options: [
        "Carburants alternatifs",
        "Gaz naturel",
        "Véhicules électriques",
        "Véhicules hybrides",
        "Essence plombée",
      ],

      correctOptions: [
        "Carburants alternatifs",
        "Gaz naturel",
        "Véhicules électriques",
        "Véhicules hybrides",
      ],
    },

    {
      id: "fop09-q17",

      type: "text",

      question:
        "Citez une norme européenne visant à limiter les émissions polluantes des véhicules.",

      canonicalAnswer: "Euro 5 ou Euro 6",

      acceptedAnswers: ["euro 5", "euro5", "euro 6", "euro6"],
    },

    {
      id: "fop09-q18",

      type: "multiple-choice",

      question:
        "Quels équipements développés par les équipementiers permettent de réduire la consommation ?",

      options: [
        "Huiles de synthèse",
        "Déflecteurs",
        "Pneumatiques économiques",
        "Outils de suivi d'entretien",
        "Gyrophare",
      ],

      correctOptions: [
        "Huiles de synthèse",
        "Déflecteurs",
        "Pneumatiques économiques",
        "Outils de suivi d'entretien",
      ],
    },

    {
      id: "fop09-q19",

      type: "true-false",

      question:
        "Les entreprises de transport forment leurs conducteurs à l'écoconduite.",

      correctAnswer: true,
    },

    {
      id: "fop09-q20",

      type: "multiple-choice",

      question:
        "Quelles formations participent à l'amélioration des pratiques de conduite professionnelle ?",

      options: ["FIMO", "FCO", "Formation à l'écoconduite", "Permis AM"],

      correctOptions: ["FIMO", "FCO", "Formation à l'écoconduite"],
    },

    {
      id: "fop09-q21",

      type: "text",

      question:
        "Quel système utilise notamment l'AdBlue pour réduire les émissions polluantes ?",

      canonicalAnswer: "SCR",

      acceptedAnswers: ["scr"],
    },

    {
      id: "fop09-q22",

      type: "text",

      question:
        "Quel dispositif permet de recycler une partie des gaz d'échappement afin de réduire la pollution ?",

      canonicalAnswer: "Vanne EGR",

      acceptedAnswers: ["egr", "vanne egr"],
    },
  ],
}
