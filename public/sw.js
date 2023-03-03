this.addEventListener("install", (event) => {
  console.log("event", event);
  event.waitUntil(caches.open("v1").then((cache) => cache.add("/index.html")));
});

this.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          console.log("key", key);

          if (!cacheAllowlist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

console.log("run sw");
