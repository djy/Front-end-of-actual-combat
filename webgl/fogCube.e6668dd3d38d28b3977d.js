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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9nQ3ViZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9nQ3ViZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb2dDdWJlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvZ0N1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9mb2dDdWJlL3NoYWRlcnMvVmVydGV4Lmdsc2wiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2wiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJzaGFkZXJzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXkiLCJsb2FkRmlsZSIsInB1c2giLCJpbml0V2ViR2wiLCJiZiIsIkdlbmVyYXRlQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJhbGVydCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInBvaW50Q29sb3IiLCJwZXJzcGV0aXZlTWF0cml4IiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwiZXllUG9zaXRpb24iLCJmb2dDb2xvciIsImZvZ0Rpc3RhbmNlIiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsInVuaWZvcm00ZnYiLCJ1bmlmb3JtM2Z2IiwidW5pZm9ybTJmdiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZVkiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBM0M7QUFDQUwsTUFBTSxDQUFDRyxZQUFQLENBQW9CLFFBQXBCLEVBQThCRixRQUFRLENBQUNHLElBQVQsQ0FBY0UsWUFBNUM7QUFFQUwsUUFBUSxDQUFDRyxJQUFULENBQWNHLFNBQWQsR0FBMEIsRUFBMUI7QUFDQU4sUUFBUSxDQUFDRyxJQUFULENBQWNJLE1BQWQsQ0FBcUJSLE1BQXJCO0FBQ0FDLFFBQVEsQ0FBQ0csSUFBVCxDQUFjSyxrQkFBZCxDQUFpQyxXQUFqQztBQUlBLElBQU1DLEVBQUUsR0FBR1YsTUFBTSxDQUFDVyxVQUFQLENBQWtCLE9BQWxCLENBQVg7O0FBQ0EsSUFBTUMsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUgsR0FBc0IvRCxFQUFFLENBQUNnRSxnQkFBbEM7QUFDQWhCLGFBQVcsQ0FBQyxHQUFELENBQVg7QUFDSCxDOzs7Ozs7Ozs7OztBQ2hFRCxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJDIiwiZmlsZSI6ImZvZ0N1YmUuZTY2NjhkZDNkMzhkMjhiMzk3N2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG48YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlj7NcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlt6ZcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgICAgLy8g5YmNXG4gICAgICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIOWQjlxuICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAgIC8vIOmhtlxuICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgIC8vIOW6lVxuICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAgIC8vIOWPs1xuICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLCAgIC8vIOW3plxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgY29sb3JCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9ufSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Q29sb3InKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICBjb25zdCBleWVQb3NpdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnZXllUG9zaXRpb24nKTtcbiAgICBjb25zdCBmb2dDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnZm9nQ29sb3InKTtcbiAgICBjb25zdCBmb2dEaXN0YW5jZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnZm9nRGlzdGFuY2UnKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjMwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbMywgMywgN10pO1xuXG4gICAgLy8g6K6+572u6Zu+55qE5Yeg5Liq5Y+C5pWwXG4gICAgZ2wudW5pZm9ybTRmdihleWVQb3NpdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbMywgMywgNywgMV0pKTtcbiAgICBnbC51bmlmb3JtM2Z2KGZvZ0NvbG9yLCBuZXcgRmxvYXQzMkFycmF5KFswLjAsIDAuMCwgMC4wXSkpO1xuICAgIGdsLnVuaWZvcm0yZnYoZm9nRGlzdGFuY2UsIG5ldyBGbG9hdDMyQXJyYXkoWzUsIDguMl0pKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQucm90YXRlWSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9XG5cbiAgICBcbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgIGRyYXdHcmFwaGljKDAuMCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmI0OTFhZDE2MzYyNGE0YjJiMzllNzE2ZTBkMjFmZDkuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjMzUwYjJjNTM3N2M1OGNlNzExZjFkMjBhNDJiY2I5Lmdsc2xcIjsiXSwic291cmNlUm9vdCI6IiJ9