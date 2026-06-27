import type { Lesson } from "../../types/learning"

export const fiche12: Lesson = {
  id: "oral-12",

  title: "Fiche orale 12 - Systèmes de sécurité et d'aides à la conduite",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "kOR-LmKqS0w",
  },

  markdown: `
# Systèmes de sécurité et d'aides à la conduite

## Plan

* Définition
* Exemples et rôles
* Dangers

---

# 1. Définition

Les systèmes de sécurité et d'aides à la conduite sont des dispositifs qui :

* Informent le conducteur.
* L'assistent dans sa conduite.
* Facilitent certaines tâches.
* Aident à prévenir les situations dangereuses.
* Contribuent à éviter les accidents.

Ils permettent notamment :

* D'améliorer la perception de l'environnement.
* De détecter certains risques.
* De réduire la charge de travail du conducteur.

Ces systèmes peuvent être très simples :

* Direction assistée.

Ou beaucoup plus évolués :

* Radar de maintien des distances.
* Détecteur de gel.
* Détecteur d'obstacles.

---

# 2. Exemples et rôles

Les aides à la conduite peuvent être regroupées en plusieurs catégories.

---

## Aides à la sécurité

### ABS

L'ABS (Anti-Blocage des Roues) :

* Évite le blocage des roues lors d'un freinage.
* Permet de conserver la maîtrise de la trajectoire.
* Améliore le contrôle du véhicule lors d'un freinage d'urgence.

---

### ESP

L'ESP (Contrôle électronique de stabilité) :

* Corrige certaines pertes de trajectoire.
* Aide à maintenir le véhicule sur sa trajectoire.
* Est particulièrement utile en virage.

---

### AFU

L'AFU (Aide au Freinage d'Urgence) :

* Détecte un freinage d'urgence.
* Utilise automatiquement la puissance maximale de freinage.

---

### Limiteur de vitesse

Le limiteur de vitesse :

* Empêche de dépasser une vitesse programmée.
* Aide au respect des limitations.

---

### Radar de maintien des distances

Ce système :

* Mesure la distance avec le véhicule précédent.
* Aide à maintenir une distance de sécurité suffisante.

---

### Aide au maintien dans la voie

Ces systèmes :

* Détectent les franchissements involontaires de ligne.
* Alertent le conducteur.
* Aident à rester dans sa voie.

---

### Détecteur de fatigue

Ces systèmes :

* Analysent le comportement du conducteur.
* Détectent certains signes de fatigue.
* Alertent le conducteur lorsqu'une pause devient nécessaire.

---

## Aide à la navigation

Le GPS permet :

* De calculer un itinéraire.
* De tenir compte des restrictions de circulation.
* D'éviter certains travaux.
* D'anticiper les embouteillages.

---

## Aide au stationnement

Les aides au stationnement comprennent :

* Les radars avant.
* Les radars arrière.
* Les radars latéraux.
* Les caméras de recul.
* Les caméras panoramiques.
* Le frein de stationnement électrique.

Elles facilitent les manœuvres et réduisent les risques d'accrochage.

---

## Automatisation des tâches

Certains équipements automatisent des actions courantes :

### Éclairage automatique

* Allumage automatique des feux de croisement.

### Essuie-glaces automatiques

* Déclenchement automatique grâce à un capteur de pluie.

### Régulateur de vitesse

* Maintien automatique de la vitesse choisie.

### Frein de stationnement automatique

* Serrage automatique du frein de parc.

### Boîte de vitesses automatique ou robotisée

* Gestion automatique des changements de rapports.

### Détecteur de pression des pneus

* Surveillance de la pression des pneumatiques.
* Alerte en cas d'anomalie.

---

# 3. Dangers et limites

Ces systèmes représentent une aide précieuse mais ne remplacent jamais le conducteur.

---

## Risques liés à une confiance excessive

Le conducteur peut :

* Devenir moins vigilant.
* Anticiper moins efficacement.
* Se reposer excessivement sur la technologie.

---

## Risques de distraction

Il ne faut jamais :

* Régler le GPS en roulant.
* Manipuler un écran tactile en conduisant.
* Quitter la route des yeux trop longtemps.

Le regard doit rester dirigé vers la route.

---

## Risques liés aux pannes

Ces systèmes peuvent tomber en panne.

Le conducteur doit :

* Être capable de conduire sans assistance.
* Connaître le fonctionnement de son véhicule.
* Savoir réagir en cas de défaillance.

---

## Limites des aides à la conduite

Même avec de nombreux équipements :

* Les distances de sécurité doivent être respectées.
* Les limitations de vitesse doivent être respectées.
* Le conducteur reste responsable de son véhicule.

Les aides à la conduite ne permettent jamais :

* D'augmenter sa vitesse.
* De prendre davantage de risques.
* De repousser ses limites.

---

# À retenir

## Aides à la sécurité

* ABS : évite le blocage des roues.
* ESP : contrôle la trajectoire.
* AFU : optimise le freinage d'urgence.
* Limiteur de vitesse : limite la vitesse.
* Radar de distance : maintient les distances de sécurité.
* Aide au maintien dans la voie : évite les franchissements involontaires.
* Détecteur de fatigue : alerte le conducteur.

---

## Automatisation

* Feux automatiques.
* Essuie-glaces automatiques.
* Régulateur de vitesse.
* Frein de stationnement automatique.
* Boîte automatique ou robotisée.

---

## Navigation et stationnement

* GPS.
* Radars de stationnement.
* Caméras.
* Frein de stationnement électrique.

---

## Danger principal

Les aides à la conduite assistent le conducteur mais ne le remplacent jamais.
Le conducteur reste responsable de sa conduite.
`,
  questions: [
    {
      id: "fop12-q01",

      type: "true-false",

      question:
        "Les systèmes d'aide à la conduite peuvent contribuer à éviter certaines situations dangereuses.",

      correctAnswer: true,
    },

    {
      id: "fop12-q02",

      type: "multiple-choice",

      question: "Quels sont les rôles des systèmes d'aide à la conduite ?",

      options: [
        "Informer le conducteur",
        "L'assister dans sa conduite",
        "Faciliter certaines tâches",
        "Prévenir certains accidents",
        "Remplacer complètement le conducteur",
      ],

      correctOptions: [
        "Informer le conducteur",
        "L'assister dans sa conduite",
        "Faciliter certaines tâches",
        "Prévenir certains accidents",
      ],
    },

    {
      id: "fop12-q03",

      type: "single-choice",

      question:
        "Quel système évite principalement le blocage des roues lors d'un freinage ?",

      options: ["ABS", "ESP", "AFU", "GPS"],

      correctOption: "ABS",
    },

    {
      id: "fop12-q04",

      type: "text",

      question: "Que signifie l'acronyme ABS ?",

      canonicalAnswer: "Système anti-blocage des roues",

      acceptedAnswers: [
        "abs",
        "anti blocage",
        "anti-blocage",
        "systeme anti blocage",
        "système anti blocage",
        "anti blocage des roues",
        "anti-blocage des roues",
        "systeme anti blocage des roues",
        "système anti blocage des roues",
        "anti blocage des freins",
        "anti-lock braking system",
        "antilock braking system",
        "anti lock braking system",
        "anti block system",
        "anti blockage system",
      ],
    },

    {
      id: "fop12-q05",

      type: "single-choice",

      question:
        "Quel système aide principalement à maintenir la trajectoire du véhicule en virage ?",

      options: ["ESP", "ABS", "AFU", "GPS"],

      correctOption: "ESP",
    },

    {
      id: "fop12-q06",

      type: "single-choice",

      question:
        "Quel système utilise automatiquement la puissance maximale de freinage lors d'un freinage d'urgence ?",

      options: ["AFU", "ABS", "ESP", "Limiteur de vitesse"],

      correctOption: "AFU",
    },

    {
      id: "fop12-q07",

      type: "multiple-choice",

      question: "Quels systèmes appartiennent aux aides à la sécurité ?",

      options: [
        "ABS",
        "ESP",
        "AFU",
        "Radar de maintien des distances",
        "Boîte automatique",
      ],

      correctOptions: ["ABS", "ESP", "AFU", "Radar de maintien des distances"],
    },

    {
      id: "fop12-q08",

      type: "true-false",

      question:
        "Le limiteur de vitesse aide à respecter une vitesse programmée.",

      correctAnswer: true,
    },

    {
      id: "fop12-q09",

      type: "multiple-choice",

      question: "Le radar de maintien des distances permet :",

      options: [
        "De mesurer la distance avec le véhicule précédent",
        "D'aider à conserver une distance de sécurité",
        "D'augmenter automatiquement la vitesse",
        "De limiter les risques de collision",
      ],

      correctOptions: [
        "De mesurer la distance avec le véhicule précédent",
        "D'aider à conserver une distance de sécurité",
        "De limiter les risques de collision",
      ],
    },

    {
      id: "fop12-q10",

      type: "multiple-choice",

      question: "Les systèmes d'aide au maintien dans la voie permettent :",

      options: [
        "De détecter un franchissement involontaire de ligne",
        "D'alerter le conducteur",
        "D'aider à rester dans sa voie",
        "D'augmenter la vitesse maximale",
      ],

      correctOptions: [
        "De détecter un franchissement involontaire de ligne",
        "D'alerter le conducteur",
        "D'aider à rester dans sa voie",
      ],
    },

    {
      id: "fop12-q11",

      type: "yes-no",

      question:
        "Un détecteur de fatigue peut alerter le conducteur lorsqu'une pause devient nécessaire.",

      correctAnswer: true,
    },

    {
      id: "fop12-q12",

      type: "multiple-choice",

      question:
        "Quelles informations un GPS moderne peut-il prendre en compte ?",

      options: [
        "Les restrictions de circulation",
        "Les travaux",
        "Les embouteillages",
        "Les itinéraires",
        "L'usure des pneus",
      ],

      correctOptions: [
        "Les restrictions de circulation",
        "Les travaux",
        "Les embouteillages",
        "Les itinéraires",
      ],
    },

    {
      id: "fop12-q13",

      type: "multiple-choice",

      question: "Quels équipements facilitent les manœuvres de stationnement ?",

      options: [
        "Radars avant",
        "Radars arrière",
        "Caméras",
        "Frein de stationnement électrique",
        "ABS",
      ],

      correctOptions: [
        "Radars avant",
        "Radars arrière",
        "Caméras",
        "Frein de stationnement électrique",
      ],
    },

    {
      id: "fop12-q14",

      type: "multiple-choice",

      question:
        "Quels équipements font partie de l'automatisation des tâches ?",

      options: [
        "Feux automatiques",
        "Essuie-glaces automatiques",
        "Régulateur de vitesse",
        "Boîte automatique",
        "ABS",
      ],

      correctOptions: [
        "Feux automatiques",
        "Essuie-glaces automatiques",
        "Régulateur de vitesse",
        "Boîte automatique",
      ],
    },

    {
      id: "fop12-q15",

      type: "true-false",

      question:
        "Les essuie-glaces automatiques utilisent généralement un capteur de pluie.",

      correctAnswer: true,
    },

    {
      id: "fop12-q16",

      type: "yes-no",

      question:
        "Le détecteur de pression des pneus fait partie des aides à la conduite.",

      correctAnswer: true,
    },

    {
      id: "fop12-q17",

      type: "multiple-choice",

      question:
        "Quels risques sont liés à une confiance excessive dans les aides à la conduite ?",

      options: [
        "Baisse de vigilance",
        "Manque d'anticipation",
        "Dépendance excessive à la technologie",
        "Amélioration automatique de la sécurité",
      ],

      correctOptions: [
        "Baisse de vigilance",
        "Manque d'anticipation",
        "Dépendance excessive à la technologie",
      ],
    },

    {
      id: "fop12-q18",

      type: "true-false",

      question:
        "Il est recommandé de régler le GPS pendant la conduite si le trafic change.",

      correctAnswer: false,
    },

    {
      id: "fop12-q19",

      type: "multiple-choice",

      question:
        "Que faut-il éviter lorsqu'on utilise des aides à la conduite ?",

      options: [
        "Quitter la route des yeux",
        "Manipuler un écran tactile en roulant",
        "Régler le GPS en roulant",
        "Rester attentif à la circulation",
      ],

      correctOptions: [
        "Quitter la route des yeux",
        "Manipuler un écran tactile en roulant",
        "Régler le GPS en roulant",
      ],
    },

    {
      id: "fop12-q20",

      type: "true-false",

      question:
        "Même très équipé, un véhicule ne permet pas d'augmenter sa vitesse ou de prendre davantage de risques.",

      correctAnswer: true,
    },

    {
      id: "fop12-q21",

      type: "text",

      question:
        "Quel système aide principalement à maintenir une distance de sécurité avec le véhicule précédent ?",

      canonicalAnswer: "Radar de maintien des distances",

      acceptedAnswers: [
        "radar",
        "radar de distance",
        "radar distance",
        "radar de maintien des distances",
        "maintien des distances",
        "radar maintien distance",
        "regulateur adaptatif",
        "régulateur adaptatif",
        "adaptive cruise control",
        "acc",
        "distance assist",
        "radar anticollision",
      ],
    },

    {
      id: "fop12-q22",

      type: "text",

      question:
        "Quel système aide principalement à détecter la fatigue du conducteur ?",

      canonicalAnswer: "Détecteur de fatigue",

      acceptedAnswers: [
        "detecteur de fatigue",
        "détecteur de fatigue",
        "detecteur fatigue",
        "détecteur fatigue",
        "alerte fatigue",
        "assistant fatigue",
        "systeme anti fatigue",
        "système anti fatigue",
        "fatigue detection",
        "driver fatigue warning",
      ],
    },

    {
      id: "fop12-q23",

      type: "multiple-choice",

      question: "Quels systèmes permettent d'améliorer le freinage ?",

      options: ["ABS", "AFU", "ESP", "GPS"],

      correctOptions: ["ABS", "AFU", "ESP"],
    },

    {
      id: "fop12-q24",

      type: "yes-no",

      question:
        "Le conducteur reste toujours responsable de son véhicule malgré les aides à la conduite.",

      correctAnswer: true,
    },

    {
      id: "fop12-q25",

      type: "text",

      question:
        "Quel est le principal danger d'une utilisation excessive ou inadaptée des aides à la conduite ?",

      canonicalAnswer: "Perte de vigilance",

      acceptedAnswers: [
        "perte de vigilance",
        "baisse de vigilance",
        "manque de vigilance",
        "moins de vigilance",
        "surconfiance",
        "excès de confiance",
        "confiance excessive",
        "manque d attention",
        "manque d'anticipation",
        "moins d anticipation",
        "dependance aux aides",
        "dépendance aux aides",
      ],
    },

    {
      id: "fop12-q26",

      type: "text",

      question: "Que signifie l'acronyme AFU ?",

      canonicalAnswer: "Aide au freinage d'urgence",

      acceptedAnswers: [
        "afu",
        "aide freinage urgence",
        "aide au freinage urgence",
        "aide au freinage d urgence",
        "aide freinage d urgence",
        "aide au freinage d'urgence",
        "emergency brake assist",
        "eba",
      ],
    },
    {
      id: "fop12-q27",

      type: "text",

      question: "Que signifie l'acronyme ESP ?",

      canonicalAnswer: "Contrôle électronique de stabilité",

      acceptedAnswers: [
        "esp",
        "controle electronique de stabilite",
        "contrôle électronique de stabilité",
        "controle de stabilite",
        "contrôle de stabilité",
        "anti derapage",
        "anti dérapage",
        "electronic stability program",
        "electronic stability control",
        "esc",
      ],
    },
  ],
}
