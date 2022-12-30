'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "15f1e0e94d8f18230acebf2f8c926fcb",
"assets/assets/fonts/montserrat-black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/fonts/montserrat-medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/montserrat-regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/notosans-black.ttf": "bd5128e54a5262c4ceacd4a823dc2fc8",
"assets/assets/fonts/notosans-medium.ttf": "f2197cc8a55ba75995cd38d00e8be599",
"assets/assets/fonts/notosans-regular.ttf": "ac08e269b7f479624b266c0ea20013b4",
"assets/assets/fonts/poppins-black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins-medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins-regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/roboto-black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/roboto-medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/roboto-regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/admin_img.png": "8c2a7af8feebf0fdeed535deca426d0e",
"assets/assets/images/app_content.png": "ecc6b21818270b8db5124819b6da9352",
"assets/assets/images/app_logo.png": "68fc9582247290606aecf306ae56c561",
"assets/assets/images/attendant_img.png": "55f4471c31a19de33aad6937412abfa8",
"assets/assets/images/avatar_img.png": "f17e800d1f7fd99383edd0ee2c8ccfa3",
"assets/assets/images/backward_img.png": "a1e7a5fd2e020aa0fde7147314e47ac5",
"assets/assets/images/bg_img.png": "50f45717c4ee188a69b5ecdfdf83779f",
"assets/assets/images/bus_driver_img.png": "69d445e23093a6f7ade47feba0ab1296",
"assets/assets/images/call_img.png": "ad2d6e56b4e83e830925a8c19fe13af1",
"assets/assets/images/card_img.png": "0e3d71772a157c359821aec396062f5e",
"assets/assets/images/color_bus_img.png": "4d46fb52124e5dfb3fac16817d295d4a",
"assets/assets/images/contacts_img.png": "3b141fff18496972a89804802374f798",
"assets/assets/images/dashboard_img.png": "e521e3b00f5ba42e00c17c2621ffff2f",
"assets/assets/images/destination_map_marker.png": "aaf9817ee803a92175966bf97c3eb669",
"assets/assets/images/driver-marker-icon.png": "8d41c82c145cb692063d56a9adddb2d0",
"assets/assets/images/driving_pin.png": "6b9ab76e07f3747fd302ec3841cbbae6",
"assets/assets/images/fleet_img.png": "45783edf08a9c3615491eb4ad7d9162e",
"assets/assets/images/forward_img.png": "5302442341f16c9266183a88e979292d",
"assets/assets/images/friend1.jpg": "8407db0925f5990d6d2b448a6b1551de",
"assets/assets/images/friend2.jpg": "fb144607af2c3d80b8e38dc0df4134d6",
"assets/assets/images/govind_img.png": "3edbdd7af4832a65f451ea88597c1934",
"assets/assets/images/house-marker-icon.png": "54149d84b460ae3bb84616c6bd8f5126",
"assets/assets/images/img.png": "6b57776eef21bd4cdefa60feb5bc3e17",
"assets/assets/images/img_1.png": "8a3be96b5dac059d59541856b08635f4",
"assets/assets/images/img_2.png": "973df2ff78ed87ea80617a8f5e02ff83",
"assets/assets/images/img_3.png": "aaa9c68100b3b6800e3820ff8caf8ce1",
"assets/assets/images/img_green_pass.png": "31d81522b290d3da4b3b40d374209327",
"assets/assets/images/img_warning.png": "2bd8886b98705259140e369065c10833",
"assets/assets/images/list_img.png": "8f75f55344f2112f24214744eff8340d",
"assets/assets/images/location_img.png": "f477b6fc03a93a5c292cbe87c8607bc5",
"assets/assets/images/log_out.png": "9ad7e800bd449506c0d33ad0dc57402b",
"assets/assets/images/more_img.png": "cc73933411f4a48601778b76cddca2cd",
"assets/assets/images/notify_img.png": "c3dc762533aecc00cac612db866b9389",
"assets/assets/images/no_file_img.png": "2a19ae937a93388b4e66d3aa057cfb22",
"assets/assets/images/no_img.png": "33fdc1734bd63c9d907d1ba54a1eb1e4",
"assets/assets/images/no_onboard_img.png": "766b77e5dc88ae29d7502319800dd36d",
"assets/assets/images/no_sqaure_img.png": "e4c276c00bcb82e1cc307423db1f5e0e",
"assets/assets/images/onboard_img.png": "b20c00259807a8e474822d2035cde7bf",
"assets/assets/images/pencil_img.png": "f705e3786f42c16639651b875c4bbeaa",
"assets/assets/images/person_img.png": "113f66f5c9d9a6dbe37dc2ffa5f5522b",
"assets/assets/images/profile_img.png": "d71c5b8de7aec991e2fd81557bfbbe3b",
"assets/assets/images/rectangular_img.png": "a62ca6241593c4215dcbd876b6047db4",
"assets/assets/images/rect_img.png": "b3f0bd54908b8d50c333bab0f1ba588d",
"assets/assets/images/red_dot_img.png": "9a6cc4af89e76ebbc9ab5edbaa92bb83",
"assets/assets/images/restaurant-marker-icon.png": "d4734bd82086b20512afdcc75fdc391d",
"assets/assets/images/routes_img.png": "40d4a05ba3d0e8bd4ee35736c1a2f4f4",
"assets/assets/images/route_img.png": "cbd90d46e3df990a1c76e7aa5405f05b",
"assets/assets/images/scanner_img.png": "ffd8b64c6f30ba71752597396d7f82d0",
"assets/assets/images/settings_img.png": "7e488aeb6529f23be167db0f9d0ad4f4",
"assets/assets/images/small_forward_img.png": "dc12123c491ef374c573f2aa3b5ff14f",
"assets/assets/images/student1_img.png": "243a6143cc844b9dd275493e69530a40",
"assets/assets/images/student2_img.png": "698e043dd0186b1ef6ece070e838f4e6",
"assets/assets/images/student_img.png": "bccac462552943a51d919328d80b1b09",
"assets/assets/images/time_img.png": "14acbbb9c6670be163f5550497805cdd",
"assets/assets/images/track_vehicle_img.png": "cd8c6c1f52fba8b6c55ea6ca9989561e",
"assets/assets/images/user_img.png": "50ec301046a3f34a8ccb0dd669ffb0e3",
"assets/assets/images/vehicle_img.png": "91f91b8441b99ab5223703ef61cf7c73",
"assets/FontManifest.json": "f5bbcf081202c7f13f5a87d58365f9be",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bbe93fb82af988a6d2a9a7e9a9d155f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "dce70a6a414a07c1692817bfc0b83c5e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "06d354fa092eaddb2af3eb3005c93beb",
"icons/Icon-512.png": "26a5e35476b5674c9f84dc8d67e22f1b",
"icons/Icon-maskable-192.png": "06d354fa092eaddb2af3eb3005c93beb",
"icons/Icon-maskable-512.png": "26a5e35476b5674c9f84dc8d67e22f1b",
"index.html": "49e55d5f55a27c2bc452a81b7fd55081",
"/": "49e55d5f55a27c2bc452a81b7fd55081",
"main.dart.js": "1daf8bb382d656200d9ec52085f90e75",
"manifest.json": "5599e4db4f45ff86f4017d57a28c6bea",
"version.json": "f47204833af961d38655206e1a954037"
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
