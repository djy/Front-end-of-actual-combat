(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fogCube"],{

/***/ "0hmc":
/*!******************************!*\
  !*** ./src/fogCube/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "FVN4");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "sV/f");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "qw6Z");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "M/3y");







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

/***/ "FVN4":
/*!********************************!*\
  !*** ./src/fogCube/buffers.js ***!
  \********************************/
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

/***/ "M/3y":
/*!*****************************!*\
  !*** ./src/fogCube/draw.js ***!
  \*****************************/
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
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix');
  var eyePosition = gl.getUniformLocation(shaderProgram, 'eyePosition');
  var fogColor = gl.getUniformLocation(shaderProgram, 'fogColor');
  var fogDistance = gl.getUniformLocation(shaderProgram, 'fogDistance'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]); // 设置雾的几个参数

  gl.uniform4fv(eyePosition, new Float32Array([3, 3, 7, 1]));
  gl.uniform3fv(fogColor, new Float32Array([0.0, 0.0, 0.0]));
  gl.uniform2fv(fogDistance, new Float32Array([5, 8.2]));

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

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  drawGraphic(0.0);
});

/***/ }),

/***/ "qw6Z":
/*!*******************************************!*\
  !*** ./src/fogCube/shaders/Fragment.glsl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb491ad163624a4b2b39e716e0d21fd9.glsl";

/***/ }),

/***/ "sV/f":
/*!*****************************************!*\
  !*** ./src/fogCube/shaders/Vertex.glsl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac350b2c5377c58ce711f1d20a42bcb9.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9nQ3ViZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9nQ3ViZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb2dDdWJlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvZ0N1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9mb2dDdWJlL3NoYWRlcnMvVmVydGV4Lmdsc2wiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiZ2wiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJzaGFkZXJzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXkiLCJsb2FkRmlsZSIsInB1c2giLCJpbml0V2ViR2wiLCJiZiIsIkdlbmVyYXRlQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJhbGVydCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInBvaW50Q29sb3IiLCJwZXJzcGV0aXZlTWF0cml4IiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwiZXllUG9zaXRpb24iLCJmb2dDb2xvciIsImZvZ0Rpc3RhbmNlIiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsInVuaWZvcm00ZnYiLCJ1bmlmb3JtM2Z2IiwidW5pZm9ybTJmdiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZVkiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBM0M7QUFDQUwsTUFBTSxDQUFDRyxZQUFQLENBQW9CLFFBQXBCLEVBQThCRixRQUFRLENBQUNHLElBQVQsQ0FBY0UsWUFBNUM7QUFFQUwsUUFBUSxDQUFDRyxJQUFULENBQWNHLFNBQWQsR0FBMEIsRUFBMUI7QUFDQU4sUUFBUSxDQUFDRyxJQUFULENBQWNJLE1BQWQsQ0FBcUJSLE1BQXJCLEUsQ0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVMsRUFBRSxHQUFHVCxNQUFNLENBQUNVLFVBQVAsQ0FBa0IsT0FBbEIsQ0FBWDs7QUFDQSxJQUFNQyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ01DLG1C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QUQsQ0FBWDtBQUNILEM7Ozs7Ozs7Ozs7O0FDaEVELGlCQUFpQixxQkFBdUIsMkM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMkMiLCJmaWxlIjoiZm9nQ3ViZS42M2FhNTgxNWRhOTRjZmRhMzA2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuLy8gZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbi8vIDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG4vLyBgKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJpbXBvcnQgeyBpbml0QnVmZmVyc0ZvckxhdGVyVXNlLCBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVCdWZmZXJzKGdsKSB7XG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K55Z2Q5qCHYnVmZmVyXG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIEZyb250IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCYWNrIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBUb3AgZmFjZVxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJvdHRvbSBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gUmlnaHQgZmFjZVxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBMZWZ0IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueminOiJsmJ1ZmZlclxuICAgIGNvbnN0IGNvbG9yQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIOWJjVxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWQjlxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIC8vIOmhtlxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW6lVxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWPs1xuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW3plxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K557Si5byVXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCAgICAvLyDliY1cbiAgICAgICAgNCwgNSwgNiwgNCwgNiwgNywgICAgLy8g5ZCOXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsICAgLy8g6aG2XG4gICAgICAgIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsICAgLy8g5bqVXG4gICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksICAgLy8g5Y+zXG4gICAgICAgIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsICAgLy8g5bemXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICBjb2xvckJ1ZmZlcixcbiAgICAgICAgaW5kZXhCdWZmZXIsXG4gICAgfVxufSIsImltcG9ydCB7c2V0RXllUG9zaXRpb259IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRDb2xvcicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIGNvbnN0IGV5ZVBvc2l0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdleWVQb3NpdGlvbicpO1xuICAgIGNvbnN0IGZvZ0NvbG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdmb2dDb2xvcicpO1xuICAgIGNvbnN0IGZvZ0Rpc3RhbmNlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdmb2dEaXN0YW5jZScpO1xuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBQZXJzcGV0aXZlTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihwZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFszLCAzLCA3XSk7XG5cbiAgICAvLyDorr7nva7pm77nmoTlh6DkuKrlj4LmlbBcbiAgICBnbC51bmlmb3JtNGZ2KGV5ZVBvc2l0aW9uLCBuZXcgRmxvYXQzMkFycmF5KFszLCAzLCA3LCAxXSkpO1xuICAgIGdsLnVuaWZvcm0zZnYoZm9nQ29sb3IsIG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wLCAwLjBdKSk7XG4gICAgZ2wudW5pZm9ybTJmdihmb2dEaXN0YW5jZSwgbmV3IEZsb2F0MzJBcnJheShbNSwgOC4yXSkpO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7ngrnpopzoibJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY29sb3JCdWZmZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludENvbG9yLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRDb2xvcik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5yb3RhdGVZKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIFxuICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgZHJhd0dyYXBoaWMoMC4wKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYjQ5MWFkMTYzNjI0YTRiMmIzOWU3MTZlMGQyMWZkOS5nbHNsXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWMzNTBiMmM1Mzc3YzU4Y2U3MTFmMWQyMGE0MmJjYjkuZ2xzbFwiOyJdLCJzb3VyY2VSb290IjoiIn0=