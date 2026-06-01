import type { Lesson } from "../../types/learning"

export const fiche07: Lesson = {
  id: "fiche-07",

  title: "Fiche 7",

  contentType: "questions",

  questions: [
    {
      id: "fep7-q1",

      type: "text",

      question:
        "En circulation, le fait de freiner désactive obligatoirement le régulateur de vitesse. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "L'action sur la pédale de frein provoque automatiquement la désactivation du régulateur de vitesse.",

      tags: ["regulateur-de-vitesse", "conduite"],
    },

    {
      id: "fep7-q2",

      type: "text",

      question:
        "En règle générale, quelle est la durée minimale normale (non réduite) de repos hebdomadaire pour un conducteur d'autocar ?",

      canonicalAnswer: "45 h",

      acceptedAnswers: ["45 h", "45h", "45 heures", "quarante-cinq heures"],

      explanation:
        "La durée normale du repos hebdomadaire est de 45 heures consécutives.",

      tags: ["temps-de-repos", "reglementation-sociale"],
    },

    {
      id: "fep7-q3",

      type: "text",

      question:
        "Le circuit de freinage européen rend le freinage de l'essieu avant indépendant du freinage de l'essieu arrière. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Le circuit européen est conçu avec des circuits indépendants afin d'améliorer la sécurité en cas de défaillance.",

      tags: ["freinage", "securite", "mecanique"],
    },

    {
      id: "fep7-q4",

      type: "text",

      question:
        "Par temps de brouillard sur autoroute, si la visibilité est inférieure à 50 m, quelle est la vitesse maximale autorisée ?",

      canonicalAnswer: "50 km/h",

      acceptedAnswers: ["50 km/h", "50 kmh", "50 kilomètres par heure"],

      explanation:
        "Lorsque la visibilité est inférieure à 50 mètres, la vitesse maximale autorisée est de 50 km/h sur toutes les routes.",

      tags: ["vitesses", "brouillard", "securite"],
    },

    {
      id: "fep7-q5",

      type: "text",

      question:
        "Dans un autobus, quel est le poids moyen forfaitaire d'un voyageur adulte avec ses bagages à main ?",

      canonicalAnswer: "65 kg",

      acceptedAnswers: ["65 kg", "65kg", "65 kilogrammes"],

      tags: ["masses", "voyageurs", "autobus"],
    },

    {
      id: "fep7-q6",

      type: "text",

      question:
        "Quel document spécifique aux véhicules de transport en commun doit figurer à bord d'un autocar neuf, en plus du certificat d'immatriculation et de l'attestation d'assurance ?",

      canonicalAnswer: "L'attestation d'aménagement",

      acceptedAnswers: [
        "attestation d'aménagement",
        "attestation amenagement",
        "l'attestation d'aménagement",
        "l attestation d amenagement",
        "attestation d amenagement",
      ],

      explanation:
        "L'attestation d'aménagement est un document obligatoire propre aux véhicules de transport en commun.",

      tags: ["documents", "transport-en-commun"],
    },

    {
      id: "fep7-q7",

      type: "text",

      question:
        "Vous rentrez chez vous le soir avec l'autocar de l'entreprise. Le matin, le temps de conduite pour vous rendre au collège où vous devez effectuer un transport scolaire est-il compté comme du temps de conduite ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le déplacement effectué avec l'autocar pour rejoindre le lieu de prise de service est comptabilisé comme temps de conduite.",

      tags: ["temps-de-conduite", "transport-scolaire"],
    },

    {
      id: "fep7-q8",

      type: "image",

      question:
        "Ce signal m'annonce-t-il une voie de détresse qui sera située sur ma gauche ?",

      image: "/images/traffic-signs/voie_detresse_droite.png",

      imageAlt: "Panneau annonçant une voie de détresse située sur la droite",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["signalisation", "voie-de-detresse"],
    },

    {
      id: "fep7-q9",

      type: "text",

      question:
        "À partir de 60 ans, quelle est la périodicité des contrôles médicaux pour les conducteurs de transport en commun ?",

      canonicalAnswer: "1 an ou Tous les ans Ou Annuelle",

      acceptedAnswers: ["1 an", "un an", "tous les ans", "annuelle", "annuel"],

      explanation:
        "À partir de 60 ans, le contrôle médical pour les conducteurs de transport en commun devient annuel.",

      tags: ["controle-medical", "aptitude", "conducteur"],
    },

    {
      id: "fep7-q10",

      type: "text",

      question:
        "Un chiffre doublé (ex : 33) dans le rectangle du haut de la plaque orange placée à l'arrière d'un camion signifie : 'Produit de nature à polluer les eaux'. Vrai ou Faux ?",

      canonicalAnswer: "Faux",

      acceptedAnswers: ["faux"],

      explanation:
        "Un chiffre doublé indique une intensification du danger. Il ne signifie pas spécifiquement 'produit de nature à polluer les eaux'.",

      tags: ["matiere-dangereuse", "adr", "signalisation"],
    },
  ],
}
