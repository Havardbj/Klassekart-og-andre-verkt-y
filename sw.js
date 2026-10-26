// Klassekart – service worker
// Gjør at appen kan installeres og virker uten nett.
// Henter alltid nyeste versjon når det er nett, og bruker lagret kopi når det ikke er det.
// Øk versjonsnummeret når filene endres.
const VERSJON = "klassekart-1.3.4";
const FILER = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSJON).then(c => c.addAll(FILER)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(navn => Promise.all(navn.filter(n => n !== VERSJON).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(svar => {
        if (svar && svar.ok) {
          const kopi = svar.clone();
          caches.open(VERSJON).then(c => c.put(req, kopi));
        }
        return svar;
      })
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(lagret => lagret || (req.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
