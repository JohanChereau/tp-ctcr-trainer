import type { Lesson } from "../../types/learning"

export const fiche03: Lesson = {
  id: "oral-03",

  title: "Fiche orale 3 - Conduite en montagne ou zones accidentées",

  contentType: "markdown",

  youtubeVideoId: "3po5QlChg9I",

  markdown: `
# Conduite en montagne ou en zone accidentée

## Plan

* Les dangers et les précautions lors de la montée
* Les dangers et les précautions au sommet
* Les dangers et les précautions lors de la descente

---

## Définition

On entend par **zone accidentée** les routes présentant de nombreux reliefs et caractéristiques similaires aux routes de montagne, sans nécessairement se situer dans un massif montagneux.

---

# 1. La montée

## Dangers et risques

Lors de la montée, je dois être attentif à :

* Les croisements difficiles.
* La faible largeur de la chaussée.
* Les surprises éventuelles sur la route.
* La mauvaise connaissance des règles de croisement.
* La trajectoire dans les virages.
* Les véhicules spéciaux de déneigement.
* La surchauffe du moteur.
* Le gabarit et la masse de mon véhicule.

## Précautions à prendre

Pour limiter les risques :

* J'adapte correctement mes rapports de boîte de vitesses.
* Je vérifie le bon fonctionnement du circuit de refroidissement avant le départ.
* Je respecte les règles de croisement.

### Règle de croisement

De manière générale :

* Le véhicule qui descend s'arrête et recule.

Exception :

* Lorsque les véhicules sont différents, c'est le véhicule le plus maniable qui effectue la manœuvre.

Je veille également à :

* Ne pas changer de rapport dans les épingles et les virages.
* Utiliser le klaxon pour me signaler de jour.
* Utiliser les appels lumineux pour me signaler de nuit.

---

# 2. Le sommet

## Dangers et risques

Au sommet, les principaux dangers sont liés aux conditions météorologiques :

* Neige.
* Brouillard.
* Verglas.
* Froid important.

## Précautions à prendre

* J'emporte ou j'installe des chaînes lorsque cela est nécessaire.
* J'utilise du carburant grand froid si les conditions l'exigent.
* Je m'informe sur l'état des routes.
* Je vérifie les éventuelles fermetures de cols.
* Lorsque cela est possible, je privilégie les tunnels.

---

# 3. La descente

## Dangers et risques

Lors de la descente, je dois tenir compte :

* De l'énergie cinétique du véhicule.
* De la vitesse.
* Du gabarit.
* De la masse du véhicule.
* Des croisements difficiles.
* De la faible largeur de la chaussée.
* De la trajectoire des virages.
* De la mauvaise connaissance des règles de circulation.

### Risque principal

Le principal danger est :

* La surchauffe des freins.
* La perte d'efficacité du freinage.
* La perte de contrôle du véhicule en cas de mauvaise utilisation du frein moteur et des ralentisseurs.

## Précautions à prendre

Pour sécuriser la descente :

* J'adapte mes rapports de boîte de vitesses.
* J'utilise efficacement le frein moteur.
* Je respecte les mêmes règles de croisement qu'en montée.
* J'utilise le klaxon de jour.
* J'utilise les appels lumineux de nuit.
* J'utilise au maximum le frein moteur.
* J'utilise les ralentisseurs afin d'économiser les freins.
* Je connais parfaitement le fonctionnement des boîtes automatiques et robotisées.

---

## À retenir

### Montée

* Adapter les rapports.
* Surveiller le refroidissement moteur.
* Respecter les règles de croisement.

### Sommet

* Anticiper les conditions météorologiques.
* S'informer sur l'état des routes.
* Prévoir les équipements adaptés.

### Descente

* Utiliser le frein moteur.
* Utiliser les ralentisseurs.
* Éviter la surchauffe des freins.
* Adapter constamment sa vitesse.

`,

  questions: [
    {
      id: "fop03-q01",

      type: "single-choice",

      question: "Qu'appelle-t-on une zone accidentée ?",

      options: [
        "Une route présentant de nombreux reliefs",
        "Une route en mauvais état",
        "Une route réservée aux poids lourds",
        "Une route fermée à la circulation",
      ],

      correctOption: "Une route présentant de nombreux reliefs",
    },

    {
      id: "fop03-q02",

      type: "multiple-choice",

      question:
        "Quels dangers peut-on rencontrer lors d'une montée en montagne ?",

      options: [
        "Croisements difficiles",
        "Surchauffe moteur",
        "Virages",
        "Véhicules de déneigement",
      ],

      correctOptions: [
        "Croisements difficiles",
        "Surchauffe moteur",
        "Virages",
        "Véhicules de déneigement",
      ],
    },

    {
      id: "fop03-q03",

      type: "yes-no",

      question:
        "Avant un trajet en montagne, faut-il vérifier le circuit de refroidissement ?",

      correctAnswer: true,
    },

    {
      id: "fop03-q04",

      type: "true-false",

      question:
        "Il est conseillé de changer de rapport dans une épingle à cheveux.",

      correctAnswer: false,
    },

    {
      id: "fop03-q05",

      type: "single-choice",

      question:
        "En règle générale, lors d'un croisement difficile, quel véhicule doit reculer ?",

      options: [
        "Le véhicule qui monte",
        "Le véhicule qui descend",
        "Le plus lourd",
        "Le plus long",
      ],

      correctOption: "Le véhicule qui descend",
    },

    {
      id: "fop03-q06",

      type: "single-choice",

      question:
        "Lorsque deux véhicules différents se croisent, lequel effectue la manœuvre ?",

      options: [
        "Le plus lourd",
        "Le moins maniable",
        "Le plus maniable",
        "Le plus rapide",
      ],

      correctOption: "Le plus maniable",
    },

    {
      id: "fop03-q07",

      type: "yes-no",

      question:
        "Le klaxon peut être utilisé pour se signaler de jour en montagne.",

      correctAnswer: true,
    },

    {
      id: "fop03-q08",

      type: "yes-no",

      question:
        "Les appels lumineux peuvent être utilisés de nuit pour se signaler.",

      correctAnswer: true,
    },

    {
      id: "fop03-q09",

      type: "multiple-choice",

      question: "Quels dangers peut-on rencontrer au sommet ?",

      options: ["Neige", "Brouillard", "Verglas", "Froid important"],

      correctOptions: ["Neige", "Brouillard", "Verglas", "Froid important"],
    },

    {
      id: "fop03-q10",

      type: "yes-no",

      question:
        "Il est conseillé de s'informer sur l'état des routes avant de franchir un col.",

      correctAnswer: true,
    },

    {
      id: "fop03-q11",

      type: "single-choice",

      question: "Quel équipement peut être nécessaire au sommet ?",

      options: ["Chaînes", "Extincteur", "Cales de roues", "Triangle"],

      correctOption: "Chaînes",
    },

    {
      id: "fop03-q12",

      type: "true-false",

      question: "Lorsqu'ils existent, les tunnels peuvent être privilégiés.",

      correctAnswer: true,
    },

    {
      id: "fop03-q13",

      type: "single-choice",

      question: "Quel est le principal danger lors d'une descente prolongée ?",

      options: [
        "Surchauffe des freins",
        "Panne moteur",
        "Crevaison",
        "Consommation excessive",
      ],

      correctOption: "Surchauffe des freins",
    },

    {
      id: "fop03-q14",

      type: "multiple-choice",

      question: "Quels éléments influencent directement l'énergie cinétique ?",

      options: ["Vitesse", "Masse", "Gabarit", "Pente"],

      correctOptions: ["Vitesse", "Masse"],
    },

    {
      id: "fop03-q15",

      type: "yes-no",

      question: "Le frein moteur doit être utilisé en descente.",

      correctAnswer: true,
    },

    {
      id: "fop03-q16",

      type: "true-false",

      question:
        "Il faut principalement utiliser la pédale de frein pour contrôler sa vitesse dans une longue descente.",

      correctAnswer: false,
    },

    {
      id: "fop03-q17",

      type: "multiple-choice",

      question: "Quels dispositifs permettent d'économiser les freins ?",

      options: [
        "Frein moteur",
        "Ralentisseur",
        "Régulateur de vitesse",
        "Boîte automatique",
      ],

      correctOptions: ["Frein moteur", "Ralentisseur"],
    },

    {
      id: "fop03-q18",

      type: "yes-no",

      question:
        "Les règles de croisement sont identiques en montée et en descente.",

      correctAnswer: true,
    },

    {
      id: "fop03-q19",

      type: "single-choice",

      question: "Que faut-il particulièrement bien connaître en montagne ?",

      options: [
        "Le fonctionnement des boîtes automatiques et robotisées",
        "Le GPS",
        "Le régulateur adaptatif",
        "La radio embarquée",
      ],

      correctOption: "Le fonctionnement des boîtes automatiques et robotisées",
    },

    {
      id: "fop03-q20",

      type: "text",

      question:
        "Quel est le principal risque en cas de mauvaise utilisation du frein moteur dans une descente ?",

      canonicalAnswer: "La surchauffe et la perte d'efficacité des freins",

      acceptedAnswers: [
        "surchauffe des freins",
        "perte d'efficacité des freins",
        "perte de freinage",
        "surchauffe",
      ],
    },
  ],
}
