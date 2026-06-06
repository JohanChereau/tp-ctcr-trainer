import type { Lesson } from "../../types/learning"

export const fiche05: Lesson = {
  id: "fiche-05",

  title: "Fiche 5",

  contentType: "questions",

  questions: [
    {
      id: "fep5-q1",

      type: "text",

      question:
        "Une commande de coupe-circuit est-elle obligatoire sur un véhicule de transport en commun près du poste de conduite ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["electricite", "securite", "equipements"],
    },

    {
      id: "fep5-q2",

      type: "text",

      question:
        "Pouvez-vous prendre votre temps de repos journalier en couchette lorsque le véhicule est à l'arrêt ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le repos journalier peut être pris en couchette lorsque le véhicule est immobilisé.",

      tags: ["temps-de-repos", "reglementation-sociale"],
    },

    {
      id: "fep5-q3",

      type: "text",

      question: "En principe, le ralentisseur hydraulique est situé sur ... ?",

      canonicalAnswer: "La transmission ou l'arbre de transmission",

      acceptedAnswers: [
        "la transmission",
        "transmission",
        "l'arbre de transmission",
        "arbre de transmission",
      ],

      explanation:
        "Le ralentisseur hydraulique est généralement monté sur la transmission ou sur l'arbre de transmission.",

      tags: ["mecanique", "ralentisseur", "freinage"],
    },

    {
      id: "fep5-q4",

      type: "text",

      question:
        "En ville, un conducteur d'autocar effectuant une excursion peut-il emprunter une voie réservée aux autobus ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["circulation", "autocar", "voie-reservee"],
    },

    {
      id: "fep5-q5",

      type: "text",

      question:
        "Dans le poids moyen forfaitaire d'un voyageur adulte, le poids des bagages à main est-il inclus ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["masses", "voyageurs"],
    },

    {
      id: "fep5-q6",

      type: "text",

      question:
        "Suite au contrôle technique périodique, lorsque le véhicule est refusé sans interdiction de circuler, dans quel délai maximum la contre-visite doit-elle être effectuée pour éviter une visite technique complète ?",

      canonicalAnswer: "1 mois",

      acceptedAnswers: ["1 mois", "un mois"],

      explanation:
        "La contre-visite doit être effectuée dans le délai réglementaire d'un mois afin d'éviter une nouvelle visite complète.",

      tags: ["controle-technique", "reglementation"],
    },

    {
      id: "fep5-q7",

      type: "text",

      question:
        "Après 2 heures de conduite, quelle est la durée minimale d'un premier arrêt pouvant être pris en compte comme pause ?",

      canonicalAnswer: "15 min",

      acceptedAnswers: ["15 mn", "15 min", "15 minutes"],

      explanation:
        "Une pause fractionnée peut commencer par une première interruption minimale de 15 minutes.",

      tags: ["temps-de-conduite", "pause", "reglementation-sociale"],
    },

    {
      id: "fep5-q8",

      type: "text",

      question:
        "Je circule avec un autocar d'une longueur de 12 m. Ce signal me concerne-t-il ?",

      image: "/images/traffic-signs/interdiction_10m.png",

      imageAlt:
        "Panneau imposant une longueur maximale de 10m pour le véhicule.",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["signalisation", "distance-securite"],
    },

    {
      id: "fep5-q9",

      type: "text",

      question:
        "Débrancher ou modifier les réglages du limiteur de vitesse peut entraîner une suspension du permis de conduire, même s'il n'y a pas eu d'excès de vitesse constaté. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Toute manipulation frauduleuse du limiteur de vitesse constitue une infraction pouvant entraîner des sanctions administratives et pénales.",

      tags: ["limiteur-de-vitesse", "reglementation", "sanctions"],
    },

    {
      id: "fep5-q10",

      type: "text",

      question:
        "En cas d'accident, les données du chronotachygraphe numérique peuvent-elles servir de preuve devant un tribunal ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Les données enregistrées par le chronotachygraphe peuvent être utilisées lors d'une enquête ou d'une procédure judiciaire.",

      tags: ["chronotachygraphe", "reglementation", "justice"],
    },
  ],
}
