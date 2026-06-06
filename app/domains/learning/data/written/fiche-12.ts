import type { Lesson } from "../../types/learning"

export const fiche12: Lesson = {
  id: "fiche-12",

  title: "Fiche 12",

  contentType: "questions",

  questions: [
    {
      id: "fep12-q1",

      type: "text",

      question:
        "Vous suivez un véhicule dont les dispositifs réfléchissants sont triangulaires. Ce véhicule est probablement un véhicule isolé. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Des dispositifs réfléchissants triangulaires n'indiquent pas nécessairement qu'il s'agit d'un véhicule isolé.",

      tags: ["signalisation", "vehicule"],
    },

    {
      id: "fep12-q2",

      type: "text",

      question:
        "Votre véhicule est équipé d'un chronotachygraphe numérique. Vous avez perdu votre carte conducteur, combien de jours au maximum pouvez-vous conduire sans carte ?",

      canonicalAnswer: "15 ou 15 jours",

      acceptedAnswers: ["15 jours", "15 jour", "15"],

      explanation:
        "En cas de perte, vol ou dysfonctionnement de la carte conducteur, il est possible de conduire au maximum 15 jours sous certaines conditions.",

      tags: ["chronotachygraphe", "carte-conducteur"],
    },

    {
      id: "fep12-q3",

      type: "text",

      question:
        "Le dispositif antiblocage de roues (ABS) peut-il fonctionner en même temps que le ou les dispositifs ralentisseurs ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["abs", "freinage"],
    },

    {
      id: "fep12-q4",

      type: "text",

      question: "Ce signal m'indique un arrêt d'autobus. Vrai ou Faux ?",

      image: "/images/traffic-signs/bus_bleu.png",

      imageAlt: "Panneau représentant un autobus",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation: "Ce panneau ne correspond pas à un arrêt d'autobus.",

      tags: ["signalisation"],
    },

    {
      id: "fep12-q5",

      type: "text",

      question:
        "Quelle est la majoration maximale autorisée du PTAC pour un véhicule équipé d'un dispositif ralentisseur pesant 400 kg ?",

      canonicalAnswer: "400 kg",

      acceptedAnswers: ["400 kg", "400kg", "400 kilogrammes"],

      explanation:
        "La majoration maximale autorisée correspond au poids du ralentisseur dans cette limite.",

      tags: ["ptac", "ralentisseur"],
    },

    {
      id: "fep12-q6",

      type: "text",

      question:
        "L'attestation d'aménagement doit obligatoirement être à bord du véhicule neuf que vous conduisez. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["documents", "vehicule-neuf"],
    },

    {
      id: "fep12-q7",

      type: "text",

      question: "Quelle est la durée de validité de votre carte conducteur ?",

      canonicalAnswer: "5 ans",

      acceptedAnswers: ["5 ans", "5 an", "cinq ans"],

      explanation: "La carte conducteur est valable 5 ans.",

      tags: ["chronotachygraphe", "carte-conducteur"],
    },

    {
      id: "fep12-q8",

      type: "text",

      question:
        "Un pont dont la hauteur libre est de 5 m (au plus bas) sera obligatoirement signalé par un panneau de hauteur limitée. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      tags: ["signalisation", "gabarit"],
    },

    {
      id: "fep12-q9",

      type: "text",

      question:
        "Quelle est la périodicité des Formations Continues Obligatoires des conducteurs routiers ?",

      canonicalAnswer: "5 ans ou Quinquennale",

      acceptedAnswers: ["5 ans", "cinq ans", "quinquennale"],

      explanation:
        "La Formation Continue Obligatoire (FCO) doit être renouvelée tous les 5 ans.",

      tags: ["fco", "formation"],
    },

    {
      id: "fep12-q10",

      type: "text",

      question:
        "Avec votre véhicule, vous avez détérioré des panneaux de signalisation. Devez-vous obligatoirement le signaler à votre compagnie d'assurance ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["assurance", "accident"],
    },
  ],
}
