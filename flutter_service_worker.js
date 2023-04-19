'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a26d0e5fa0757c9fb785ceb1c6211dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/06/523bf3ef156499e26656a3892a81ad1901c309": "d10643e2753f242d9f2e502816db677d",
".git/objects/08/9827032020a44382bd04bc58d7eb790cbcb98c": "bd353200620b9e8f61d6186265cc7d5e",
".git/objects/12/394feddbd7a7049035dd2b171f89cf7826c2f6": "0876f4eb8663c304ccb661435c239bb5",
".git/objects/1d/d0f11198900738debfdc0c86c712d21062ba66": "9e3a4a063c5f1fd2097b870ea31c3a1b",
".git/objects/31/63194fbf10fe4dd9145a20997c507653ca28e3": "9a8036639446b966c3129581f53381d9",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/40/4aeca7afa668ea946089f7fa561cab79f90e15": "183ef1dd5d9befcd2aed4e91f1baf0fb",
".git/objects/41/42d20e4fd8a75b9ae9f8416687d87c280f3930": "f5e623b2266b505d7b450663f84e82ba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/532702cccf65884d75fc9da66bf92226548e7a": "8e54ee91561dbad98d7883c38691fb9a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/2157dd7fe34ce2caff26e0c9eec914cf3d58cf": "2432cfad1f95cd4523a5e05455739587",
".git/objects/61/9ff8a8b399c57b97b4c8b2397ba48ad9613509": "f3b9a106cd84f406f6005ce10a17b62f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/75c8672bf779d4e6e1e7ec9fe21f7487c268f7": "157dd0d41e6b7db9815d21d6586ac110",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/43371860d39cb706a7d9033d4de2c70ab6a598": "86276181e41f0dd6e6c178e0498197b2",
".git/objects/82/7a8acc73b657b7dc9e97582fd47a0588f2430d": "3d17aa30a159efc96c92a2d229fd768a",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/95/dfd81efe5b2a4c794644dcf5f19d7b95cfbf91": "334a60fea20f9da1c55fceae1cbe11d2",
".git/objects/a4/a92d4e4a7c2e305bdbdc6ce20571e54b858215": "0a5b098508ced02e908dbb298a35dde9",
".git/objects/a4/f54d8c74090feff326e7572c65e4a5d2f4887b": "a45d52c5029f1febb8690de0c6635cc6",
".git/objects/a7/b2588b47facadb2b88efb094b6112d9e61c82c": "82641c20b0de7a78d298ab5bd638b9e3",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8603f3f1275b36f93542ca41117870ad96d121": "96d6fef5980ad2ed7b8973b388bfbce7",
".git/objects/e7/691e6c107375dd9abecedb065551be06443958": "579bf0a6d9ee68a0ae67953955d35b44",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/db158ace5dac2c64836abd1e7d3b4a0ab4a89a": "18e666a1ffc1b96cab4fdc40013b3013",
"assets/AssetManifest.json": "f0355761981ce347b484420fc6ae6060",
"assets/assets/music/bgm.wav": "7b6902597af73f843bdd610988741348",
"assets/assets/music/movebox.wav": "3004622411b28ba6f06ef9d6b81134ab",
"assets/assets/music/moveboxSpeed2.wav": "d05c23231519098049a26a4e610ef696",
"assets/assets/music/moveboxSpeed3.wav": "580ca8717e265659e2e18fe38a25035e",
"assets/assets/visuals/boxaway.png": "2de6e514573688ed2273a992b1cd4112",
"assets/assets/visuals/boxdiagonal.png": "fee562eb5d1ca4521e022afb54fd5b52",
"assets/assets/visuals/controls.png": "0abe6bfdde52bba7fea8f1f30f755ecf",
"assets/assets/visuals/magnet.json": "ef921e972c3bb67d35d4dc6a474f7a0e",
"assets/assets/visuals/playerbox.png": "532d361301508495db26ba6a16d35668",
"assets/assets/visuals/redboxes.png": "fac327ece87f5252a2689c74b4e8c441",
"assets/assets/visuals/target.png": "1b62f6c1554102dffeeaad39e7fa139b",
"assets/assets/visuals/trophy.json": "06363136e1a81639b8ae12789528088c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7c6db357836b1d0e810d8e9cbe40de6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "f92ce88009e47ea46bce0b6d214d2dcc",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15ef2800d4ef43194644d7af68f6a477",
"/": "15ef2800d4ef43194644d7af68f6a477",
"main.dart.js": "2b9fc7c18267f9c4e98eb5fb0d3dd3d7",
"manifest.json": "22ee5916e243ec24526bc8bfb100b71b",
"version.json": "856cdc5cdfea2a08616189c5134fa15f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
