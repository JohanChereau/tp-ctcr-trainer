import type { Lesson } from "../../types/learning"

export const fiche13: Lesson = {
  id: "fiche-13",

  title: "Fiche 13",

  contentType: "questions",

  questions: [
    {
      id: "fep13-q1",

      type: "text",

      question:
        "Le principal avantage du système de freinage antibloquant est-il de conserver la maîtrise de la trajectoire du véhicule ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "L'ABS évite le blocage des roues et permet de conserver la maîtrise de la direction du véhicule lors d'un freinage.",

      tags: ["abs", "freinage"],
    },

    {
      id: "fep13-q2",

      type: "text",

      question:
        "Un chauffeur a conduit 20 heures la semaine précédente. Selon la réglementation sociale européenne, combien d'heures maximum peut-il conduire la semaine en cours ?",

      canonicalAnswer: "56 h ou 56 heures",

      acceptedAnswers: ["56 heures", "56 h", "56h", "56"],

      explanation:
        "La durée maximale de conduite hebdomadaire est de 56 heures.",

      tags: ["rse", "temps-de-conduite"],
    },

    {
      id: "fep13-q3",

      type: "text",

      question:
        "La marche arrière sert à inverser le sens de rotation de l'arbre de transmission ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["transmission", "mecanique"],
    },

    {
      id: "fep13-q4",

      type: "text",

      question:
        "Les véhicules de transport en commun tractant une remorque sont-ils concernés par ce signal ?",

      image: "/images/traffic-signs/bus_rouge.png",

      imageAlt: "Panneau représentant un autobus",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["signalisation", "transport-en-commun"],
    },

    {
      id: "fep13-q5",

      type: "text",

      question:
        "En règle générale, quel est le PTAC maximal d'un véhicule isolé de 3 essieux ?",

      canonicalAnswer: "26 t",

      acceptedAnswers: ["26 t", "26 tonnes", "26t"],

      explanation:
        "Le PTAC maximal d'un véhicule isolé à 3 essieux est de 26 tonnes.",

      tags: ["ptac", "poids"],
    },

    {
      id: "fep13-q6",

      type: "text",

      question:
        "Lors d'un contrôle des temps de conduite et de repos sur la route, en plus de la journée en cours, sur quelle période devez-vous pouvoir présenter les données ?",

      canonicalAnswer: "56 jours ou Les 56 jours précédents",

      acceptedAnswers: ["56 jours", "les 56 jours précédents", "56 jour"],

      explanation:
        "Le conducteur doit pouvoir présenter les données de la journée en cours ainsi que celles des 56 jours précédents.",

      tags: ["chronotachygraphe", "rse"],
    },

    {
      id: "fep13-q7",

      type: "text",

      question:
        "Un véhicule de transport en commun dont le PTAC est de 19 t circulant avec la moitié de ses passagers peut-il emprunter une route où une barrière de dégel à 12 t, avec mention demi-charge autorisée, est en place ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["degel", "signalisation"],
    },

    {
      id: "fep13-q8",

      type: "text",

      question:
        "Un premier arrêt de 15 mn sur un parking peut-il être considéré comme une pause ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Une interruption d'au moins 15 minutes peut constituer la première partie d'une pause réglementaire.",

      tags: ["pause", "rse"],
    },

    {
      id: "fep13-q9",

      type: "text",

      question:
        "Titulaire de la catégorie D et de ma FIMO depuis un an, je suis aujourd'hui âgé de 22 ans et demi. Je suis toujours restreint aux services réguliers dont le parcours de ligne ne dépasse pas 50 km. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["permis-d", "fimo"],
    },

    {
      id: "fep13-q10",

      type: "text",

      question:
        "Le modèle français de constat amiable peut-il être utilisé dans les autres pays de l'Union européenne ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le constat amiable européen est reconnu et utilisable dans les pays de l'Union européenne.",

      tags: ["assurance", "constat"],
    },
  ],
}
