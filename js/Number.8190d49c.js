(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Number"],{"2e71":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"number","grid-list-md":""}},[i("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[i("div",{staticClass:"blogcontent"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return i("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[i("v-card-title",[i("h3",[t._v("Number")])]),i("v-divider"),i("v-card-text",[i("table",[i("colgroup",[i("col",{attrs:{span:"2"}}),i("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}}),i("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}}),i("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}})]),i("tr",[i("td"),i("th",[t._v("属性/方法名")]),i("th",[t._v("示例")]),i("th",[t._v("输出")]),i("th",[t._v("说明")]),i("th",[t._v("备注")])]),i("tr",[i("th",[t._v("1")]),i("td",{attrs:{id:"EPSILON"}},[t._v("EPSILON")]),i("td",[t._v("Number.EPSILON.toFixed(20)")]),i("td",[t._v('"0.00000000000000022204"')]),i("td",[t._v("获取大于1的最小浮点数和1的差值，一般用来确定最小误差范围")]),i("td",[t._v("ES6")])]),i("tr",[i("th",[t._v("2")]),i("td",{attrs:{id:"MAX_VALUE"}},[t._v("MAX_VALUE")]),i("td",[t._v("Number.MAX_VALUE - 1 === Number.MAX_VALUE - 2 ")]),i("td",[t._v("true")]),i("td",[t._v("表示最大值2"),i("sup",[t._v("1024")])]),i("td",{attrs:{rowspan:"5"}},[t._v("不要用此值做计算")])]),i("tr",[i("th",[t._v("3")]),i("td",{attrs:{id:"MIN_VALUE"}},[t._v("MIN_VALUE")]),i("td",[t._v("Number.MIN_VALUE")]),i("td",[t._v("5e-324")]),i("td",[t._v("表示接近0的最小正值")])]),i("tr",[i("th",[t._v("4")]),i("td",{attrs:{id:"POSITIVE_INFINITY"}},[t._v("POSITIVE_INFINITY")]),i("td",[t._v("Number.MAX_VALUE < Number.POSITIVE_INFINITY")]),i("td",[t._v("true")]),i("td",[t._v("表示正无穷大")])]),i("tr",[i("th",[t._v("5")]),i("td",{attrs:{id:"NEGATIVE_INFINITY"}},[t._v("NEGATIVE_INFINITY")]),i("td",[t._v("Number.NEGATIVE_INFINITY")]),i("td",[t._v("-Infinity")]),i("td",[t._v("表示负无穷大")])]),i("tr",[i("th",[t._v("6")]),i("td",{attrs:{id:"NaN"}},[t._v("NaN")]),i("td",[t._v("Number.NaN")]),i("td",[t._v("NaN")]),i("td",[t._v("表示不是一个数")])]),i("tr",[i("th",[t._v("7")]),i("td",{attrs:{id:"MAX_SAFE_INTEGER"}},[t._v("MAX_SAFE_INTEGER")]),i("td",[t._v("Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2")]),i("td",[t._v("false")]),i("td",[t._v("表示最大的安全数2"),i("sup",[t._v("53")]),t._v(" - 1，可以用来运算，能够保证运算准确")]),i("td",{attrs:{rowspan:"8"}},[t._v("ES6")])]),i("tr",[i("th",[t._v("8")]),i("td",{attrs:{id:"MIN_SAFE_INTEGER"}},[t._v("MIN_SAFE_INTEGER")]),i("td",[t._v("Number.MIN_SAFE_INTEGER")]),i("td",[t._v("-(2"),i("sup",[t._v("53")]),t._v(" - 1)")]),i("td",[t._v("表示最小的安全数，可以用来运算，能够保证运算准确")])]),i("tr",[i("th",[t._v("9")]),i("td",{attrs:{id:"isFinite"}},[t._v("isFinite")]),i("td",[t._v("Number.isFinite(Number.EPSILON);")]),i("td",[t._v("true")]),i("td",[t._v("判断一个数是否是有限数")])]),i("tr",[i("th",[t._v("10")]),i("td",{attrs:{id:"isInteger"}},[t._v("isInteger")]),i("td",[t._v("Number.isInteger(1.2);")]),i("td",[t._v("false")]),i("td",[t._v("判断一个数是否是整数")])]),i("tr",[i("th",[t._v("11")]),i("td",{attrs:{id:"isNaN"}},[t._v("isNaN")]),i("td",[t._v("Number.isNaN(Number.NaN);")]),i("td",[t._v("true")]),i("td",[t._v("判断一个数是否是NaN")])]),i("tr",[i("th",[t._v("12")]),i("td",{attrs:{id:"isSafeInteger"}},[t._v("isSafeInteger")]),i("td",[t._v("Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1);")]),i("td",[t._v("false")]),i("td",[t._v("判断一个整数是否是安全的")])]),i("tr",[i("th",[t._v("13")]),i("td",{attrs:{id:"parseFloat"}},[t._v("parseFloat")]),i("td",[t._v('Number.parseFloat("0.1.1aa")')]),i("td",[t._v("0.1")]),i("td",[t._v("将字符串转化成浮点数，遇到第一个"),i("code",[t._v(".")]),t._v("就会终止")])]),i("tr",[i("th",[t._v("14")]),i("td",{attrs:{id:"parseInt"}},[t._v("parseInt")]),i("td",[t._v("Number.parseInt('010111111a', 2)")]),i("td",[t._v("191")]),i("td",[t._v("将字符串转化成10进制整数，第二个参数可选，表示转化字符串使用的进制形式")])]),i("tr",[i("th",[t._v("15")]),i("td",{attrs:{id:"toExponential"}},[t._v("toExponential")]),i("td",[t._v("11111111..toExponential(2)")]),i("td",[t._v('"1.11e+7"')]),i("td",[t._v("将数字转化成字符串指数形式，参数可选表示小数位数")]),i("td")]),i("tr",[i("th",[t._v("16")]),i("td",{attrs:{id:"toFixed"}},[t._v("toFixed")]),i("td",[t._v("(1/3).toFixed(2)")]),i("td",[t._v('"0.33"')]),i("td",[t._v("将数字转化成指定小数位数的字符串")]),i("td")]),i("tr",[i("th",[t._v("17")]),i("td",{attrs:{id:"toPrecision"}},[t._v("toPrecision")]),i("td",[t._v("0.012314.toPrecision(2)")]),i("td",[t._v('"0.012"')]),i("td",[t._v("将数字转化成指定有效位数的字符串")]),i("td")]),i("tr",[i("th",[t._v("18")]),i("td",{attrs:{id:"toLocaleString"}},[t._v("toLocaleString")]),i("td",[i("pre",[t._v(t._s(t.pres[0]))])]),i("td",[t._v('"0.01"')]),i("td",[t._v("将数字转化自定义字符串")]),i("td")]),i("tr",[i("th",[t._v("19")]),i("td",{attrs:{id:"toString"}},[t._v("toString")]),i("td",[t._v("191..toString(2)")]),i("td",[t._v('"10111111"')]),i("td",[t._v("将数字转化字符串，传递可选参数表示进制数")]),i("td")])])])],1)}}])})],1)],1)],1)])],1)},r=[],d=i("fd3f"),s={components:{Blog:d["a"]},data:function(){return{time:"2018-12-21",title:"Number数值处理",items:[{title:"EPSILON",target:"#EPSILON"},{divider:!0},{title:"MAX_VALUE",target:"#MAX_VALUE"},{divider:!0},{title:"MIN_VALUE",target:"#MIN_VALUE"},{divider:!0},{title:"POSITIVE_INFINITY",target:"#POSITIVE_INFINITY"},{divider:!0},{title:"NEGATIVE_INFINITY",target:"#NEGATIVE_INFINITY"},{divider:!0},{title:"NaN",target:"#NaN"},{divider:!0},{title:"MAX_SAFE_INTEGER",target:"#MAX_SAFE_INTEGER"},{divider:!0},{title:"MIN_SAFE_INTEGER",target:"#MIN_SAFE_INTEGER"},{divider:!0},{title:"isFinite",target:"#isFinite"},{divider:!0},{title:"isInteger",target:"#isInteger"},{divider:!0},{title:"isNaN",target:"#isNaN"},{divider:!0},{title:"isSafeInteger",target:"#isSafeInteger"},{divider:!0},{title:"parseFloat",target:"#parseFloat"},{divider:!0},{title:"parseInt",target:"#parseInt"},{divider:!0},{title:"toExponential",target:"#toExponential"},{divider:!0},{title:"toFixed",target:"#toFixed"},{divider:!0},{title:"toPrecision",target:"#toPrecision"},{divider:!0},{title:"toLocaleString",target:"#toLocaleString"},{divider:!0},{title:"toString",target:"#toString"}],pres:["\n0.012314.toLocaleString(undefined, {\n    minimumFractionDigits: 2, // 小数位的最小位数\n    maximumFractionDigits: 2  // 小数位的最大位数\n})\n"]}},mounted:function(){},methods:{}},n=s,v=(i("6972"),i("2877")),o=i("6544"),l=i.n(o),_=i("b0af"),u=i("99d9"),c=i("12b2"),N=i("a523"),I=i("ce7e"),E=i("0e8f"),f=i("ce87"),m=i("a722"),h=Object(v["a"])(n,a,r,!1,null,null,null);e["default"]=h.exports;l()(h,{VCard:_["a"],VCardText:u["a"],VCardTitle:c["a"],VContainer:N["a"],VDivider:I["a"],VFlex:E["a"],VHover:f["a"],VLayout:m["a"]})},"390a":function(t,e,i){"use strict";var a=i("5545"),r=i.n(a);r.a},5545:function(t,e,i){},"695d":function(t,e,i){"use strict";var a=i("8f13"),r=i.n(a);r.a},6972:function(t,e,i){"use strict";var a=i("9cc2"),r=i.n(a);r.a},"8f13":function(t,e,i){},"9cc2":function(t,e,i){},ce87:function(t,e,i){"use strict";var a=i("163b"),r=i("98a1"),d=i("58df"),s=i("d9bd");e["a"]=Object(d["a"])(a["a"],r["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(s["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s["b"])("v-hover should only contain a single element",this),t)}})},fd3f:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{wrap:""}},[i("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),i("v-flex",{attrs:{"xs-12":""}},[i("div",{staticClass:"blogbg"},[i("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),i("div",{staticClass:"msg"},[i("p",[t._v("作者：叶家伟")]),i("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},r=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[i("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[i("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),i("v-card",{staticStyle:{"border-radius":"5px"}},[i("div",{staticClass:"submenuimg"},[i("p",{staticClass:"title"},[t._v("目录")])]),i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),i("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,function(e,a){return[e.divider?i("v-divider",{key:a}):i("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(i){return t.$vuetify.goTo(e.target,t.options)}}},[i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1)],1)},s=[],n={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},v=n,o=(i("390a"),i("2877")),l=i("6544"),_=i.n(l),u=i("8336"),c=i("b0af"),N=i("12b2"),I=i("ce7e"),E=i("132d"),f=i("8860"),m=i("ba95"),h=i("5d23"),p=i("e449"),g=Object(o["a"])(v,d,s,!1,null,null,null),b=g.exports;_()(g,{VBtn:u["a"],VCard:c["a"],VCardTitle:N["a"],VDivider:I["a"],VIcon:E["a"],VList:f["a"],VListTile:m["a"],VListTileContent:h["a"],VListTileTitle:h["b"],VMenu:p["a"]});var S={props:["items","time","title"],components:{BlogSubMenu:b}},A=S,V=(i("695d"),i("a523")),F=i("0e8f"),T=i("a722"),x=Object(o["a"])(A,a,r,!1,null,null,null);e["a"]=x.exports;_()(x,{VContainer:V["a"],VFlex:F["a"],VLayout:T["a"]})}}]);
//# sourceMappingURL=Number.8190d49c.js.map