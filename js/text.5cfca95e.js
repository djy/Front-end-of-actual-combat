(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["text"],{5698:function(t,e,n){"use strict";var a=n("8375"),r=n.n(a);r.a},8375:function(t,e,n){},e8f0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:"","fill-height":"",id:"text","grid-list-md":""}},[n("Blog",{attrs:{items:t.items,time:t.time,title:t.title}},[n("div",{staticClass:"blogcontent"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"select"}},[t._v("select事件选中文本")])]),n("v-divider"),n("v-card-text",{staticStyle:{position:"relative"}},[n("v-flex",{attrs:{xs12:""}},[n("p",{staticClass:"body-1"},[t._v("select只能用于text输入框和textarea文本域")]),n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"10px"}},[n("textarea",{staticStyle:{border:"1px solid #ccc"},attrs:{cols:"30",rows:"10"}},[t._v("我在好几篇小说中都提到过一座废弃的古园，实际就是地坛。许多年前旅游业还没有开始，园子荒芜冷落得如同一片野地，很少被人记起。")]),n("div",{attrs:{id:"result"}},[n("p",[t._v("选中文本如下：")])])]),n("v-tabs",{attrs:{color:"light-green darken-1",dark:"","slider-color":"yellow"}},[n("v-tab",{key:"js",attrs:{ripple:""}},[t._v("JAVASCRIPT")]),n("v-tab",{key:"html",attrs:{ripple:""}},[t._v("HTML")]),n("v-tab",{key:"css",attrs:{ripple:""}},[t._v("CSS")]),n("v-tab-item",{key:"js"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v(t._s(t.pres[0]))])])],1)],1),n("v-tab-item",{key:"html"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v(t._s(t.pres[1]))])])],1)],1),n("v-tab-item",{key:"css"},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("pre",{staticClass:"code"},[t._v(t._s(t.pres[2]))])])],1)],1)],1)],1)],1)],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"range"}},[t._v("range对象")])]),n("v-divider"),n("v-card-text",{staticStyle:{position:"relative"}},[n("p",{staticClass:"body-1"},[t._v("1. range对象面向于使用js操作页面上的文本")]),n("p",{staticClass:"body-1"},[t._v("2. 一段文本会有一个开始点和结束点，range中会使用这个两个概念来指定偏移量")]),n("p",{staticClass:"body-1"},[t._v("3. 简单使用range")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[3]))]),n("table",[n("colgroup",[n("col",{attrs:{span:"2"}}),n("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}}),n("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}})]),n("tr",[n("td"),n("th",[t._v("属性/方法名")]),n("th",[t._v("示例")]),n("th",[t._v("说明")])]),n("tr",[n("th",[t._v("1")]),n("td",[t._v("collapsed")]),n("td",[t._v("range.collapsed;")]),n("td",[n("div",{staticStyle:{"min-width":"150px"}},[t._v("range的开始点和结束点是否在同一个地方\n                                                "),n("ul",[n("li",[t._v("true表示在")]),n("li",[t._v("false表示不在")])])])])]),n("tr",[n("th",[t._v("2")]),n("td",[t._v("commonAncestorContainer")]),n("td",[t._v("range.commonAncestorContainer;")]),n("td",[t._v("\n                                            返回包含开始点和结束点的公共父节点，如果开始点和结束点相同则返回此节点\n                                        ")])]),n("tr",[n("th",[t._v("3")]),n("td",[t._v("endContainer")]),n("td",[t._v("range.endContainer;")]),n("td",[t._v("\n                                            返回包含结束点的父节点\n                                        ")])]),n("tr",[n("th",[t._v("3")]),n("td",[t._v("endContainer")]),n("td",[t._v("range.endContainer;")]),n("td",[t._v("\n                                            返回包含结束点的父节点\n                                        ")])]),n("tr",[n("th",[t._v("4")]),n("td",[t._v("startContainer")]),n("td",[t._v("range.startContainer;")]),n("td",[t._v("\n                                            返回包含开始点的父节点\n                                        ")])]),n("tr",[n("th",[t._v("5")]),n("td",[t._v("endOffset")]),n("td",[t._v("range.endOffset;")]),n("td",[t._v("\n                                            返回结束点偏移量\n                                        ")])]),n("tr",[n("th",[t._v("6")]),n("td",[t._v("startOffset")]),n("td",[t._v("range.startOffset;")]),n("td",[t._v("\n                                            返回开始点偏移量\n                                        ")])]),n("tr",[n("th",[t._v("7")]),n("td",[t._v("cloneContents")]),n("td",[t._v("range.cloneContents();")]),n("td",[t._v("\n                                            复制range中的内容，包含开始点和结束点所在元素并且返回一个DocumentFragment\n                                        ")])]),n("tr",[n("th",[t._v("8")]),n("td",[t._v("cloneRange")]),n("td",[t._v("range.cloneRange();")]),n("td",[t._v("\n                                            复制range对象\n                                        ")])]),n("tr",[n("th",[t._v("9")]),n("td",[t._v("collapse")]),n("td",[t._v("range.collapse(false);")]),n("td",[t._v("\n                                            将开始点移到结束点所在位置，true表示将结束点移到开始点\n                                        ")])]),n("tr",[n("th",[t._v("10")]),n("td",[t._v("createContextualFragment")]),n("td",[t._v('range.createContextualFragment("<div>I am a div node</div>");')]),n("td",[t._v("\n                                            根据传入的html字符串创建DocumentFragment对象\n                                        ")])]),n("tr",[n("th",[t._v("11")]),n("td",[t._v("deleteContents")]),n("td",[t._v("range.deleteContents();")]),n("td",[t._v("\n                                            删除开始点和结束点之前的内容并且开始点和结束点collapsed\n                                        ")])]),n("tr",[n("th",[t._v("12")]),n("td",[t._v("extractContents")]),n("td",[t._v("range.extractContents();")]),n("td",[t._v("\n                                            提取开始点和结束点之间的内容并且返回一个DocumentFragment对象\n                                        ")])]),n("tr",[n("th",[t._v("13")]),n("td",[t._v("insertNode")]),n("td",[t._v('range.insertNode(document.createTextNode("插入文本"));')]),n("td",[t._v("\n                                            根据开始点为分隔点将原来的节点分开并且将新的节点插进去\n                                        ")])]),n("tr",[n("th",[t._v("14")]),n("td",[t._v("intersectsNode")]),n("td",[t._v("range.intersectsNode(p);")]),n("td",[t._v("\n                                            判断传入的节点是否和range有重叠\n                                        ")])]),n("tr",[n("th",[t._v("15")]),n("td",[t._v("isPointInRange")]),n("td",[t._v("range.isPointInRange(p, 1);")]),n("td",[t._v("\n                                            判断传入节点的指定偏移点是否在range内，参数二表示偏移量\n                                        ")])]),n("tr",[n("th",[t._v("16")]),n("td",[t._v("setEnd")]),n("td",[t._v("range.setEnd(p, 2);")]),n("td",[t._v("\n                                            设置结束点，参数二表示偏移量\n                                        ")])]),n("tr",[n("th",[t._v("17")]),n("td",[t._v("setEndAfter")]),n("td",[t._v("range.setEndAfter(p);")]),n("td",[t._v("\n                                            将传入节点的结尾设置为结束点\n                                        ")])]),n("tr",[n("th",[t._v("18")]),n("td",[t._v("setEndBefore")]),n("td",[t._v("range.setEndBefore(p);")]),n("td",[t._v("\n                                            设置传入节点的开头设置为结束点\n                                        ")])]),n("tr",[n("th",[t._v("19")]),n("td",[t._v("setStart")]),n("td",[t._v("range.setStart(p, 0);")]),n("td",[t._v("\n                                            设置开始点，参数二表示偏移量\n                                        ")])]),n("tr",[n("th",[t._v("20")]),n("td",[t._v("setStartAfter")]),n("td",[t._v("range.setStartAfter(p);")]),n("td",[t._v("\n                                            将传入节点的结尾设置为开始点\n                                        ")])]),n("tr",[n("th",[t._v("21")]),n("td",[t._v("setStartBefore")]),n("td",[t._v("range.setStartBefore(p);")]),n("td",[t._v("\n                                            设置传入节点的开头设置为开始点\n                                        ")])]),n("tr",[n("th",[t._v("22")]),n("td",[t._v("toString")]),n("td",[t._v("range.toString();")]),n("td",[t._v("\n                                            返回range中的文本\n                                        ")])]),n("tr",[n("th",[t._v("23")]),n("td",[t._v("selectNode")]),n("td",[t._v("range.selectNode(p);")]),n("td",[t._v("\n                                            将传入的节点包含在range中，传入节点的父节点和startContainer，endContainer一样\n                                        ")])]),n("tr",[n("th",[t._v("24")]),n("td",[t._v("selectNodeContents")]),n("td",[t._v("range.selectNodeContents(p);")]),n("td",[t._v("\n                                            将传入的节点的子节点包含在range中，传入的节点和startContainer，endContainer一样\n                                        ")])]),n("tr",[n("th",[t._v("25")]),n("td",[t._v("surroundContents")]),n("td",[t._v("range.surroundContents(p);")]),n("td",[t._v("\n                                            将range中的内容提取出来，并且使用传入的节点包裹\n                                            "),n("ul",[n("li",[t._v("开始点和结束点必须处在同一个节点的文本中")]),n("li",[t._v("传入的节点不能是开始点和结束点所在的节点本身")]),n("li",[t._v("如果传入的节点在页面上，则会删除")])])])]),n("tr",[n("th",[t._v("26")]),n("td",[t._v("compareBoundaryPoints")]),n("td",[t._v("range.compareBoundaryPoints(Range.END_TO_START, range1);")]),n("td",[t._v("\n                                            比较两个range边界点（开始点和结束点）的前后顺序\n                                            "),n("ul",[n("li",[t._v("-1 表示 range在range1之前")]),n("li",[t._v("0 表示 range和range1相等")]),n("li",[t._v("1 表示 range在range1之后")])]),t._v("\n                                            其中Range的比较方式如下\n                                            "),n("ul",[n("li",[t._v("Range.END_TO_END 比较两个range的结束点")]),n("li",[t._v("Range.END_TO_START 比较 range1的结束点和range的开始点")]),n("li",[t._v("Range.START_TO_END 比较 range1的开始点和range的结束点")]),n("li",[t._v("Range.START_TO_START 比较连个range的开始点")])])])]),n("tr",[n("th",[t._v("27")]),n("td",[t._v("comparePoint")]),n("td",[t._v("range.comparePoint(p, 2);")]),n("td",[t._v("\n                                            比较传入节点的偏移点，是否在range前，中或者后\n                                            "),n("ul",[n("li",[t._v("-1 表示 在range前")]),n("li",[t._v("0 表示 在range内")]),n("li",[t._v("1 表示 在range后")])])])]),n("tr",[n("th",[t._v("28")]),n("td",[t._v("getBoundingClientRect")]),n("td",[t._v("range.getBoundingClientRect();")]),n("td",[t._v("\n                                            获取range的坐标和宽高度等数据对象\n                                        ")])])])])],1)}}])})],1),n("v-flex",{attrs:{xs12:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{class:"elevation-"+(a?12:2),attrs:{"min-height":"200"}},[n("v-card-title",[n("h3",{attrs:{id:"selection"}},[t._v("selection对象")])]),n("v-divider"),n("v-card-text",{staticStyle:{position:"relative"}},[n("p",{staticClass:"body-1"},[t._v("1. selection对象面向于用户选中文本，然后开发人员对用户的行为做反馈")]),n("p",{staticClass:"body-1"},[t._v("2. range和selection之前可以相互转化")]),n("p",{staticClass:"body-1"},[t._v("3. 获取用户选择的文本")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[4]))]),n("p",{staticClass:"body-1"},[t._v("4. 监听复制和剪切事件，对用户复制的数据做修改")]),n("pre",{staticClass:"code"},[t._v(t._s(t.pres[5]))]),n("p",{staticClass:"body-1"},[t._v("5. selection的常用属性和方法如下")]),n("table",[n("colgroup",[n("col",{attrs:{span:"2"}}),n("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}}),n("col",{staticStyle:{"min-width":"200px"},attrs:{span:"1"}})]),n("tr",[n("td"),n("th",[t._v("属性/方法名")]),n("th",[t._v("示例")]),n("th",[t._v("说明")])]),n("tr",[n("th",[t._v("1")]),n("td",[t._v("anchorNode")]),n("td",[t._v("selection.anchorNode;")]),n("td",[n("div",{staticStyle:{"min-width":"150px"}},[t._v("\n                                                获取开始点所在的节点\n                                            ")])])]),n("tr",[n("th",[t._v("2")]),n("td",[t._v("anchorOffset")]),n("td",[t._v("selection.anchorOffset;")]),n("td",[t._v("开始点的偏移量")])]),n("tr",[n("th",[t._v("3")]),n("td",[t._v("focusNode")]),n("td",[t._v("selection.focusNode;")]),n("td",[t._v("结束点所在的节点")])]),n("tr",[n("th",[t._v("4")]),n("td",[t._v("focusOffset")]),n("td",[t._v("selection.focusOffset;")]),n("td",[t._v("结束点的偏移量")])]),n("tr",[n("th",[t._v("5")]),n("td",[t._v("isCollapsed")]),n("td",[t._v("selection.isCollapsed;")]),n("td",[t._v("开始点和结束点是否重叠，true表示重叠")])]),n("tr",[n("th",[t._v("6")]),n("td",[t._v("type")]),n("td",[t._v("selection.type;")]),n("td",[t._v("当前用户选择行为的类型\n                                            "),n("ul",[n("li",[t._v("None 没有做选择的操作")]),n("li",[t._v("Caret 开始点和结束点一样，也就是啥都没选")]),n("li",[t._v("Range 选了文本")])])])]),n("tr",[n("th",[t._v("7")]),n("td",[t._v("addRange")]),n("td",[t._v("selection.addRange(range);")]),n("td",[t._v("将range转化成selection，页面显示为选中range中的文本")])]),n("tr",[n("th",{attrs:{rowspan:"2"}},[t._v("8")]),n("td",{attrs:{rowspan:"2"}},[t._v("collapse")]),n("td",[t._v("selection.collapse(null);")]),n("td",[t._v("清空开始点和结束点，没有任何文本被选中")])]),n("tr",[n("td",[t._v("selection.collapse(p, 1);")]),n("td",[t._v("将开始点和结束点移动到传入的指定节点的偏移位，并会有插入符在此处显示（如果文本可编辑）")])]),n("tr",[n("th",[t._v("9")]),n("td",[t._v("collapseToEnd")]),n("td",[t._v("selection.collapseToEnd();")]),n("td",[t._v("将开始点移动到结束点所在的位置")])]),n("tr",[n("th",[t._v("10")]),n("td",[t._v("collapseToStart")]),n("td",[t._v("selection.collapseToStart();")]),n("td",[t._v("将结束点移动到开始点的位置")])]),n("tr",[n("th",{attrs:{rowspan:"2"}},[t._v("11")]),n("td",{attrs:{rowspan:"2"}},[t._v("containsNode")]),n("td",[t._v("selection.containsNode(p);")]),n("td",[t._v("传入的节点是否在selection中")])]),n("tr",[n("td",[t._v("selection.containsNode(p, true);")]),n("td",[t._v("传入节点的一部分是否在selection中")])]),n("tr",[n("th",[t._v("12")]),n("td",[t._v("deleteFromDocument")]),n("td",[t._v("selection.deleteFromDocument();")]),n("td",[t._v("将选中的文本删除")])]),n("tr",[n("th",[t._v("13")]),n("td",[t._v("extend")]),n("td",[t._v("selection.extend(p, 3);")]),n("td",[t._v("将结束点移动到指定节点的偏移位")])]),n("tr",[n("th",[t._v("14")]),n("td",[t._v("removeAllRanges")]),n("td",[t._v("selection.removeAllRanges();")]),n("td",[t._v("移除所有range")])]),n("tr",[n("th",[t._v("15")]),n("td",[t._v("removeRange")]),n("td",[t._v("selection.removeRange(range);")]),n("td",[t._v("移除传入的range")])]),n("tr",[n("th",[t._v("16")]),n("td",[t._v("selectAllChildren")]),n("td",[t._v("selection.selectAllChildren(box);")]),n("td",[t._v("将传入节点的子节点添加到selection中")])]),n("tr",[n("th",[t._v("17")]),n("td",[t._v("setBaseAndExtent")]),n("td",[t._v("selection.setBaseAndExtent(p.firstChild, 0, p.lastChild, 2);")]),n("td",[t._v("设置开始点和结束点的位置，参数一和参数二表示开始点的所在节点和偏移量，参数三和参数四表示结束点的")])]),n("tr",[n("th",[t._v("18")]),n("td",[t._v("toString")]),n("td",[t._v("selection.toString();")]),n("td",[t._v("获取选中文本")])]),n("tr",[n("th",[t._v("19")]),n("td",[t._v("getRangeAt")]),n("td",[t._v("selection.getRangeAt(0);")]),n("td",[t._v("将selection转化成range")])])])])],1)}}])})],1)],1)],1)])],1)},r=[],s=n("fd3f"),d={components:{Blog:s["a"]},data:function(){return{rect:null,time:"2019-6-20",title:"操作文本",items:[{title:"select事件选中文本",target:"#select"},{divider:!0},{title:"range对象",target:"#range"},{divider:!0},{title:"selection对象",target:"#selection"}],pres:["\n    const input = document.querySelector('textarea');\n    const res = document.querySelector(\"#result\");\n    input.onselect = e => {\n        res.removeChild(res.lastChild);\n        res.appendChild(\n            document.createTextNode(\n                event.target.value.substring(\n                    event.target.selectionStart,    // 选中文本开始位置\n                    event.target.selectionEnd       // 选中文本结束位置\n                )\n            )\n        );\n    }\n\n    // 使用activeElement获取焦点元素，一样可以实现相同的效果\n    // document.onmouseup = () => {\n    //     const focus = document.activeElement;\n    //     console.log(focus.value.substring(focus.selectionStart, focus.selectionEnd));\n    // };\n",'\n    <div>\n        <textarea cols="30" rows="10">我在好几篇小说中都提到过一座废弃的古园，实际就是地坛。许多年前旅游业还没有开始，园子荒芜冷落得如同一片野地，很少被人记起。</textarea>\n        <div id="result">\n            <p>选中文本如下：</p>\n        </div>\n    </div>\n',"\n    textarea{\n        float: left;\n    }\n    #result{\n        float: left;\n        width: 200px;\n        height: 200px;\n        background-color: aliceblue;\n        margin-left: 15px;\n        font-size: 12px;\n        color: darkgray;\n        padding: 10px;\n        box-sizing: border-box;\n        overflow: auto;\n    }\n","\n    const range = new Range();\n    const p = document.querySelector('p');\n    range.setStart(p.firstElementChild.firstChild, 2);  // 设置开始点，传入的第二个参数表示开始点在指定元素中的偏移量\n                                                        // 如果第一个参数是文本节点，那么偏移量表示偏移的字符个数\n                                                        // 如果第一个参数是元素节点，那么偏移量表示偏移的元素个数\n\n    range.setEnd(p.lastElementChild.firstChild, 2);     // 设置结束点\n    console.log(range.toString());                      // 获取选中的文本    \n","\n    // 获取selection对象\n    let selection = document.getSelection(); \n    const box = document.getElementById('box');\n    \n    document.onselectstart = function() {\n        // 在每次开始选文本的时候触发，比onselectionchange触发早\n    };\n    document.onselectionchange = function() {\n        // 当用户选择文本时候不断触发\n        selection = document.getSelection();\n    };\n    box.onmouseup = () => {\n        // 获取选中文本\n        console.log(selection.toString()); \n\n        // 执行复制命令，文本复制到剪贴板，此时使用 ctrl + v 键得到选中的文本\n        document.execCommand('copy'); \n    };\n\n    // selection.selectAllChildren(box); // 传入一个元素表示全选元素的全部文本\n","\n    // 复制事件\n    box.addEventListener('copy', (event) => {\n        const selection = document.getSelection();\n\n        // 修改复制的数据\n        event.clipboardData.setData('text/plain', \"----\" + selection.toString() + \"----\");\n        event.preventDefault();\n    });\n\n    // 粘贴事件paste 和 剪切事件cut 使用方式和上面雷同不再赘述\n    document.addEventListener('paste', (e) => {\n        console.log(e);\n    });\n"]}},mounted:function(){var t=document.querySelector("textarea"),e=document.querySelector("#result");t.onselect=function(t){e.removeChild(e.lastChild),e.appendChild(document.createTextNode(event.target.value.substring(event.target.selectionStart,event.target.selectionEnd)))}},methods:{},destroyed:function(){}},o=d,v=(n("5698"),n("2877")),l=n("6544"),i=n.n(l),c=n("b0af"),_=n("99d9"),g=n("12b2"),p=n("a523"),u=n("ce7e"),h=n("0e8f"),m=n("ce87"),f=n("a722"),C=n("71a3"),x=n("c671"),S=n("fe57"),y=Object(v["a"])(o,a,r,!1,null,null,null);e["default"]=y.exports;i()(y,{VCard:c["a"],VCardText:_["a"],VCardTitle:g["a"],VContainer:p["a"],VDivider:u["a"],VFlex:h["a"],VHover:m["a"],VLayout:f["a"],VTab:C["a"],VTabItem:x["a"],VTabs:S["a"]})}}]);
//# sourceMappingURL=text.5cfca95e.js.map