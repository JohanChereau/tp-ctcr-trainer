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

  questions: [],
}
