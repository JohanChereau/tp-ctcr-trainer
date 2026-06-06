import type { Lesson } from "../../types/learning"

export const fiche04: Lesson = {
  id: "fiche-04",

  title: "Fiche 4",

  contentType: "questions",

  questions: [
    {
      id: "fep4-q1",

      type: "text",

      question:
        "En circulation, le fait de freiner désactive obligatoirement le régulateur de vitesse. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "L'action sur la pédale de frein désactive le régulateur de vitesse.",

      tags: ["conduite", "regulateur-de-vitesse"],
    },

    {
      id: "fep4-q2",

      type: "text",

      question:
        "Quelle peut-être la durée maximale de l'amplitude de la journée de travail pour un conducteur de transport en commun effectuant un service occasionnel ?",

      canonicalAnswer: "14 h ou 14 heures",

      acceptedAnswers: ["14 h", "14h", "14 heures", "quatorze heures"],

      tags: ["temps-de-travail", "reglementation-sociale"],
    },

    {
      id: "fep4-q3",

      type: "text",

      question:
        "En agglomération, la différence de consommation entre un conducteur calme et un conducteur nerveux peut atteindre 40 %. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Une conduite agressive augmente fortement la consommation de carburant, notamment en circulation urbaine.",

      tags: ["eco-conduite", "consommation"],
    },

    {
      id: "fep4-q4",

      type: "text",

      question:
        "En ville, un autocar effectuant un service occasionnel peut-il emprunter une voie réservée aux autobus ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["circulation", "autocar", "voie-reservee"],
    },

    {
      id: "fep4-q5",

      type: "text",

      question:
        "Dans un autocar, quel est le poids moyen forfaitaire d'un voyageur adulte avec ses bagages à main ?",

      canonicalAnswer: "70 kg",

      acceptedAnswers: [
        "70 kg",
        "70kg",
        "70 kilogrammes",
        "soixante-dix kilogrammes",
      ],

      tags: ["masses", "voyageurs"],
    },

    {
      id: "fep4-q6",

      type: "text",

      question:
        "Comment appelle-t-on les transports exécutés à titre onéreux pour le compte d'un client ?",

      canonicalAnswer: "Public ou Compte d'autrui",

      acceptedAnswers: [
        "transports publics",
        "transport public",
        "publics",
        "compte d'autrui",
        "compte d autrui",
      ],

      explanation:
        "Les transports réalisés à titre onéreux pour un client sont des transports publics, également appelés transports pour compte d'autrui.",

      tags: ["transport", "reglementation"],
    },

    {
      id: "fep4-q7",

      type: "text",

      question:
        "Parmi les types de graissage moteur, il existe le graissage par pression. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Le graissage sous pression est l'un des principaux systèmes de lubrification des moteurs modernes.",

      tags: ["mecanique", "lubrification"],
    },

    {
      id: "fep4-q8",

      type: "text",

      question:
        "La réglementation sociale européenne s'applique-t-elle à un conducteur non salarié propriétaire de son véhicule ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["reglementation-sociale", "conducteur"],
    },

    {
      id: "fep4-q9",

      type: "text",

      question: "Ce signal concerne-t-il uniquement les véhicules isolés ?",

      image: "/images/traffic-signs/interdiction_10m.png",

      imageAlt:
        "Panneau imposant une longueur maximale de 10m pour le véhicule.",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["signalisation", "distance-securite"],
    },

    {
      id: "fep4-q10",

      type: "text",

      question:
        "Sur autoroute, en cas d'incident, pour appeler les secours, vaut-il mieux utiliser une borne d'appel ou son téléphone portable ?",

      canonicalAnswer: "La borne d'appel",

      acceptedAnswers: [
        "borne d'appel",
        "borne d appel",
        "la borne d'appel",
        "la borne d appel",
        "borne",
      ],

      explanation:
        "La borne d'appel permet de localiser précisément l'incident et reste le moyen privilégié pour alerter les secours sur autoroute.",

      tags: ["securite", "autoroute", "urgence"],
    },
  ],
}
