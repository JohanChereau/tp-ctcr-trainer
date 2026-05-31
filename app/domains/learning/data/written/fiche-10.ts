import type { Lesson } from "../../types/learning"

export const fiche10: Lesson = {
  id: "fiche-10",

  title: "Fiche 10",

  contentType: "questions",

  questions: [
    {
      id: "f10-q1",

      type: "text",

      question:
        "Les extincteurs utilisés sur les véhicules lourds doivent être entretenus et vérifiés de manière régulière. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Les extincteurs doivent être entretenus et contrôlés périodiquement afin de garantir leur bon fonctionnement.",

      tags: ["securite", "extincteur"],
    },

    {
      id: "f10-q2",

      type: "text",

      question:
        "L'amplitude de la journée de travail d'un conducteur routier comprend le temps de service et les pauses. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "L'amplitude correspond à la période comprise entre la prise et la fin de service, pauses incluses.",

      tags: ["reglementation-sociale", "temps-de-travail"],
    },

    {
      id: "f10-q3",

      type: "text",

      question:
        "Quel type de suspension équipe généralement les véhicules lourds permettant de régler la hauteur du véhicule ?",

      canonicalAnswer: "La suspension pneumatique ou Pneumatique",

      acceptedAnswers: [
        "suspension pneumatique",
        "la suspension pneumatique",
        "pneumatique",
      ],

      explanation:
        "La suspension pneumatique permet notamment d'ajuster la hauteur du véhicule.",

      tags: ["suspension", "vehicule"],
    },

    {
      id: "f10-q4",

      type: "text",

      question:
        "Sur une autoroute à 4 voies, un autocar d'une longueur totale de 13 m peut-il effectuer un dépassement en empruntant la 3ème voie ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["circulation", "depassement"],
    },

    {
      id: "f10-q5",

      type: "text",

      question:
        "Quelle est la majoration maximale autorisée du PTAC pour un véhicule équipé d'un dispositif ralentisseur pesant 600 kg ?",

      canonicalAnswer: "500 kg",

      acceptedAnswers: ["500 kg", "500kg", "500 kilogrammes"],

      explanation: "La majoration maximale autorisée est limitée à 500 kg.",

      tags: ["ptac", "ralentisseur", "masses"],
    },

    {
      id: "f10-q6",

      type: "text",

      question:
        "Une visite technique peut-elle être imposée à un véhicule de transport en commun impliqué dans un accident ayant provoqué la mort ou des blessures graves ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["visite-technique", "accident"],
    },

    {
      id: "f10-q7",

      type: "image",

      question:
        "Ce signal interdit-il l'accès aux véhicules mesurant plus de 3,50 m de hauteur, chargement compris ?",

      image: "/images/traffic-signs/interdiction_3_5m_hauteur.png",

      imageAlt: "Signal de limitation de hauteur à 3,5 mètres",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      explanation:
        "Le panneau interdit l'accès aux véhicules dont la hauteur totale dépasse 3,50 m.",

      tags: ["signalisation", "hauteur"],
    },

    {
      id: "f10-q8",

      type: "text",

      question:
        "Une carte conducteur utilisée dans un chronotachygraphe numérique enregistre-t-elle l'immatriculation du véhicule conduit ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["chronotachygraphe", "carte-conducteur"],
    },

    {
      id: "f10-q9",

      type: "text",

      question:
        "Lors d'un contrôle sur la route, est-il obligatoire de pouvoir présenter votre carte de qualification conducteur (CQC) ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["cqc", "controle"],
    },

    {
      id: "f10-q10",

      type: "text",

      question:
        "Les accidents corporels entre un poids lourd et une voiture sont majoritairement des accidents avec des véhicules circulant dans le même sens. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Les statistiques montrent que ce type d'accident se produit majoritairement entre véhicules circulant dans le même sens.",

      tags: ["accidentologie", "securite-routiere"],
    },
  ],
}
