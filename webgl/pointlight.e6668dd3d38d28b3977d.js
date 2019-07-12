(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pointlight"],{

/***/ "4RDF":
/*!**********************************************!*\
  !*** ./src/pointLight/shaders/Fragment.glsl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "JKOo":
/*!*********************************!*\
  !*** ./src/pointLight/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "Oy1M");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "gnUu");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "4RDF");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "ylzK");







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

/***/ "Oy1M":
/*!***********************************!*\
  !*** ./src/pointLight/buffers.js ***!
  \***********************************/
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
  1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0])); // 立方体每个面的法线单位向量，向量方向由绘制点的右手法则确定

  var normalBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// 前
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, // 后
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, // 顶
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // 底
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, // 右
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, // 左
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0])); // 立方体每个面的点索引

  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3, // 前
  4, 5, 6, 4, 6, 7, // 后
  8, 9, 10, 8, 10, 11, // 顶
  12, 13, 14, 12, 14, 15, // 底
  16, 17, 18, 16, 18, 19, // 右
  20, 21, 22, 20, 22, 23]));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    normalBuffer: normalBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "gnUu":
/*!********************************************!*\
  !*** ./src/pointLight/shaders/Vertex.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f39bdeaeb31bd01eda7b7ed13dd24e56.glsl";

/***/ }),

/***/ "ylzK":
/*!********************************!*\
  !*** ./src/pointLight/draw.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var pointColor = gl.getAttribLocation(shaderProgram, 'pointColor');
  var pointNormal = gl.getAttribLocation(shaderProgram, 'pointNormal');
  var pointLightColor = gl.getUniformLocation(shaderProgram, 'pointLightColor');
  var ambientLightColor = gl.getUniformLocation(shaderProgram, 'ambientLightColor');
  var inverseTranspose = gl.getUniformLocation(shaderProgram, 'inverseTranspose');
  var pointLightPosition = gl.getUniformLocation(shaderProgram, 'pointLightPosition');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]); // 设置方向光源漫反射

  gl.uniform3f(pointLightColor, 1.0, 1.0, 1.0); // 设置方向光源（漫反射）颜色

  gl.uniform3f(ambientLightColor, 0.2, 0.2, 0.2); // 环境光源颜色

  gl.uniform3f(pointLightPosition, 3.0, 3.0, 0.0);

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置面法线向量

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.normalBuffer);
    gl.vertexAttribPointer(pointNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointNormal); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotateY(tranformMatrix, tranformMatrix, angle);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer); // 设置面法线向量修正，需要在原始的向量上乘以 tranformMatrix 的逆转置矩阵

    var inverseTransposeTranformMatrix = mat4.create();
    mat4.invert(inverseTransposeTranformMatrix, tranformMatrix);
    mat4.transpose(inverseTransposeTranformMatrix, inverseTransposeTranformMatrix);
    gl.uniformMatrix4fv(inverseTranspose, false, inverseTransposeTranformMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcG9pbnRMaWdodC9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50TGlnaHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50TGlnaHQvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9pbnRMaWdodC9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9wb2ludExpZ2h0L2RyYXcuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2wiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJzaGFkZXJzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXkiLCJsb2FkRmlsZSIsInB1c2giLCJpbml0V2ViR2wiLCJiZiIsIkdlbmVyYXRlQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJhbGVydCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsIm5vcm1hbEJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInBvaW50Q29sb3IiLCJwb2ludE5vcm1hbCIsInBvaW50TGlnaHRDb2xvciIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImFtYmllbnRMaWdodENvbG9yIiwiaW52ZXJzZVRyYW5zcG9zZSIsInBvaW50TGlnaHRQb3NpdGlvbiIsInBlcnNwZXRpdmVNYXRyaXgiLCJ2aWV3TWF0cml4IiwibW9kZWxNYXRyaXgiLCJQZXJzcGV0aXZlTWF0cml4IiwibWF0NCIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiTWF0aCIsIlBJIiwidW5pZm9ybU1hdHJpeDRmdiIsInNldEV5ZVBvc2l0aW9uIiwidW5pZm9ybTNmIiwiZHJhd0dyYXBoaWMiLCJhbmdsZSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInRyYW5mb3JtTWF0cml4Iiwicm90YXRlWSIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4IiwiaW52ZXJ0IiwidHJhbnNwb3NlIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsInRoZW4iLCJyZW5kZXIiLCJub3ciLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBM0M7QUFDQUwsTUFBTSxDQUFDRyxZQUFQLENBQW9CLFFBQXBCLEVBQThCRixRQUFRLENBQUNHLElBQVQsQ0FBY0UsWUFBNUM7QUFFQUwsUUFBUSxDQUFDRyxJQUFULENBQWNHLFNBQWQsR0FBMEIsRUFBMUI7QUFDQU4sUUFBUSxDQUFDRyxJQUFULENBQWNJLE1BQWQsQ0FBcUJSLE1B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b0QsQ0FBcEQ7QUFDSCxHQWxERDs7QUFxREEsTUFBSWQsS0FBSyxHQUFHLEdBQVo7QUFDQSxNQUFJZSxJQUFJLEdBQUcsR0FBWDs7QUFDQSxXQUFTQyxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUVqQkEsT0FBRyxJQUFJLEtBQVA7QUFDQWpCLFNBQUssSUFBSWlCLEdBQUcsR0FBR0YsSUFBZjtBQUNBQSxRQUFJLEdBQUdFLEdBQVA7QUFFQW5FLE1BQUUsQ0FBQ29FLFVBQUgsQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCO0FBQ0FwRSxNQUFFLENBQUNxRSxLQUFILENBQVNyRSxFQUFFLENBQUNzRSxnQkFBSCxHQUFzQnRFLEVBQUUsQ0FBQ3VFLGdCQUFsQztBQUNBdEIsZUFBVyxDQUFDQyxLQUFELENBQVg7QUFFQXNCLHlCQUFxQixDQUFDTixNQUFELENBQXJCO0FBQ0g7O0FBQ0RNLHVCQUFxQixDQUFDTixNQUFELENBQXJCO0FBQ0gsQyIsImZpbGUiOiJwb2ludGxpZ2h0LmU2NjY4ZGQzZDM4ZDI4YjM5NzdkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwZmY5YzdmNzc1NzI4NmFlN2M0YTIxMTBiMDBkYjAuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbjxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG5gKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJpbXBvcnQgeyBpbml0QnVmZmVyc0ZvckxhdGVyVXNlLCBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVCdWZmZXJzKGdsKSB7XG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K55Z2Q5qCHYnVmZmVyXG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIEZyb250IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCYWNrIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBUb3AgZmFjZVxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJvdHRvbSBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gUmlnaHQgZmFjZVxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBMZWZ0IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueminOiJsmJ1ZmZlclxuICAgIGNvbnN0IGNvbG9yQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIOWJjVxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWQjlxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIC8vIOmhtlxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW6lVxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWPs1xuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW3plxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE5rOV57q/5Y2V5L2N5ZCR6YeP77yM5ZCR6YeP5pa55ZCR55Sx57uY5Yi254K555qE5Y+z5omL5rOV5YiZ56Gu5a6aXG4gICAgY29uc3Qgbm9ybWFsQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIOWJjVxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWQjlxuICAgICAgICAwLjAsIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsIDAuMCwgLTEuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAtMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5Y+zXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bemXG4gICAgICAgIC0xLjAsIDAuMCwgMC4wLFxuICAgICAgICAtMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgLTEuMCwgMC4wLCAwLjAsXG4gICAgICAgIC0xLjAsIDAuMCwgMC4wLFxuXG4gICAgXSkpXG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnntKLlvJVcbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIGNvbG9yQnVmZmVyLFxuICAgICAgICBub3JtYWxCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMzliZGVhZWIzMWJkMDFlZGE3YjdlZDEzZGQyNGU1Ni5nbHNsXCI7IiwiaW1wb3J0IHtzZXRFeWVQb3NpdGlvbn0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEJ1ZmZlcnMsIGdsLCBzaGFkZXJQcm9ncmFtKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgcG9pbnRDb2xvciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludENvbG9yJyk7XG4gICAgY29uc3QgcG9pbnROb3JtYWwgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnROb3JtYWwnKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHRDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRMaWdodENvbG9yJyk7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0Q29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FtYmllbnRMaWdodENvbG9yJyk7XG5cbiAgICBjb25zdCBpbnZlcnNlVHJhbnNwb3NlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdpbnZlcnNlVHJhbnNwb3NlJyk7XG4gICAgY29uc3QgcG9pbnRMaWdodFBvc2l0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludExpZ2h0UG9zaXRpb24nKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcblxuICAgIC8vIOiuvue9ruaWueWQkeWFiea6kOa8q+WPjeWwhFxuICAgIGdsLnVuaWZvcm0zZihwb2ludExpZ2h0Q29sb3IsIDEuMCwgMS4wLCAxLjApOyAvLyDorr7nva7mlrnlkJHlhYnmupDvvIjmvKvlj43lsITvvInpopzoibJcbiAgICBnbC51bmlmb3JtM2YoYW1iaWVudExpZ2h0Q29sb3IsIDAuMiwgMC4yLCAwLjIpOyAvLyDnjq/looPlhYnmupDpopzoibJcbiAgICBnbC51bmlmb3JtM2YocG9pbnRMaWdodFBvc2l0aW9uLCAzLjAsIDMuMCwgMC4wKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50Q29sb3IsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludENvbG9yKTtcblxuICAgICAgICAvLyDorr7nva7pnaLms5Xnur/lkJHph49cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMubm9ybWFsQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50Tm9ybWFsLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Tm9ybWFsKTtcblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnJvdGF0ZVkodHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4LCBhbmdsZSk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuaW5kZXhCdWZmZXIpO1xuXG4gICAgICAgIC8vIOiuvue9rumdouazlee6v+WQkemHj+S/ruato++8jOmcgOimgeWcqOWOn+Wni+eahOWQkemHj+S4iuS5mOS7pSB0cmFuZm9ybU1hdHJpeCDnmoTpgIbovaznva7nn6npmLVcbiAgICAgICAgY29uc3QgaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5pbnZlcnQoaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIG1hdDQudHJhbnNwb3NlKGludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCwgaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihpbnZlcnNlVHJhbnNwb3NlLCBmYWxzZSwgaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4KTtcblxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfQllURSwgMCk7XG4gICAgfVxuXG4gICAgXG4gICAgbGV0IGFuZ2xlID0gMC4wO1xuICAgIGxldCB0aGVuID0gMC4wO1xuICAgIGZ1bmN0aW9uIHJlbmRlcihub3cpIHtcblxuICAgICAgICBub3cgKj0gMC4wMDE7XG4gICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgIHRoZW4gPSBub3c7XG5cbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgIGRyYXdHcmFwaGljKGFuZ2xlKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==