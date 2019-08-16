const cacheVersion = 'v3'; 

const cacheList = [
    './img/aside.1aa37d3d.jpg',
    './img/author.6eb61820.jpg',
    './img/ImageMap.6809d38a.png',
    './img/pagehead.b7e2612a.png',
    './img/road.18f1398d.png',
    './img/submenu.65f7930c.jpeg',
    './template.html'
];

const noCacheList = [ // 指定不需要缓存资源的路径
    "http://localhost:8080/yejiawei.webmanifest",
    "http://localhost:8080/favicon.ico",
    "https://profos.xyz/yejiawei.webmanifest",
    "http://profos.xyz/favicon.ico",
];

const updateCache = (request) => {
    return fetch(request).then(response => {
        return caches.open(cacheVersion).then(cache => {
            if(response.ok && noCacheList.indexOf(response.url) === -1){
                cache.put(request, response.clone());
            }
            return response;
        })
    }).catch(err => {
        return Promise.reject('网络出错无法更新文件：' + request.url);
    })
}

// 缓存资源文件
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheVersion).then(cache => {
            return cache.addAll(cacheList);
        })
        .then(() => {
            return self.skipWaiting();
        })
    );
})

self.addEventListener('fetch', e => {
    e.respondWith( // 用来拦截浏览器的默认fetch请求资源
        caches.match(e.request).then(response => {
            if(response !== undefined) { 
                return response;
            }else{
                return updateCache(e.request).catch(function (err) {
                    console.log(err);
                });
            }
        })
    );
})

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheVersion) {
                    return caches.delete(key);
                }
            }))
            .then(() => {
                return self.clients.claim();
            })
        })
    );
});



