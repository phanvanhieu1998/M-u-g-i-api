// self.addEventListener("activate", function (event) {
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames
//           .filter(function (cacheName) {
//             // Check if the cache name matches your app name
//             console.log("kaka");
//             return cacheName.startsWith("your-app-name-");
//           })
//           .map(function (cacheName) {
//             // Delete the cache if the cache name matches
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });

// console.log("run sw");
