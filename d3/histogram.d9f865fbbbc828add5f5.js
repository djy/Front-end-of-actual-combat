(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["histogram"],{

/***/ "Yvr0":
/*!*********************************!*\
  !*** ./src/histogram/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "uxCD");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "uxCD", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "uxCD");

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

/***/ "sNXO":
/*!********************************!*\
  !*** ./src/histogram/index.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "Yvr0");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


document.body.insertAdjacentHTML('beforeend', `
<div>
    <p>随机产生100个0~9范围内的数字，统计每个数字出现的次数</p>
</div>
`);
const svgMargin = { top: 20, right: 30, bottom: 30, left: 40 }; // 添加边距
const svgHeight = 320 - svgMargin.top - svgMargin.bottom;
const svgWidth = 500 - svgMargin.left - svgMargin.right;
const chartHeight = svgHeight + svgMargin.top + svgMargin.bottom;
const chartWidth = svgWidth + svgMargin.left + svgMargin.right;
const data = generateBufferData();
// 数据范围按比例缩放
const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 10]).range([0, svgWidth]);
const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([svgHeight, 0]);
// histogram用来将传入的data分成若干的bin，每一个bin中包含一个x0和x1属性表示当前bin的范围，符合这个范围的数据被放在同一个bin中
const hg = d3__WEBPACK_IMPORTED_MODULE_0__["histogram"]() // 生成histogram生成器
    .value((d, i, arr) => d) // 指定访问data中数据的方式，数据必须是可排序的
    .domain(x.domain()) // 指定domain，domain外的数据被忽略
    .thresholds(d3__WEBPACK_IMPORTED_MODULE_0__["thresholdSturges"]); // 指定生成的bin的分隔点，传入的参数是数组，最后生成的bin数量是这个数组长度加1
// .thresholds(x.ticks(10)) 等效写法
const bins = hg(data);
y.domain([0, d3__WEBPACK_IMPORTED_MODULE_0__["max"](bins, (d) => d.length)]);
const bars = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body')
    .append('svg')
    .attr('class', 'chart')
    .style('width', chartWidth)
    .style('height', chartHeight)
    .selectAll('g')
    .data(bins)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(${x(d.x0) + svgMargin.left}, ${svgMargin.top})`);
bars.append('rect')
    .attr('y', (d) => {
    return y(d.length);
})
    .attr('width', (d) => x(1) - 1)
    .attr('height', (d) => svgHeight - y(d.length));
bars.append('text')
    .attr('x', (d) => x(1) / 2 + 5)
    .attr('y', (d) => y(d.length) + 10)
    .attr('dy', 3)
    .text((d) => d.x0);
// 定义x坐标轴
d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(${svgMargin.left}, ${svgHeight + svgMargin.top})`)
    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x).ticks(bins.length + 1).tickSize(1).tickPadding(8));
// 定义y坐标轴
d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
    .append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${svgMargin.left}, ${svgMargin.top})`)
    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y).ticks(bins.length + 1).tickSize(1).tickPadding(8).tickFormat((d) => d + '次'))
    .append('text')
    .attr('y', -5)
    .attr('x', 15)
    .text('次数');
function generateBufferData() {
    const dd = [];
    for (let i = 0; i < 100; i++) {
        dd.push(Math.floor(Math.random() * 10));
    }
    return dd;
}


/***/ }),

/***/ "uxCD":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/histogram/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".chart {\n    background:rgba(37,39,46,1);\n}\n\n.chart rect {\n    fill: steelblue;\n}\n\n.chart text {\n    fill: white;\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\n.chart .axis text {\n    font: 10px sans-serif;\n}\n\n.chart .axis path, .chart .axis line {\n    fill: none;\n    stroke: white;\n    shape-rendering: crispEdges;\n}", ""]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGlzdG9ncmFtL2luZGV4LmNzcz81Y2FiIiwid2VicGFjazovLy8uL3NyYy9oaXN0b2dyYW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpc3RvZ3JhbS9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvRUFBeUQ7O0FBRS9FLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixvRUFBeUQ7QUFDNUUsbUJBQW1CLG1CQUFPLENBQUMsb0VBQXlEOztBQUVwRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0o7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7Ozs7Q0FJN0MsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxTQUFTLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxPQUFPO0FBQ3JFLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDekQsTUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUN4RCxNQUFNLFdBQVcsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ2pFLE1BQU0sVUFBVSxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFHL0QsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztBQUNsQyxZQUFZO0FBQ1osTUFBTSxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sQ0FBQyxHQUFHLDhDQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCwrRUFBK0U7QUFDL0UsTUFBTSxFQUFFLEdBQUcsNENBQ0csRUFBRSxDQUFJLGlCQUFpQjtLQUNoQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUksMkJBQTJCO0tBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFTLENBQUMsQ0FBRSx5QkFBeUI7S0FDcEQsVUFBVSxDQUFDLG1EQUFtQixDQUFDLENBQUMsQ0FBRyw0Q0FBNEM7QUFDaEYsZ0NBQWdDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV0QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLHNDQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWxELE1BQU0sSUFBSSxHQUFHLHlDQUFTLENBQUMsTUFBTSxDQUFDO0tBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDYixJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztLQUMxQixLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztLQUM1QixTQUFTLENBQUMsR0FBRyxDQUFDO0tBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNOLEtBQUssRUFBRTtLQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDWCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFM0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDYixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztLQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFFOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDYixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFTLENBQUMsQ0FBQztBQUU5QixTQUFTO0FBQ1QseUNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDWCxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUMvRSxJQUFJLENBQUMsNkNBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFOUUsU0FBUztBQUNULHlDQUFTLENBQUMsS0FBSyxDQUFDO0tBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0tBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNuRSxJQUFJLENBQUMsMkNBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ2pHLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7S0FDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEIsU0FBUyxrQkFBa0I7SUFDdkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7OztBQzlFRCwyQkFBMkIsbUJBQU8sQ0FBQywrREFBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsV0FBVyxrQ0FBa0MsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLDBDQUEwQyxpQkFBaUIsb0JBQW9CLGtDQUFrQyxHQUFHIiwiZmlsZSI6Imhpc3RvZ3JhbS5kOWY4NjVmYmJiYzgyOGFkZDVmNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuPGRpdj5cbiAgICA8cD7pmo/mnLrkuqfnlJ8xMDDkuKowfjnojIPlm7TlhoXnmoTmlbDlrZfvvIznu5/orqHmr4/kuKrmlbDlrZflh7rnjrDnmoTmrKHmlbA8L3A+XG48L2Rpdj5cbmApO1xuY29uc3Qgc3ZnTWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAzMCwgYm90dG9tOiAzMCwgbGVmdDogNDB9OyAvLyDmt7vliqDovrnot51cbmNvbnN0IHN2Z0hlaWdodCA9IDMyMCAtIHN2Z01hcmdpbi50b3AgLSBzdmdNYXJnaW4uYm90dG9tO1xuY29uc3Qgc3ZnV2lkdGggPSA1MDAgLSBzdmdNYXJnaW4ubGVmdCAtIHN2Z01hcmdpbi5yaWdodDtcbmNvbnN0IGNoYXJ0SGVpZ2h0ID0gc3ZnSGVpZ2h0ICsgc3ZnTWFyZ2luLnRvcCArIHN2Z01hcmdpbi5ib3R0b207XG5jb25zdCBjaGFydFdpZHRoID0gc3ZnV2lkdGggKyBzdmdNYXJnaW4ubGVmdCArIHN2Z01hcmdpbi5yaWdodDtcblxuXG5jb25zdCBkYXRhID0gZ2VuZXJhdGVCdWZmZXJEYXRhKCk7XG4vLyDmlbDmja7ojIPlm7TmjInmr5TkvovnvKnmlL5cbmNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMTBdKS5yYW5nZShbMCwgc3ZnV2lkdGhdKTtcbmNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtzdmdIZWlnaHQsIDBdKTtcbi8vIGhpc3RvZ3JhbeeUqOadpeWwhuS8oOWFpeeahGRhdGHliIbmiJDoi6XlubLnmoRiaW7vvIzmr4/kuIDkuKpiaW7kuK3ljIXlkKvkuIDkuKp4MOWSjHgx5bGe5oCn6KGo56S65b2T5YmNYmlu55qE6IyD5Zu077yM56ym5ZCI6L+Z5Liq6IyD5Zu055qE5pWw5o2u6KKr5pS+5Zyo5ZCM5LiA5LiqYmlu5LitXG5jb25zdCBoZyA9IGQzXG4gICAgLmhpc3RvZ3JhbSgpICAgIC8vIOeUn+aIkGhpc3RvZ3JhbeeUn+aIkOWZqFxuICAgIC52YWx1ZSgoZCwgaSwgYXJyKSA9PiBkKSAgICAvLyDmjIflrprorr/pl65kYXRh5Lit5pWw5o2u55qE5pa55byP77yM5pWw5o2u5b+F6aG75piv5Y+v5o6S5bqP55qEXG4gICAgLmRvbWFpbih4LmRvbWFpbigpIGFzIGFueSkgIC8vIOaMh+WummRvbWFpbu+8jGRvbWFpbuWklueahOaVsOaNruiiq+W/veeVpVxuICAgIC50aHJlc2hvbGRzKGQzLnRocmVzaG9sZFN0dXJnZXMpOyAgIC8vIOaMh+WumueUn+aIkOeahGJpbueahOWIhumalOeCue+8jOS8oOWFpeeahOWPguaVsOaYr+aVsOe7hO+8jOacgOWQjueUn+aIkOeahGJpbuaVsOmHj+aYr+i/meS4quaVsOe7hOmVv+W6puWKoDFcbiAgICAvLyAudGhyZXNob2xkcyh4LnRpY2tzKDEwKSkg562J5pWI5YaZ5rOVXG5jb25zdCBiaW5zID0gaGcoZGF0YSk7XG5cbnkuZG9tYWluKFswLCBkMy5tYXgoYmlucywgKGQ6IGFueSkgPT4gZC5sZW5ndGgpXSk7XG5cbmNvbnN0IGJhcnMgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAuc3R5bGUoJ3dpZHRoJywgY2hhcnRXaWR0aClcbiAgICAuc3R5bGUoJ2hlaWdodCcsIGNoYXJ0SGVpZ2h0KVxuICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgIC5kYXRhKGJpbnMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoJHt4KGQueDAgYXMgbnVtYmVyKSArIHN2Z01hcmdpbi5sZWZ0fSwgJHtzdmdNYXJnaW4udG9wfSlgKTtcblxuYmFycy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHkoZC5sZW5ndGggYXMgbnVtYmVyKTtcbiAgICB9KVxuICAgIC5hdHRyKCd3aWR0aCcsIChkKSA9PiB4KDEpIC0gMSlcbiAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHN2Z0hlaWdodCAtIHkoZC5sZW5ndGggYXMgbnVtYmVyKSk7XG5cbmJhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cigneCcsIChkKSA9PiB4KDEpIC8gMiArIDUpXG4gICAgLmF0dHIoJ3knLCAoZCkgPT4geShkLmxlbmd0aCBhcyBudW1iZXIpICsgMTApXG4gICAgLmF0dHIoJ2R5JywgMylcbiAgICAudGV4dCgoZCkgPT4gZC54MCBhcyBhbnkpO1xuXG4vLyDlrprkuYl45Z2Q5qCH6L20XG5kMy5zZWxlY3QoJ3N2ZycpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3ggYXhpcycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtzdmdNYXJnaW4ubGVmdH0sICR7c3ZnSGVpZ2h0ICsgc3ZnTWFyZ2luLnRvcH0pYClcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tzKGJpbnMubGVuZ3RoICsgMSkudGlja1NpemUoMSkudGlja1BhZGRpbmcoOCkpO1xuXG4vLyDlrprkuYl55Z2Q5qCH6L20XG5kMy5zZWxlY3QoJ3N2ZycpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtzdmdNYXJnaW4ubGVmdH0sICR7c3ZnTWFyZ2luLnRvcH0pYClcbiAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhiaW5zLmxlbmd0aCArIDEpLnRpY2tTaXplKDEpLnRpY2tQYWRkaW5nKDgpLnRpY2tGb3JtYXQoKGQpID0+IGQgKyAn5qyhJykpXG4gICAgLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3knLCAtNSlcbiAgICAuYXR0cigneCcsIDE1KVxuICAgIC50ZXh0KCfmrKHmlbAnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVCdWZmZXJEYXRhKCkge1xuICAgIGNvbnN0IGRkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBkZC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgfVxuICAgIHJldHVybiBkZDtcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoYXJ0IHtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDM3LDM5LDQ2LDEpO1xcbn1cXG5cXG4uY2hhcnQgcmVjdCB7XFxuICAgIGZpbGw6IHN0ZWVsYmx1ZTtcXG59XFxuXFxuLmNoYXJ0IHRleHQge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFuY2hvcjogZW5kO1xcbn1cXG5cXG4uY2hhcnQgLmF4aXMgdGV4dCB7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNoYXJ0IC5heGlzIHBhdGgsIC5jaGFydCAuYXhpcyBsaW5lIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG4gICAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xcbn1cIiwgXCJcIl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==