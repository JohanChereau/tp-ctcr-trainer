import type { Lesson } from "../../types/learning"

export const fiche01: Lesson = {
  id: "fiche-01",

  title: "Fiche 1",

  contentType: "questions",

  questions: [
    {
      id: "fep1-q1",

      type: "text",

      question:
        "Quelle est la périodicité des vérifications techniques obligatoires pour les chronotachygraphes ?",

      canonicalAnswer: "2 ans",

      acceptedAnswers: ["2 ans", "deux ans", "2ans"],

      explanation:
        "Les chronotachygraphes doivent faire l'objet d'une vérification technique obligatoire tous les 2 ans.",

      tags: ["chronotachygraphe"],
    },

    {
      id: "fep1-q2",

      type: "text",

      question:
        "Combien de périodes consécutives (1 période = 24 h), un conducteur assurant un transport national occasionnel de personnes peut-il conduire ?",

      canonicalAnswer: "6 ou 6 périodes",

      acceptedAnswers: [
        "6 périodes",
        "6 periodes",
        "6 période",
        "6 periode",
        "6",
      ],

      explanation:
        "Un conducteur effectuant un transport national occasionnel de personnes peut conduire pendant 6 périodes consécutives de 24 heures.",

      tags: ["temps-de-conduite", "transport-occasionnel"],
    },

    {
      id: "fep1-q3",

      type: "text",

      question:
        "En règle générale, les véhicules lourds utilisent deux batteries de 12 volts montées en ... ?",

      canonicalAnswer: "série",

      acceptedAnswers: ["série", "serie"],

      explanation:
        "Deux batteries de 12 V montées en série permettent d'obtenir une tension de 24 V.",

      tags: ["electricite", "batteries"],
    },

    {
      id: "fep1-q4",

      type: "text",

      question:
        "Quelle(s) limitation(s) de vitesse est/sont signalée(s) à l'arrière d'un autocar neuf de 26 t de PTAC ?",

      canonicalAnswer: "100 km/h et 90 km/h ou 100-90",

      acceptedAnswers: [
        "100 km/h et 90 km/h",
        "100 kmh et 90 kmh",
        "100 et 90 km/h",
        "100-90",
        "100 - 90",
        "100 km/h - 90 km/h",
        "100km/h - 90km/h",
      ],

      explanation:
        "Un autocar neuf de 26 t de PTAC doit afficher les limitations de vitesse de 100 km/h et 90 km/h.",

      tags: ["vitesses", "autocar"],
    },

    {
      id: "fep1-q5",

      type: "text",

      question:
        "Vous conduisez un autocar comportant un système de climatisation. Quelle peut être sa largeur maximale ?",

      canonicalAnswer: "2,55 m",

      acceptedAnswers: ["2,55 m", "2.55 m", "2,55 mètres", "2.55 mètres"],

      explanation:
        "La largeur maximale autorisée d'un autocar équipé d'un système de climatisation est de 2,55 m.",

      tags: ["dimensions", "autocar"],
    },

    {
      id: "fep1-q6",

      type: "text",

      question:
        "Lors de la visite technique, l'expert vérifie-t-il le fonctionnement de la climatisation ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["controle-technique", "climatisation"],
    },

    {
      id: "fep1-q7",

      type: "text",

      question:
        "Quelle est, en dehors de la conduite de nuit, la durée maximale autorisée de conduite continue pour un conducteur de véhicule de transport en commun ?",

      canonicalAnswer: "4 h 30",

      acceptedAnswers: [
        "4 h 30",
        "4h30",
        "4 h 30 mn",
        "4h30 mn",
        "4 h 30 min",
        "4h30 min",
      ],

      explanation:
        "La durée maximale de conduite continue est de 4 h 30 avant de devoir prendre une interruption réglementaire.",

      tags: ["temps-de-conduite"],
    },

    {
      id: "fep1-q8",

      type: "text",

      question:
        "Cette limitation de vitesse peut-elle concerner les véhicules autres que les trains routiers, trains doubles et véhicules articulés ?",

      image: "/images/traffic-signs/50_remorques.png",

      imageAlt:
        "Panneau de limitation de vitesse à 50 km/h accompagné d'un panonceau",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["signalisation", "vitesses"],
    },

    {
      id: "fep1-q9",

      type: "text",

      question:
        "En France, à partir de quelle quantité d'alcool pur par litre de sang un conducteur de transport en commun encourt-il une sanction ?",

      canonicalAnswer: "0,20 g/l",

      acceptedAnswers: ["0,20 g/l", "0.20 g/l", "0,2 g/l", "0.2 g/l"],

      explanation:
        "Pour les conducteurs de transport en commun, le seuil sanctionnable est fixé à 0,20 g d'alcool par litre de sang.",

      tags: ["alcool", "reglementation"],
    },

    {
      id: "fep1-q10",

      type: "text",

      question:
        "Le signal de détresse peut-il remplacer le triangle de présignalisation pour un véhicule d'un PTAC de plus de 3,5 t ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["signalisation", "securite"],
    },
  ],
}
