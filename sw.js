// Avtomatik yaradılıb (scripts/build-pages.mjs)
const CACHE = 'el-oyunu-mwfdmrh8';
const PRECACHE = ["./","./index.html","./favicon.svg","./icon-192.png","./img/hand.webp","./img/logo_hand.webp","./img/token_x.webp","./img/token_empty.webp","./assets/baloo-2-latin-700-normal-CqTg7A15.woff2","./assets/baloo-2-latin-700-normal-Ld3Zm3l2.woff","./assets/baloo-2-latin-800-normal-B8BXfZF7.woff","./assets/baloo-2-latin-800-normal-BbF3Etk1.woff2","./assets/baloo-2-latin-ext-700-normal-D6LeXASg.woff","./assets/baloo-2-latin-ext-700-normal-Mlh7kdab.woff2","./assets/baloo-2-latin-ext-800-normal-C_Iwmf1s.woff2","./assets/baloo-2-latin-ext-800-normal-D-iCxxqE.woff","./assets/bundler-CpPohn5F.js","./assets/index-DyQKWpPM.css","./assets/index-TuBqLk0H.js","./assets/nunito-latin-600-normal-Br8yIETf.woff2","./assets/nunito-latin-600-normal-Cd0eNu1l.woff","./assets/nunito-latin-700-normal-Dort48En.woff2","./assets/nunito-latin-700-normal-OcDqTBcA.woff","./assets/nunito-latin-800-normal-D-J0wlBY.woff","./assets/nunito-latin-800-normal-Dz8SOQK_.woff2","./assets/nunito-latin-ext-600-normal-BKUpuB78.woff","./assets/nunito-latin-ext-600-normal-Dd9Zuxh1.woff2","./assets/nunito-latin-ext-700-normal-BWeMsAzO.woff2","./assets/nunito-latin-ext-700-normal-D4woHhbd.woff","./assets/nunito-latin-ext-800-normal-CDcxIxx8.woff","./assets/nunito-latin-ext-800-normal-CtU8tJOV.woff2","./assets/peer-zGcxvi4C.js"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // səhifə: əvvəl internetdən (yeni versiya), olmasa yaddaşdan
    e.respondWith(fetch(req).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
