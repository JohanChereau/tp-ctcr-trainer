import type { Lesson } from "../../types/learning"

export const professionalCalculations01: Lesson = {
  id: "professional-calculations-01",

  title: "Calculs professionnels — Formules essentielles",

  contentType: "markdown",

  markdown: String.raw`
# Calculs professionnels

Les calculs professionnels permettent notamment de :

- prévoir une durée de trajet ;
- déterminer une distance ou une vitesse ;
- convertir correctement des durées ;
- calculer une consommation de carburant ;
- estimer la quantité ou le coût du carburant nécessaire ;
- résoudre une situation de proportionnalité.

Il ne s'agit pas de maîtriser des mathématiques complexes, mais de savoir **choisir la bonne formule**, utiliser des **unités compatibles** et vérifier que le résultat obtenu est cohérent.

:::checklist[La méthode à toujours appliquer]

Identifier les données connues.

Identifier ce que l'on cherche.

Vérifier que les unités sont compatibles.

Choisir la formule adaptée.

Remplacer les lettres par les valeurs.

Effectuer le calcul et indiquer l'unité.

Vérifier que le résultat est cohérent.

:::

:::memory[La méthode express]

**Données → Formule → Calcul → Unité → Vérification**

:::

---

# 1. Distance, vitesse et temps

La préparation d'un trajet repose principalement sur trois grandeurs.

:::compare[Les trois grandeurs fondamentales]

Distance | d | Elle s'exprime généralement en **kilomètres (km)**.

Vitesse | v | Elle s'exprime généralement en **kilomètres par heure (km/h)**.

Temps | t | Il doit être exprimé en **heures** lorsque la vitesse est en km/h.

:::

Ces trois grandeurs sont liées entre elles.

## Calculer une vitesse

La vitesse correspond à la distance parcourue pendant une durée donnée.

$$
v = \frac{d}{t}
$$

:::scenario[Exemple]

Un véhicule parcourt **150 km en 2 h**.

Quelle est sa vitesse moyenne ?

---

On utilise la formule :

$$
v = \frac{d}{t}
$$

Puis on remplace les valeurs :

$$
v = \frac{150}{2}
$$

Donc :

$$
v = 75\ \text{km/h}
$$

:::

:::info[Vitesse moyenne]

Le résultat correspond à une **vitesse moyenne sur l'ensemble du trajet**.

Il ne correspond pas forcément à la vitesse affichée par le compteur à chaque instant.

:::

---

## Calculer une distance

Pour obtenir la distance parcourue, on multiplie la vitesse par le temps.

$$
d = v \times t
$$

:::scenario[Exemple]

Un véhicule circule pendant **2 h** à une vitesse moyenne de **80 km/h**.

Quelle distance parcourt-il ?

---

On utilise la formule :

$$
d = v \times t
$$

Puis on remplace les valeurs :

$$
d = 80 \times 2
$$

Donc :

$$
d = 160\ \text{km}
$$

:::

---

## Calculer un temps de parcours

Pour obtenir le temps nécessaire, on divise la distance par la vitesse.

$$
t = \frac{d}{v}
$$

:::scenario[Exemple]

Un véhicule doit parcourir **180 km** à une vitesse moyenne de **60 km/h**.

Combien de temps le trajet dure-t-il ?

---

On utilise la formule :

$$
t = \frac{d}{v}
$$

Puis on remplace les valeurs :

$$
t = \frac{180}{60}
$$

Donc :

$$
t = 3\ \text{h}
$$

:::

:::memory[Distance, vitesse et temps]

$$
\boxed{d = v \times t}
\qquad
\boxed{v = \frac{d}{t}}
\qquad
\boxed{t = \frac{d}{v}}
$$

---

La distance se calcule en multipliant.

La vitesse et le temps se calculent en divisant la distance.

:::

:::warning[Des unités compatibles]

Lorsque la vitesse est exprimée en **km/h** :

- la distance doit être exprimée en **kilomètres** ;
- le temps utilisé dans la formule doit être exprimé en **heures**.

Il faut donc convertir les minutes avant d'effectuer le calcul.

:::

---

# 2. Convertir les durées

Une heure contient :

$$
1\ \text{h} = 60\ \text{min}
$$

Une minute contient :

$$
1\ \text{min} = 60\ \text{s}
$$

## Passer des heures aux minutes

Pour convertir des heures en minutes, on multiplie par 60.

$$
\text{Minutes}
=
\text{Heures}
\times 60
$$

:::scenario[Exemple]

Convertir **2,5 h** en minutes.

---

On multiplie par 60 :

$$
2{,}5 \times 60 = 150\ \text{min}
$$

Donc :

$$
2{,}5\ \text{h}
=
2\ \text{h}\ 30\ \text{min}
$$

:::

---

## Passer des minutes aux heures

Pour convertir des minutes en heures décimales, on divise par 60.

$$
\text{Heures}
=
\frac{\text{Minutes}}{60}
$$

:::scenario[Exemple]

Convertir **90 minutes** en heures décimales.

---

On divise par 60 :

$$
\frac{90}{60} = 1{,}5\ \text{h}
$$

Donc :

$$
90\ \text{min}
=
1\ \text{h}\ 30\ \text{min}
$$

:::

:::tip[Décomposer une durée]

Pour convertir une durée supérieure à 60 minutes :

1. retirer les heures complètes ;
2. conserver les minutes restantes.

Par exemple :

$$
135\ \text{min}
=
120\ \text{min}
+
15\ \text{min}
$$

Donc :

$$
135\ \text{min}
=
2\ \text{h}\ 15\ \text{min}
$$

:::

---

# 3. Heures et centièmes d'heure

Une heure décimale n'utilise pas directement les minutes.

Dans une écriture telle que **6,15 h**, la partie située après la virgule représente une **fraction d'heure**, et non un nombre de minutes.

:::warning[Erreur fréquente]

$$
6{,}15\ \text{h}
\ne
6\ \text{h}\ 15\ \text{min}
$$

La valeur **0,15 h** doit être convertie en minutes :

$$
0{,}15 \times 60
=
9\ \text{min}
$$

Donc :

$$
6{,}15\ \text{h}
=
6\ \text{h}\ 09\ \text{min}
$$

:::

## Convertir une heure décimale en heures et minutes

On conserve d'abord le nombre entier d'heures.

On multiplie ensuite uniquement la partie décimale par 60.

$$
\text{Minutes}
=
\text{Partie décimale}
\times 60
$$

:::scenario[Exemple]

Convertir **7,35 h** en heures et minutes.

---

On conserve les **7 heures**.

Puis on convertit la partie décimale :

$$
0{,}35 \times 60
=
21\ \text{min}
$$

Donc :

$$
7{,}35\ \text{h}
=
7\ \text{h}\ 21\ \text{min}
$$

:::

---

## Convertir des heures et minutes en heure décimale

On divise les minutes par 60, puis on ajoute le nombre d'heures.

$$
\text{Heure décimale}
=
\text{Heures}
+
\frac{\text{Minutes}}{60}
$$

:::scenario[Exemple]

Convertir **6 h 15 min** en heure décimale.

---

On convertit d'abord les minutes :

$$
\frac{15}{60}
=
0{,}25
$$

Puis on ajoute les heures :

$$
6 + 0{,}25
=
6{,}25\ \text{h}
$$

Donc :

$$
6\ \text{h}\ 15\ \text{min}
=
6{,}25\ \text{h}
$$

:::

:::compare[Conversions courantes]

15 minutes | 0,25 h | **25 centièmes d'heure**

30 minutes | 0,50 h | **50 centièmes d'heure**

45 minutes | 0,75 h | **75 centièmes d'heure**

:::

## Convertir des minutes en centièmes d'heure

Pour obtenir directement des centièmes d'heure :

$$
\text{Centièmes}
=
\frac{
\text{Minutes}
\times 100
}{60}
$$

:::scenario[Exemple]

Convertir **9 minutes** en centièmes d'heure.

---

On applique la formule :

$$
\frac{9 \times 100}{60}
=
15
$$

Donc :

$$
9\ \text{min}
=
15\ \text{centièmes}
=
0{,}15\ \text{h}
$$

:::

## Convertir des centièmes d'heure en minutes

Pour convertir des centièmes en minutes :

$$
\text{Minutes}
=
\frac{
\text{Centièmes}
\times 60
}{100}
$$

Ce qui revient à multiplier le nombre de centièmes par **0,6** :

$$
\text{Minutes}
=
\text{Centièmes}
\times 0{,}6
$$

:::info[Un centième d'heure]

Un centième d'heure ne correspond pas à une minute.

$$
1\ \text{centième}
=
0{,}01\ \text{h}
=
0{,}6\ \text{min}
=
36\ \text{s}
$$

:::

:::memory[Le piège des centièmes]

**Les chiffres après la virgule ne sont pas des minutes.**

---

Pour obtenir les minutes, il faut convertir la partie décimale en la multipliant par 60.

:::

---

# 4. Calculer une consommation de carburant

La consommation d'un véhicule est généralement exprimée en :

$$
\text{L}/100\ \text{km}
$$

Cette unité indique le nombre de litres consommés pour parcourir 100 kilomètres.

## Calculer la consommation moyenne

Pour calculer la consommation moyenne :

$$
\text{Consommation}
=
\frac{
\text{Litres consommés}
}{
\text{Distance parcourue}
}
\times 100
$$

:::scenario[Exemple]

Un véhicule consomme **84 L** pour parcourir **300 km**.

Quelle est sa consommation moyenne ?

---

On applique la formule :

$$
\text{Consommation}
=
\frac{84}{300}
\times 100
$$

Donc :

$$
\text{Consommation}
=
28\ \text{L}/100\ \text{km}
$$

:::

:::warning[La distance doit être en kilomètres]

La formule donne une consommation en **L/100 km** uniquement si la distance utilisée est exprimée en kilomètres.

:::

---

## Calculer la quantité de carburant nécessaire

Lorsque la consommation moyenne et la distance sont connues :

$$
\text{Litres nécessaires}
=
\frac{
\text{Distance}
\times
\text{Consommation}
}{100}
$$

:::scenario[Exemple]

Un véhicule consomme **25 L/100 km** et doit parcourir **240 km**.

Quelle quantité de carburant est nécessaire ?

---

On applique la formule :

$$
\text{Litres nécessaires}
=
\frac{240 \times 25}{100}
$$

Donc :

$$
\text{Litres nécessaires}
=
60\ \text{L}
$$

:::

---

## Calculer la distance réalisable

Lorsque l'on connaît la quantité de carburant disponible et la consommation :

$$
\text{Distance réalisable}
=
\frac{
\text{Litres disponibles}
\times 100
}{
\text{Consommation}
}
$$

:::scenario[Exemple]

Un véhicule dispose de **75 L** et consomme **25 L/100 km**.

Quelle distance peut-il théoriquement parcourir ?

---

On applique la formule :

$$
\text{Distance réalisable}
=
\frac{75 \times 100}{25}
$$

Donc :

$$
\text{Distance réalisable}
=
300\ \text{km}
$$

:::

:::tip[Contrôle de cohérence]

Un véhicule consommant **25 L/100 km** utilise environ :

- 25 L pour 100 km ;
- 50 L pour 200 km ;
- 75 L pour 300 km.

Cette estimation rapide permet de repérer une erreur de calcul.

:::

---

# 5. Calculer le coût du carburant

Pour obtenir le coût total, on multiplie le nombre de litres par le prix d'un litre.

$$
\text{Coût}
=
\text{Quantité en litres}
\times
\text{Prix par litre}
$$

:::scenario[Exemple]

Calculer le prix de **60 L** de carburant vendus **1,80 € par litre**.

---

On applique la formule :

$$
\text{Coût}
=
60 \times 1{,}80
$$

Donc :

$$
\text{Coût}
=
108\ €
$$

:::

Lorsque la quantité de carburant n'est pas encore connue, le calcul s'effectue en deux étapes.

:::sequence[Calculer le coût d'un trajet]

Calculer les litres nécessaires | Distance et consommation

Calculer le prix total | Litres nécessaires × prix au litre

:::

---

# 6. Le produit en croix

Le produit en croix permet de retrouver une valeur inconnue lorsque deux grandeurs sont **proportionnelles**.

Si :

$$
\frac{a}{b}
=
\frac{c}{x}
$$

Alors :

$$
x
=
\frac{b \times c}{a}
$$

:::scenario[Exemple]

Un véhicule consomme **20 L** pour parcourir **80 km**.

Quelle quantité consommera-t-il pour parcourir **200 km** ?

| Distance | Carburant |
| ---: | ---: |
| 80 km | 20 L |
| 200 km | $x$ L |

---

On effectue le produit en croix :

$$
x
=
\frac{200 \times 20}{80}
$$

Donc :

$$
x
=
50\ \text{L}
$$

:::

:::tip[Quand utiliser le produit en croix ?]

Il peut être utilisé lorsque les valeurs évoluent dans la même proportion, par exemple pour :

- une quantité de carburant ;
- une distance ;
- un coût ;
- une durée à vitesse constante ;
- une quantité répartie sur plusieurs véhicules ou passagers.

:::

:::warning[Proportionnalité obligatoire]

Le produit en croix ne doit être utilisé que lorsque la situation est proportionnelle.

Par exemple, doubler une distance double la quantité de carburant nécessaire si la consommation reste identique.

En revanche, doubler la vitesse ne divise pas forcément le temps réel d'un trajet par deux : les conditions de circulation, les arrêts et les limitations peuvent intervenir.

:::

---

# 7. Pourcentages

Un pourcentage représente une partie sur 100.

## Calculer un pourcentage

Pour connaître la part représentée par une valeur :

$$
\text{Pourcentage}
=
\frac{
\text{Valeur partielle}
}{
\text{Valeur totale}
}
\times 100
$$

:::scenario[Exemple]

Sur un réservoir de **300 L**, il reste **75 L**.

Quel pourcentage du réservoir reste-t-il ?

---

On applique la formule :

$$
\text{Pourcentage restant}
=
\frac{75}{300}
\times 100
$$

Donc :

$$
\text{Pourcentage restant}
=
25\%
$$

:::

---

## Calculer une valeur à partir d'un pourcentage

Pour calculer une partie d'un total :

$$
\text{Valeur recherchée}
=
\frac{
\text{Valeur totale}
\times
\text{Pourcentage}
}{100}
$$

:::scenario[Exemple]

La réserve représente **10 %** d'un réservoir de **300 L**.

Quelle quantité de carburant représente-t-elle ?

---

On applique la formule :

$$
\text{Réserve}
=
\frac{300 \times 10}{100}
$$

Donc :

$$
\text{Réserve}
=
30\ \text{L}
$$

:::

---

# 8. Moyennes

Une moyenne simple se calcule en additionnant les valeurs, puis en divisant le total par le nombre de valeurs.

$$
\text{Moyenne}
=
\frac{
\text{Somme des valeurs}
}{
\text{Nombre de valeurs}
}
$$

:::info[Attention à la vitesse moyenne]

Pour un trajet, la vitesse moyenne se calcule toujours à partir de la **distance totale** et du **temps total** :

$$
v_{\text{moyenne}}
=
\frac{
\text{Distance totale}
}{
\text{Temps total}
}
$$

Il ne faut pas simplement additionner plusieurs vitesses et les diviser par leur nombre lorsque les distances ou les durées sont différentes.

:::

---

# 9. Arrondis et présentation du résultat

Un résultat doit être :

- accompagné de son unité ;
- arrondi uniquement si cela est nécessaire ;
- cohérent avec la situation ;
- suffisamment précis sans conserver de décimales inutiles.

:::checklist[Avant de valider un calcul]

La bonne formule a été utilisée.

Toutes les valeurs sont dans des unités compatibles.

Les parenthèses sont correctement saisies dans la calculatrice.

L'unité apparaît dans le résultat.

Le résultat semble réaliste.

L'arrondi est effectué à la fin du calcul.

:::

:::tip[Utilisation de la calculatrice]

Écrivez d'abord la formule, puis remplacez les lettres par les valeurs.

Pour calculer :

$$
\frac{240 \times 25}{100}
$$

saisissez de préférence :

**(240 × 25) ÷ 100**

Les parenthèses sont particulièrement importantes lorsque le numérateur ou le dénominateur contient plusieurs opérations.

:::

---

# À retenir

:::summary[Formules essentielles]

## Distance, vitesse et temps

Vitesse | $v = \dfrac{d}{t}$ | Distance divisée par le temps.

Distance | $d = v \times t$ | Vitesse multipliée par le temps.

Temps | $t = \dfrac{d}{v}$ | Distance divisée par la vitesse.

Vitesse moyenne | $v_{\text{moyenne}} = \dfrac{\text{distance totale}}{\text{temps total}}$ | Utiliser les valeurs totales du trajet.

## Conversion des durées

Heures vers minutes | $\text{minutes} = \text{heures} \times 60$

Minutes vers heures | $\text{heures} = \dfrac{\text{minutes}}{60}$

Partie décimale vers minutes | $\text{minutes} = \text{partie décimale} \times 60$

Heures et minutes vers heure décimale | $\text{heures} + \dfrac{\text{minutes}}{60}$

Minutes vers centièmes | $\text{centièmes} = \dfrac{\text{minutes} \times 100}{60}$

Centièmes vers minutes | $\text{minutes} = \dfrac{\text{centièmes} \times 60}{100}$

## Consommation et carburant

Consommation moyenne | $\dfrac{\text{litres consommés}}{\text{distance}} \times 100$ | Résultat en L/100 km.

Litres nécessaires | $\dfrac{\text{distance} \times \text{consommation}}{100}$

Distance réalisable | $\dfrac{\text{litres disponibles} \times 100}{\text{consommation}}$

Coût du carburant | $\text{litres} \times \text{prix par litre}$

## Proportionnalité et pourcentages

Produit en croix | $x = \dfrac{b \times c}{a}$ | Lorsque $\dfrac{a}{b} = \dfrac{c}{x}$.

Calcul d'un pourcentage | $\dfrac{\text{valeur partielle}}{\text{valeur totale}} \times 100$

Valeur d'un pourcentage | $\dfrac{\text{valeur totale} \times \text{pourcentage}}{100}$

Moyenne simple | $\dfrac{\text{somme des valeurs}}{\text{nombre de valeurs}}$

:::
  `,

  questions: [
    {
      id: "calculs-01-q01",
      type: "single-choice",
      question:
        "Quelle formule permet de calculer la vitesse moyenne à partir de la distance et du temps ?",
      options: ["v = d × t", "v = d ÷ t", "v = t ÷ d", "v = d + t"],
      correctOption: "v = d ÷ t",
      explanation:
        "La vitesse se calcule en divisant la distance parcourue par le temps : v = d ÷ t.",
      tags: ["vitesse", "formule"],
    },

    {
      id: "calculs-01-q02",
      type: "single-choice",
      question:
        "Un autocar parcourt 150 km en 2 h. Quelle est sa vitesse moyenne ?",
      options: ["60 km/h", "75 km/h", "80 km/h", "300 km/h"],
      correctOption: "75 km/h",
      explanation: "v = d ÷ t = 150 ÷ 2 = 75 km/h.",
      tags: ["vitesse", "calcul"],
    },

    {
      id: "calculs-01-q03",
      type: "single-choice",
      question:
        "Un autocar roule à une vitesse moyenne de 80 km/h pendant 2 h 30. Quelle distance parcourt-il ?",
      options: ["160 km", "180 km", "200 km", "240 km"],
      correctOption: "200 km",
      explanation: "2 h 30 = 2,5 h. Puis d = v × t = 80 × 2,5 = 200 km.",
      tags: ["distance", "durée", "conversion"],
    },

    {
      id: "calculs-01-q04",
      type: "single-choice",
      question:
        "Un trajet de 180 km est effectué à une vitesse moyenne de 60 km/h. Quelle est sa durée ?",
      options: ["2 h", "2 h 30", "3 h", "3 h 30"],
      correctOption: "3 h",
      explanation: "t = d ÷ v = 180 ÷ 60 = 3 h.",
      tags: ["temps", "vitesse", "calcul"],
    },

    {
      id: "calculs-01-q05",
      type: "single-choice",
      question:
        "Pour utiliser une vitesse exprimée en km/h dans la formule d = v × t, comment doit être exprimé le temps ?",
      options: [
        "En secondes",
        "En minutes",
        "En heures",
        "L'unité n'a aucune importance",
      ],
      correctOption: "En heures",
      explanation:
        "Avec une vitesse en km/h et une distance en kilomètres, le temps doit être exprimé en heures.",
      tags: ["unités", "formule"],
    },

    {
      id: "calculs-01-q06",
      type: "single-choice",
      question: "À combien d'heures décimales correspondent 90 minutes ?",
      options: ["0,90 h", "1,30 h", "1,50 h", "1,90 h"],
      correctOption: "1,50 h",
      explanation:
        "90 ÷ 60 = 1,5 h. Attention : 1 h 30 correspond à 1,50 h et non à 1,30 h.",
      tags: ["conversion", "durée", "piège"],
    },

    {
      id: "calculs-01-q07",
      type: "single-choice",
      question: "À quelle durée correspond 6,15 h ?",
      options: ["6 h 09 min", "6 h 15 min", "6 h 25 min", "6 h 50 min"],
      correctOption: "6 h 09 min",
      explanation:
        "La partie décimale vaut 0,15 h. 0,15 × 60 = 9 minutes. Donc 6,15 h = 6 h 09 min.",
      tags: ["centièmes", "conversion", "piège"],
    },

    {
      id: "calculs-01-q08",
      type: "single-choice",
      question: "Quelle écriture décimale correspond à 6 h 15 min ?",
      options: ["6,15 h", "6,20 h", "6,25 h", "6,30 h"],
      correctOption: "6,25 h",
      explanation: "15 ÷ 60 = 0,25. Donc 6 h 15 min = 6,25 h.",
      tags: ["centièmes", "conversion", "piège"],
    },

    {
      id: "calculs-01-q09",
      type: "single-choice",
      question: "À combien de centièmes d'heure correspondent 9 minutes ?",
      options: ["9 centièmes", "12 centièmes", "15 centièmes", "20 centièmes"],
      correctOption: "15 centièmes",
      explanation: "9 × 100 ÷ 60 = 15 centièmes d'heure.",
      tags: ["centièmes", "conversion"],
    },

    {
      id: "calculs-01-q10",
      type: "single-choice",
      question: "À combien de minutes correspondent 25 centièmes d'heure ?",
      options: ["15 minutes", "20 minutes", "25 minutes", "30 minutes"],
      correctOption: "15 minutes",
      explanation:
        "25 × 60 ÷ 100 = 15 minutes. Un centième d'heure ne correspond pas à une minute.",
      tags: ["centièmes", "conversion", "piège"],
    },

    {
      id: "calculs-01-q11",
      type: "single-choice",
      question:
        "Un autocar consomme 84 L pour parcourir 300 km. Quelle est sa consommation moyenne ?",
      options: ["25 L/100 km", "28 L/100 km", "30 L/100 km", "35,7 L/100 km"],
      correctOption: "28 L/100 km",
      explanation: "Consommation = (84 ÷ 300) × 100 = 28 L/100 km.",
      tags: ["carburant", "consommation"],
    },

    {
      id: "calculs-01-q12",
      type: "single-choice",
      question:
        "Un autocar consomme 25 L/100 km. Combien de litres sont nécessaires pour parcourir 240 km ?",
      options: ["50 L", "60 L", "65 L", "96 L"],
      correctOption: "60 L",
      explanation: "Litres nécessaires = (240 × 25) ÷ 100 = 60 L.",
      tags: ["carburant", "consommation"],
    },

    {
      id: "calculs-01-q13",
      type: "single-choice",
      question:
        "Un véhicule dispose de 75 L de carburant et consomme 25 L/100 km. Quelle distance peut-il théoriquement parcourir ?",
      options: ["187,5 km", "250 km", "300 km", "375 km"],
      correctOption: "300 km",
      explanation: "Distance = (75 × 100) ÷ 25 = 300 km.",
      tags: ["carburant", "distance"],
    },

    {
      id: "calculs-01-q14",
      type: "single-choice",
      question:
        "60 L de carburant sont achetés au prix de 1,80 € par litre. Quel est le coût total ?",
      options: ["90 €", "108 €", "120 €", "133,33 €"],
      correctOption: "108 €",
      explanation: "Coût = quantité × prix au litre = 60 × 1,80 = 108 €.",
      tags: ["carburant", "coût"],
    },

    {
      id: "calculs-01-q15",
      type: "single-choice",
      question:
        "Un autocar consomme 30 L/100 km et doit parcourir 400 km. Le carburant coûte 1,75 €/L. Quel sera le coût théorique du carburant pour ce trajet ?",
      options: ["120 €", "175 €", "210 €", "233,33 €"],
      correctOption: "210 €",
      explanation:
        "Il faut d'abord calculer la quantité : (400 × 30) ÷ 100 = 120 L. Puis le coût : 120 × 1,75 = 210 €.",
      tags: ["carburant", "coût", "calcul"],
    },

    {
      id: "calculs-01-q16",
      type: "single-choice",
      question:
        "Un véhicule consomme 20 L pour 80 km. À consommation identique, combien consommera-t-il pour 200 km ?",
      options: ["40 L", "50 L", "60 L", "80 L"],
      correctOption: "50 L",
      explanation: "Produit en croix : (20 × 200) ÷ 80 = 50 L.",
      tags: ["proportionnalité", "produit-en-croix"],
    },

    {
      id: "calculs-01-q17",
      type: "single-choice",
      question:
        "Un réservoir contient encore 75 L sur une capacité totale de 300 L. Quel pourcentage de carburant reste-t-il ?",
      options: ["20 %", "25 %", "30 %", "40 %"],
      correctOption: "25 %",
      explanation: "Pourcentage = (75 ÷ 300) × 100 = 25 %.",
      tags: ["pourcentage", "carburant"],
    },

    {
      id: "calculs-01-q18",
      type: "single-choice",
      question:
        "La réserve représente 10 % d'un réservoir de 300 L. Quelle quantité cela représente-t-il ?",
      options: ["10 L", "20 L", "30 L", "60 L"],
      correctOption: "30 L",
      explanation: "300 × 10 ÷ 100 = 30 L.",
      tags: ["pourcentage", "carburant"],
    },

    {
      id: "calculs-01-q19",
      type: "single-choice",
      question:
        "Un autocar parcourt 120 km en 2 h puis 180 km en 3 h. Quelle est sa vitesse moyenne sur l'ensemble du trajet ?",
      options: ["50 km/h", "60 km/h", "65 km/h", "75 km/h"],
      correctOption: "60 km/h",
      explanation:
        "Distance totale = 120 + 180 = 300 km. Temps total = 2 + 3 = 5 h. Vitesse moyenne = 300 ÷ 5 = 60 km/h.",
      tags: ["moyenne", "vitesse"],
    },

    {
      id: "calculs-01-q20",
      type: "true-false",
      question:
        "Pour calculer la vitesse moyenne d'un trajet comportant plusieurs parties, il suffit toujours d'additionner les différentes vitesses puis de les diviser par leur nombre.",
      correctAnswer: false,
      explanation:
        "Non. La vitesse moyenne du trajet se calcule à partir de la distance totale divisée par le temps total. Faire simplement la moyenne des vitesses peut donner un résultat faux.",
      tags: ["moyenne", "vitesse", "piège"],
    },

    {
      id: "calculs-01-q21",
      type: "single-choice",
      question:
        "Un trajet de 170 km doit être effectué à une vitesse moyenne de 80 km/h. Quelle durée théorique faut-il prévoir ?",
      options: [
        "2 h 05 min",
        "2 h 07 min 30 s",
        "2 h 12 min",
        "2 h 17 min 30 s",
      ],
      correctOption: "2 h 07 min 30 s",
      explanation:
        "170 ÷ 80 = 2,125 h. La partie décimale 0,125 × 60 = 7,5 minutes, soit 7 min 30 s.",
      tags: ["temps", "vitesse", "conversion"],
    },

    {
      id: "calculs-01-q22",
      type: "multiple-choice",
      question:
        "Avant de valider le résultat d'un calcul professionnel, que faut-il notamment vérifier ?",
      options: [
        "Que les unités sont compatibles",
        "Que le résultat possède une unité",
        "Que le résultat est cohérent avec la situation",
        "Que l'arrondi a été effectué à la fin",
        "Qu'il comporte obligatoirement deux chiffres après la virgule",
      ],
      correctOptions: [
        "Que les unités sont compatibles",
        "Que le résultat possède une unité",
        "Que le résultat est cohérent avec la situation",
        "Que l'arrondi a été effectué à la fin",
      ],
      explanation:
        "Un résultat professionnel doit être obtenu avec des unités compatibles, comporter son unité, rester cohérent et n'être arrondi qu'à la fin lorsque cela est nécessaire.",
      tags: ["méthode", "unités", "arrondi"],
    },
    {
      id: "calculs-01-q23",
      type: "single-choice",
      question:
        "Un autocar doit parcourir 287 km à une vitesse moyenne de 70 km/h. Quelle est la durée théorique du trajet ?",
      options: ["4 h 06 min", "4 h 10 min", "4 h 18 min", "4 h 24 min"],
      correctOption: "4 h 06 min",
      explanation:
        "t = d ÷ v = 287 ÷ 70 = 4,1 h. La partie décimale vaut 0,1 × 60 = 6 minutes. Le trajet dure donc 4 h 06 min.",
      tags: ["temps", "vitesse", "conversion", "difficile"],
    },

    {
      id: "calculs-01-q24",
      type: "single-choice",
      question:
        "Un autocar parcourt 156 km en 2 h 24 min. Quelle est sa vitesse moyenne ?",
      options: ["62,5 km/h", "65 km/h", "67,5 km/h", "70 km/h"],
      correctOption: "65 km/h",
      explanation:
        "2 h 24 min = 2 + (24 ÷ 60) = 2,4 h. Puis v = 156 ÷ 2,4 = 65 km/h.",
      tags: ["vitesse", "durée", "conversion", "difficile"],
    },

    {
      id: "calculs-01-q25",
      type: "single-choice",
      question:
        "Un autocar parcourt 195 km à 65 km/h puis 170 km à 85 km/h. Quelle est sa vitesse moyenne sur l'ensemble du trajet ?",
      options: ["72 km/h", "73 km/h", "75 km/h", "76 km/h"],
      correctOption: "73 km/h",
      explanation:
        "Premier trajet : 195 ÷ 65 = 3 h. Second trajet : 170 ÷ 85 = 2 h. Distance totale = 365 km et temps total = 5 h. Vitesse moyenne = 365 ÷ 5 = 73 km/h.",
      tags: ["vitesse", "moyenne", "multi-étapes", "difficile"],
    },

    {
      id: "calculs-01-q26",
      type: "single-choice",
      question:
        "Un autocar consomme 31 L/100 km. Il doit parcourir 465 km et le conducteur souhaite conserver 40 L dans le réservoir à l'arrivée. Quelle quantité minimale de carburant doit être disponible au départ ?",
      options: ["144,15 L", "174,15 L", "184,15 L", "195,00 L"],
      correctOption: "184,15 L",
      explanation:
        "Carburant consommé = (465 × 31) ÷ 100 = 144,15 L. Il faut conserver 40 L à l'arrivée : 144,15 + 40 = 184,15 L.",
      tags: ["carburant", "consommation", "multi-étapes", "difficile"],
    },

    {
      id: "calculs-01-q27",
      type: "single-choice",
      question:
        "Un autocar possède un réservoir de 420 L rempli à 35 %. Il consomme 28 L/100 km. Quelle distance peut-il théoriquement parcourir avec le carburant disponible ?",
      options: ["420 km", "500 km", "525 km", "540 km"],
      correctOption: "525 km",
      explanation:
        "Carburant disponible = 420 × 35 ÷ 100 = 147 L. Distance réalisable = (147 × 100) ÷ 28 = 525 km.",
      tags: [
        "carburant",
        "pourcentage",
        "distance",
        "multi-étapes",
        "difficile",
      ],
    },

    {
      id: "calculs-01-q28",
      type: "single-choice",
      question:
        "Un trajet comporte 210 km parcourus à 70 km/h, une pause de 45 min, puis 255 km parcourus à 85 km/h. Quelle est la durée totale entre le début et la fin du trajet, pause comprise ?",
      options: ["6 h 00", "6 h 15", "6 h 45", "7 h 00"],
      correctOption: "6 h 45",
      explanation:
        "210 ÷ 70 = 3 h. 255 ÷ 85 = 3 h. Temps de conduite = 6 h. Avec 45 min de pause, la durée totale est de 6 h 45.",
      tags: ["temps", "vitesse", "pause", "multi-étapes", "difficile"],
    },

    {
      id: "calculs-01-q29",
      type: "single-choice",
      question:
        "Un autocar doit effectuer 540 km. Les 180 premiers kilomètres sont parcourus à 60 km/h et les 360 km restants à 80 km/h. Quelle est la vitesse moyenne sur l'ensemble du trajet ?",
      options: ["70 km/h", "72 km/h", "74 km/h", "75 km/h"],
      correctOption: "72 km/h",
      explanation:
        "Premier trajet : 180 ÷ 60 = 3 h. Second trajet : 360 ÷ 80 = 4,5 h. Temps total = 7,5 h. Vitesse moyenne = 540 ÷ 7,5 = 72 km/h.",
      tags: ["vitesse", "moyenne", "multi-étapes", "difficile"],
    },

    {
      id: "calculs-01-q30",
      type: "single-choice",
      question:
        "Un autocar parcourt 630 km. Sa consommation moyenne est de 32 L/100 km. Le carburant coûte 1,74 €/L. Quel est le coût théorique du carburant consommé pendant le trajet ?",
      options: ["334,08 €", "350,78 €", "360,12 €", "365,40 €"],
      correctOption: "350,78 €",
      explanation:
        "Carburant consommé = (630 × 32) ÷ 100 = 201,6 L. Coût = 201,6 × 1,74 = 350,784 €, soit 350,78 € après arrondi au centime.",
      tags: ["carburant", "coût", "arrondi", "multi-étapes", "difficile"],
    },
  ],
}
