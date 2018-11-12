importScripts("/pwagithubpages/precache-manifest.b9bedb1ec288585e5cda4fe2d6c6613b.js", "/pwagithubpages/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/pwagithubpages/workbox-v3.6.3"});
 
workbox.core.setCacheNameDetails({prefix: "fapp"});
  
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|css|js|html)$/,
  
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://faranto.esn-germany.de/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'api',
  }),
);

workbox.routing.registerRoute(
  new RegExp('pwagithubpages/'),
  workbox.strategies.cacheFirst({
    cacheName: 'faranto',
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);
