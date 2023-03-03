// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cache) => {
//             if (cache !== staticCache) {
//               return caches.delete(cache); //Deleting the old cache (cache v1)
//             }
//           })
//         );
//       })
//       .then(function () {
//         console.info("Old caches are cleared!");
//         return self.clients.claim();
//       })
//   );
// });
