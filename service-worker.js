/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce5e65b7e8871a0ba497ba1251bd7c56"
  },
  {
    "url": "assets/css/0.styles.72840b66.css",
    "revision": "188c3e95a65459f59da24590da51fa55"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.187f2d6d.js",
    "revision": "3253e84a356c3c1ae99a343da98df18a"
  },
  {
    "url": "assets/js/3.fae5a9a9.js",
    "revision": "159ea9ef69f3002b9ed58c401aa1e0a0"
  },
  {
    "url": "assets/js/4.ffaa6931.js",
    "revision": "7c60271ed34fae6c65171d000d32e9ff"
  },
  {
    "url": "assets/js/5.a5b1511d.js",
    "revision": "44bc846e39974998dbd3797da770b6d6"
  },
  {
    "url": "assets/js/6.413b4043.js",
    "revision": "52f734a60452439a4e141dcd428db944"
  },
  {
    "url": "assets/js/7.e92f2896.js",
    "revision": "7aa1b0f3cc43dba88223bc752ad52023"
  },
  {
    "url": "assets/js/app.0a054019.js",
    "revision": "85e27d91291d3fb67ca76a66ffdb9c26"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "imgs/futurefellow.png",
    "revision": "c9382beeaba9f581e3465611dfeffe8e"
  },
  {
    "url": "imgs/krircc.png",
    "revision": "b09b92f05c4ffd7f1d73a7f4bef0088b"
  },
  {
    "url": "index.html",
    "revision": "431a151e526866b9ba4d70ab9c2d5d90"
  },
  {
    "url": "krircc.html",
    "revision": "c8c8cad2d8afbb5b2c9d513332217c15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
