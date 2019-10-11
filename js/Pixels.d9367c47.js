(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Pixels"],{2432:function(t,e,n){"use strict";var a=n("6451"),i=n.n(a);i.a},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,o={},r=!1,c=t.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(t);s=s&&s.setTimeout?s:t,"[object process]"==={}.toString.call(t.process)?v():m()?h():t.MessageChannel?g():c&&"onreadystatechange"in c.createElement("script")?p():y(),s.setImmediate=l,s.clearImmediate=d}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return o[i]=r,a(i),i++}function d(t){delete o[t]}function u(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(r)setTimeout(f,0,t);else{var e=o[t];if(e){r=!0;try{u(e)}finally{d(t),r=!1}}}}function v(){a=function(t){e.nextTick((function(){f(t)}))}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function h(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function g(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function p(){var t=c.documentElement;a=function(e){var n=c.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function y(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},6451:function(t,e,n){},"9a7e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"pixels","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Explain"}},[t._v("解释")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("1. "),n("code",[t._v("ImageData")]),t._v("专门用来存储canvas一块儿区域的像素值")]),n("table",[n("tr",[n("td"),n("th",[t._v("属性名")]),n("th",[t._v("属性值例子")]),n("th",[t._v("解释")])]),n("tr",[n("th",[t._v("1")]),n("td",[t._v("width")]),n("td",[t._v("1")]),n("td",[t._v("表示像素块儿的宽度，也就是横向1个像素")])]),n("tr",[n("th",[t._v("2")]),n("td",[t._v("height")]),n("td",[t._v("1")]),n("td",[t._v("表示像素块儿的高度，也就是纵向向1个像素")])]),n("tr",[n("th",[t._v("3")]),n("td",[t._v("data")]),n("td",[t._v("[218, 252, 100, 255]")]),n("td",[t._v("代表rgba四个值，所有值的范围都是0~255")])])]),n("p",{staticClass:".body-1"},[t._v("2. "),n("code",[t._v("createImageData(width, height)")]),t._v(" 根据指定的像素块儿大小创建一个ImageData对象，所有的像素单位都被填充为0")]),n("p",{staticClass:".body-1"},[t._v("3. "),n("code",[t._v("putImageData(imageData, dx, dy)")]),t._v(" 将ImageData对象绘制在canvas指定的位置中")]),n("p",{staticClass:".body-1"},[t._v("4. "),n("code",[t._v("getImageData(left, top, width, height)")]),t._v(" 获取指定位置，指定区块儿的imageData对象")])])],1)}}])})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"Result1"}},[t._v("效果")])]),n("v-divider"),n("v-card-text",[n("canvas",{attrs:{id:"canvas",width:"400px",height:"400px"}}),n("canvas",{attrs:{id:"co-canvas",width:"400px",height:"400px"}})])],1)}}])})],1),n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"Code1"}},[t._v("代码")])]),n("v-divider"),n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"html",attrs:{ripple:""}},[t._v("HTML")]),n("v-tab",{key:"js",attrs:{ripple:""}},[t._v("JAVASCRIPT")]),n("v-tab-item",{key:"html"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v("                                                "+t._s(t.html)+"\n                                            ")])])],1)],1),n("v-tab-item",{key:"js"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v(t._s(t.js))])])],1)],1)],1)],1)}}])})],1)],1)],1)])],1)},i=[],o=n("fd3f"),r=(n("5118"),{components:{Blog:o["a"]},data:function(){return{time:"2018-9-13",title:"利用ImageData处理大量像素渲染",items:[{title:"解释",target:"#Explain"},{divider:!0},{title:"效果",target:"#Result1"},{divider:!0},{title:"代码",target:"#Code1"}],html:'\n            <canvas \n                id="canvas" \n                width="400px" \n                height="400px"\n            >\n            </canvas>\n            <canvas \n                id="co-canvas" \n                width="400px" \n                height="400px"\n            >\n            </canvas>\n            ',js:"\n            const canvas = document.getElementById('canvas');\n            const ctx = canvas.getContext('2d');\n            const coCanvas = document.getElementById('co-canvas');\n            const coCtx = coCanvas.getContext('2d');\n\n            const img = ctx.createImageData(300, 300);\n            for(let i = 0; i < img.data.length; i+=4) {\n                img.data[i] = Math.floor(Math.random()*255); // red\n                img.data[i+1] = Math.floor(Math.random()*255); // green\n                img.data[i+2] = Math.floor(Math.random()*255); // blue\n                img.data[i+3] = 255; // alpha\n            }\n            ctx.putImageData(img, 0, 0); // 渲染ImageData\n\n            canvas.addEventListener('mousemove', function(e){\n                // 获取鼠标位置\n                const cRect = canvas.getBoundingClientRect();              \n                const mouseX = Math.round(e.clientX - cRect.left);        \n                const mouseY = Math.round(e.clientY - cRect.top);\n                let px = ctx.getImageData(mouseX, mouseY, 1, 1).data;\n                drawPixel('rgba(' + px[0] + ', ' + px[1] + ', ' + px[2] + ', ' + (px[3] / 255) + ')');\n            })\n\n            // 将pixel放入到co-canvas中\n            function drawPixel(rgba) {\n                coCtx.clearRect(0, 0, coCanvas.width, coCanvas.height);\n                coCtx.fillStyle = rgba;\n                coCtx.fillRect(0, 0, 300, 300);\n            }\n            "}},mounted:function(){for(var t=document.getElementById("canvas"),e=t.getContext("2d"),n=document.getElementById("co-canvas"),a=n.getContext("2d"),i=e.createImageData(300,300),o=0;o<i.data.length;o+=4)i.data[o]=Math.floor(255*Math.random()),i.data[o+1]=Math.floor(255*Math.random()),i.data[o+2]=Math.floor(255*Math.random()),i.data[o+3]=255;function r(t){a.clearRect(0,0,n.width,n.height),a.fillStyle=t,a.fillRect(0,0,300,300)}e.putImageData(i,0,0),t.addEventListener("mousemove",(function(n){var a=t.getBoundingClientRect(),i=Math.round(n.clientX-a.left),o=Math.round(n.clientY-a.top),c=e.getImageData(i,o,1,1).data;r("rgba("+c[0]+", "+c[1]+", "+c[2]+", "+c[3]/255+")")}))}}),c=r,s=(n("2432"),n("2877")),l=n("6544"),d=n.n(l),u=n("b0af"),f=n("99d9"),v=n("12b2"),m=n("a523"),h=n("ce7e"),g=n("0e8f"),p=n("ce87"),y=n("a722"),_=n("71a3"),x=n("c671"),w=n("fe57"),T=Object(s["a"])(c,a,i,!1,null,null,null);e["default"]=T.exports;d()(T,{VCard:u["a"],VCardText:f["a"],VCardTitle:v["a"],VContainer:m["a"],VDivider:h["a"],VFlex:g["a"],VHover:p["a"],VLayout:y["a"],VTab:_["a"],VTabItem:x["a"],VTabs:w["a"]})},f28c:function(t,e){var n,a,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function s(t){if(a===clearTimeout)return clearTimeout(t);if((a===r||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{return a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{a="function"===typeof clearTimeout?clearTimeout:r}catch(t){a=r}})();var l,d=[],u=!1,f=-1;function v(){u&&l&&(u=!1,l.length?d=l.concat(d):f=-1,d.length&&m())}function m(){if(!u){var t=c(v);u=!0;var e=d.length;while(e){l=d,d=[];while(++f<e)l&&l[f].run();f=-1,e=d.length}l=null,u=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new h(t,e)),1!==d.length||u||c(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=Pixels.d9367c47.js.map