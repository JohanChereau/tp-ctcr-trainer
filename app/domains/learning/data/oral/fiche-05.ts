import type { Lesson } from "../../types/learning"

export const fiche05: Lesson = {
  id: "oral-05",

  title: "Fiche orale 5 - Chargement, surcharge",

  contentType: "markdown",

  youtubeVideoId: "QkXF_qTzJyg",

  markdown: `
# Chargement - Surcharge

## Plan

* Chargement : précautions et risques
* Surcharge
* Sanctions

---

# 1. Chargement

Le chargement relève de la responsabilité du conducteur.

---

## Précautions

Avant le chargement, je dois vérifier :

* Que je possède les autorisations et formations nécessaires.
* Que mon véhicule est compatible avec les personnes ou marchandises transportées.
* Que les masses autorisées sont respectées.

Je dois respecter :

* Le PTAC (Poids Total Autorisé en Charge).
* Le PTRA (Poids Total Roulant Autorisé).
* Le PMA (Poids Maximum Autorisé).
* Le poids par essieu.

Je dois également :

* Répartir correctement le chargement.
* Arrimer les bagages si nécessaire.
* Vérifier la bonne installation des voyageurs.
* Informer les passagers du port obligatoire de la ceinture de sécurité.
* Prendre les précautions nécessaires pour les personnes à mobilité réduite.
* Placer les bagages lourds en soute et les caler correctement.

---

## Itinéraire et conduite

Je dois adapter ma vitesse.

Je choisis mon itinéraire en fonction :

* Du gabarit du véhicule.
* Des limitations de tonnage.
* Du type de véhicule utilisé.

---

## Risques liés à un chargement défectueux

Un mauvais chargement peut provoquer :

* Le déséquilibre du véhicule.
* La détérioration du véhicule.
* Un départ de charge au freinage.
* Un risque de renversement.
* La chute de marchandises.
* Des dommages à la chaussée ou aux ouvrages d'art.
* Des dégâts aux marchandises transportées.
* Un refus ou une limitation de garantie de l'assurance.

---

# 2. Surcharge

La surcharge est interdite.

Je dois respecter :

* Le PTAC.
* Le PTRA.
* Le PMA.
* Le poids par essieu.
* Le nombre de passagers autorisé.

Une mauvaise répartition du chargement peut provoquer une surcharge sur un essieu même si la masse totale est respectée.

---

## Où trouver les informations ?

Sur le certificat d'immatriculation :

* G1 : Poids à vide (PV).
* F2 : PTAC.
* F3 : PTRA.

Je peux également consulter :

* La plaque de tare.
* La plaque constructeur.
* Le dispositif d'attelage (catégorie DE).

---

## Évaluation rapide des masses

Pour estimer rapidement un chargement :

* 1 voyageur en autocar ≈ 70 kg.
* 1 passager en autobus ≈ 65 kg.
* 1 enfant ≈ 40 kg.

---

# 3. Sanctions

La surcharge constitue une infraction au Code des transports et au Code de la route.

---

## Sanctions possibles

Amende de 4e classe :

* 90 € (amende minorée).
* 135 € (amende forfaitaire).
* 375 € (amende majorée).

Autres sanctions possibles :

* Immobilisation du véhicule au-delà de 5 % de surcharge.
* Mise en fourrière après 48 h si l'infraction n'a pas cessé.
* Peine de prison dans les cas les plus graves.

---

# À retenir

## Chargement

* Le chargement est sous la responsabilité du conducteur.
* Répartir et arrimer correctement les bagages.
* Respecter les masses autorisées.
* Vérifier l'installation des passagers.

## Surcharge

* Respecter PTAC, PTRA, PMA et poids par essieu.
* Respecter le nombre de passagers.
* Consulter les informations sur le certificat d'immatriculation.

## Sanctions

* Amende de 4e classe.
* Immobilisation du véhicule au-delà de 5 % de surcharge.
* Fourrière ou sanctions judiciaires dans les cas les plus graves.

`,

  questions: [
    {
      id: "fop05-q01",

      type: "true-false",

      question: "Le chargement relève de la responsabilité du conducteur.",

      correctAnswer: true,
    },

    {
      id: "fop05-q02",

      type: "multiple-choice",

      question: "Quels éléments doivent être respectés lors du chargement ?",

      options: [
        "PTAC",
        "PTRA",
        "Poids par essieu",
        "PMA",
        "Couleur du véhicule",
      ],

      correctOptions: ["PTAC", "PTRA", "Poids par essieu", "PMA"],
    },

    {
      id: "fop05-q03",

      type: "single-choice",

      question:
        "Quel risque peut apparaître lorsqu'un chargement est mal réparti ?",

      options: [
        "Une surcharge sur un essieu",
        "Une augmentation du PTAC",
        "Une réduction du poids à vide",
        "Une diminution du nombre de places",
      ],

      correctOption: "Une surcharge sur un essieu",
    },

    {
      id: "fop05-q04",

      type: "multiple-choice",

      question: "Quelles actions participent à la sécurité du chargement ?",

      options: [
        "Répartir les charges",
        "Arrimer les bagages",
        "Informer les passagers du port de la ceinture",
        "Adapter sa vitesse",
        "Ouvrir les soutes pendant le trajet",
      ],

      correctOptions: [
        "Répartir les charges",
        "Arrimer les bagages",
        "Informer les passagers du port de la ceinture",
        "Adapter sa vitesse",
      ],
    },

    {
      id: "fop05-q05",

      type: "multiple-choice",

      question: "Quels risques sont liés à un chargement défectueux ?",

      options: [
        "Renversement du véhicule",
        "Chute de marchandises",
        "Refus de garantie de l'assurance",
        "Détérioration du véhicule",
        "Augmentation du nombre de places",
      ],

      correctOptions: [
        "Renversement du véhicule",
        "Chute de marchandises",
        "Refus de garantie de l'assurance",
        "Détérioration du véhicule",
      ],
    },

    {
      id: "fop05-q06",

      type: "yes-no",

      question:
        "Les bagages lourds doivent être placés en soute et correctement calés.",

      correctAnswer: true,
    },

    {
      id: "fop05-q07",

      type: "true-false",

      question:
        "Une mauvaise répartition du chargement peut provoquer le renversement du véhicule.",

      correctAnswer: true,
    },

    {
      id: "fop05-q08",

      type: "multiple-choice",

      question:
        "Quels éléments doivent être pris en compte pour choisir un itinéraire ?",

      options: [
        "Le gabarit du véhicule",
        "Les limitations de tonnage",
        "Le type de véhicule",
        "La couleur du véhicule",
      ],

      correctOptions: [
        "Le gabarit du véhicule",
        "Les limitations de tonnage",
        "Le type de véhicule",
      ],
    },

    {
      id: "fop05-q09",

      type: "yes-no",

      question:
        "Le conducteur doit informer les passagers du port obligatoire de la ceinture de sécurité.",

      correctAnswer: true,
    },

    {
      id: "fop05-q10",

      type: "true-false",

      question:
        "La surcharge est autorisée si le véhicule circule sur une courte distance.",

      correctAnswer: false,
    },

    {
      id: "fop05-q11",

      type: "multiple-choice",

      question:
        "Où peut-on retrouver les informations relatives aux masses autorisées ?",

      options: [
        "Certificat d'immatriculation",
        "Plaque constructeur",
        "Plaque de tare",
        "Dispositif d'attelage",
        "Permis de conduire",
      ],

      correctOptions: [
        "Certificat d'immatriculation",
        "Plaque constructeur",
        "Plaque de tare",
        "Dispositif d'attelage",
      ],
    },

    {
      id: "fop05-q12",

      type: "single-choice",

      question: "Quelle conséquence peut avoir une surcharge importante ?",

      options: [
        "L'immobilisation du véhicule",
        "Une augmentation du nombre de places",
        "Une réduction du PTAC",
        "Une dispense d'amende",
      ],

      correctOption: "L'immobilisation du véhicule",
    },

    {
      id: "fop05-q13",

      type: "multiple-choice",

      question:
        "Quelles sanctions peuvent être appliquées en cas de surcharge ?",

      options: [
        "Amende",
        "Immobilisation du véhicule",
        "Mise en fourrière",
        "Peine de prison",
        "Suppression du PTAC",
      ],

      correctOptions: [
        "Amende",
        "Immobilisation du véhicule",
        "Mise en fourrière",
        "Peine de prison",
      ],
    },

    {
      id: "fop05-q14",

      type: "true-false",

      question:
        "Le respect du nombre de passagers autorisé fait partie de la prévention de la surcharge.",

      correctAnswer: true,
    },

    {
      id: "fop05-q15",

      type: "text",

      question:
        "Quel code du certificat d'immatriculation correspond au PTAC ?",

      canonicalAnswer: "F2",

      acceptedAnswers: ["f2"],
    },

    {
      id: "fop05-q16",

      type: "text",

      question:
        "Quel code du certificat d'immatriculation correspond au PTRA ?",

      canonicalAnswer: "F3",

      acceptedAnswers: ["f3"],
    },

    {
      id: "fop05-q17",

      type: "text",

      question:
        "Quel code du certificat d'immatriculation correspond au poids à vide ?",

      canonicalAnswer: "G1",

      acceptedAnswers: ["g1"],
    },

    {
      id: "fop05-q18",

      type: "text",

      question:
        "À partir de quel pourcentage de surcharge le véhicule peut-il être immobilisé ?",

      canonicalAnswer: "5%",

      acceptedAnswers: ["5", "5%", "5 %"],
    },

    {
      id: "fop05-q19",

      type: "text",

      question:
        "Quelle masse est retenue pour un voyageur en autocar lors d'une estimation rapide ?",

      canonicalAnswer: "70kg",

      acceptedAnswers: ["70", "70kg", "70 kg"],
    },

    {
      id: "fop05-q20",

      type: "text",

      question:
        "Quelle masse est retenue pour un passager en autobus lors d'une estimation rapide ?",

      canonicalAnswer: "65kg",

      acceptedAnswers: ["65", "65kg", "65 kg"],
    },

    {
      id: "fop05-q21",

      type: "text",

      question:
        "Quelle masse est retenue pour un enfant lors d'une estimation rapide ?",

      canonicalAnswer: "40kg",

      acceptedAnswers: ["40", "40kg", "40 kg"],
    },

    {
      id: "fop05-q22",

      type: "single-choice",

      question:
        "Quel montant correspond à l'amende forfaitaire d'une contravention de 4e classe ?",

      options: ["90 €", "135 €", "375 €", "750 €"],

      correctOption: "135 €",
    },

    {
      id: "fop05-q23",

      type: "multiple-choice",

      question:
        "Quelles précautions particulières doivent être prises lors du transport de voyageurs ?",

      options: [
        "Vérifier leur bonne installation",
        "Informer du port de la ceinture",
        "Prendre en compte les PMR",
        "Répartir correctement les passagers",
        "Laisser les bagages lourds dans l'allée",
      ],

      correctOptions: [
        "Vérifier leur bonne installation",
        "Informer du port de la ceinture",
        "Prendre en compte les PMR",
        "Répartir correctement les passagers",
      ],
    },

    {
      id: "fop05-q24",

      type: "text",

      question: "Que signifie l'acronyme PTAC ?",

      canonicalAnswer: "Poids Total Autorisé en Charge",

      acceptedAnswers: ["poids total autorisé en charge"],
    },

    {
      id: "fop05-q25",

      type: "text",

      question: "Que signifie l'acronyme PTRA ?",

      canonicalAnswer: "Poids Total Roulant Autorisé",

      acceptedAnswers: ["poids total roulant autorisé"],
    },
  ],
}
