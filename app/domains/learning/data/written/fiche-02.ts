import type { Lesson } from "../../types/learning"

export const fiche02: Lesson = {
  id: "fiche-02",

  title: "Fiche 2",

  contentType: "questions",

  questions: [
    {
      id: "fep2-q1",

      type: "text",

      question:
        "Une pierre coincée entre des roues jumelées peut entraîner l'éclatement d'un pneumatique. Vrai ou Faux ?",

      canonicalAnswer: "Vrai",

      acceptedAnswers: ["vrai"],

      explanation:
        "Une pierre coincée entre deux roues jumelées peut provoquer une détérioration ou l'éclatement d'un pneumatique.",

      tags: ["pneumatiques", "securite"],
    },

    {
      id: "fep2-q2",

      type: "text",

      question:
        "Lors d'un voyage organisé, pendant la visite programmée d'un monument, vous attendez vos passagers durant 10 minutes dans votre véhicule. Sur quel symbole devez-vous positionner le sélecteur d'activité du chronotachygraphe ?",

      canonicalAnswer: "Disponibilité ou Carré barré",

      acceptedAnswers: [
        "disponibilité",
        "disponibilite",
        "carré barré",
        "carre barre",
        "symbole disponibilité",
        "symbole disponibilite",
      ],

      explanation:
        "L'attente des passagers dans le véhicule correspond à une période de disponibilité sur le chronotachygraphe.",

      tags: ["chronotachygraphe", "activites"],
    },

    {
      id: "fep2-q3",

      type: "text",

      question:
        "Dans un véhicule neuf, les passagers doivent-ils être prévenus de l'obligation d'attacher leur ceinture de sécurité ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["ceinture", "securite-passagers"],
    },

    {
      id: "fep2-q4",

      type: "text",

      question:
        "Hors agglomération, sur une route à double sens, vous suivez un camion à 70 km/h. Quel intervalle de sécurité minimum devez-vous respecter ?",

      canonicalAnswer: "50 m",

      acceptedAnswers: ["50 m", "50m", "50 mètres", "cinquante mètres"],

      explanation:
        "À 70 km/h, l'intervalle de sécurité minimal correspond à environ 50 mètres.",

      tags: ["distance-securite", "circulation"],
    },

    {
      id: "fep2-q5",

      type: "text",

      question:
        "Quel est le PTAC maximal d'un véhicule isolé de transport en commun comportant 2 essieux ?",

      canonicalAnswer: "19 t",

      acceptedAnswers: ["19 t", "19t", "19 tonnes"],

      tags: ["ptac", "masses", "vehicule"],
    },

    {
      id: "fep2-q6",

      type: "text",

      question:
        "Pour un véhicule neuf, quel document devez-vous consulter pour savoir si un accompagnateur est obligatoire lors d'un transport d'enfants ?",

      canonicalAnswer: "L'attestation d'aménagement",

      acceptedAnswers: [
        "attestation d'aménagement",
        "attestation amenagement",
        "l'attestation d'aménagement",
        "l attestation d amenagement",
        "attestation d amenagement",
      ],

      explanation:
        "L'attestation d'aménagement précise notamment les conditions d'exploitation du véhicule et les obligations liées au transport d'enfants.",

      tags: ["documents", "transport-enfants"],
    },

    {
      id: "fep2-q7",

      type: "text",

      question:
        "Le contrôle et le remplissage du circuit de refroidissement s'effectuent plutôt moteur chaud ou moteur froid ?",

      canonicalAnswer: "Moteur à froid",

      acceptedAnswers: ["moteur froid", "à froid", "a froid", "froid"],

      explanation:
        "Le contrôle et le remplissage du liquide de refroidissement doivent être effectués moteur froid afin d'éviter tout risque de brûlure.",

      tags: ["mecanique", "refroidissement"],
    },

    {
      id: "fep2-q8",

      type: "text",

      question:
        "En double équipage, en France, vous êtes assis à côté du conducteur. Votre temps de conduite continue est-il interrompu ?",

      canonicalAnswer: "Oui",

      acceptedAnswers: ["oui"],

      tags: ["temps-de-conduite", "double-equipage"],
    },

    {
      id: "fep2-q9",

      type: "image",

      question:
        "Ce signal concerne uniquement les véhicules affectés au transport de marchandises excédant 3 500 kg de PTAC ?",

      image: "/images/traffic-signs/interdiction_tourner_gauche_livraisons.png",

      imageAlt:
        "Panneau d'interdiction de tourner à gauche avec panonceau poids lourd",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      tags: ["signalisation", "poids-lourds"],
    },

    {
      id: "fep2-q10",

      type: "text",

      question:
        "Dans une longue descente, en cas de rupture de freins, si j'utilise une voie de détresse, le véhicule que je conduis sera-t-il gravement endommagé ?",

      canonicalAnswer: "Non",

      acceptedAnswers: ["non"],

      explanation:
        "Une voie de détresse est conçue pour arrêter un véhicule en sécurité. Elle peut occasionner des dommages mineurs mais son objectif est d'éviter un accident grave.",

      tags: ["securite", "voie-de-detresse"],
    },
  ],
}
