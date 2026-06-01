import type { Lesson } from "../../types/learning"

export const fiche20: Lesson = {
  id: "fiche-20",

  title: "Fiche 20",

  contentType: "questions",

  questions: [
    {
      id: "fep20-q1",

      type: "text",

      question:
        "Le circuit électrique alimentant la climatisation est-il indépendant du circuit alimentant le coupe-batterie ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["électricité", "véhicule"],
    },

    {
      id: "fep20-q2",

      type: "text",

      question:
        "Vous avez fait une coupure de 2 h, quelle sera, au minimum, la durée (non réduite) de la période de repos que vous devrez prendre à la fin de votre journée de travail pour être en règle vis-à-vis du repos journalier ?",

      canonicalAnswer: "11 h ou 11 heures",

      acceptedAnswers: ["11 h", "11 heures", "onze heures"],

      tags: ["rse", "repos-journalier"],
    },

    {
      id: "fep20-q3",

      type: "text",

      question:
        "Le châssis d'un véhicule lourd est principalement constitué de longerons et de ... ?",

      canonicalAnswer: "Traverses",

      acceptedAnswers: ["traverses", "une traverse", "des traverses"],

      tags: ["mécanique", "châssis"],
    },

    {
      id: "fep20-q4",

      type: "image",

      question:
        "Sur cette chaussée la hauteur des arbres est susceptible d'être inférieure à 4,30 m. Vrai ou faux ?",

      image: "/images/traffic-signs/arbres_inclines.png",

      imageAlt: "Panneau de danger arbres inclinés",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      tags: ["signalisation", "gabarit"],
    },

    {
      id: "fep20-q5",

      type: "text",

      question:
        "En règle générale, quelle est la longueur maximale autorisée pour un véhicule de transport en commun articulé comportant une articulation ?",

      canonicalAnswer: "18,75 m",

      acceptedAnswers: ["18,75 m", "18.75 m", "18,75 mètres", "18.75 mètres"],

      tags: ["dimensions", "véhicule-articulé"],
    },

    {
      id: "fep20-q6",

      type: "text",

      question:
        "Suite au contrôle technique périodique, quelle lettre figure sur le certificat d'immatriculation lorsque le véhicule est refusé avec interdiction de circuler ?",

      canonicalAnswer: "R ou La lettre R",

      acceptedAnswers: ["r", "R", "lettre r", "la lettre r"],

      tags: ["contrôle-technique"],
    },

    {
      id: "fep20-q7",

      type: "text",

      question:
        "Vous conduisez un autocar neuf de 22 t de PTAC. Par temps de pluie, à quelle vitesse êtes-vous limité sur autoroute ?",

      canonicalAnswer: "100 km/h",

      acceptedAnswers: ["100 km/h", "100km/h", "100", "100kmh"],

      tags: ["vitesse", "autoroute"],
    },

    {
      id: "fep20-q8",

      type: "text",

      question:
        "En double équipage, le temps passé sur la couchette d'un véhicule en circulation est-il considéré comme repos journalier ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["rse", "double-équipage"],
    },

    {
      id: "fep20-q9",

      type: "text",

      question:
        "Après l'obtention (hors diplômes professionnels) de votre premier permis de conduire du groupe lourd, quelle formation devez-vous effectuer avant de pouvoir conduire un car dans le cadre d'un transport interurbain de voyageurs ?",

      canonicalAnswer: "FIMO ou Formation Initiale Minimale Obligatoire",

      acceptedAnswers: [
        "fimo",
        "FIMO",
        "formation initiale minimale obligatoire",
        "Formation Initiale Minimale Obligatoire",
      ],

      explanation:
        "La FIMO (Formation Initiale Minimale Obligatoire) est requise avant l'exercice professionnel du transport de voyageurs.",

      tags: ["fimo", "formation"],
    },

    {
      id: "fep20-q10",

      type: "text",

      question:
        "Une plaque orange sans aucune inscription, placée à l'arrière d'un camion signifie qu'il s'agit d'un transport de matières dangereuses circulant à vide. Vrai ou faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      tags: ["adr", "matières-dangereuses"],
    },
  ],
}
