import type { Lesson } from "../../types/learning"

export const roadCode01: Lesson = {
  id: "road-code-01",

  title: "Distances de sécurité et calculs",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "ceg9LWC0_Zw",
  },

  markdown: `
  # Distances et calculs

Les calculs demandés au Code de la route sont des **estimations rapides**.

Il faut distinguer **3 notions principales** :

- Distance parcourue pendant le temps de réaction
- Distance d'arrêt
- Distance de sécurité

---

# 1. Distance parcourue pendant le temps de réaction

La distance parcourue pendant le temps de réaction correspond à la distance parcourue entre le moment où le conducteur perçoit un danger et le moment où il commence à freiner.

On considère un temps de réaction moyen d'environ **1 seconde**.

## Calcul rapide

> **Chiffre des dizaines × 3**

Exemples :

| Vitesse | Calcul | Distance |
|---------:|--------|---------:|
| 50 km/h | 5 × 3 | 15 m |
| 70 km/h | 7 × 3 | 21 m |
| 90 km/h | 9 × 3 | 27 m |
| 110 km/h | 11 × 3 | 33 m |

---

# 2. Distance d'arrêt

La distance d'arrêt correspond à la distance nécessaire pour immobiliser complètement le véhicule.

Elle dépend notamment :

- de la vitesse ;
- du temps de réaction ;
- de l'adhérence de la chaussée ;
- de l'état du véhicule.

La distance d'arrêt est composée de :

- la distance parcourue pendant le temps de réaction ;
- la distance parcourue pendant le freinage.

![Distance d'arrêt](/images/road-code/distance_arret.png)

## Calcul rapide (Code de la route)

> **Chiffre des dizaines × lui-même**

Exemples :

| Vitesse | Calcul | Distance d'arrêt |
|---------:|--------|-----------------:|
| 50 km/h | 5 × 5 | ≈ 25 m |
| 70 km/h | 7 × 7 | ≈ 49 m |
| 90 km/h | 9 × 9 | ≈ 81 m |
| 110 km/h | 11 × 11 | ≈ 121 m |

### Chaussée mouillée

Sur chaussée mouillée, la distance d'arrêt est **environ doublée**.

Exemple :

- à 90 km/h sur route sèche : ≈ 81 m
- à 90 km/h sur route mouillée : ≈ 162 m

---

# 3. Distance de sécurité

La distance de sécurité est la distance minimale à conserver avec le véhicule qui précède.

Elle correspond à un intervalle d'au moins **2 secondes**.

## Calcul rapide

> **Chiffre des dizaines × 6**

Exemples :

| Vitesse | Calcul | Distance de sécurité |
|---------:|--------|---------------------:|
| 50 km/h | 5 × 6 | 30 m |
| 70 km/h | 7 × 6 | 42 m |
| 90 km/h | 9 × 6 | 54 m |
| 110 km/h | 11 × 6 | 66 m |
| 130 km/h | 13 × 6 | 78 m |

## Comment vérifier ?

Choisissez un repère fixe (panneau, arbre, pont...).

Lorsque le véhicule devant passe ce repère, comptez :

> **"Une sécurité... Deux sécurités..."**

Si vous atteignez le repère avant d'avoir terminé, vous êtes trop près.

---

# Quand augmenter les distances ?

Augmentez toujours vos distances lorsque :

- il pleut ;
- il neige ;
- il y a du verglas ;
- la visibilité est réduite ;
- la circulation est dense ;
- vous êtes fatigué ;
- vous êtes distrait.

---

# Mémo

## ⏱️ Temps de réaction

**Temps de réaction**

➡️ **3 mots**

✅ **× 3**

---

## 🚗 Distance de sécurité

**SSSSécurité** --> **SSSSix**

➡️ Les **S** font penser au **6**

✅ **× 6**

---

## 🛑 Distance d'arrêt

**Arrêt**

➡️ Le nombre est multiplié **par lui-même**

✅ **dizaines × dizaines**

---

# À retenir

| Notion | Calcul rapide |
|---------|---------------|
| Temps de réaction | **× 3** |
| Distance d'arrêt | **dizaines × dizaines** |
| Distance de sécurité | **× 6** |
| Route mouillée | **Distance d'arrêt × 2** |
  `,

  questions: [
    {
      id: "code-distances-q1",
      type: "text",
      question:
        "Pour calculer rapidement la distance parcourue pendant le temps de réaction, on multiplie le chiffre des dizaines par...",
      canonicalAnswer: "3",
      acceptedAnswers: ["3", "trois"],
      hint: "Pense au nombre de mots de l'expression.",
      explanation:
        "Distance parcourue pendant le temps de réaction = chiffre des dizaines × 3.",
      tags: ["temps de réaction", "calcul"],
    },

    {
      id: "code-distances-q2",
      type: "text",
      question:
        "Pour calculer rapidement la distance de sécurité, on multiplie le chiffre des dizaines par...",
      canonicalAnswer: "6",
      acceptedAnswers: ["6", "six"],
      hint: "SSSSécurité...",
      explanation: "Distance de sécurité = chiffre des dizaines × 6.",
      tags: ["distance de sécurité"],
    },

    {
      id: "code-distances-q3",
      type: "text",
      question:
        "Pour calculer rapidement la distance d'arrêt, on multiplie le chiffre des dizaines...",
      canonicalAnswer: "par lui-même",
      acceptedAnswers: [
        "par lui même",
        "lui même",
        "lui-même",
        "par lui-même",
        "par elle même",
        "par elle-même",
        "au carré",
        "par le même nombre",
        "par lui meme",
      ],
      hint: "Le nombre se multiplie lui-même.",
      tags: ["distance d'arrêt"],
    },

    {
      id: "code-distances-q4",
      type: "single-choice",
      question:
        "À 90 km/h, la distance parcourue pendant le temps de réaction est d'environ...",
      options: ["18 m", "27 m", "54 m", "81 m"],
      correctOption: "27 m",
      explanation: "9 × 3 = 27 m.",
    },

    {
      id: "code-distances-q5",
      type: "single-choice",
      question: "À 90 km/h, la distance de sécurité est d'environ...",
      options: ["27 m", "54 m", "81 m", "90 m"],
      correctOption: "54 m",
      explanation: "9 × 6 = 54 m.",
    },

    {
      id: "code-distances-q6",
      type: "single-choice",
      question:
        "À 90 km/h, la distance d'arrêt sur route sèche est d'environ...",
      options: ["54 m", "81 m", "108 m", "162 m"],
      correctOption: "81 m",
      explanation: "9 × 9 = 81 m.",
    },

    {
      id: "code-distances-q7",
      type: "single-choice",
      question: "À 50 km/h, la distance de sécurité est d'environ...",
      options: ["15 m", "25 m", "30 m", "50 m"],
      correctOption: "30 m",
      explanation: "5 × 6 = 30 m.",
    },

    {
      id: "code-distances-q8",
      type: "single-choice",
      question:
        "À 70 km/h, la distance parcourue pendant le temps de réaction est d'environ...",
      options: ["21 m", "42 m", "49 m", "70 m"],
      correctOption: "21 m",
      explanation: "7 × 3 = 21 m.",
    },

    {
      id: "code-distances-q9",
      type: "single-choice",
      question:
        "À 110 km/h, la distance d'arrêt sur route sèche est d'environ...",
      options: ["66 m", "99 m", "110 m", "121 m"],
      correctOption: "121 m",
      explanation: "11 × 11 = 121 m.",
    },

    {
      id: "code-distances-q10",
      type: "single-choice",
      question: "Sur chaussée mouillée, la distance d'arrêt est...",
      options: [
        "Identique",
        "Légèrement réduite",
        "Environ doublée",
        "Divisée par deux",
      ],
      correctOption: "Environ doublée",
    },

    {
      id: "code-distances-q11",
      type: "true-false",
      question: "La distance de sécurité doit être d'au moins 2 secondes.",
      correctAnswer: true,
    },

    {
      id: "code-distances-q12",
      type: "true-false",
      question:
        "La distance d'arrêt dépend notamment de la vitesse, du temps de réaction et de l'adhérence.",
      correctAnswer: true,
    },

    {
      id: "code-distances-q13",
      type: "true-false",
      question: "Le temps de réaction moyen est d'environ une seconde.",
      correctAnswer: true,
    },

    {
      id: "code-distances-q14",
      type: "true-false",
      question:
        "La distance de sécurité est toujours suffisante pour s'arrêter complètement avant le véhicule qui précède.",
      correctAnswer: false,
      explanation:
        "Le véhicule devant possède lui aussi une distance d'arrêt et continue à avancer pendant son freinage.",
    },

    {
      id: "code-distances-q15",
      type: "multiple-choice",
      question: "Quels éléments influencent la distance d'arrêt ?",
      options: [
        "La vitesse",
        "Le temps de réaction",
        "L'adhérence de la chaussée",
        "La couleur du véhicule",
      ],
      correctOptions: [
        "La vitesse",
        "Le temps de réaction",
        "L'adhérence de la chaussée",
      ],
    },

    {
      id: "code-distances-q16",
      type: "multiple-choice",
      question:
        "Dans quelles situations faut-il augmenter les distances de sécurité ?",
      options: ["Pluie", "Verglas", "Fatigue", "Bonne visibilité"],
      correctOptions: ["Pluie", "Verglas", "Fatigue"],
    },
  ],
}
