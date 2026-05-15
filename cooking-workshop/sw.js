const BASE_PATH = './';
const CACHE_NAME = 'cooking-workshop-v1';
const ASSETS_TO_CACHE = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'learn.html',
  BASE_PATH + 'flashcard.html',
  BASE_PATH + 'roots.html',
  BASE_PATH + 'progress.html',
  BASE_PATH + 'root-detail.html',
  BASE_PATH + 'css/minimal.css',
  BASE_PATH + 'js/wordData.js',
  BASE_PATH + 'js/siteConfig.js',
  BASE_PATH + 'js/storage.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

// 安装Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// 激活Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有匹配的资源，直接返回
        if (response) {
          return response;
        }
        // 否则发起网络请求
        return fetch(event.request)
          .then((networkResponse) => {
            // 如果是有效的响应，缓存起来
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseToCache));
            }
            return networkResponse;
          })
          .catch(() => {
            // 网络请求失败时，可以返回离线页面
            return caches.match(BASE_PATH + 'index.html');
          });
      })
  );
});
