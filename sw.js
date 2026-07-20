/* Minimalan service worker.
   Namjerno NE keširamo ništa: aplikaciji ionako treba internet
   (Supabase), a keširanje bi znalo servirati staru verziju poslije
   pusha. SW postoji jer je uslov da se aplikacija može instalirati. */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
