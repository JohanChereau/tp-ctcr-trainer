import type { Lesson } from "../../types/learning"

export const rsfIntercity01: Lesson = {
  id: "rsf-intercity-01",

  title: "Réglementation Sociale Française - Interurbain",

  contentType: "markdown",

  markdown: `
# Réglementation Sociale Française (Interurbain)

:::info[RSF et RSE]

La **Réglementation Sociale Française (RSF)** complète la **Réglementation Sociale Européenne (RSE)**.

La RSE encadre principalement :

- les temps de conduite ;
- les pauses liées à la conduite ;
- les repos.

La RSF ajoute notamment les règles concernant :

- le temps de travail ;
- l'amplitude ;
- les pauses liées au travail ;
- le travail de nuit.

Lorsque le conducteur relève des deux réglementations, il doit les respecter **simultanément**.

:::

---

## Le temps de travail effectif (TTE)

Le **temps de travail effectif (TTE)** correspond au temps pendant lequel le conducteur :

- est à la disposition de son employeur ;
- doit se conformer à ses directives ;
- ne peut pas vaquer librement à ses occupations personnelles.

:::checklist

Conduite

Autres tâches

Temps à disposition

:::

:::info

Le **TTE sert de référence pour le calcul des heures supplémentaires**.

:::

:::memory[Formule du TTE]

🚍 + 🧰 + ⏳ = TTE

---

Conduite + autres tâches + temps à disposition

:::

:::warning

Les pauses, les coupures pendant lesquelles le conducteur dispose librement de son temps et les périodes de repos ne sont pas comptabilisées dans le TTE.

:::

---

## Conducteur salarié ou indépendant

Les règles applicables ne sont pas identiques selon le statut du conducteur.

:::compare

Conducteur salarié | Code du travail et Code des transports

Conducteur indépendant | Code des transports

:::

---

## Durée du travail d'un conducteur salarié

### Durée hebdomadaire

La durée légale du travail effectif est fixée à **35 heures par semaine**.

Elle peut atteindre :

- **48 heures maximum** sur une semaine isolée ;
- **44 heures de moyenne maximum** sur 12 semaines consécutives.

:::warning

Une semaine peut atteindre **48 heures**, mais la moyenne calculée sur 12 semaines consécutives ne doit pas dépasser **44 heures**.

:::

### Exemple de moyenne sur 12 semaines

| Semaine | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| TTE | 44 h | 42 h | 46 h | 44 h | 48 h | 40 h | 48 h | 44 h | 40 h | 48 h | 40 h | 44 h |

Les semaines 5, 7 et 10 atteignent **48 heures**, soit le maximum autorisé sur une semaine isolée.

Sur l'ensemble des 12 semaines :

**528 h ÷ 12 = 44 h de moyenne**

La limite moyenne est donc respectée.

---

### Durée journalière

La durée normale du travail effectif est limitée à **10 heures par jour**.

Elle peut être portée à **12 heures** :

:::compare

1re prolongation à 12 h | 1 fois par semaine

2e prolongation à 12 h | Travail réparti sur au moins 5 jours et maximum 6 fois sur 12 semaines

:::

:::info

Ces prolongations interviennent dans les conditions prévues par la réglementation et donnent lieu à l'avis du CSE lorsqu'il existe.

:::

:::summary[Conducteur salarié]

## Durée hebdomadaire

Durée légale | **35 h**

Maximum sur une semaine | **48 h**

Moyenne sur 12 semaines | **44 h**

## Durée journalière

Durée normale | **10 h**

Durée prolongée | **12 h** | Dans les conditions prévues par la réglementation.

:::

---

## Durée du travail d'un conducteur indépendant

### Durée hebdomadaire

Le temps de travail d'un conducteur indépendant ne peut pas dépasser :

:::compare

60 h | Maximum sur une semaine isolée

48 h | Moyenne sur 4 mois consécutifs

:::

### Exemple de moyenne sur 4 mois

| Mois | S1 | S2 | S3 | S4 |
| --- | ---: | ---: | ---: | ---: |
| Mois 1 | 48 h | 52 h | 44 h | 46 h |
| Mois 2 | 44 h | 60 h | 46 h | 52 h |
| Mois 3 | 48 h | 46 h | 44 h | 42 h |
| Mois 4 | 60 h | 46 h | 44 h | 46 h |

Deux semaines atteignent **60 heures**, soit le maximum autorisé sur une semaine isolée.

Sur les quatre mois :

**768 h ÷ 16 semaines = 48 h de moyenne**

La limite moyenne est donc respectée.

---

### Durée journalière

Contrairement au conducteur salarié, aucune durée journalière maximale générale n'est fixée pour le conducteur indépendant.

Une limite s'applique toutefois lorsqu'il effectue une partie de son travail pendant la période comprise entre **00 h et 05 h**.

:::warning[Activité entre 00 h et 05 h]

Lorsque le conducteur indépendant accomplit une partie de son travail entre **00 h et 05 h**, sa durée de travail ne peut pas dépasser **10 heures** sur la période de 24 heures concernée.

:::

---

## L'amplitude

L'**amplitude** correspond à l'intervalle total compris :

- entre deux repos journaliers successifs ;
- entre un repos hebdomadaire et le repos journalier suivant ;
- ou entre un repos journalier et le repos hebdomadaire suivant.

Elle représente donc le temps écoulé entre le **début du service** et la **fin du service**.

:::warning

L'amplitude ne correspond pas au TTE.

Elle peut comprendre :

- du temps de travail effectif ;
- des pauses ;
- des coupures ;
- des périodes pendant lesquelles le conducteur ne travaille pas.

:::

---

### Exemple d'amplitude

Un conducteur effectue un service scolaire :

:::schedule[Amplitude : 11 h · TTE : 4 h]

Conduite | 2 h | drive

Coupure | 7 h | break

Conduite | 2 h | drive

:::

Le service commence à **7 h** et se termine à **18 h**.

Son amplitude est donc de :

**18 h − 7 h = 11 h**

Le conducteur effectue **4 heures de TTE**, mais son amplitude est de **11 heures**.

---

## Les règles d'amplitude

L'amplitude maximale dépend du type de service effectué.

:::compare

Règle générale, dont service à la demande | 12 h → 14 h sous conditions

Service régulier | 13 h → 14 h sous conditions

Service occasionnel | 14 h

Équipage composé de plusieurs conducteurs | 18 h

:::

L'amplitude relevant de la règle générale — notamment celle d'un service à la demande — ainsi que celle d'un service régulier peuvent être portées jusqu'à **14 heures** sous conditions.

---

### Règle générale

Sous réserve des règles particulières applicables aux services réguliers et occasionnels, l'amplitude de la journée de travail du personnel roulant ne doit pas dépasser **12 heures**.

Cette règle s'applique notamment au personnel roulant affecté à un **service à la demande**.

:::info[Amplitude portée jusqu'à 14 heures]

Pour porter l'amplitude jusqu'à **14 heures**, les conditions suivantes doivent être réunies :

- avis du CSE, s'il existe ;
- autorisation de l'inspection du travail ;
- TTE limité à **9 heures**.

---

### Amplitude supérieure à 12 h et jusqu'à 13 h

Le service doit comprendre :

- une coupure d'au moins **2 h 30 continues** ;
- ou **2 coupures d'au moins 1 h 30 continues chacune**.

---

### Amplitude supérieure à 13 h et jusqu'à 14 h

Le service doit comprendre :

- une coupure d'au moins **3 heures continues** ;
- ou **2 coupures d'au moins 2 heures continues chacune**.

Pendant ces coupures, le conducteur n'exerce aucune activité et dispose librement de son temps.

:::

---

### Service régulier

En service régulier, l'amplitude maximale est de **13 heures**.

Elle peut être portée jusqu'à **14 heures** dans les mêmes conditions que la règle générale.

:::compare

13 h | Maximum sans autorisation particulière

14 h | Maximum sous conditions

:::

---

### Service occasionnel

En service occasionnel, l'amplitude maximale dépend de la composition de l'équipage.

:::compare

14 h | Simple équipage

18 h | Équipage composé de plusieurs conducteurs

:::

Dans le cadre de la formation, un équipage composé de plusieurs conducteurs est généralement désigné comme un **double équipage**.

---

## La journée de travail

La journée de travail correspond à une période de **24 heures** qui débute à la fin d'un repos journalier ou hebdomadaire.

Un nouveau repos journalier doit être pris à l'intérieur de cette période de 24 heures.

:::info

La journée de travail de 24 heures ne doit pas être confondue avec :

- le TTE ;
- l'amplitude ;
- la durée de conduite journalière.

Ces quatre notions sont différentes.

:::

---

## Le repos journalier

Le repos journalier correspond à une période pendant laquelle le conducteur peut disposer librement de son temps entre deux journées de travail.

:::compare

Règle générale | 11 h consécutives

Conducteur soumis à la RSE | Selon les règles européennes

Conducteur non soumis à la RSE | 10 h minimum*  | *À défaut d'accord prévoyant d'autres modalités.

:::

### Conducteur soumis à la RSE

Le conducteur soumis à la réglementation européenne doit respecter les durées prévues par la RSE.

Le repos journalier normal est de **11 heures**. Des réductions ou fractionnements sont possibles dans les conditions prévues par la réglementation européenne.

:::info

Les règles détaillées du repos journalier européen sont présentées dans le cours consacré à la RSE.

:::

### Conducteur non soumis à la RSE

À défaut d'accord prévoyant d'autres modalités, le personnel roulant exécutant un transport non soumis à la RSE doit bénéficier d'au moins **10 heures consécutives de repos sur toute période de 24 heures**.

:::warning

Les **10 heures** correspondent à une règle particulière applicable au personnel roulant hors RSE.

La durée de droit commun reste fixée à **11 heures consécutives**.

:::

---

## Le repos hebdomadaire

En droit français, le repos hebdomadaire comprend :

- au moins **24 heures consécutives** de repos hebdomadaire ;
- auxquelles s'ajoute le repos quotidien de **11 heures**.

Il représente donc en principe au moins :

**24 h + 11 h = 35 h consécutives**

:::info[Rappel RSE]

Pour un conducteur soumis à la RSE, les règles européennes doivent également être respectées.

Le repos hebdomadaire normal est de **45 heures**. Un repos hebdomadaire réduit peut être d'au moins **24 heures**, sous réserve des conditions et compensations prévues par la RSE.

Ces règles sont détaillées dans le cours consacré à la réglementation européenne.

:::

:::danger[Repos hebdomadaire normal dans le véhicule]

Il est interdit de prendre à bord du véhicule :

- le repos hebdomadaire normal d'au moins **45 heures** ;
- un repos hebdomadaire de plus de **45 heures** pris en compensation d'un repos hebdomadaire réduit.

Ces repos doivent être pris dans un lieu d'hébergement approprié.

:::

---

## Travail de nuit du conducteur salarié

Tout travail effectué entre **21 h et 6 h** est considéré comme du travail de nuit.

Un accord d'entreprise peut prévoir une autre période de **9 heures consécutives**, comprise entre **21 h et 7 h**.

:::compare

Conduite continue pendant la période de nuit | 4 h maximum

Travail comprenant une activité entre 00 h et 05 h | 10 h de travail maximum

:::

:::warning

La limite de **4 heures** concerne la conduite continue effectuée pendant la période de nuit.

La limite de **10 heures** concerne la durée totale de travail lorsqu'une partie de l'activité est accomplie entre **00 h et 05 h**.

:::

---

## Les pauses liées au TTE

En plus des pauses prévues par la RSE, la réglementation française impose des pauses en fonction du **temps de travail effectif journalier**.

:::compare[TTE journalier]

Entre 6 h et 9 h | 30 min minimum

Plus de 9 h | 45 min minimum

:::

Les pauses peuvent être fractionnées en périodes d'au moins **15 minutes chacune**.

:::info

Les pauses doivent être réparties au cours de la journée de manière à interrompre effectivement le temps de travail.

Une pause placée uniquement après la fin du travail ne permet pas de respecter cette obligation.

:::

---

### Exemple : TTE entre 6 h et 9 h

Pour un TTE compris entre **6 heures et 9 heures**, le conducteur doit bénéficier d'au moins **30 minutes de pause**.

#### Pause unique de 30 minutes

:::schedule[TTE : 7 h · Pause : 30 min]

Conduite | 1 h 30 | drive

Autres tâches | 2 h | work

Conduite | 1 h | drive

Pause | 30 min | break

Autres tâches | 30 min | work

Conduite | 2 h | drive

:::

Le conducteur effectue :

- **7 heures de TTE** ;
- **30 minutes de pause** ;
- **4 h 30 de conduite au total**.

---

#### Deux pauses de 15 minutes

:::schedule[TTE : 7 h · Pause : 30 min]

Conduite | 1 h 30 | drive

Autres tâches | 2 h | work

Pause | 15 min | break

Conduite | 1 h | drive

Pause | 15 min | break

Autres tâches | 30 min | work

Conduite | 2 h | drive

:::

Les deux pauses de **15 minutes** représentent un total de **30 minutes**.

La règle liée au TTE est respectée.

---

#### Trois pauses de 15 minutes

La durée minimale exigée est de **30 minutes**, mais le conducteur peut bénéficier d'une durée totale de pause supérieure.

:::schedule[TTE : 7 h · Pause : 45 min]

Conduite | 1 h 30 | drive

Pause | 15 min | break

Autres tâches | 2 h | work

Pause | 15 min | break

Conduite | 1 h | drive

Autres tâches | 30 min | work

Pause | 15 min | break

Conduite | 2 h | drive

:::

Le conducteur bénéficie ici de **45 minutes de pause**, alors que seulement **30 minutes** étaient obligatoires au titre du TTE.

Cette organisation reste possible puisque le temps total de conduite atteint **4 h 30 seulement à la fin du service**.

---

### Exemple : TTE supérieur à 9 h

Lorsque le TTE dépasse **9 heures**, le conducteur doit bénéficier d'au moins **45 minutes de pause**.

Dans les exemples suivants, la journée comprend également **8 heures de conduite**.

Le conducteur doit donc respecter à la fois :

- les pauses françaises liées au TTE ;
- les pauses européennes liées à la conduite continue.

---

#### Pause unique de 45 minutes

:::schedule[TTE : 10 h · Pause : 45 min]

Conduite | 2 h | drive

Autres tâches | 30 min | work

Conduite | 2 h 30 | drive

Pause | 45 min | break

Autres tâches | 30 min | work

Conduite | 3 h 30 | drive

:::

Avant la pause, le conducteur totalise exactement **4 h 30 de conduite**.

La pause unique de **45 minutes** respecte donc :

- la pause liée au TTE ;
- la pause liée à la conduite continue.

---

#### Fractionnement en 15 minutes puis 30 minutes

:::schedule[TTE : 10 h · Pause : 45 min]

Conduite | 2 h | drive

Autres tâches | 30 min | work

Pause | 15 min | break

Conduite | 2 h 30 | drive

Pause | 30 min | break

Autres tâches | 30 min | work

Conduite | 3 h 30 | drive

:::

La pause est fractionnée dans l'ordre suivant :

**15 minutes puis 30 minutes**

Ce fractionnement respecte :

- les **45 minutes** exigées en raison du TTE supérieur à 9 heures ;
- le fractionnement prévu par la RSE pour la conduite continue.

---

#### Fractionnement en trois pauses de 15 minutes

:::schedule[TTE : 10 h · Pause : 45 min]

Conduite | 2 h | drive

Pause | 15 min | break

Autres tâches | 1 h 30 | work

Pause | 15 min | break

Conduite | 1 h 30 | drive

Autres tâches | 4 h | work

Pause | 15 min | break

Conduite | 1 h | drive

:::

Les trois pauses représentent bien un total de **45 minutes**.

La règle française liée au TTE est donc respectée.

Dans cet exemple, le temps total de conduite de la journée est limité à **4 h 30** :

- 2 h ;
- 1 h 30 ;
- 1 h.

Aucune période de conduite continue ne dépasse donc la limite européenne.

:::warning[Cumul des réglementations]

Lorsque le conducteur est soumis à la RSE, il doit respecter simultanément :

- les pauses liées au temps de travail effectif ;
- les pauses liées à la conduite continue.

Un fractionnement en **3 × 15 minutes** respecte la règle française liée au TTE, mais ne constitue pas automatiquement le fractionnement européen de **15 minutes puis 30 minutes**.

Il n'est donc suffisant que si l'organisation de la conduite respecte également la limite de **4 h 30 de conduite continue**.

:::

---

## Conducteurs non soumis à la RSE

Les conducteurs non soumis au règlement européen n° 561/2006 ne sont pas concernés par les limitations de conduite prévues par ce règlement.

Ils doivent néanmoins respecter la pause minimale prévue par le droit français.

:::compare

Dès que le TTE atteint 6 h | Pause de 20 min consécutives

:::

:::warning

Cette pause de **20 minutes** doit être consécutive.

Elle ne peut donc pas être remplacée par plusieurs pauses plus courtes, sauf disposition conventionnelle plus favorable ou organisation légalement applicable dans l'entreprise.

:::

---

## Le temps à disposition

Le **temps à disposition** correspond notamment à une période :

- de présence, d'attente ou de disponibilité ;
- passée sur le lieu de travail ou dans le véhicule ;
- définie à l'avance par l'entreprise ;
- pendant laquelle le conducteur peut être amené à reprendre son activité ;
- pendant laquelle il doit rester à proximité du véhicule pour le surveiller ;
- ou pendant laquelle il doit rester à disposition des passagers.

:::info

Le temps à disposition est comptabilisé dans le TTE lorsqu'il répond aux critères du temps de travail effectif.

:::

Ces périodes doivent être indiquées sur les documents servant au suivi du travail du conducteur, par exemple :

:::checklist

Feuille de service journalière

Feuille de service hebdomadaire

Feuille de service mensuelle

Ordre de mission

:::

---

## Repos lié aux heures supplémentaires

Les heures supplémentaires donnent normalement lieu à une rémunération majorée.

Selon les dispositions applicables dans l'entreprise, leur paiement et leurs majorations peuvent être remplacés, en tout ou partie, par un **repos compensateur équivalent**.

Des heures supplémentaires accomplies au-delà du contingent annuel peuvent également ouvrir droit à une **contrepartie obligatoire en repos**.

:::info

Les modalités précises d'acquisition et de prise de ces repos dépendent notamment :

- de la loi ;
- de la convention collective ;
- des accords applicables dans l'entreprise.

Le bulletin de paie ou un document annexé permet au salarié de suivre les droits à repos acquis.

:::

---

# À mémoriser

:::summary[Les valeurs indispensables]

## Temps de travail du salarié

Durée légale | **35 h**

Maximum hebdomadaire | **48 h**

Moyenne sur 12 semaines | **44 h**

Journée normale | **10 h**

Journée prolongée | **12 h**

## Temps de travail de l'indépendant

Maximum hebdomadaire | **60 h**

Moyenne sur 4 mois | **48 h**

Durée journalière générale | **Pas de limite générale**

Activité entre 00 h et 05 h | **10 h de travail maximum**

## Amplitude

Règle générale (dont service à la demande) | **12 h → 14 h** | Sous conditions.

Service régulier | **13 h → 14 h** | Sous conditions.

Service occasionnel | **14 h**

Double équipage | **18 h**

## Repos

Repos journalier de droit commun | **11 h**

Personnel roulant hors RSE | **10 h minimum** | À défaut d'accord prévoyant d'autres modalités.

Repos hebdomadaire de droit français | **35 h** | 24 h + 11 h.

## Travail de nuit

Période habituelle | **21 h → 6 h**

Période définie par accord | **9 h consécutives** | Comprises entre 21 h et 7 h.

Activité entre 00 h et 05 h | **10 h de travail maximum**

## Pauses liées au TTE

TTE entre 6 h et 9 h | **30 min**

TTE supérieur à 9 h | **45 min**

Durée minimale d'une fraction | **15 min**

Conducteur hors RSE | **20 min consécutives** | Dès que le TTE atteint 6 heures.

:::
  `,

  questions: [
    {
      id: "rsf-intercity-01-q01",
      type: "text",
      question: "Que signifie l’abréviation TTE ?",
      canonicalAnswer: "Temps de travail effectif",
      acceptedAnswers: [
        "temps de travail effectif",
        "le temps de travail effectif",
        "tte",
      ],
      explanation:
        "Le TTE désigne le temps pendant lequel le conducteur reste à la disposition de son employeur, suit ses directives et ne peut pas vaquer librement à ses occupations personnelles.",
      tags: ["tte", "définition"],
    },
    {
      id: "rsf-intercity-01-q02",
      type: "multiple-choice",
      question: "Quels éléments peuvent être comptabilisés dans le TTE ?",
      options: [
        "La conduite",
        "Les autres tâches",
        "Le temps à disposition",
        "Le repos journalier",
        "Une coupure pendant laquelle le conducteur est totalement libre",
      ],
      correctOptions: [
        "La conduite",
        "Les autres tâches",
        "Le temps à disposition",
      ],
      explanation:
        "Le TTE comprend la conduite, les autres tâches et les périodes à disposition répondant aux critères du travail effectif.",
      tags: ["tte", "composition"],
    },
    {
      id: "rsf-intercity-01-q03",
      type: "true-false",
      question:
        "Une coupure pendant laquelle le conducteur dispose librement de son temps est comptabilisée dans le TTE.",
      correctAnswer: false,
      explanation:
        "Une coupure libre n’est pas du travail effectif. Elle peut toutefois être incluse dans l’amplitude.",
      tags: ["tte", "coupure", "piège"],
    },
    {
      id: "rsf-intercity-01-q04",
      type: "single-choice",
      question:
        "Quelle durée sert de référence pour le calcul des heures supplémentaires ?",
      options: [
        "L’amplitude",
        "Le temps de conduite",
        "Le temps de travail effectif",
        "La durée du repos journalier",
      ],
      correctOption: "Le temps de travail effectif",
      explanation:
        "Les heures supplémentaires sont calculées à partir du TTE, et non de l’amplitude.",
      tags: ["tte", "heures supplémentaires"],
    },
    {
      id: "rsf-intercity-01-q05",
      type: "text",
      question:
        "Quelle est la durée légale hebdomadaire du travail d’un conducteur salarié ?",
      canonicalAnswer: "35 heures",
      acceptedAnswers: ["35 heures", "35 h", "35h"],
      tags: ["salarié", "durée hebdomadaire"],
    },
    {
      id: "rsf-intercity-01-q06",
      type: "single-choice",
      question:
        "Quelle est la durée maximale de travail d’un salarié sur une semaine isolée ?",
      options: ["35 h", "44 h", "48 h", "60 h"],
      correctOption: "48 h",
      explanation:
        "Une semaine isolée peut atteindre 48 heures, mais la moyenne sur 12 semaines reste limitée à 44 heures.",
      tags: ["salarié", "durée hebdomadaire"],
    },
    {
      id: "rsf-intercity-01-q07",
      type: "text",
      question:
        "Quelle moyenne hebdomadaire maximale doit être respectée sur 12 semaines consécutives pour un salarié ?",
      canonicalAnswer: "44 heures",
      acceptedAnswers: ["44 heures", "44 h", "44h"],
      tags: ["salarié", "moyenne"],
    },
    {
      id: "rsf-intercity-01-q08",
      type: "yes-no",
      question:
        "Un salarié peut-il travailler 48 heures pendant une semaine si sa moyenne sur 12 semaines ne dépasse pas 44 heures ?",
      correctAnswer: true,
      explanation:
        "48 heures constituent le maximum sur une semaine isolée. La moyenne sur 12 semaines doit rester inférieure ou égale à 44 heures.",
      tags: ["salarié", "situation", "moyenne"],
    },
    {
      id: "rsf-intercity-01-q09",
      type: "single-choice",
      question:
        "Un salarié a travaillé 528 heures sur 12 semaines. Quelle est sa moyenne hebdomadaire ?",
      options: ["42 h", "44 h", "46 h", "48 h"],
      correctOption: "44 h",
      explanation: "528 ÷ 12 = 44 heures.",
      tags: ["salarié", "calcul", "moyenne"],
    },
    {
      id: "rsf-intercity-01-q10",
      type: "text",
      question:
        "Quelle est la durée normale maximale du travail effectif d’un salarié sur une journée ?",
      canonicalAnswer: "10 heures",
      acceptedAnswers: ["10 heures", "10 h", "10h"],
      tags: ["salarié", "durée journalière"],
    },
    {
      id: "rsf-intercity-01-q11",
      type: "single-choice",
      question:
        "Jusqu’à quelle durée le travail journalier d’un salarié peut-il être prolongé dans les conditions prévues par la réglementation ?",
      options: ["11 h", "12 h", "13 h", "14 h"],
      correctOption: "12 h",
      tags: ["salarié", "durée journalière"],
    },
    {
      id: "rsf-intercity-01-q12",
      type: "multiple-choice",
      question:
        "Quelles affirmations sont correctes concernant les prolongations du travail journalier à 12 heures ?",
      options: [
        "Une première prolongation peut intervenir une fois par semaine",
        "Une seconde prolongation exige notamment un travail réparti sur au moins 5 jours",
        "La seconde prolongation est limitée à 6 fois sur 12 semaines",
        "Le salarié peut travailler 12 heures tous les jours sans condition",
        "La prolongation transforme automatiquement l’amplitude en 12 heures",
      ],
      correctOptions: [
        "Une première prolongation peut intervenir une fois par semaine",
        "Une seconde prolongation exige notamment un travail réparti sur au moins 5 jours",
        "La seconde prolongation est limitée à 6 fois sur 12 semaines",
      ],
      explanation:
        "La durée de travail et l’amplitude sont deux notions différentes. Les prolongations à 12 heures restent encadrées.",
      tags: ["salarié", "durée journalière", "conditions"],
    },
    {
      id: "rsf-intercity-01-q13",
      type: "text",
      question:
        "Quelle est la durée maximale de travail d’un conducteur indépendant sur une semaine isolée ?",
      canonicalAnswer: "60 heures",
      acceptedAnswers: ["60 heures", "60 h", "60h"],
      tags: ["indépendant", "durée hebdomadaire"],
    },
    {
      id: "rsf-intercity-01-q14",
      type: "single-choice",
      question:
        "Quelle moyenne hebdomadaire maximale un conducteur indépendant doit-il respecter sur 4 mois consécutifs ?",
      options: ["44 h", "46 h", "48 h", "60 h"],
      correctOption: "48 h",
      tags: ["indépendant", "moyenne"],
    },
    {
      id: "rsf-intercity-01-q15",
      type: "true-false",
      question:
        "Un conducteur indépendant possède une limite journalière générale de 10 heures, même s’il ne travaille pas de nuit.",
      correctAnswer: false,
      explanation:
        "Aucune durée journalière maximale générale n’est fixée pour l’indépendant. Une limite de 10 heures s’applique lorsqu’une partie du travail est accomplie entre 00 h et 05 h.",
      tags: ["indépendant", "durée journalière", "piège"],
    },
    {
      id: "rsf-intercity-01-q16",
      type: "single-choice",
      question:
        "Un conducteur indépendant effectue une partie de son travail entre 00 h et 05 h. Quelle durée maximale de travail doit-il respecter sur la période de 24 heures concernée ?",
      options: ["9 h", "10 h", "11 h", "12 h"],
      correctOption: "10 h",
      tags: ["indépendant", "travail de nuit"],
    },
    {
      id: "rsf-intercity-01-q17",
      type: "text",
      question: "Comment calcule-t-on simplement l’amplitude d’un service ?",
      canonicalAnswer:
        "Heure de fin du service moins heure de début du service",
      acceptedAnswers: [
        "heure de fin moins heure de début",
        "fin du service moins début du service",
        "temps entre le début et la fin du service",
        "intervalle entre le début et la fin du service",
      ],
      explanation:
        "L’amplitude représente l’intervalle total entre le début et la fin du service.",
      tags: ["amplitude", "définition"],
    },
    {
      id: "rsf-intercity-01-q18",
      type: "yes-no",
      question: "L’amplitude correspond-elle nécessairement au TTE ?",
      correctAnswer: false,
      explanation:
        "L’amplitude peut comprendre du TTE, mais également des pauses, des coupures et d’autres périodes non travaillées.",
      tags: ["amplitude", "tte", "piège"],
    },
    {
      id: "rsf-intercity-01-q19",
      type: "multiple-choice",
      question: "Quels éléments peuvent être inclus dans l’amplitude ?",
      options: [
        "La conduite",
        "Les autres tâches",
        "Les pauses",
        "Les coupures",
        "Le repos journalier suivant",
      ],
      correctOptions: [
        "La conduite",
        "Les autres tâches",
        "Les pauses",
        "Les coupures",
      ],
      explanation:
        "L’amplitude s’arrête à la fin du service, avant le repos journalier suivant.",
      tags: ["amplitude", "composition"],
    },
    {
      id: "rsf-intercity-01-q20",
      type: "single-choice",
      question:
        "Un conducteur commence son service à 7 h et le termine à 18 h. Quelle est son amplitude ?",
      options: ["9 h", "10 h", "11 h", "12 h"],
      correctOption: "11 h",
      explanation: "18 h − 7 h = 11 heures d’amplitude.",
      tags: ["amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q21",
      type: "single-choice",
      question:
        "Un conducteur travaille 2 heures le matin, bénéficie d’une coupure libre de 7 heures, puis travaille 2 heures le soir. Son service s’étend de 7 h à 18 h. Quel est son TTE ?",
      options: ["4 h", "7 h", "9 h", "11 h"],
      correctOption: "4 h",
      explanation:
        "La coupure libre de 7 heures n’est pas du TTE. Le conducteur effectue 2 h + 2 h = 4 h de TTE.",
      tags: ["tte", "amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q22",
      type: "single-choice",
      question:
        "Quelle est l’amplitude normale maximale relevant de la règle générale, notamment pour un service à la demande ?",
      options: ["10 h", "12 h", "13 h", "14 h"],
      correctOption: "12 h",
      explanation:
        "La règle générale fixe une amplitude normale de 12 heures. Elle peut être portée jusqu’à 14 heures sous conditions.",
      tags: ["amplitude", "service à la demande"],
    },
    {
      id: "rsf-intercity-01-q23",
      type: "single-choice",
      question:
        "Quelle est l’amplitude normale maximale d’un service régulier ?",
      options: ["12 h", "13 h", "14 h", "18 h"],
      correctOption: "13 h",
      explanation:
        "Le service régulier peut atteindre normalement 13 heures, puis 14 heures sous conditions.",
      tags: ["amplitude", "service régulier"],
    },
    {
      id: "rsf-intercity-01-q24",
      type: "single-choice",
      question:
        "Quelle est l’amplitude maximale d’un service occasionnel en simple équipage ?",
      options: ["12 h", "13 h", "14 h", "18 h"],
      correctOption: "14 h",
      tags: ["amplitude", "service occasionnel"],
    },
    {
      id: "rsf-intercity-01-q25",
      type: "text",
      question:
        "Quelle est l’amplitude maximale d’un service occasionnel avec plusieurs conducteurs, appelé généralement double équipage en formation ?",
      canonicalAnswer: "18 heures",
      acceptedAnswers: ["18 heures", "18 h", "18h"],
      tags: ["amplitude", "double équipage"],
    },
    {
      id: "rsf-intercity-01-q26",
      type: "multiple-choice",
      question:
        "Quelles conditions doivent notamment être réunies pour porter une amplitude relevant de la règle générale jusqu’à 14 heures ?",
      options: [
        "Avis du CSE, s’il existe",
        "Autorisation de l’inspection du travail",
        "TTE limité à 9 heures",
        "Repos journalier obligatoirement réduit à 9 heures",
        "Absence totale de coupure",
      ],
      correctOptions: [
        "Avis du CSE, s’il existe",
        "Autorisation de l’inspection du travail",
        "TTE limité à 9 heures",
      ],
      tags: ["amplitude", "dérogation", "conditions"],
    },
    {
      id: "rsf-intercity-01-q27",
      type: "single-choice",
      question:
        "Pour une amplitude supérieure à 12 heures et allant jusqu’à 13 heures, quelle coupure unique minimale est requise ?",
      options: ["1 h 30", "2 h", "2 h 30", "3 h"],
      correctOption: "2 h 30",
      explanation:
        "Une autre possibilité consiste à prévoir deux coupures d’au moins 1 h 30 chacune.",
      tags: ["amplitude", "coupures"],
    },
    {
      id: "rsf-intercity-01-q28",
      type: "multiple-choice",
      question:
        "Quelles organisations de coupures permettent une amplitude supérieure à 12 heures et allant jusqu’à 13 heures ?",
      options: [
        "Une coupure continue de 2 h 30",
        "Deux coupures continues de 1 h 30 chacune",
        "Une coupure de 2 h",
        "Deux coupures de 45 minutes",
        "Trois coupures de 30 minutes",
      ],
      correctOptions: [
        "Une coupure continue de 2 h 30",
        "Deux coupures continues de 1 h 30 chacune",
      ],
      tags: ["amplitude", "coupures"],
    },
    {
      id: "rsf-intercity-01-q29",
      type: "single-choice",
      question:
        "Pour une amplitude supérieure à 13 heures et allant jusqu’à 14 heures, quelle coupure unique minimale est requise ?",
      options: ["2 h", "2 h 30", "3 h", "4 h"],
      correctOption: "3 h",
      explanation:
        "Une autre possibilité consiste à prévoir deux coupures d’au moins 2 heures chacune.",
      tags: ["amplitude", "coupures"],
    },
    {
      id: "rsf-intercity-01-q30",
      type: "multiple-choice",
      question:
        "Quelles organisations de coupures permettent une amplitude supérieure à 13 heures et allant jusqu’à 14 heures ?",
      options: [
        "Une coupure continue de 3 heures",
        "Deux coupures continues de 2 heures chacune",
        "Une coupure continue de 2 h 30",
        "Deux coupures de 1 h 30 chacune",
        "Quatre coupures de 45 minutes",
      ],
      correctOptions: [
        "Une coupure continue de 3 heures",
        "Deux coupures continues de 2 heures chacune",
      ],
      tags: ["amplitude", "coupures"],
    },
    {
      id: "rsf-intercity-01-q31",
      type: "yes-no",
      question:
        "Une amplitude de 13 h 30 relevant de la règle générale peut-elle être autorisée avec un TTE de 10 heures ?",
      correctAnswer: false,
      explanation:
        "Pour porter l’amplitude jusqu’à 14 heures dans ce régime, le TTE doit être limité à 9 heures.",
      tags: ["amplitude", "tte", "situation"],
    },
    {
      id: "rsf-intercity-01-q32",
      type: "single-choice",
      question:
        "Un service régulier atteint 13 h 30 d’amplitude. Dans quelle situation cette amplitude peut-elle être admise ?",
      options: [
        "Automatiquement, car tout service régulier peut atteindre 14 h",
        "Uniquement dans les conditions prévues pour la prolongation à 14 h",
        "Seulement si le conducteur effectue au moins 10 h de TTE",
        "Jamais",
      ],
      correctOption:
        "Uniquement dans les conditions prévues pour la prolongation à 14 h",
      tags: ["amplitude", "service régulier", "situation"],
    },
    {
      id: "rsf-intercity-01-q33",
      type: "text",
      question: "Quelle est la durée du repos journalier de droit commun ?",
      canonicalAnswer: "11 heures consécutives",
      acceptedAnswers: ["11 heures consécutives", "11 heures", "11 h", "11h"],
      tags: ["repos journalier"],
    },
    {
      id: "rsf-intercity-01-q34",
      type: "single-choice",
      question:
        "À défaut d’accord prévoyant d’autres modalités, quelle durée minimale de repos journalier s’applique au personnel roulant exécutant un transport non soumis à la RSE ?",
      options: ["9 h", "10 h", "11 h", "12 h"],
      correctOption: "10 h",
      explanation:
        "Il doit bénéficier d’au moins 10 heures consécutives de repos sur toute période de 24 heures.",
      tags: ["repos journalier", "hors RSE"],
    },
    {
      id: "rsf-intercity-01-q35",
      type: "single-choice",
      question:
        "En droit français, quelle est en principe la durée minimale totale du repos hebdomadaire, repos quotidien compris ?",
      options: ["24 h", "35 h", "45 h", "56 h"],
      correctOption: "35 h",
      explanation:
        "Le repos hebdomadaire de 24 heures s’ajoute au repos quotidien de 11 heures : 24 h + 11 h = 35 h.",
      tags: ["repos hebdomadaire"],
    },
    {
      id: "rsf-intercity-01-q36",
      type: "text",
      question:
        "Quelle est la période habituelle du travail de nuit pour un conducteur salarié ?",
      canonicalAnswer: "De 21 h à 6 h",
      acceptedAnswers: [
        "de 21 h à 6 h",
        "21 h à 6 h",
        "21h à 6h",
        "21h-6h",
        "21 h - 6 h",
      ],
      tags: ["travail de nuit"],
    },
    {
      id: "rsf-intercity-01-q37",
      type: "true-false",
      question:
        "Un accord d’entreprise peut définir une autre période de nuit de 9 heures consécutives comprise entre 21 h et 7 h.",
      correctAnswer: true,
      tags: ["travail de nuit"],
    },
    {
      id: "rsf-intercity-01-q38",
      type: "single-choice",
      question:
        "Lorsqu’une partie du travail est accomplie entre 00 h et 05 h, quelle est la durée maximale totale de travail ?",
      options: ["8 h", "9 h", "10 h", "12 h"],
      correctOption: "10 h",
      explanation:
        "Cette limite concerne la durée totale de travail sur la période de 24 heures concernée.",
      tags: ["travail de nuit", "durée journalière"],
    },
    {
      id: "rsf-intercity-01-q39",
      type: "single-choice",
      question:
        "Quelle pause minimale doit être accordée lorsque le TTE journalier est compris entre 6 heures et 9 heures ?",
      options: ["15 min", "20 min", "30 min", "45 min"],
      correctOption: "30 min",
      tags: ["pause", "tte"],
    },
    {
      id: "rsf-intercity-01-q40",
      type: "text",
      question:
        "Quelle pause minimale doit être accordée lorsque le TTE journalier dépasse 9 heures ?",
      canonicalAnswer: "45 minutes",
      acceptedAnswers: ["45 minutes", "45 min", "45mn"],
      tags: ["pause", "tte"],
    },
    {
      id: "rsf-intercity-01-q41",
      type: "true-false",
      question:
        "Les pauses françaises liées au TTE peuvent être fractionnées en périodes d’au moins 15 minutes chacune.",
      correctAnswer: true,
      tags: ["pause", "fractionnement"],
    },
    {
      id: "rsf-intercity-01-q42",
      type: "multiple-choice",
      question:
        "Un conducteur effectue 7 heures de TTE. Quelles organisations respectent la pause minimale française liée au TTE ?",
      options: [
        "Une pause de 30 minutes",
        "Deux pauses de 15 minutes",
        "Trois pauses de 15 minutes",
        "Une pause de 20 minutes uniquement",
        "Deux pauses de 10 minutes",
      ],
      correctOptions: [
        "Une pause de 30 minutes",
        "Deux pauses de 15 minutes",
        "Trois pauses de 15 minutes",
      ],
      explanation:
        "Pour 7 heures de TTE, le minimum est de 30 minutes. Il peut être dépassé, et les fractions doivent durer au moins 15 minutes.",
      tags: ["pause", "tte", "situation"],
    },
    {
      id: "rsf-intercity-01-q43",
      type: "yes-no",
      question:
        "Une pause de 30 minutes placée uniquement après la fin du travail permet-elle de respecter l’obligation de pause liée au TTE ?",
      correctAnswer: false,
      explanation:
        "La pause doit interrompre effectivement le temps de travail au cours de la journée.",
      tags: ["pause", "piège"],
    },
    {
      id: "rsf-intercity-01-q44",
      type: "single-choice",
      question:
        "Un conducteur non soumis à la RSE atteint 6 heures de TTE. Quelle pause minimale doit-il recevoir ?",
      options: [
        "15 minutes fractionnables",
        "20 minutes consécutives",
        "30 minutes fractionnables",
        "45 minutes consécutives",
      ],
      correctOption: "20 minutes consécutives",
      tags: ["pause", "hors RSE"],
    },
    {
      id: "rsf-intercity-01-q45",
      type: "true-false",
      question:
        "La pause de 20 minutes applicable au conducteur hors RSE peut toujours être remplacée par deux pauses de 10 minutes.",
      correctAnswer: false,
      explanation:
        "La règle étudiée prévoit une pause consécutive de 20 minutes, sauf disposition plus favorable ou organisation légalement applicable.",
      tags: ["pause", "hors RSE", "piège"],
    },
    {
      id: "rsf-intercity-01-q46",
      type: "multiple-choice",
      question:
        "Quelles caractéristiques peuvent permettre de reconnaître un temps à disposition ?",
      options: [
        "Le conducteur reste disponible pour reprendre son activité",
        "La période est connue à l’avance",
        "Le conducteur doit rester à proximité du véhicule",
        "Le conducteur peut quitter librement les lieux sans contrainte",
        "Le conducteur doit rester à disposition des passagers",
      ],
      correctOptions: [
        "Le conducteur reste disponible pour reprendre son activité",
        "La période est connue à l’avance",
        "Le conducteur doit rester à proximité du véhicule",
        "Le conducteur doit rester à disposition des passagers",
      ],
      tags: ["temps à disposition", "tte"],
    },
    {
      id: "rsf-intercity-01-q47",
      type: "yes-no",
      question:
        "Un temps d’attente est-il automatiquement exclu du TTE dès qu’aucune conduite n’est effectuée ?",
      correctAnswer: false,
      explanation:
        "Une période sans conduite peut rester du TTE si le conducteur demeure à la disposition de son employeur et ne peut pas vaquer librement à ses occupations.",
      tags: ["temps à disposition", "tte", "piège"],
    },
    {
      id: "rsf-intercity-01-q48",
      type: "single-choice",
      question:
        "Un conducteur est présent dans le véhicule, doit le surveiller et peut devoir reprendre rapidement son activité. Cette période correspond le plus probablement à :",
      options: [
        "Un repos journalier",
        "Une coupure totalement libre",
        "Un temps à disposition",
        "Un repos hebdomadaire",
      ],
      correctOption: "Un temps à disposition",
      tags: ["temps à disposition", "situation"],
    },
    {
      id: "rsf-intercity-01-q49",
      type: "multiple-choice",
      question:
        "Sur quels documents les périodes à disposition peuvent-elles notamment être indiquées ?",
      options: [
        "Feuille de service journalière",
        "Feuille de service hebdomadaire",
        "Feuille de service mensuelle",
        "Ordre de mission",
        "Permis de conduire",
      ],
      correctOptions: [
        "Feuille de service journalière",
        "Feuille de service hebdomadaire",
        "Feuille de service mensuelle",
        "Ordre de mission",
      ],
      tags: ["temps à disposition", "documents"],
    },
    {
      id: "rsf-intercity-01-q50",
      type: "true-false",
      question:
        "Les heures supplémentaires donnent toujours lieu uniquement à un paiement et ne peuvent jamais être remplacées par un repos compensateur équivalent.",
      correctAnswer: false,
      explanation:
        "Selon les dispositions applicables dans l’entreprise, leur paiement et leurs majorations peuvent être remplacés en tout ou partie par un repos compensateur équivalent.",
      tags: ["heures supplémentaires", "repos compensateur"],
    },
    {
      id: "rsf-intercity-01-q51",
      type: "single-choice",
      question:
        "Un conducteur commence à 6 h 30 et termine à 19 h 30. Quelle est son amplitude ?",
      options: ["12 h", "12 h 30", "13 h", "13 h 30"],
      correctOption: "13 h",
      explanation: "19 h 30 − 6 h 30 = 13 heures.",
      tags: ["amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q52",
      type: "single-choice",
      question:
        "Un service relevant de la règle générale dure de 6 h à 19 h 30, soit 13 h 30 d’amplitude. Le service comporte une seule coupure libre de 2 h 30. Cette coupure suffit-elle pour atteindre cette amplitude ?",
      options: [
        "Oui, car 2 h 30 suffit pour toute amplitude jusqu’à 14 h",
        "Non, car au-delà de 13 h une coupure unique d’au moins 3 h est requise",
        "Oui, si le conducteur effectue 10 h de TTE",
        "Non, car aucune amplitude ne peut dépasser 13 h",
      ],
      correctOption:
        "Non, car au-delà de 13 h une coupure unique d’au moins 3 h est requise",
      explanation:
        "Pour une amplitude supérieure à 13 heures et allant jusqu’à 14 heures, il faut une coupure unique de 3 heures ou deux coupures de 2 heures chacune.",
      tags: ["amplitude", "coupures", "situation"],
    },
    {
      id: "rsf-intercity-01-q53",
      type: "yes-no",
      question:
        "Un service relevant de la règle générale avec 12 h 45 d’amplitude et deux coupures libres de 1 h 30 peut-il respecter la condition de coupure prévue entre 12 h et 13 h ?",
      correctAnswer: true,
      explanation:
        "Entre 12 h et 13 h, deux coupures continues d’au moins 1 h 30 chacune sont possibles.",
      tags: ["amplitude", "coupures", "situation"],
    },
    {
      id: "rsf-intercity-01-q54",
      type: "yes-no",
      question:
        "Un service de 14 heures d’amplitude avec un TTE de 9 h 30 peut-il respecter les conditions de prolongation étudiées ?",
      correctAnswer: false,
      explanation:
        "Dans ce régime de prolongation, le TTE doit rester limité à 9 heures.",
      tags: ["amplitude", "tte", "situation"],
    },
    {
      id: "rsf-intercity-01-q55",
      type: "single-choice",
      question:
        "Un salarié travaille 10 heures, puis bénéficie de 2 heures de coupure libre avant la fin de son service. Quelle affirmation est correcte ?",
      options: [
        "Son TTE est nécessairement de 12 h",
        "Son amplitude peut être supérieure à son TTE",
        "La coupure est obligatoirement comptée comme conduite",
        "L’amplitude et le TTE sont toujours identiques",
      ],
      correctOption: "Son amplitude peut être supérieure à son TTE",
      explanation:
        "Une coupure libre augmente l’amplitude, mais n’est pas nécessairement comptée dans le TTE.",
      tags: ["tte", "amplitude", "situation"],
    },
    {
      id: "rsf-intercity-01-q56",
      type: "multiple-choice",
      question:
        "Quelles associations entre un type de service et son amplitude sont correctes ?",
      options: [
        "Règle générale : 12 h, jusqu’à 14 h sous conditions",
        "Service régulier : 13 h, jusqu’à 14 h sous conditions",
        "Service occasionnel en simple équipage : 14 h",
        "Double équipage : 18 h",
        "Service à la demande : 18 h sans condition",
      ],
      correctOptions: [
        "Règle générale : 12 h, jusqu’à 14 h sous conditions",
        "Service régulier : 13 h, jusqu’à 14 h sous conditions",
        "Service occasionnel en simple équipage : 14 h",
        "Double équipage : 18 h",
      ],
      tags: ["amplitude", "synthèse"],
    },
    {
      id: "rsf-intercity-01-q57",
      type: "text",
      question:
        "Un conducteur commence son service à 6 h 45 et le termine à 19 h 15. Quelle est son amplitude ?",
      canonicalAnswer: "12 h 30",
      acceptedAnswers: [
        "12 h 30",
        "12h30",
        "12 heures 30",
        "12 heures et 30 minutes",
        "12,5 h",
        "12,5h",
        "12.5h",
        "12.5 h",
        "12.5 heures",
      ],
      explanation:
        "De 6 h 45 à 18 h 45, il s’écoule 12 heures, puis encore 30 minutes jusqu’à 19 h 15. L’amplitude est donc de 12 h 30.",
      tags: ["amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q58",
      type: "text",
      question:
        "Un service comprend 3 h de conduite, 2 h d’autres tâches, 1 h de temps à disposition et une coupure libre de 3 h. Quel est le TTE ?",
      canonicalAnswer: "6 heures",
      acceptedAnswers: ["6 heures", "6 h", "6h"],
      explanation:
        "Le TTE comprend 3 h de conduite + 2 h d’autres tâches + 1 h à disposition. La coupure libre de 3 h n’est pas comptée : le TTE est de 6 h.",
      tags: ["tte", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q59",
      type: "text",
      question:
        "Un conducteur commence à 7 h, termine à 17 h 30 et bénéficie pendant son service d’une coupure libre de 2 h 30. Quel est son TTE si tout le reste de l’amplitude est travaillé ?",
      canonicalAnswer: "8 heures",
      acceptedAnswers: ["8 heures", "8 h", "8h"],
      explanation:
        "L’amplitude est de 10 h 30. En retirant la coupure libre de 2 h 30, il reste 8 heures de TTE.",
      tags: ["tte", "amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q60",
      type: "text",
      question:
        "Un salarié a effectué 516 heures de TTE sur 12 semaines. Quelle est sa moyenne hebdomadaire ?",
      canonicalAnswer: "43 heures",
      acceptedAnswers: ["43 heures", "43 h", "43h"],
      explanation:
        "516 ÷ 12 = 43 heures. La moyenne reste donc inférieure à la limite de 44 heures.",
      tags: ["salarié", "moyenne", "calcul"],
    },
    {
      id: "rsf-intercity-01-q61",
      type: "yes-no",
      question:
        "Un salarié totalise 540 heures de TTE sur 12 semaines. Sa moyenne respecte-t-elle la limite de 44 heures ?",
      correctAnswer: false,
      explanation:
        "540 ÷ 12 = 45 heures de moyenne. La limite de 44 heures sur 12 semaines est dépassée.",
      tags: ["salarié", "moyenne", "calcul", "situation"],
    },
    {
      id: "rsf-intercity-01-q62",
      type: "text",
      question:
        "Un conducteur indépendant totalise 752 heures de travail sur 16 semaines. Quelle est sa moyenne hebdomadaire ?",
      canonicalAnswer: "47 heures",
      acceptedAnswers: ["47 heures", "47 h", "47h"],
      explanation:
        "752 ÷ 16 = 47 heures. La moyenne reste inférieure à la limite de 48 heures.",
      tags: ["indépendant", "moyenne", "calcul"],
    },
    {
      id: "rsf-intercity-01-q63",
      type: "multiple-choice",
      question:
        "Un service relevant de la règle générale présente une amplitude de 12 h 45 et un TTE de 8 h 30. Quelles coupures pourraient satisfaire la condition de durée étudiée pour cette amplitude ?",
      options: [
        "Une coupure continue de 2 h 30",
        "Deux coupures continues de 1 h 30 chacune",
        "Une coupure continue de 2 h",
        "Deux coupures continues de 1 h chacune",
        "Trois coupures continues de 30 minutes",
      ],
      correctOptions: [
        "Une coupure continue de 2 h 30",
        "Deux coupures continues de 1 h 30 chacune",
      ],
      explanation:
        "Pour une amplitude supérieure à 12 h et allant jusqu’à 13 h, il faut une coupure continue d’au moins 2 h 30 ou deux coupures continues d’au moins 1 h 30 chacune.",
      tags: ["amplitude", "coupures", "situation"],
    },
    {
      id: "rsf-intercity-01-q64",
      type: "single-choice",
      question:
        "Un conducteur effectue 9 h 15 de TTE dans une journée. Quelle durée minimale de pause liée au TTE doit-il recevoir ?",
      options: ["20 min", "30 min", "45 min", "1 h"],
      correctOption: "45 min",
      explanation:
        "Dès que le TTE dépasse 9 heures, la pause minimale passe à 45 minutes.",
      tags: ["pause", "tte", "situation", "piège"],
    },
  ],
}
