const CACHE_NAME = 'practice-hub-v43';
const urlsToCache = [
  './',
  './index.html',
  './pages/computer/computer.html',
  './pages/computer/dbms.html',
  './pages/computer/dbms-topic-1-introduction.html',
  './pages/computer/dbms-topic-2-file-system-vs-dbms.html',
  './pages/computer/dbms-topic-3-architecture.html',
  './pages/computer/DBMS_Schema.html',
  './pages/tools/alphabets.html',
  './pages/tools/multiplication.html',
  './pages/tools/table-hunt.html',
  './pages/tools/consecutive-products.html',
  './pages/tools/squares.html',
  './pages/tools/cubes.html',
  './pages/tools/reverse-table.html',
  './pages/tools/multiplication-division-mcq.html',
  './pages/tools/focus-meditation.html',
  './pages/tools/focus-breathing.html',
  './pages/tools/focus-dot-tracking.html',
  './pages/tools/focus-number-scan.html',
  './pages/tools/focus-symbol-flash.html',
  './pages/tools/focus-stroop-tap.html',
  './pages/tools/focus-sequence-memory.html',
  './pages/tools/focus-5-4-3-2-1.html',
  './pages/tools/focus-candle-gaze.html',
  './pages/tools/focus-body-scan.html',
  './pages/tools/fractions.html',
  './pages/articles/articles.html',
  './pages/articles/article-ssc-quant-strategy.html',
  './pages/articles/article-bank-quant-roadmap.html',
  './pages/articles/article-railway-math-plan.html',
  './pages/articles/article-mock-analysis-framework.html',
  './pages/articles/article-daily-study-plan.html',
  './pages/articles/article-focus-concentration-methods.html',
  './pages/articles/article-cutoff-prep-strategy.html',
  './pages/articles/article-7-day-revision-cycle.html',
  './pages/articles/article-ssc-mensuration-shortcuts.html',
  './pages/articles/article-bank-di-speed-strategy.html',
  './pages/articles/article-time-work-distance-guide.html',
  './power-practice.css',
  './power-practice.js',
  './mobile-overrides.css',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
            // Offline fallback logic here if needed
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
