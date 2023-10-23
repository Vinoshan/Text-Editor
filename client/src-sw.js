const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    // Cache pages for a maximum of 30 days
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// registerRoute is a function that takes two arguments: a function that returns true when the route should be used, and a strategy to use for that route.
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      //Cache only 200 responses
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// offlineFallback(
//   {
//     pageFallback: '/index.html',
//   },
//   [
//     '/',
//     '/index.html',
//     '/src/css/style.css',
//     '/src/js/index.js',
//     '/src/js/install.js',
//     '/src/images/logo.png',
//     '/src-sw.js',
//   ]
// );
