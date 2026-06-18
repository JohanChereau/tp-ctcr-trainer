import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard03: OralExamCard = {
  lessonId: "oral-03",

  number: 3,

  title: "Conduite en montagne ou en zone accidentée",

  sections: [
    {
      title: "La montée",

      children: [
        {
          title: "Dangers",

          markdown: `
- Croisements difficiles
- Chaussée étroite
- Virages et épingles
- Obstacles ou surprises
- Véhicules de déneigement
- Gabarit et masse du véhicule
- Surchauffe du moteur
          `,
        },

        {
          title: "Précautions",

          markdown: `
- Adapter les rapports de boîte
- Vérifier le circuit de refroidissement
- Respecter les règles de croisement
- Ne pas changer de rapport dans les virages
- Klaxon de jour
- Appels lumineux de nuit

### Règle de croisement

- En général : le véhicule qui descend s'arrête et recule
- Exception : le véhicule le plus maniable effectue la manœuvre
          `,
        },
      ],
    },

    {
      title: "Le sommet",

      children: [
        {
          title: "Dangers",

          markdown: `
- Neige
- Brouillard
- Verglas
- Froid important
          `,
        },

        {
          title: "Précautions",

          markdown: `
- Prévoir ou installer les chaînes
- Utiliser un carburant grand froid si nécessaire
- S'informer sur l'état des routes
- Vérifier les fermetures de cols
- Privilégier les tunnels lorsque c'est possible
          `,
        },
      ],
    },

    {
      title: "La descente",

      children: [
        {
          title: "Dangers",

          markdown: `
- Énergie cinétique
- Vitesse
- Masse et gabarit du véhicule
- Croisements difficiles
- Chaussée étroite
- Virages

### Risque principal

- Surchauffe des freins
- Perte d'efficacité du freinage
- Perte de contrôle du véhicule
          `,
        },

        {
          title: "Précautions",

          markdown: `
- Adapter les rapports de boîte
- Utiliser le frein moteur
- Utiliser les ralentisseurs
- Respecter les règles de croisement
- Klaxon de jour
- Appels lumineux de nuit
- Adapter constamment sa vitesse
- Maîtriser le fonctionnement des boîtes automatiques et robotisées
          `,
        },
      ],
    },
  ],
}
