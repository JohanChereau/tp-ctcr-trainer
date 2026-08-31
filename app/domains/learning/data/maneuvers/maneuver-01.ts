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
      type: "single-choice",
      question:
        "Quel est l'objectif du test de maniabilité de la catégorie D ?",
      options: [
        "Évaluer la conduite à vitesse élevée",
        "S'assurer de l'aptitude à réaliser une manœuvre en marche arrière décrivant une courbe",
        "Évaluer uniquement la précision du stationnement en marche avant",
        "Contrôler la connaissance du Code de la route",
      ],
      correctOption:
        "S'assurer de l'aptitude à réaliser une manœuvre en marche arrière décrivant une courbe",
      explanation:
        "Le test de maniabilité vise à vérifier l'aptitude du candidat à réaliser une manœuvre en marche arrière décrivant une courbe et à positionner le véhicule de manière sûre.",
      tags: ["manoeuvre", "examen"],
    },

    {
      id: "maneuver01-q02",
      type: "single-choice",
      question:
        "Quelle est la durée maximale prévue pour réaliser le test de maniabilité ?",
      options: ["3 minutes", "5 minutes", "7 minutes", "10 minutes"],
      correctOption: "5 minutes",
      explanation:
        "Le candidat ne doit pas dépasser 5 minutes pour réaliser le test de maniabilité.",
      tags: ["manoeuvre", "examen", "temps"],
    },

    {
      id: "maneuver01-q03",
      type: "single-choice",
      question:
        "À quel moment le chronomètre du test de maniabilité est-il déclenché ?",
      options: [
        "Lorsque le candidat commence la marche arrière",
        "Dès l'entrée en mouvement du véhicule",
        "Lorsque le véhicule franchit le premier obstacle",
        "Au signal du candidat après son premier arrêt",
      ],
      correctOption: "Dès l'entrée en mouvement du véhicule",
      explanation:
        "L'expert déclenche le chronomètre dès l'entrée en mouvement du véhicule. L'arrêt du chronomètre se fait sur indication du candidat à la fin de l'exercice.",
      tags: ["manoeuvre", "examen", "temps"],
    },

    {
      id: "maneuver01-q04",
      type: "single-choice",
      question:
        "À quelle allure les déplacements doivent-ils être réalisés pendant le test de maniabilité ?",
      options: [
        "À allure normale",
        "À allure réduite",
        "À une vitesse minimale de 10 km/h",
        "L'allure n'est pas encadrée",
      ],
      correctOption: "À allure réduite",
      explanation:
        "Le texte prévoit que les déplacements du véhicule sont réalisés à allure réduite.",
      tags: ["manoeuvre", "securite"],
    },

    {
      id: "maneuver01-q05",
      type: "single-choice",
      question:
        "Le candidat constate que sa trajectoire doit être corrigée. Peut-il effectuer une marche avant ?",
      options: [
        "Non, toute marche avant entraîne l'échec",
        "Oui, une seule fois maximum",
        "Oui, une ou plusieurs marches avant sont possibles pour rectifier la trajectoire",
        "Oui, mais uniquement sur autorisation de l'expert",
      ],
      correctOption:
        "Oui, une ou plusieurs marches avant sont possibles pour rectifier la trajectoire",
      explanation:
        "Le candidat peut rectifier sa trajectoire par une ou plusieurs marches avant. Celles-ci doivent toutefois respecter le tracé prévu par la fiche de maniabilité et s'effectuer en direction du ou des obstacles précédents.",
      tags: ["manoeuvre", "trajectoire", "examen"],
    },

    {
      id: "maneuver01-q06",
      type: "multiple-choice",
      question:
        "Pendant le test de maniabilité, quelles actions le candidat peut-il effectuer de sa propre initiative ?",
      options: [
        "S'arrêter",
        "Descendre du véhicule après l'avoir immobilisé",
        "Regarder en vision directe",
        "Déplacer un obstacle gênant",
      ],
      correctOptions: [
        "S'arrêter",
        "Descendre du véhicule après l'avoir immobilisé",
        "Regarder en vision directe",
      ],
      explanation:
        "Le candidat peut s'arrêter, descendre après immobilisation du véhicule, regarder en vision directe et rectifier sa trajectoire. Il ne peut évidemment pas déplacer les obstacles du parcours.",
      tags: ["manoeuvre", "examen", "securite"],
    },

    {
      id: "maneuver01-q07",
      type: "multiple-choice",
      question:
        "Parmi les situations suivantes, lesquelles entraînent l'échec au test de maniabilité ?",
      options: [
        "Dépasser le temps imparti",
        "Déplacer, renverser ou incliner un obstacle avec le véhicule",
        "Sortir de l'aire de manœuvre",
        "S'arrêter volontairement pendant la manœuvre",
      ],
      correctOptions: [
        "Dépasser le temps imparti",
        "Déplacer, renverser ou incliner un obstacle avec le véhicule",
        "Sortir de l'aire de manœuvre",
      ],
      explanation:
        "Le dépassement du temps, le déplacement d'un obstacle par le véhicule et la sortie de l'aire de manœuvre font partie des causes d'échec. Un arrêt volontaire n'est pas, à lui seul, une cause d'échec.",
      tags: ["manoeuvre", "examen", "echec"],
    },

    {
      id: "maneuver01-q08",
      type: "single-choice",
      question: "Comment est évalué le résultat du test de maniabilité ?",
      options: [
        "Par une note sur 20",
        "Par une note de 0 à 3",
        "Par un résultat binaire : bon ou échec",
        "Selon le nombre de fautes commises",
      ],
      correctOption: "Par un résultat binaire : bon ou échec",
      explanation:
        "Le résultat du test de maniabilité n'est pas modulable : il est binaire, soit bon, soit échec.",
      tags: ["manoeuvre", "examen", "evaluation"],
    },

    {
      id: "maneuver01-q09",
      type: "single-choice",
      question:
        "Dans le cadre des épreuves anticipées du TP CTCR, que se passe-t-il en cas d'échec au premier test de maniabilité ?",
      options: [
        "Le candidat est définitivement éliminé du titre",
        "Un deuxième essai est proposé immédiatement après le premier",
        "Le candidat doit attendre obligatoirement la session suivante",
        "L'échec peut être compensé par l'épreuve de conduite",
      ],
      correctOption:
        "Un deuxième essai est proposé immédiatement après le premier",
      explanation:
        "Pour les épreuves anticipées du TP CTCR, un deuxième test de maniabilité est proposé immédiatement après le premier en cas d'échec.",
      tags: ["manoeuvre", "tp-ctcr", "rattrapage"],
    },

    {
      id: "maneuver01-q10",
      type: "multiple-choice",
      question:
        "Quelles règles doivent notamment être respectées pour réussir le test de maniabilité ?",
      options: [
        "Ne pas dépasser 5 minutes",
        "Ne pas déplacer, renverser ou incliner un obstacle avec le véhicule",
        "Ne pas sortir de l'aire de manœuvre",
        "Ne jamais effectuer de marche avant",
      ],
      correctOptions: [
        "Ne pas dépasser 5 minutes",
        "Ne pas déplacer, renverser ou incliner un obstacle avec le véhicule",
        "Ne pas sortir de l'aire de manœuvre",
      ],
      explanation:
        "Le test doit être réalisé dans le temps imparti, sans déplacer les obstacles ni sortir de l'aire de manœuvre. Les marches avant de correction sont autorisées dans les conditions prévues par le parcours.",
      tags: ["manoeuvre", "examen", "echec"],
    },
  ],
}
