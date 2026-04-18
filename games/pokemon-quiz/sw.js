/* Service Worker — Покемон Квиз PWA */
const CACHE_NAME = "pokemon-quiz-v1";

const STATIC_ASSETS = [
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
  "./assets/custom-1.jpg",
  "./assets/custom-2.jpg",
  "./assets/custom-3.jpg",
  "./assets/custom-4.jpg",
  "./assets/custom-5.jpg"
];

/* Install — pre-cache static shell */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

/* Activate — clean old caches */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Fetch — network-first for API, stale-while-revalidate for everything else */
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  /* API calls — always go to network, don't cache */
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  /* Pokémon artwork — cache with long expiry (images rarely change) */
  if (url.hostname === "raw.githubusercontent.com") {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  /* Static assets — stale-while-revalidate */
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        /* offline fallback — return cached or a simple offline page */
        return cached || new Response("Нет подключения к интернету", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      });
      return cached || networkFetch;
    })
  );
});
