(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unequalpointchart"],{

/***/ "i9iq":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/unequalpointchart/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".chart {\n    background:rgba(37,39,46,1);\n}\n\n.chart text{\n    fill: white;\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\n\n.chart .axis text {\n    font: 10px sans-serif;\n}\n\n.chart .axis path, .chart .axis line {\n    fill: none;\n    stroke: white;\n    shape-rendering: crispEdges;\n}\n\n.zoom {\n    cursor: move;\n    fill: none;\n    pointer-events: all;\n}\n\n.hoverFocus text {\n    fill: white;\n    \n} \n\n.hoverFocus text.content{\n    text-anchor: start !important;\n}\n\n", ""]);


/***/ }),

/***/ "ihsf":
/*!*****************************************!*\
  !*** ./src/unequalpointchart/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "i9iq");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "i9iq", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "i9iq");

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

/***/ "jpaf":
/*!****************************************!*\
  !*** ./src/unequalpointchart/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "ihsf");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


document.body.innerHTML = '';
const config = {
    chartWidth: 1200,
    chartHeight: 500,
    chartMarginL: 50,
    chartMarginR: 50,
    chartMarginT: 50,
    chartMarginB: 50,
};
d3__WEBPACK_IMPORTED_MODULE_0__["json"]('./static/unequalpoint.json').then((res) => {
    const data = res.list;
    const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([config.chartWidth - config.chartMarginL - config.chartMarginR, 0]);
    const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().domain([0, 600]).range([config.chartHeight - config.chartMarginT - config.chartMarginB, 0]);
    const ydata = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];
    let tooltip = null;
    const xMax = Number(data[data.length - 1].month) / 3;
    x.domain([xMax, 0]);
    let xTicksMount;
    if (xMax >= 10) {
        xTicksMount = 10;
    }
    else if (xMax < 10 && xMax >= 5) {
        xTicksMount = 5;
    }
    else {
        const tmp = [];
        for (let i = 0; i <= xMax; i++) {
            tmp.push(i);
        }
        xTicksMount = tmp;
    }
    const svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body')
        .append('svg')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', 'chart')
        .style('width', config.chartWidth)
        .style('height', config.chartHeight);
    generateX();
    generateY();
    drawPoint(preprocessingData(1000));
    drawToolTip();
    function generateX() {
        // 定义x坐标轴
        const xg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(${config.chartMarginL}, ${config.chartHeight - config.chartMarginB})`);
        const xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisTop"](x)
            .tickSizeInner(config.chartHeight - config.chartMarginT - config.chartMarginB)
            .tickPadding(8)
            .tickFormat(((value) => {
            return 3 * value + '个月';
        }));
        if (xTicksMount instanceof Array) {
            xAxis.tickValues(xTicksMount);
        }
        else {
            xAxis.ticks(10);
        }
        xAxis(xg);
        // 移除x轴的竖线
        xg.select('.domain').remove();
        // 对y轴tick中的line设置线的样式
        xg.selectAll('.tick line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2');
        // 设置y轴的文字的位置
        xg
            .selectAll('.tick text')
            .attr('y', 15)
            .attr('x', 25)
            .attr('dx', 0)
            .attr('transform', 'rotate(45)');
    }
    function generateY() {
        // 定义y坐标轴
        const yg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${config.chartMarginT}, ${config.chartMarginL})`);
        const yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](y)
            .tickValues(ydata)
            .tickSizeInner(config.chartWidth - config.chartMarginL - config.chartMarginR)
            .tickPadding(8)
            .tickFormat(((value) => {
            return value + '次';
        }));
        yAxis(yg);
        // 移除y轴的竖线
        yg.select('.domain').remove();
        // // 对y轴tick中的line设置线的样式
        yg.selectAll('.tick line')
            .attr('stroke-opacity', 0.5)
            .attr('stroke-dasharray', '2,2');
        // // 设置y轴的文字的位置
        yg.selectAll('.tick text').attr('x', -5);
    }
    function preprocessingData(max) {
        const size = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, max]);
        const tmpA = [];
        data.forEach((item) => {
            const tt = [];
            ydata.forEach((d) => {
                tt.push(Number(item[`num-${d}`]));
            });
            size.domain([0, d3__WEBPACK_IMPORTED_MODULE_0__["max"](tt)]);
            const tsum = d3__WEBPACK_IMPORTED_MODULE_0__["sum"](tt, (d) => Number(d));
            const tmpO = {};
            ydata.forEach((d) => {
                tmpO[`pre-${d}`] = {
                    size: size(Number(item[`num-${d}`])),
                    percent: Math.round(Number(item[`num-${d}`]) * 10000 / tsum) / 100,
                    value: Number(item[`num-${d}`]),
                    sum: tsum,
                };
                if (tmpO[`pre-${d}`].size === max) {
                    tmpO.maxKey = `pre-${d}`;
                }
            });
            tmpO.month = Number(item.month);
            tmpA.push(tmpO);
        });
        return tmpA;
    }
    function drawPoint(preData) {
        const circles = svg.selectAll('path').data(data);
        let dynamicColor = '';
        ydata.forEach((item) => {
            circles.join('path')
                .attr('fill', 'rgba(24, 100, 169, 0.7)')
                .attr('transform', (d) => `translate(${x(Number(d.month) / 3) + config.chartMarginL}, ${y(item) + config.chartMarginB})`)
                .attr('stroke', 'none')
                .attr('stroke-width', '2px')
                .attr('class', (d, i) => `pre-${item}-${i}`)
                .attr('d', ((d, i) => {
                return d3__WEBPACK_IMPORTED_MODULE_0__["symbol"]()
                    .size(preData[i][`pre-${item}`].size)
                    .type(d3__WEBPACK_IMPORTED_MODULE_0__["symbolCircle"])();
            }))
                .on('mouseover', function (d, i) {
                const tid = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('class').split('-')[2];
                dynamicColor = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('fill');
                ydata.forEach((iitem) => {
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.pre-${iitem}-${tid}`).attr('fill', d3__WEBPACK_IMPORTED_MODULE_0__["rgb"](dynamicColor).brighter(1));
                });
                const tmpD = [
                    {
                        name: '时间',
                        value: d.month + '个月',
                    },
                ];
                ydata.forEach((iitem) => {
                    tmpD.push({
                        name: iitem + '',
                        value: d[`num-${iitem}`] + `(${Math.round(d[`num-${iitem}`] * 10000 / preData[i][`pre-${item}`].sum) / 100}%)`,
                    });
                });
                const tmpC = tooltip.select('text.content').selectAll('tspan').data(tmpD);
                tmpC.text((dd) => `${dd.name}: ${dd.value}`);
                tmpC.enter().append('tspan').attr('y', (dd, ii) => (ii) * 20 - 5).attr('x', -40).text((dd) => `${dd.name}: ${dd.value}`);
                tmpC.exit().remove();
                let tc = 0;
                if (i === data.length - 1) {
                    tc = -20;
                }
                else {
                    tc = config.chartMarginL + 60;
                }
                tooltip.attr('transform', 'translate(' + (x(Number(d.month) / 3) + tc) + ',' + (200) + ')');
            })
                .on('mouseout', function (d) {
                const tid = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('class').split('-')[2];
                ydata.forEach((iitem) => {
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.pre-${iitem}-${tid}`).attr('fill', dynamicColor);
                });
                tooltip.attr('transform', 'translate(-100,-100)');
            });
        });
        preData.forEach((item) => {
            svg.append('text')
                .attr('x', x(Number(item.month) / 3) + config.chartMarginL)
                .attr('y', y(item.maxKey.split('-')[1]) + config.chartMarginB)
                .text(Math.round(item[item.maxKey].percent) + '%')
                .attr('dx', 11)
                .attr('dy', 5);
        });
    }
    function drawToolTip() {
        tooltip = svg.append('g')
            .attr('transform', 'translate(-100,-100)')
            .attr('class', 'hoverFocus');
        tooltip.append('text')
            .attr('class', 'content')
            .attr('y', -10);
    }
});
/* harmony default export */ __webpack_exports__["default"] = ({});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5lcXVhbHBvaW50Y2hhcnQvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy91bmVxdWFscG9pbnRjaGFydC9pbmRleC5jc3M/ZjExZSIsIndlYnBhY2s6Ly8vLi9zcmMvdW5lcXVhbHBvaW50Y2hhcnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLFdBQVcsa0NBQWtDLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcseUJBQXlCLDRCQUE0QixHQUFHLDBDQUEwQyxpQkFBaUIsb0JBQW9CLGtDQUFrQyxHQUFHLFdBQVcsbUJBQW1CLGlCQUFpQiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLFNBQVMsOEJBQThCLG9DQUFvQyxHQUFHOzs7Ozs7Ozs7Ozs7O0FDRDdnQixjQUFjLG1CQUFPLENBQUMsb0VBQXlEOztBQUUvRSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsOERBQW1EOztBQUV4RTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsb0VBQXlEO0FBQzVFLG1CQUFtQixtQkFBTyxDQUFDLG9FQUF5RDs7QUFFcEYsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNKO0FBRXJCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUU3QixNQUFNLE1BQU0sR0FBRztJQUNYLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxHQUFH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Q0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2lCQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUyxXQUFXO1FBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDO2FBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7YUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUNZLGlFQUFFLEVBQUMiLCJmaWxlIjoidW5lcXVhbHBvaW50Y2hhcnQuZDlmODY1ZmJiYmM4MjhhZGQ1ZjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGFydCB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgzNywzOSw0NiwxKTtcXG59XFxuXFxuLmNoYXJ0IHRleHR7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYW5jaG9yOiBlbmQ7XFxufVxcblxcblxcbi5jaGFydCAuYXhpcyB0ZXh0IHtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2hhcnQgLmF4aXMgcGF0aCwgLmNoYXJ0IC5heGlzIGxpbmUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufVxcblxcbi56b29tIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uaG92ZXJGb2N1cyB0ZXh0IHtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIFxcbn0gXFxuXFxuLmhvdmVyRm9jdXMgdGV4dC5jb250ZW50e1xcbiAgICB0ZXh0LWFuY2hvcjogc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgY2hhcnRXaWR0aDogMTIwMCxcbiAgICBjaGFydEhlaWdodDogNTAwLFxuICAgIGNoYXJ0TWFyZ2luTDogNTAsXG4gICAgY2hhcnRNYXJnaW5SOiA1MCxcbiAgICBjaGFydE1hcmdpblQ6IDUwLFxuICAgIGNoYXJ0TWFyZ2luQjogNTAsXG59O1xuXG5kMy5qc29uKCcuL3N0YXRpYy91bmVxdWFscG9pbnQuanNvbicpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXMubGlzdDtcbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbY29uZmlnLmNoYXJ0V2lkdGggLSBjb25maWcuY2hhcnRNYXJnaW5MIC0gY29uZmlnLmNoYXJ0TWFyZ2luUiwgMF0pO1xuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgNjAwXSkucmFuZ2UoW2NvbmZpZy5jaGFydEhlaWdodCAtIGNvbmZpZy5jaGFydE1hcmdpblQgLSBjb25maWcuY2hhcnRNYXJnaW5CLCAwXSk7XG4gICAgY29uc3QgeWRhdGEgPSBbMCwgNTAsIDEwMCwgMTUwLCAyMDAsIDI1MCwgMzAwLCAzNTAsIDQwMCwgNDUwLCA1MDAsIDU1MCwgNjAwXTtcbiAgICBsZXQgdG9vbHRpcDogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0IHhNYXggPSBOdW1iZXIoZGF0YVtkYXRhLmxlbmd0aCAtIDFdLm1vbnRoKSAvIDM7XG4gICAgeC5kb21haW4oW3hNYXgsIDBdKTtcbiAgICBsZXQgeFRpY2tzTW91bnQ6IG51bWJlciB8IG51bWJlcltdO1xuICAgIGlmICh4TWF4ID49IDEwKSB7XG4gICAgICAgIHhUaWNrc01vdW50ID0gMTA7XG4gICAgfSBlbHNlIGlmICh4TWF4IDwgMTAgJiYgeE1heCA+PSA1KSB7XG4gICAgICAgIHhUaWNrc01vdW50ID0gNTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0bXAgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0geE1heDsgaSsrKSB7XG4gICAgICAgICAgICB0bXAucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICB4VGlja3NNb3VudCA9IHRtcDtcbiAgICB9XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAgIC5hdHRyKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydCcpXG4gICAgICAgIC5zdHlsZSgnd2lkdGgnLCBjb25maWcuY2hhcnRXaWR0aClcbiAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBjb25maWcuY2hhcnRIZWlnaHQpO1xuXG4gICAgZ2VuZXJhdGVYKCk7XG4gICAgZ2VuZXJhdGVZKCk7XG4gICAgZHJhd1BvaW50KHByZXByb2Nlc3NpbmdEYXRhKDEwMDApKTtcbiAgICBkcmF3VG9vbFRpcCgpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVYKCkge1xuICAgICAgICAvLyDlrprkuYl45Z2Q5qCH6L20XG4gICAgICAgIGNvbnN0IHhnID0gZDMuc2VsZWN0KCdzdmcnKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneCBheGlzJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y29uZmlnLmNoYXJ0TWFyZ2luTH0sICR7Y29uZmlnLmNoYXJ0SGVpZ2h0IC0gY29uZmlnLmNoYXJ0TWFyZ2luQn0pYCk7XG5cbiAgICAgICAgY29uc3QgeEF4aXMgPSBkMy5heGlzVG9wKHgpXG4gICAgICAgICAgICAudGlja1NpemVJbm5lcihjb25maWcuY2hhcnRIZWlnaHQgLSBjb25maWcuY2hhcnRNYXJnaW5UIC0gY29uZmlnLmNoYXJ0TWFyZ2luQilcbiAgICAgICAgICAgIC50aWNrUGFkZGluZyg4KVxuICAgICAgICAgICAgLnRpY2tGb3JtYXQoKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDMgKiB2YWx1ZSArICfkuKrmnIgnO1xuICAgICAgICAgICAgfSkgYXMgYW55KTtcbiAgICAgICAgaWYgKHhUaWNrc01vdW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHhBeGlzLnRpY2tWYWx1ZXMoeFRpY2tzTW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeEF4aXMudGlja3MoMTApO1xuICAgICAgICB9XG4gICAgICAgIHhBeGlzKHhnKTtcblxuICAgICAgICAvLyDnp7vpmaR46L2055qE56uW57q/XG4gICAgICAgIHhnLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICAvLyDlr7l56L20dGlja+S4reeahGxpbmXorr7nva7nur/nmoTmoLflvI9cbiAgICAgICAgeGcuc2VsZWN0QWxsKCcudGljayBsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgJzIsMicpO1xuICAgICAgICAvLyDorr7nva556L2055qE5paH5a2X55qE5L2N572uXG4gICAgICAgIHhnXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCcudGljayB0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMTUpXG4gICAgICAgICAgICAuYXR0cigneCcsIDI1KVxuICAgICAgICAgICAgLmF0dHIoJ2R4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDQ1KScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlWSgpIHtcbiAgICAgICAgLy8g5a6a5LmJeeWdkOagh+i9tFxuICAgICAgICBjb25zdCB5ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NvbmZpZy5jaGFydE1hcmdpblR9LCAke2NvbmZpZy5jaGFydE1hcmdpbkx9KWApO1xuICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNSaWdodCh5KVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoeWRhdGEpXG4gICAgICAgICAgICAudGlja1NpemVJbm5lcihjb25maWcuY2hhcnRXaWR0aCAtIGNvbmZpZy5jaGFydE1hcmdpbkwgLSBjb25maWcuY2hhcnRNYXJnaW5SKVxuICAgICAgICAgICAgLnRpY2tQYWRkaW5nKDgpXG4gICAgICAgICAgICAudGlja0Zvcm1hdCgoKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAn5qyhJztcbiAgICAgICAgICAgIH0pIGFzIGFueSk7XG4gICAgICAgIHlBeGlzKHlnKTtcblxuICAgICAgICAvLyDnp7vpmaR56L2055qE56uW57q/XG4gICAgICAgIHlnLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICAvLyAvLyDlr7l56L20dGlja+S4reeahGxpbmXorr7nva7nur/nmoTmoLflvI9cbiAgICAgICAgeWcuc2VsZWN0QWxsKCcudGljayBsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgJzIsMicpO1xuICAgICAgICAvLyAvLyDorr7nva556L2055qE5paH5a2X55qE5L2N572uXG4gICAgICAgIHlnLnNlbGVjdEFsbCgnLnRpY2sgdGV4dCcpLmF0dHIoJ3gnLCAtNSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcHJvY2Vzc2luZ0RhdGEobWF4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIG1heF0pO1xuICAgICAgICBjb25zdCB0bXBBOiBhbnlbXSA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHQ6IG51bWJlcltdID0gW107XG4gICAgICAgICAgICB5ZGF0YS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgdHQucHVzaChOdW1iZXIoaXRlbVtgbnVtLSR7ZH1gXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaXplLmRvbWFpbihbMCwgZDMubWF4KHR0KSBhcyBudW1iZXJdKTtcbiAgICAgICAgICAgIGNvbnN0IHRzdW0gPSBkMy5zdW0odHQsIChkKSA9PiBOdW1iZXIoZCkpO1xuXG4gICAgICAgICAgICBjb25zdCB0bXBPOiB7XG4gICAgICAgICAgICAgICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICAgIHlkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICAgICAgICB0bXBPW2BwcmUtJHtkfWBdID0ge1xuICAgICAgICAgICAgICAgICAgICBzaXplOiBzaXplKE51bWJlcihpdGVtW2BudW0tJHtkfWBdKSksXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IE1hdGgucm91bmQoTnVtYmVyKGl0ZW1bYG51bS0ke2R9YF0pICogMTAwMDAgLyB0c3VtKSAvIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IE51bWJlcihpdGVtW2BudW0tJHtkfWBdKSxcbiAgICAgICAgICAgICAgICAgICAgc3VtOiB0c3VtLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRtcE9bYHByZS0ke2R9YF0uc2l6ZSA9PT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcE8ubWF4S2V5ID0gYHByZS0ke2R9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRtcE8ubW9udGggPSBOdW1iZXIoaXRlbS5tb250aCk7XG5cbiAgICAgICAgICAgIHRtcEEucHVzaCh0bXBPKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRtcEE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd1BvaW50KHByZURhdGE6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSBzdmcuc2VsZWN0QWxsKCdwYXRoJykuZGF0YShkYXRhKTtcblxuICAgICAgICBsZXQgZHluYW1pY0NvbG9yOiBzdHJpbmcgPSAnJztcbiAgICAgICAgeWRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY2lyY2xlcy5qb2luKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdyZ2JhKDI0LCAxMDAsIDE2OSwgMC43KScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkOiBhbnkpID0+IGB0cmFuc2xhdGUoJHt4KE51bWJlcihkLm1vbnRoKSAvIDMpICsgY29uZmlnLmNoYXJ0TWFyZ2luTH0sICR7eShpdGVtKSArIGNvbmZpZy5jaGFydE1hcmdpbkJ9KWApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgJzJweCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgKGQsIGkpID0+IGBwcmUtJHtpdGVtfS0ke2l9YClcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsICgoZDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3ltYm9sKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaXplKHByZURhdGFbaV1bYHByZS0ke2l0ZW19YF0uc2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlKGQzLnN5bWJvbENpcmNsZSkoKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBhbnkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkOiBhbnksIGk6IG51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWQgPSBkMy5zZWxlY3QodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnLScpWzJdO1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljQ29sb3IgPSBkMy5zZWxlY3QodGhpcykuYXR0cignZmlsbCcpO1xuICAgICAgICAgICAgICAgICAgICB5ZGF0YS5mb3JFYWNoKChpaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKGAucHJlLSR7aWl0ZW19LSR7dGlkfWApLmF0dHIoJ2ZpbGwnLCBkMy5yZ2IoZHluYW1pY0NvbG9yKS5icmlnaHRlcigxKSBhcyBhbnkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXBEID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfml7bpl7QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkLm1vbnRoICsgJ+S4quaciCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB5ZGF0YS5mb3JFYWNoKChpaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wRC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpaXRlbSArICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkW2BudW0tJHtpaXRlbX1gXSArIGAoJHsgTWF0aC5yb3VuZChkW2BudW0tJHtpaXRlbX1gXSAqIDEwMDAwIC8gcHJlRGF0YVtpXVtgcHJlLSR7aXRlbX1gXS5zdW0pIC8gMTAwIH0lKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wQyA9IHRvb2x0aXAuc2VsZWN0KCd0ZXh0LmNvbnRlbnQnKS5zZWxlY3RBbGwoJ3RzcGFuJykuZGF0YSh0bXBEKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wQy50ZXh0KChkZDogYW55KSA9PiBgJHtkZC5uYW1lfTogJHtkZC52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wQy5lbnRlcigpLmFwcGVuZCgndHNwYW4nKS5hdHRyKCd5JywgKGRkOiBhbnksIGlpOiBhbnkpID0+IChpaSkgKiAyMCAtIDUpLmF0dHIoJ3gnLCAtNDApLnRleHQoKGRkOiBhbnkpID0+IGAke2RkLm5hbWV9OiAke2RkLnZhbHVlfWApO1xuICAgICAgICAgICAgICAgICAgICB0bXBDLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YyA9IC0yMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRjID0gY29uZmlnLmNoYXJ0TWFyZ2luTCArIDYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHgoTnVtYmVyKGQubW9udGgpIC8gMykgKyB0YykgKyAnLCcgKyAoMjAwKSArICcpJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpZCA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdjbGFzcycpLnNwbGl0KCctJylbMl07XG4gICAgICAgICAgICAgICAgICAgIHlkYXRhLmZvckVhY2goKGlpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoYC5wcmUtJHtpaXRlbX0tJHt0aWR9YCkuYXR0cignZmlsbCcsIGR5bmFtaWNDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTEwMCwtMTAwKScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcmVEYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgeChOdW1iZXIoaXRlbS5tb250aCkgLyAzKSArIGNvbmZpZy5jaGFydE1hcmdpbkwpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCB5KGl0ZW0ubWF4S2V5LnNwbGl0KCctJylbMV0pICsgY29uZmlnLmNoYXJ0TWFyZ2luQilcbiAgICAgICAgICAgICAgICAudGV4dChNYXRoLnJvdW5kKGl0ZW1baXRlbS5tYXhLZXldLnBlcmNlbnQpICsgJyUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkeCcsIDExKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkeScsIDUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3VG9vbFRpcCgpIHtcbiAgICAgICAgdG9vbHRpcCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoLTEwMCwtMTAwKScpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaG92ZXJGb2N1cycpO1xuXG4gICAgICAgIHRvb2x0aXAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjb250ZW50JylcbiAgICAgICAgICAgIC5hdHRyKCd5JywgLTEwKTtcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHt9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==