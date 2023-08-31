'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e19e1931dd949bb5e6ba1be5b534af8a",
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
"assets/assets/images/app_content.png": "ecc6b21818270b8db5124819b6da9352",
"assets/assets/images/app_icon.png": "0445cf28a4c7d3e3fe0b515d1eb5474e",
"assets/assets/images/app_logo.png": "68fc9582247290606aecf306ae56c561",
"assets/assets/images/avatar_img.png": "f17e800d1f7fd99383edd0ee2c8ccfa3",
"assets/assets/images/bus_marker.png": "3e61664419e63efb1dcd942f2d866925",
"assets/assets/images/bus_marker1.png": "4c2545f3955d49eefb85c9eb6fbb28ed",
"assets/assets/images/dashboard_img.png": "e521e3b00f5ba42e00c17c2621ffff2f",
"assets/assets/images/destination_map_marker.png": "aaf9817ee803a92175966bf97c3eb669",
"assets/assets/images/driver-marker-icon.png": "8d41c82c145cb692063d56a9adddb2d0",
"assets/assets/images/driving_pin.png": "6b9ab76e07f3747fd302ec3841cbbae6",
"assets/assets/images/en.png": "d363ea27b8949e699ead1a19fa5ae316",
"assets/assets/images/friend1.jpg": "8407db0925f5990d6d2b448a6b1551de",
"assets/assets/images/friend2.jpg": "fb144607af2c3d80b8e38dc0df4134d6",
"assets/assets/images/img.png": "fd74504b42d8076a615c6ba4096f0c25",
"assets/assets/images/img_1.png": "7b0215dc498ef39b51a5c5925b48745d",
"assets/assets/images/img_4.png": "71f81850561058b31354a30350afaf44",
"assets/assets/images/img_green_pass.png": "31d81522b290d3da4b3b40d374209327",
"assets/assets/images/img_warning.png": "2bd8886b98705259140e369065c10833",
"assets/assets/images/location_img.png": "f477b6fc03a93a5c292cbe87c8607bc5",
"assets/assets/images/logo.gif": "a5f00a41ae512d6666938522d314acc9",
"assets/assets/images/logo1.gif": "24c3deb490f897d511666d90d6a18fec",
"assets/assets/images/log_out.png": "9ad7e800bd449506c0d33ad0dc57402b",
"assets/assets/images/marker.png": "e32c2057a6240d0f84101450b77b2367",
"assets/assets/images/more_img.png": "cc73933411f4a48601778b76cddca2cd",
"assets/assets/images/notify_img.png": "c3dc762533aecc00cac612db866b9389",
"assets/assets/images/no_file_img.png": "2a19ae937a93388b4e66d3aa057cfb22",
"assets/assets/images/no_img.png": "33fdc1734bd63c9d907d1ba54a1eb1e4",
"assets/assets/images/no_onboard_img.png": "766b77e5dc88ae29d7502319800dd36d",
"assets/assets/images/no_sqaure_img.png": "e4c276c00bcb82e1cc307423db1f5e0e",
"assets/assets/images/onboard_img.png": "b20c00259807a8e474822d2035cde7bf",
"assets/assets/images/pencil_img.png": "f705e3786f42c16639651b875c4bbeaa",
"assets/assets/images/person_img.png": "113f66f5c9d9a6dbe37dc2ffa5f5522b",
"assets/assets/images/profile_img.png": "dafd1feb7c7af6dfd52d3e6d99d43a29",
"assets/assets/images/profile_pic.png": "c64f8906de7f03d445d764454c26f188",
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
"assets/assets/images/tr.png": "2168c442f86c976e9f1fbc874a74f1bd",
"assets/assets/images/track_vehicle_img.png": "cd8c6c1f52fba8b6c55ea6ca9989561e",
"assets/assets/images/user_img.png": "50ec301046a3f34a8ccb0dd669ffb0e3",
"assets/assets/images/vehicle_img.png": "91f91b8441b99ab5223703ef61cf7c73",
"assets/assets/lang/ar.json": "dea4e1affeb469189d4dc0acae4570f3",
"assets/assets/lang/en.json": "7459f39d236bd2bdeff15d47807d0f55",
"assets/FontManifest.json": "f5bbcf081202c7f13f5a87d58365f9be",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f6567895ed943dee89488a61a68d2e39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "dce70a6a414a07c1692817bfc0b83c5e",
"firebase-messaging-sw.js": "84c1049f2327b538368753bf2d3422a4",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-icon-144x144.png": "e23d23573c40547c3051df8848f3917d",
"icons/android-icon-192x192.png": "62062553d952aac95f829e5a1e7df8ec",
"icons/android-icon-36x36.png": "d7d8804f22d69e0d8f8ad8868870b1d2",
"icons/android-icon-48x48.png": "9c049f27b81f90b774d73638d5943e2f",
"icons/android-icon-72x72.png": "b00db035d89a1401fbe6a79fa9ac0f99",
"icons/android-icon-96x96.png": "76b37c7785fac532b0189dac62cff53f",
"icons/apple-icon-114x114.png": "46a6052b23c9d456b7bc8b3eed1e7ebf",
"icons/apple-icon-120x120.png": "5dead2aae297ddb34dc3528cc4e08499",
"icons/apple-icon-144x144.png": "e23d23573c40547c3051df8848f3917d",
"icons/apple-icon-152x152.png": "fd424a7be5753262a2f0ed9180173796",
"icons/apple-icon-180x180.png": "9080c673fdebc1ab21e8489b0d80b95a",
"icons/apple-icon-57x57.png": "8dc0d1c29660af825ea1a26ac478e8e4",
"icons/apple-icon-60x60.png": "21c50e46ec389d5d5e98852ff5d4edca",
"icons/apple-icon-72x72.png": "b00db035d89a1401fbe6a79fa9ac0f99",
"icons/apple-icon-76x76.png": "52b59a5e022ebc1a864c7b73fc5d6873",
"icons/apple-icon-precomposed.png": "b4c7d552e571c0fdf98bcf99ad4dcf76",
"icons/apple-icon.png": "b4c7d552e571c0fdf98bcf99ad4dcf76",
"icons/favicon-16x16.png": "5e003b1f78212941e032232005836ecb",
"icons/favicon-32x32.png": "c22c43cf9a6c2f3f6be86a92b4bac392",
"icons/favicon-96x96.png": "cc6d391a6cd2878f2a014aa496ae7105",
"icons/favicon.ico": "55f742db4c849119e8273dd2d8499b18",
"icons/Icon-192.png": "06d354fa092eaddb2af3eb3005c93beb",
"icons/Icon-512.png": "26a5e35476b5674c9f84dc8d67e22f1b",
"icons/Icon-maskable-192.png": "06d354fa092eaddb2af3eb3005c93beb",
"icons/Icon-maskable-512.png": "26a5e35476b5674c9f84dc8d67e22f1b",
"icons/ms-icon-144x144.png": "a8e6e62f483860fdb9562cfdf8596958",
"icons/ms-icon-150x150.png": "3c5cb91c33c97a3dc3c0fd54914b3b00",
"icons/ms-icon-310x310.png": "ce3b1b6f4179e5c42d7108ebdabddea3",
"icons/ms-icon-70x70.png": "665dec70791edd5731b250cff0af767f",
"index.html": "e2aaf7fa38ae276fae1891b1b598c895",
"/": "e2aaf7fa38ae276fae1891b1b598c895",
"main.dart.js": "6c734a6444b7d804620d21df5c9d1c9d",
"manifest.json": "032035967a08bf78ac41ec8a60fd87d9",
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
