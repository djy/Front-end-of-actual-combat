(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Math"],{"19ae":function(t,a,d){},"38e1":function(t,a,d){"use strict";var e=d("19ae"),i=d.n(e);i.a},"390a":function(t,a,d){"use strict";var e=d("ed62"),i=d.n(e);i.a},"695d":function(t,a,d){"use strict";var e=d("b193"),i=d.n(e);i.a},b193:function(t,a,d){},ce87:function(t,a,d){"use strict";var e=d("163b"),i=d("98a1"),r=d("58df"),v=d("d9bd");a["a"]=Object(r["a"])(e["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(v["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(v["b"])("v-hover should only contain a single element",this),t)}})},d25b:function(t,a,d){"use strict";d.r(a);var e=function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"math","grid-list-md":""}},[d("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[d("div",{staticClass:"blogcontent"},[d("v-layout",{attrs:{row:"",wrap:""}},[d("v-flex",{attrs:{xs12:""}},[d("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return d("v-card",{class:"elevation-"+(e?12:2),attrs:{"min-height":"200"}},[d("v-card-title",[d("h3",[t._v("Math")])]),d("v-divider"),d("v-card-text",[d("table",[d("colgroup",[d("col",{attrs:{span:"2"}}),d("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}}),d("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}}),d("col",{staticStyle:{"min-width":"300px"},attrs:{span:"1"}})]),d("tr",[d("td"),d("th",[t._v("属性/方法名")]),d("th",[t._v("示例")]),d("th",[t._v("输出")]),d("th",[t._v("说明")]),d("th",[t._v("备注")])]),d("tr",[d("th",[t._v("1")]),d("td",{attrs:{id:"E"}},[t._v("E")]),d("td",[t._v("Math.E")]),d("td",[t._v("2.718281828459045")]),d("td",[t._v("自然常数E")]),d("td")]),d("tr",[d("th",[t._v("2")]),d("td",{attrs:{id:"LN10"}},[t._v("LN10")]),d("td",[t._v("Math.LN10")]),d("td",[t._v("2.302585092994046")]),d("td",[t._v("ln10的值")]),d("td")]),d("tr",[d("th",[t._v("3")]),d("td",{attrs:{id:"LN2"}},[t._v("LN2")]),d("td",[t._v("Math.LN2")]),d("td",[t._v("0.6931471805599453")]),d("td",[t._v("ln2的值")]),d("td")]),d("tr",[d("th",[t._v("4")]),d("td",{attrs:{id:"LOG10E"}},[t._v("LOG10E")]),d("td",[t._v("Math.LOG10E")]),d("td",[t._v("0.4342944819032518")]),d("td",[t._v("log"),d("sub",[t._v("10")]),t._v("e")]),d("td")]),d("tr",[d("th",[t._v("5")]),d("td",{attrs:{id:"LOG2E"}},[t._v("LOG2E")]),d("td",[t._v("Math.LOG2E")]),d("td",[t._v("1.4426950408889634")]),d("td",[t._v("log"),d("sub",[t._v("2")]),t._v("e")]),d("td")]),d("tr",[d("th",[t._v("6")]),d("td",{attrs:{id:"PI"}},[t._v("PI")]),d("td",[t._v("Math.PI")]),d("td",[t._v("3.141592653589793")]),d("td",[t._v("π")]),d("td")]),d("tr",[d("th",[t._v("7")]),d("td",{attrs:{id:"SQRT1_2"}},[t._v("SQRT1_2")]),d("td",[t._v("Math.SQRT1_2")]),d("td",[t._v("0.7071067811865476")]),d("td",[t._v("1 / √"),d("sub",{staticStyle:{position:"relative",left:"-3px"}},[t._v("2")])]),d("td")]),d("tr",[d("th",[t._v("8")]),d("td",{attrs:{id:"SQRT2"}},[t._v("SQRT2")]),d("td",[t._v("Math.SQRT2")]),d("td",[t._v("1.4142135623730951")]),d("td",[t._v("√"),d("sub",{staticStyle:{position:"relative",left:"-3px"}},[t._v("2")])]),d("td")]),d("tr",[d("th",[t._v("9")]),d("td",{attrs:{id:"abs"}},[t._v("abs")]),d("td",[t._v("Math.abs(-1);")]),d("td",[t._v("1")]),d("td",[t._v("取绝对值")]),d("td")]),d("tr",[d("th",[t._v("10")]),d("td",{attrs:{id:"sin"}},[t._v("sin")]),d("td",[t._v("Math.sin(Math.PI*30/180);")]),d("td",[t._v("0.49999999999999994")]),d("td",[t._v("sin正弦函数，传递参数是弧度")]),d("td",{attrs:{rowspan:"3"}},[t._v("弧度和角度转换公式：rad=Math.PI*ang/180")])]),d("tr",[d("th",[t._v("11")]),d("td",{attrs:{id:"cos"}},[t._v("cos")]),d("td",[t._v("Math.cos(Math.PI*60/180);")]),d("td",[t._v("0.5000000000000001")]),d("td",[t._v("cos余弦函数，传递参数是弧度")])]),d("tr",[d("th",[t._v("12")]),d("td",{attrs:{id:"tan"}},[t._v("tan")]),d("td",[t._v("Math.tan(Math.PI*45/180);")]),d("td",[t._v("0.9999999999999999")]),d("td",[t._v("tan正弦函数，传递参数是弧度")])]),d("tr",[d("th",[t._v("13")]),d("td",{attrs:{id:"asin"}},[t._v("asin")]),d("td",[t._v("Math.asin(0.5)*180/Math.PI;")]),d("td",[t._v("30.000000000000004")]),d("td",[t._v("arcsin反正弦函数，返回参数是弧度")]),d("td",{attrs:{rowspan:"4"}},[t._v("角度和弧度转换公式：ang=rad*180/Math.PI")])]),d("tr",[d("th",[t._v("14")]),d("td",{attrs:{id:"acos"}},[t._v("acos")]),d("td",[t._v("Math.acos(0.5)*180/Math.PI;")]),d("td",[t._v("60.00000000000001")]),d("td",[t._v("arccos反余弦函数，返回的是弧度")])]),d("tr",[d("th",[t._v("14")]),d("td",{attrs:{id:"atan"}},[t._v("atan")]),d("td",[t._v("Math.atan(1)*180/Math.PI;")]),d("td",[t._v("45")]),d("td",[t._v("arctan反正弦函数，返回的是弧度")])]),d("tr",[d("th",[t._v("15")]),d("td",{attrs:{id:"atan2"}},[t._v("atan2")]),d("td",[t._v("Math.atan2(2,1)*180/Math.PI;")]),d("td",[t._v("63.43494882292201")]),d("td",[t._v("atan2是获取指定坐标点(x,y)与x轴的夹角，返回的是弧度，注意传递的第一个参数是y坐标")])]),d("tr",[d("th",[t._v("16")]),d("td",{attrs:{id:"cbrt"}},[t._v("cbrt")]),d("td",[t._v("Math.cbrt(27);")]),d("td",[t._v("3")]),d("td",[t._v("立方根 "),d("sup",[t._v("3")]),t._v("√"),d("sub",{staticStyle:{position:"relative",left:"-3px"}},[t._v("x")])]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("17")]),d("td",{attrs:{id:"sqrt"}},[t._v("sqrt")]),d("td",[t._v("Math.sqrt(4);")]),d("td",[t._v("2")]),d("td",[t._v("平方根 "),d("sup",[t._v("2")]),t._v("√"),d("sub",{staticStyle:{position:"relative",left:"-3px"}},[t._v("x")])]),d("td")]),d("tr",[d("th",[t._v("18")]),d("td",{attrs:{id:"ceil"}},[t._v("ceil")]),d("td",[t._v("Math.ceil(-1.1);")]),d("td",[t._v("-1")]),d("td",[t._v("向上取整")]),d("td")]),d("tr",[d("th",[t._v("19")]),d("td",{attrs:{id:"floor"}},[t._v("floor")]),d("td",[t._v("Math.floor(-1.1);")]),d("td",[t._v("-2")]),d("td",[t._v("向下取整")]),d("td")]),d("tr",[d("th",[t._v("20")]),d("td",{attrs:{id:"exp"}},[t._v("exp")]),d("td",[t._v("Math.exp(2);")]),d("td",[t._v("7.38905609893065")]),d("td",[t._v("e"),d("sup",[t._v("2")])]),d("td")]),d("tr",[d("th",[t._v("21")]),d("td",{attrs:{id:"expm1"}},[t._v("expm1")]),d("td",[t._v("Math.expm1(2);")]),d("td",[t._v("6.38905609893065")]),d("td",[t._v("e"),d("sup",[t._v("2")]),t._v("-1")]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("22")]),d("td",{attrs:{id:"fround"}},[t._v("fround")]),d("td",[d("pre",[t._v(t._s(t.pres[1]))])]),d("td",[t._v("false"),d("br"),t._v("true")]),d("td",[t._v("将64位浮点数转化成32为浮点数")]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("23")]),d("td",{attrs:{id:"hypot"}},[t._v("hypot")]),d("td",[t._v("Math.hypot(2,3,4)")]),d("td",[t._v("5.385164807134504")]),d("td",[t._v("求n个数的平方和的开方，对于求直角斜边和空间点距离很好用")]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("24")]),d("td",{attrs:{id:"log"}},[t._v("log")]),d("td",[t._v("Math.log(Math.E)")]),d("td",[t._v("1")]),d("td",[t._v("求以自然常数e为底的对数")]),d("td")]),d("tr",[d("th",[t._v("25")]),d("td",{attrs:{id:"log2"}},[t._v("log2")]),d("td",[t._v("Math.log2(4)")]),d("td",[t._v("2")]),d("td",[t._v("求以2为底的对数")]),d("td")]),d("tr",[d("th",[t._v("26")]),d("td",{attrs:{id:"log10"}},[t._v("log10")]),d("td",[t._v("Math.log10(100)")]),d("td",[t._v("2")]),d("td",[t._v("求以10为底的对数")]),d("td")]),d("tr",[d("th",[t._v("27")]),d("td",{attrs:{id:"log1p"}},[t._v("log1p")]),d("td",[t._v("Math.log1p(0)")]),d("td",[t._v("0")]),d("td",[t._v("求ln(1+x)")]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("28")]),d("td",{attrs:{id:"max"}},[t._v("max")]),d("td",[t._v("Math.max(...[5,4,10])")]),d("td",[t._v("10")]),d("td",[t._v("求最大值")]),d("td")]),d("tr",[d("th",[t._v("29")]),d("td",{attrs:{id:"min"}},[t._v("min")]),d("td",[t._v("Math.min(...[5,4,10])")]),d("td",[t._v("4")]),d("td",[t._v("求最小值")]),d("td")]),d("tr",[d("th",[t._v("30")]),d("td",{attrs:{id:"pow"}},[t._v("pow")]),d("td",[t._v("Math.pow(4, 0.5)")]),d("td",[t._v("2")]),d("td",[t._v("求4"),d("sup",[t._v("0.5")])]),d("td")]),d("tr",[d("th",[t._v("31")]),d("td",{attrs:{id:"random"}},[t._v("random")]),d("td",[t._v("Math.random()")]),d("td",[t._v("0.3504484516376549")]),d("td",[t._v("产生0~1的伪随机数")]),d("td")]),d("tr",[d("th",[t._v("32")]),d("td",{attrs:{id:"round"}},[t._v("round")]),d("td",[t._v("Math.round(0.5)")]),d("td",[t._v("1")]),d("td",[t._v("取最接近的整数，如果小数部分是5那么往+∞方向取最接近整数")]),d("td")]),d("tr",[d("th",[t._v("33")]),d("td",{attrs:{id:"trunc"}},[t._v("trunc")]),d("td",[t._v("Math.trunc(-1.234)")]),d("td",[t._v("-1")]),d("td",[t._v("截取整数部分")]),d("td",[t._v("ES6")])]),d("tr",[d("th",[t._v("34")]),d("td",{attrs:{id:"sign"}},[t._v("sign")]),d("td",[t._v("Math.sign(10)"),d("br"),t._v("Math.sign(-10)"),d("br"),t._v("Math.sign(0)"),d("br"),t._v("Math.sign(-0)")]),d("td",[t._v("1"),d("br"),t._v("-1"),d("br"),t._v("0"),d("br"),t._v("-0")]),d("td",[t._v("返回一个数的标记，正数返回1，负数返回-1，0返回0，-0返回-0")]),d("td",[t._v("ES6")])])])])],1)}}])})],1)],1)],1)])],1)},i=[],r=d("fd3f"),v={components:{Blog:r["a"]},data:function(){return{time:"2018-12-20",title:"Math数学运算",items:[{title:"E",target:"#E"},{divider:!0},{title:"LN10",target:"#LN10"},{divider:!0},{title:"LN2",target:"#LN2"},{divider:!0},{title:"LOG10E",target:"#LOG10E"},{divider:!0},{title:"LOG2E",target:"#LOG2E"},{divider:!0},{title:"PI",target:"#PI"},{divider:!0},{title:"SQRT1_2",target:"#SQRT1_2"},{divider:!0},{title:"SQRT2",target:"#SQRT2"},{divider:!0},{title:"abs",target:"#abs"},{divider:!0},{title:"sin",target:"#sin"},{divider:!0},{title:"cos",target:"#cos"},{divider:!0},{title:"tan",target:"#tan"},{divider:!0},{title:"asin",target:"#asin"},{divider:!0},{title:"acos",target:"#acos"},{divider:!0},{title:"atan",target:"#atan"},{divider:!0},{title:"atan2",target:"#atan2"},{divider:!0},{title:"cbrt",target:"#cbrt"},{divider:!0},{title:"sqrt",target:"#sqrt"},{divider:!0},{title:"ceil",target:"#ceil"},{divider:!0},{title:"floor",target:"#floor"},{divider:!0},{title:"exp",target:"#exp"},{divider:!0},{title:"expm1",target:"#expm1"},{divider:!0},{title:"fround",target:"#fround"},{divider:!0},{title:"hypot",target:"#hypot"},{divider:!0},{title:"log",target:"#log"},{divider:!0},{title:"log2",target:"#log2"},{divider:!0},{title:"log10",target:"#log10"},{divider:!0},{title:"log1p",target:"#log1p"},{divider:!0},{title:"max",target:"#max"},{divider:!0},{title:"min",target:"#min"},{divider:!0},{title:"pow",target:"#pow"},{divider:!0},{title:"random",target:"#random"},{divider:!0},{title:"round",target:"#round"},{divider:!0},{title:"trunc",target:"#trunc"},{divider:!0},{title:"sign",target:"#sign"}],pres:['\nMap.prototype.fn = () => {\n    console.log("我是全局方法");\n}\nmp.fn();\n',"\nlet f32 = new Float32Array(1);\nlet f64 = new Float64Array(1);\nf32[0] = 1.1;\nf64[0] = 1.1;\nconsole.log(f32[0] === f64[0];) // false\nconsole.log(f32[0] === Math.fround(f64[0]);) // true\n"]}},mounted:function(){},methods:{}},s=v,n=(d("38e1"),d("2877")),l=d("6544"),_=d.n(l),o=d("b0af"),h=d("99d9"),c=d("12b2"),u=d("a523"),g=d("ce7e"),p=d("0e8f"),f=d("ce87"),m=d("a722"),b=Object(n["a"])(s,e,i,!1,null,null,null);a["default"]=b.exports;_()(b,{VCard:o["a"],VCardText:h["a"],VCardTitle:c["a"],VContainer:u["a"],VDivider:g["a"],VFlex:p["a"],VHover:f["a"],VLayout:m["a"]})},ed62:function(t,a,d){},fd3f:function(t,a,d){"use strict";var e=function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[d("v-layout",{attrs:{wrap:""}},[d("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),d("v-flex",{attrs:{"xs-12":""}},[d("div",{staticClass:"blogbg"},[d("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),d("div",{staticClass:"msg"},[d("p",[t._v("作者：叶家伟")]),d("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},i=[],r=function(){var t=this,a=t.$createElement,d=t._self._c||a;return d("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[d("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[d("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),d("v-card",{staticStyle:{"border-radius":"5px"}},[d("div",{staticClass:"submenuimg"},[d("p",{staticClass:"title"},[t._v("目录")])]),d("v-card-title",{attrs:{"primary-title":""}},[d("div",[d("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),d("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,(function(a,e){return[a.divider?d("v-divider",{key:e}):d("v-list-tile",{key:a.title+"submenu",attrs:{avatar:""},on:{click:function(d){return t.$vuetify.goTo(a.target,t.options)}}},[d("v-list-tile-content",[d("v-list-tile-title",{domProps:{innerHTML:t._s(a.title)}})],1)],1)]}))],2)],1)],1)},v=[],s={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},n=s,l=(d("390a"),d("2877")),_=d("6544"),o=d.n(_),h=d("8336"),c=d("b0af"),u=d("12b2"),g=d("ce7e"),p=d("132d"),f=d("8860"),m=d("ba95"),b=d("5d23"),M=d("e449"),x=Object(l["a"])(n,r,v,!1,null,null,null),y=x.exports;o()(x,{VBtn:h["a"],VCard:c["a"],VCardTitle:u["a"],VDivider:g["a"],VIcon:p["a"],VList:f["a"],VListTile:m["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VMenu:M["a"]});var S={props:["items","time","title"],components:{BlogSubMenu:y}},E=S,L=(d("695d"),d("a523")),w=d("0e8f"),V=d("a722"),T=Object(l["a"])(E,e,i,!1,null,null,null);a["a"]=T.exports;o()(T,{VContainer:L["a"],VFlex:w["a"],VLayout:V["a"]})}}]);
//# sourceMappingURL=Math.efdec59c.js.map