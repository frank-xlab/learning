
self.addEventListener('install', function (e) {
  e.waitUntil()
})

self.addEventListener('activate', function (e) {

})

self.addEventListener('fetch', function (e) {
  e.respondWith()
})

caches.open('XXX').then(function (cache) {

})