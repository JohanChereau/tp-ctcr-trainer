import type { Lesson } from "../../types/learning"

export const theme01: Lesson = {
  id: "theme-01",

  title: "Thème 1 - Documents de bord, triangle et extincteur",

  contentType: "markdown",

  video: {
    provider: "vimeo",
    videoId: "395399562",
    hash: "383d21c8dd",
    start: "5m09s",
  },

  markdown: `
# Thème 1 - Documents de bord, triangle et extincteur

Ce thème consiste à présenter les documents obligatoires et les principaux équipements de sécurité présents à bord du véhicule.

---

# 1. Pochette des documents de bord

Présenter la pochette des documents de bord puis vérifier les éléments suivants :

## Certificat d'immatriculation

Vérifier que :

- Le certificat d'immatriculation est présent.
- Il correspond bien au véhicule grâce à la plaque d'immatriculation.
- Le contrôle technique est en cours de validité.

## Certificat d'assurance

Vérifier que :

- Le certificat d'assurance est présent.
- Il correspond bien au véhicule.
- Il est en cours de validité.

## Autres documents

Vérifier la présence des documents suivants :

- Carte routière de la région ou du secteur d'examen.
- Constat Amiable Européen.
- Manuel d'utilisation du véhicule.

---

# 2. Équipements de sécurité

## Triangle de présignalisation

Présenter le triangle de présignalisation.

⚠️ Retirer le capuchon afin de montrer que le triangle est bien présent dans son logement.

## Éthylotest antidémarrage électronique

Vérifier la présence de l'éthylotest antidémarrage électronique (EAD).

## Gilet de haute visibilité

Le candidat porte son gilet de haute visibilité avant le début de l'épreuve.

⚠️ Il n'est donc généralement pas nécessaire de le présenter.

## Extincteur

Présenter l'extincteur.

L'inspecteur peut également demander de vérifier sa date de validité.
`,
  questions: [
    {
      id: "theme01-q01",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être vérifiés sur le certificat d'immatriculation ?",

      options: [
        "Sa présence",
        "La correspondance avec la plaque d'immatriculation",
        "La validité du contrôle technique",
        "Le niveau de carburant",
      ],

      correctOptions: [
        "Sa présence",
        "La correspondance avec la plaque d'immatriculation",
        "La validité du contrôle technique",
      ],
    },

    {
      id: "theme01-q02",

      type: "yes-no",

      question:
        "Le certificat d'assurance doit-il correspondre au véhicule présenté ?",

      correctAnswer: true,
    },

    {
      id: "theme01-q03",

      type: "multiple-choice",

      question:
        "Quels documents doivent être présents dans la pochette des documents de bord ?",

      options: [
        "Carte routière",
        "Constat Amiable Européen",
        "Manuel d'utilisation",
        "Carnet d'entretien",
      ],

      correctOptions: [
        "Carte routière",
        "Constat Amiable Européen",
        "Manuel d'utilisation",
      ],
    },

    {
      id: "theme01-q04",

      type: "true-false",

      question:
        "Pour présenter le triangle de présignalisation, il est conseillé de retirer le capuchon afin de montrer qu'il est bien présent.",

      correctAnswer: true,
    },

    {
      id: "theme01-q05",

      type: "yes-no",

      question:
        "L'éthylotest antidémarrage électronique doit-il être présent dans le véhicule ?",

      correctAnswer: true,
    },

    {
      id: "theme01-q06",

      type: "true-false",

      question:
        "Le candidat doit obligatoirement présenter le gilet de haute visibilité au jury.",

      correctAnswer: false,
    },

    {
      id: "theme01-q07",

      type: "yes-no",

      question:
        "L'inspecteur peut-il demander la date de validité de l'extincteur ?",

      correctAnswer: true,
    },

    {
      id: "theme01-q08",

      type: "multiple-choice",

      question: "Quels équipements de sécurité sont concernés par ce thème ?",

      options: [
        "Triangle de présignalisation",
        "Éthylotest antidémarrage électronique",
        "Extincteur",
        "Cales de roues",
      ],

      correctOptions: [
        "Triangle de présignalisation",
        "Éthylotest antidémarrage électronique",
        "Extincteur",
      ],
    },

    {
      id: "theme01-q09",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être vérifiés sur le certificat d'assurance ?",

      options: [
        "Sa présence",
        "Sa correspondance avec le véhicule",
        "Sa validité",
        "Le contrôle technique",
      ],

      correctOptions: [
        "Sa présence",
        "Sa correspondance avec le véhicule",
        "Sa validité",
      ],
    },

    {
      id: "theme01-q10",

      type: "true-false",

      question: "Le contrôle technique doit être en cours de validité.",

      correctAnswer: true,
    },
  ],
}
