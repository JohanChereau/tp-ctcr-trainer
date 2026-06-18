import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard07: OralExamCard = {
  lessonId: "oral-07",

  number: 7,

  title: "Dynamique du véhicule",

  sections: [
    {
      title: "Vitesse",

      markdown: `
### Énergie cinétique

L'énergie cinétique correspond à l'**énergie liée au mouvement du véhicule**.

### Elle dépend

- De la **masse** du véhicule
- Du **carré de la vitesse**

### Conséquences

- Plus la vitesse augmente, plus l'énergie augmente fortement
- Lors d'un choc, cette énergie se libère violemment
- Les conséquences sont souvent plus graves avec les véhicules lourds

> **À retenir**
>
> La vitesse est toujours un facteur aggravant d'accident.
      `,
    },

    {
      title: "Centre de gravité",

      markdown: `
### Définition

> Le **centre de gravité** est le point d'équilibre du véhicule.

### Évolution

- Déterminé à l'origine par le constructeur
- Évolue en fonction du chargement

### Conséquences d'un mauvais équilibre

- Balancement vers l'avant
- Balancement vers l'arrière
- Balancement de droite à gauche
- Risque de renversement

> **À retenir**
>
> Plus le centre de gravité est **bas**, plus le véhicule est **stable**.
      `,
    },

    {
      title: "Force centrifuge",

      markdown: `
### Définition

> La **force centrifuge** attire le véhicule vers l'extérieur du virage.

### Elle dépend

- De la **masse** du véhicule
- Du **carré de la vitesse**
- Du **rayon du virage**

### Influence du rayon

- **Petit rayon** → force centrifuge importante
- **Grand rayon** → force centrifuge plus faible

### Conséquences

- Déport du véhicule
- Modification de trajectoire
- Risque de perte de contrôle

> **À retenir**
>
> Plus la vitesse augmente, plus la force centrifuge augmente.
      `,
    },

    {
      title: "Adaptation de la conduite",

      children: [
        {
          title: "À l'homme",

          markdown: `
La conduite doit être adaptée :

- À l'expérience du conducteur
- À son état de fatigue
- À ses capacités physiques et mentales
          `,
        },

        {
          title: "Au véhicule",

          markdown: `
La conduite doit être adaptée :

- À la masse du véhicule
- À son gabarit
- À son chargement
- Aux équipements embarqués (limiteur de vitesse)
          `,
        },

        {
          title: "À l'environnement",

          markdown: `
La conduite doit être adaptée :

- À l'état de la route
- Aux conditions météorologiques
- À la visibilité

### Route mouillée

- Adhérence réduite
- Distance de freinage multipliée par **2**
- Réduire sa vitesse
- Augmenter les distances de sécurité

### Véhicules lourds

- Limitations de vitesse spécifiques
- Limiteur de vitesse obligatoire
          `,
        },
      ],
    },
  ],
}
