import type { Lesson } from "../../types/learning"

export const fiche06: Lesson = {
  id: "fiche-06",

  title: "Fiche 6",

  contentType: "questions",

  questions: [
    {
      id: "fep6-q1",

      type: "text",

      question:
        "Quel type d'extincteur faut-il éviter d'utiliser pour éteindre les flammes d'un feu d'hydrocarbure ?",

      canonicalAnswer: "Extincteur à eau ou A eau",

      acceptedAnswers: [
        "extincteur à eau",
        "un extincteur à eau",
        "a eau",
        "à eau",
        "eau",
      ],

      explanation:
        "L'eau ne doit pas être utilisée sur un feu d'hydrocarbure car elle peut propager le combustible enflammé.",

      tags: ["incendie", "extincteur", "securite"],
    },

    {
      id: "fep6-q2",

      type: "text",

      question:
        "En règle générale, quelle est la durée maximale de conduite journalière autorisée en respectant les temps de repos ?",

      canonicalAnswer: "9 h",

      acceptedAnswers: ["9 h", "9h", "9 heures", "neuf heures"],

      tags: ["temps-de-conduite", "reglementation-sociale"],
    },

    {
      id: "fep6-q3",

      type: "text",

      question:
        "Le dispositif antiblocage de roues (ABS) peut-il fonctionner en même temps que le ou les dispositifs ralentisseurs ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Les systèmes ABS et ralentisseurs sont conçus pour fonctionner de manière complémentaire.",

      tags: ["abs", "ralentisseur", "freinage"],
    },

    {
      id: "fep6-q4",

      type: "text",

      question:
        "Vous conduisez un autocar neuf de 19 t de PTAC. À quelle vitesse êtes-vous limité en agglomération sur une portion de route relevée à 70 km/h ?",

      canonicalAnswer: "70 km/h",

      acceptedAnswers: ["70 km/h", "70 kmh", "70"],

      explanation:
        "Lorsque la signalisation autorise 70 km/h en agglomération, cette limitation s'applique également à l'autocar concerné.",

      tags: ["vitesses", "agglomeration", "autocar"],
    },

    {
      id: "fep6-q5",

      type: "text",

      question:
        "Un autobus articulé est-il réglementairement considéré comme un véhicule isolé ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["vehicule", "autobus", "reglementation"],
    },

    {
      id: "fep6-q6",

      type: "text",

      question:
        "Suite au contrôle technique périodique, quelle lettre figure sur le certificat d'immatriculation lorsque le véhicule est accepté ?",

      canonicalAnswer: "A ou La lettre A",

      acceptedAnswers: ["A", "la lettre A", "lettre A"],

      tags: ["controle-technique", "documents"],
    },

    {
      id: "fep6-q7",

      type: "image",

      question:
        "Je circule avec un véhicule mesurant 2,30 m de large. À hauteur de ce signal, puis-je continuer sur cette route ?",

      image: "/images/traffic-signs/interdiction_2_3m.png",

      imageAlt:
        "Panneau d'interdiction aux véhicules de plus de 2,3 mètres de large",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["signalisation", "gabarit", "largeur"],
    },

    {
      id: "fep6-q8",

      type: "text",

      question:
        "Les temps de pause sont-ils comptés dans l'amplitude totale de la journée de travail ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "L'amplitude comprend l'ensemble de la période entre la prise et la fin de service, y compris les pauses.",

      tags: ["temps-de-travail", "amplitude", "reglementation-sociale"],
    },

    {
      id: "fep6-q9",

      type: "text",

      question:
        "En cas d'excès de vitesse de 42 km/h, je pourrai repartir si je reconnais l'infraction ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "La reconnaissance de l'infraction n'empêche pas l'application des mesures prévues par la réglementation.",

      tags: ["vitesse", "infractions", "sanctions"],
    },

    {
      id: "fep6-q10",

      type: "text",

      question:
        "Le constat amiable d'accident peut-il constituer une preuve de responsabilité ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le constat amiable signé par les parties peut être utilisé comme élément de preuve pour déterminer les responsabilités.",

      tags: ["accident", "assurance", "responsabilite"],
    },
  ],
}
