(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cube"],{

/***/ "Ye9H":
/*!**************************************!*\
  !*** ./src/cube/shaders/Vertex.glsl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "092573494f967c72f81f9824e6424f85.glsl";

/***/ }),

/***/ "ZO6T":
/*!*****************************!*\
  !*** ./src/cube/buffers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  // 立方体每个面的点坐标buffer
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0])); // 立方体每个面的点颜色buffer

  var colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// 前
  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, // 后
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, // 顶
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // 底
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, // 右
  1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, // 左
  1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0])); // 立方体每个面的点索引

  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3, // 前
  4, 5, 6, 4, 6, 7, // 后
  8, 9, 10, 8, 10, 11, // 顶
  12, 13, 14, 12, 14, 15, // 底
  16, 17, 18, 16, 18, 19, // 右
  20, 21, 22, 20, 22, 23]));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "e0bR":
/*!***************************!*\
  !*** ./src/cube/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "ZO6T");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "Ye9H");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "egeK");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "z8Eu");







var canvas = document.createElement('canvas');
canvas.setAttribute('width', document.body.clientWidth);
canvas.setAttribute('height', document.body.clientHeight);
document.body.innerHTML = '';
document.body.append(canvas);
document.body.insertAdjacentHTML('beforeend', "\n<button style=\"position:absolute;top: 10px;left:10px;\" type=\"button\" onclick=\"history.go(-1);\">\u8FD4\u56DE</button>\n");
var gl = canvas.getContext("webgl");

var loadAllShaders =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var shaders,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        key,
        bf,
        shaderProgram,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 加载shader
            shaders = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = _args[Symbol.iterator]()[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 16;
              break;
            }

            key = _step.value;
            _context.t0 = shaders;
            _context.next = 11;
            return Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["loadFile"])(key);

          case 11:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 13:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t2 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 22:
            _context.prev = 22;
            _context.prev = 23;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 25:
            _context.prev = 25;

            if (!_didIteratorError) {
              _context.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context.finish(25);

          case 29:
            return _context.finish(22);

          case 30:
            // webgl所有的相关操作不能在异步流中执行，必须放在同步流中一气呵成，否则会出很多奇怪的问题
            // 初始化webgl
            Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initWebGl"])(gl); // 加载绘图用的buffer

            bf = Object(_buffers__WEBPACK_IMPORTED_MODULE_3__["default"])(gl); // 初始化shader

            shaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[0], shaders[1]);
            gl.useProgram(shaderProgram); // 画图

            Object(_draw_js__WEBPACK_IMPORTED_MODULE_6__["default"])(bf, gl, shaderProgram);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 18, 22, 30], [23,, 25, 29]]);
  }));

  return function loadAllShaders() {
    return _ref.apply(this, arguments);
  };
}();

if (gl) {
  // 加载loader
  loadAllShaders.apply(void 0, [_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default.a, _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default.a]);
} else {
  alert("你的浏览器不支持webgl.");
}

/***/ }),

/***/ "egeK":
/*!****************************************!*\
  !*** ./src/cube/shaders/Fragment.glsl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "z8Eu":
/*!**************************!*\
  !*** ./src/cube/draw.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var pointColor = gl.getAttribLocation(shaderProgram, 'pointColor');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]);

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotateY(tranformMatrix, tranformMatrix, angle);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var angle = 0.0;
  var then = 0.0;

  function render(now) {
    now *= 0.001;
    angle += now - then;
    then = now;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    drawGraphic(angle);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3ViZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9jdWJlL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9jdWJlL2RyYXcuanMiXSwibmFtZXMiOlsiR2VuZXJhdGVCdWZmZXJzIiwiZ2wiLCJ2ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiY29sb3JCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIiwiVWludDhBcnJheSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImlubmVySFRNTCIsImFwcGVuZCIsImluc2VydEFkamFjZW50SFRNTCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwiQnVmZmVycyIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInBvaW50Q29sb3IiLCJwZXJzcGV0aXZlTWF0cml4IiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZVkiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJ0aGVuIiwicmVuZGVyIiwibm93IiwiY2xlYXJDb2xvciIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixxQkFBdUIsMkM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQ0YsRUFBRCxFQUFLLElBQUlHLFlBQUosQ0FBaUIsQ0FDN0Q7QUFDQSxHQUFDLEdBRjRELEVBRXZELENBQUMsR0FGc0QsRUFFaEQsR0FGZ0QsRUFHN0QsR0FINkQsRUFHeEQsQ0FBQyxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxHQUo2RCxFQUl2RCxHQUp1RCxFQUlqRCxHQUppRCxFQUs3RCxDQUFDLEdBTDRELEVBS3RELEdBTHNELEVBS2hELEdBTGdELEVBTzdEO0FBQ0EsR0FBQyxHQVI0RCxFQVF2RCxDQUFDLEdBUnNELEVBUWpELENBQUMsR0FSZ0QsRUFTN0QsQ0FBQyxHQVQ0RCxFQVN0RCxHQVRzRCxFQVNqRCxDQUFDLEdBVGdELEVBVTdELEdBVjZELEVBVXZELEdBVnVELEVBVWxELENBQUMsR0FWaUQsRUFXN0QsR0FYNkQsRUFXeEQsQ0FBQyxHQVh1RCxFQVdsRCxDQUFDLEdBWGlELEVBYTdEO0FBQ0EsR0FBQyxHQWQ0RCxFQWN0RCxHQWRzRCxFQWNqRCxD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TixLQUE3QztBQUNBcEQsTUFBRSxDQUFDaUQsZ0JBQUgsQ0FBb0JQLFdBQXBCLEVBQWlDLEtBQWpDLEVBQXdDZ0IsY0FBeEM7QUFDQTFELE1BQUUsQ0FBQ3FELFVBQUgsQ0FBY3JELEVBQUUsQ0FBQzRELG9CQUFqQixFQUF1Q3pCLE9BQU8sQ0FBQzlCLFdBQS9DO0FBQ0FMLE1BQUUsQ0FBQzZELFlBQUgsQ0FBZ0I3RCxFQUFFLENBQUM4RCxTQUFuQixFQUE4QixFQUE5QixFQUFrQzlELEVBQUUsQ0FBQytELGFBQXJDLEVBQW9ELENBQXBEO0FBQ0gsR0FoQ0Q7O0FBbUNBLE1BQUlYLEtBQUssR0FBRyxHQUFaO0FBQ0EsTUFBSVksSUFBSSxHQUFHLEdBQVg7O0FBQ0EsV0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFFakJBLE9BQUcsSUFBSSxLQUFQO0FBQ0FkLFNBQUssSUFBSWMsR0FBRyxHQUFHRixJQUFmO0FBQ0FBLFFBQUksR0FBR0UsR0FBUDtBQUVBbEUsTUFBRSxDQUFDbUUsVUFBSCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7QUFDQW5FLE1BQUUsQ0FBQ29FLEtBQUgsQ0FBU3BFLEVBQUUsQ0FBQ3FFLGdCQUFILEdBQXNCckUsRUFBRSxDQUFDc0UsZ0JBQWxDO0FBQ0FuQixlQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUVBbUIseUJBQXFCLENBQUNOLE1BQUQsQ0FBckI7QUFDSDs7QUFDRE0sdUJBQXFCLENBQUNOLE1BQUQsQ0FBckI7QUFDSCxDIiwiZmlsZSI6ImN1YmUuZTY2NjhkZDNkMzhkMjhiMzk3N2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwOTI1NzM0OTRmOTY3YzcyZjgxZjk4MjRlNjQyNGY4NS5nbHNsXCI7IiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlj7NcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlt6ZcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgICAgLy8g5YmNXG4gICAgICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIOWQjlxuICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAgIC8vIOmhtlxuICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgIC8vIOW6lVxuICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAgIC8vIOWPs1xuICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLCAgIC8vIOW3plxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgY29sb3JCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG48YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwZmY5YzdmNzc1NzI4NmFlN2M0YTIxMTBiMDBkYjAuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb259IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRDb2xvcicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjMwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbMywgMywgN10pO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7ngrnpopzoibJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY29sb3JCdWZmZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludENvbG9yLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRDb2xvcik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5yb3RhdGVZKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIFxuICAgIGxldCBhbmdsZSA9IDAuMDtcbiAgICBsZXQgdGhlbiA9IDAuMDtcbiAgICBmdW5jdGlvbiByZW5kZXIobm93KSB7XG5cbiAgICAgICAgbm93ICo9IDAuMDAxO1xuICAgICAgICBhbmdsZSArPSBub3cgLSB0aGVuO1xuICAgICAgICB0aGVuID0gbm93O1xuXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICBkcmF3R3JhcGhpYyhhbmdsZSk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=