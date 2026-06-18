import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard12: OralExamCard = {
  lessonId: "oral-12",

  number: 12,

  title: "Systèmes de sécurité et d'aides à la conduite",

  sections: [
    {
      title: "Définition",

      markdown: `
Les systèmes de sécurité et d'aides à la conduite permettent :

- D'informer le conducteur
- De l'assister dans sa conduite
- De faciliter certaines tâches
- De prévenir les situations dangereuses
- D'aider à éviter les accidents

### Ils permettent notamment

- D'améliorer la perception de l'environnement
- De détecter certains risques
- De réduire la charge de travail du conducteur

### Exemples

- Direction assistée
- Détecteur de gel
- Détecteur d'obstacles
- Radar de maintien des distances

> **À retenir**
>
> Ces systèmes assistent le conducteur mais ne le remplacent jamais.
      `,
    },

    {
      title: "Exemples et rôles",

      children: [
        {
          title: "Aides à la sécurité",

          markdown: `
### ABS

**Anti-Blocage des Roues**

- Évite le blocage des roues
- Conserve la maîtrise de la trajectoire

### EBS

**Electronic Braking System**
(Système de freinage électronique)

- Optimise le freinage
- Répartit l'effort de freinage
- Réduit les distances de freinage
- Fonctionne avec l'ABS et l'ESP

### ESP

**Contrôle électronique de stabilité**

- Corrige certaines pertes de trajectoire
- Aide à maintenir le véhicule sur sa trajectoire
- Particulièrement utile en virage

### AFU

**Aide au Freinage d'Urgence**

- Détecte un freinage d'urgence
- Utilise automatiquement la puissance maximale de freinage

### Limiteur de vitesse

- Empêche de dépasser une vitesse programmée
- Facilite le respect des limitations

### Radar de maintien des distances

- Mesure la distance avec le véhicule précédent
- Aide à conserver une distance de sécurité suffisante

### Aide au maintien dans la voie

- Détecte les franchissements involontaires de ligne
- Alerte le conducteur
- Aide à rester dans sa voie

### Détecteur de fatigue

- Analyse le comportement du conducteur
- Détecte certains signes de fatigue
- Conseille une pause
          `,
        },

        {
          title: "Navigation et stationnement",

          markdown: `
### GPS

- Calcul d'itinéraire
- Restrictions de circulation
- Travaux
- Embouteillages

### Aides au stationnement

- Radars avant
- Radars arrière
- Radars latéraux
- Caméras de recul
- Caméras panoramiques
- Frein de stationnement électrique

### Objectif

- Faciliter les manœuvres
- Réduire les risques d'accrochage
          `,
        },

        {
          title: "Automatisation des tâches",

          markdown: `
### Éclairage automatique

- Allumage automatique des feux

### Essuie-glaces automatiques

- Déclenchement automatique grâce à un capteur de pluie

### Régulateur de vitesse

- Maintien automatique de la vitesse choisie

### Frein de stationnement automatique

- Serrage automatique du frein de parc

### Boîte automatique ou robotisée

- Gestion automatique des changements de rapports

### Détecteur de pression des pneus

- Contrôle de la pression des pneumatiques
- Alerte en cas d'anomalie
          `,
        },
      ],
    },

    {
      title: "Dangers",

      markdown: `
### Confiance excessive

Le conducteur peut :

- Devenir moins vigilant
- Anticiper moins efficacement
- Se reposer excessivement sur la technologie

### Risques de distraction

Ne jamais :

- Régler le GPS en roulant
- Manipuler un écran tactile en conduisant
- Quitter la route des yeux trop longtemps

> **À retenir**
>
> Le regard doit rester dirigé vers la route.

### Risques liés aux pannes

Les systèmes peuvent tomber en panne.

Le conducteur doit :

- Connaître son véhicule
- Savoir conduire sans assistance
- Savoir réagir en cas de défaillance

### Limites des aides à la conduite

Même avec ces systèmes :

- Respecter les distances de sécurité
- Respecter les limitations de vitesse
- Rester maître de son véhicule

### Les aides à la conduite ne permettent jamais

- D'augmenter sa vitesse
- De prendre davantage de risques
- De repousser ses limites

> **À retenir**
>
> Le conducteur reste toujours responsable de sa conduite.
      `,
    },
  ],
}
