import type { Lesson } from "../../types/learning"

export const rse01: Lesson = {
  id: "rse-01",

  title: "Bases de la Réglementation Sociale Européenne",

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
