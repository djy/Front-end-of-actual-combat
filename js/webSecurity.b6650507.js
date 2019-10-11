(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["webSecurity"],{"390a":function(t,e,i){"use strict";var s=i("ed62"),a=i.n(s);a.a},"695d":function(t,e,i){"use strict";var s=i("b193"),a=i.n(s);a.a},b01a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"webSecurity","grid-list-md":""}},[i("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[i("div",{staticClass:"blogcontent"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{sm12:""}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return i("v-card",{class:"elevation-"+(s?12:2),attrs:{"min-height":"300"}},[i("v-card-title",[i("h3",{attrs:{id:"security"}},[t._v("常见安全问题")])]),i("v-divider"),i("v-card-text",[i("ul",[i("li",[i("p",{staticClass:"subtitle-1"},[i("span",{staticClass:"font-weight-bold"},[t._v("注入式攻击")])]),i("p",{staticClass:"body-2"},[t._v("概念：将用户输入注入到后端数据库的sql语句、shell命令或者操作系统调用，就会出现注入式攻击")]),i("p",{staticClass:"body-2"},[t._v("预防：需要对用户输入做无害化处理，如特殊字符转义")])]),i("li",[i("p",{staticClass:"subtitle-1"},[i("span",{staticClass:"font-weight-bold"},[t._v("Cross-Site Scripting (XSS) 跨站脚本攻击")])]),i("p",{staticClass:"body-2"},[t._v("概念：跨站点脚本攻击(XSS)是一种客户端代码注入攻击。\n                                      攻击者的目的是通过在合法的web程序中包含恶意代码，在受害者的web浏览器中执行恶意脚本。\n                                      恶意脚本可以获取cookies，伪装成用户从而发动CSRF攻击。\n                                      易受XSS攻击的包括论坛、留言板和允许评论的web页面。\n                          ")]),i("p",{staticClass:"body-2"},[t._v("种类：\n                              "),i("ol",[i("li",[t._v("持久型XSS(持久型)：将恶意代码存储到服务器中，如黑客可以通过请求传参的方式将恶意代码上传到网站")]),i("li",[t._v("反射型XSS(非持久型)：通过社会工程等手段诱使用户点击带有恶意代码的链接，这种方法需要用户直接参与")]),i("li",[t._v("基于DOM的XSS：将从服务器中获取的恶意代码直接写入到dom元素中，或者直接使用url参数")])])]),i("p",{staticClass:"body-2"},[t._v("预防：对页面上的用户输入和输出以及服务器传递的数据做无害化处理。设置httponly从而禁止通过js获取cookie")])]),i("li",[i("p",{staticClass:"subtitle-1"},[i("span",{staticClass:"font-weight-bold"},[t._v("Cross Site Request Forgery (CSRF) 跨站请求伪造")])]),i("p",{staticClass:"body-2"},[t._v("概念：用户通过浏览器登陆了正常的网站但是没有注销，然后又浏览了黑客的网站，黑客网站发出请求到用户浏览的正常网站从而允许攻击者伪装用户发起请求")]),i("p",{staticClass:"body-2"},[t._v("预防：\n                              "),i("ol",[i("li",[t._v("在敏感数据请求需要做重新认证的操作")]),i("li",[t._v("如果你不想重新认证可以在请求中包含随机的token，这个token不能使用cookie存储，可以将其保存在隐藏的html标签上")])])])]),i("li",[i("p",{staticClass:"subtitle-1"},[i("span",{staticClass:"font-weight-bold"},[t._v("文件上传漏洞")])]),i("p",{staticClass:"body-2"},[t._v("概念：攻击者上传了一个可执行的文件到服务器并执行，如php，jsp，exe等文件")]),i("p",{staticClass:"body-2"},[t._v("预防：\n                              "),i("ol",[i("li",[t._v("客户端检测：使用js对上传文件检测（文件大小、文件扩展名、文件类型等）")]),i("li",[t._v("服务端检测：\n                                      "),i("ul",[i("li",[t._v("对文件大小、文件路径、文件扩展名、文件类型检测")]),i("li",[t._v("对文件内容检测")]),i("li",[t._v("对文件重命名")])])]),i("li",[t._v("服务器端上传目录设置不可执行权限")]),i("li",[t._v("检查网站的文件解析漏洞（扩展名和文件名的解析异常）和文件包含漏洞（后端语言导入并执行恶意文件）")])])])])])])],1)}}])})],1)],1)],1)])],1)},a=[],l=i("fd3f"),o={components:{Blog:l["a"]},data:function(){return{time:"2019-10-07",title:"web开发常见安全问题",items:[{title:"构造函数模式",target:"#security"},{divider:!0}]}},mounted:function(){},methods:{}},n=o,r=(i("d9ce"),i("2877")),c=i("6544"),d=i.n(c),u=i("b0af"),v=i("99d9"),f=i("12b2"),p=i("a523"),b=i("ce7e"),h=i("0e8f"),_=i("ce87"),m=i("a722"),y=Object(r["a"])(n,s,a,!1,null,null,null);e["default"]=y.exports;d()(y,{VCard:u["a"],VCardText:v["a"],VCardTitle:f["a"],VContainer:p["a"],VDivider:b["a"],VFlex:h["a"],VHover:_["a"],VLayout:m["a"]})},b193:function(t,e,i){},ce87:function(t,e,i){"use strict";var s=i("163b"),a=i("98a1"),l=i("58df"),o=i("d9bd");e["a"]=Object(l["a"])(s["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var t=void 0;return this.$scopedSlots.default?t=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(t=this.$slots.default[0]),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["b"])("v-hover should only contain a single element",this),t)}})},d9ce:function(t,e,i){"use strict";var s=i("f8ef"),a=i.n(s);a.a},ed62:function(t,e,i){},f8ef:function(t,e,i){},fd3f:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{wrap:""}},[i("BlogSubMenu",{attrs:{items:t.items,title:t.title}}),i("v-flex",{attrs:{"xs-12":""}},[i("div",{staticClass:"blogbg"},[i("p",{staticClass:"someword"},[t._v("思绪随时间流逝，逝去的日子不会回来")]),i("div",{staticClass:"msg"},[i("p",[t._v("作者：叶家伟")]),i("p",[t._v("时间："+t._s(t.time))])])]),t._t("default")],2)],1)],1)},a=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[i("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[i("v-icon",{attrs:{dark:"",color:"white"}},[t._v("list")])],1),i("v-card",{staticStyle:{"border-radius":"5px"}},[i("div",{staticClass:"submenuimg"},[i("p",{staticClass:"title"},[t._v("目录")])]),i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))])])]),i("v-list",{staticStyle:{"max-height":"300px",overflow:"auto"}},[t._l(t.items,(function(e,s){return[e.divider?i("v-divider",{key:s}):i("v-list-tile",{key:e.title+"submenu",attrs:{avatar:""},on:{click:function(i){return t.$vuetify.goTo(e.target,t.options)}}},[i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)]}))],2)],1)],1)},o=[],n={props:["items","title"],data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},r=n,c=(i("390a"),i("2877")),d=i("6544"),u=i.n(d),v=i("8336"),f=i("b0af"),p=i("12b2"),b=i("ce7e"),h=i("132d"),_=i("8860"),m=i("ba95"),y=i("5d23"),C=i("e449"),g=Object(c["a"])(r,l,o,!1,null,null,null),S=g.exports;u()(g,{VBtn:v["a"],VCard:f["a"],VCardTitle:p["a"],VDivider:b["a"],VIcon:h["a"],VList:_["a"],VListTile:m["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VMenu:C["a"]});var w={props:["items","time","title"],components:{BlogSubMenu:S}},V=w,x=(i("695d"),i("a523")),k=i("0e8f"),$=i("a722"),j=Object(c["a"])(V,s,a,!1,null,null,null);e["a"]=j.exports;u()(j,{VContainer:x["a"],VFlex:k["a"],VLayout:$["a"]})}}]);
//# sourceMappingURL=webSecurity.b6650507.js.map