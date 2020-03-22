addEventListener('install', event => {
  console.log('Hello from the service worker');
  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(fetch(event.request));
  }
});
