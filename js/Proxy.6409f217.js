(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Proxy"],{"0913":function(e,t,n){},"390a":function(e,t,n){"use strict";var o=n("ed62"),r=n.n(o);r.a},5118:function(e,t,n){(function(e){var o="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new a(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var o,r=1,a={},s=!1,i=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?d():v()?b():e.MessageChannel?y():i&&"onreadystatechange"in i.createElement("script")?m():h(),l.setImmediate=c,l.clearImmediate=u}function c(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return a[r]=s,o(r),r++}function u(e){delete a[e]}function f(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o);break}}function p(e){if(s)setTimeout(p,0,e);else{var t=a[e];if(t){s=!0;try{f(t)}finally{u(e),s=!1}}}}function d(){o=function(e){t.nextTick((function(){p(e)}))}}function v(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function b(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&p(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),o=function(n){e.postMessage(t+n,"*")}}function y(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;p(t)},o=function(t){e.port2.postMessage(t)}}function m(){var e=i.documentElement;o=function(t){var n=i.createElement("script");n.onreadystatechange=function(){p(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function h(){o=function(e){setTimeout(p,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},"695d":function(e,t,n){"use strict";var o=n("b193"),r=n.n(o);r.a},a09b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"proxy","grid-list-md":""}},[n("Blog",{attrs:{items:e.items,time:e.time,title:e.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Proxy"}},[e._v("Proxy")])]),n("v-divider"),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("1. "),n("code",[e._v("Proxy")]),e._v(" 可以帮助对象拦截一些操作，从而在操作完成前做一些自定义的设置")]),n("p",[e._v("2. "),n("code",[e._v("Proxy")]),e._v(" 的重心在于拦截操作从而做一些其他的处理，而不是修改要拦截方法本来的操作和返回值")]),n("p",[e._v("3. "),n("code",[e._v("Proxy")]),e._v(" 能够拦截的所有的handler如下")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-select",{staticStyle:{width:"200px"},attrs:{items:e.handlerArrs,label:"代理方法",color:"#7cb242"},model:{value:e.handlerValue,callback:function(t){e.handlerValue=t},expression:"handlerValue"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[e.handlerValue]))])])],1)],1)],1)],1)],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Reflect"}},[e._v("Reflect")])]),n("v-divider"),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[n("code",[e._v("Reflect")]),e._v(" 是 "),n("code",[e._v("Proxy")]),e._v("的静态版本，不需要使用new创建实例而已")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-select",{staticStyle:{width:"200px"},attrs:{items:e.handlerArrs,label:"代理方法",color:"#7cb242"},model:{value:e.handlerValue1,callback:function(t){e.handlerValue1=t},expression:"handlerValue1"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres1[e.handlerValue1]))])])],1)],1)],1)],1)],1)}}])})],1)],1)],1)])],1)},r=[],a=n("fd3f"),s=(n("5118"),{components:{Blog:a["a"]},data:function(){return{time:"2018-12-26",title:"Proxy代理操作",items:[{title:"Proxy",target:"#Proxy"},{divider:!0},{title:"Reflect",target:"#Reflect"}],handlerArrs:["apply","construct","defineProperty","deleteProperty","get","getOwnPropertyDescriptor","getPrototypeOf","has","isExtensible","ownKeys","preventExtensions","set","setPrototypeOf"],handlerValue:"apply",handlerValue1:"apply",pres:{apply:"\n    // 代理：函数调用\n    function fn(a, b) {\n        return a + b;\n    }\n\n    const px = new Proxy(fn, {\n        apply: function(fn, that, params) {\n            // fn表示原始的函数\n            // that表示传递的this对象\n            // params表示传递的参数列表\n            return fn(...params);\n        }\n    });\n\n    // 直接调用px(1,2)，px.apply，px.call都可以被拦截\n    px.call({}, 1, 2);\n",construct:"\n    // 代理：new操作符\n    const px = new Proxy(Date, {\n        construct: function(date, params, newdate) {\n            // date表示原始的构造函数\n            // params表示传递的参数列表\n            // newdate === px\n            return new date(...params);\n        }\n    });\n\n    console.log(new px('2019-05-20T24:00:00'));\n",defineProperty:"   \n    // 代理：对象的defineProperty，定义对象属性也会触发\n    let obj = {};\n    const px = new Proxy(obj, {\n        defineProperty(obj, key, descriptor) {\n            // obj表示原始的对象\n            // key表示设置的键名\n            // descriptor表示属性描述对象\n            Object.defineProperty(obj, key, descriptor);\n            return true; // 返回true表示属性定义成功\n        }\n    });\n    px.a = 'aa';\n",deleteProperty:"\n    // 代理：delete操作符\n    let obj = {\n        a: 'aa'\n    };\n    const px = new Proxy(obj, {\n        deleteProperty: function(obj, key) {\n            // obj表示原始的对象\n            // key表示设置的键名\n            delete obj[key];\n            return true; // true表示删除成功\n        }\n    });\n    delete px.a;\n",get:"\n    // 代理：get\n    let obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        get: function(obj, key, receiver) {\n            console.log(obj, key, receiver === px);\n            return obj.px;\n        }\n    });\n\n    console.log(px.a);\n",getOwnPropertyDescriptor:"\n    // 代理：getOwnPropertyDescriptor\n    let obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        getOwnPropertyDescriptor(obj, key) {\n            return { writable: true, configurable: true, enumerable: true, value: obj[key] };\n        }\n    });\n\n    console.log(Object.getOwnPropertyDescriptor(px, 'a'));\n",getPrototypeOf:"\n    // 代理：getPrototypeOf\n    const parent = {};\n    let obj = Object.create(parent);\n\n    const px = new Proxy(obj, {\n        getPrototypeOf(obj) {\n            console.log(obj);\n            return parent;\n        }\n    });\n\n    parent === Object.getPrototypeOf(px);\n",has:"\n    // 代理：in 判断属性是否在对象中\n    const obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        has (obj, key) {\n            console.log(obj, key);\n            return key in obj;\n        }\n    });\n\n    console.log('a' in px);\n",isExtensible:"\n    // 代理：isExtensible\n    const obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        isExtensible (obj) {\n            console.log(obj);\n            return Object.isExtensible(obj);\n        }\n    });\n\n    console.log(Object.isExtensible(px));\n",ownKeys:"\n    // 代理：获取对象键名\n    const obj = {\n        [Symbol('a')]: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        ownKeys (obj) {\n            console.log(obj);\n            return Reflect.ownKeys(obj);\n        }\n    });\n\n    console.log(Reflect.ownKeys(px));\n",preventExtensions:"\n    // 代理：preventExtensions\n    const obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        preventExtensions (obj) {\n            console.log(obj);\n            Object.preventExtensions(obj);\n            return true;\n        }\n    });\n\n    console.log(Object.preventExtensions(px));\n",set:"\n    // 代理：set 设置对象属性值\n    const obj = {\n        a: 'aa'\n    };\n\n    const px = new Proxy(obj, {\n        set (obj, key, value, receiver) {\n            console.log(obj, key, value, receiver);\n            obj[key]=value;\n            return true;\n        }\n    });\n\n    px.a = 'aaa';\n",setPrototypeOf:"\n    // 代理：setPrototypeOf\n    const obj = {};\n\n    const px = new Proxy(obj, {\n        setPrototypeOf (obj, prototype) {\n            console.log(obj, prototype);\n            Object.setPrototypeOf(obj, prototype);\n            return true;\n        }\n    });\n\n    Object.setPrototypeOf(px, {a: 'aa'});\n    console.log(obj.a);\n"},pres1:{apply:"\n    // 代理：函数调用\n    function fn(a, b) {\n        return a + b;\n    }\n    Reflect.apply(fn, {}, [1, 2]);\n",construct:"\n    // 代理：new操作符\n    Reflect.construct(Date, ['2019-05-20T24:00:00']);\n",defineProperty:"   \n    // 代理：对象的defineProperty，定义对象属性也会触发\n    let obj = {};\n    Reflect.defineProperty(obj, 'a', {value: 42});\n",deleteProperty:"\n    // 代理：delete操作符\n    let obj = {\n        a: 'aa'\n    };\n\n    Reflect.deleteProperty(obj, 'a');\n",get:"\n    // 代理：get\n    let obj = {\n        a: 'aa'\n    };\n\n    Reflect.get(obj, 'a');\n",getOwnPropertyDescriptor:"\n    // 代理：getOwnPropertyDescriptor\n    let obj = {\n        a: 'aa'\n    };\n\n    Reflect.getOwnPropertyDescriptor(obj, 'a');\n",getPrototypeOf:"\n    // 代理：getPrototypeOf\n    const parent = {};\n    let obj = Object.create(parent);\n    parent === Reflect.getPrototypeOf(obj);\n",has:"\n    // 代理：in 判断属性是否在对象中\n    const obj = {\n        a: 'aa'\n    };\n\n    Reflect.has(obj, 'a');\n",isExtensible:"\n    // 代理：isExtensible\n    const obj = {\n        a: 'aa'\n    };\n\n    Reflect.isExtensible(obj);\n",ownKeys:"\n    // 代理：获取对象键名\n    const obj = {\n        [Symbol('a')]: 'aa'\n    };\n\n    Reflect.ownKeys(obj);\n",preventExtensions:"\n    // 代理：preventExtensions\n    const obj = {\n        a: 'aa'\n    };\n\n    Reflect.preventExtensions(obj);\n",set:"\n    // 代理：set 设置对象属性值\n    const obj = {\n        a: 'aa'\n    };\n\n    Reflect.set(obj, 'a', 'aaa');\n",setPrototypeOf:"\n    // 代理：setPrototypeOf\n    const obj = {};\n    Reflect.setPrototypeOf(obj, {a: 'aa'});\n    console.log(obj.a);\n"}}},mounted:function(){},methods:{}}),i=s,l=(n("e879"),n("2877")),c=n("6544"),u=n.n(c),f=n("b0af"),p=n("99d9"),d=n("12b2"),v=n("a523"),b=n("ce7e"),y=n("0e8f"),m=n("ce87"),h=n("a722"),x=n("b56d"),g=Object(l["a"])(i,o,r,!1,null,null,null);t["default"]=g.exports;u()(g,{VCard:f["a"],VCardText:p["a"],VCardTitle:d["a"],VContainer:v["a"],VDivider:b["a"],VFlex:y["a"],VHover:m["a"],VLayout:h["a"],VSelect:x["a"]})},b193:function(e,t,n){},ce87:function(e,t,n){"use strict";var o=n("163b"),r=n("98a1"),a=n("58df"),s=n("d9bd");t["a"]=Object(a["a"])(o["a"],r["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(s["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var e=void 0;return this.$scopedSlots.default?e=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(e=this.$slots.default[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(s["b"])("v-hover should only contain a single element",this),e)}})},e879:function(e,t,n){"use strict";var o=n("0913"),r=n.n(o);r.a},ed62:function(e,t,n){},f28c:function(e,t){var n,o,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function l(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{o="function"===typeof clearTimeout?clearTimeout:s}catch(e){o=s}})();var c,u=[],f=!1,p=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):p=-1,u.length&&v())}function v(){if(!f){var e=i(d);f=!0;var t=u.length;while(t){c=u,u=[];while(++p<t)c&&c[p].run();p=-1,t=u.length}c=null,f=!1,l(e)}}function b(e,t){this.fun=e,this.array=t}function y(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new b(e,t)),1!==u.length||f||i(v)},b.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=y,r.addListener=y,r.once=y,r.off=y,r.removeListener=y,r.removeAllListeners=y,r.emit=y,r.prependListener=y,r.prependOnceListener=y,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},fd3f:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{wrap:""}},[n("BlogSubMenu",{attrs:{items:e.items,title:e.title}}),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"blogbg"},[n("p",{staticClass:"someword"},[e._v("思绪随时间流逝，逝去的日子不会回来")]),n("div",{staticClass:"msg"},[n("p",[e._v("作者：叶家伟")]),n("p",[e._v("时间："+e._s(e.time))])])]),e._t("default")],2)],1)],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",{attrs:{dark:"",color:"white"}},[e._v("list")])],1),n("v-card",{staticStyle:{"border-radius":"5px"}},[n("div",{staticClass:"submenuimg"},[n("p",{staticClass:"title"},[e._v("目录")])]),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.title))])])]),n("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[e._l(e.items,(function(t,o){return[t.divider?n("v-divider",{key:o}):n("v-list-tile",{key:t.title+"submenu",attrs:{avatar:""},on:{click:function(n){return e.$vuetify.goTo(t.target,e.options)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:e._s(t.title)}})],1)],1)]}))],2)],1)],1)},s=[],i={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},l=i,c=(n("390a"),n("2877")),u=n("6544"),f=n.n(u),p=n("8336"),d=n("b0af"),v=n("12b2"),b=n("ce7e"),y=n("132d"),m=n("8860"),h=n("ba95"),x=n("5d23"),g=n("e449"),j=Object(c["a"])(l,a,s,!1,null,null,null),w=j.exports;f()(j,{VBtn:p["a"],VCard:d["a"],VCardTitle:v["a"],VDivider:b["a"],VIcon:y["a"],VList:m["a"],VListTile:h["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VMenu:g["a"]});var P={props:["items","time","title"],components:{BlogSubMenu:w}},_=P,O=(n("695d"),n("a523")),T=n("0e8f"),k=n("a722"),E=Object(c["a"])(_,o,r,!1,null,null,null);t["a"]=E.exports;f()(E,{VContainer:O["a"],VFlex:T["a"],VLayout:k["a"]})}}]);
//# sourceMappingURL=Proxy.6409f217.js.map