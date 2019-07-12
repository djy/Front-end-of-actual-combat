const CACHE = "yejiawei-pwd-v0_8";
const precacheFiles = [
    './img/aside.1aa37d3d.jpg',
    './img/author.6eb61820.jpg',
    './img/ImageMap.6809d38a.png',
    './img/pagehead.b7e2612a.png',
    './img/road.18f1398d.png',
    './img/submenu.65f7930c.jpeg',
    './template.html',

    './webgl/01ba6e02c5b5a0100a30414e2295319d.jpg',
    './webgl/082610eb1392266136fc2fd0e66ad686.glsl',
    './webgl/092573494f967c72f81f9824e6424f85.glsl',
    './webgl/097d07998cad25c91e7deec6b58077f3.jpg',
    './webgl/15464321bb1d2184e48e274eccefa357.glsl',
    './webgl/21acc306a5b6ada9cf891deb9ffb9729.glsl',
    './webgl/23ac81905831489de3accea465fe4279.jpeg',
    './webgl/2c5497bb2e92473f3928f2ae177150a4.jpg',
    './webgl/2ef4791b3a549bb043553c06db202feb.jpg',
    './webgl/3630a9a5367feca4619aa786b1a8169b.jpg',
    './webgl/39d5bf629e078e010d4b473cf8471fd3.gltf',
    './webgl/3b898ca1e9c10eea638f9ee3af3ee1dd.jpg',
    './webgl/3f2a87ada11d479d0b001a146fc03c99.glsl',
    './webgl/40d4a2748322eea80b830454f7e65cd4.glsl',
    './webgl/438cadb145cca4a164331d52da627543.jpg',
    './webgl/449ea3cee953bf609fa029142cb5d161.glsl',
    './webgl/4b5a3958222045675e597bd178ac3c3e.glsl',
    './webgl/53c2f67e60e606480a7b73eccc7c6cb0.glsl',
    './webgl/5436fbb473a6a916071d4048351404d4.glsl',
    './webgl/65f7930ca212bc63604a5f855e427a79.jpeg',
    './webgl/667134bc97ecf6e9f58b8f1e16da1943.glsl',
    './webgl/6e604290eae408ae7a2e9ca8c231fa4d.jpg',
    './webgl/80c2e1843a8b77217acfca31187de7ef.glsl',
    './webgl/860f0456716c2c598160f613c1547812.jpg',
    './webgl/9b33160e24fc8b9fd03f33eeda2e396f.glsl',
    './webgl/a8d8ff12bb27947c3b99f5fa0f796372.glsl',
    './webgl/ac350b2c5377c58ce711f1d20a42bcb9.glsl',
    './webgl/ae4727ebf38417d90f4e3728671f2df6.jpg',
    './webgl/b59a8d23e5d0905657cab7d63d2617a2.glsl',
    './webgl/bb491ad163624a4b2b39e716e0d21fd9.glsl',
    './webgl/cube.e6668dd3d38d28b3977d.js',
    './webgl/cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724.e6668dd3d38d28b3977d.js',
    './webgl/dd5e2330c10475578aefa5889166a7c7.jpg',
    './webgl/directionlight.e6668dd3d38d28b3977d.js',
    './webgl/e70ff9c7f7757286ae7c4a2110b00db0.glsl',
    './webgl/eae71b7ebdb838ed8088989162879337.glsl',
    './webgl/eff4fd8593f7a785ba41792e2653ea9f.glsl',
    './webgl/f39bdeaeb31bd01eda7b7ed13dd24e56.glsl',
    './webgl/f4f5a74364771bf0c6d274a9e5821bad.png',
    './webgl/f54de13eb433ae2f823b0c7cf3d5ab22.jpg',
    './webgl/fogCube.e6668dd3d38d28b3977d.js',
    './webgl/framebuffer.e6668dd3d38d28b3977d.js',
    './webgl/gltf.e6668dd3d38d28b3977d.js',
    './webgl/index.html',
    './webgl/main.e6668dd3d38d28b3977d.js',
    './webgl/movecube.e6668dd3d38d28b3977d.js',
    './webgl/moveplane.e6668dd3d38d28b3977d.js',
    './webgl/pointlight.e6668dd3d38d28b3977d.js',
    './webgl/rotateeye.e6668dd3d38d28b3977d.js',
    './webgl/runtime.e6668dd3d38d28b3977d.js',
    './webgl/shadowcube.e6668dd3d38d28b3977d.js',
    './webgl/skybox.e6668dd3d38d28b3977d.js',
    './webgl/sphere.e6668dd3d38d28b3977d.js',
    './webgl/static/gl-matrix.js',
    './webgl/texturecompose.e6668dd3d38d28b3977d.js',
    './webgl/texturecube.e6668dd3d38d28b3977d.js',
    './webgl/triangle.e6668dd3d38d28b3977d.js',
    './webgl/vendors.e6668dd3d38d28b3977d.js'

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
                // console.log("缓存中没有：" + request.url);
                return Promise.reject("no-match");
            }
            // console.log("缓存中已经存在：" + request.url);
            return matching;
        });
    });
}

function updateCache(request, response) {
    return caches.open(CACHE).then(function (cache) {
        return cache.put(request, response);
    });
}