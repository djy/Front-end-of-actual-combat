(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["webstorage"],{"0658":function(t,e,s){},"390a":function(t,e,s){"use strict";var a=s("5545"),i=s.n(a);i.a},5545:function(t,e,s){},"695d":function(t,e,s){"use strict";var a=s("8f13"),i=s.n(a);i.a},"8f13":function(t,e,s){},"9dc2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"webstorage","grid-list-md":""}},[s("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[s("div",{staticClass:"blogcontent"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{sm12:""}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return s("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"300"}},[s("v-card-title",[s("h3",{attrs:{id:"webStorage"}},[t._v("webStorage应用")])]),s("v-divider"),s("v-card-text",[s("p",{staticClass:".body-1"},[s("code",[t._v("sessionStorage")]),t._v("存储的是临时缓存，浏览器或者网页关闭后缓存就自动清空")]),s("p",{staticClass:".body-1"},[s("code",[t._v("localStorage")]),t._v("存储的是持久缓存，除非用户自己删除否则永远都在")]),s("pre",{staticClass:"code"},[t._v(t._s(t.pres[0]))])])],1)}}])})],1)],1)],1)])],1)},i=[],n=s("fd3f"),o={components:{Blog:n["a"]},data:function(){return{pres:["\n    webstorage使用非常简单，示例代码如下：\n\n    const ssg = window.sessionStorage;\n    const lsg = window.localStorage;\n\n    ssg.clear();                                        // 清空sessionStorage\n    lsg.clear();                                        // 清除localStorage\n\n    ssg.setItem('a', 'aa');                             // 添加缓存的键值对\n    lsg.setItem('b', 'bb');\n\n    console.log(ssg.getItem('a'), lsg.getItem('b'));    // 根据键名从缓存中取值\n    console.log(ssg.key(0), lsg.key(0));                // 根据索引获取键名\n\n    ssg.removeItem('a');                                // 根据键名删除键值对\n    lsg.removeItem('b');\n    console.log(ssg.length, lsg.length);                // 获取缓存键值对的个数\n    "],time:"2019-07-01",title:"webStorage应用",items:[{title:"webStorage",target:"#webStorage"},{divider:!0}]}},mounted:function(){},methods:{}},l=o,r=(s("f05e"),s("2877")),c=s("6544"),d=s.n(c),u=s("b0af"),v=s("99d9"),f=s("12b2"),g=s("a523"),m=s("ce7e"),b=s("0e8f"),h=s("ce87"),p=s("a722"),y=Object(r["a"])(l,a,i,!1,null,null,null);e["default"]=y.exports;d()(y,{VCard:u["a"],VCardText:v["a"],VCardTitle:f["a"],VContainer:g["a"],VDivider:m["a"],VFlex:b["a"],VHover:h["a"],VLayout:p["a"]})},ce87:function(t,e,s){"use strict";var a=s("163b"),i=s("98a1"),n=s("58df"),o=s("d9bd");e["a"]=Object(n["a"])(a["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["b"])("v-hover should only contain a single element",this),t)}})},f05e:function(t,e,s){"use strict";var a=s("0658"),i=s.n(a);i.a},fd3f:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{wrap:""}},[s("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),s("v-flex",{attrs:{"xs-12":""}},[s("div",{staticClass:"blogbg"},[s("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),s("div",{staticClass:"msg"},[s("p",[t._v("作者：叶家伟")]),s("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[s("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[s("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),s("v-card",{staticStyle:{"border-radius":"5px"}},[s("div",{staticClass:"submenuimg"},[s("p",{staticClass:"title"},[t._v("目录")])]),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),s("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,function(e,a){return[e.divider?s("v-divider",{key:a}):s("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(s){return t.$vuetify.goTo(e.target,t.options)}}},[s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1)],1)},o=[],l={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},r=l,c=(s("390a"),s("2877")),d=s("6544"),u=s.n(d),v=s("8336"),f=s("b0af"),g=s("12b2"),m=s("ce7e"),b=s("132d"),h=s("8860"),p=s("ba95"),y=s("5d23"),w=s("e449"),_=Object(c["a"])(r,n,o,!1,null,null,null),S=_.exports;u()(_,{VBtn:v["a"],VCard:f["a"],VCardTitle:g["a"],VDivider:m["a"],VIcon:b["a"],VList:h["a"],VListTile:p["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VMenu:w["a"]});var V={props:["items","time","title"],components:{BlogSubMenu:S}},C=V,x=(s("695d"),s("a523")),k=s("0e8f"),$=s("a722"),L=Object(c["a"])(C,a,i,!1,null,null,null);e["a"]=L.exports;u()(L,{VContainer:x["a"],VFlex:k["a"],VLayout:$["a"]})}}]);
//# sourceMappingURL=webstorage.36e32ac4.js.map