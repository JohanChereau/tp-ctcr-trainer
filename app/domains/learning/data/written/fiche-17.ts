import type { Lesson } from "../../types/learning"

export const fiche17: Lesson = {
  id: "fiche-17",

  title: "Fiche 17",

  contentType: "questions",

  questions: [
    {
      id: "fep17-q1",

      type: "text",

      question:
        "Vous suivez un véhicule dont les dispositifs réfléchissants sont triangulaires. Ce véhicule est probablement un véhicule isolé. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Les dispositifs réfléchissants triangulaires caractérisent généralement un ensemble articulé ou un véhicule avec remorque.",

      tags: ["signalisation", "véhicule"],
    },

    {
      id: "fep17-q2",

      type: "text",

      question:
        "Vous avez fait une coupure de 4 h (repos), quelle sera, au minimum, la durée de la période de repos suivante pour être en règle vis-à-vis du repos journalier ?",

      canonicalAnswer: "9 h ou 9 heures",

      acceptedAnswers: ["9 h", "9 heures", "9h"],

      tags: ["rse", "temps-de-repos"],
    },

    {
      id: "fep17-q3",

      type: "text",

      question:
        "Le turbocompresseur a pour fonction de diminuer l'air admis dans les cylindres ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Le turbocompresseur augmente la quantité d'air admise dans les cylindres.",

      tags: ["mécanique", "moteur"],
    },

    {
      id: "fep17-q4",

      type: "image",

      question:
        "Hors agglomération, ce signal est-il implanté 100 mètres avant le carrefour à sens giratoire ?",

      image: "/images/traffic-signs/sens_giratoire.png",

      imageAlt: "Panneau annonçant un carrefour à sens giratoire",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["signalisation", "giratoire"],
    },

    {
      id: "fep17-q5",

      type: "text",

      question: "Le poids réel d'un véhicule peut-il être égal à son PTAC ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le poids réel peut atteindre le PTAC, mais ne doit jamais le dépasser.",

      tags: ["masses", "ptac"],
    },

    {
      id: "fep17-q6",

      type: "text",

      question:
        "Vous conduisez un autocar neuf de 22 t de PTAC. Par temps de pluie, à quelle vitesse êtes-vous limité sur route prioritaire ?",

      canonicalAnswer: "80 km/h",

      acceptedAnswers: ["80 km/h", "80km/h", "80"],

      tags: ["vitesse", "pluie"],
    },

    {
      id: "fep17-q7",

      type: "text",

      question:
        "Vous avez perdu votre carte conducteur, pouvez-vous conduire en utilisant la carte entreprise que possède votre employeur ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "La carte entreprise ne remplace jamais la carte conducteur.",

      tags: ["chronotachygraphe", "carte-conducteur"],
    },

    {
      id: "fep17-q8",

      type: "text",

      question:
        "En règle générale, où s'effectuent les visites techniques des véhicules poids lourds ?",

      canonicalAnswer: "Centre de contrôle des véhicules lourds",

      acceptedAnswers: [
        "centre de contrôle des véhicules lourds",
        "centre de controle des vehicules lourds",
        "centre de contrôle poids lourds",
        "centre poids lourds",
      ],

      tags: ["contrôle-technique"],
    },

    {
      id: "fep17-q9",

      type: "text",

      question:
        "Un conducteur qui possède les catégories C et D devra nécessairement effectuer 2 stages de Formation Continue Obligatoire pour pouvoir continuer à conduire des camions et des cars. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Une seule FCO permet de maintenir la qualification pour les activités concernées.",

      tags: ["fco", "qualification"],
    },

    {
      id: "fep17-q10",

      type: "text",

      question:
        "Le modèle allemand, italien ou espagnol d'un constat européen d'accident comporte-t-il les mêmes rubriques que le modèle français ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le constat amiable européen est harmonisé et comporte les mêmes rubriques dans les différents pays.",

      tags: ["assurance", "constat"],
    },
  ],
}
