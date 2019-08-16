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
document.body.append(canvas); // document.body.insertAdjacentHTML('beforeend', `
// <button style="position:absolute;top: 10px;left:10px;" type="button" onclick="history.go(-1);">返回</button>
// `)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3ViZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9jdWJlL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9jdWJlL2RyYXcuanMiXSwibmFtZXMiOlsiR2VuZXJhdGVCdWZmZXJzIiwiZ2wiLCJ2ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiY29sb3JCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIiwiVWludDhBcnJheSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImlubmVySFRNTCIsImFwcGVuZCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwiQnVmZmVycyIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInBvaW50Q29sb3IiLCJwZXJzcGV0aXZlTWF0cml4IiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZVkiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJ0aGVuIiwicmVuZGVyIiwibm93IiwiY2xlYXJDb2xvciIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixxQkFBdUIsMkM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQ0YsRUFBRCxFQUFLLElBQUlHLFlBQUosQ0FBaUIsQ0FDN0Q7QUFDQSxHQUFDLEdBRjRELEVBRXZELENBQUMsR0FGc0QsRUFFaEQsR0FGZ0QsRUFHN0QsR0FINkQsRUFHeEQsQ0FBQyxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxHQUo2RCxFQUl2RCxHQUp1RCxFQUlqRCxHQUppRCxFQUs3RCxDQUFDLEdBTDRELEVBS3RELEdBTHNELEVBS2hELEdBTGdELEVBTzdEO0FBQ0EsR0FBQyxHQVI0RCxFQVF2RCxDQUFDLEdBUnNELEVBUWpELENBQUMsR0FSZ0QsRUFTN0QsQ0FBQyxHQVQ0RCxFQVN0RCxHQVRzRCxFQVNqRCxDQUFDLEdBVGdELEVBVTdELEdBVjZELEVBVXZELEdBVnVELEVBVWxELENBQUMsR0FWaUQsRUFXN0QsR0FYNkQsRUFXeEQsQ0FBQyxHQVh1RCxFQVdsRCxDQUFDLEdBWGlELEVBYTdEO0FBQ0EsR0FBQyxHQWQ0RCxFQWN0RCxHQWRzRCxFQWNqRCxDQUFDLEdBZGdELEVBZTdELENBQUMs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QyxLQUFqQyxFQUF3Q2dCLGNBQXhDO0FBQ0F6RCxNQUFFLENBQUNvRCxVQUFILENBQWNwRCxFQUFFLENBQUMyRCxvQkFBakIsRUFBdUN6QixPQUFPLENBQUM3QixXQUEvQztBQUNBTCxNQUFFLENBQUM0RCxZQUFILENBQWdCNUQsRUFBRSxDQUFDNkQsU0FBbkIsRUFBOEIsRUFBOUIsRUFBa0M3RCxFQUFFLENBQUM4RCxhQUFyQyxFQUFvRCxDQUFwRDtBQUNILEdBaENEOztBQW1DQSxNQUFJWCxLQUFLLEdBQUcsR0FBWjtBQUNBLE1BQUlZLElBQUksR0FBRyxHQUFYOztBQUNBLFdBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBRWpCQSxPQUFHLElBQUksS0FBUDtBQUNBZCxTQUFLLElBQUljLEdBQUcsR0FBR0YsSUFBZjtBQUNBQSxRQUFJLEdBQUdFLEdBQVA7QUFFQWpFLE1BQUUsQ0FBQ2tFLFVBQUgsQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCO0FBQ0FsRSxNQUFFLENBQUNtRSxLQUFILENBQVNuRSxFQUFFLENBQUNvRSxnQkFBSCxHQUFzQnBFLEVBQUUsQ0FBQ3FFLGdCQUFsQztBQUNBbkIsZUFBVyxDQUFDQyxLQUFELENBQVg7QUFFQW1CLHlCQUFxQixDQUFDTixNQUFELENBQXJCO0FBQ0g7O0FBQ0RNLHVCQUFxQixDQUFDTixNQUFELENBQXJCO0FBQ0gsQyIsImZpbGUiOiJjdWJlLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDkyNTczNDk0Zjk2N2M3MmY4MWY5ODI0ZTY0MjRmODUuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnlnZDmoIdidWZmZXJcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8gRnJvbnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJhY2sgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRvcCBmYWNlXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQm90dG9tIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBSaWdodCBmYWNlXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIExlZnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K56aKc6ImyYnVmZmVyXG4gICAgY29uc3QgY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8g5YmNXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG5cbiAgICAgICAgLy8g5ZCOXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG5cbiAgICAgICAgLy8g6aG2XG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bqVXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG5cbiAgICAgICAgLy8g5Y+zXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bemXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnntKLlvJVcbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIGNvbG9yQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICB9XG59IiwiaW1wb3J0IHsgaW5pdFdlYkdsLCBsb2FkRmlsZSwgaW5pdFNoYWRlclByb2dyYW0gfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5pbXBvcnQgR2VuZXJhdGVCdWZmZXJzIGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB2ZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFVybCBmcm9tICcuL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9kcmF3LmpzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNhbnZhcyk7XG4vLyBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuLy8gPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogMTBweDtsZWZ0OjEwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbi8vIGApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVyUHJvZ3JhbSk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3MGZmOWM3Zjc3NTcyODZhZTdjNGEyMTEwYjAwZGIwLmdsc2xcIjsiLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9ufSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Q29sb3InKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQucm90YXRlWSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9XG5cbiAgICBcbiAgICBsZXQgYW5nbGUgPSAwLjA7XG4gICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuXG4gICAgICAgIG5vdyAqPSAwLjAwMTtcbiAgICAgICAgYW5nbGUgKz0gbm93IC0gdGhlbjtcbiAgICAgICAgdGhlbiA9IG5vdztcblxuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgZHJhd0dyYXBoaWMoYW5nbGUpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9