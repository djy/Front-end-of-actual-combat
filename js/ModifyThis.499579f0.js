(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ModifyThis"],{"390a":function(t,e,n){"use strict";var i=n("ed62"),a=n.n(i);a.a},5118:function(t,e,n){(function(t){var i="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(a.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new o(a.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var i,a=1,o={},r=!1,s=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?v():p()?m():t.MessageChannel?h():s&&"onreadystatechange"in s.createElement("script")?y():b(),l.setImmediate=c,l.clearImmediate=u}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return o[a]=r,i(a),a++}function u(t){delete o[t]}function d(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(n,i);break}}function f(t){if(r)setTimeout(f,0,t);else{var e=o[t];if(e){r=!0;try{d(e)}finally{u(t),r=!1}}}}function v(){i=function(t){e.nextTick((function(){f(t)}))}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function m(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),i=function(n){t.postMessage(e+n,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},i=function(e){t.port2.postMessage(e)}}function y(){var t=s.documentElement;i=function(e){var n=s.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function b(){i=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"695d":function(t,e,n){"use strict";var i=n("b193"),a=n.n(i);a.a},7899:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"modifythis","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return n("v-card",{class:"elevation-"+(i?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"apply"}},[t._v("apply使用技巧")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("\n                  1. "),n("code",[t._v("apply")]),t._v("基本用法\n                  "),n("ul",[n("li",[t._v("\n                          参数一，表示执行函数中的this\n                      ")]),n("li",[t._v("\n                          参数二，表示参数数组，会自动拆分成单个参数\n                      ")]),n("li",[t._v("\n                          函数内部arguments可以获取整个参数列表\n                      ")])]),n("pre",[t._v(t._s(t.pres[0]))])]),n("p",{staticClass:".body-1"},[t._v("2. "),n("code",[t._v("apply")]),t._v("尽管是可以修改this的，但是它的使用技巧才是关键\n                  "),n("pre",[t._v(t._s(t.pres[1]))])])])],1)}}])})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return n("v-card",{class:"elevation-"+(i?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"bindcall"}},[t._v("利用bind和call修改this")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[n("code",[t._v("bind,call")]),t._v("是修改"),n("code",[t._v("this")]),t._v("主要工具，很多时候"),n("code",[t._v("call")]),t._v("比"),n("code",[t._v("bind")]),t._v("更好用\n                      "),n("ul",[n("li",[t._v("call和bind传递的参数都是一样的，第一个参数表示this，后面的所有参数是传入执行函数的参数")])]),n("pre",[t._v(t._s(t.pres[2]))])])])],1)}}])})],1)],1)],1)])],1)},a=[],o=n("fd3f"),r=(n("5118"),{components:{Blog:o["a"]},data:function(){return{time:"2018-12-10",title:"apply,call,bind修改this",items:[{title:"apply使用技巧",target:"#apply"},{divider:!0},{title:"利用bind和call修改this",target:"#bindcall"},{divider:!0}],pres:["\n    function fn(a, b) {\n        console.log(this, a, b, arguments); \n    }\n    fn.apply({a: 1}, [1, 2]); // {a: 1} 1 2 [1, 2]\n    ","\n    let float32 = Int8Array.of.apply(Float32Array.prototype.constructor, [5,6,1,9]); // 修改构造函数\n    Math.min.apply(null, float32); // 获取最小值 1\n    ","\n    const obj = {\n        a: 'aa',\n        fn: function(a, b) {\n            console.log(this.a, a, b);\n        }\n    }\n    const fn = obj.fn;\n    fn.bind(obj, 1, 2)(); // aa 1 2\n    fn.call(obj, 1, 2); // aa 1 2\n    "]}},mounted:function(){},methods:{}}),s=r,l=(n("fd8a"),n("2877")),c=n("6544"),u=n.n(c),d=n("b0af"),f=n("99d9"),v=n("12b2"),p=n("a523"),m=n("ce7e"),h=n("0e8f"),y=n("ce87"),b=n("a722"),g=Object(l["a"])(s,i,a,!1,null,null,null);e["default"]=g.exports;u()(g,{VCard:d["a"],VCardText:f["a"],VCardTitle:v["a"],VContainer:p["a"],VDivider:m["a"],VFlex:h["a"],VHover:y["a"],VLayout:b["a"]})},b193:function(t,e,n){},c8bc:function(t,e,n){},ce87:function(t,e,n){"use strict";var i=n("163b"),a=n("98a1"),o=n("58df"),r=n("d9bd");e["a"]=Object(o["a"])(i["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(r["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r["b"])("v-hover should only contain a single element",this),t)}})},ed62:function(t,e,n){},f28c:function(t,e){var n,i,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function l(t){if(i===clearTimeout)return clearTimeout(t);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{return i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"===typeof clearTimeout?clearTimeout:r}catch(t){i=r}})();var c,u=[],d=!1,f=-1;function v(){d&&c&&(d=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!d){var t=s(v);d=!0;var e=u.length;while(e){c=u,u=[];while(++f<e)c&&c[f].run();f=-1,e=u.length}c=null,d=!1,l(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new m(t,e)),1!==u.length||d||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},fd3f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{wrap:""}},[n("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"blogbg"},[n("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),n("div",{staticClass:"msg"},[n("p",[t._v("作者：叶家伟")]),n("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),n("v-card",{staticStyle:{"border-radius":"5px"}},[n("div",{staticClass:"submenuimg"},[n("p",{staticClass:"title"},[t._v("目录")])]),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),n("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,(function(e,i){return[e.divider?n("v-divider",{key:i}):n("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(n){return t.$vuetify.goTo(e.target,t.options)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]}))],2)],1)],1)},r=[],s={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},l=s,c=(n("390a"),n("2877")),u=n("6544"),d=n.n(u),f=n("8336"),v=n("b0af"),p=n("12b2"),m=n("ce7e"),h=n("132d"),y=n("8860"),b=n("ba95"),g=n("5d23"),_=n("e449"),T=Object(c["a"])(l,o,r,!1,null,null,null),w=T.exports;d()(T,{VBtn:f["a"],VCard:v["a"],VCardTitle:p["a"],VDivider:m["a"],VIcon:h["a"],VList:y["a"],VListTile:b["a"],VListTileContent:g["a"],VListTileTitle:g["b"],VMenu:_["a"]});var x={props:["items","time","title"],components:{BlogSubMenu:w}},C=x,I=(n("695d"),n("a523")),V=n("0e8f"),k=n("a722"),M=Object(c["a"])(C,i,a,!1,null,null,null);e["a"]=M.exports;d()(M,{VContainer:I["a"],VFlex:V["a"],VLayout:k["a"]})},fd8a:function(t,e,n){"use strict";var i=n("c8bc"),a=n.n(i);a.a}}]);
//# sourceMappingURL=ModifyThis.499579f0.js.map