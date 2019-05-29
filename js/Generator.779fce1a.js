(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Generator"],{4342:function(e,t,n){"use strict";var r=n("6155"),a=n.n(r);a.a},5118:function(e,t,n){(function(e){var r="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var r,a=1,i={},o=!1,s=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?v():m()?p():e.MessageChannel?h():s&&"onreadystatechange"in s.createElement("script")?y():_(),c.setImmediate=l,c.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return i[a]=o,r(a),a++}function u(e){delete i[e]}function d(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r);break}}function f(e){if(o)setTimeout(f,0,e);else{var t=i[e];if(t){o=!0;try{d(t)}finally{u(e),o=!1}}}}function v(){r=function(e){t.nextTick(function(){f(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function p(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},r=function(t){e.port2.postMessage(t)}}function y(){var e=s.documentElement;r=function(t){var n=s.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function _(){r=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},6155:function(e,t,n){},"94c8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"generator","grid-list-md":""}},[n("Blog",{attrs:{items:e.items,time:e.time,title:e.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return n("v-card",{class:"elevation-"+(r?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Generator"}},[e._v("Generator原理")])]),n("v-divider"),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","pr-1":""}},[n("div",{staticClass:"part"},[n("p",[e._v("理解如下几点，生成器函数就ok了")]),n("p",[e._v("1. "),n("code",[e._v("Generator")]),e._v(" 本质上是生成一个可遍历函数")]),n("p",[e._v("2. "),n("code",[e._v("yield")]),e._v(" 语句的返回值是"),n("code",[e._v("next")]),e._v("函数传递的参数")]),n("p",[e._v("3. "),n("code",[e._v("yield")]),e._v(" 后面的跟着的值是"),n("code",[e._v("next")]),e._v("函数的返回值")]),n("p",[e._v("4. "),n("code",[e._v("yield")]),e._v(" 语句在初次执行时会有一个初始化的过程，此过程不接受"),n("code",[e._v("next")]),e._v("传递的值")]),n("p",[e._v("5. "),n("code",[e._v("next")]),e._v(" 函数传递的值，能够在上一次"),n("code",[e._v("yield")]),e._v("语句的返回值中取到")]),n("p",[e._v("6. "),n("code",[e._v("f.return(f.next().value);")]),e._v(" 这种写法能够只执行"),n("code",[e._v("Generator")]),e._v("的部分片段")])])]),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"js",attrs:{ripple:""}},[e._v("JAVASCRIPT")]),n("v-tab-item",{key:"js"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[0]))])])],1)],1)],1)],1)],1)],1)],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return n("v-card",{class:"elevation-"+(r?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"demo"}},[e._v("Generator实战")])]),n("v-divider"),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","pr-1":""}},[n("div",{staticClass:"part"},[n("p",[e._v("1. "),n("code",[e._v("Generator")]),e._v(" 函数可以用来做流程控制，可以让一段复杂的逻辑流程化")]),n("p",[e._v("2. demo要实现的功能：传递任意多个数组，将每一个数组的最大值和所有数组的最大值拼接成一个数组输出")])])]),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"js",attrs:{ripple:""}},[e._v("JAVASCRIPT")]),n("v-tab-item",{key:"js"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[1]))])])],1)],1)],1)],1)],1)],1)],1)}}])})],1)],1)],1)])],1)},a=[],i=n("fd3f"),o=(n("5118"),{components:{Blog:i["a"]},data:function(){return{time:"2018-12-13",title:"使用Generator编写优雅的代码",items:[{title:"Generator原理",target:"#Generator"},{divider:!0},{title:"Generator实战",target:"#demo"}],pres:["\n    function *fn() {\n        let i = Math.random();\n        let p = yield i;\n\n        let j = Math.random() * p;\n        yield j;\n    }\n    const f = fn();\n    f.next(); // {value: 0.48682324805468724, done: false}\n    f.next(1000); // {value: 374.5937454669304, done: false}\n    ","\n    function findMax() {\n        const params = Array.from(arguments); // 获取所有数组\n        const length = params.length;\n        let tmpMaxs = [];\n        let i = 0;\n        function *fn() {\n            yield '初始化'; // yield会有一个初始化的过程\n            while(i < length) {\n                const tmp = Math.max.apply(null, params[i]);\n                tmpMaxs.push(tmp);\n                yield tmp; // 获取每一个数组的最大值\n                i++;\n            }\n            const max = Math.max.apply(null, tmpMaxs); // 获取所有数组的最大值\n            tmpMaxs.push(max);\n            yield max;\n        }\n\n        const f = fn();\n        let res = f.next(); // 初始化yield\n        while(!res.done) { // 执行每一个yield获取最大值\n            res = f.next(); \n        }\n        return tmpMaxs;\n    }\n    let max = findMax([10,59,1,2,3], [5,8,9,30,21], [1,20,3,0,3]);\n    console.log(max); // 输出 [59, 30, 20, 59]\n    "]}},mounted:function(){},methods:{}}),s=o,c=(n("4342"),n("2877")),l=n("6544"),u=n.n(l),d=n("b0af"),f=n("99d9"),v=n("12b2"),m=n("a523"),p=n("ce7e"),h=n("0e8f"),y=n("ce87"),_=n("a722"),g=n("71a3"),x=n("c671"),T=n("fe57"),w=Object(c["a"])(s,r,a,!1,null,null,null);t["default"]=w.exports;u()(w,{VCard:d["a"],VCardText:f["a"],VCardTitle:v["a"],VContainer:m["a"],VDivider:p["a"],VFlex:h["a"],VHover:y["a"],VLayout:_["a"],VTab:g["a"],VTabItem:x["a"],VTabs:T["a"]})},f28c:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function c(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}})();var l,u=[],d=!1,f=-1;function v(){d&&l&&(d=!1,l.length?u=l.concat(u):f=-1,u.length&&m())}function m(){if(!d){var e=s(v);d=!0;var t=u.length;while(t){l=u,u=[];while(++f<t)l&&l[f].run();f=-1,t=u.length}l=null,d=!1,c(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||d||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}}]);
//# sourceMappingURL=Generator.779fce1a.js.map