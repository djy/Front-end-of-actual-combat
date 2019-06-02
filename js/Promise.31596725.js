(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Promise"],{"0fb8":function(e,t,n){},5118:function(e,t,n){(function(e){var r="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new s(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"52cf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"promise","grid-list-md":""}},[n("Blog",{attrs:{items:e.items,time:e.time,title:e.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return n("v-card",{class:"elevation-"+(r?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Promise"}},[e._v("Promise")])]),n("v-divider"),n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("1. "),n("code",[e._v("Promise")]),e._v(" 就是解决回调地狱（过多的回调函数和回调嵌套会让代码看起来恶心，难懂，bug多）")]),n("p",[e._v("2. 使用"),n("code",[e._v("Promise")]),e._v("构造函数需要传递一个函数，此函数带有参数"),n("code",[e._v("resolve")]),e._v(", "),n("code",[e._v("reject")]),n("ul",[n("li",[e._v("resolve：会让promise成功返回值，可以通过调用promise实例then方法的第一个回调函数接受返回值")]),n("li",[e._v("reject：会让promise返回报错的值，可以通过调用promise实例then方法的第二个回调函数或者catch方法接受返回值")])])]),n("p",[e._v("3. promise实例的"),n("code",[e._v("finally")]),e._v("方法最终都会执行")]),n("p",[e._v("4. promise实例的"),n("code",[e._v("then")]),e._v("、"),n("code",[e._v("catch")]),e._v("、"),n("code",[e._v("finally")]),e._v("方法都会返回promise实例，能够方便实现链式调用")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"demo1",attrs:{ripple:""}},[e._v("demo1")]),n("v-tab-item",{key:"demo1"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[0]))])])],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("5. 调用promise实例的方法（例如then）是立即执行的，但是传递给其中的回调函数是异步执行的")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"demo2",attrs:{ripple:""}},[e._v("demo2")]),n("v-tab-item",{key:"demo2"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[1]))])])],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("6. 链式调用promise如果实例方法（例如then）返回的值不是promise实例，则其后的调用并不会等待之前的调用")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"demo3",attrs:{ripple:""}},[e._v("demo3")]),n("v-tab-item",{key:"demo3"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","pr-1":""}},[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[2]))])]),n("v-flex",{attrs:{xs12:"",sm6:"","pr-1":""}},[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[3]))])])],1)],1)],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("7. 调用promise实例的"),n("code",[e._v("all")]),e._v("方法，可以传递一组promise，只有当所有的promise都resolve了，此方法才会resolve；如果有一个promise reject了则reject")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"demo4",attrs:{ripple:""}},[e._v("demo4")]),n("v-tab-item",{key:"demo4"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[4]))])])],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"part"},[n("p",[e._v("8. 调用promise实例的"),n("code",[e._v("race")]),e._v("方法，可以传递一组promise，如果有一个promise resolve或者reject了就执行相应操作")])])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"demo5",attrs:{ripple:""}},[e._v("demo5")]),n("v-tab-item",{key:"demo5"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[5]))])])],1)],1)],1)],1)],1)],1)],1)}}])})],1)],1)],1)])],1)},o=[],s=n("fd3f"),i=(n("5118"),{components:{Blog:s["a"]},data:function(){return{time:"2018-12-25",title:"Promise解决回调地狱",items:[{title:"Promise",target:"#Promise"},{divider:!0}],pres:["\n    const pm = new Promise((resolve, reject) => {\n        setTimeout(function() {\n            resolve('OK');\n            reject('err'); // resolve先执行，所以此方法不会执行\n        }, 500);\n    });\n\n    pm.then((value) => {\n        // 接受resolve\n        console.log(value);\n        return value+\"!\"; // 将值传递给promise实例\n    }, (err) => {\n        // 接受reject\n        console.log(err);\n    }).then((value) => {\n        // 链式调用\n        console.log(value);\n        return Promise.reject('err');\n    }).catch(function(err) {\n        console.log(err);\n    }).finally(() => {\n        console.log('最终都会执行')\n    }); \n    // OK \n    // OK!\n    // err\n    // 最终都会执行\n","\n    const pm = Promise.resolve('OK');\n    let rpm = pm.then((value)=>{\n        // then中的处理函数是异步执行的\n        return value;\n    });\n    console.log(rpm);\n    setTimeout(()=>{\n        console.log(rpm);\n    });\n\n    // Promise {<pending>}\n    // Promise {<resolved>: \"OK\"}\n","\n    Promise.resolve('Ok').then(function(value) {\n        setTimeout(function() {\n            console.log('1-> ' + value);\n        }, 1);\n        return value;\n    }).then(function(value) {\n        setTimeout(function() {\n            console.log('2-> ' + value);\n        }, 1)\n        return value;\n    }).then(function(value) {\n        console.log('3-> ' + value);\n    });\n    // 3-> Ok\n    // 1-> Ok\n    // 2-> Ok\n","\n    Promise.resolve('Ok').then(function(value) {\n        return new Promise(function(resolve, reject) {\n            setTimeout(function() {\n                console.log('1-> ' + value);\n                resolve(value);\n            }, 1);\n        });\n    }).then(function(value) {\n        setTimeout(function() {\n            console.log('2-> ' + value);\n        }, 1)\n        return value;\n    }).then(function(value) {\n        console.log('3-> ' + value);\n    });\n\n    // 1-> Ok\n    // 3-> Ok\n    // 2-> Ok\n","\n    const pm1 = Promise.resolve('11');\n    const pm2 = Promise.reject('22');\n    const pm3 = new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve('33');\n        }, 100)\n    });\n\n    Promise.all([pm1, pm2, pm3]).then(function(values) {\n        console.log(values);\n    }).catch(err => { \n        console.log(err)\n    });\n    // 22\n","\n    const pm1 = Promise.resolve('11');\n    const pm2 = Promise.reject('22');\n    const pm3 = new Promise(function(resolve, reject) {\n        setTimeout(function() {\n            resolve('33');\n        }, 100)\n    });\n\n    Promise.race([pm1, pm2, pm3]).then(function(value) {\n        console.log(value);\n        return '执行完了';\n    }).catch(err => { \n        console.log(err)\n    });\n\n    // 11\n"]}},mounted:function(){},methods:{}}),a=i,l=(n("a176"),n("2877")),c=n("6544"),u=n.n(c),v=n("b0af"),m=n("99d9"),f=n("12b2"),d=n("a523"),p=n("ce7e"),h=n("0e8f"),g=n("ce87"),_=n("a722"),y=n("71a3"),T=n("c671"),b=n("fe57"),w=Object(l["a"])(a,r,o,!1,null,null,null);t["default"]=w.exports;u()(w,{VCard:v["a"],VCardText:m["a"],VCardTitle:f["a"],VContainer:d["a"],VDivider:p["a"],VFlex:h["a"],VHover:g["a"],VLayout:_["a"],VTab:y["a"],VTabItem:T["a"],VTabs:b["a"]})},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var r,o=1,s={},i=!1,a=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?f():d()?p():e.MessageChannel?h():a&&"onreadystatechange"in a.createElement("script")?g():_(),l.setImmediate=c,l.clearImmediate=u}function c(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return s[o]=i,r(o),o++}function u(e){delete s[e]}function v(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r);break}}function m(e){if(i)setTimeout(m,0,e);else{var t=s[e];if(t){i=!0;try{v(t)}finally{u(e),i=!1}}}}function f(){r=function(e){t.nextTick(function(){m(e)})}}function d(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function p(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&m(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),r=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;m(t)},r=function(t){e.port2.postMessage(t)}}function g(){var e=a.documentElement;r=function(t){var n=a.createElement("script");n.onreadystatechange=function(){m(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function _(){r=function(e){setTimeout(m,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},a176:function(e,t,n){"use strict";var r=n("0fb8"),o=n.n(r);o.a},f28c:function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function l(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}})();var c,u=[],v=!1,m=-1;function f(){v&&c&&(v=!1,c.length?u=c.concat(u):m=-1,u.length&&d())}function d(){if(!v){var e=a(f);v=!0;var t=u.length;while(t){c=u,u=[];while(++m<t)c&&c[m].run();m=-1,t=u.length}c=null,v=!1,l(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||v||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
//# sourceMappingURL=Promise.31596725.js.map