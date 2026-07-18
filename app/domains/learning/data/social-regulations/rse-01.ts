import type { Lesson } from "../../types/learning"

export const rse01: Lesson = {
  id: "rse-01",

  title: "Réglementation Sociale Européenne",

  contentType: "markdown",

  markdown: `
  # Réglementation Sociale Européenne (RSE)

La Réglementation Sociale Européenne encadre les temps de conduite, de pause et de repos des conducteurs.

Son objectif est de :

* garantir la sécurité routière ;
* lutter contre la fatigue ;
* protéger les conducteurs et les usagers.

---

# Tableau récapitulatif

| Conduite (maximum)                                          | Pause / Repos (minimum)                           |
| ----------------------------------------------------------- | ------------------------------------------------- |
| Conduite continue : 4h30                                    | Pause : 45 min ou 15 min + 30 min                 |
| Conduite journalière normale : 9h                           | Repos journalier normal : 11h                     |
| Conduite journalière dérogatoire : 10h (2 fois par semaine) | Repos journalier fractionné : 3h + 9h             |
| Conduite hebdomadaire : 56h                                 | Repos journalier réduit : 9h (3 fois par semaine) |
| Conduite sur 2 semaines : 90h                               | Repos hebdomadaire normal : 45h                   |
|                                                             | Repos hebdomadaire réduit : 24h                   |

---

# Temps de conduite

## Conduite continue

Un conducteur ne peut pas conduire plus de **4h30** sans interruption.

Après cette période, il doit obligatoirement prendre une pause.

---

## Conduite journalière

La durée normale maximale est de :

**9 heures par jour**

Cette durée peut être portée à :

**10 heures par jour**

mais uniquement :

**2 fois par semaine**

---

## Conduite hebdomadaire

La durée maximale de conduite est de :

**56 heures sur une semaine**

---

## Conduite sur deux semaines

La durée maximale de conduite est de :

**90 heures sur deux semaines consécutives**

### Exemple

Semaine 1 :

56h

Semaine 2 :

34h

Total :

56h + 34h = 90h

Le maximum autorisé est atteint.

---

### Attention

Même si vous avez peu conduit la semaine précédente, vous ne pouvez jamais dépasser :

**56h sur une semaine**

### Exemple

Semaine 1 :

10h

Semaine 2 :

56h

Total :

66h

La réglementation est respectée.

En revanche, il est impossible de conduire :

70h

sur une seule semaine car la limite hebdomadaire reste fixée à 56h.

---

# Temps de pause

Après une conduite continue de 4h30, le conducteur doit prendre :

**45 minutes de pause**

Cette pause peut être prise :

* en une seule fois : 45 min ;
* ou en deux fois : 15 min puis 30 min.

---

# Repos journalier

## Repos journalier normal

Durée minimale :

**11 heures**

---

## Repos journalier fractionné

Le repos peut être fractionné en :

* 3 heures ;
* puis 9 heures.

Total :

12 heures.

---

## Repos journalier réduit

Durée minimale :

**9 heures**

Ce repos réduit est autorisé :

**3 fois par semaine**

---

# Repos hebdomadaire

## Repos hebdomadaire normal

Durée minimale :

**45 heures**

---

## Repos hebdomadaire réduit

Durée minimale :

**24 heures**

---

# Compensation du repos réduit

Lorsqu'un repos hebdomadaire est réduit à 24h, la différence doit être récupérée.

Calcul :

45h - 24h = 21h

Le conducteur doit donc récupérer :

**21 heures**

avant la fin de la troisième semaine suivante.

---

# À retenir pour l'examen

* Conduite continue : 4h30
* Pause : 45 min
* Conduite journalière normale : 9h
* Conduite journalière dérogatoire : 10h (2 fois/semaine)
* Conduite hebdomadaire : 56h
* Conduite sur 2 semaines : 90h
* Repos journalier normal : 11h
* Repos journalier réduit : 9h
* Repos hebdomadaire normal : 45h
* Repos hebdomadaire réduit : 24h
* Compensation : 21h

---

# Laboratoire des composants Markdown

Cette partie sert uniquement à tester les extensions pédagogiques.

---

## Encadré d'information

:::info[Pourquoi cette règle ?]
Cette réglementation permet de limiter la fatigue du conducteur et de protéger :

- le conducteur ;
- les passagers ;
- les autres usagers de la route.
:::

## Encadré d'astuce

:::tip[Astuce de mémorisation]
Retenez la suite :

**4h30 → 45 min → 9h → 56h → 90h**
:::

## Encadré d'avertissement

:::warning[Ordre obligatoire]
En cas de pause fractionnée, les pauses doivent être prises dans cet ordre :

1. au moins **15 minutes** ;
2. puis au moins **30 minutes**.
:::

## Encadré important

:::danger[À retenir pour l'examen]
Une pause unique de **30 minutes** après 4h30 de conduite n'est pas suffisante.
:::

---

## Chiffres-clés

:::metrics[Les chiffres essentiels]
4h30 | Conduite continue maximale | Avant une pause réglementaire
45 min | Pause réglementaire | Possible en 15 min puis 30 min
9h | Conduite journalière normale
10h | Conduite journalière dérogatoire | Deux fois par semaine maximum
56h | Conduite hebdomadaire maximale
90h | Conduite maximale sur deux semaines
11h | Repos journalier normal
:::

---

## Timeline verticale

:::timeline[Déroulement d'une pause fractionnée]
Début de la conduite | Le conducteur commence sa période de conduite
Pause de 15 minutes | Première partie de la pause réglementaire
Reprise de la conduite | Le conducteur reprend temporairement la route
Pause de 30 minutes | Seconde partie obligatoire de la pause
Nouveau cycle | Une nouvelle période de conduite peut commencer
:::

---

## Comparaison

:::compare[Comparaison des repos journaliers]
Repos normal | 11 heures | Il s'agit de la règle générale
Repos réduit | 9 heures | Trois fois maximum entre deux repos hebdomadaires
Repos fractionné | 3h + 9h | Soit une durée totale de 12 heures
:::

---

## Séquence horizontale

:::sequence[Exemple de journée]
Conduite | 4h30 | drive
Pause | 45 min | break
Conduite | 4h30 | conduite
Repos journalier | 11h | repos
:::

---

## Mise en situation

:::scenario[La pause de 30 minutes est-elle suffisante ?]
Un conducteur conduit pendant **4h30**.

Il s'arrête ensuite pendant **30 minutes** avant de reprendre la route.

Peut-il reprendre une nouvelle période complète de conduite ?
---
**Non.**

Après 4h30 de conduite, la pause doit durer au minimum **45 minutes**.

Une pause unique de 30 minutes n'est donc pas suffisante.
:::

---

## Checklist

:::checklist[Conditions de la pause fractionnée]
Une première pause d'au moins **15 minutes**
Une seconde pause d'au moins **30 minutes**
Le respect de l'ordre **15 puis 30**
Les deux pauses prises avant ou à l'issue des **4h30**
:::

---

## Mémo

:::memory[La suite essentielle]
**4h30 → 45 min → 9h → 56h → 90h**
---
Conduite continue → pause → journée → semaine → deux semaines
:::

## Mémo de calcul

:::memory[Repos journalier fractionné]
**3h + 9h = 12h**
---
Le repos journalier fractionné dure une heure de plus que le repos journalier normal non fractionné de 11 heures.
:::

---

## Tableau Markdown stylé

| Type de repos | Durée minimale | Particularité |
| --- | ---: | --- |
| Repos journalier normal | **11h** | Règle générale |
| Repos journalier réduit | **9h** | Trois fois maximum entre deux repos hebdomadaires |
| Repos journalier fractionné | **3h + 9h** | 12 heures au total |
| Repos hebdomadaire normal | **45h** | Repos de référence |
| Repos hebdomadaire réduit | **24h** | Compensation obligatoire |

---

## Vidéo YouTube

Remplacer l'identifiant par une véritable vidéo :

::youtube[dQw4w9WgXcQ]

## Vidéo YouTube avec heure de départ

::youtube[https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30]

## Vidéo Vimeo

Remplacer l'identifiant par une véritable vidéo Vimeo :

::vimeo[76979871]
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
  ],
}
