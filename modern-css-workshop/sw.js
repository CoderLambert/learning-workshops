// Service Worker - 提供基本的离线缓存
const CACHE_NAME = 'modern-css-v1';
const ASSETS = [
  './',
  './index.html',
  './learn.html',
  './flashcard.html',
  './roots.html',
  './root-detail.html',
  './progress.html',
  './css/minimal.css',
  './js/wordData.js',
  './js/siteConfig.js',
  './js/storage.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
});
