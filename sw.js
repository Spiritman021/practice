const CACHE_NAME = 'practice-hub-v72';
const urlsToCache = [
  './',
  './index.html',
  './pages/computer/computer.html',
  './pages/computer/dbms.html',
  './pages/computer/dbms-topic-1-introduction.html',
  './pages/computer/dbms-topic-2-file-system-vs-dbms.html',
  './pages/computer/dbms-topic-3-architecture.html',
  './pages/computer/DBMS_Schema.html',
  './pages/computer/DBMS_Three_Schema_Architecture.html',
  './pages/computer/DBMS_Data_Independence.html',
  './pages/computer/computer_networks.html',
  './pages/computer/1_computer_networks.html',
  './pages/vocab/vocab.html',
  './pages/vocab/daily-class-vocab-1-june-2026.html',
  './pages/vocab/daily-class-vocab-2-june-2026.html',
  './pages/vocab/daily-class-vocab-3-june-2026.html',
  './pages/vocab/daily-class-vocab-4-june-2026.html',
  './pages/vocab/daily-class-vocab-5-june-2026.html',
  './pages/vocab/daily-class-vocab-6-june-2026.html',
  './pages/vocab/daily-class-vocab-8-june-2026.html',
  './pages/vocab/daily-class-vocab-9-june-2026.html',
  './pages/vocab/daily-class-vocab-10-june-2026.html',
  './pages/vocab/daily-class-vocab-12-june-2026.html',
  './pages/vocab/daily-class-vocab-15-june-2026.html',
  './pages/vocab/daily-class-vocab-16-june-2026.html',
  './pages/vocab/daily-class-vocab-22-june-2026.html',
  './pages/vocab/daily-class-vocab-25-june-2026.html',
  './pages/vocab/weekly-vocab-magazine-25-30-may-2026.html',
  './pages/vocab/extra-vocab-may-month-magazine-2026.html',
  './pages/grammar/grammar.html',
  './pages/120rulesgrammar/120rulesgrammar.html',
  './pages/120rulesgrammar/grammar_rules_final_1_to_3.html',
  './pages/120rulesgrammar/grammar_rule4.html',
  './pages/120rulesgrammar/grammar_rule5.html',
  './pages/120rulesgrammar/grammar_rules_6_7_8.html',
  './pages/120rulesgrammar/grammar_rules_9_10_11_12.html',
  './pages/120rulesgrammar/grammar_rules_13_14_15_16.html',
  './pages/grammar-granth/Grammar_Granth_Notes_Parts_of_Speech.html',
  './pages/grammar-granth/Grammar_Granth_Day2_Verb_Adverb_Preposition_Conjunction_Interjection.html',
  './pages/grammar-granth/Grammar_Granth_Day3_Basic_Concepts_Sentence_Formation.html',


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
  './ask-ai.css',
  './ask-ai.js',
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

async function withAskAI(response) {
  if (!response || !response.ok || !response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.clone().text();
  if (html.includes('ask-ai.js') || !/<\/body>/i.test(html)) return response;
  const scriptUrl = new URL('ask-ai.js', self.registration.scope).href;
  const bodyIndex = html.toLowerCase().lastIndexOf('</body>');
  const enhanced = `${html.slice(0, bodyIndex)}<script src="${scriptUrl}" defer></script>\n${html.slice(bodyIndex)}`;
  return new Response(enhanced, { status: response.status, statusText: response.statusText, headers: response.headers });
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return withAskAI(cached);
    try {
      const response = await fetch(event.request);
      if (response?.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }
      return withAskAI(response);
    } catch (_) {
      return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    }
  })());
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
