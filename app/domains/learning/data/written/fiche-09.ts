import type { Lesson } from "../../types/learning"

export const fiche09: Lesson = {
  id: "fiche-09",

  title: "Fiche 9",

  contentType: "questions",

  questions: [
    {
      id: "f9-q1",

      type: "text",

      question:
        "Le circuit électrique alimentant les feux de détresse est-il indépendant du circuit alimentant le coupe-batterie ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Les feux de détresse doivent pouvoir fonctionner même après l'actionnement du coupe-batterie.",

      tags: ["electricite", "securite", "feux"],
    },

    {
      id: "f9-q2",

      type: "text",

      question:
        "Quand le repos journalier est fractionné, quelle doit être la durée minimale totale de ce repos ?",

      canonicalAnswer: "12 h ou 12 heures",

      acceptedAnswers: ["12 h", "12h", "12 heures", "douze heures"],

      explanation:
        "Le repos journalier fractionné doit totaliser au minimum 12 heures.",

      tags: ["temps-de-repos", "reglementation-sociale"],
    },

    {
      id: "f9-q3",

      type: "text",

      question:
        "Le recreusage des pneumatiques est-il une opération qui peut s'effectuer uniquement par un spécialiste ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le recreusage des pneumatiques est une opération technique qui doit être réalisée par un professionnel qualifié.",

      tags: ["pneumatiques", "maintenance"],
    },

    {
      id: "f9-q4",

      type: "text",

      question:
        "Sur le périphérique parisien, les cars peuvent circuler à 90 km/h. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "La vitesse maximale autorisée sur le périphérique parisien est inférieure à 90 km/h.",

      tags: ["vitesses", "circulation"],
    },

    {
      id: "f9-q5",

      type: "text",

      question:
        "Quel est le PTAC maximal d'un véhicule isolé de transport en commun comportant 3 essieux ?",

      canonicalAnswer: "26 t",

      acceptedAnswers: ["26 t", "26t", "26 tonnes", "vingt-six tonnes"],

      tags: ["ptac", "masses", "vehicule"],
    },

    {
      id: "f9-q6",

      type: "text",

      question:
        "Une boîte de premiers secours est-elle obligatoire dans un autocar ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["securite", "equipements", "premiers-secours"],
    },

    {
      id: "f9-q7",

      type: "image",

      question:
        "Cette signalisation de présignalisation peut annoncer une barrière de dégel : vrai ou faux ?",

      image: "/images/traffic-signs/deviation_poids_lourd.png",

      imageAlt: "Panneau de déviation pour les véhicules de plus de 12 tonnes",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Une déviation spécifique aux véhicules lourds peut être mise en place lors d'une barrière de dégel.",

      tags: ["signalisation", "degel", "circulation"],
    },

    {
      id: "f9-q8",

      type: "text",

      question:
        "Un conducteur effectuant un transport international régulier de personnes peut-il conduire 7 périodes consécutives (1 période = 24 h) entre 2 repos hebdomadaires ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["temps-de-conduite", "transport-international"],
    },

    {
      id: "f9-q9",

      type: "text",

      question:
        "Quelle est la catégorie du permis exigée pour conduire un véhicule de transport en commun articulé comportant 60 places ?",

      canonicalAnswer: "D ou Le permis D",

      acceptedAnswers: [
        "D",
        "permis D",
        "le permis D",
        "catégorie D",
        "categorie D",
      ],

      explanation:
        "La conduite d'un véhicule de transport en commun articulé de cette capacité nécessite le permis D.",

      tags: ["permis", "transport-en-commun"],
    },

    {
      id: "f9-q10",

      type: "text",

      question:
        "Peut-il y avoir des voyageurs debout à l'étage supérieur d'un autocar à étages ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["voyageurs", "autocar", "securite"],
    },
  ],
}
