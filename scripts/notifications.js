import { ready } from './document-ready';

ready(function() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
  } else {
    console.log('This browser does support notifications.');

    if (document.querySelector('.notifications') !== null) {
      const buttonStartNotification = document.querySelector('.notifications');

      buttonStartNotification.addEventListener('click', function() {
        let promise = Notification.requestPermission();
        // wait for permission
      });
    }

    if (
      Notification.permission === 'denied' ||
      Notification.permission === 'default'
    ) {
      console.log('Notifications are not actived');
    } else {
      console.log('Notifications are actived');
      const doNotifications = document.querySelectorAll(
        '.button[data-notification]'
      );

      for (let i = 0; i < doNotifications.length; i++) {
        const doNotification = doNotifications[i];

        doNotification.addEventListener('click', function() {
          let attrValue = doNotification.getAttribute('data-notification');
          if (attrValue === 'create') {
            var text = 'HEY! Un nouveau événement prochainement !';
            var notification = new Notification('My Events', {
              body: text
            });
          } else if (attrValue === 'propositionsPlaces') {
            var text = 'HEY! Une nouvelle proposition de lieu a été ajouté !';
            var notification = new Notification('My Events', {
              body: text
            });
          } else if (attrValue === 'updateEvent') {
            var text = 'HEY! Evénement mis à jour !';
            var notification = new Notification('My Events', {
              body: text
            });
          } else if (attrValue === 'deleteEvent') {
            var text = 'HEY! Evénement suprimmé !';
            var notification = new Notification('My Events', {
              body: text
            });
          } else if (attrValue === 'updatePlaces') {
            var text = 'HEY! Un lieu à été mis à jour !';
            var notification = new Notification('My Events', {
              body: text
            });
          } else if (attrValue === 'deletePlaces') {
            var text = 'HEY! Un lieu a été suprimmé !';
            var notification = new Notification('My Events', {
              body: text
            });
          }
        });
      }
    }
  }
});
