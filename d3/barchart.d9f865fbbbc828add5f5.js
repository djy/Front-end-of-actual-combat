(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["barchart"],{

/***/ "2+fY":
/*!********************************!*\
  !*** ./src/barChart/index.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "zdwS");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "zdwS", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "zdwS");

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

/***/ "ZKDS":
/*!*******************************!*\
  !*** ./src/barChart/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "2+fY");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


document.body.insertAdjacentHTML('beforeend', `
<div>
    <p>最受欢迎的top10编程语言</p>
    <label for="language_year">选择一个年份:</label>
    <select id="language_year">
        <option value="2018">2018</option>
        <option value="2019">2019</option>
    </select>
</div>
`);
d3__WEBPACK_IMPORTED_MODULE_0__["json"]('./static/languageRank.json').then((res) => {
    const sel = document.querySelector('#language_year');
    const chartWidth = 400;
    const chartHeight = 400;
    const barHeight = 20;
    // x轴范围
    const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, chartWidth]);
    // 预定义颜色范围
    const colors = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
        .domain([0, res.length * .33, res.length * .66, res.length])
        .range(['#d6e9c6', '#bce8f1', '#faebcc', '#ebccd1']);
    // 生成svg
    const chart = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body')
        .append('svg')
        .attr('class', 'chart')
        .style('width', chartWidth)
        .style('height', chartHeight);
    // 用户选择下拉框的函数
    const handleSelect = (key) => {
        const selectKey = key;
        const tmp = d3__WEBPACK_IMPORTED_MODULE_0__["shuffle"](res) // 重排
            .sort((a, b) => Number(b[selectKey]) - Number(a[selectKey])) // 从高到低排序
            .slice(0, 10); // 选取前10个
        x.domain([0, Math.max(...tmp.map((i) => Number(i[selectKey])))]);
        const bars = chart.selectAll('g').data(tmp, (d) => d ? d.language : '');
        // 更新数据
        bars
            .transition()
            .style('fill', (d, i) => colors(i))
            .duration(750)
            .attr('transform', (d, i) => {
            return `translate(0, ${i * barHeight})`;
        });
        bars.selectAll('rect')
            .transition()
            .duration(750)
            .attr('width', (d) => x(Number(d[selectKey])))
            .attr('height', (d) => barHeight - 1);
        bars.selectAll('text')
            .transition()
            .duration(750)
            .attr('x', (d) => x(Number(d[selectKey])) - 10)
            .attr('y', (d, i) => 10)
            .attr('dy', 3)
            .text((d) => d.language);
        // 移除数据
        bars
            .exit()
            .transition()
            .duration(750)
            .style('fill-opacity', 0)
            .remove();
        const gsenter = bars.enter()
            .append('g');
        gsenter
            .transition()
            .delay((d, i) => {
            return i * 20;
        })
            .duration(2000)
            .ease(d3__WEBPACK_IMPORTED_MODULE_0__["easeBounceOut"])
            .attr('transform', (d, i) => `translate(0, ${i * barHeight})`);
        let dynamicColor;
        const rects = gsenter.append('rect');
        rects.style('fill', (d, i) => colors(i))
            .attr('height', (d) => barHeight - 1)
            .on('mouseover', function (data) {
            if (this.style.fill) {
                dynamicColor = this.style.fill;
            }
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).style('fill', '#3c763d');
        })
            .on('mouseout', function (data) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).style('fill', dynamicColor);
        });
        rects
            .transition()
            .delay((d, i) => {
            return i * 20;
        })
            .duration(2000)
            .ease(d3__WEBPACK_IMPORTED_MODULE_0__["easeElastic"])
            .attr('width', (d) => x(Number(d[selectKey])));
        gsenter
            .append('text')
            .attr('x', (d) => x(Number(d[selectKey])) - 10)
            .attr('y', (d, i) => 10)
            .attr('dy', 3)
            .text((d) => d.language);
    };
    if (sel !== null) {
        sel.addEventListener('change', (e) => {
            handleSelect(e.target.value);
        });
    }
    handleSelect('2018');
});


/***/ }),

/***/ "zdwS":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/barChart/index.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "select, option {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nselect::-ms-expand {\n    display: none;\n}\n\n.chart {\n    background:rgba(37,39,46,1);\n}\n\n.chart text {\n    fill: white;\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\n", ""]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFyQ2hhcnQvaW5kZXguY3NzP2Y2YjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhckNoYXJ0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9iYXJDaGFydC9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvRUFBeUQ7O0FBRS9FLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixvRUFBeUQ7QUFDNUUsbUJBQW1CLG1CQUFPLENBQUMsb0VBQXlEOztBQUVwRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0o7QUFFckIsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7Ozs7Ozs7OztDQVM3QyxDQUFDLENBQUM7QUFTSCx1Q0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFO0lBQy9ELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDdkIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVyQixPQUFPO0lBQ1AsTUFBTSxDQUFDLEdBQUcsOENBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMs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QUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVGLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtRQUNkLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUN0QyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztLQUNOO0lBRUQsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN2SUgsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG1CQUFtQiwrQkFBK0IsNEJBQTRCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLFlBQVksa0NBQWtDLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUciLCJmaWxlIjoiYmFyY2hhcnQuZDlmODY1ZmJiYmM4MjhhZGQ1ZjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbjxkaXY+XG4gICAgPHA+5pyA5Y+X5qyi6L+O55qEdG9wMTDnvJbnqIvor63oqIA8L3A+XG4gICAgPGxhYmVsIGZvcj1cImxhbmd1YWdlX3llYXJcIj7pgInmi6nkuIDkuKrlubTku706PC9sYWJlbD5cbiAgICA8c2VsZWN0IGlkPVwibGFuZ3VhZ2VfeWVhclwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAxOFwiPjIwMTg8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMTlcIj4yMDE5PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG48L2Rpdj5cbmApO1xuXG5pbnRlcmZhY2UgTGFuZ3VhZ2VSYW5rIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgJ2xhbmd1YWdlJzogc3RyaW5nO1xuICAgICcyMDE4Jzogc3RyaW5nO1xuICAgICcyMDE5Jzogc3RyaW5nO1xufVxuXG5kMy5qc29uKCcuL3N0YXRpYy9sYW5ndWFnZVJhbmsuanNvbicpLnRoZW4oKHJlczogTGFuZ3VhZ2VSYW5rW10pID0+IHtcbiAgICBjb25zdCBzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2VfeWVhcicpO1xuICAgIGNvbnN0IGNoYXJ0V2lkdGggPSA0MDA7XG4gICAgY29uc3QgY2hhcnRIZWlnaHQgPSA0MDA7XG4gICAgY29uc3QgYmFySGVpZ2h0ID0gMjA7XG5cbiAgICAvLyB46L206IyD5Zu0XG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIGNoYXJ0V2lkdGhdKTtcblxuICAgIC8vIOmihOWumuS5ieminOiJsuiMg+WbtFxuICAgIGNvbnN0IGNvbG9ycyA9IGQzXG4gICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIHJlcy5sZW5ndGggKiAuMzMsIHJlcy5sZW5ndGggKiAuNjYsIHJlcy5sZW5ndGhdKVxuICAgICAgICAucmFuZ2UoWycjZDZlOWM2JywgJyNiY2U4ZjEnLCAnI2ZhZWJjYycsICcjZWJjY2QxJ10gYXMgYW55KTtcblxuICAgIC8vIOeUn+aIkHN2Z1xuICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KCdib2R5JylcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAgICAgLnN0eWxlKCd3aWR0aCcsIGNoYXJ0V2lkdGgpXG4gICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgY2hhcnRIZWlnaHQpO1xuXG4gICAgLy8g55So5oi36YCJ5oup5LiL5ouJ5qGG55qE5Ye95pWwXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEtleTogc3RyaW5nID0ga2V5O1xuXG4gICAgICAgIGNvbnN0IHRtcCA9IGQzXG4gICAgICAgICAgICAuc2h1ZmZsZShyZXMpIC8vIOmHjeaOklxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+ICBOdW1iZXIoYltzZWxlY3RLZXldKSAtIE51bWJlcihhW3NlbGVjdEtleV0pKSAvLyDku47pq5jliLDkvY7mjpLluo9cbiAgICAgICAgICAgIC5zbGljZSgwLCAxMCk7ICAvLyDpgInlj5bliY0xMOS4qlxuXG4gICAgICAgIHguZG9tYWluKFswLCBNYXRoLm1heCguLi50bXAubWFwKChpKSA9PiBOdW1iZXIoaVtzZWxlY3RLZXldKSkpXSk7XG5cbiAgICAgICAgY29uc3QgYmFycyA9IGNoYXJ0LnNlbGVjdEFsbCgnZycpLmRhdGEodG1wLCAoZDogYW55KSA9PiBkID8gZC5sYW5ndWFnZSA6ICcnKTtcblxuICAgICAgICAvLyDmm7TmlrDmlbDmja5cbiAgICAgICAgYmFyc1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IGNvbG9ycyhpKSlcbiAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgwLCAke2kgKiBiYXJIZWlnaHR9KWA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBiYXJzLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgKGQ6IGFueSkgPT4geChOdW1iZXIoZFtzZWxlY3RLZXldKSkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQ6IGFueSkgPT4gYmFySGVpZ2h0IC0gMSk7XG5cbiAgICAgICAgYmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgIC5hdHRyKCd4JywgKGQ6IGFueSkgPT4geChOdW1iZXIoZFtzZWxlY3RLZXldKSkgLSAxMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQ6IGFueSwgaSkgPT4gMTApXG4gICAgICAgICAgICAuYXR0cignZHknLCAzKVxuICAgICAgICAgICAgLnRleHQoKGQ6IGFueSkgPT4gZC5sYW5ndWFnZSk7XG5cbiAgICAgICAgLy8g56e76Zmk5pWw5o2uXG4gICAgICAgIGJhcnNcbiAgICAgICAgICAgIC5leGl0KClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDApXG4gICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgZ3NlbnRlciA9IGJhcnMuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpO1xuXG4gICAgICAgIGdzZW50ZXJcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheSgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICogMjA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuZWFzZShkMy5lYXNlQm91bmNlT3V0KVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsICR7aSAqIGJhckhlaWdodH0pYCk7XG5cbiAgICAgICAgbGV0IGR5bmFtaWNDb2xvcjogc3RyaW5nO1xuICAgICAgICBjb25zdCByZWN0cyA9IGdzZW50ZXIuYXBwZW5kKCdyZWN0Jyk7XG4gICAgICAgIHJlY3RzLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IGNvbG9ycyhpKSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gYmFySGVpZ2h0IC0gMSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlLmZpbGwpIHsgZHluYW1pY0NvbG9yID0gdGhpcy5zdHlsZS5maWxsOyB9XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdmaWxsJywgJyMzYzc2M2QnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZmlsbCcsIGR5bmFtaWNDb2xvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZWN0c1xuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgKiAyMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFbGFzdGljKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgKGQpID0+IHgoTnVtYmVyKGRbc2VsZWN0S2V5XSkpKTtcblxuICAgICAgICBnc2VudGVyXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgKGQpID0+IHgoTnVtYmVyKGRbc2VsZWN0S2V5XSkpIC0gMTApXG4gICAgICAgICAgICAuYXR0cigneScsIChkLCBpKSA9PiAxMClcbiAgICAgICAgICAgIC5hdHRyKCdkeScsIDMpXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4gZC5sYW5ndWFnZSk7XG4gICAgfTtcblxuICAgIGlmIChzZWwgIT09IG51bGwpIHtcbiAgICAgICAgc2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVNlbGVjdCgnMjAxOCcpO1xufSk7XG5cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzZWxlY3QsIG9wdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hhcnQge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMzcsMzksNDYsMSk7XFxufVxcblxcbi5jaGFydCB0ZXh0IHtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbmNob3I6IGVuZDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=