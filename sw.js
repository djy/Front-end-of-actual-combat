const CACHE = "yejiawei-pwd-v5";
const precacheFiles = [
    './img/aside.1aa37d3d.jpg',
    './img/author.6eb61820.jpg',
    './img/ImageMap.6809d38a.png',
    './img/pagehead.b7e2612a.png',
    './img/road.18f1398d.png',
    './img/submenu.65f7930c.jpeg',
];

self.addEventListener("install", function (event) {
    console.log("[PWA] install事件正在执行");
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return cache.addAll(precacheFiles);
        })
    );
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") return;
    event.respondWith(
        fromCache(event.request).then(
            function (response) {
                // 缓存中存在要加载的文件
                // 执行下更新，方便下次从缓存中取出的文件最新
                event.waitUntil(
                    fetch(event.request).then(function (response) {
                        return updateCache(event.request, response);
                    })
                );

                return response;
            },
            function () {
                // 缓存中不存在要加载的文件，直接执行更新
                return fetch(event.request)
                    .then(function (response) {
                        event.waitUntil(updateCache(event.request, response.clone()));
                        return response;
                    })
                    .catch(function (error) {
                        console.log("[PWA] 网络请求失败." + error);
                    });
            }
        )
    );
});

function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            if (!matching || matching.status === 404) {
                console.log("缓存中没有：" + request.url);
                return Promise.reject("no-match");
            }
            console.log("缓存中已经存在：" + request.url);
            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function (cache) {
        return cache.put(request, response);
    });
}