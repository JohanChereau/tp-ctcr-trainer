import type { Release } from "../types/changelog"

export const releases: Release[] = [
  {
    version: "1.0.0",
    title: "Refonte de l'application",
    date: "2026-06-28",

    sections: [
      {
        title: "✨ Nouveautés",

        items: [
          "Nouvelle page d'accueil avec tableau de bord et suivi de progression.",
          "Ajout des catégories Code de la route, Circulation, Thèmes, Manœuvres et Socle 2.",
          "Ajout des premiers cours de Code de la route, dont une fiche complète sur les distances et le temps de réaction.",
          "Nouveau calendrier de formation intégré avec affichage des séances de formation.",
          "Ajout d'un système de nouveautés (changelog) accessible directement depuis l'application.",
        ],
      },

      {
        title: "🎨 Interface",

        items: [
          "Refonte graphique complète avec un design plus moderne, épuré et responsive.",
          "Nouvelles cartes pour les modules, fiches, actions et pages de révision.",
          "Nouveaux en-têtes harmonisés sur l'ensemble de l'application.",
          "Amélioration de l'expérience mobile et de nombreux ajustements ergonomiques.",
        ],
      },

      {
        title: "📈 Progression",

        items: [
          "Refonte complète du système de statistiques.",
          "Les questions non encore réalisées sont désormais prises en compte dans la progression.",
          "Ajout d'un suivi détaillé par question, fiche et module.",
          "Nouveaux badges de progression plus pertinents.",
          "Mission quotidienne intelligente proposant automatiquement les points faibles ou un quiz aléatoire selon votre progression.",
        ],
      },

      {
        title: "📚 Contenu",

        items: [
          "Ajout de nombreuses nouvelles fiches de révision.",
          "Amélioration des fiches orales et des supports pédagogiques.",
          "Ajout de nouvelles illustrations et ressources visuelles.",
          "Amélioration des réponses acceptées et des explications dans les quiz.",
        ],
      },
    ],
  },
]
