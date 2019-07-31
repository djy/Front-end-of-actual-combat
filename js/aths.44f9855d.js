(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aths"],{"390a":function(t,e,n){"use strict";var s=n("5545"),i=n.n(s);i.a},5545:function(t,e,n){},"695d":function(t,e,n){"use strict";var s=n("8f13"),i=n.n(s);i.a},"70f9":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"aths","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return n("v-card",{class:"elevation-"+(s?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"ATHS"}},[t._v("添加到主页")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[n("code",[t._v("webmanifest")]),t._v("是浏览器中实现添加到主页的一个配置文件，也就是提示用户将浏览器的图标添加到手机主页")]),n("p",{staticClass:".body-1"},[n("code",[t._v("webmanifest")]),t._v("很简单，只需要在html首页引入即可 "),n("code",[t._v('<link rel="manifest" href="./manifest.webmanifest">')])]),n("p",{staticClass:".body-1"},[t._v("使用"),n("code",[t._v("webmanifest")]),t._v("再结合，serviceworker和indexdb等缓存技术，可以实现类似原生的api体验")]),n("p",{staticClass:".body-1"},[n("code",[t._v("webmanifest")]),t._v("配置如下，配置好后用手机打开页面，支持webmanifest的浏览器会自动提示添加网站到主屏幕")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[0]))])])],1)}}])})],1)],1)],1)])],1)},i=[],a=n("fd3f"),o={components:{Blog:a["a"]},data:function(){return{pres:['\n        {\n            "name": "AppName",\n            "short_name": "app",\n            "description": "测试manifest",\n            "icons": [  // icons配置的是桌面图标\n                {\n                    "src": "./icons/32x32.png",\n                    "sizes": "32x32",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/64x64.png",\n                    "sizes": "64x64",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/96x96.png",\n                    "sizes": "96x96",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/128x128.png",\n                    "sizes": "128x128",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/168x168.png",\n                    "sizes": "168x168",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/192x192.png",\n                    "sizes": "192x192",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/256x256.png",\n                    "sizes": "256x256",\n                    "type": "image/png"\n                },\n                {\n                    "src": "./icons/512x512.png",\n                    "sizes": "512x512",\n                    "type": "image/png"\n                }\n            ],\n            "start_url": "/test/webWorker/index.html",      // 当用户点击图标要导航的地址\n            "display": "fullscreen",                        // 全屏展示\n            "theme_color": "#3fada8", \n            "background_color": "#3fada8" \n        }\n    '],time:"2019-07-08",title:"添加到主页",items:[{title:"添加到主页",target:"#ATHS"},{divider:!0}]}},mounted:function(){},methods:{}},r=o,l=(n("bf3d"),n("2877")),c=n("6544"),d=n.n(c),u=n("b0af"),v=n("99d9"),f=n("12b2"),p=n("a523"),m=n("ce7e"),g=n("0e8f"),h=n("ce87"),b=n("a722"),y=Object(l["a"])(r,s,i,!1,null,null,null);e["default"]=y.exports;d()(y,{VCard:u["a"],VCardText:v["a"],VCardTitle:f["a"],VContainer:p["a"],VDivider:m["a"],VFlex:g["a"],VHover:h["a"],VLayout:b["a"]})},"8f13":function(t,e,n){},bf3d:function(t,e,n){"use strict";var s=n("ceb8"),i=n.n(s);i.a},ce87:function(t,e,n){"use strict";var s=n("163b"),i=n("98a1"),a=n("58df"),o=n("d9bd");e["a"]=Object(a["a"])(s["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["b"])("v-hover should only contain a single element",this),t)}})},ceb8:function(t,e,n){},fd3f:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{wrap:""}},[n("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"blogbg"},[n("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),n("div",{staticClass:"msg"},[n("p",[t._v("作者：叶家伟")]),n("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),n("v-card",{staticStyle:{"border-radius":"5px"}},[n("div",{staticClass:"submenuimg"},[n("p",{staticClass:"title"},[t._v("目录")])]),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),n("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,function(e,s){return[e.divider?n("v-divider",{key:s}):n("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(n){return t.$vuetify.goTo(e.target,t.options)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1)],1)},o=[],r={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},l=r,c=(n("390a"),n("2877")),d=n("6544"),u=n.n(d),v=n("8336"),f=n("b0af"),p=n("12b2"),m=n("ce7e"),g=n("132d"),h=n("8860"),b=n("ba95"),y=n("5d23"),x=n("e449"),_=Object(c["a"])(l,a,o,!1,null,null,null),w=_.exports;u()(_,{VBtn:v["a"],VCard:f["a"],VCardTitle:p["a"],VDivider:m["a"],VIcon:g["a"],VList:h["a"],VListTile:b["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VMenu:x["a"]});var C={props:["items","time","title"],components:{BlogSubMenu:w}},V=C,S=(n("695d"),n("a523")),k=n("0e8f"),T=n("a722"),$=Object(c["a"])(V,s,i,!1,null,null,null);e["a"]=$.exports;u()($,{VContainer:S["a"],VFlex:k["a"],VLayout:T["a"]})}}]);
//# sourceMappingURL=aths.44f9855d.js.map