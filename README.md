# Qui prend quoi

## Installation

_À modifier si votre travail le nécessite_

`npm install`

`npm run start`

## Améliorations apportées

J'ai pensé à rajouter un package permettant de récupérer la date du jour afin de mettre une valeur minimale sur le calendrier puisqu'on ne pourras jamais organisé un événement dans le passé.

J'ai utilisé `npm i current-date` par la suite je l'ai appellé dans mon fichier app.js `var mydate = require('current-date');` puis je l'ai définie en tant que variable pour pouvoir la rappeller sur chaque template qui comporte un formulaire comprenant un input de type 'date'.

Il existe plusieurs paramètres disponible pour cette fonction afin de formater la date outpout

`mydate();
 
mydate('full');
 
mydate('date');
 
mydate('time');
 
mydate('full', '-', ':');
 
mydate('full', '#')`

J'ai utilisé `mydate('date');` afin de récuperer le format DD-MM-YYY.

_Quelques exemples (voir le TP)_

- Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- Possibilité de supprimer un item (`app.js`, `party.pug`)
- Rafraîchissement automatique des items avec _fetch_ (`party.js`)
- Utilisation du localStorage pour stocker le nom de l'utilisateur (`user.js`)
- Meilleure présentation visuelle des items (`party.scss`)

## Article personnel

### Sujet : à completer

Le sujet peut être :

- une web api explorée (même en partie)
- un outil ou technique lié à la performance, l'amélioration progressive, l'accessibilité
- une technique liée aux PWA ou aux service workers
- un outil de développement (package npm, devtool...)

Ce n'est pas une liste exhaustive, demandez en cas de doute.

Plan en cas de panne d'inspiration :

- Description du sujet choisi (sa définition, son but...)
- Exemple d'utitlisation ou d'implémentation (bout de code si pertinent, capture d'écran...)
- Conclusion : avantages, inconvénients et cas d'usage