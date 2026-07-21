import type { Lesson } from "../../types/learning"

export const rse01: Lesson = {
  id: "rse-01",

  title: "Réglementation Sociale Européenne",

  contentType: "markdown",

  markdown: `
# Comprendre la Réglementation Sociale Européenne

La **Réglementation Sociale Européenne (RSE)** définit les règles que doivent respecter les conducteurs professionnels concernant :

- les temps de conduite ;
- les pauses ;
- les temps de repos.

Son objectif est simple : permettre aux conducteurs de travailler en toute sécurité tout en limitant les risques liés à la fatigue.

:::info[Pourquoi cette réglementation ?]

La fatigue est l'une des principales causes d'accidents dans le transport routier.

La RSE impose donc des limites de conduite et des périodes de repos afin de protéger le conducteur, ses passagers et les autres usagers de la route.

:::

---

## Qui est concerné ?

La RSE s'applique aux conducteurs utilisant un véhicule soumis à cette réglementation.

Elle concerne notamment :

:::checklist

Transport de voyageurs

Transport de marchandises

Conducteurs salariés

Conducteurs indépendants

:::

---

## Le tachygraphe

Le respect de la RSE est contrôlé grâce au **tachygraphe**.

Cet appareil enregistre automatiquement les activités du conducteur ainsi que les temps de conduite.

:::tip

Le tachygraphe ne décide pas si vous respectez la réglementation.

Il enregistre simplement votre activité.

Ce sont ensuite les contrôleurs qui vérifient si les règles ont été respectées.

:::

---

## Les 4 activités du conducteur

Le tachygraphe distingue **quatre activités**.

Toute la réglementation étudiée dans cette leçon repose sur ces quatre catégories.

| Activité | Description |
|----------|-------------|
| 🚍 **Conduite** | Le véhicule est en circulation. |
| 🔧 **Travail** | Chargement, déchargement, entretien, formalités administratives... |
| ⏳ **Disponibilité** | Le conducteur attend et doit rester disponible pour reprendre son activité. |
| 😴 **Repos** | Le conducteur dispose librement de son temps. |

:::warning[Attention]

La **disponibilité** n'est pas du **repos**.

Même si le conducteur ne travaille pas, il doit pouvoir reprendre son activité à tout moment.

:::

---

### Exemple

Imaginons la journée suivante :

| Heure | Activité |
|-------|----------|
| 08 h → 10 h | 🚍 Conduite |
| 10 h → 10 h 30 | 🔧 Déchargement |
| 10 h 30 → 11 h | ⏳ Attente |
| 11 h → 13 h | 🚍 Conduite |
| 13 h → 14 h | 😴 Pause déjeuner |

Le tachygraphe enregistrera **cinq périodes**, chacune correspondant à l'une des quatre activités.

---

### Pourquoi est-ce important ?

Dans les chapitres suivants, vous allez apprendre :

- combien de temps vous pouvez conduire ;
- quand une pause devient obligatoire ;
- combien de temps doit durer un repos.

Toutes ces règles sont calculées à partir des **quatre activités** que vous venez de découvrir.

:::scenario[Question]

Un conducteur attend pendant **45 minutes** avant son prochain départ.

La durée de cette attente était connue à l'avance et il n'effectue aucun travail pendant cette période.

Cette période correspond-elle à du repos ?

---

Non.

Le conducteur doit rester disponible pour reprendre son activité.

Il s'agit d'une période de **disponibilité**, et non d'un repos.

:::

---

## La conduite continue

La conduite continue correspond au temps de conduite effectué **sans avoir réalisé la pause réglementaire**.

Autrement dit, c'est le temps pendant lequel vous conduisez avant d'être obligé de vous arrêter.

---

### La règle

Vous pouvez conduire **au maximum 4 h 30**.

Au-delà, une pause devient obligatoire.

:::sequence[Cycle de conduite]

Conduite | 4 h 30 maximum | drive

Pause | 45 min minimum | break

Conduite | Nouvelle période | drive

:::

:::info

Après une pause réglementaire, une nouvelle période de conduite continue recommence.

Le compteur des **4 h 30** repart donc de zéro.

:::

---

### La pause obligatoire

La pause doit durer **au minimum 45 minutes**.

Pendant cette période, le conducteur ne doit effectuer **aucune autre activité professionnelle**.

---

### La pause fractionnée

Au lieu d'une pause unique de **45 minutes**, il est possible de la fractionner.

:::compare[Deux possibilités]

45 min | Une seule pause | Conforme

15 min + 30 min | Deux pauses successives | Conforme

:::

:::warning

En cas de fractionnement, la première pause doit durer **au moins 15 minutes** et la seconde **au moins 30 minutes**.

Elles doivent obligatoirement être prises dans cet ordre.

Une pause de **20 min + 25 min** n'est donc pas conforme.

:::

---

### Exemples

| Situation | Conforme ? |
|-----------|------------|
| 4 h 30 → 45 min → Reprise de la conduite | ✅ Oui |
| 2 h 30 → 15 min → 2 h → 30 min → Reprise | ✅ Oui |
| 2 h → 20 min → 2 h 30 → 25 min | ❌ Non |
| 5 h de conduite sans pause | ❌ Non |

---

### Mises en situation

:::scenario[Question]

Vous conduisez pendant **4 h 30**.

Vous prenez ensuite une pause de **45 minutes**.

Pouvez-vous repartir pour une nouvelle période de conduite ?

---

Oui.

La pause réglementaire est complète.

Une nouvelle période de conduite continue peut commencer.

:::

---

:::scenario[Question]

Vous conduisez pendant **4 h 30**.

Vous prenez une pause de **15 minutes**, puis reprenez immédiatement la route.

La réglementation est-elle respectée ?

---

La première partie de la pause fractionnée est conforme, mais la pause réglementaire n'est pas encore complète.

Vous devrez prendre une seconde pause d'au moins **30 minutes** avant d'atteindre une nouvelle période de **4 h 30** de conduite.

:::

---

## La conduite journalière

La conduite journalière correspond au **temps total de conduite effectué entre deux repos journaliers**, ou entre un repos journalier et un repos hebdomadaire.

En d'autres termes, c'est la quantité totale de conduite que vous pouvez effectuer au cours d'une journée de travail.

---

### La règle

En règle générale, vous pouvez conduire **jusqu'à 9 heures par jour**.

:::info

Les temps de pause, de disponibilité et de travail ne sont pas comptabilisés dans cette durée.

Seul le **temps de conduite** est pris en compte.

:::

---

### La durée prolongée

Deux fois par semaine, la durée de conduite journalière peut être prolongée jusqu'à **10 heures**.

:::compare[Conduite journalière]

9 h | Durée normale | Cas général

10 h | Durée prolongée | Maximum 2 fois par semaine

:::

:::warning

Une troisième journée à **10 heures** au cours de la même semaine n'est pas autorisée.

:::

---

### Le repos journalier

À la fin de votre journée de travail, vous devez obligatoirement prendre un repos journalier.

Deux possibilités existent.

:::compare[Repos journalier]

Repos normal | 11 h consécutives | Cas général

Repos réduit | 9 h consécutives | Maximum 3 fois entre deux repos hebdomadaires

:::

---

### Le repos journalier fractionné

Le repos journalier normal peut être fractionné.

Il est alors composé de :

- une première période de **3 heures minimum** ;
- suivie d'une seconde période de **9 heures minimum**.

:::sequence[Repos journalier fractionné]

Repos | 3 h minimum | hotel

Activité | Journée de travail | work

Repos | 9 h minimum | hotel

:::

La durée totale du repos est alors de **12 heures**.

---

### Exemples

#### Journée conforme

:::timeline[Journée de conduite]

08 h | Début de journée

08 h → 12 h | 🚍 Conduite (4 h)

12 h → 12 h 45 | ☕ Pause (45 min)

12 h 45 → 15 h 45 | 🚍 Conduite (3 h)

15 h 45 → 16 h 30 | ☕ Pause (45 min)

16 h 30 → 18 h 30 | 🚍 Conduite (2 h)

18 h 30 | Fin de journée (9 h de conduite)

:::

---

#### Journée avec durée prolongée

:::timeline[Journée à 10 heures]

08 h | Début de journée

08 h → 10 h 30 | 🚍 Conduite (2 h 30)

10 h 30 → 10 h 45 | ☕ Pause (15 min)

10 h 45 → 12 h 45 | 🚍 Conduite (2 h)

12 h 45 → 13 h 15 | ☕ Pause (30 min)

13 h 15 → 15 h 45 | 🚍 Conduite (2 h 30)

15 h 45 → 16 h 30 | ☕ Pause (45 min)

16 h 30 → 19 h 30 | 🚍 Conduite (3 h)

19 h 30 | Fin de journée (10 h de conduite)

:::

:::info

Cette journée est conforme :

- la conduite continue est respectée ;
- les pauses réglementaires sont effectuées ;
- la conduite journalière atteint **10 heures** ;
- cette durée prolongée ne peut être utilisée que **2 fois par semaine**.

:::

---

#### Repos journalier fractionné

:::timeline[Exemple]

20 h | Début de la première période de repos

20 h → 23 h | 😴 Repos (3 h)

23 h → 01 h | 🔧 Reprise d'activité

01 h → 10 h | 😴 Repos (9 h)

10 h | Reprise de la journée

:::

---

### Mises en situation

:::scenario[Question]

Aujourd'hui, vous avez conduit **8 h 30**.

Pouvez-vous encore conduire **30 minutes** ?

---

Oui.

Vous atteindrez alors la durée journalière normale de **9 heures**.

:::

---

:::scenario[Question]

Cette semaine, vous avez déjà effectué **deux journées de 10 heures**.

Aujourd'hui, vous prévoyez une nouvelle journée de **10 heures**.

Est-ce autorisé ?

---

Non.

La conduite journalière ne peut être prolongée jusqu'à **10 heures** que **deux fois par semaine**.

:::

---

:::scenario[Question]

Vous terminez votre journée de travail à **20 h**.

À quelle heure pourrez-vous reprendre votre activité après un repos journalier normal ?

---

À **7 h** le lendemain.

Le repos journalier normal est de **11 heures consécutives**.

:::

---

## La conduite hebdomadaire

La conduite hebdomadaire correspond au **temps total de conduite effectué au cours d'une même semaine**.

La semaine est comprise entre le **lundi à 00 h 00** et le **dimanche à 24 h 00**.

---

### La règle

Vous pouvez conduire **au maximum 56 heures** au cours d'une même semaine.

:::compare[Conduite hebdomadaire]

56 h | Maximum autorisé | Par semaine

:::

:::warning

Dépasser les **56 heures** de conduite au cours d'une semaine est interdit.

:::

---

### La règle des deux semaines

Même si une semaine est limitée à **56 heures**, il existe également une limite sur deux semaines consécutives.

Vous ne pouvez pas dépasser **90 heures** de conduite au total.

:::compare[Deux semaines consécutives]

90 h | Maximum autorisé | Sur deux semaines consécutives

:::

---

### Exemples

#### Exemple conforme

:::timeline[Deux semaines]

Semaine 1 | 🚍 45 h de conduite

Semaine 2 | 🚍 45 h de conduite

Total | ✅ 90 h

:::

---

#### Exemple conforme

:::timeline[Deux semaines]

Semaine 1 | 🚍 56 h de conduite

Semaine 2 | 🚍 34 h de conduite

Total | ✅ 90 h

:::

---

#### Exemple non conforme

:::timeline[Deux semaines]

Semaine 1 | 🚍 56 h de conduite

Semaine 2 | 🚍 40 h de conduite

Total | ❌ 96 h

:::

:::warning

Même si chaque semaine reste inférieure ou égale à **56 heures**, le total des deux semaines dépasse **90 heures**.

La réglementation n'est donc pas respectée.

:::

---

### Le repos hebdomadaire

Chaque conducteur doit prendre un repos hebdomadaire.

Deux types de repos existent.

:::compare[Repos hebdomadaire]

Repos normal | 45 h consécutives minimum | Cas général

Repos réduit | Entre 24 h et moins de 45 h | Avec compensation

:::

---

### L'organisation sur deux semaines

Sur deux semaines consécutives, le conducteur doit prendre au minimum :

- soit **deux repos hebdomadaires normaux** ;
- soit **un repos hebdomadaire normal et un repos hebdomadaire réduit**.

:::info

Un repos hebdomadaire réduit ne remplace donc pas définitivement le repos normal.

La réduction devra être compensée.

:::

---

### Le repos hebdomadaire réduit

Le repos hebdomadaire réduit doit durer **au moins 24 heures consécutives**.

La différence avec le repos normal de **45 heures** devra être compensée avant la fin de la troisième semaine suivant la semaine concernée.

:::info[Exemple]

Repos pris : **30 h**

Repos normal : **45 h**

Réduction : **15 h**

Les **15 heures manquantes** devront être récupérées en une seule fois et ajoutées à une autre période de repos d'au moins **9 heures**.

:::

---

### Mises en situation

:::scenario[Question]

Cette semaine, vous avez conduit **54 heures**.

Pouvez-vous encore conduire **2 heures** ?

---

Oui.

Vous atteindrez la limite hebdomadaire de **56 heures**.

:::

---

:::scenario[Question]

Vous avez conduit :

- **56 heures** la semaine dernière ;
- **35 heures** cette semaine.

La réglementation est-elle respectée ?

---

Non.

Vous avez déjà effectué **91 heures** de conduite sur deux semaines consécutives.

La limite maximale est de **90 heures**.

:::

---

:::scenario[Question]

Vous prenez un repos hebdomadaire réduit de **24 heures**.

Les heures manquantes sont-elles définitivement perdues ?

---

Non.

La réduction par rapport au repos normal de **45 heures** devra obligatoirement être compensée avant la fin de la troisième semaine suivante.

:::

---

## Les situations particulières

Certaines situations sont soumises à des règles spécifiques.

Elles restent moins fréquentes, mais il est important de les connaître.

---

### Le double équipage

On parle de **double équipage** lorsque **deux conducteurs** se relaient à bord du même véhicule.

Cette organisation permet de prolonger le temps d'exploitation du véhicule tout en respectant la réglementation.

:::compare[Double équipage]

Conducteurs | 2

Repos journalier | 9 h minimum

Période maximale | Dans une période de 30 h

:::

:::info

Pendant qu'un conducteur conduit, l'autre peut être en disponibilité afin de prendre le relais.

:::

---

### Les transports par ferry ou par train

Lors d'un transport par **ferry** ou par **train**, certaines règles particulières peuvent s'appliquer au repos du conducteur.

:::info

Ces situations sont encadrées par des dispositions spécifiques.

Pour cette première leçon, retenez surtout que le transport par ferry ou par train peut modifier les conditions habituelles de prise du repos.

Les règles détaillées pourront être étudiées dans une leçon complémentaire.

:::

---

### Les circonstances exceptionnelles

Dans certaines circonstances exceptionnelles, un conducteur peut être amené à s'écarter temporairement des règles habituelles afin de protéger la sécurité des personnes, du véhicule ou de son chargement.

:::warning

Cette possibilité reste exceptionnelle.

Elle ne doit jamais être utilisée simplement pour respecter un planning, effectuer une livraison plus rapidement ou compenser un retard prévisible.

:::

---

### Mises en situation

:::scenario[Question]

Deux conducteurs se relaient dans le même véhicule.

Comment appelle-t-on cette organisation ?

---

Il s'agit d'un **double équipage**.

:::

---

:::scenario[Question]

Les transports par ferry ou par train sont-ils toujours soumis exactement aux mêmes conditions de repos qu'un trajet routier classique ?

---

Non.

Des dispositions particulières peuvent s'appliquer à ce type de transport.

:::

---

:::scenario[Question]

Pouvez-vous dépasser votre durée de conduite simplement parce que vous êtes en retard sur votre livraison ?

---

Non.

Un retard de livraison ou un planning mal organisé ne constitue pas, à lui seul, une circonstance exceptionnelle.

:::

---

# À mémoriser

:::tip[Mémo]

Retenez surtout ces valeurs : elles reviennent très souvent lors des QCM et des examens.

:::

| 🚍 Conduite | Durée | 😴 Pause / Repos | Durée |
|------------|------:|------------------|------:|
| **Continue** | **4 h 30** | **Pause obligatoire** | **45 min** |
| | | Pause fractionnée | 15 min + 30 min |
| | | | |
| **Journalière** | **9 h** | **Repos journalier normal** | **11 h** |
| Dérogation | 10 h (2×/sem.) | Repos journalier réduit | 9 h |
| | | Repos journalier fractionné | 3 h + 9 h |
| | | | |
| **Hebdomadaire** | **56 h** | **Repos hebdomadaire normal** | **45 h** |
| **2 semaines** | **90 h** | Repos hebdomadaire réduit | 24 h + compensation |
  `,

  questions: [
    {
      id: "rse01-q01",

      type: "text",

      question: "Quelle est la durée maximale de conduite continue ?",

      canonicalAnswer: "4h30",

      acceptedAnswers: ["4h30", "4 h 30", "4h 30", "4 heures 30"],
    },
    {
      id: "rse01-q02",

      type: "text",

      question: "Quelle est la durée normale de conduite journalière ?",

      canonicalAnswer: "9h",

      acceptedAnswers: ["9h", "9 heures"],
    },
    {
      id: "rse01-q03",

      type: "text",

      question:
        "Quelle est la durée maximale de conduite journalière en dérogation ?",

      canonicalAnswer: "10h",

      acceptedAnswers: ["10h", "10 heures"],
    },
    {
      id: "rse01-q04",

      type: "text",

      question:
        "Combien de fois par semaine la dérogation à 10h est-elle autorisée ?",

      canonicalAnswer: "2 fois",

      acceptedAnswers: ["2", "2 fois", "deux fois"],
    },
    {
      id: "rse01-q05",

      type: "text",

      question: "Quelle est la durée maximale de conduite hebdomadaire ?",

      canonicalAnswer: "56h",

      acceptedAnswers: ["56h", "56 heures"],
    },
    {
      id: "rse01-q06",

      type: "text",

      question:
        "Quelle est la durée maximale de conduite sur deux semaines consécutives ?",

      canonicalAnswer: "90h",

      acceptedAnswers: ["90h", "90 heures"],
    },
    {
      id: "rse01-q07",

      type: "true-false",

      question: "La conduite journalière normale est de 10 heures.",

      correctAnswer: false,
    },
    {
      id: "rse01-q08",

      type: "true-false",

      question: "La conduite continue maximale est de 4h30.",

      correctAnswer: true,
    },
    {
      id: "rse01-q09",

      type: "true-false",

      question: "La conduite hebdomadaire maximale est de 90 heures.",

      correctAnswer: false,
    },
    {
      id: "rse01-q10",

      type: "true-false",

      question: "Un repos hebdomadaire normal est de 45 heures.",

      correctAnswer: true,
    },
    {
      id: "rse01-q11",

      type: "single-choice",

      question:
        "Quelle pause minimale doit être prise après 4h30 de conduite ?",

      options: ["15 minutes", "30 minutes", "45 minutes", "1 heure"],

      correctOption: "45 minutes",
    },
    {
      id: "rse01-q12",

      type: "single-choice",

      question: "Quel est le repos journalier normal ?",

      options: ["9 heures", "10 heures", "11 heures", "12 heures"],

      correctOption: "11 heures",
    },
    {
      id: "rse01-q13",

      type: "multiple-choice",

      question: "Parmi les affirmations suivantes, lesquelles sont correctes ?",

      options: [
        "Conduite continue : 4h30",
        "Conduite hebdomadaire : 56h",
        "Repos journalier normal : 11h",
        "Pause obligatoire : 20 min",
      ],

      correctOptions: [
        "Conduite continue : 4h30",
        "Conduite hebdomadaire : 56h",
        "Repos journalier normal : 11h",
      ],
    },
    {
      id: "rse01-q14",

      type: "text",

      question:
        "Vous avez conduit 56h la semaine dernière. Combien pouvez-vous conduire au maximum cette semaine ?",

      canonicalAnswer: "34h",

      acceptedAnswers: ["34h", "34 heures"],
    },
    {
      id: "rse01-q15",

      type: "text",

      question:
        "Vous avez conduit 40h la semaine dernière. Combien pouvez-vous conduire au maximum cette semaine ?",

      canonicalAnswer: "50h",

      acceptedAnswers: ["50h", "50 heures"],
    },
    {
      id: "rse01-q16",

      type: "text",

      question:
        "Vous avez conduit 10h la semaine dernière. Combien pouvez-vous conduire au maximum cette semaine ?",

      canonicalAnswer: "56h",

      acceptedAnswers: ["56h", "56 heures"],
    },
    {
      id: "rse01-q17",

      type: "single-choice",

      question:
        "Après un repos hebdomadaire réduit de 24h, combien d'heures doivent être récupérées ?",

      options: ["11h", "21h", "24h", "45h"],

      correctOption: "21h",
    },
    {
      id: "rse01-q18",

      type: "true-false",

      question:
        "Après une pause réglementaire de 45 minutes, une nouvelle période de conduite continue recommence.",

      correctAnswer: true,
    },
    {
      id: "rse01-q19",

      type: "true-false",

      question:
        "Une pause de 20 minutes suivie d'une pause de 25 minutes remplace une pause de 45 minutes.",

      correctAnswer: false,
    },
    {
      id: "rse01-q20",

      type: "single-choice",

      question:
        "Après 2 h 30 de conduite, vous prenez une pause de 15 minutes. Combien pouvez-vous encore conduire avant la prochaine pause réglementaire ?",

      options: ["1 h", "2 h", "2 h 30", "4 h 30"],

      correctOption: "2 h",
    },
    {
      id: "rse01-q21",

      type: "single-choice",

      question:
        "Vous avez déjà utilisé deux journées de conduite à 10 heures cette semaine. Quelle est votre durée maximale de conduite aujourd'hui ?",

      options: ["8 h", "9 h", "10 h", "11 h"],

      correctOption: "9 h",
    },
    {
      id: "rse01-q22",

      type: "true-false",

      question:
        "Les temps de disponibilité sont comptabilisés dans la conduite journalière.",

      correctAnswer: false,
    },
    {
      id: "rse01-q23",

      type: "multiple-choice",

      question: "Quelles activités sont enregistrées par le tachygraphe ?",

      options: [
        "Conduite",
        "Travail",
        "Disponibilité",
        "Repos",
        "Pause déjeuner",
      ],

      correctOptions: ["Conduite", "Travail", "Disponibilité", "Repos"],
    },
    {
      id: "rse01-q24",

      type: "single-choice",

      question:
        "Quel est le principal objectif de la Réglementation Sociale Européenne ?",

      options: [
        "Réduire la consommation de carburant",
        "Limiter la fatigue des conducteurs",
        "Réduire les péages",
        "Améliorer les performances des véhicules",
      ],

      correctOption: "Limiter la fatigue des conducteurs",
    },
    {
      id: "rse01-q25",

      type: "single-choice",

      question:
        "Quel appareil enregistre automatiquement les activités du conducteur ?",

      options: [
        "Le chronotachygraphe",
        "Le limiteur de vitesse",
        "Le GPS",
        "L'ordinateur de bord",
      ],

      correctOption: "Le chronotachygraphe",
    },
    {
      id: "rse01-q26",

      type: "true-false",

      question:
        "Le tachygraphe vérifie automatiquement si le conducteur respecte la réglementation.",

      correctAnswer: false,
    },
    {
      id: "rse01-q27",

      type: "single-choice",

      question:
        "Quelle activité correspond à un conducteur qui attend son départ sans effectuer de travail mais doit rester disponible ?",

      options: ["Repos", "Disponibilité", "Conduite", "Travail"],

      correctOption: "Disponibilité",
    },
    {
      id: "rse01-q28",

      type: "true-false",

      question:
        "Le temps de pause est comptabilisé dans la durée de conduite journalière.",

      correctAnswer: false,
    },
    {
      id: "rse01-q29",

      type: "single-choice",

      question:
        "Vous avez conduit 45 h cette semaine. Combien pouvez-vous encore conduire avant d'atteindre la limite hebdomadaire ?",

      options: ["9 h", "10 h", "11 h", "45 h"],

      correctOption: "11 h",
    },
    {
      id: "rse01-q30",

      type: "true-false",

      question:
        "Il est possible de prendre un repos journalier normal en une seule période de 11 heures consécutives.",

      correctAnswer: true,
    },
    {
      id: "rse01-q31",

      type: "single-choice",

      question: "Le repos journalier normal peut être fractionné en :",

      options: ["4 h + 7 h", "3 h + 9 h", "5 h + 6 h", "6 h + 6 h"],

      correctOption: "3 h + 9 h",
    },
    {
      id: "rse01-q32",

      type: "true-false",

      question:
        "Deux conducteurs qui se relaient dans le même véhicule forment un double équipage.",

      correctAnswer: true,
    },
    {
      id: "rse01-q33",

      type: "single-choice",

      question:
        "Dans un double équipage, le repos journalier minimum doit être pris dans une période de :",

      options: ["24 h", "30 h", "36 h", "48 h"],

      correctOption: "30 h",
    },

    {
      id: "rse01-q34",

      type: "text",

      question:
        "Vous avez conduit 48h la semaine dernière. Combien pouvez-vous conduire au maximum cette semaine ?",

      canonicalAnswer: "42h",

      acceptedAnswers: ["42h", "42 h", "42 heures"],
    },
    {
      id: "rse01-q35",

      type: "text",

      question:
        "Vous avez déjà conduit 52h cette semaine. Combien pouvez-vous encore conduire au maximum ?",

      canonicalAnswer: "4h",

      acceptedAnswers: ["4h", "4 h", "4 heures"],
    },
    {
      id: "rse01-q36",

      type: "text",

      question:
        "Vous avez conduit 54h la semaine dernière. Combien pouvez-vous conduire au maximum cette semaine ?",

      canonicalAnswer: "36h",

      acceptedAnswers: ["36h", "36 h", "36 heures"],
    },
    {
      id: "rse01-q37",

      type: "single-choice",

      question:
        "Vous avez conduit 44h la semaine dernière et 43h cette semaine. Combien pouvez-vous encore conduire cette semaine ?",

      options: ["2h", "3h", "12h", "13h"],

      correctOption: "3h",
    },
    {
      id: "rse01-q38",

      type: "single-choice",

      question:
        "Vous avez déjà conduit 4h aujourd'hui. Combien pouvez-vous encore conduire avant d'atteindre la durée journalière normale ?",

      options: ["4h", "5h", "6h", "6h30"],

      correctOption: "5h",
    },
  ],
}
