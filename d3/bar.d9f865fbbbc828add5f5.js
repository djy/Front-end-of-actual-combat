(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bar"],{

/***/ "hvxR":
/*!***************************!*\
  !*** ./src/bar/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "sARE");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "sARE", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "sARE");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "sARE":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/bar/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".chart {\n    background:rgba(37,39,46,1);\n}\n\n.chart text {\n    fill: white;\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\n.chart .axis text {\n    font: 10px sans-serif;\n}\n\n.chart .axis path, .chart .axis line {\n    fill: none;\n    stroke: white;\n    shape-rendering: crispEdges;\n}\n\n.node {\n    fill: none;\n    stroke: none;\n    /* stroke: #ccc;\n    shape-rendering: crispEdges; */\n}\n\n.point--selected {\n    fill: red;\n    fill-opacity: 1;\n    stroke: red;\n    stroke-width: 5px;\n}\n\n.chart .title, .chart .content {\n    text-anchor: middle;\n    text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;\n}", ""]);


/***/ }),

/***/ "vIa5":
/*!**************************!*\
  !*** ./src/bar/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "hvxR");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


document.body.innerHTML = '';
const config = {
    chartWidth: 600,
    chartHeight: 300,
    chartMarginL: 50,
    chartMarginR: 50,
    chartMarginT: 50,
    chartMarginB: 50,
};
const lineChart = (Config, ChartData, XData) => {
    const color = d3__WEBPACK_IMPORTED_MODULE_0__["hsl"]('#fea');
    const svg = generateSvg();
    const x = generateX();
    const y = generateY();
    configX();
    configY();
    const rects = generateRects();
    const tooltip = tooltipInfo();
    handleInteractive();
    // 配置svg
    function generateSvg() {
        return d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body')
            .append('svg')
            .attr('fill', 'none')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('class', 'chart')
            .style('width', Config.chartWidth)
            .style('height', Config.chartHeight);
    }
    // 生成x轴配置
    function generateX() {
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, XData.length])
            .range([0, Config.chartWidth - Config.chartMarginR - Config.chartMarginL]);
    }
    // 生成y轴配置
    function generateY() {
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 1.1 * d3__WEBPACK_IMPORTED_MODULE_0__["max"](ChartData, (d) => d.value)]) // 适当做个缩放，让图看起来更自然
            .range([Config.chartHeight - Config.chartMarginT - Config.chartMarginB, 0]);
    }
    // 配置x轴
    function configX() {
        const xg = svg
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(${Config.chartMarginL}, ${Config.chartHeight - Config.chartMarginB})`);
        d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x)
            .ticks(5)
            .tickSize(0)
            .tickPadding(8)
            .tickFormat(((d) => {
            return XData[d];
        }))(xg);
        xg.selectAll('.tick text').attr('dx', 40);
    }
    // 配置y轴
    function configY() {
        const formate = d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.' + d3__WEBPACK_IMPORTED_MODULE_0__["precisionFixed"](0.1) + 'f');
        const yg = svg
            .append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${Config.chartMarginT}, ${Config.chartMarginL})`);
        d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](y)
            .ticks(10, formate)
            .tickSizeInner(Config.chartWidth - Config.chartMarginR - Config.chartMarginL)
            .tickPadding(8)(yg);
        // 移除y轴的竖线
        yg.select('.domain').remove();
        // 对y轴tick中的line设置线的样式
        yg.selectAll('.tick:not(:first-of-type) line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2');
        // 设置y轴的文字的位置
        yg.selectAll('.tick text').attr('x', -2).attr('dy', -4);
    }
    // 生成柱状矩形图
    function generateRects() {
        // 绘制柱状矩形
        // let dynamicColor: string = '';
        return svg.append('g')
            .selectAll('rect')
            .data(ChartData)
            .enter()
            .append('rect')
            .style('fill', color.toString())
            .attr('x', (d, i) => Config.chartMarginL + x(i))
            .attr('y', (d) => Config.chartMarginT + y(d.value))
            .attr('height', (d) => Config.chartHeight - Config.chartMarginT - Config.chartMarginB - y(d.value))
            .attr('width', (d) => x(1) - 1);
        // .on('mouseover', function(data) {
        //     if (this.style.fill) { dynamicColor = this.style.fill; }
        //     d3.select(this).style('fill', '#3c763d');
        // })
        // .on('mouseout', function(data) {
        //     d3.select(this).style('fill', dynamicColor);
        // });
    }
    // 处理提示信息
    function tooltipInfo() {
        const tt = svg.append('g')
            .attr('transform', 'translate(-100,-100)')
            .attr('class', 'focus');
        tt.append('text')
            .attr('class', 'title')
            .attr('y', -20);
        tt.append('text')
            .attr('class', 'content')
            .attr('y', -10);
        return tt;
    }
    // 处理交互操作
    function handleInteractive() {
        // 我们采用的是quadtree，这是d3内置的算法，用来获取鼠标最近点
        const rectPoint = [];
        ChartData.map((d, i) => {
            // 这一步是，获取每一个矩形图的顶边的中点坐标
            // 至于为啥获取中点，这是本人自己多次尝试，发现这个点算出来的结果会使交互起来更自然
            rectPoint.push([Config.chartMarginL + x(i) + (x(1) - 1) / 2, Config.chartMarginT + y(d.value)]);
        });
        const quadtree = d3__WEBPACK_IMPORTED_MODULE_0__["quadtree"]()
            .extent([[Config.chartMarginL, Config.chartMarginT], [Config.chartWidth - Config.chartMarginL, Config.chartHeight - Config.chartMarginB]])
            .addAll(rectPoint);
        // 通过quadtree计算出每一个中点的的上界和下界
        const nodes = [];
        quadtree.visit((node, x0, y0, x1, y1) => {
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
            nodes.push(node);
        });
        // 将计算出的数据，在svg中绘制成虚拟的rect
        svg.selectAll('.node')
            .data(nodes)
            .enter()
            .append('rect')
            .attr('class', 'node')
            .attr('x', (d) => d.x0)
            .attr('y', (d) => d.y0)
            .attr('width', (d) => d.y1 - d.y0)
            .attr('height', (d) => d.x1 - d.x0);
        // 监听鼠标移动事件
        svg.on('mousemove', function () {
            // mouse可以直接获取鼠标当前坐标
            const m = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            // 通过quadtree直接找到鼠标坐标对应的原始中点坐标
            const p = quadtree.find(m[0], m[1]);
            rects.style('fill', (d, i) => {
                if (
                // 对比中点坐标
                (Config.chartMarginL + x(i) + (x(1) - 1) / 2) === p[0] &&
                    (Config.chartMarginT + y(d.value)) === p[1]) {
                    tooltip
                        .transition()
                        .duration(200)
                        .ease(d3__WEBPACK_IMPORTED_MODULE_0__["easeLinear"])
                        .attr('transform', `translate(${Config.chartMarginL + x(i) + (x(1) - 1) / 2}, ${Config.chartMarginT + y(d.value)})`);
                    tooltip
                        .select('text.title')
                        .text('充电方式偏好人群');
                    tooltip
                        .select('text.content')
                        .text(d.key + ': ' + d.value + '人');
                    return color.brighter(0.7).toString();
                }
                else {
                    return color.toString();
                }
            });
        });
    }
};
// 这个图是我根据实际业务场景，模拟的数据处理逻辑，和d3图无关
const generateKey = (item) => {
    let key = '';
    switch (item.split('-')[1]) {
        case '0':
            key = '电充90';
            break;
        case '10':
            key = '电充80';
            break;
        case '20':
            key = '电充70';
            break;
        case '30':
            key = '电充60';
            break;
        case '40':
            key = '电充50';
            break;
        case '50':
            key = '车充50';
            break;
        case '60':
            key = '车充60';
            break;
        case '70':
            key = '车充70';
            break;
        case '80':
            key = '车充80';
            break;
        case '90':
            key = '车充90';
            break;
    }
    return key;
};
d3__WEBPACK_IMPORTED_MODULE_0__["json"]('./static/bar.json').then((data) => {
    // 这部分逻辑是实际业务处理的逻辑，和d3图无关
    const d = [];
    const xData = [];
    for (const key in data.list) {
        if (data.list.hasOwnProperty(key)) {
            const element = data.list[key];
            const tmpKey = generateKey(key);
            d.push({
                key: generateKey(key),
                value: Number(element),
            });
            xData.push(tmpKey);
        }
    }
    // 你只需要关注处理后的最终结果
    // 绘制图的主逻辑
    lineChart(config, d, xData);
});
/* harmony default export */ __webpack_exports__["default"] = ({});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFyL2luZGV4LmNzcz85MzE5Iiwid2VicGFjazovLy8uL3NyYy9iYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvRUFBeUQ7O0FBRS9FLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixvRUFBeUQ7QUFDNUUsbUJBQW1CLG1CQUFPLENBQUMsb0VBQXlEOztBQUVwRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7QUM1Q0EsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLFdBQVcsa0NBQWtDLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLDBDQUEwQyxpQkFBaUIsb0JBQW9CLGtDQUFrQyxHQUFHLFdBQVcsaUJBQWlCLG1CQUFtQixzQkFBc0Isa0NBQWtDLE1BQU0sc0JBQXNCLGdCQUFnQixzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLG9DQUFvQywwQkFBMEIsNEVBQTRFLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGN3FCO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0o7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBbUI3QixNQUFNLE1BQU0sR0FBZTtJQUN2QixVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBRSxHQUFHO0lBQ2hC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QUM7SUFDM0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSCxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDekIsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QjtLQUNKO0lBQ0QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVZLGlFQUFFLEVBQUMiLCJmaWxlIjoiYmFyLmQ5Zjg2NWZiYmJjODI4YWRkNWY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhcnQge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMzcsMzksNDYsMSk7XFxufVxcblxcbi5jaGFydCB0ZXh0IHtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbmNob3I6IGVuZDtcXG59XFxuXFxuLmNoYXJ0IC5heGlzIHRleHQge1xcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XFxufVxcblxcbi5jaGFydCAuYXhpcyBwYXRoLCAuY2hhcnQgLmF4aXMgbGluZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59XFxuXFxuLm5vZGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IG5vbmU7XFxuICAgIC8qIHN0cm9rZTogI2NjYztcXG4gICAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyAqL1xcbn1cXG5cXG4ucG9pbnQtLXNlbGVjdGVkIHtcXG4gICAgZmlsbDogcmVkO1xcbiAgICBmaWxsLW9wYWNpdHk6IDE7XFxuICAgIHN0cm9rZTogcmVkO1xcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcXG59XFxuXFxuLmNoYXJ0IC50aXRsZSwgLmNoYXJ0IC5jb250ZW50IHtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiwgMXB4IDAgMCAjZmZmLCAwIC0xcHggMCAjZmZmLCAtMXB4IDAgMCAjZmZmO1xcbn1cIiwgXCJcIl0pO1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgbGlzdDoge1xuICAgICAgICBbcHJvcE5hbWU6IHN0cmluZ106IHN0cmluZyxcbiAgICB9O1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgTGluZUNvbmZpZyB7XG4gICAgY2hhcnRXaWR0aDogbnVtYmVyO1xuICAgIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gICAgY2hhcnRNYXJnaW5MOiBudW1iZXI7XG4gICAgY2hhcnRNYXJnaW5SOiBudW1iZXI7XG4gICAgY2hhcnRNYXJnaW5UOiBudW1iZXI7XG4gICAgY2hhcnRNYXJnaW5COiBudW1iZXI7XG59XG5cbmNvbnN0IGNvbmZpZzogTGluZUNvbmZpZyA9IHtcbiAgICBjaGFydFdpZHRoOiA2MDAsXG4gICAgY2hhcnRIZWlnaHQ6IDMwMCxcbiAgICBjaGFydE1hcmdpbkw6IDUwLFxuICAgIGNoYXJ0TWFyZ2luUjogNTAsXG4gICAgY2hhcnRNYXJnaW5UOiA1MCxcbiAgICBjaGFydE1hcmdpbkI6IDUwLFxufTtcblxuY29uc3QgbGluZUNoYXJ0ID0gKENvbmZpZzogTGluZUNvbmZpZywgQ2hhcnREYXRhOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+LCBYRGF0YTogc3RyaW5nW10pID0+IHtcbiAgICBjb25zdCBjb2xvciA9IGQzLmhzbCgnI2ZlYScpO1xuICAgIGNvbnN0IHN2ZyA9IGdlbmVyYXRlU3ZnKCk7XG4gICAgY29uc3QgeCA9IGdlbmVyYXRlWCgpO1xuICAgIGNvbnN0IHkgPSBnZW5lcmF0ZVkoKTtcbiAgICBjb25maWdYKCk7XG4gICAgY29uZmlnWSgpO1xuICAgIGNvbnN0IHJlY3RzID0gZ2VuZXJhdGVSZWN0cygpO1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0b29sdGlwSW5mbygpO1xuICAgIGhhbmRsZUludGVyYWN0aXZlKCk7XG4gICAgXG4gICAgLy8g6YWN572uc3ZnXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTdmcoKSB7XG4gICAgICAgIHJldHVybiBkMy5zZWxlY3QoJ2JvZHknKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBDb25maWcuY2hhcnRXaWR0aClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgQ29uZmlnLmNoYXJ0SGVpZ2h0KTtcbiAgICB9XG4gICAgLy8g55Sf5oiQeOi9tOmFjee9rlxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlWCgpIHtcbiAgICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIFhEYXRhLmxlbmd0aF0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIENvbmZpZy5jaGFydFdpZHRoIC0gQ29uZmlnLmNoYXJ0TWFyZ2luUiAtIENvbmZpZy5jaGFydE1hcmdpbkxdKTtcbiAgICB9XG4gICAgLy8g55Sf5oiQeei9tOmFjee9rlxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlWSgpIHtcbiAgICAgICAgcmV0dXJuIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIDEuMSAqIChkMy5tYXgoQ2hhcnREYXRhLCAoZCkgPT4gZC52YWx1ZSkgYXMgYW55KV0pIC8vIOmAguW9k+WBmuS4que8qeaUvu+8jOiuqeWbvueci+i1t+adpeabtOiHqueEtlxuICAgICAgICAgICAgLnJhbmdlKFtDb25maWcuY2hhcnRIZWlnaHQgLSBDb25maWcuY2hhcnRNYXJnaW5UIC0gQ29uZmlnLmNoYXJ0TWFyZ2luQiwgMF0pXG4gICAgfVxuICAgIC8vIOmFjee9rnjovbRcbiAgICBmdW5jdGlvbiBjb25maWdYKCkge1xuICAgICAgICBjb25zdCB4ZyA9IHN2Z1xuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneCBheGlzJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Q29uZmlnLmNoYXJ0TWFyZ2luTH0sICR7Q29uZmlnLmNoYXJ0SGVpZ2h0IC0gQ29uZmlnLmNoYXJ0TWFyZ2luQn0pYCk7XG4gICAgICAgIGQzLmF4aXNCb3R0b20oeClcbiAgICAgICAgICAgIC50aWNrcyg1KVxuICAgICAgICAgICAgLnRpY2tTaXplKDApXG4gICAgICAgICAgICAudGlja1BhZGRpbmcoOClcbiAgICAgICAgICAgIC50aWNrRm9ybWF0KCgoZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFhEYXRhW2RdO1xuICAgICAgICAgICAgfSkgYXMgYW55KSh4Zyk7XG4gICAgICAgIHhnLnNlbGVjdEFsbCgnLnRpY2sgdGV4dCcpLmF0dHIoJ2R4JywgNDApO1xuICAgIH1cbiAgICAvLyDphY3nva556L20XG4gICAgZnVuY3Rpb24gY29uZmlnWSgpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0ZSA9IGQzLmZvcm1hdCgnLicgKyBkMy5wcmVjaXNpb25GaXhlZCgwLjEpICsgJ2YnKTtcbiAgICAgICAgY29uc3QgeWcgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke0NvbmZpZy5jaGFydE1hcmdpblR9LCAke0NvbmZpZy5jaGFydE1hcmdpbkx9KWApO1xuXG4gICAgICAgIGQzLmF4aXNSaWdodCh5KVxuICAgICAgICAgICAgLnRpY2tzKDEwLCBmb3JtYXRlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoQ29uZmlnLmNoYXJ0V2lkdGggLSBDb25maWcuY2hhcnRNYXJnaW5SIC0gQ29uZmlnLmNoYXJ0TWFyZ2luTClcbiAgICAgICAgICAgIC50aWNrUGFkZGluZyg4KSh5Zyk7XG5cbiAgICAgICAgLy8g56e76Zmkeei9tOeahOerlue6v1xuICAgICAgICB5Zy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKTtcbiAgICAgICAgLy8g5a+5eei9tHRpY2vkuK3nmoRsaW5l6K6+572u57q/55qE5qC35byPXG4gICAgICAgIHlnLnNlbGVjdEFsbCgnLnRpY2s6bm90KDpmaXJzdC1vZi10eXBlKSBsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgJzIsMicpO1xuICAgICAgICAvLyDorr7nva556L2055qE5paH5a2X55qE5L2N572uXG4gICAgICAgIHlnLnNlbGVjdEFsbCgnLnRpY2sgdGV4dCcpLmF0dHIoJ3gnLCAtMikuYXR0cignZHknLCAtNCk7XG4gICAgfVxuICAgIC8vIOeUn+aIkOafseeKtuefqeW9ouWbvlxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmVjdHMoKSB7XG4gICAgICAgIC8vIOe7mOWItuafseeKtuefqeW9olxuICAgICAgICAvLyBsZXQgZHluYW1pY0NvbG9yOiBzdHJpbmcgPSAnJztcbiAgICAgICAgcmV0dXJuIHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoQ2hhcnREYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgY29sb3IudG9TdHJpbmcoKSlcbiAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4gQ29uZmlnLmNoYXJ0TWFyZ2luTCArIHgoaSkpXG4gICAgICAgIC5hdHRyKCd5JywgKGQ6IGFueSkgPT4gQ29uZmlnLmNoYXJ0TWFyZ2luVCArIHkoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZDogYW55KSA9PiBDb25maWcuY2hhcnRIZWlnaHQgLSBDb25maWcuY2hhcnRNYXJnaW5UIC0gQ29uZmlnLmNoYXJ0TWFyZ2luQiAtIHkoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChkOiBhbnkpID0+IHgoMSkgLSAxKTtcbiAgICAgICAgLy8gLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdHlsZS5maWxsKSB7IGR5bmFtaWNDb2xvciA9IHRoaXMuc3R5bGUuZmlsbDsgfVxuICAgICAgICAvLyAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdmaWxsJywgJyMzYzc2M2QnKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZmlsbCcsIGR5bmFtaWNDb2xvcik7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbiAgICAvLyDlpITnkIbmj5DnpLrkv6Hmga9cbiAgICBmdW5jdGlvbiB0b29sdGlwSW5mbygpIHtcbiAgICAgICAgY29uc3QgdHQgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0xMDAsLTEwMCknKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZvY3VzJyk7XG5cbiAgICAgICAgdHQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3RpdGxlJylcbiAgICAgICAgLmF0dHIoJ3knLCAtMjApO1xuXG4gICAgICAgIHR0LmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb250ZW50JylcbiAgICAgICAgLmF0dHIoJ3knLCAtMTApO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHR0O1xuICAgIH1cbiAgICAvLyDlpITnkIbkuqTkupLmk43kvZxcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnRlcmFjdGl2ZSgpIHtcbiAgICAgICAgLy8g5oiR5Lus6YeH55So55qE5pivcXVhZHRyZWXvvIzov5nmmK9kM+WGhee9rueahOeul+azle+8jOeUqOadpeiOt+WPlum8oOagh+acgOi/keeCuVxuICAgICAgICBjb25zdCByZWN0UG9pbnQ6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0gW107XG4gICAgICAgIENoYXJ0RGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIOi/meS4gOatpeaYr++8jOiOt+WPluavj+S4gOS4quefqeW9ouWbvueahOmhtui+ueeahOS4reeCueWdkOagh1xuICAgICAgICAgICAgLy8g6Iez5LqO5Li65ZWl6I635Y+W5Lit54K577yM6L+Z5piv5pys5Lq66Ieq5bex5aSa5qyh5bCd6K+V77yM5Y+R546w6L+Z5Liq54K5566X5Ye65p2l55qE57uT5p6c5Lya5L2/5Lqk5LqS6LW35p2l5pu06Ieq54S2XG4gICAgICAgICAgICByZWN0UG9pbnQucHVzaChbQ29uZmlnLmNoYXJ0TWFyZ2luTCArIHgoaSkgKyAoeCgxKSAtIDEpIC8gMiwgQ29uZmlnLmNoYXJ0TWFyZ2luVCArIHkoZC52YWx1ZSldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWFkdHJlZSA9IGQzLnF1YWR0cmVlKClcbiAgICAgICAgICAgIC5leHRlbnQoW1tDb25maWcuY2hhcnRNYXJnaW5MLCBDb25maWcuY2hhcnRNYXJnaW5UXSwgW0NvbmZpZy5jaGFydFdpZHRoIC0gQ29uZmlnLmNoYXJ0TWFyZ2luTCwgQ29uZmlnLmNoYXJ0SGVpZ2h0IC0gQ29uZmlnLmNoYXJ0TWFyZ2luQl1dKVxuICAgICAgICAgICAgLmFkZEFsbChyZWN0UG9pbnQpO1xuXG4gICAgICAgIC8vIOmAmui/h3F1YWR0cmVl6K6h566X5Ye65q+P5LiA5Liq5Lit54K555qE55qE5LiK55WM5ZKM5LiL55WMXG4gICAgICAgIGNvbnN0IG5vZGVzOiBhbnlbXSA9IFtdO1xuICAgICAgICBxdWFkdHJlZS52aXNpdCgobm9kZTogYW55LCB4MCwgeTAsIHgxLCB5MSkgPT4ge1xuICAgICAgICAgICAgbm9kZS54MCA9IHgwO1xuICAgICAgICAgICAgbm9kZS55MCA9IHkwO1xuICAgICAgICAgICAgbm9kZS54MSA9IHgxO1xuICAgICAgICAgICAgbm9kZS55MSA9IHkxO1xuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWwhuiuoeeul+WHuueahOaVsOaNru+8jOWcqHN2Z+S4ree7mOWItuaIkOiZmuaLn+eahHJlY3RcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEobm9kZXMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbm9kZScpXG4gICAgICAgICAgICAuYXR0cigneCcsIChkKSA9PiBkLngwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4gZC55MClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIChkKSA9PiBkLnkxIC0gZC55MClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gZC54MSAtIGQueDApO1xuXG4gICAgICAgIC8vIOebkeWQrOm8oOagh+enu+WKqOS6i+S7tlxuICAgICAgICBzdmcub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gbW91c2Xlj6/ku6Xnm7TmjqXojrflj5bpvKDmoIflvZPliY3lnZDmoIdcbiAgICAgICAgICAgIGNvbnN0IG0gPSBkMy5tb3VzZSh0aGlzKTtcbiAgICAgICAgICAgIC8vIOmAmui/h3F1YWR0cmVl55u05o6l5om+5Yiw6byg5qCH5Z2Q5qCH5a+55bqU55qE5Y6f5aeL5Lit54K55Z2Q5qCHXG4gICAgICAgICAgICBjb25zdCBwOiBhbnkgPSBxdWFkdHJlZS5maW5kKG1bMF0sIG1bMV0pO1xuICAgICAgICAgICAgcmVjdHMuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgLy8g5a+55q+U5Lit54K55Z2Q5qCHXG4gICAgICAgICAgICAgICAgICAgIChDb25maWcuY2hhcnRNYXJnaW5MICsgeChpKSArICh4KDEpIC0gMSkgLyAyKSA9PT0gcFswXSAmJiBcbiAgICAgICAgICAgICAgICAgICAgKENvbmZpZy5jaGFydE1hcmdpblQgKyB5KGQudmFsdWUpKSA9PT0gcFsxXVxuICAgICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtDb25maWcuY2hhcnRNYXJnaW5MICsgeChpKSArICh4KDEpIC0gMSkgLyAyfSwgJHtDb25maWcuY2hhcnRNYXJnaW5UICsgeShkLnZhbHVlKX0pYClcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdCgndGV4dC50aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dCgn5YWF55S15pa55byP5YGP5aW95Lq6576kJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QoJ3RleHQuY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkLmtleSArICc6ICcgKyBkLnZhbHVlICsgJ+S6uicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3IuYnJpZ2h0ZXIoMC43KS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vLyDov5nkuKrlm77mmK/miJHmoLnmja7lrp7pmYXkuJrliqHlnLrmma/vvIzmqKHmi5/nmoTmlbDmja7lpITnkIbpgLvovpHvvIzlkoxkM+WbvuaXoOWFs1xuY29uc3QgZ2VuZXJhdGVLZXkgPSAoaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBsZXQga2V5OiBzdHJpbmcgPSAnJztcbiAgICBzd2l0Y2goaXRlbS5zcGxpdCgnLScpWzFdKSB7XG4gICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgICAga2V5ID0gJ+eUteWFhTkwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcxMCc6XG4gICAgICAgICAgICBrZXkgPSAn55S15YWFODAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzIwJzpcbiAgICAgICAgICAgIGtleSA9ICfnlLXlhYU3MCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMzAnOlxuICAgICAgICAgICAga2V5ID0gJ+eUteWFhTYwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc0MCc6XG4gICAgICAgICAgICBrZXkgPSAn55S15YWFNTAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzUwJzpcbiAgICAgICAgICAgIGtleSA9ICfovablhYU1MCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnNjAnOlxuICAgICAgICAgICAga2V5ID0gJ+i9puWFhTYwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc3MCc6XG4gICAgICAgICAgICBrZXkgPSAn6L2m5YWFNzAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzgwJzpcbiAgICAgICAgICAgIGtleSA9ICfovablhYU4MCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnOTAnOlxuICAgICAgICAgICAga2V5ID0gJ+i9puWFhTkwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xufTtcblxuZDMuanNvbignLi9zdGF0aWMvYmFyLmpzb24nKS50aGVuKChkYXRhOiBEYXRhKSA9PiB7XG4gICAgLy8g6L+Z6YOo5YiG6YC76L6R5piv5a6e6ZmF5Lia5Yqh5aSE55CG55qE6YC76L6R77yM5ZKMZDPlm77ml6DlhbNcbiAgICBjb25zdCBkOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+ID0gW107XG4gICAgY29uc3QgeERhdGE6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YS5saXN0KSB7XG4gICAgICAgIGlmIChkYXRhLmxpc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGEubGlzdFtrZXldO1xuICAgICAgICAgICAgY29uc3QgdG1wS2V5ID0gZ2VuZXJhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgIGQucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBnZW5lcmF0ZUtleShrZXkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHhEYXRhLnB1c2godG1wS2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkvaDlj6rpnIDopoHlhbPms6jlpITnkIblkI7nmoTmnIDnu4jnu5PmnpxcbiAgICAvLyDnu5jliLblm77nmoTkuLvpgLvovpFcbiAgICBsaW5lQ2hhcnQoY29uZmlnLCBkLCB4RGF0YSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQge307XG4iXSwic291cmNlUm9vdCI6IiJ9