import type { Lesson } from "../../types/learning"

export const fiche11: Lesson = {
  id: "fiche-11",

  title: "Fiche 11",

  contentType: "questions",

  questions: [
    {
      id: "fep11-q1",

      type: "text",

      question:
        "Dans un autocar neuf, le conducteur doit-il obligatoirement attacher sa ceinture de sécurité ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le conducteur doit obligatoirement porter sa ceinture de sécurité lorsque le véhicule en est équipé.",

      tags: ["securite", "ceinture"],
    },

    {
      id: "fep11-q2",

      type: "text",

      question:
        "Lors d'un transport international occasionnel de personnes, sous conditions, un conducteur peut-il conduire 10 périodes consécutives (1 période = 24 h) entre 2 repos hebdomadaires ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["reglementation-sociale", "transport-international"],
    },

    {
      id: "fep11-q3",

      type: "text",

      question:
        "Le mécanisme de direction comprend une « bielle pendante ». Vrai ou faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "La bielle pendante fait partie des éléments pouvant composer le mécanisme de direction.",

      tags: ["direction", "mecanique"],
    },

    {
      id: "fep11-q4",

      type: "text",

      question:
        "Ce signal peut m'autoriser à emprunter une voie de bus en agglomération, si je réalise un service régulier interurbain. Vrai ou faux ?",

      image: "/images/traffic-signs/bus_bleu.png",

      imageAlt: "Signal de voie réservée aux autobus",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["signalisation", "voie-bus"],
    },

    {
      id: "fep11-q5",

      type: "text",

      question:
        "Vous conduisez un autocar. Quelle peut être sa largeur maximale ?",

      canonicalAnswer: "2,55 m",

      acceptedAnswers: ["2,55 m", "2.55 m", "2,55 mètres", "2.55 mètres"],

      explanation:
        "La largeur maximale autorisée d'un autocar est de 2,55 mètres.",

      tags: ["gabarit", "dimensions"],
    },

    {
      id: "fep11-q6",

      type: "text",

      question:
        "La licence de transport intérieur permet d'effectuer des transports avec un car de 45 places à condition de rester en France. Vrai ou faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      tags: ["transport", "licence"],
    },

    {
      id: "fep11-q7",

      type: "text",

      question:
        "Sur une autoroute à 3 voies, un autocar d'une longueur totale de 13 m peut-il effectuer un dépassement en empruntant la 2ème voie ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["circulation", "depassement"],
    },

    {
      id: "fep11-q8",

      type: "text",

      question:
        "Après 4 h 30 de conduite continue, quelle est la durée minimale de la pause que vous devez respecter ?",

      canonicalAnswer: "45 min",

      acceptedAnswers: ["45 mn", "45 min", "45 minutes"],

      explanation:
        "Après 4 h 30 de conduite, une pause minimale de 45 minutes doit être respectée.",

      tags: ["reglementation-sociale", "pause"],
    },

    {
      id: "fep11-q9",

      type: "text",

      question:
        "Quelle est la catégorie du permis exigée pour conduire un véhicule de transport en commun comportant 45 places circulant à vide ?",

      canonicalAnswer: "D ou Le permis D",

      acceptedAnswers: ["D", "permis D", "le permis D"],

      explanation:
        "La catégorie D est exigée même lorsque le véhicule circule à vide.",

      tags: ["permis", "categorie-d"],
    },

    {
      id: "fep11-q10",

      type: "text",

      question:
        "Circulant à vide avec un autocar, vous êtes impliqué dans un accident corporel de la circulation. Devez-vous prévenir rapidement votre entreprise ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["accident", "entreprise"],
    },
  ],
}
