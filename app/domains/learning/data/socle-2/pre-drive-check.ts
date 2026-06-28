import type { Lesson } from "../../types/learning"

export const socle201: Lesson = {
  id: "socle2-01",

  title: "Socle 2 - Mise en marche, installation et essai des freins",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "15m03s",
  },

  markdown: `
# Socle 2 - Mise en marche, installation et essai des freins

Le socle 2 consiste à préparer le véhicule avant les manœuvres en réalisant la mise en marche, l'installation au poste de conduite et les essais de freins.

---

# 1. Mise en marche du moteur

Démarrer le moteur.

Après la mise en marche, annoncer les voyants restés allumés et signaler immédiatement toute anomalie.

---

# 2. Installation au poste de conduite

Régler successivement :

- Le siège.
- Le volant.
- Les rétroviseurs.

⚠️ Respecter la chronologie des réglages.

---

# 3. Contrôle de l'ouverture et de la fermeture des portes

Vérifier le bon fonctionnement :

- De l'ouverture des portes.
- De la fermeture des portes.

---

# 4. Essai des freins

## a) Frein de parc

S'assurer et annoncer que la pression d'air dans les réservoirs est suffisante :

- Entre **8 et 10 bars**.

Mettre la première vitesse, embrayer légèrement puis vérifier :

- La bonne retenue du véhicule.

Desserrer ensuite le frein de parc, sans freiner, puis annoncer :

- L'absence de chute d'air anormale.

Conclure par :

> **Essai du frein de parc concluant.**

---

## b) Frein principal

En laissant le frein de parc desserré :

S'assurer et annoncer que la pression d'air dans les réservoirs est suffisante.

Avancer de quelques mètres puis :

- Freiner.
- Maintenir le pied sur la pédale de frein.
- Annoncer la bonne retenue du véhicule.
- Annoncer l'absence de chute d'air anormale (pression suffisante).

Conclure par :

> **Essai du frein principal concluant.**

Puis annoncer :

> **Fin des essais de frein.**

---

# 5. Fin du socle 2

Une fois les essais terminés, annoncer :

> **Fin du socle 2.**
  `,

  questions: [
    {
      id: "socle201-q01",

      type: "multiple-choice",

      question: "Quelles sont les grandes étapes du socle 2 ?",

      options: [
        "Mise en marche du moteur",
        "Installation au poste de conduite",
        "Contrôle des portes",
        "Essai des freins",
        "Manœuvre de marche arrière",
      ],

      correctOptions: [
        "Mise en marche du moteur",
        "Installation au poste de conduite",
        "Contrôle des portes",
        "Essai des freins",
      ],
    },

    {
      id: "socle201-q02",

      type: "true-false",

      question:
        "Après la mise en marche du moteur, il faut annoncer les voyants restés allumés et signaler toute anomalie.",

      correctAnswer: true,
    },

    {
      id: "socle201-q03",

      type: "single-choice",

      question: "Dans quel ordre faut-il régler le poste de conduite ?",

      options: [
        "Siège → Volant → Rétroviseurs",
        "Volant → Siège → Rétroviseurs",
        "Rétroviseurs → Siège → Volant",
        "L'ordre n'a pas d'importance",
      ],

      correctOption: "Siège → Volant → Rétroviseurs",
    },

    {
      id: "socle201-q04",

      type: "yes-no",

      question: "Faut-il contrôler l'ouverture et la fermeture des portes ?",

      correctAnswer: true,
    },

    {
      id: "socle201-q05",

      type: "single-choice",

      question:
        "Entre quelles valeurs la pression d'air dans les réservoirs doit-elle être suffisante ?",

      options: ["4 à 6 bars", "6 à 8 bars", "8 à 10 bars", "10 à 12 bars"],

      correctOption: "8 à 10 bars",
    },

    {
      id: "socle201-q06",

      type: "multiple-choice",

      question: "Lors de l'essai du frein de parc, que faut-il vérifier ?",

      options: [
        "La bonne retenue du véhicule",
        "L'absence de chute d'air anormale",
        "Le niveau de carburant",
        "La pression d'air suffisante",
      ],

      correctOptions: [
        "La bonne retenue du véhicule",
        "L'absence de chute d'air anormale",
        "La pression d'air suffisante",
      ],
    },

    {
      id: "socle201-q07",

      type: "true-false",

      question:
        "Pour l'essai du frein principal, le frein de parc doit être desserré.",

      correctAnswer: true,
    },

    {
      id: "socle201-q08",

      type: "single-choice",

      question: "Que faut-il annoncer à la fin de l'essai du frein principal ?",

      options: [
        "Essai du frein principal concluant",
        "Fin des essais de frein",
        "Les deux réponses",
        "Aucune réponse",
      ],

      correctOption: "Les deux réponses",
    },

    {
      id: "socle201-q09",

      type: "true-false",

      question:
        "Après les essais des freins, il faut annoncer la fin du socle 2.",

      correctAnswer: true,
    },

    {
      id: "socle201-q10",

      type: "true-false",

      question:
        "Lors de l'essai du frein principal, il faut maintenir le pied sur la pédale de frein après l'arrêt.",

      correctAnswer: true,
    },
  ],
}
