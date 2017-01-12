/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","a00049ba79152d03380c34652f2cb612"],["/data/en/resources.json","b9fa2aef458dd81c894a88e6049c5765"],["/data/hoverboard.config.json","927e88d3b254761f5635facbd2ee1541"],["/data/partners.json","3c4a67f5ee8a04604c1dfead5cfd3b0a"],["/data/schedule.json","58e0494c51d30eb3494f7c9198986bb9"],["/data/sessions.json","5b76b0eef9af8a2300673e0553f609f9"],["/data/speakers.json","5b76b0eef9af8a2300673e0553f609f9"],["/data/team.json","f17c6890ce3e5d805aad7ee46da00fd7"],["/data/tweets.json","58e0494c51d30eb3494f7c9198986bb9"],["/data/videos.json","f17c6890ce3e5d805aad7ee46da00fd7"],["/images/backgrounds/2015_1.jpg","bc9d13af2b3e38b4556be691c63b7889"],["/images/backgrounds/2015_2.jpg","22ce360278168687e87cd0a728c43328"],["/images/backgrounds/2015_3.jpg","d76b9241e72a3f004b7c8f32452b0692"],["/images/backgrounds/backgrounds/2015_1.jpg","bc9d13af2b3e38b4556be691c63b7889"],["/images/backgrounds/backgrounds/2015_2.jpg","22ce360278168687e87cd0a728c43328"],["/images/backgrounds/backgrounds/2015_3.jpg","d76b9241e72a3f004b7c8f32452b0692"],["/images/backgrounds/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/backgrounds/home.png","b57f40e281ba06760d073514bef2f1bb"],["/images/backgrounds/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/backgrounds/location_1.jpg","8de2dd2dd6247cda89a487a1aa38804e"],["/images/backgrounds/backgrounds/location_2.jpg","38683197f335140f8807bec868c5c4dd"],["/images/backgrounds/backgrounds/location_3.jpg","5a4ce654301d6d264e5f4fb48ae890f0"],["/images/backgrounds/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","7ed276be5a100f7da0fe0a9f221748fc"],["/images/backgrounds/location_2.jpg","0e6da57cc6093a4536f6eea4c72fedce"],["/images/backgrounds/location_3.jpg","7d5a9bfd39b91c162a7ab9910e9045d4"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-32.png","2d4e9ee16f4c2c46590b417efc58f143"],["/images/favicon/favicon-72.png","a43363127a7b741b09def7ce5251c976"],["/images/favicon/favicon.ico","b6e1a6d436fdc1facfd5abbe716dabb5"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/code-troopers.png","b13066fc5c484b67e1634fbec917ca16"],["/images/logos/gdg-tours.png","bbcbdfc3b04cf61d13feb760a80d3fb4"],["/images/logos/odl-logo.png","a43363127a7b741b09def7ce5251c976"],["/images/odl_logo.svg","83885f9c236f46d6ff5a276f6875d17e"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/101.JPG","ede88fe70af4490b679cefd1ce1e5089"],["/images/sessions/102.JPG","bbdb4ca9cd529504f4e3a753aeee733d"],["/images/sessions/103.JPG","224b230f4bb13c6ff1d46f619ef803ed"],["/images/sessions/104.JPG","73bad1eb58418b34a464911d3ec93f41"],["/images/sessions/105.JPG","111f9e298a0c75cca4ce4a4bc18fc670"],["/images/sessions/106.JPG","f1eb952cb454b74de96bd4e3907107d0"],["/images/sessions/107.JPG","8231c85cf0d0c19c03fefd00dcb6be25"],["/images/sessions/108.JPG","481a5aff3eab28bbcde894cd8bf01afa"],["/images/sessions/109.JPG","1573d7d1302da1b08f08ce0176c44714"],["/images/sessions/110.JPG","e0fbc859296bad2c71f0a23084d59410"],["/images/sessions/111.JPG","fc52d9e46fa8403336782eeee3397ae7"],["/images/sessions/112.JPG","85270c0e66bc27c8faa2a7f61645e29e"],["/images/sessions/113.JPG","51fec4ff43dc798b30fea374b2ab8e6f"],["/images/sessions/114.JPG","9f9bf0b0e7f91ad483d63e37df977c1d"],["/images/sessions/115.JPG","606958de9bccb22c3bf983153bdce886"],["/images/sessions/116.JPG","18498b45a03bc9681a65f43957431711"],["/images/sessions/117.JPG","ab525002817d6b6ff87daf169de3d15c"],["/images/sessions/119.JPG","161a228686bb400ba188c8df058bd8ed"],["/images/sessions/120.JPG","aab4f9cc5d8c0fae92fe3e55866b58a9"],["/images/sessions/122.JPG","3ecb36e2284df6cb89816a3f4b9d38ed"],["/images/sessions/123.JPG","701c7edc8cb398b857114209fb234271"],["/images/sessions/124.JPG","a911c75a697e7dca346bf259d6cdd6d6"],["/images/sessions/125.JPG","7d1846ed159325b9ee348c3f8f0bf883"],["/images/sessions/133.JPG","bc6011fb13b75b695b848ab7c31efa39"],["/images/sessions/134.JPG","668ebe1db886c5ac44474bd3753a196e"],["/images/sessions/135.JPG","10370c66d83100cf54e15eb50d252302"],["/images/sessions/140.JPG","af7741e0a0b12bc11e19b169bdd107b3"],["/images/social-share.jpg","546e13081b2d268d276cdb245b484b23"],["/images/touch/homescreen-144.png","a363822683360c749f5ee656391686a4"],["/images/touch/homescreen-168.png","6cfd0bf389ef608c684b14dfe7efa68b"],["/images/touch/homescreen-192.png","a7d793b26d31f09c7939f763c8ab741b"],["/images/touch/homescreen-256.png","8e3b83afddd0bbd32a9afc6e9f786de3"],["/images/touch/homescreen-48.png","c852113002dd44cec4faf1df5a59652a"],["/images/touch/homescreen-72.png","36511f2817bf4ae9d4578c852f8eb465"],["/images/touch/homescreen-96.png","090d0e49824f816d265827659176cee3"],["/index.html","a64ded2c7f46974cda3668b69489e5ed"],["/manifest.json","cf0aad7f4de57bdf01b6e191ce30d837"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","809c5b64fbc0f129b4b04650f3a64645"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/drawer-block.html","ea984cd3fca83cf56a8e58e5b138382a"],["/src/elements/footer-block.html","7185127f7bff98f31499d6e44c5114fe"],["/src/elements/header-content.html","06a97c555bd48b4bd0af9743e4b453bd"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","22fd7ba4e00e440d8e56f850b9ad1576"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","f4f3311ae5b41f230a3341105e1327a9"],["/src/elements/photo-block.html","6fc4977db8e046054608eb7f680a905e"],["/src/elements/schedule-day.html","9b4989b2c3440c0123a68eca98825e6b"],["/src/elements/schedule-subnav.html","b07aa2953b04fc1f343f614f23ab3974"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/ticket-element.html","498a199ba2dc885300fae700aca2b7f2"],["/src/elements/tickets-block.html","87d9baee4b252737858d3988e95f1619"],["/src/elements/toast-element.html","98359bdea80551d1a42cc76c23292fae"],["/src/elements/toolbar-block.html","214c354cc22d690652ef63fbdfb89ec6"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","437f45d55966045dd3e23295b11f6182"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/home-page.html","f378d874c77c928da177e7cf6309c422"],["/src/styles/dialog-styles.html","3b77caf32729d5ad12e130eab4e4012d"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","be3b368c43a806624eb892a35fe81747"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




