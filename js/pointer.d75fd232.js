(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pointer"],{"70b4":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"pointer","grid-list-md":""}},[n("Blog",{attrs:{items:e.items,time:e.time,title:e.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"Pointer"}},[e._v("拖动具有粘连效果的两个球")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:"body-1"},[e._v("1. 指针事件的兼容设备比鼠标事件多，并且涵盖了鼠标")]),n("p",{staticClass:"body-1"},[e._v("2. 下例实现了拖拽两个具有粘连效果的球，拖动右边的绿色小球看效果")]),n("svg",{staticStyle:{border:"1px solid #ccc"},attrs:{width:"400",height:"400",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("defs",[n("filter",{attrs:{id:"ft"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"15"}}),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  \n                                                        0 1 0 0 0  \n                                                        0 0 1 0 0  \n                                                        0 0 0 18 -7",result:"fcm"}}),n("feBlend",{attrs:{in2:"fcm",in:"SourceGraphic"}})],1)]),n("g",{attrs:{filter:"url(#ft)"}},[n("circle",{attrs:{cx:"60",cy:"60",r:"50",fill:"green"}}),n("circle",{attrs:{id:"movecircle",cx:"200",cy:"60",r:"50",fill:"green"}})])]),n("v-flex",{attrs:{xs12:""}},[n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"js",attrs:{ripple:""}},[e._v("JAVASCRIPT")]),n("v-tab",{key:"html",attrs:{ripple:""}},[e._v("HTML")]),n("v-tab-item",{key:"js"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[0]))])])],1)],1),n("v-tab-item",{key:"html"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[1]))])])],1)],1)],1)],1)],1)],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return n("v-card",{class:"elevation-"+(o?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"mouse"}},[e._v("鼠标事件")])]),n("v-divider"),n("v-card-text",[n("p",{staticClass:"body-1"},[e._v("鼠标事件的用法和指针类似这里就不写例子了")]),n("v-flex",{attrs:{xs12:""}},[n("pre",{staticClass:"code"},[e._v(e._s(e.pres[2]))])])],1)],1)}}])})],1)],1)],1)])],1)},r=[],i=n("fd3f"),l={components:{Blog:i["a"]},data:function(){return{rect:null,time:"2019-5-3",title:"指针事件和鼠标事件实现拖动",items:[{title:"拖动具有粘连效果的两个球",target:"#Pointer"},{divider:!0},{title:"鼠标事件",target:"#mouse"}],pres:["\n    const movecircle = document.getElementById('movecircle');\n    movecircle.onpointerdown = (e) => {\n        movecircle.onpointermove = (e) => {\n            movecircle.style.transform = `translate(${e.clientX-200}px,${e.clientY-60}px)`;\n        }\n        movecircle.setPointerCapture(e.pointerId); // 将box元素设置成指针的捕获目标\n    };\n    movecircle.onpointerup = (e) => {\n        movecircle.onpointermove = null;\n        if (movecircle.hasPointerCapture(e.pointerId)) { // 是否被捕获\n            movecircle.releasePointerCapture(e.pointerId); // 释放捕获\n        }\n    };\n\n    // 指针事件还包括如下事件\n    box.ongotpointercapture = (e) => {\n        // 当调用了setPointerCapture，此事件会触发\n        console.log('捕获到了');\n    };\n    box.onlostpointercapture = (e) => {\n        // 当调用releasePointerCapture，此事件触发\n        console.log('捕获释放了');\n    }\n    box.onpointercancel = (e) => {\n        console.log('取消')\n    };\n    box.onpointerenter = (e) => {\n        console.log('进入')\n    };\n    box.onpointerover = (e) => {\n        console.log('上方')\n    };\n    box.onpointerout = (e) => {\n        console.log('出去')\n    };\n    box.onpointerleave = (e) => {\n        console.log('离开')\n    };\n",'\n    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" version="1.1">\n        <defs>\n            <filter id="ft">\n                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15"></feGaussianBlur>\n                <feColorMatrix\n                    in="blur"\n                    mode="matrix"\n                    values="1 0 0 0 0  \n                            0 1 0 0 0  \n                            0 0 1 0 0  \n                            0 0 0 18 -7"\n                    result="fcm"\n                ></feColorMatrix>\n                <feBlend in2="fcm" in="SourceGraphic"></feBlend>\n            </filter>\n        </defs>\n\n        <g filter="url(#ft)">\n            <circle cx="60" cy="60" r="50" fill="green"></circle>\n            <circle id="movecircle" cx="200" cy="60" r="50" fill="green"></circle>\n        </g>\n    </svg>  \n',"\n    const box = document.getElementById('box');\n    const move = document.getElementById('move');\n    box.onmousedown = () => {\n        box.onmousemove = (e) => {\n            move.style.left = e.clientX - box.offsetLeft - 25 + 'px';\n            move.style.top = e.clientY - box.offsetLeft - 25 + 'px';\n        }\n    }\n    box.onmouseup = (e) => {\n        box.onmousemove = null;\n    }\n    box.onmouseenter = () => {\n        console.log('鼠标进来了');\n    };\n    box.onmouseover = () => {\n        console.log('鼠标在目标上方')\n    };\n    box.onmouseleave = () => {\n        console.log('鼠标离开了');\n    };\n    box.onmouseout = () => {\n        console.log('鼠标出去了')\n    };\n"]}},mounted:function(){var e=document.getElementById("movecircle");e.onpointerdown=function(t){e.onpointermove=function(t){e.style.transform="translate(".concat(t.offsetX-200,"px,").concat(t.offsetY-60,"px)")},e.setPointerCapture(t.pointerId)},e.onpointerup=function(t){e.onpointermove=null,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId)}},methods:{},destroyed:function(){}},s=l,a=(n("c208"),n("2877")),c=n("6544"),v=n.n(c),d=n("b0af"),u=n("99d9"),p=n("12b2"),f=n("a523"),m=n("ce7e"),x=n("0e8f"),g=n("ce87"),b=n("a722"),h=n("71a3"),y=n("c671"),C=n("fe57"),w=Object(a["a"])(s,o,r,!1,null,null,null);t["default"]=w.exports;v()(w,{VCard:d["a"],VCardText:u["a"],VCardTitle:p["a"],VContainer:f["a"],VDivider:m["a"],VFlex:x["a"],VHover:g["a"],VLayout:b["a"],VTab:h["a"],VTabItem:y["a"],VTabs:C["a"]})},a588:function(e,t,n){},c208:function(e,t,n){"use strict";var o=n("a588"),r=n.n(o);r.a}}]);
//# sourceMappingURL=pointer.d75fd232.js.map