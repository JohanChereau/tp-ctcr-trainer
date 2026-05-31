import type { Lesson } from "../../types/learning"

export const fiche14: Lesson = {
  id: "fiche-14",

  title: "Fiche 14",

  contentType: "questions",

  questions: [
    {
      id: "f14-q1",

      type: "text",

      question:
        "En cas de panne du chronotachygraphe, le délai maximal de remise en état, à compter de la panne, est fixé à ?",

      canonicalAnswer: "1 semaine ou 7 jours",

      acceptedAnswers: ["1 semaine", "une semaine", "7 jours"],

      explanation:
        "Le chronotachygraphe doit être réparé dans un délai maximal d'une semaine.",

      tags: ["chronotachygraphe", "rse"],
    },

    {
      id: "f14-q2",

      type: "text",

      question:
        "Un chauffeur a conduit 40 heures la semaine précédente. Selon la réglementation sociale européenne, combien d'heures maximum peut-il conduire la semaine en cours ?",

      canonicalAnswer: "50 h ou 50 heures",

      acceptedAnswers: ["50 heures", "50 h", "50h", "50"],

      explanation:
        "Le temps de conduite sur deux semaines consécutives ne peut pas dépasser 90 heures. 90 - 40 = 50 heures.",

      tags: ["rse", "temps-de-conduite"],
    },

    {
      id: "f14-q3",

      type: "text",

      question:
        "L'embrayage est un organe mécanique nécessaire au passage des vitesses sur les seules boîtes mécaniques ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["embrayage", "transmission"],
    },

    {
      id: "f14-q4",

      type: "image",

      question: "Par temps sec, ce signal me concerne-t-il ?",

      image: "/images/traffic-signs/accotement_meuble.png",

      imageAlt: "Panneau danger accotement meuble",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation: "Un accotement meuble reste dangereux même par temps sec.",

      tags: ["signalisation", "danger"],
    },

    {
      id: "f14-q5",

      type: "text",

      question:
        "Votre véhicule (isolé) de transport en commun comporte 3 essieux. Quelle peut être sa longueur maximale ?",

      canonicalAnswer: "15 m",

      acceptedAnswers: ["15 m", "15 mètres", "15m"],

      explanation:
        "La longueur maximale autorisée d'un véhicule isolé de transport en commun à 3 essieux est de 15 mètres.",

      tags: ["dimensions", "longueur"],
    },

    {
      id: "f14-q6",

      type: "text",

      question:
        "La date limite de validité de la dernière visite technique est-elle inscrite sur le certificat d'immatriculation du véhicule ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["controle-technique", "documents"],
    },

    {
      id: "f14-q7",

      type: "text",

      question:
        "Est-il possible de conduire un véhicule équipé d'un chronotachygraphe numérique et un véhicule équipé d'un chronotachygraphe à disque le même jour ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Il est possible de conduire les deux types de véhicules le même jour, à condition de respecter les règles d'enregistrement des activités.",

      tags: ["chronotachygraphe", "rse"],
    },

    {
      id: "f14-q8",

      type: "text",

      question:
        "Un véhicule de transport en commun, d'un PTAC de 19 t, peut-il circuler à vide sur une route où une barrière de dégel à 12 t est mise en place ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["degel", "ptac"],
    },

    {
      id: "f14-q9",

      type: "text",

      question:
        "Si je perds tous les points de mon permis de conduire à la suite d'infractions commises au volant de ma voiture personnelle, pourrai-je continuer à conduire mon car ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "L'invalidation du permis concerne toutes les catégories détenues.",

      tags: ["permis", "infractions"],
    },

    {
      id: "f14-q10",

      type: "text",

      question:
        "Les accidents mortels entre un poids lourd et une voiture sont majoritairement des accidents avec des véhicules circulant dans le même sens. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      tags: ["securite-routiere", "accidentologie"],
    },
  ],
}
