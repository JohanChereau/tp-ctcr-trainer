import type { Lesson } from "../../types/learning"

export const fiche10: Lesson = {
  id: "oral-10",

  title: "Fiche orale 10 - Porte-à-faux, angles morts",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "r1DmThMwh_g",
  },

  markdown: `
# Porte-à-faux et angles morts

## Plan

### Porte-à-faux

* Connaissance du véhicule
* Situations particulières
* Dangers
* Précautions

### Angles morts

* Connaissance du véhicule
* Situations particulières
* Dangers
* Précautions

---

# Porte-à-faux

## Connaissance du véhicule

Un porte-à-faux correspond à la partie du véhicule située au-delà d'un essieu.

On distingue :

### Porte-à-faux avant

Distance entre l'axe de la roue avant et l'avant du véhicule.

### Porte-à-faux arrière

Distance entre l'axe de la roue arrière et l'arrière du véhicule.

En raison des dimensions importantes des véhicules lourds, les porte-à-faux peuvent provoquer des déports importants lors des changements de direction.

---

## Situations particulières

Je dois être particulièrement vigilant :

* lors des virages serrés ;
* lorsque je tourne à droite ;
* lorsque je tourne à gauche ;
* lors des manœuvres ;
* dans les passages étroits.

---

## Dangers

Les principaux risques sont :

* l'accrochage avec un véhicule ;
* l'accrochage avec un obstacle ;
* le renversement d'un piéton ;
* le renversement d'un cycliste ou d'un deux-roues.

---

## Précautions

Pour limiter les risques :

* je surveille l'avant et l'arrière du véhicule avant de tourner ;
* j'utilise efficacement tous les rétroviseurs ;
* j'anticipe mes placements et mes trajectoires ;
* lors des manœuvres délicates, je peux descendre voir ou me faire guider.

---

# Angles morts

## Connaissance du véhicule

  ![Angles morts](/images/lesson-content/angles_morts.jpg)

Les angles morts correspondent aux zones que le conducteur ne peut pas voir directement ou à l'aide des rétroviseurs.

Ils sont particulièrement importants sur les véhicules lourds en raison de leur gabarit.

Les angles morts peuvent se situer :

* à l'avant ;
* à l'arrière ;
* sur les côtés du véhicule.

Le conducteur doit en permanence être conscient de leur présence.

---

## Situations particulières

Les angles morts posent principalement problème :

* lors des dépassements ;
* lors des rabattements ;
* lors des changements de direction ;
* lors des manœuvres.

---

## Dangers

Les angles morts peuvent provoquer :

* des collisions à l'avant ;
* des collisions à l'arrière ;
* des collisions sur les côtés.

Une attention particulière doit être portée aux :

* piétons ;
* cyclistes ;
* utilisateurs de deux-roues.

La vigilance est particulièrement importante lors des arrêts et en circulation urbaine.

---

## Précautions

Pour réduire les risques liés aux angles morts :

* j'utilise tous les rétroviseurs à ma disposition ;
* je contrôle régulièrement mon environnement ;
* en cas de doute, je descends voir ou je me fais guider lors des manœuvres.

Selon l'équipement du véhicule, je peux disposer :

* d'un rétroviseur principal ;
* d'un rétroviseur grand angle ;
* d'un rétroviseur d'accostage ;
* de caméras de recul.

Ces équipements permettent de réduire les zones non visibles, mais ne suppriment jamais totalement les angles morts.

`,

  questions: [
    {
      id: "fop10-q01",

      type: "single-choice",

      question: "Le porte-à-faux avant correspond à la distance entre :",

      options: [
        "L'axe de la roue avant et l'avant du véhicule",
        "L'axe de la roue arrière et l'arrière du véhicule",
        "Les deux essieux",
        "Le pare-brise et le moteur",
      ],

      correctOption: "L'axe de la roue avant et l'avant du véhicule",
    },

    {
      id: "fop10-q02",

      type: "single-choice",

      question: "Le porte-à-faux arrière correspond à la distance entre :",

      options: [
        "L'axe de la roue arrière et l'arrière du véhicule",
        "L'axe de la roue avant et l'avant du véhicule",
        "Les deux essieux",
        "Le conducteur et l'arrière du véhicule",
      ],

      correctOption: "L'axe de la roue arrière et l'arrière du véhicule",
    },

    {
      id: "fop10-q03",

      type: "multiple-choice",

      question:
        "Dans quelles situations faut-il être particulièrement vigilant avec les porte-à-faux ?",

      options: [
        "Virages serrés",
        "Manœuvres",
        "Passages étroits",
        "Conduite en ligne droite",
      ],

      correctOptions: ["Virages serrés", "Manœuvres", "Passages étroits"],
    },

    {
      id: "fop10-q04",

      type: "true-false",

      question:
        "Les porte-à-faux peuvent provoquer un accrochage avec un obstacle ou un véhicule.",

      correctAnswer: true,
    },

    {
      id: "fop10-q05",

      type: "multiple-choice",

      question:
        "Quels usagers sont particulièrement exposés aux risques liés aux porte-à-faux ?",

      options: ["Piétons", "Cyclistes", "Deux-roues", "Conducteurs de train"],

      correctOptions: ["Piétons", "Cyclistes", "Deux-roues"],
    },

    {
      id: "fop10-q06",

      type: "multiple-choice",

      question:
        "Quelles précautions permettent de limiter les risques liés aux porte-à-faux ?",

      options: [
        "Utiliser les rétroviseurs",
        "Anticiper les trajectoires",
        "Descendre voir si nécessaire",
        "Accélérer pour réduire le temps de manœuvre",
      ],

      correctOptions: [
        "Utiliser les rétroviseurs",
        "Anticiper les trajectoires",
        "Descendre voir si nécessaire",
      ],
    },

    {
      id: "fop10-q07",

      type: "yes-no",

      question:
        "Lors d'une manœuvre délicate, il est possible de se faire guider.",

      correctAnswer: true,
    },

    {
      id: "fop10-q08",

      type: "single-choice",

      question: "Que représente un angle mort ?",

      options: [
        "Une zone que le conducteur ne peut pas voir",
        "Une zone interdite à la circulation",
        "Une zone réservée aux piétons",
        "Une zone éclairée par les phares",
      ],

      correctOption: "Une zone que le conducteur ne peut pas voir",
    },

    {
      id: "fop10-q09",

      type: "multiple-choice",

      question: "Où peuvent se situer les angles morts d'un véhicule lourd ?",

      options: [
        "À l'avant",
        "À l'arrière",
        "Sur les côtés",
        "Uniquement derrière",
      ],

      correctOptions: ["À l'avant", "À l'arrière", "Sur les côtés"],
    },

    {
      id: "fop10-q10",

      type: "true-false",

      question:
        "Les angles morts sont plus importants sur les véhicules lourds en raison de leur gabarit.",

      correctAnswer: true,
    },

    {
      id: "fop10-q11",

      type: "multiple-choice",

      question:
        "Dans quelles situations les angles morts peuvent-ils poser problème ?",

      options: [
        "Dépassement",
        "Rabattement",
        "Changement de direction",
        "Stationnement du véhicule au dépôt",
      ],

      correctOptions: ["Dépassement", "Rabattement", "Changement de direction"],
    },

    {
      id: "fop10-q12",

      type: "multiple-choice",

      question: "Quels risques sont liés aux angles morts ?",

      options: [
        "Collision à l'avant",
        "Collision à l'arrière",
        "Collision sur les côtés",
        "Crevaison",
      ],

      correctOptions: [
        "Collision à l'avant",
        "Collision à l'arrière",
        "Collision sur les côtés",
      ],
    },

    {
      id: "fop10-q13",

      type: "multiple-choice",

      question:
        "Quels usagers nécessitent une vigilance particulière vis-à-vis des angles morts ?",

      options: [
        "Piétons",
        "Cyclistes",
        "Deux-roues",
        "Conducteurs de poids lourds uniquement",
      ],

      correctOptions: ["Piétons", "Cyclistes", "Deux-roues"],
    },

    {
      id: "fop10-q14",

      type: "single-choice",

      question:
        "Quel rétroviseur permet notamment de réduire les angles morts proches du véhicule ?",

      options: [
        "Le rétroviseur d'accostage",
        "Le pare-soleil",
        "Le rétroviseur intérieur",
        "Le compteur",
      ],

      correctOption: "Le rétroviseur d'accostage",
    },

    {
      id: "fop10-q15",

      type: "true-false",

      question:
        "Les caméras de recul peuvent aider à réduire les zones non visibles.",

      correctAnswer: true,
    },

    {
      id: "fop10-q16",

      type: "yes-no",

      question: "Les rétroviseurs suppriment totalement les angles morts.",

      correctAnswer: false,
    },

    {
      id: "fop10-q17",

      type: "text",

      question:
        "Comment appelle-t-on les zones que le conducteur ne peut pas voir directement ou dans les rétroviseurs ?",

      canonicalAnswer: "Les angles morts",

      acceptedAnswers: [
        "angles morts",
        "les angles morts",
        "angle mort",
        "les angle morts",
      ],
    },

    {
      id: "fop10-q18",

      type: "text",

      question: "Que faut-il faire en cas de doute lors d'une manœuvre ?",

      canonicalAnswer: "Descendre voir ou se faire guider",

      acceptedAnswers: [
        "descendre voir",
        "se faire guider",
        "descendre voir ou se faire guider",
        "voir ou se faire guider",
      ],
    },

    {
      id: "fop10-q19",

      type: "single-choice",

      question:
        "Pourquoi les angles morts sont-ils particulièrement importants sur les véhicules lourds ?",

      options: [
        "À cause de leur gabarit",
        "À cause de leur couleur",
        "À cause de leur puissance moteur",
        "À cause de leur consommation",
      ],

      correctOption: "À cause de leur gabarit",
    },

    {
      id: "fop10-q20",

      type: "multiple-choice",

      question:
        "Quels équipements peuvent aider le conducteur à surveiller son environnement ?",

      options: [
        "Rétroviseur principal",
        "Rétroviseur grand angle",
        "Rétroviseur d'accostage",
        "Caméra de recul",
      ],

      correctOptions: [
        "Rétroviseur principal",
        "Rétroviseur grand angle",
        "Rétroviseur d'accostage",
        "Caméra de recul",
      ],
    },
  ],
}
