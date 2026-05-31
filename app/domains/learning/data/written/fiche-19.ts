import type { Lesson } from "../../types/learning"

export const fiche19: Lesson = {
  id: "fiche-19",

  title: "Fiche 19",

  contentType: "questions",

  questions: [
    {
      id: "f19-q1",

      type: "text",

      question:
        "En règle générale, à quelle vitesse doit être réglé le limiteur de vitesse d'un autocar neuf ?",

      canonicalAnswer: "100 km/h",

      acceptedAnswers: ["100 km/h", "100km/h", "100"],

      tags: ["vitesse", "autocar"],
    },

    {
      id: "f19-q2",

      type: "text",

      question:
        "Pendant combien de temps les enregistrements des activités des conducteurs (données numériques ou disques) doivent-ils être conservés dans l'entreprise ?",

      canonicalAnswer: "1 an ou 12 mois ou 365 jours",

      acceptedAnswers: ["1 an", "un an", "12 mois", "365 jours"],

      tags: ["chronotachygraphe", "rse"],
    },

    {
      id: "f19-q3",

      type: "text",

      question:
        "Certains éléments de la chaîne cinématique nécessitent d'être vidangés ou ... ?",

      canonicalAnswer: "Graissés",

      acceptedAnswers: ["graissés", "graisses", "graissé"],

      tags: ["mécanique", "entretien"],
    },

    {
      id: "f19-q4",

      type: "image",

      question:
        "Mon véhicule a un poids à vide de 5 tonnes et un PTAC de 12 tonnes. Ce signal me concerne-t-il ?",

      image: "/images/traffic-signs/70kmh_5_5t.png",

      imageAlt: "Panneau de limitation à 70 km/h avec panonceau 5,5 t",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le panneau concerne les véhicules dont le PTAC est supérieur à 5,5 tonnes. Avec un PTAC de 12 tonnes, vous êtes concerné.",

      tags: ["signalisation", "ptac"],
    },

    {
      id: "f19-q5",

      type: "text",

      question:
        "Est-il possible de fixer à l'arrière d'un car de 15 m de long un porte-skis ou un coffre à skis de 70 cm de profondeur ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["dimensions", "véhicule"],
    },

    {
      id: "f19-q6",

      type: "text",

      question:
        "La dernière visite technique de votre autocar date de 8 mois. Êtes-vous en infraction en le conduisant ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Les véhicules de transport en commun sont soumis à un contrôle technique périodique spécifique.",

      tags: ["contrôle-technique"],
    },

    {
      id: "f19-q7",

      type: "text",

      question:
        "Un temps de conduite de 4 h 30 peut être fractionné, au plus, par combien de pauses ?",

      canonicalAnswer: "2",

      acceptedAnswers: ["2", "deux"],

      explanation:
        "La pause réglementaire de 45 minutes peut être fractionnée en deux périodes : 15 min puis 30 min.",

      tags: ["rse", "temps-de-conduite"],
    },

    {
      id: "f19-q8",

      type: "text",

      question:
        "Vous conduisez un autocar neuf de plus de 10 t de PTAC, sans passager. À quelle vitesse êtes-vous limité sur route prioritaire ?",

      canonicalAnswer: "80 km/h",

      acceptedAnswers: ["80 km/h", "80km/h", "80"],

      tags: ["vitesse", "ptac"],
    },

    {
      id: "f19-q9",

      type: "text",

      question:
        "En cas de récidive de grand excès de vitesse, une suspension du permis de conduire peut être assortie d'un permis limité à la conduite professionnelle (permis blanc) si l'infraction a été commise avec la voiture personnelle du chauffeur. Vrai ou faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      tags: ["réglementation", "permis"],
    },

    {
      id: "f19-q10",

      type: "text",

      question:
        "En cas d'accident dans lequel votre véhicule est en cause, les forces de l'ordre peuvent-elles saisir votre carte conducteur ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["chronotachygraphe", "accident"],
    },
  ],
}
