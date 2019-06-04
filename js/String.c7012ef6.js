(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["String"],{2997:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"string","grid-list-md":""}},[r("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[r("div",{staticClass:"blogcontent"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return r("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[r("v-card-title",[r("h3",{attrs:{id:"String"}},[t._v("String字符串处理")])]),r("v-divider"),r("v-card-text",[r("p",{staticClass:".body-1"},[t._v("部分未提及方法请参阅正则表达式")]),r("table",[r("colgroup",[r("col",{attrs:{span:"2"}}),r("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}}),r("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}}),r("col",{staticStyle:{"min-width":"100px"},attrs:{span:"1"}}),r("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}})]),r("tr",[r("td"),r("th",[t._v("属性/方法名")]),r("th",[t._v("测试数据")]),r("th",[t._v("示例")]),r("th",[t._v("输出")]),r("th",[t._v("说明")]),r("th",[t._v("备注")])]),r("tr",[r("th",[t._v("1")]),r("td",{attrs:{id:"charAt"}},[t._v("charAt")]),r("td",{attrs:{rowspan:"3"}},[t._v('const str = "前端太好玩了";')]),r("td",[r("pre",[t._v("str.charAt(2);")])]),r("td",[t._v("太")]),r("td",[t._v("获取指定索引位的字符")]),r("td")]),r("tr",[r("th",[t._v("2")]),r("td",{attrs:{id:"padStart"}},[t._v("padStart")]),r("td",[r("pre",[t._v("str.padStart(str.length+3, '☆');")])]),r("td",[t._v('"☆☆☆前端太好玩了"')]),r("td",[t._v("在字符串开头填充字符，参数一表示填充后的字符串长度")]),r("td",{attrs:{rowspan:"2"}},[t._v("ES8")])]),r("tr",[r("th",[t._v("3")]),r("td",{attrs:{id:"padEnd"}},[t._v("padEnd")]),r("td",[r("pre",[t._v("str.padEnd(str.length+3, '!');"),r("br"),t._v("str.padEnd(str.length+3);")])]),r("td",[t._v('"前端太好玩了!!!"'),r("br"),t._v('"前端太好玩了   "')]),r("td",[t._v("在字符串结尾填充字符，参数一表示填充后的字符串长度")])]),r("tr",[r("th",[t._v("4")]),r("td",{attrs:{id:"repeat"}},[t._v("repeat")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v("'好玩'.repeat(3);")])]),r("td",[t._v('"好玩好玩好玩"')]),r("td",[t._v("重复字符串")]),r("td",[t._v("ES6")])]),r("tr",[r("th",[t._v("5")]),r("td",{attrs:{id:"slice"}},[t._v("slice")]),r("td",{attrs:{rowspan:"2"}},[t._v('const str = "前端太好玩了";')]),r("td",[r("pre",[t._v("str.slice(0, -1);")])]),r("td",[t._v('"前端太好玩"')]),r("td",[t._v("截取传递的开始索引和结束索引（不包括）之间的字符串")]),r("td",{attrs:{rowspan:"3"}})]),r("tr",[r("th",[t._v("6")]),r("td",{attrs:{id:"substring"}},[t._v("substring")]),r("td",[r("pre",[t._v("str.substring(0, 1);")])]),r("td",[t._v('"前"')]),r("td",[t._v("用法和slice类似，参数值大于字符串长度会被看做字符串长度，小于0会被看做0")])]),r("tr",[r("th",[t._v("7")]),r("td",{attrs:{id:"split"}},[t._v("split")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v("\"a,b,c,d\".split(',', 2);")])]),r("td",[t._v('["a", "b"]')]),r("td",[t._v("根据分隔符将字符串分成数组，第二个参数（可选）表示数组长度，第一个参数可以是正则")])]),r("tr",[r("th",[t._v("8")]),r("td",{attrs:{id:"endsWith"}},[t._v("endsWith")]),r("td",{attrs:{rowspan:"5"}},[t._v('const str = "前端太好玩了";')]),r("td",[r("pre",[t._v('str.endsWith("了");'),r("br"),t._v("str.endsWith('玩')"),r("br"),t._v("str.endsWith('玩', str.length-1)")])]),r("td",[t._v("true"),r("br"),t._v("false"),r("br"),t._v("true")]),r("td",[t._v("判断字符串是否以给定字符串为结尾，第二个参数（可选）表示要查找的原始字符串的长度")]),r("td",{attrs:{rowspan:"5"}},[t._v("ES6")])]),r("tr",[r("th",[t._v("9")]),r("td",{attrs:{id:"endsWith"}},[t._v("startsWith")]),r("td",[r("pre",[t._v("str.startsWith('玩');"),r("br"),t._v("str.startsWith('玩', 4);")])]),r("td",[t._v("false"),r("br"),t._v("true")]),r("td",[t._v("判断字符串是否以给定字符串为开始，第二个参数（可选）表示开始查找的索引")])]),r("tr",[r("th",[t._v("10")]),r("td",{attrs:{id:"includes"}},[t._v("includes")]),r("td",[r("pre",[t._v("str.includes('好玩');"),r("br"),t._v("str.includes('好玩', 4);")])]),r("td",[t._v("true"),r("br"),t._v("false")]),r("td",[t._v("判断是否包含传入的字符串，第二个参数（可选）表示开始查找的索引")])]),r("tr",[r("th",[t._v("11")]),r("td",{attrs:{id:"indexOf"}},[t._v("indexOf")]),r("td",[r("pre",[t._v("str.indexOf('好玩');"),r("br"),t._v("str.indexOf('好玩', 4);")])]),r("td",[t._v("3"),r("br"),t._v("-1")]),r("td",[t._v("查找第一个满足条件元素的索引没找到返回-1，第二个参数（可选）表示开始查找的索引")])]),r("tr",[r("th",[t._v("12")]),r("td",{attrs:{id:"lastIndexOf"}},[t._v("lastIndexOf")]),r("td",[r("pre",[t._v("str.lastIndexOf('好玩');"),r("br"),t._v("str.lastIndexOf('好玩', 2);")])]),r("td",[t._v("3"),r("br"),t._v("-1")]),r("td",[t._v("从后往前查找第一个满足条件元素的索引没找到返回-1，第二个参数（可选）表示开始查找的索引")])]),r("tr",[r("th",[t._v("13")]),r("td",{attrs:{id:"raw"}},[t._v("raw")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v("String.raw`\\r\\n`;"),r("br"),t._v("String.raw({raw: ['a', 'b', 'c']}, '-', '+');")])]),r("td",[t._v('"\\r\\n"'),r("br"),t._v('"a-b+c"')]),r("td",[t._v("将特殊字符转义或者填充字符串")]),r("td",[t._v("ES6")])]),r("tr",[r("th",[t._v("14")]),r("td",{attrs:{id:"toLowerCase"}},[t._v("toLowerCase")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v('"ABC".toLowerCase();')])]),r("td",[t._v('"abc"')]),r("td",[t._v("转小写")]),r("td",{attrs:{rowspan:"5"}})]),r("tr",[r("th",[t._v("15")]),r("td",{attrs:{id:"toUpperCase"}},[t._v("toUpperCase")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v('"abc".toUpperCase();')])]),r("td",[t._v('"ABC"')]),r("td",[t._v("转大写")])]),r("tr",[r("th",[t._v("16")]),r("td",{attrs:{id:"trim"}},[t._v("trim")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v('" abc ".trim();')])]),r("td",[t._v('"abc"')]),r("td",[t._v("去除前后空格")])]),r("tr",[r("th",[t._v("17")]),r("td",{attrs:{id:"trimEnd"}},[t._v("trimEnd")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v('" abc ".trimEnd();')])]),r("td",[t._v('" abc"')]),r("td",[t._v("去除末尾空格")])]),r("tr",[r("th",[t._v("18")]),r("td",{attrs:{id:"trimStart"}},[t._v("trimStart")]),r("td",{attrs:{colspan:"2"}},[r("pre",[t._v('" abc ".trimStart();')])]),r("td",[t._v('"abc "')]),r("td",[t._v("去除开头空格")])]),r("tr",[r("th",[t._v("19")]),r("td",{attrs:{id:"charCodeAt"}},[t._v("charCodeAt")]),r("td",{attrs:{rowspan:"4"}},[t._v('const str = "前端太好玩了";')]),r("td",[r("pre",[t._v("str.charCodeAt(2);")])]),r("td",[t._v("22826")]),r("td",[t._v("获取字符UTF16码元，码元：是字符的一个编码位，一个字符可能有两个码元")]),r("td",{attrs:{rowspan:"4"}},[t._v("ES6")])]),r("tr",[r("th",[t._v("20")]),r("td",{attrs:{id:"codePointAt"}},[t._v("codePointAt")]),r("td",[r("pre",[t._v("str.codePointAt(2);")])]),r("td",[t._v("22826")]),r("td",[t._v("获取字符UTF16码点，码点：就是字符的所有码元")])]),r("tr",[r("th",[t._v("21")]),r("td",{attrs:{id:"fromCharCode"}},[t._v("fromCharCode")]),r("td",[r("pre",[t._v("String.fromCharCode(str.charCodeAt(0), str.charCodeAt(1));")])]),r("td",[t._v('"前端"')]),r("td",[t._v("根据字符UTF16码元生成字符串")])]),r("tr",[r("th",[t._v("22")]),r("td",{attrs:{id:"fromCodePoint"}},[t._v("fromCodePoint")]),r("td",[r("pre",[t._v("String.fromCodePoint(str.codePointAt(0), str.codePointAt(1));")])]),r("td",[t._v('"前端"')]),r("td",[t._v("根据字符UTF16码点生成字符串")])])])])],1)}}])})],1)],1)],1)])],1)},i=[],s=r("fd3f"),d={components:{Blog:s["a"]},data:function(){return{time:"2019-1-2",title:"String字符串",items:[{title:"charAt",target:"#charAt"},{divider:!0},{title:"padStart",target:"#padStart"},{divider:!0},{title:"padEnd",target:"#padEnd"},{divider:!0},{title:"repeat",target:"#repeat"},{divider:!0},{title:"slice",target:"#slice"},{divider:!0},{title:"substring",target:"#substring"},{divider:!0},{title:"split",target:"#split"},{divider:!0},{title:"endsWith",target:"#endsWith"},{divider:!0},{title:"includes",target:"#includes"},{divider:!0},{title:"indexOf",target:"#indexOf"},{divider:!0},{title:"lastIndexOf",target:"#lastIndexOf"},{divider:!0},{title:"raw",target:"#raw"},{divider:!0},{title:"toLowerCase",target:"#toLowerCase"},{divider:!0},{title:"toUpperCase",target:"#toUpperCase"},{divider:!0},{title:"trim",target:"#trim"},{divider:!0},{title:"trimEnd",target:"#trimEnd"},{divider:!0},{title:"trimStart",target:"#trimStart"},{divider:!0},{title:"charCodeAt",target:"#charCodeAt"},{divider:!0},{title:"codePointAt",target:"#codePointAt"},{divider:!0},{title:"fromCharCode",target:"#fromCharCode"},{divider:!0},{title:"fromCodePoint",target:"#fromCodePoint"}],pres:["\nconst setIter = set.entries();\nlet tmp = setIter.next();\nwhile(!tmp.done){\n    console.log(tmp.value);\n    tmp = setIter.next();\n}\n"]}},methods:{}},n=d,v=(r("55bc"),r("2877")),o=r("6544"),l=r.n(o),_=r("b0af"),c=r("99d9"),p=r("12b2"),u=r("a523"),h=r("ce7e"),f=r("0e8f"),m=r("ce87"),b=r("a722"),g=Object(v["a"])(n,a,i,!1,null,null,null);e["default"]=g.exports;l()(g,{VCard:_["a"],VCardText:c["a"],VCardTitle:p["a"],VContainer:u["a"],VDivider:h["a"],VFlex:f["a"],VHover:m["a"],VLayout:b["a"]})},"390a":function(t,e,r){"use strict";var a=r("5545"),i=r.n(a);i.a},5545:function(t,e,r){},"55bc":function(t,e,r){"use strict";var a=r("84e5"),i=r.n(a);i.a},"695d":function(t,e,r){"use strict";var a=r("8f13"),i=r.n(a);i.a},"84e5":function(t,e,r){},"8f13":function(t,e,r){},ce87:function(t,e,r){"use strict";var a=r("163b"),i=r("98a1"),s=r("58df"),d=r("d9bd");e["a"]=Object(s["a"])(a["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(d["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(d["b"])("v-hover should only contain a single element",this),t)}})},fd3f:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{wrap:""}},[r("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),r("v-flex",{attrs:{"xs-12":""}},[r("div",{staticClass:"blogbg"},[r("div",{staticClass:"msg"},[r("p",[t._v("作者：叶家伟")]),r("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[r("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[r("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),r("v-card",{staticStyle:{"border-radius":"5px"}},[r("div",{staticClass:"submenuimg"},[r("p",{staticClass:"title"},[t._v("目录")])]),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),r("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,function(e,a){return[e.divider?r("v-divider",{key:a}):r("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(r){return t.$vuetify.goTo(e.target,t.options)}}},[r("v-list-tile-content",[r("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]})],2)],1)],1)},d=[],n={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},v=n,o=(r("390a"),r("2877")),l=r("6544"),_=r.n(l),c=r("8336"),p=r("b0af"),u=r("12b2"),h=r("ce7e"),f=r("132d"),m=r("8860"),b=r("ba95"),g=r("5d23"),C=r("e449"),w=Object(o["a"])(v,s,d,!1,null,null,null),S=w.exports;_()(w,{VBtn:c["a"],VCard:p["a"],VCardTitle:u["a"],VDivider:h["a"],VIcon:f["a"],VList:m["a"],VListTile:b["a"],VListTileContent:g["a"],VListTileTitle:g["b"],VMenu:C["a"]});var x={props:["items","time","title"],components:{BlogSubMenu:S}},y=x,A=(r("695d"),r("a523")),E=r("0e8f"),V=r("a722"),O=Object(o["a"])(y,a,i,!1,null,null,null);e["a"]=O.exports;_()(O,{VContainer:A["a"],VFlex:E["a"],VLayout:V["a"]})}}]);
//# sourceMappingURL=String.c7012ef6.js.map