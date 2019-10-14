(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cors"],{"390a":function(t,e,s){"use strict";var n=s("ed62"),o=s.n(n);o.a},"40bc":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"Cors","grid-list-md":""}},[s("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[s("div",{staticClass:"blogcontent"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2)},[s("v-card-text",[s("p",{staticClass:"body-2"},[t._v("跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了")]),s("p",{staticClass:"body-2"},[t._v("服务端和服务端发送ajax请求不存在跨域的问题")])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"jsonp"}},[t._v("jsonp")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：jsonp的原理就是通过script标签发送get请求，script标签会将返回的数据当做js代码执行")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[0]))])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"cors"}},[t._v("cors")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：cors只需要后端代码做简单配置即可")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[1]))])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"proxy"}},[t._v("中介服务端程序代理")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：因为服务端程序和服务端程序之间发送ajax不存在跨域问题，所以可以使用一个中介服务端程序，去访问正式的服务端程序")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[2]))])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"websocket"}},[t._v("websocket")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：websocket没有跨域的限制")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[3]))])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"postMessage"}},[t._v("postMessage")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：用于页面和嵌入此页面中的iframe进行跨域通信，如果iframe中的页面和主页面存在跨域则要使用postMessage进行双向通信")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[4]))])])],1)}}])})],1),s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return s("v-card",{class:"elevation-"+(n?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"nginx"}},[t._v("nginx代理")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:"subtitle-1"},[s("span",{staticClass:"font-weight-bold"},[t._v("说明")]),t._v("：简单配置nginx即可")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[5]))])])],1)}}])})],1)],1)],1)])],1)},o=[],a=s("fd3f"),r={components:{Blog:a["a"]},data:function(){return{pres:["\n        客户端的域名 http://localhost:5500\n        服务端的域名 http://localhost:3000\n\n        客户端的代码 \n            function fn(data) {\n                console.log(data);\n            }\n            <script src=\"http://localhost:3000/jsonp?callback=fn\"><\/script>\n\n        服务端的代码\n            app.get(\"/jsonp\", function(req, res, next){\n                const sendData = '我是服务器传送的数据';\n                res.send(`${req.query.callback}('${sendData}')`);\n            }) \n    ",'\n        客户端的域名 http://localhost:5500\n        服务端的域名 http://localhost:3000\n\n        客户端代码\n            fetch(\'http://localhost:3000/jsonp\').then(res => {\n                if(res.ok) {\n                    return res.text();\n                }\n            }).then(res => {\n                console.log(res);\n            })\n\n        服务端代码\n            app.all("*",function(req,res,next){\n                // 所有路由\n                res.header("Access-Control-Allow-Origin", "http://localhost:5500");\n                res.header("Access-Control-Allow-Headers", "content-type");\n                res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");\n                if (req.method.toLowerCase() == \'options\') res.send(200);  // 请求预检\n                else next();\n            });\n\n            app.get("/jsonp", function(req, res, next){\n                const sendData = \'我是服务器传送的数据\';\n                res.send(sendData);\n            })\n    ','\n        客户端的域名（任意）\n        中介服务端程序的域名 http://localhost:3000\n        正式服务端程序的域名 http://localhost:3001\n\n        客户端代码\n            fetch(\'/intermediary\').then(res => {\n                if(res.ok) {\n                    return res.text();\n                }\n            }).then(res => {\n                console.log(res);\n            })\n        中介服务端代码\n            const express = require(\'express\');\n            const PORT = 3000;\n            const app = express();\n            const request = require(\'request\');\n            app.use(express.static(\'public\'));\n            app.all("*",function(req,res,next){\n                // 所有路由\n                res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");\n                res.header("Access-Control-Allow-Headers", "content-type");\n                res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");\n                if (req.method.toLowerCase() == \'options\') res.send(200);  \n                else next();\n            });\n            app.get("/intermediary", function(req, res, next){\n                request(\'http://localhost:3001/test\', (err, realRes, body) => {\n                    if (!err && realRes.statusCode == 200) {\n                        res.send(body); \n                    }\n                })\n            });\n            app.listen(PORT, function() {\n                console.log(\'Server listening on http://localhost:\' + PORT);\n            });\n        正式服务端代码\n            app.get("/test", function(req, res, next){\n                res.end(\'我是正式服务器的数据\');\n            })\n    ',"\n        客户端的域名 http://localhost:3000\n        服务端的域名 http://localhost:3001\n\n        客户端代码\n            <script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js\"><\/script>\n            var socket = io(\"http://localhost:3001\");\n            socket.on(\"receivefromserver\", function(msg) {\n                console.log(msg);\n            });\n            socket.emit('receivefromclient', '收到消息!');\n\n        服务端代码\n            const express = require('express');\n            let PORT = 3001;\n            const app = express();\n            const io = require('socket.io')(app.listen(PORT, function() {\n                console.log('Server listening on http://localhost:' + PORT);\n            }));\n            io.on('connection', (socket) => {\n                console.log(\"Client connected!\");\n                socket.on('receivefromclient', (msg) => {\n                    console.log(msg);\n                })\n                socket.emit('receivefromserver', '服务端的消息');\n            });\n    ","\n        主页面的域名 http://localhost:3000\n        iframe页面的域名 http://localhost:3001\n\n        主页面的代码\n            html\n                <iframe src=\"http://localhost:3001/index.html\" frameborder=\"0\"></iframe>\n            js\n                const ifr = document.querySelector('iframe');\n                ifr.contentWindow.postMessage('我是主页面传递的数据', 'http://localhost:3001');\n\n                window.addEventListener('message', (e) => {\n                    console.log('主页面', e.data, e.origin);\n                })\n\n        iframe页面的代码\n            js\n                window.addEventListener('message', (e) => {\n                    console.log('iframe', e.data, e.origin);\n                    e.source.postMessage('iframe中的页面接受到数据了', e.origin);\n                })\n    ","\n        页面的代码全部扔到nginx服务器中，地址暂为 http://localhost:3000\n        服务端所在的域名 http://localhost:3001\n\n        配置nginx\n            server {\n                listen 3000;\n                server_name localhost;\n                location ^~ /api/ {\n                    proxy_pass http://localhost:3001/;\n                }\n                location / {\n                    root html/app;\n                    index index.html index.htm;\n                }\n            }\n    "],time:"2019-10-14",title:"跨域的几种常用方式",items:[{title:"jsonp",target:"#jsonp"},{divider:!0},{title:"cors",target:"#cors"},{divider:!0},{title:"proxy",target:"#proxy"},{divider:!0},{title:"websocket",target:"#websocket"},{divider:!0},{title:"postMessage",target:"#postMessage"},{divider:!0},{title:"nginx",target:"#nginx"},{divider:!0}]}},mounted:function(){},methods:{}},i=r,l=(s("ef7b"),s("2877")),c=s("6544"),d=s.n(c),v=s("b0af"),p=s("99d9"),u=s("12b2"),h=s("a523"),f=s("ce7e"),m=s("0e8f"),g=s("ce87"),b=s("a722"),x=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=x.exports;d()(x,{VCard:v["a"],VCardText:p["a"],VCardTitle:u["a"],VContainer:h["a"],VDivider:f["a"],VFlex:m["a"],VHover:g["a"],VLayout:b["a"]})},"695d":function(t,e,s){"use strict";var n=s("b193"),o=s.n(n);o.a},b193:function(t,e,s){},c97e:function(t,e,s){},ce87:function(t,e,s){"use strict";var n=s("163b"),o=s("98a1"),a=s("58df"),r=s("d9bd");e["a"]=Object(a["a"])(n["a"],o["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(r["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r["b"])("v-hover should only contain a single element",this),t)}})},ed62:function(t,e,s){},ef7b:function(t,e,s){"use strict";var n=s("c97e"),o=s.n(n);o.a},fd3f:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{wrap:""}},[s("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),s("v-flex",{attrs:{"xs-12":""}},[s("div",{staticClass:"blogbg"},[s("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),s("div",{staticClass:"msg"},[s("p",[t._v("作者：叶家伟")]),s("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[s("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[s("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),s("v-card",{staticStyle:{"border-radius":"5px"}},[s("div",{staticClass:"submenuimg"},[s("p",{staticClass:"title"},[t._v("目录")])]),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),s("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,(function(e,n){return[e.divider?s("v-divider",{key:n}):s("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(s){return t.$vuetify.goTo(e.target,t.options)}}},[s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]}))],2)],1)],1)},r=[],i={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},l=i,c=(s("390a"),s("2877")),d=s("6544"),v=s.n(d),p=s("8336"),u=s("b0af"),h=s("12b2"),f=s("ce7e"),m=s("132d"),g=s("8860"),b=s("ba95"),x=s("5d23"),_=s("e449"),C=Object(c["a"])(l,a,r,!1,null,null,null),y=C.exports;v()(C,{VBtn:p["a"],VCard:u["a"],VCardTitle:h["a"],VDivider:f["a"],VIcon:m["a"],VList:g["a"],VListTile:b["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VMenu:_["a"]});var w={props:["items","time","title"],components:{BlogSubMenu:y}},k=w,S=(s("695d"),s("a523")),T=s("0e8f"),j=s("a722"),O=Object(c["a"])(k,n,o,!1,null,null,null);e["a"]=O.exports;v()(O,{VContainer:S["a"],VFlex:T["a"],VLayout:j["a"]})}}]);
//# sourceMappingURL=cors.7e02f230.js.map