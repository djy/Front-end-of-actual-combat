(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unequalbar"],{

/***/ "/Ujk":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/unequalbar/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".chart {\n    background:rgba(37,39,46,1);\n}\n\n.chart text{\n    fill: white;\n    font: 10px sans-serif;\n    text-anchor: end;\n}\n\n.chart .axis text {\n    font: 10px sans-serif;\n}\n\n.chart .axis path{\n    fill: none;\n    stroke: white;\n    shape-rendering: crispEdges;\n}\n\n.chart .axis line {\n    fill: none;\n    stroke: none;\n    /* stroke: white; */\n}\n\n.zoom {\n    cursor: move;\n    fill: none;\n    pointer-events: all;\n}", ""]);


/***/ }),

/***/ "0G+h":
/*!*********************************!*\
  !*** ./src/unequalbar/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "F6bg");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


document.body.innerHTML = '';
document.body.insertAdjacentHTML('beforeend', `
<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <marker
            id="arrow"
            viewBox="0 0 20 20"
            refX="5"
            refY="5"
            markerWidth="10"
            markerHeight="10"
            orient="auto-start-reverse"
        >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
        </marker>
        <filter id="fds" filterUnits="userSpaceOnUse">
            <feDropShadow in="SourceGraphic" dx="6" dy="0" stdDeviation="6"/>
        </filter>
    </defs>
</svg>
`);
const config = {
    chartWidth: 1200,
    chartHeight: 300,
    chartMarginL: 50,
    chartMarginR: 50,
    chartMarginT: 50,
    chartMarginB: 50,
};
d3__WEBPACK_IMPORTED_MODULE_0__["json"]('./static/special.json').then((res) => {
    let flag = false; // 是否需要预缩放
    const data = res.list;
    const svg = generateSvg();
    let xg;
    let xAxis;
    generateTopTabs();
    const x = generateX();
    configX();
    const y = generateY();
    configY();
    const rects = drawRects();
    const tooltip = generateTooltip();
    handleInteractive();
    function generateSvg() {
        return d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .attr('fill', 'none')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('class', 'chart')
            .style('width', config.chartWidth)
            .style('height', config.chartHeight);
    }
    function generateX() {
        const startTime = new Date(data[0].b);
        startTime.setMonth(startTime.getMonth() - 1);
        const endTime = new Date(data[data.length - 1].e);
        endTime.setMonth(endTime.getMonth() + 1);
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]().domain([
            startTime,
            endTime,
        ]).range([0, config.chartWidth - config.chartMarginR - config.chartMarginL]);
    }
    function configX() {
        // 定义x坐标轴
        const fomateTime = d3__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]('%Y-%m');
        xg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(${config.chartMarginL}, ${config.chartHeight - config.chartMarginB})`);
        xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x)
            .tickArguments([d3__WEBPACK_IMPORTED_MODULE_0__["timeMonth"].every(3)])
            .tickSize(0)
            .tickPadding(8)
            .tickFormat(fomateTime);
        xAxis(xg);
        xg.select('path').attr('marker-end', 'url(#arrow)');
    }
    function generateY() {
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 1.1 * d3__WEBPACK_IMPORTED_MODULE_0__["max"](data, (d) => d.mileage)])
            .range([config.chartHeight - config.chartMarginT - config.chartMarginB, 0]);
    }
    function configY() {
        // 定义y坐标轴
        const yg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg')
            .append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${config.chartMarginT}, ${config.chartMarginL})`);
        const yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y)
            .ticks(10)
            .tickSize(0)
            .tickPadding(8);
        yAxis(yg);
        yg.append('text')
            .attr('y', -5)
            .attr('x', 15)
            .text('里程');
        yg.select('path').attr('marker-end', 'url(#arrow)');
    }
    function generateTopTabs() {
        const colors = [
            {
                color: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('orange').brighter(0.5),
                text: '> 25',
            },
            {
                color: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('green').brighter(0.5),
                text: '25 - 10',
            },
            {
                color: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('skyblue').brighter(0.5),
                text: '10 - 0',
            },
            {
                color: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('blue').brighter(0.5),
                text: '< 0',
            },
        ];
        svg
            .selectAll('rect')
            .data(colors)
            .enter()
            .append('rect')
            .attr('width', 50)
            .attr('height', 30)
            .attr('x', (d, i) => 100 + i * 50)
            .attr('y', 10)
            .attr('fill', (d) => d.color);
        svg
            .selectAll('text')
            .data(colors)
            .enter()
            .append('text')
            .attr('x', (d, i) => 138 + i * 50)
            .attr('y', 28)
            .text((d) => d.text);
    }
    function drawRects() {
        return svg.append('g')
            .attr('clip-path', 'url(#clip)')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .style('fill', (d) => d3__WEBPACK_IMPORTED_MODULE_0__["color"](d.color).brighter(0.5).toString())
            .attr('filter', 'url(#fds)')
            .attr('x', (d) => config.chartMarginL + x(new Date(d.b)))
            .attr('y', (d) => config.chartMarginT + y(d.mileage))
            .attr('height', (d) => config.chartHeight - config.chartMarginT - config.chartMarginB - y(d.mileage))
            .attr('width', (d) => {
            const tw = x(new Date(d.e)) - x(new Date(d.b));
            if (tw < 20 && data.length >= 18) {
                flag = true;
            }
            return tw;
        });
    }
    function generateTooltip() {
        // 处理交互功能
        const ttip = svg.append('g')
            .attr('transform', 'translate(-100,-100)')
            .attr('class', 'focus');
        ttip.append('rect')
            .style('fill', 'rgba(105, 121, 131, 0.8)')
            .attr('width', 80)
            .attr('height', 60)
            .attr('x', 0)
            .attr('y', 0);
        ttip.append('text')
            .attr('class', 'title1')
            .attr('x', 45)
            .attr('y', 20);
        ttip.append('text')
            .attr('class', 'title2')
            .attr('x', 70)
            .attr('y', 40);
        return ttip;
    }
    function handleInteractive() {
        rects.on('mouseover', function (d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).style('fill', d3__WEBPACK_IMPORTED_MODULE_0__["color"](d.color).brighter(1.5).toString());
            tooltip.select('text.title1').text(`序号：${d.num}`);
            tooltip.select('text.title2').text(`里程：${d.mileage}km`);
        })
            .on('mouseout', function (d) {
            tooltip.attr('transform', 'translate(-100,-100)');
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).style('fill', d3__WEBPACK_IMPORTED_MODULE_0__["color"](d.color).brighter(0.5).toString());
        })
            .on('mousemove', function () {
            const m = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](this);
            tooltip.attr('transform', `translate(${m[0] + 20}, ${m[1]})`);
        });
        // 当超出图标的图形将其隐藏
        svg.append('defs').append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('transform', `translate(${config.chartMarginL}, ${config.chartMarginT})`)
            .attr('width', config.chartWidth - config.chartMarginL - config.chartMarginR)
            .attr('height', config.chartHeight - config.chartMarginT - config.chartMarginB);
        // 处理放大缩小
        const zm = d3__WEBPACK_IMPORTED_MODULE_0__["zoom"]()
            .translateExtent([[config.chartMarginL, config.chartMarginT], [config.chartWidth - config.chartMarginL, config.chartHeight - config.chartMarginT]])
            .scaleExtent([1, 2])
            .extent([[config.chartMarginL, config.chartMarginT], [config.chartWidth - config.chartMarginL, config.chartHeight - config.chartMarginT]])
            .on('zoom', () => {
            const tmpx = d3__WEBPACK_IMPORTED_MODULE_0__["event"].transform.rescaleX(x);
            xg.call(xAxis.scale(tmpx));
            rects.attr('x', (d) => config.chartMarginL + tmpx(new Date(d.b)))
                .attr('width', (d) => tmpx(new Date(d.e)) - tmpx(new Date(d.b)));
        });
        zm(svg);
        if (flag) {
            zm.scaleTo(svg, 1.5);
            zm.translateTo(svg, 0, 0);
        }
    }
});
/* harmony default export */ __webpack_exports__["default"] = ({});


/***/ }),

/***/ "F6bg":
/*!**********************************!*\
  !*** ./src/unequalbar/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "/Ujk");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "/Ujk", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "/Ujk");

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5lcXVhbGJhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZXF1YWxiYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZXF1YWxiYXIvaW5kZXguY3NzPzBhNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsK0RBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLFdBQVcsa0NBQWtDLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsdUJBQXVCLDRCQUE0QixHQUFHLHNCQUFzQixpQkFBaUIsb0JBQW9CLGtDQUFrQyxHQUFHLHVCQUF1QixpQkFBaUIsbUJBQW1CLHVCQUF1QixNQUFNLFdBQVcsbUJBQW1CLGlCQUFpQiwwQkFBMEIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0Z6ZDtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUNKO0FBRXJCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1CN0MsQ0FBQyxDQUFDO0FBK0JILE1BQU0sTUFBTSxHQUFlO0lBQ3ZCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFlBQVksRUFBRSxFQUFFO0NBQ25CLENBQUM7QUFFRix1Q0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDMUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsVUFBVTtJQUM1QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLFdBQVcs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QUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7UUFDUCxFQUFFLENBQUMsR0FBVSxDQUFDLENBQUM7UUFFZixJQUFJLElBQUksRUFBRTtZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVZLGlFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3UWxCLGNBQWMsbUJBQU8sQ0FBQyxvRUFBeUQ7O0FBRS9FLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw4REFBbUQ7O0FBRXhFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixvRUFBeUQ7QUFDNUUsbUJBQW1CLG1CQUFPLENBQUMsb0VBQXlEOztBQUVwRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJ1bmVxdWFsYmFyLmQ5Zjg2NWZiYmJjODI4YWRkNWY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhcnQge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMzcsMzksNDYsMSk7XFxufVxcblxcbi5jaGFydCB0ZXh0e1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFuY2hvcjogZW5kO1xcbn1cXG5cXG4uY2hhcnQgLmF4aXMgdGV4dCB7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNoYXJ0IC5heGlzIHBhdGh7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59XFxuXFxuLmNoYXJ0IC5heGlzIGxpbmUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IG5vbmU7XFxuICAgIC8qIHN0cm9rZTogd2hpdGU7ICovXFxufVxcblxcbi56b29tIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIiwgXCJcIl0pO1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGRlZnM+XG4gICAgICAgIDxtYXJrZXJcbiAgICAgICAgICAgIGlkPVwiYXJyb3dcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICByZWZYPVwiNVwiXG4gICAgICAgICAgICByZWZZPVwiNVwiXG4gICAgICAgICAgICBtYXJrZXJXaWR0aD1cIjEwXCJcbiAgICAgICAgICAgIG1hcmtlckhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIG9yaWVudD1cImF1dG8tc3RhcnQtcmV2ZXJzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDAgMCBMIDEwIDUgTCAwIDEwIHpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8L21hcmtlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZkc1wiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgIDxmZURyb3BTaGFkb3cgaW49XCJTb3VyY2VHcmFwaGljXCIgZHg9XCI2XCIgZHk9XCIwXCIgc3RkRGV2aWF0aW9uPVwiNlwiLz5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgPC9kZWZzPlxuPC9zdmc+XG5gKTtcblxuLy8g5ZCO5Y+w6L+U5Zue55qE5pWw5o2u57uT5p6EXG4vLyBbXG4vLyAgICAge1xuLy8gICAgICAgICBiOiBcIjIwMTctMTEtMDFcIlxuLy8gICAgICAgICBjb2xvcjogXCJncmVlblwiXG4vLyAgICAgICAgIGU6IFwiMjAxNy0xMi0yNlwiXG4vLyAgICAgICAgIG1pbGVhZ2U6IDUwNlxuLy8gICAgICAgICBudW06IDBcbi8vICAgICB9XG4vLyAgICAgLi4uXG4vLyBdXG5cbi8qKlxuICog5Lia5Yqh6ZyA5rGCXG4gKiAxLiDmoLnmja7lkI7lj7Dov5Tlm57nmoRi5ZKMZeaMh+WumueahOW8gOWni+aXtumXtOWSjOe7k+adn+aXtumXtO+8jOeul+WHuuavj+S4gOS4quafseeKtuWbvueahOWuveW6plxuICogMi4gYuWSjGXpl7Tot53mmK/kuI3nrYnnmoTvvIzlubbkuJTkuZ/mmK/kuI3ov57nu63nmoRcbiAqIDMuIOWBmuWHuue8qeaUvuWSjOaLluWKqOaViOaenFxuICogNC4gdG9vbHRpcOi3n+maj+m8oOagh1xuICovXG5cbmludGVyZmFjZSBMaW5lQ29uZmlnIHtcbiAgICBjaGFydFdpZHRoOiBudW1iZXI7XG4gICAgY2hhcnRIZWlnaHQ6IG51bWJlcjtcbiAgICBjaGFydE1hcmdpbkw6IG51bWJlcjtcbiAgICBjaGFydE1hcmdpblI6IG51bWJlcjtcbiAgICBjaGFydE1hcmdpblQ6IG51bWJlcjtcbiAgICBjaGFydE1hcmdpbkI6IG51bWJlcjtcbn1cblxuY29uc3QgY29uZmlnOiBMaW5lQ29uZmlnID0ge1xuICAgIGNoYXJ0V2lkdGg6IDEyMDAsXG4gICAgY2hhcnRIZWlnaHQ6IDMwMCxcbiAgICBjaGFydE1hcmdpbkw6IDUwLFxuICAgIGNoYXJ0TWFyZ2luUjogNTAsXG4gICAgY2hhcnRNYXJnaW5UOiA1MCxcbiAgICBjaGFydE1hcmdpbkI6IDUwLFxufTtcblxuZDMuanNvbignLi9zdGF0aWMvc3BlY2lhbC5qc29uJykudGhlbigocmVzKSA9PiB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTsgLy8g5piv5ZCm6ZyA6KaB6aKE57yp5pS+XG4gICAgY29uc3QgZGF0YSA9IHJlcy5saXN0O1xuICAgIGNvbnN0IHN2ZyA9IGdlbmVyYXRlU3ZnKCk7XG4gICAgbGV0IHhnOiBhbnk7XG4gICAgbGV0IHhBeGlzOiBhbnk7XG4gICAgZ2VuZXJhdGVUb3BUYWJzKCk7XG4gICAgY29uc3QgeCA9IGdlbmVyYXRlWCgpO1xuICAgIGNvbmZpZ1goKTtcbiAgICBjb25zdCB5ID0gZ2VuZXJhdGVZKCk7XG4gICAgY29uZmlnWSgpO1xuICAgIGNvbnN0IHJlY3RzID0gZHJhd1JlY3RzKCk7XG4gICAgY29uc3QgdG9vbHRpcCA9IGdlbmVyYXRlVG9vbHRpcCgpO1xuICAgIGhhbmRsZUludGVyYWN0aXZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVN2ZygpIHtcbiAgICAgICAgcmV0dXJuIGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NoYXJ0JylcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBjb25maWcuY2hhcnRXaWR0aClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgY29uZmlnLmNoYXJ0SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVgoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGRhdGFbMF0uYik7XG4gICAgICAgIHN0YXJ0VGltZS5zZXRNb250aChzdGFydFRpbWUuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmUpO1xuICAgICAgICBlbmRUaW1lLnNldE1vbnRoKGVuZFRpbWUuZ2V0TW9udGgoKSArIDEpO1xuXG4gICAgICAgIHJldHVybiBkMy5zY2FsZVRpbWUoKS5kb21haW4oW1xuICAgICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgXSkucmFuZ2UoWzAsIGNvbmZpZy5jaGFydFdpZHRoIC0gY29uZmlnLmNoYXJ0TWFyZ2luUiAtIGNvbmZpZy5jaGFydE1hcmdpbkxdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdYKCkge1xuICAgICAgICAvLyDlrprkuYl45Z2Q5qCH6L20XG4gICAgICAgIGNvbnN0IGZvbWF0ZVRpbWUgPSBkMy50aW1lRm9ybWF0KCclWS0lbScpO1xuICAgICAgICB4ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3ggYXhpcycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NvbmZpZy5jaGFydE1hcmdpbkx9LCAke2NvbmZpZy5jaGFydEhlaWdodCAtIGNvbmZpZy5jaGFydE1hcmdpbkJ9KWApO1xuICAgICAgICB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeClcbiAgICAgICAgICAgIC50aWNrQXJndW1lbnRzKFtkMy50aW1lTW9udGguZXZlcnkoMyldKVxuICAgICAgICAgICAgLnRpY2tTaXplKDApXG4gICAgICAgICAgICAudGlja1BhZGRpbmcoOClcbiAgICAgICAgICAgIC50aWNrRm9ybWF0KGZvbWF0ZVRpbWUgYXMgYW55KTtcbiAgICAgICAgeEF4aXMoeGcpO1xuICAgICAgICB4Zy5zZWxlY3QoJ3BhdGgnKS5hdHRyKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVZKCkge1xuICAgICAgICByZXR1cm4gZDNcbiAgICAgICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFswLCAxLjEgKiAoZDMubWF4KGRhdGEsIChkOiBhbnkpID0+IGQubWlsZWFnZSkgYXMgYW55KV0pXG4gICAgICAgICAgICAucmFuZ2UoW2NvbmZpZy5jaGFydEhlaWdodCAtIGNvbmZpZy5jaGFydE1hcmdpblQgLSBjb25maWcuY2hhcnRNYXJnaW5CLCAwXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlnWSgpIHtcbiAgICAgICAgLy8g5a6a5LmJeeWdkOagh+i9tFxuICAgICAgICBjb25zdCB5ZyA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NvbmZpZy5jaGFydE1hcmdpblR9LCAke2NvbmZpZy5jaGFydE1hcmdpbkx9KWApO1xuICAgICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHkpXG4gICAgICAgICAgICAudGlja3MoMTApXG4gICAgICAgICAgICAudGlja1NpemUoMClcbiAgICAgICAgICAgIC50aWNrUGFkZGluZyg4KTtcbiAgICAgICAgeUF4aXMoeWcpO1xuICAgICAgICB5Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtNSlcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMTUpXG4gICAgICAgICAgICAudGV4dCgn6YeM56iLJyk7XG4gICAgICAgIHlnLnNlbGVjdCgncGF0aCcpLmF0dHIoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRvcFRhYnMoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogKGQzLmNvbG9yKCdvcmFuZ2UnKSBhcyBhbnkpLmJyaWdodGVyKDAuNSksXG4gICAgICAgICAgICAgICAgdGV4dDogJz4gMjUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogKGQzLmNvbG9yKCdncmVlbicpIGFzIGFueSkuYnJpZ2h0ZXIoMC41KSxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnMjUgLSAxMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAoZDMuY29sb3IoJ3NreWJsdWUnKSBhcyBhbnkpLmJyaWdodGVyKDAuNSksXG4gICAgICAgICAgICAgICAgdGV4dDogJzEwIC0gMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAoZDMuY29sb3IoJ2JsdWUnKSBhcyBhbnkpLmJyaWdodGVyKDAuNSksXG4gICAgICAgICAgICAgICAgdGV4dDogJzwgMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBzdmdcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgICAgICAgLmRhdGEoY29sb3JzKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgNTApXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMzApXG4gICAgICAgICAgICAuYXR0cigneCcsIChkLCBpKSA9PiAxMDAgKyBpICogNTApXG4gICAgICAgICAgICAuYXR0cigneScsIDEwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCkgPT4gZC5jb2xvcik7XG4gICAgICAgIHN2Z1xuICAgICAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuZGF0YShjb2xvcnMpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIChkLCBpKSA9PiAxMzggKyBpICogNTApXG4gICAgICAgICAgICAuYXR0cigneScsIDI4KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IGQudGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd1JlY3RzKCkge1xuICAgICAgICByZXR1cm4gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjY2xpcCknKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQ6IGFueSkgPT4gKGQzLmNvbG9yKGQuY29sb3IpIGFzIGFueSkuYnJpZ2h0ZXIoMC41KS50b1N0cmluZygpKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbHRlcicsICd1cmwoI2ZkcyknKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZDogYW55KSA9PiBjb25maWcuY2hhcnRNYXJnaW5MICsgeChuZXcgRGF0ZShkLmIpKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQ6IGFueSkgPT4gY29uZmlnLmNoYXJ0TWFyZ2luVCArIHkoZC5taWxlYWdlKSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZDogYW55KSA9PiBjb25maWcuY2hhcnRIZWlnaHQgLSBjb25maWcuY2hhcnRNYXJnaW5UIC0gY29uZmlnLmNoYXJ0TWFyZ2luQiAtIHkoZC5taWxlYWdlKSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIChkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0dyA9IHgobmV3IERhdGUoZC5lKSkgLSB4KG5ldyBEYXRlKGQuYikpO1xuICAgICAgICAgICAgICAgIGlmICh0dyA8IDIwICYmIGRhdGEubGVuZ3RoID49IDE4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHc7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRvb2x0aXAoKSB7XG4gICAgICAgIC8vIOWkhOeQhuS6pOS6kuWKn+iDvVxuICAgICAgICBjb25zdCB0dGlwID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtMTAwLC0xMDApJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdmb2N1cycpO1xuXG4gICAgICAgIHR0aXAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICdyZ2JhKDEwNSwgMTIxLCAxMzEsIDAuOCknKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgODApXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgNjApXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cigneScsIDApO1xuXG4gICAgICAgIHR0aXAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZTEnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCA0NSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgMjApO1xuXG4gICAgICAgIHR0aXAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd0aXRsZTInKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCA3MClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgNDApO1xuICAgICAgICByZXR1cm4gdHRpcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVJbnRlcmFjdGl2ZSgpIHtcbiAgICAgICAgcmVjdHMub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQ6IGFueSkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdmaWxsJywgKGQzLmNvbG9yKGQuY29sb3IpIGFzIGFueSkuYnJpZ2h0ZXIoMS41KS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgdG9vbHRpcC5zZWxlY3QoJ3RleHQudGl0bGUxJykudGV4dChg5bqP5Y+377yaJHtkLm51bX1gKTtcbiAgICAgICAgICAgIHRvb2x0aXAuc2VsZWN0KCd0ZXh0LnRpdGxlMicpLnRleHQoYOmHjOeoi++8miR7ZC5taWxlYWdlfWttYCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbihkOiBhbnkpIHtcbiAgICAgICAgICAgIHRvb2x0aXAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtMTAwLC0xMDApJyk7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2ZpbGwnLCAoZDMuY29sb3IoZC5jb2xvcikgYXMgYW55KS5icmlnaHRlcigwLjUpLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IGQzLm1vdXNlKHRoaXMpO1xuICAgICAgICAgICAgdG9vbHRpcC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bVswXSArIDIwfSwgJHttWzFdfSlgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5b2T6LaF5Ye65Zu+5qCH55qE5Zu+5b2i5bCG5YW26ZqQ6JePXG4gICAgICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5hcHBlbmQoJ2NsaXBQYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdjbGlwJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjb25maWcuY2hhcnRNYXJnaW5MfSwgJHtjb25maWcuY2hhcnRNYXJnaW5UfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgY29uZmlnLmNoYXJ0V2lkdGggLSBjb25maWcuY2hhcnRNYXJnaW5MIC0gY29uZmlnLmNoYXJ0TWFyZ2luUilcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBjb25maWcuY2hhcnRIZWlnaHQgLSBjb25maWcuY2hhcnRNYXJnaW5UIC0gY29uZmlnLmNoYXJ0TWFyZ2luQik7XG5cbiAgICAgICAgLy8g5aSE55CG5pS+5aSn57yp5bCPXG4gICAgICAgIGNvbnN0IHptID0gZDMuem9vbSgpXG4gICAgICAgICAgICAudHJhbnNsYXRlRXh0ZW50KFtbY29uZmlnLmNoYXJ0TWFyZ2luTCwgY29uZmlnLmNoYXJ0TWFyZ2luVF0sIFtjb25maWcuY2hhcnRXaWR0aCAtIGNvbmZpZy5jaGFydE1hcmdpbkwsIGNvbmZpZy5jaGFydEhlaWdodCAtIGNvbmZpZy5jaGFydE1hcmdpblRdXSlcbiAgICAgICAgICAgIC5zY2FsZUV4dGVudChbMSwgMl0pXG4gICAgICAgICAgICAuZXh0ZW50KFtbY29uZmlnLmNoYXJ0TWFyZ2luTCwgY29uZmlnLmNoYXJ0TWFyZ2luVF0sIFtjb25maWcuY2hhcnRXaWR0aCAtIGNvbmZpZy5jaGFydE1hcmdpbkwsIGNvbmZpZy5jaGFydEhlaWdodCAtIGNvbmZpZy5jaGFydE1hcmdpblRdXSlcbiAgICAgICAgICAgIC5vbignem9vbScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXB4ID0gZDMuZXZlbnQudHJhbnNmb3JtLnJlc2NhbGVYKHgpO1xuICAgICAgICAgICAgICAgIHhnLmNhbGwoeEF4aXMuc2NhbGUodG1weCkpO1xuICAgICAgICAgICAgICAgIHJlY3RzLmF0dHIoJ3gnLCAoZDogYW55KSA9PiBjb25maWcuY2hhcnRNYXJnaW5MICsgdG1weChuZXcgRGF0ZShkLmIpKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgKGQ6IGFueSkgPT4gdG1weChuZXcgRGF0ZShkLmUpKSAtIHRtcHgobmV3IERhdGUoZC5iKSkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgem0oc3ZnIGFzIGFueSk7XG5cbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHptLnNjYWxlVG8oc3ZnIGFzIGFueSwgMS41KTtcbiAgICAgICAgICAgIHptLnRyYW5zbGF0ZVRvKHN2ZyBhcyBhbnksIDAsIDApO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9