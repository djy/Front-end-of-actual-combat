(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Symbol"],{"0bae":function(t,e,n){},"390a":function(t,e,n){"use strict";var o=n("5545"),a=n.n(o);a.a},"3c6a":function(t,e,n){"use strict";var o=n("0bae"),a=n.n(o);a.a},5118:function(t,e,n){(function(t){var o="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(a.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new i(a.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},5545:function(t,e,n){},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var o,a=1,i={},r=!1,s=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?v():m()?p():t.MessageChannel?y():s&&"onreadystatechange"in s.createElement("script")?h():b(),l.setImmediate=c,l.clearImmediate=u}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return i[a]=r,o(a),a++}function u(t){delete i[t]}function d(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o);break}}function f(t){if(r)setTimeout(f,0,t);else{var e=i[t];if(e){r=!0;try{d(e)}finally{u(t),r=!1}}}}function v(){o=function(t){e.nextTick(function(){f(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function p(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),o=function(n){t.postMessage(e+n,"*")}}function y(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},o=function(e){t.port2.postMessage(e)}}function h(){var t=s.documentElement;o=function(e){var n=s.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function b(){o=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"695d":function(t,e,n){"use strict";var o=n("8f13"),a=n.n(o);a.a},"8f13":function(t,e,n){},ce87:function(t,e,n){"use strict";var o=n("163b"),a=n("98a1"),i=n("58df"),r=n("d9bd");e["a"]=Object(i["a"])(o["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(r["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r["b"])("v-hover should only contain a single element",this),t)}})},f28c:function(t,e){var n,o,a=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function l(t){if(o===clearTimeout)return clearTimeout(t);if((o===r||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{return o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"===typeof clearTimeout?clearTimeout:r}catch(t){o=r}})();var c,u=[],d=!1,f=-1;function v(){d&&c&&(d=!1,c.length?u=c.concat(u):f=-1,u.length&&m())}function m(){if(!d){var t=s(v);d=!0;var e=u.length;while(e){c=u,u=[];while(++f<e)c&&c[f].run();f=-1,e=u.length}c=null,d=!1,l(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||d||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},fd3f:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{wrap:""}},[n("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"blogbg"},[n("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),n("div",{staticClass:"msg"},[n("p",[t._v("作者：叶家伟")]),n("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),n("v-card",{staticStyle:{"border-radius":"5px"}},[n("div",{staticClass:"submenuimg"},[n("p",{staticClass:"title"},[t._v("目录")])]),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),n("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,function(e,o){return[e.divider?n("v-divider",{key:o}):n("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(n){return t.$vuetify.goTo(e.target,t.options)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1)],1)},r=[],s={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},l=s,c=(n("390a"),n("2877")),u=n("6544"),d=n.n(u),f=n("8336"),v=n("b0af"),m=n("12b2"),p=n("ce7e"),y=n("132d"),h=n("8860"),b=n("ba95"),_=n("5d23"),g=n("e449"),S=Object(c["a"])(l,i,r,!1,null,null,null),x=S.exports;d()(S,{VBtn:f["a"],VCard:v["a"],VCardTitle:m["a"],VDivider:p["a"],VIcon:y["a"],VList:h["a"],VListTile:b["a"],VListTileContent:_["a"],VListTileTitle:_["b"],VMenu:g["a"]});var T={props:["items","time","title"],components:{BlogSubMenu:x}},C=T,w=(n("695d"),n("a523")),I=n("0e8f"),k=n("a722"),j=Object(c["a"])(C,o,a,!1,null,null,null);e["a"]=j.exports;d()(j,{VContainer:w["a"],VFlex:I["a"],VLayout:k["a"]})},fecb:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"symbol","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"Symbol"}},[t._v("Symbol")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("1. "),n("code",[t._v("Symbol")]),t._v("返回唯一值")]),n("p",{staticClass:".body-1"},[t._v("2. "),n("code",[t._v("Symbol()")]),t._v("产生一个局部的symbol，只能在当前代码上下文中使用")]),n("p",{staticClass:".body-1"},[t._v("3. "),n("code",[t._v("Symbol.for()")]),t._v("能够产生全局symbol，可以跨文件使用。"),n("code",[t._v("Symbol.for")]),t._v("会首先在全局的Symbol寄存器中找是否存在指定的Symbol，如果没有就创建一个全局Symbol")]),n("p",{staticClass:".body-1"},[t._v("4. "),n("code",[t._v("Symbol.keyFor")]),t._v("根据传入的Symbol到全局寄存器中查找是否有这个Symbol如果有返回Symbol的key，如果没有返回undefined")]),n("p",{staticClass:".body-1"},[t._v("5. "),n("code",[t._v("for...in")]),t._v("无法遍历Symbol，"),n("code",[t._v("Object.getOwnPropertyNames")]),t._v("获取不到Symbol，"),n("code",[t._v("JSON")]),t._v("对Symbol无视")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[6]))])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"asyncIterator"}},[t._v("异步迭代（ES9）")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("1. 利用Generator文章中的例子，结合"),n("code",[t._v("Symbol.asyncIterator")]),t._v("实现一个异步迭代")]),n("p",{staticClass:".body-1"},[t._v("2. demo要实现的功能：传递任意多个数组，将每一个数组的最大值和所有数组的最大值拼接成一个数组输出")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[0]))])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"hasInstance"}},[t._v("自定义instanceof运算符（ES6）")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[n("code",[t._v("Symbol.hasInstance")]),t._v("可以自定义instanceof操作符")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[1]))])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"isConcatSpreadable"}},[t._v("定义concat拼接方式（ES6）")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("1. "),n("code",[t._v("concat")]),t._v("方法调用时，会将数组中的元素取出拼成一个数组，通过"),n("code",[t._v("Symbol.isConcatSpreadable")]),t._v("可以设置concat是否取出元素")]),n("p",{staticClass:".body-1"},[t._v("2. 类数组调用concat默认不会取出元素进行合并")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[2]))])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"iterator"}},[t._v("自定义迭代器（ES6）")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("1. 设置"),n("code",[t._v("Symbol.iterator")]),t._v("可以实现自定义迭代器，要使用"),n("code",[t._v("for...of")]),t._v("遍历")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[3]))]),n("p",{staticClass:".body-1"},[t._v("2. 调用"),n("code",[t._v("Symbol.iterator")]),t._v("可以获取可迭代对象，如下遍历字符串")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[4]))])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"toPrimitive"}},[t._v("自定义引用类型转化成值类型（ES6）")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("设置"),n("code",[t._v("Symbol.toPrimitive")]),t._v("可以实现自定义值类型转化")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[5]))])])],1)}}])})],1)],1)],1)])],1)},a=[],i=n("fd3f"),r=(n("5118"),{components:{Blog:i["a"]},data:function(){return{time:"2019-1-5",title:"Symbol",items:[{title:"Symbol",target:"#Symbol"},{divider:!0},{title:"异步迭代",target:"#asyncIterator"},{divider:!0},{title:"自定义instanceof运算符",target:"#hasInstance"},{divider:!0},{title:"定义concat拼接方式",target:"#isConcatSpreadable"},{divider:!0},{title:"自定义迭代器",target:"#iterator"},{divider:!0},{title:"自定义引用类型转化成值类型",target:"#toPrimitive"},{divider:!0}],pres:["\n    function findMax() {\n        const params = Array.from(arguments); // 获取所有数组\n        const length = params.length;\n        let tmpMaxs = [];\n        let i = 0;\n\n        const asyncIter = {};\n        asyncIter[Symbol.asyncIterator] = async function *() {\n            yield '初始化'; // yield会有一个初始化的过程\n            while(i < length) {\n                const tmp = Math.max.apply(null, params[i]);\n                tmpMaxs.push(tmp);\n                yield tmp; // 获取每一个数组的最大值\n                i++;\n            }\n            const max = Math.max.apply(null, tmpMaxs); // 获取所有数组的最大值\n            tmpMaxs.push(max);\n            yield max;\n        };\n\n        (async () => {\n            for await (const item of asyncIter) {\n                console.log(item);\n            }\n        })();\n        return tmpMaxs;\n    }\n    let max = findMax([10,59,1,2,3], [5,8,9,30,21], [1,20,3,0,3]);\n    console.log(max); // 输出 [59, 30, 20, 59]\n",'\n    const obj = {};\n    obj[Symbol.hasInstance] = function(instance) {\n        return Object.prototype.toString.call(instance) === "[object Object]";\n    }\n\n    console.log({} instanceof obj); // true\n    console.log([] instanceof obj); // false\n    ',"\n    function fn() {\n        let arr = ['concat'].concat(arguments);\n        return arr;\n    }\n    fn(1,2,3); // [\"concat\", Arguments(3)]\n\n    function fn() {\n        arguments[Symbol.isConcatSpreadable] = true;\n        let arr = ['concat'].concat(arguments);\n        return arr;\n    }\n    fn(1,2,3); // [\"concat\", 1, 2, 3]\n",'\n    let obj = {};\n    obj[Symbol.iterator] = function* (){\n        console.log("执行了");\n        yield 1;\n        yield 2;\n        yield 3;\n    }\n    for(let item of obj) {\n        console.log(item)\n    }\n\n    输出\n    1\n    2\n    3\n','\n    const str = "JAVASCRIPT太牛逼了";\n    const iter = str[Symbol.iterator]();\n    let tmp = iter.next();\n    while(!tmp.done){\n        console.log(tmp);\n        tmp = iter.next();\n    }\n',"\n    const obj = {\n        [Symbol.toPrimitive](type) {\n            if (type == 'number') {\n                return 97;\n            }\n            if (type == 'string') {\n                return 'a';\n            }\n            return 'A';\n        }\n    };\n\n    console.log(`${obj}`) // a type为string\n    console.log(+obj); // 97 type为number\n    console.log(''+obj); // A type为default\n","\n    const sb = Symbol('a');\n    console.log(sb.description); // a\n    Symbol('a') === Symbol('a'); // false\n    Symbol.for('a') === Symbol.for('a'); // true\n    Symbol.keyFor(Symbol.for('a')); // \"a\"\n    Symbol.keyFor(Symbol('a')); // undefined\n"]}},mounted:function(){},methods:{test:function(){}}}),s=r,l=(n("3c6a"),n("2877")),c=n("6544"),u=n.n(c),d=n("b0af"),f=n("99d9"),v=n("12b2"),m=n("a523"),p=n("ce7e"),y=n("0e8f"),h=n("ce87"),b=n("a722"),_=Object(l["a"])(s,o,a,!1,null,null,null);e["default"]=_.exports;u()(_,{VCard:d["a"],VCardText:f["a"],VCardTitle:v["a"],VContainer:m["a"],VDivider:p["a"],VFlex:y["a"],VHover:h["a"],VLayout:b["a"]})}}]);
//# sourceMappingURL=Symbol.57854750.js.map