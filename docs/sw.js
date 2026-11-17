'use strict';
// Increment VERSION whenever any file in SHELL changes.
const VERSION = '1.0.0';
const PREFIX = `words-in-sequence:${self.registration.scope}:`;
const CACHE = PREFIX + VERSION;
const SHELL = ['./', 'index.html', 'style.css', 'app.js', 'verses.json', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png'];
const urls = SHELL.map(path => new URL(path, self.registration.scope).href);
self.addEventListener('install', event => {
  // Installation only succeeds if the complete reader and all text are saved.
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(urls.map(url => new Request(url, {cache: 'reload'})));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const target = new URL(event.request.url);
  target.hash = ''; target.search = '';
  if (!urls.includes(target.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const saved = await cache.match(target.href);
    return saved || fetch(event.request);
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type !== 'CHECK_OFFLINE') return;
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const present = await Promise.all(urls.map(url => cache.match(url)));
    event.source?.postMessage({type: 'OFFLINE_STATUS', ready: present.every(Boolean), version: VERSION});
  })());
});
