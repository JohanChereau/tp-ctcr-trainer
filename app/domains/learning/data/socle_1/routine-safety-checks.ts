import type { Lesson } from "../../types/learning"

export const socle101: Lesson = {
  id: "socle1-01",

  title: "Vérifications courantes de sécurité",

  contentType: "markdown",

  markdown: `
# Socle 1 - Vérifications courantes de sécurité

## 1. Vérifications intérieures

Je m'installe au poste de conduite.

J'allume le contact.

Le frein de parc est en position.

![Frein de parc](/images/socle_1/frein_de_parc.png)

*Commande du frein de parc.*

Le témoin du frein de parc est bien allumé sur le tableau de bord, donc le véhicule est bien immobilisé.

![Témoin de frein de parc](/images/socle_1/temoin_frein_de_parc.png)

*Témoin de frein de parc allumé au tableau de bord indiquant l'immobilisation du véhicule.*

Je vérifie la présence de la pochette des documents de bord.

![Documents de bord](/images/socle_1/documents_de_bord.png)

*Pochette contenant les documents réglementaires du véhicule.*

Je vérifie la présence de la lampe autonome.

![Lampe autonome](/images/socle_1/lampe_autonome.png)

*Lampe autonome de sécurité présente à son emplacement.*

Je vérifie la présence de la trousse de secours.

![Trousse de secours](/images/socle_1/trousse_secours.png)

*Trousse de secours réglementaire.*

Je vérifie la présence de l'extincteur.

Je me dirige vers le fond du véhicule afin de vérifier la sellerie et les ceintures de sécurité.

![Équipements de sécurité et aménagement intérieur](/images/socle_1/interieur.png)

*Vue de l'habitacle passagers : sellerie, ceintures de sécurité, marteaux-pics, inscriptions réglementaires et extincteur.*

Pas d'anomalie.

Je fais ensuite le retour en indiquant l'emplacement des marteaux-pics (marteaux brise-vitre) ainsi que des inscriptions réglementaires, notamment celles présentes au niveau des issues de secours : pas d'anomalie.

J'allume les feux de croisement.

J'allume les feux de détresse.

J'invite le jury à sortir afin d'effectuer les vérifications extérieures.

J'ouvre la porte.

Je descends en utilisant mes trois points d'appui.

Je n'oublie pas de refermer la porte après la descente.

---

## 2. Vérifications extérieures

### Côté droit du véhicule

![Côté droit du véhicule](/images/socle_1/cote_droit.png)

*Points de contrôle du côté droit du véhicule.*

Nous sommes ici en présence d'un autocar de 19 tonnes de PTAC, d'une largeur de 2,55 m, d'une longueur de 12,28 m, d'une hauteur de 3,40 m et comportant 45 places assises.

Les glaces de rétroviseurs, l'ensemble du vitrage ainsi que l'ensemble de la carrosserie : pas d'anomalie, hormis quelques griffures sur la partie basse et avant de la carrosserie.

Le répétiteur de feux de détresse, les feux de position latéraux ainsi que le feu de gabarit arrière : pas d'anomalie.

Roue avant, roue arrière : pas d'anomalie.

Je me penche sous le véhicule (dos droit, jambes fléchies) : absence de tâche sous le véhicule, donc pas d'anomalie.

Nous allons maintenant passer à la face avant du véhicule.

---

### Face avant du véhicule

![Face avant du véhicule](/images/socle_1/cote_avant.png)

*Points de contrôle de la face avant du véhicule.*

Les feux de gabarit : pas d'anomalie.

Le pare-brise : présence d'un léger impact n'altérant pas la visibilité du conducteur.

La carrosserie : pas d'anomalie.

Les feux de position, les feux de croisement ainsi que les feux de détresse : pas d'anomalie.

Je me penche sous le véhicule (dos droit, jambes fléchies) : absence de tâche sous le véhicule, donc pas d'anomalie.

Nous allons maintenant passer au côté gauche du véhicule.

---

### Côté gauche du véhicule

![Côté gauche du véhicule](/images/socle_1/cote_gauche.png)

*Points de contrôle du côté gauche du véhicule.*

Les glaces de rétroviseurs, l'ensemble du vitrage ainsi que la carrosserie : pas d'anomalie.

Le répétiteur de feux de détresse, les feux de position latéraux ainsi que le feu de gabarit arrière : pas d'anomalie.

Roue avant, roue arrière : pas d'anomalie.

Je demande au jury :

> Quelle soute souhaitez-vous que je contrôle ?

Le jury m'indique une soute.

Je mets mes gants.

Je me baisse en gardant le dos droit et les jambes fléchies.

J'ouvre la soute.

Absence de chargement : pas d'anomalie.

Je referme la soute en respectant les mêmes règles de sécurité.

Je vérifie ensuite sa bonne fermeture.

Nous allons maintenant passer à la face arrière du véhicule.

---

### Face arrière du véhicule

![Face arrière du véhicule](/images/socle_1/cote_arriere.png)

*Points de contrôle de la face arrière du véhicule.*

Les feux de gabarit supérieurs ainsi que les feux de détresse supérieurs : pas d'anomalie.

La lunette arrière ainsi que la carrosserie : pas d'anomalie.

Les feux rouges et les feux de détresse inférieurs : pas d'anomalie.

Les feux de gabarit arrière : pas d'anomalie.

Je me penche sous le véhicule (dos droit, jambes fléchies) : absence de tâche sous le véhicule, donc pas d'anomalie.

Je demande au jury :

> Pouvez-vous m'aider à contrôler le bon fonctionnement des feux stop s'il vous plaît ?

Je retire mes gants.

Je rejoins le poste de conduite en utilisant mes trois points d'appui.

J'ouvre la fenêtre conducteur.

J'appuie sur la pédale de frein de service.

Je vérifie le signe du jury dans le rétroviseur.

Je referme la fenêtre.

Je redescends en utilisant mes trois points d'appui.

Je referme la porte.

Je rejoins le jury.

Feux stop : pas d'anomalie.

---

# Socle 1 terminé

---

## Ressources complémentaires

🎥 Vidéo AFTRAL - Vérifications de sécurité véhicule voyageurs

https://vimeo.com/395399562/383d21c8dd

  `,

  questions: [
    {
      id: "socle1-q01",
      type: "text",
      question: "Quel est le dispositif qui immobilise le véhicule à l'arrêt ?",
      canonicalAnswer: "frein de parc",
      acceptedAnswers: [
        "frein de parc",
        "le frein de parc",
        "frein à main",
        "frein a main",
      ],
    },
    {
      id: "socle1-q02",
      type: "text",
      question:
        "Quel témoin doit être allumé lorsque le frein de parc est serré ?",
      canonicalAnswer: "témoin de frein de parc",
      acceptedAnswers: [
        "témoin de frein de parc",
        "temoin de frein de parc",
        "voyant de frein de parc",
        "voyant frein de parc",
      ],
    },
    {
      id: "socle1-q03",
      type: "text",
      question:
        "Comment appelle-t-on le dossier contenant les documents réglementaires du véhicule ?",
      canonicalAnswer: "pochette des documents de bord",
      acceptedAnswers: [
        "pochette des documents de bord",
        "documents de bord",
        "pochette de bord",
        "pochette documents de bord",
        "porte documents de bord",
        "porte-documents de bord",
      ],
    },
    {
      id: "socle1-q04",
      type: "text",
      question:
        "Quel équipement de sécurité permet d'éclairer en cas de besoin ?",
      canonicalAnswer: "lampe autonome",
      acceptedAnswers: ["lampe autonome", "lampe", "lampe de secours"],
    },
    {
      id: "socle1-q05",
      type: "text",
      question: "Quel équipement permet d'apporter les premiers soins ?",
      canonicalAnswer: "trousse de secours",
      acceptedAnswers: [
        "trousse de secours",
        "trousse premiers secours",
        "trousse de premiers secours",
      ],
    },
    {
      id: "socle1-q06",
      type: "text",
      question:
        "Quel équipement permet d'intervenir en cas de début d'incendie ?",
      canonicalAnswer: "extincteur",
      acceptedAnswers: ["extincteur", "l'extincteur"],
    },
    {
      id: "socle1-q07",
      type: "text",
      question:
        "Quel terme désigne l'ensemble des sièges et revêtements passagers ?",
      canonicalAnswer: "sellerie",
      acceptedAnswers: ["sellerie", "la sellerie"],
    },
    {
      id: "socle1-q08",
      type: "text",
      question:
        "Comment appelle-t-on les petits marteaux permettant de casser les vitres en cas d'urgence ?",
      canonicalAnswer: "marteaux-pics",
      acceptedAnswers: [
        "marteaux-pics",
        "marteaux pics",
        "marteau-pic",
        "marteau pic",
        "marteaux brise-vitre",
        "marteaux brise vitre",
        "marteau brise-vitre",
        "marteau brise vitre",
        "marteaux de secours",
        "marteau de secours",
      ],
    },
    {
      id: "socle1-q09",
      type: "text",
      question:
        "Comment appelle-t-on les informations obligatoires affichées dans le véhicule ?",
      canonicalAnswer: "inscriptions réglementaires",
      acceptedAnswers: [
        "inscriptions réglementaires",
        "inscriptions reglementaires",
        "signalétique réglementaire",
        "signalétique reglementaire",
        "signaletique réglementaire",
        "signaletique reglementaire",
      ],
    },
    {
      id: "socle1-q10",
      type: "text",
      question: "Comment appelle-t-on l'ensemble des vitres du véhicule ?",
      canonicalAnswer: "vitrage",
      acceptedAnswers: ["vitrage", "le vitrage", "ensemble du vitrage"],
    },
    {
      id: "socle1-q11",
      type: "text",
      question:
        "Quelle partie extérieure contrôle-t-on pour détecter des chocs, griffures ou déformations ?",
      canonicalAnswer: "carrosserie",
      acceptedAnswers: ["carrosserie", "la carrosserie"],
    },
    {
      id: "socle1-q12",
      type: "text",
      question: "Comment appelle-t-on les miroirs des rétroviseurs ?",
      canonicalAnswer: "glaces de rétroviseurs",
      acceptedAnswers: [
        "glaces de rétroviseurs",
        "glaces de retroviseurs",
        "glace de rétroviseur",
        "glace de retroviseur",
      ],
    },
    {
      id: "socle1-q13",
      type: "text",
      question:
        "Quels feux situés sur les côtés signalent la présence du véhicule ?",
      canonicalAnswer: "feux de position latéraux",
      acceptedAnswers: [
        "feux de position latéraux",
        "feux de position lateraux",
        "feux latéraux",
        "feux lateraux",
      ],
    },
    {
      id: "socle1-q14",
      type: "text",
      question: "Quels feux signalent le gabarit du véhicule ?",
      canonicalAnswer: "feux de gabarit",
      acceptedAnswers: ["feux de gabarit", "feu de gabarit"],
    },
    {
      id: "socle1-q15",
      type: "text",
      question:
        "Comment appelle-t-on les feux orange clignotants utilisés pour signaler un danger ?",
      canonicalAnswer: "feux de détresse",
      acceptedAnswers: [
        "feux de détresse",
        "feux de detresse",
        "warnings",
        "warning",
        "feux warning",
      ],
    },
    {
      id: "socle1-q16",
      type: "text",
      question:
        "Quels feux doit-on contrôler à l'avant après les avoir allumés au poste de conduite ?",
      canonicalAnswer: "feux de croisement",
      acceptedAnswers: ["feux de croisement", "codes", "les codes"],
    },
    {
      id: "socle1-q17",
      type: "text",
      question: "Comment appelle-t-on la vitre arrière du véhicule ?",
      canonicalAnswer: "lunette arrière",
      acceptedAnswers: [
        "lunette arrière",
        "lunette arriere",
        "vitre arrière",
        "vitre arriere",
      ],
    },
    {
      id: "socle1-q18",
      type: "text",
      question:
        "Quelle pédale permet de contrôler les feux stop pendant la vérification ?",
      canonicalAnswer: "pédale de frein de service",
      acceptedAnswers: [
        "pédale de frein de service",
        "pedale de frein de service",
        "frein de service",
        "pédale de frein",
        "pedale de frein",
      ],
    },
    {
      id: "socle1-q19",
      type: "text",
      question: "Quel terme désigne le poids total autorisé en charge ?",
      canonicalAnswer: "PTAC",
      acceptedAnswers: [
        "ptac",
        "poids total autorisé en charge",
        "poids total autorise en charge",
      ],
    },
    {
      id: "socle1-q20",
      type: "text",
      question: "Quelle largeur fait l'autocar vérifié en formation ?",
      canonicalAnswer: "2,55 m",
      acceptedAnswers: [
        "2,55 m",
        "2,55m",
        "2.55 m",
        "2.55m",
        "2 mètres 55",
        "2 metres 55",
      ],
    },
    {
      id: "socle1-q21",
      type: "text",
      question: "Quelle longueur fait l'autocar vérifié en formation ?",
      canonicalAnswer: "12,28 m",
      acceptedAnswers: [
        "12,28 m",
        "12,28m",
        "12.28 m",
        "12.28m",
        "12 mètres 28",
        "12 metres 28",
      ],
    },
    {
      id: "socle1-q22",
      type: "text",
      question: "Quelle hauteur fait l'autocar vérifié en formation ?",
      canonicalAnswer: "3,40 m",
      acceptedAnswers: [
        "3,40 m",
        "3,40m",
        "3.40 m",
        "3.40m",
        "3 mètres 40",
        "3 metres 40",
      ],
    },
    {
      id: "socle1-q23",
      type: "text",
      question: "Quel est le PTAC de l'autocar vérifié en formation ?",
      canonicalAnswer: "19 t",
      acceptedAnswers: ["19 t", "19t", "19 tonnes", "dix-neuf tonnes"],
    },
    {
      id: "socle1-q24",
      type: "text",
      question:
        "Combien de places assises comporte l'autocar vérifié en formation ?",
      canonicalAnswer: "45 places assises",
      acceptedAnswers: [
        "45",
        "45 places",
        "45 places assises",
        "quarante cinq places",
        "quarante-cinq places",
      ],
    },
    {
      id: "socle1-q25",
      type: "true-false",
      question:
        "Avant de descendre du véhicule, il faut vérifier que le frein de parc est serré.",
      correctAnswer: true,
    },
    {
      id: "socle1-q26",
      type: "true-false",
      question:
        "Le témoin de frein de parc allumé indique que le véhicule est immobilisé par le frein de parc.",
      correctAnswer: true,
    },
    {
      id: "socle1-q27",
      type: "true-false",
      question:
        "Lors de la descente du véhicule, il faut conserver trois points d'appui.",
      correctAnswer: true,
    },
    {
      id: "socle1-q28",
      type: "true-false",
      question:
        "Il est recommandé de sauter la dernière marche pour gagner du temps.",
      correctAnswer: false,
    },
    {
      id: "socle1-q29",
      type: "true-false",
      question: "Les gants sont utiles lors de la manipulation des soutes.",
      correctAnswer: true,
    },
    {
      id: "socle1-q30",
      type: "true-false",
      question: "Il faut refermer la porte après la descente du jury.",
      correctAnswer: true,
    },
    {
      id: "socle1-q31",
      type: "true-false",
      question: "Les marteaux-pics doivent être présents à leur emplacement.",
      correctAnswer: true,
    },
    {
      id: "socle1-q32",
      type: "true-false",
      question:
        "Les inscriptions réglementaires doivent être présentes et lisibles.",
      correctAnswer: true,
    },
    {
      id: "socle1-q33",
      type: "true-false",
      question:
        "Pour vérifier le dessous du véhicule, il faut se pencher dos rond et jambes tendues.",
      correctAnswer: false,
    },
    {
      id: "socle1-q34",
      type: "true-false",
      question:
        "Une soute ouverte doit être refermée et sa bonne fermeture doit être contrôlée.",
      correctAnswer: true,
    },
    {
      id: "socle1-q35",
      type: "true-false",
      question:
        "Les feux stop peuvent être contrôlés seul sans aide extérieure.",
      correctAnswer: false,
    },
    {
      id: "socle1-q36",
      type: "single-choice",
      question:
        "Quel élément vérifie-t-on en premier au poste de conduite pour confirmer l'immobilisation du véhicule ?",
      options: [
        "Le klaxon",
        "Le frein de parc",
        "La radio",
        "La climatisation",
      ],
      correctOption: "Le frein de parc",
    },
    {
      id: "socle1-q37",
      type: "single-choice",
      question:
        "Quel équipement contient les documents réglementaires du véhicule ?",
      options: [
        "La trousse de secours",
        "La pochette des documents de bord",
        "La lampe autonome",
        "La soute à bagages",
      ],
      correctOption: "La pochette des documents de bord",
    },
    {
      id: "socle1-q38",
      type: "single-choice",
      question:
        "Quelle partie du véhicule contrôle-t-on pour vérifier l'absence de fuite ou de tâche ?",
      options: [
        "Le pavillon",
        "Le dessous du véhicule",
        "La sellerie",
        "La lunette arrière",
      ],
      correctOption: "Le dessous du véhicule",
    },
    {
      id: "socle1-q39",
      type: "single-choice",
      question:
        "Quelle posture faut-il adopter pour se pencher sous le véhicule ?",
      options: [
        "Dos rond et jambes tendues",
        "Dos droit et jambes fléchies",
        "Assis au sol",
        "Debout sans se baisser",
      ],
      correctOption: "Dos droit et jambes fléchies",
    },
    {
      id: "socle1-q40",
      type: "single-choice",
      question: "Quel élément contrôle-t-on dans l'habitacle passagers ?",
      options: [
        "Le niveau d'huile",
        "La sellerie",
        "Le réservoir",
        "La batterie",
      ],
      correctOption: "La sellerie",
    },
    {
      id: "socle1-q41",
      type: "single-choice",
      question:
        "Quel élément doit être demandé au jury lors de la vérification extérieure ?",
      options: [
        "Quelle soute contrôler",
        "Quelle radio allumer",
        "Quelle place occuper",
        "Quelle vitesse passer",
      ],
      correctOption: "Quelle soute contrôler",
    },
    {
      id: "socle1-q42",
      type: "single-choice",
      question:
        "Pour contrôler les feux stop, quelle aide demande-t-on au jury ?",
      options: [
        "Regarder les feux stop à l'arrière",
        "Ouvrir la soute",
        "Allumer les feux de croisement",
        "Vérifier la trousse de secours",
      ],
      correctOption: "Regarder les feux stop à l'arrière",
    },
    {
      id: "socle1-q43",
      type: "single-choice",
      question:
        "Quel élément peut être signalé sur le pare-brise s'il ne gêne pas la visibilité ?",
      options: [
        "Un léger impact",
        "Une fissure importante",
        "Un pare-brise opaque",
        "Une absence de vitrage",
      ],
      correctOption: "Un léger impact",
    },
    {
      id: "socle1-q44",
      type: "multiple-choice",
      question:
        "Parmi les éléments suivants, lesquels doivent être présents dans le véhicule ?",
      options: [
        "Pochette des documents de bord",
        "Lampe autonome",
        "Trousse de secours",
        "Extincteur",
        "Parapluie personnel",
      ],
      correctOptions: [
        "Pochette des documents de bord",
        "Lampe autonome",
        "Trousse de secours",
        "Extincteur",
      ],
    },
    {
      id: "socle1-q45",
      type: "multiple-choice",
      question: "Quels éléments sont contrôlés dans l'habitacle passagers ?",
      options: [
        "Sellerie",
        "Ceintures de sécurité",
        "Marteaux-pics",
        "Inscriptions réglementaires",
        "Niveau de carburant",
      ],
      correctOptions: [
        "Sellerie",
        "Ceintures de sécurité",
        "Marteaux-pics",
        "Inscriptions réglementaires",
      ],
    },
    {
      id: "socle1-q46",
      type: "multiple-choice",
      question: "Quels éléments sont contrôlés sur les côtés du véhicule ?",
      options: [
        "Glaces de rétroviseurs",
        "Vitrage",
        "Carrosserie",
        "Roues",
        "Sellerie passagers",
      ],
      correctOptions: [
        "Glaces de rétroviseurs",
        "Vitrage",
        "Carrosserie",
        "Roues",
      ],
    },
    {
      id: "socle1-q47",
      type: "multiple-choice",
      question:
        "Quels feux peuvent être contrôlés pendant les vérifications extérieures ?",
      options: [
        "Feux de croisement",
        "Feux de détresse",
        "Feux de gabarit",
        "Feux de position latéraux",
        "Lumière du plafonnier",
      ],
      correctOptions: [
        "Feux de croisement",
        "Feux de détresse",
        "Feux de gabarit",
        "Feux de position latéraux",
      ],
    },
    {
      id: "socle1-q48",
      type: "multiple-choice",
      question:
        "Quelles précautions faut-il respecter lors de la manipulation d'une soute ?",
      options: [
        "Mettre les gants",
        "Garder le dos droit",
        "Fléchir les jambes",
        "Vérifier la bonne fermeture",
        "Sauter pour gagner du temps",
      ],
      correctOptions: [
        "Mettre les gants",
        "Garder le dos droit",
        "Fléchir les jambes",
        "Vérifier la bonne fermeture",
      ],
    },
    {
      id: "socle1-q49",
      type: "multiple-choice",
      question:
        "Quels éléments sont contrôlés sur la face arrière du véhicule ?",
      options: [
        "Lunette arrière",
        "Carrosserie",
        "Feux de gabarit",
        "Feux de détresse",
        "Feux stop",
      ],
      correctOptions: [
        "Lunette arrière",
        "Carrosserie",
        "Feux de gabarit",
        "Feux de détresse",
        "Feux stop",
      ],
    },
    {
      id: "socle1-q50",
      type: "multiple-choice",
      question: "Quelles actions font partie de la fin du socle 1 ?",
      options: [
        "Demander l'aide du jury pour contrôler les feux stop",
        "Appuyer sur la pédale de frein de service",
        "Vérifier le signe du jury dans le rétroviseur",
        "Annoncer que les feux stop ne présentent pas d'anomalie",
        "Couper obligatoirement le moteur en urgence",
      ],
      correctOptions: [
        "Demander l'aide du jury pour contrôler les feux stop",
        "Appuyer sur la pédale de frein de service",
        "Vérifier le signe du jury dans le rétroviseur",
        "Annoncer que les feux stop ne présentent pas d'anomalie",
      ],
    },
  ],
}
