import type { Lesson } from "../../types/learning"

export const fiche16: Lesson = {
  id: "fiche-16",

  title: "Fiche 16",

  contentType: "questions",

  questions: [
    {
      id: "fep16-q1",

      type: "text",

      question:
        "Le circuit électrique alimentant le chronotachygraphe est-il indépendant du circuit alimentant le coupe-batterie ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le chronotachygraphe doit rester alimenté indépendamment du coupe-batterie.",

      tags: ["chronotachygraphe", "électricité"],
    },

    {
      id: "fep16-q2",

      type: "text",

      question:
        "Vous avez interrompu votre conduite pendant 1 h 15 min. Ce temps peut-il être pris en compte pour le calcul du temps de repos journalier ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["temps-de-repos", "rse"],
    },

    {
      id: "fep16-q3",

      type: "text",

      question:
        "Le circuit d'alimentation d'un moteur diesel se compose, entre autres éléments, de deux pompes : l'une dite pompe d'injection haute pression, l'autre dite pompe ... ?",

      canonicalAnswer: "D'alimentation",

      acceptedAnswers: [
        "d'alimentation",
        "alimentation",
        "pompe d'alimentation",
      ],

      explanation:
        "Le circuit comprend notamment une pompe d'alimentation et une pompe d'injection haute pression.",

      tags: ["mécanique", "moteur-diesel"],
    },

    {
      id: "fep16-q4",

      type: "text",

      question:
        "En agglomération, ce signal est-il implanté 50 mètres avant le carrefour à sens giratoire ?",

      image: "/images/traffic-signs/sens_giratoire.png",

      imageAlt: "Panneau annonçant un carrefour à sens giratoire",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["signalisation", "giratoire"],
    },

    {
      id: "fep16-q5",

      type: "text",

      question:
        "Comment appelle-t-on la distance entre l'essieu arrière et l'extrémité arrière du véhicule ?",

      canonicalAnswer: "Porte-à-faux (arrière)",

      acceptedAnswers: [
        "porte-à-faux arrière",
        "porte a faux arrière",
        "porte à faux (arrière)",
        "porte a faux (arrière)",
        "porte-à-faux (arrière)",
        "porte-a-faux (arrière)",
        "porte-à-faux",
        "porte a faux",
      ],

      tags: ["dimensions", "véhicule"],
    },

    {
      id: "fep16-q6",

      type: "text",

      question:
        "Suite au contrôle technique périodique, quelle lettre figure sur le certificat d'immatriculation lorsque le véhicule est refusé sans interdiction de circuler ?",

      canonicalAnswer: "S ou La lettre S",

      acceptedAnswers: ["s", "S", "la lettre s"],

      tags: ["contrôle-technique"],
    },

    {
      id: "fep16-q7",

      type: "text",

      question:
        "Vous conduisez un autocar neuf de 19 t de PTAC. À quelle vitesse êtes-vous limité sur autoroute ?",

      canonicalAnswer: "100 km/h",

      acceptedAnswers: ["100 km/h", "100km/h", "100"],

      explanation:
        "La vitesse maximale autorisée pour un autocar répondant aux conditions réglementaires est de 100 km/h sur autoroute.",

      tags: ["vitesse", "autoroute"],
    },

    {
      id: "fep16-q8",

      type: "text",

      question:
        "En double équipage, en France, vous êtes assis à côté du conducteur depuis 1 h. Pouvez-vous reprendre le volant ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["double-équipage", "rse"],
    },

    {
      id: "fep16-q9",

      type: "text",

      question:
        "Un diplôme professionnel de conducteur routier donne-t-il par équivalence l'attestation de Formation Initiale Minimale Obligatoire (FIMO) ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["fimo", "qualification"],
    },

    {
      id: "fep16-q10",

      type: "text",

      question:
        "Que signifie une plaque de couleur orange, comportant 2 rectangles sans inscription, placée à l'arrière d'un camion ?",

      canonicalAnswer: "Transport de matières dangereuses",

      acceptedAnswers: [
        "transport de matières dangereuses",
        "matières dangereuses",
        "adr",
        "transport adr",
      ],

      explanation:
        "Une plaque orange sans numéro indique un transport relevant de la réglementation ADR sur les matières dangereuses.",

      tags: ["adr", "matières-dangereuses"],
    },
  ],
}
