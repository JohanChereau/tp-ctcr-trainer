import type { Lesson } from "../../types/learning"

export const brakeCheckLesson: Lesson = {
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

Le socle 2 consiste à préparer le véhicule avant les manœuvres en réalisant la mise en marche, l'installation au poste de conduite et les essais de frein.

## 1. Mise en marche du moteur

- Mettre le contact.
- Attendre l'extinction des voyants.
- Démarrer le moteur en contrôlant les rétroviseurs.

> **J'annonce :**
>
> « Pas d'anomalie au démarrage.
>
> Au tableau de bord, seul le témoin du frein de parc est resté allumé. »

## 2. Installation au poste de conduite

Régler successivement :

- Le siège.
- Le volant.
- Les rétroviseurs.

> ⚠️ Respecter impérativement cet ordre de réglage.

## 3. Contrôle de l'ouverture et de la fermeture des portes

- Ouvrir les portes.
- Refermer les portes.

> **J'annonce :**
>
> « Pas d'anomalie liée à l'ouverture et à la fermeture des portes.
>
> Pas de voyant d'alerte allumé.
>
> Ma pression d'air est suffisante pour réaliser les essais de frein. *(Pression suffisante : entre 8 et 12 bar.)*
>
> Nous allons maintenant réaliser les essais de frein en commençant par le frein de parc. »

## 4. Essai du frein de parc

- Sélectionner la position **D**.
- Accélérer légèrement jusqu'à atteindre le début de la zone verte du compte-tours.
- Relâcher l'accélérateur.

> **J'annonce :**
>
> « Bonne retenue du frein de parc. »

- Desserrer progressivement le frein de parc.
- Maintenir le véhicule immobilisé avec le **frein d'arrêt (H)**.
- Lorsque le témoin **H** est affiché au tableau de bord, relâcher les commandes.

> **J'annonce :**
>
> « Pas de baisse de pression anormale.
>
> Pas de voyant d'alerte allumé.
>
> L'essai du frein de parc est concluant.
>
> Nous allons maintenant passer à l'essai du frein de service. »

## 5. Essai du frein de service

- Accélérer légèrement afin de mettre le véhicule en mouvement.
- Freiner.
- Maintenir le pied sur la pédale de frein.

> **J'annonce :**
>
> « Bonne retenue du frein de service.
>
> Pas de baisse de pression anormale.
>
> Pas de voyant d'alerte allumé.
>
> L'essai du frein de service est concluant. »

- Sélectionner la position **N** (Neutre).
- Serrer le frein de parc.
- Retirer le pied de la pédale de frein.

## 6. Fin du socle 2

> **J'annonce :**
>
> « Fin des essais de frein.
>
> Fin du socle 2. »
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
