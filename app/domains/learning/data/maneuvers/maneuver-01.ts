import type { Lesson } from "../../types/learning"

export const maneuver01: Lesson = {
  id: "maneuver-01",

  title: "Manœuvres du plateau",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "OQRneSVdLRw",
  },

  markdown: `
# Manœuvres du plateau

Cette fiche regroupe les informations essentielles concernant les manœuvres de l'épreuve plateau du permis D.

---

# Les 4 manœuvres possibles

Au début de l'épreuve, le jury procède à un tirage au sort afin de déterminer la manœuvre à réaliser.

Les 4 possibilités sont :

- Slalom + créneau à droite.
- Slalom + créneau à gauche.
- Slalom + arrêt de précision à droite.
- Slalom + arrêt de précision à gauche.

⚠️ La marche avant permettant d'accéder à la zone de manœuvre n'est pas prise en compte.

---

# Déroulement de l'épreuve

À partir du début de la marche arrière :

- Vous disposez de **5 minutes** pour réaliser la manœuvre.
- Vous avez droit à un **deuxième essai** si nécessaire.

Pendant la manœuvre, vous pouvez :

- Avancer autant de fois que nécessaire pour vous replacer.
- Descendre du véhicule afin de contrôler votre position.

⚠️ En avançant, vous devez toujours revenir sur votre trajectoire. Il n'est pas possible d'avancer dans une autre direction pour se repositionner.

---

# Critères de réussite

Pendant toute la manœuvre :

- Ne pas franchir les lignes blanches.
- Ne pas renverser de quilles.
- Respecter les consignes de la manœuvre tirée au sort.

---

# Conseils

- La roue arrière constitue le point de pivot du véhicule.
- Contrôler régulièrement les rétroviseurs adaptés à la manœuvre.
- Ne pas hésiter à sortir la tête par la fenêtre pour améliorer la visibilité.
- Régler les rétroviseurs vers le bas afin de visualiser la roue avant.
- Se concentrer sur les repères appris pendant la formation.
- Manœuvrer à faible allure.
- Toujours garder le véhicule en mouvement : une vitesse trop élevée réduit la marge de manœuvre et peut compliquer le repositionnement.
`,

  questions: [
    {
      id: "maneuver01-q01",

      type: "multiple-choice",

      question: "Qui va réussir sa manœuvre du premier coup ?",

      options: [
        "Moi 😎",
        "Toujours moi 😎",
        "Évidemment moi 😎",
        "Le voisin 🤝",
      ],

      correctOptions: [
        "Moi 😎",
        "Toujours moi 😎",
        "Évidemment moi 😎",
        "Le voisin 🤝",
      ],

      explanation:
        "L'objectif n'est pas d'être meilleur que les autres, mais de réussir sa propre manœuvre. Toi comme ton voisin pouvez y arriver. 🚍💪",
    },

    {
      id: "maneuver01-q02",

      type: "single-choice",

      question:
        "Quel est le principal point de pivot d'un autocar pendant une manœuvre ?",

      options: [
        "Les roues avant",
        "Les roues arrière",
        "Le pare-chocs",
        "Le volant",
      ],

      correctOption: "Les roues arrière",
    },

    {
      id: "maneuver01-q03",

      type: "single-choice",

      question: "Quel rétroviseur est le plus important pendant une manœuvre ?",

      options: [
        "Le principal",
        "Le grand angle",
        "L'antéviseur",
        "Ils sont tous importants selon la situation",
      ],

      correctOption: "Ils sont tous importants selon la situation",
    },

    {
      id: "maneuver01-q04",

      type: "single-choice",

      question:
        "Combien de temps as-tu pour réaliser la manœuvre (à partir de la marche arrière) ?",

      options: [
        "3 minutes 😰",
        "5 minutes 😎 Ça passe largement !",
        "10 minutes 😴",
        "Autant que je veux 😂",
      ],

      correctOption: "5 minutes 😎 Ça passe largement !",
    },

    {
      id: "maneuver01-q05",

      type: "single-choice",

      question: "Un repère ne se passe pas comme prévu. Que fais-tu ?",

      options: [
        "Je panique 😱",
        "Je respire, je me replace et je continue 😎",
        "J'abandonne 😭",
        "Je ferme les yeux 🙈",
      ],

      correctOption: "Je respire, je me replace et je continue 😎",
    },

    {
      id: "maneuver01-q06",

      type: "single-choice",

      question: "Le meilleur rythme pendant une manœuvre est :",

      options: [
        "Le plus vite possible 🏎️",
        "Doucement, avec des repères et toujours en mouvement 👍",
        "À fond puis on verra 😅",
        "En roue libre 😂",
      ],

      correctOption: "Doucement, avec des repères et toujours en mouvement 👍",
    },

    {
      id: "maneuver01-q07",

      type: "multiple-choice",

      question: "Qui est le patron du plateau aujourd'hui ? 😎",

      options: ["Moi 💪", "Encore moi 💪", "Toujours moi 💪", "Le stress 😅"],

      correctOptions: ["Moi 💪", "Encore moi 💪", "Toujours moi 💪"],
    },

    {
      id: "maneuver01-q08",

      type: "multiple-choice",

      question: "Ton état d'esprit juste avant de reculer ?",

      options: ["Calme 😌", "Concentré 🎯", "Confiant 😎", "Paniqué 😱"],

      correctOptions: ["Calme 😌", "Concentré 🎯", "Confiant 😎"],
    },

    {
      id: "maneuver01-q09",

      type: "multiple-choice",

      question: "Tu es capable de réussir cette manœuvre ?",

      options: [
        "Oui 💪",
        "Évidemment 😎",
        "Sans aucun doute 🚍",
        "J'espère... 😬",
      ],

      correctOptions: ["Oui 💪", "Évidemment 😎", "Sans aucun doute 🚍"],
    },

    {
      id: "maneuver01-q10",

      type: "multiple-choice",

      question: "Tu entres sur le plateau avec quelle mentalité ?",

      options: [
        "Je vais gérer. 😎",
        "Je connais mes repères. 🎯",
        "Je prends mon temps et ça va le faire. 💪",
        "Je vais improviser... 😅",
      ],

      correctOptions: [
        "Je vais gérer. 😎",
        "Je connais mes repères. 🎯",
        "Je prends mon temps et ça va le faire. 💪",
      ],
    },
  ],
}
