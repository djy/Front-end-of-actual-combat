(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brush"],{

/***/ "Mwwa":
/*!****************************!*\
  !*** ./src/brush/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "PpnF");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


const chartWidth = window.document.body.clientWidth;
const chartHeight = 400;
// 生成x轴范围
const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 20]).rangeRound([0, chartWidth - 100]);
// 生成svg图
const svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body')
    .append('svg')
    .attr('class', 'chart')
    .style('width', chartWidth)
    .style('height', chartHeight);
// 生成x轴，用于定义栅格图
svg
    .append('g')
    .attr('class', 'x axis-grid')
    .attr('transform', `translate(50, 350)`)
    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x).ticks(20).tickSize(-100).tickFormat((() => null)));
// 生成x轴，用于定义x轴坐标
svg
    .append('g')
    .attr('class', 'x axis-x')
    .attr('transform', `translate(50, 350)`)
    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x).ticks(20).tickSize(5).tickPadding(8));
// 创建一个沿着X轴的一维brush
d3__WEBPACK_IMPORTED_MODULE_0__["brushX"]()
    .handleSize(20)
    .extent([[50, 250], [chartWidth - 50, 350]])
    .filter(() => {
    // 忽略鼠标右键
    return !d3__WEBPACK_IMPORTED_MODULE_0__["event"].ctrlKey && !d3__WEBPACK_IMPORTED_MODULE_0__["event"].button;
})
    .on('end', brushended)
    .on('brush.a start.a end.a', (d) => {
    // 拖动brush不断触发
})(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
    .append('g')
    .attr('class', 'brush'));
function brushended() {
    if (!d3__WEBPACK_IMPORTED_MODULE_0__["event"].sourceEvent) {
        // 获取执行brush的事件对象，如果没有则结束
        return false;
    }
    if (!d3__WEBPACK_IMPORTED_MODULE_0__["event"].selection) {
        // selection获取选中的开始和结束的坐标数组
        // 如果没选择则结束
        return false;
    }
    // x.invert 获取给定range计算对应的domain
    const d0 = d3__WEBPACK_IMPORTED_MODULE_0__["event"].selection.map(x.invert);
    const d1 = d0.map(Math.round).map((item) => {
        return item - 1;
    });
    const d2 = d1.map(x).map((item) => {
        return item + 50;
    });
    d3__WEBPACK_IMPORTED_MODULE_0__["event"].target.move(d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).transition(), d2);
}


/***/ }),

/***/ "PpnF":
/*!*****************************!*\
  !*** ./src/brush/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "Xl0T");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "Xl0T", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "Xl0T");

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

/***/ "Xl0T":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/brush/index.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".axis-grid .domain {\n    fill: #ddd;\n    stroke: none;\n}\n\n.axis-x .domain, .axis-grid .tick line {\n    stroke: #fff;\n}\n  \n", ""]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnJ1c2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JydXNoL2luZGV4LmNzcz9lNDg1Iiwid2VicGFjazovLy8uL3NyYy9icnVzaC9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0o7QUFFckIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3BELE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUV4QixTQUFTO0FBQ1QsTUFBTSxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU3RSxTQUFTO0FBQ1QsTUFBTSxHQUFHLEdBQUcseUNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0tBQ3RCLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0tBQzFCLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFbEMsZUFBZTtBQUNmLEdBQUc7S0FDRSxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7S0FDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQztLQUN2QyxJQUFJLENBQUMsNkNBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFRLENBQUMsQ0FBQyxDQUFDO0FB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ImZpbGUiOiJicnVzaC5kOWY4NjVmYmJiYzgyOGFkZDVmNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBjaGFydFdpZHRoID0gd2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5jb25zdCBjaGFydEhlaWdodCA9IDQwMDtcblxuLy8g55Sf5oiQeOi9tOiMg+WbtFxuY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAyMF0pLnJhbmdlUm91bmQoWzAsIGNoYXJ0V2lkdGggLSAxMDBdKTtcblxuLy8g55Sf5oiQc3Zn5Zu+XG5jb25zdCBzdmcgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAuc3R5bGUoJ3dpZHRoJywgY2hhcnRXaWR0aClcbiAgICAuc3R5bGUoJ2hlaWdodCcsIGNoYXJ0SGVpZ2h0KTtcblxuLy8g55Sf5oiQeOi9tO+8jOeUqOS6juWumuS5ieagheagvOWbvlxuc3ZnXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3ggYXhpcy1ncmlkJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSg1MCwgMzUwKWApXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrcygyMCkudGlja1NpemUoLTEwMCkudGlja0Zvcm1hdCgoKCkgPT4gbnVsbCkgYXMgYW55KSk7XG5cbi8vIOeUn+aIkHjovbTvvIznlKjkuo7lrprkuYl46L205Z2Q5qCHXG5zdmdcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAneCBheGlzLXgnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDUwLCAzNTApYClcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tzKDIwKS50aWNrU2l6ZSg1KS50aWNrUGFkZGluZyg4KSk7XG5cbi8vIOWIm+W7uuS4gOS4quayv+edgFjovbTnmoTkuIDnu7RicnVzaFxuZDMuYnJ1c2hYKClcbiAgICAuaGFuZGxlU2l6ZSgyMClcbiAgICAuZXh0ZW50KFtbNTAsIDI1MF0sIFtjaGFydFdpZHRoIC0gNTAsIDM1MF1dKVxuICAgIC5maWx0ZXIoKCkgPT4ge1xuICAgICAgICAvLyDlv73nlaXpvKDmoIflj7PplK5cbiAgICAgICAgcmV0dXJuICFkMy5ldmVudC5jdHJsS2V5ICYmICFkMy5ldmVudC5idXR0b247XG4gICAgfSlcbiAgICAub24oJ2VuZCcsIGJydXNoZW5kZWQpXG4gICAgLm9uKCdicnVzaC5hIHN0YXJ0LmEgZW5kLmEnLCAoZCkgPT4ge1xuICAgICAgICAvLyDmi5bliqhicnVzaOS4jeaWreinpuWPkVxuICAgIH0pXG4gICAgKFxuICAgICAgICBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnYnJ1c2gnKSxcbiAgICApO1xuXG5cbmZ1bmN0aW9uIGJydXNoZW5kZWQodGhpczogYW55KSB7XG4gICAgaWYgKCFkMy5ldmVudC5zb3VyY2VFdmVudCkge1xuICAgICAgICAvLyDojrflj5bmiafooYxicnVzaOeahOS6i+S7tuWvueixoe+8jOWmguaenOayoeacieWImee7k+adn1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFkMy5ldmVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gc2VsZWN0aW9u6I635Y+W6YCJ5Lit55qE5byA5aeL5ZKM57uT5p2f55qE5Z2Q5qCH5pWw57uEXG4gICAgICAgIC8vIOWmguaenOayoemAieaLqeWImee7k+adn1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8geC5pbnZlcnQg6I635Y+W57uZ5a6acmFuZ2XorqHnrpflr7nlupTnmoRkb21haW5cbiAgICBjb25zdCBkMCA9IGQzLmV2ZW50LnNlbGVjdGlvbi5tYXAoeC5pbnZlcnQpO1xuICAgIGNvbnN0IGQxID0gZDAubWFwKE1hdGgucm91bmQpLm1hcCgoaXRlbTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtIC0gMTtcbiAgICB9KTtcbiAgICBjb25zdCBkMiA9IGQxLm1hcCh4KS5tYXAoKGl0ZW06IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSArIDUwO1xuICAgIH0pO1xuXG4gICAgZDMuZXZlbnQudGFyZ2V0Lm1vdmUoZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKSwgZDIpO1xufVxuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5heGlzLWdyaWQgLmRvbWFpbiB7XFxuICAgIGZpbGw6ICNkZGQ7XFxuICAgIHN0cm9rZTogbm9uZTtcXG59XFxuXFxuLmF4aXMteCAuZG9tYWluLCAuYXhpcy1ncmlkIC50aWNrIGxpbmUge1xcbiAgICBzdHJva2U6ICNmZmY7XFxufVxcbiAgXFxuXCIsIFwiXCJdKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=