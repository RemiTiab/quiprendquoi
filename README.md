# Qui prend quoi - PWA POC - Rémi Tiab

## Installation

_À modifier si votre travail le nécessite_

`npm install`

`npm run start`

## Améliorations apportées

### Import d'une fonction document-ready

Pour le système de notifications j'ai décidé d'ajouter un script `document-ready.js` qui permet de lancer certaines fonctions lorsque le DOM est chargée entièrement.

J'utilise ce script dans le fichier `notification.js`

### API Push / Notifications

Les notifications sont gérés à partir du script `notification.js`.

`if (document.querySelector('.notifications') !== null)`

J'utilise ce morceaux de code qui permet de lancer la fonction de propositions des notifications à l'utilisateur lors d'un clic sur l'élément ".notification" car ce selecteur est uniquement sur la première page, ce qui me causerais une erreur sur mes autres pages et donc l'arrêt du script.

Les notifications permette d'avertir les utilisateurs lorsqu'un événement est créé, modifié, supprimé et également lors qu'un item est ajouté, modifié ou supprimé.




### NPM PACKAGE current-date

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

### API Vibration

J'ai également implémenter cette API afin de signaler les utilisateurs mobiles d'une action de le part sur mobile et navigateur pouvant répondre a cette API. Si le navigateur n'est pas compatible l'API ne causera pas erreur.

J'ai ajouté une classe `vibrate` aux bouttons qui permette de faire une action qui modifie du texte ou supprime des éléments.

`const buttons = document.querySelectorAll('.vibrate');
let vibrations = function() {
  navigator.vibrate([200]);
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener('click', function() {
    vibrations();
  });
}`

## Article personnel

"Web Authentication API" est une API permettant de connecter automatiquement un utilisateur s'étant connecter récemment, ce qui peut être utile lors d'une utilisation répétitive de la par de l'utilisateur. Malheureusement je n'ai pas créer de système de connexion et donc ne pas pouvoir stocker le nom d'utilisateur dans le localStorage.

L'API Ambient Light Events est également interressante, elle permettrais de détecter si l'environnemment de l'utilisateur est plutôt lumineux ou sombre.
Utile pour certain jeux genre "casse tête" où on inciterais l'utilsateurs à être dans le noir ou dans une zone partiellement éclairé.

L'utilisation des templates PUG est interressante car nous pouvons découper aux maximum notre code, et donc dans le cas de grosses applications contenants beaucoup de composants, on peut donc améliorer la maintenabilité de l'application (application ? non pas tellement sa reste un site web dynamique ouvert sur un navigateur !) et éviter la dupplication de notre code.
Je pense également que l'utilisation de PUG peut être amélioré avec un plugin d'auto-indentation ce qui ferais gagner beaucoup de temps aux développeurs car l'indentation à un impact sur le rendu front.

L'utilisation d'un service worker afin de garder des informations lors d'une perte de connexion ou du fait que l'utilisateur soit hors-ligne est pour ma part, encore à appronfondir .. comment stocker d'avantage de données lors d'un mode hors-ligne ? J'ai remarqué l'API IndexedDB qui permet d'élargir la capacité de stockage .. à appronfondir !

J'ai eu pas mal de difficultés à réalisé ce TP, certaines étapes sont clairement donnée puis d'autres sont bien plus complexe, et pour moi beaucoup de choses sont encore à expérimenter au sujet des "Progressive Web Application".

Personnellement j'essayerais la mise en place de l'API de géolocalisation afin d'améliorer mon savoir.

Merci pour vos cours très bien définis, vos documentations relatives aux exercices et pour le temps que vous nous réservé.