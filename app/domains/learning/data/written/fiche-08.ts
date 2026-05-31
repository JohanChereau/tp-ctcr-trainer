import type { Lesson } from "../../types/learning"

export const fiche08: Lesson = {
  id: "fiche-08",

  title: "Fiche 8",

  contentType: "questions",

  questions: [
    {
      id: "f8-q1",

      type: "text",

      question:
        "Le chronotachygraphe numérique de votre véhicule tombe en panne. Devez-vous être en mesure de présenter un document justifiant des temps de conduite et de repos ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "En cas de panne du chronotachygraphe, le conducteur doit pouvoir justifier ses temps de conduite, de repos et ses autres activités.",

      tags: ["chronotachygraphe", "reglementation-sociale"],
    },

    {
      id: "f8-q2",

      type: "text",

      question:
        "En règle générale, quelle est la durée minimale normale (non réduite) obligatoire de repos journalier lorsque celui-ci n'est pas fractionné ?",

      canonicalAnswer: "11 h",

      acceptedAnswers: ["11 h", "11h", "11 heures", "onze heures"],

      explanation:
        "Le repos journalier normal est de 11 heures consécutives lorsqu'il n'est pas fractionné.",

      tags: ["temps-de-repos", "reglementation-sociale"],
    },

    {
      id: "f8-q3",

      type: "text",

      question:
        "Circuler avec un seul pneu lisse ou détérioré n'entraîne pas de contravention si le véhicule possède une roue de secours en bon état. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "La présence d'une roue de secours n'autorise pas la circulation avec un pneu lisse ou détérioré.",

      tags: ["pneumatiques", "infractions", "securite"],
    },

    {
      id: "f8-q4",

      type: "text",

      question:
        "Quelle(s) limitation(s) de vitesse est/sont signalée(s) à l'arrière d'un autobus (en exploitation) de 18 t de PTAC ?",

      canonicalAnswer: "70 km/h ou 70",

      acceptedAnswers: ["70 km/h", "70 kmh", "70 kilomètres par heure", "70"],

      tags: ["vitesses", "autobus"],
    },

    {
      id: "f8-q5",

      type: "text",

      question:
        "Quelle charge maximale autorisée peut supporter un essieu isolé ?",

      canonicalAnswer: "13 t",

      acceptedAnswers: ["13 t", "13t", "13 tonnes", "treize tonnes"],

      tags: ["masses", "essieu"],
    },

    {
      id: "f8-q6",

      type: "text",

      question:
        "La date limite de validité de la dernière visite technique est-elle inscrite sur le certificat d'immatriculation du véhicule ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["controle-technique", "documents"],
    },

    {
      id: "f8-q7",

      type: "text",

      question:
        "Quel symbole devez-vous afficher sur l'écran du chronotachygraphe numérique lorsque vous nettoyez votre véhicule ?",

      canonicalAnswer: "Autres tâches ou Marteaux",

      acceptedAnswers: [
        "autres tâches",
        "autres taches",
        "marteaux",
        "symbole marteaux",
      ],

      explanation:
        "Le nettoyage du véhicule correspond à une activité de travail autre que la conduite. Le symbole associé est celui des marteaux croisés.",

      tags: ["chronotachygraphe", "activites"],
    },

    {
      id: "f8-q8",

      type: "text",

      question:
        "Lorsque le conducteur serre le frein de parc, le cylindre de frein à ressort se remplit d'air. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Lorsque le frein de parc est serré, les ressorts appliquent le freinage. Le cylindre ne se remplit pas d'air pour freiner.",

      tags: ["freinage", "frein-de-parc", "mecanique"],
    },

    {
      id: "f8-q9",

      type: "image",

      question:
        "Je circule, à vide, avec un véhicule de 5 tonnes de poids à vide et de 15 tonnes de PTAC. À hauteur de ce signal, puis-je passer ?",

      image: "/images/traffic-signs/interdiction_5_5t.png",

      imageAlt:
        "Panneau d'interdiction aux véhicules dont le PTAC dépasse 5,5 tonnes",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "La limitation concerne le PTAC du véhicule et non son poids réel au moment du passage.",

      tags: ["signalisation", "ptac", "masses"],
    },

    {
      id: "f8-q10",

      type: "text",

      question:
        "Quand je circule en Espagne, quel numéro de téléphone est-il conseillé d'utiliser pour appeler les secours à partir d'un portable ?",

      canonicalAnswer: "112",

      acceptedAnswers: ["112"],

      explanation:
        "Le 112 est le numéro d'urgence européen utilisable dans l'ensemble des pays de l'Union européenne.",

      tags: ["urgence", "europe", "securite"],
    },
  ],
}
