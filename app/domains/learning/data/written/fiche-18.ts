import type { Lesson } from "../../types/learning"

export const fiche18: Lesson = {
  id: "fiche-18",

  title: "Fiche 18",

  contentType: "questions",

  questions: [
    {
      id: "f18-q1",

      type: "text",

      question:
        "Sur quelles roues jumelées d'un essieu moteur doit-on monter obligatoirement les pneus à crampons : roues intérieures ou roues extérieures ?",

      canonicalAnswer: "Roues intérieures",

      acceptedAnswers: [
        "roues intérieures",
        "roues interieures",
        "intérieures",
        "interieures",
      ],

      tags: ["pneumatiques"],
    },

    {
      id: "f18-q2",

      type: "text",

      question:
        "Vous vous arrêtez pour faire le plein de carburant. Sur quel symbole devez-vous positionner le sélecteur d'activité du chronotachygraphe ?",

      canonicalAnswer: "Autres tâches ou Marteaux",

      acceptedAnswers: [
        "autres tâches",
        "autres taches",
        "marteaux",
        "symbole marteaux",
      ],

      explanation:
        "Le ravitaillement en carburant est enregistré comme une activité autre que la conduite ou le repos.",

      tags: ["chronotachygraphe"],
    },

    {
      id: "f18-q3",

      type: "text",

      question:
        "Qu'aspire le moteur diesel lors du premier temps appelé « admission » ?",

      canonicalAnswer: "De l'air",

      acceptedAnswers: ["de l'air", "air"],

      tags: ["mécanique", "moteur"],
    },

    {
      id: "f18-q4",

      type: "image",

      question:
        "Le poids indiqué dans ce signal concerne-t-il le poids maximal autorisé que peut supporter l'essieu ?",

      image: "/images/traffic-signs/2_5t_essieu.png",

      imageAlt: "Signal de limitation de charge par essieu à 2,5 tonnes",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Ce panneau indique une limitation de charge par essieu et non le poids total du véhicule.",

      tags: ["signalisation", "essieu"],
    },

    {
      id: "f18-q5",

      type: "text",

      question:
        "Comment appelle-t-on un véhicule de transport en commun ne comportant que des places assises ?",

      canonicalAnswer: "Autocar",

      acceptedAnswers: ["autocar"],

      tags: ["transport-de-personnes"],
    },

    {
      id: "f18-q6",

      type: "text",

      question:
        "L'attestation d'aménagement doit obligatoirement être à bord du véhicule neuf que vous conduisez. Vrai ou faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["documents"],
    },

    {
      id: "f18-q7",

      type: "text",

      question:
        "Vous avez interrompu votre conduite pendant 45 minutes. Ce temps peut-il être pris en compte pour le calcul du temps de repos journalier ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Une pause de conduite ne constitue pas un repos journalier.",

      tags: ["rse", "temps-de-repos"],
    },

    {
      id: "f18-q8",

      type: "text",

      question:
        "Vous conduisez un véhicule affecté au transport d'enfants. Lors de la montée et de la descente des enfants, est-il obligatoire de mettre les feux de détresse ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["transport-enfants", "sécurité"],
    },

    {
      id: "f18-q9",

      type: "text",

      question:
        "Âgé de 24 ans, vous venez d'obtenir le permis D et la FIMO voyageur. Pouvez-vous effectuer un trajet Paris - Brest ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "À 24 ans avec le permis D et la FIMO voyageurs, vous pouvez effectuer ce type de trajet sans restriction particulière.",

      tags: ["permis-d", "fimo"],
    },

    {
      id: "f18-q10",

      type: "text",

      question:
        "En cas d'accident, pouvez-vous demander le témoignage d'un passager de votre autobus ou votre autocar ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["accident", "constat"],
    },
  ],
}
