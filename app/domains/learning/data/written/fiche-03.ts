import type { Lesson } from "../../types/learning"

export const fiche03: Lesson = {
  id: "fiche-03",

  title: "Fiche 3",

  contentType: "questions",

  questions: [
    {
      id: "fep3-q1",

      type: "text",

      question:
        "Le principal avantage du système de freinage antibloquant est-il de réduire les distances de freinage ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "L'avantage principal de l'ABS est de conserver la maîtrise de la trajectoire et la capacité de diriger le véhicule lors d'un freinage d'urgence.",

      tags: ["freinage", "abs", "securite"],
    },

    {
      id: "fep3-q2",

      type: "text",

      question:
        "Sauf cas d'urgence, quelle est la durée de conduite maximale journalière autorisée en tenant compte des dérogations possibles ?",

      canonicalAnswer: "10 h ou 10 heures",

      acceptedAnswers: ["10 h", "10h", "10 heures", "dix heures"],

      tags: ["temps-de-conduite", "reglementation-sociale"],
    },

    {
      id: "fep3-q3",

      type: "text",

      question:
        "Généralement, en rase campagne, dans un véhicule de transport en commun d'enfants, ceux-ci peuvent-ils voyager debout ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["transport-enfants", "securite-passagers"],
    },

    {
      id: "fep3-q4",

      type: "text",

      question:
        "Tous les pays de l'Union européenne ont adopté les mêmes limitations de vitesse pour les poids lourds. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Les limitations de vitesse applicables aux poids lourds varient selon les pays de l'Union européenne.",

      tags: ["vitesses", "europe", "reglementation"],
    },

    {
      id: "fep3-q5",

      type: "text",

      question:
        "Votre véhicule (isolé) de transport en commun comporte 2 essieux. Quelle peut être sa longueur maximale ?",

      canonicalAnswer: "13,50 m",

      acceptedAnswers: [
        "13,50 m",
        "13.50 m",
        "13,5 m",
        "13.5 m",
        "13,50 mètres",
        "13,5 mètres",
      ],

      tags: ["dimensions", "vehicule"],
    },

    {
      id: "fep3-q6",

      type: "text",

      question:
        "Quelle est la périodicité des visites techniques auxquelles sont soumis les véhicules de transport en commun ?",

      canonicalAnswer: "6 mois",

      acceptedAnswers: ["6 mois", "six mois"],

      explanation:
        "Les véhicules de transport en commun sont soumis à une visite technique périodique tous les 6 mois.",

      tags: ["controle-technique", "reglementation"],
    },

    {
      id: "fep3-q7",

      type: "text",

      question:
        "Une huile multigrade classée SAE 20 W 40 peut-elle être utilisée uniquement en hiver ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Une huile multigrade est conçue pour être utilisée dans différentes conditions de température et n'est pas réservée à l'hiver.",

      tags: ["mecanique", "lubrification"],
    },

    {
      id: "fep3-q8",

      type: "text",

      question:
        "Quel symbole devez-vous afficher sur l'écran du chronotachygraphe numérique pendant que vos passagers s'installent dans le véhicule ?",

      canonicalAnswer: "Autres tâches ou Marteaux",

      acceptedAnswers: [
        "autres tâches",
        "autres taches",
        "marteaux",
        "symbole marteaux",
      ],

      explanation:
        "Pendant l'installation des passagers, l'activité enregistrée correspond aux autres tâches, représentées par le symbole des marteaux croisés.",

      tags: ["chronotachygraphe", "activites"],
    },

    {
      id: "fep3-q9",

      type: "image",

      question:
        "La descente dangereuse annoncée possède-t-elle un dénivelé de 100 mètres pour chaque kilomètre parcouru ?",

      image: "/images/traffic-signs/pente_10_100.png",

      imageAlt: "Panneau annonçant une descente dangereuse de 10 % sur 4,5 km",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Une pente de 10 % correspond à un dénivelé de 10 mètres pour 100 mètres parcourus, soit 100 mètres par kilomètre.",

      tags: ["signalisation", "pentes"],
    },

    {
      id: "fep3-q10",

      type: "text",

      question:
        "Peut-il y avoir des voyageurs debout à l'étage inférieur d'un autobus à étages ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["autobus", "voyageurs", "transport-en-commun"],
    },
  ],
}
