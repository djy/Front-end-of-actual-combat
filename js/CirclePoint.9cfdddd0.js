(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CirclePoint"],{2241:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"circlepoint","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Explain"}},[t._v("解释")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:".body-1"},[t._v("画图的时候注意小点绕圆心轨迹运动，必须把小点的位置和移动后的坐标轴对应起来，具体操作见代码")])])],1)}}])})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"Result1"}},[t._v("效果")])]),n("v-divider"),n("v-card-text",[n("canvas",{attrs:{id:"canvas",width:"400px",height:"400px"}})])],1)}}])})],1),n("v-flex",{attrs:{sm12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"300"}},[n("v-card-title",[n("h3",{attrs:{id:"Code1"}},[t._v("代码")])]),n("v-divider"),n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"html",attrs:{ripple:""}},[t._v("HTML")]),n("v-tab",{key:"js",attrs:{ripple:""}},[t._v("JAVASCRIPT")]),n("v-tab-item",{key:"html"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v("                                                "+t._s(t.html)+"\n                                            ")])])],1)],1),n("v-tab-item",{key:"css"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v("                                                "+t._s(t.js)+"\n                                            ")])])],1)],1)],1)],1)}}])})],1)],1)],1)])],1)},r=[],i=(n("6c7b"),n("fd3f")),o=(n("5118"),{components:{Blog:i["a"]},data:function(){return{time:"2018-10-7",title:"绕中心点旋转带尾影的点",items:[{title:"解释",target:"#Explain"},{divider:!0},{title:"效果",target:"#Result1"},{divider:!0},{title:"代码",target:"#Code1"}],html:'\n            <canvas \n                id="canvas" \n                width="400px" \n                height="400px"\n            >\n            </canvas>\n            ',js:"\n            const canvas = document.getElementById('canvas');\n            const ctx = canvas.getContext('2d');\n            \n            let ang = 0;\n            window.requestAnimationFrame(draw);\n            draw();\n            function draw() {\n                ctx.save();\n                ctx.fillStyle = 'rgba(222, 234, 222, 0.1)';\n                ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n                // 移动坐标轴原点到中心点\n                ctx.translate(200, 200);\n                ang+=2;\n                ctx.rotate((Math.PI / 180) * ang);\n                ctx.beginPath();\n\n                drawRect(-100, 0);\n                drawRect(-130, 30);\n                drawRect(100, 10);\n                drawRect(130, 30);\n\n                ctx.restore();\n                window.requestAnimationFrame(draw);\n            }\n\n            // 画一个带渐变色的矩形\n            function drawRect(x, y) {\n                const cg = ctx.createLinearGradient(x, y, x, -10);\n                cg.addColorStop(0, 'rgba(0, 128, 0, 1)');\n                cg.addColorStop(0.2, 'rgba(0, 128, 0, 0.3)');\n                cg.addColorStop(1, 'rgba(0, 128, 0, 0.0)');\n                ctx.rect(x, y, 3, 10);\n                ctx.fillStyle = cg;\n                ctx.fill();\n            }\n            "}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=0;function a(){e.save(),e.fillStyle="rgba(222, 234, 222, 0.1)",e.fillRect(0,0,t.width,t.height),e.translate(200,200),n+=2,e.rotate(Math.PI/180*n),e.beginPath(),r(-100,0),r(-130,30),r(100,10),r(130,30),e.restore(),window.requestAnimationFrame(a)}function r(t,n){var a=e.createLinearGradient(t,n,t,-10);a.addColorStop(0,"rgba(0, 128, 0, 1)"),a.addColorStop(.2,"rgba(0, 128, 0, 0.3)"),a.addColorStop(1,"rgba(0, 128, 0, 0.0)"),e.rect(t,n,3,10),e.fillStyle=a,e.fill()}window.requestAnimationFrame(a),a()}}),c=o,s=(n("8894"),n("2877")),l=n("6544"),u=n.n(l),d=n("b0af"),f=n("99d9"),v=n("12b2"),m=n("a523"),h=n("ce7e"),p=n("0e8f"),g=n("ce87"),y=n("a722"),w=n("71a3"),b=n("c671"),T=n("fe57"),x=Object(s["a"])(c,a,r,!1,null,null,null);e["default"]=x.exports;u()(x,{VCard:d["a"],VCardText:f["a"],VCardTitle:v["a"],VContainer:m["a"],VDivider:h["a"],VFlex:p["a"],VHover:g["a"],VLayout:y["a"],VTab:w["a"],VTabItem:b["a"],VTabs:T["a"]})},"36bd":function(t,e,n){"use strict";var a=n("4bf8"),r=n("77f1"),i=n("9def");t.exports=function(t){var e=a(this),n=i(e.length),o=arguments.length,c=r(o>1?arguments[1]:void 0,n),s=o>2?arguments[2]:void 0,l=void 0===s?n:r(s,n);while(l>c)e[c++]=t;return e}},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,r=1,i={},o=!1,c=t.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(t);s=s&&s.setTimeout?s:t,"[object process]"==={}.toString.call(t.process)?v():m()?h():t.MessageChannel?p():c&&"onreadystatechange"in c.createElement("script")?g():y(),s.setImmediate=l,s.clearImmediate=u}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return i[r]=o,a(r),r++}function u(t){delete i[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(o)setTimeout(f,0,t);else{var e=i[t];if(e){o=!0;try{d(e)}finally{u(t),o=!1}}}}function v(){a=function(t){e.nextTick(function(){f(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function h(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function p(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function g(){var t=c.documentElement;a=function(e){var n=c.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function y(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"6c7b":function(t,e,n){var a=n("5ca1");a(a.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},8894:function(t,e,n){"use strict";var a=n("c01a"),r=n.n(a);r.a},c01a:function(t,e,n){},f28c:function(t,e){var n,a,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function s(t){if(a===clearTimeout)return clearTimeout(t);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{return a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{a="function"===typeof clearTimeout?clearTimeout:o}catch(t){a=o}})();var l,u=[],d=!1,f=-1;function v(){d&&l&&(d=!1,l.length?u=l.concat(u):f=-1,u.length&&m())}function m(){if(!d){var t=c(v);d=!0;var e=u.length;while(e){l=u,u=[];while(++f<e)l&&l[f].run();f=-1,e=u.length}l=null,d=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function p(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||d||c(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);
//# sourceMappingURL=CirclePoint.9cfdddd0.js.map