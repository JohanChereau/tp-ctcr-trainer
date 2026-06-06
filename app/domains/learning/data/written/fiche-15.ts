import type { Lesson } from "../../types/learning"

export const fiche15: Lesson = {
  id: "fiche-15",

  title: "Fiche 15",

  contentType: "questions",

  questions: [
    {
      id: "fep15-q1",

      type: "text",

      question:
        "Dans un autocar neuf, les passagers doivent-ils obligatoirement attacher la ceinture de sécurité ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Lorsque les ceintures sont installées, les passagers doivent les utiliser.",

      tags: ["sécurité", "ceinture"],
    },

    {
      id: "fep15-q2",

      type: "text",

      question:
        "Ce signal interdit le dépassement à tous les véhicules dont le PTAC est supérieur à 3,5 tonnes ?",

      image: "/images/traffic-signs/poids_lourd_interdiction_depasser.png",

      imageAlt: "Interdiction de dépassement pour les poids lourds",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Le panneau concerne certains véhicules lourds mais ne s'applique pas à tous les véhicules de plus de 3,5 tonnes dans cette formulation.",

      tags: ["signalisation", "dépassement"],
    },

    {
      id: "fep15-q3",

      type: "text",

      question:
        "Les filtres à carburant ou filtres principaux sont situés entre la pompe d'alimentation et la pompe d'injection haute pression. Vrai ou faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["mécanique", "carburant"],
    },

    {
      id: "fep15-q4",

      type: "text",

      question:
        "Par temps de brouillard sur autoroute, si la visibilité est inférieure à 50 m, quelle est la vitesse maximale autorisée ?",

      canonicalAnswer: "50 km/h",

      acceptedAnswers: ["50 km/h", "50km/h", "50"],

      explanation:
        "Lorsque la visibilité est inférieure à 50 mètres, la vitesse maximale est limitée à 50 km/h.",

      tags: ["vitesse", "brouillard"],
    },

    {
      id: "fep15-q5",

      type: "text",

      question:
        "Dans la définition du poids à vide, les différents réservoirs sont-ils remplis ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["poids", "véhicule"],
    },

    {
      id: "fep15-q6",

      type: "text",

      question:
        "L'expression « transport en commun d'enfants » désigne le transport de personnes dont l'âge est inférieur à ?",

      canonicalAnswer: "18 ans",

      acceptedAnswers: ["18 ans", "18", "dix-huit ans"],

      tags: ["transport-enfants"],
    },

    {
      id: "fep15-q7",

      type: "text",

      question:
        "Un conducteur peut-il demander une copie papier des données numériques, liées à son activité, qui sont conservées dans l'entreprise ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["chronotachygraphe", "rse"],
    },

    {
      id: "fep15-q8",

      type: "text",

      question:
        "Au bout de combien de jours, au maximum, l'entreprise doit-elle télécharger les données de votre carte conducteur ?",

      canonicalAnswer: "28 ou 28 jours",

      acceptedAnswers: ["28 jours", "28", "vingt-huit jours"],

      explanation:
        "Les données de la carte conducteur doivent être téléchargées au moins tous les 28 jours.",

      tags: ["chronotachygraphe", "carte-conducteur"],
    },

    {
      id: "fep15-q9",

      type: "text",

      question:
        "Âgé de 24 ans, vous venez d'obtenir le permis D et la FIMO voyageur. Avez-vous une restriction de distance maximale de ligne régulière sur laquelle vous êtes autorisé à conduire un autocar de 45 places ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "À 24 ans avec le permis D et la FIMO voyageurs, aucune restriction de distance de ligne régulière ne s'applique.",

      tags: ["permis-d", "fimo"],
    },

    {
      id: "fep15-q10",

      type: "text",

      question:
        "Citez un type d'extincteur couramment utilisé pour éteindre une voiture en flamme.",

      canonicalAnswer: "Poudre ou Mousse ou CO₂",

      acceptedAnswers: [
        "poudre",
        "extincteur à poudre",
        "mousse",
        "extincteur à mousse",
        "co2",
        "CO2",
        "dioxyde de carbone",
      ],

      explanation:
        "Les extincteurs à poudre, à mousse ou au CO₂ sont couramment utilisés sur les feux de véhicules.",

      tags: ["incendie", "extincteur"],
    },
  ],
}
