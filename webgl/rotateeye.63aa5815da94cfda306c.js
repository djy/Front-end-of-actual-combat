(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rotateeye"],{

/***/ "2Myn":
/*!*********************************************!*\
  !*** ./src/rotateEye/shaders/Fragment.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "9D60":
/*!*******************************************!*\
  !*** ./src/rotateEye/shaders/Vertex.glsl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b33160e24fc8b9fd03f33eeda2e396f.glsl";

/***/ }),

/***/ "PUge":
/*!********************************!*\
  !*** ./src/rotateEye/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "gll3");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "9D60");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "2Myn");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "zzNX");







var canvas = document.createElement('canvas');
canvas.setAttribute('width', document.body.clientWidth);
canvas.setAttribute('height', document.body.clientHeight);
document.body.innerHTML = '';
document.body.append(canvas);
document.body.insertAdjacentHTML('beforeend', "\n    <p style=\"position:absolute;top:0;color:white;padding-left:20px;\">\u6309\u2190\u952E\u548C\u2192\u952E\u8C03\u6574\u89C6\u91CE\u65B9\u4F4D</p>\n    "); // document.body.insertAdjacentHTML('beforeend', `
// <button style="position:absolute;top: 50px;left:20px;" type="button" onclick="history.go(-1);">返回</button>
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

/***/ "gll3":
/*!**********************************!*\
  !*** ./src/rotateEye/buffers.js ***!
  \**********************************/
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

/***/ "zzNX":
/*!*******************************!*\
  !*** ./src/rotateEye/draw.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var pointColor = gl.getAttribLocation(shaderProgram, 'pointColor');
  var orthoMatrix = gl.getUniformLocation(shaderProgram, 'orthoMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix'); // 正交投影视觉量（也就是定义一个盒子，只有盒子里面的物体才能被看到）不管距离远近显示的大小一样
  // mat4.ortho(out, left, right, bottom, top, near, far);
  // left, right, bottom, top 设置成 -1, 1, -1, 1 表示按照原比例展示图形

  var OrthoMatrix = mat4.create();
  mat4.ortho(OrthoMatrix, -2, 2, -2, 2, -2.0, 2.0); // 原始图形缩小一倍

  gl.uniformMatrix4fv(orthoMatrix, false, OrthoMatrix);

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

  var r = 0.5,
      ang = 10.0;

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 39:
        ang += 1;
        break;
      // 右箭头

      case 37:
        ang -= 1;
        break;
      // 左箭头

      default:
        return;
      // Prevent the unnecessary drawing
    } // 视野绕y周旋转


    Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [r * Math.sin(Math.PI / 180 * ang), 0.5, r * Math.cos(Math.PI / 180 * ang)]);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    drawGraphic(0.0);
  };

  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [r * Math.sin(Math.PI / 180 * ang), 0.5, r * Math.cos(Math.PI / 180 * ang)]);
  drawGraphic(0.0);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm90YXRlRXllL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvcm90YXRlRXllL3NoYWRlcnMvVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdGF0ZUV5ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm90YXRlRXllL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdGF0ZUV5ZS9kcmF3LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImlubmVySFRNTCIsImFwcGVuZCIsImluc2VydEFkamFjZW50SFRNTCIsImdsIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwic2hhZGVycyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5IiwibG9hZEZpbGUiLCJwdXNoIiwiaW5pdFdlYkdsIiwiYmYiLCJHZW5lcmF0ZUJ1ZmZlcnMiLCJzaGFkZXJQcm9ncmFtIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiLCJ2ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiY29sb3JCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIiwiVWludDhBcnJheSIsIkJ1ZmZlcnMiLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwib3J0aG9NYXRyaXgiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2aWV3TWF0cml4IiwibW9kZWxNYXRyaXgiLCJPcnRob01hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJvcnRobyIsInVuaWZvcm1NYXRyaXg0ZnYiLCJkcmF3R3JhcGhpYyIsImFuZ2xlIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidHJhbmZvcm1NYXRyaXgiLCJyb3RhdGVZIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIiwiciIsImFuZyIsIm9ua2V5ZG93biIsImUiLCJrZXlDb2RlIiwic2V0RXllUG9zaXRpb24iLCJNYXRoIiwic2luIiwiUEkiLCJjb3MiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFNLENBQUNHLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUEzQztBQUNBTCxNQUFNLENBQUNHLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxZQUE1QztBQUVBTCxRQUFRLENBQUNHLElBQVQsQ0FBY0csU0FBZCxHQUEwQixFQUExQjtBQUNBTixRQUFRLENBQUNHLElBQVQsQ0FBY0ksTUFBZCxDQUFxQlIsTUFBckI7QUFDQUMsUUFBUSxDQUFDRyxJQUFULENBQWNLLGtCQUFkLENBQ0ksV0FESixrSyxDQU1BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxFQUFFLEdBQUdWLE1BQU0sQ0FBQ1csVUFBUCxDQUFrQixPQUFsQixDQUFYOztBQUNBLElBQU1DLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHO0FB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QUF1Q0QsQ0FBQyxHQUFHTSxJQUFJLENBQUNHLEdBQUwsQ0FBVUgsSUFBSSxDQUFDRSxFQUFMLEdBQVEsR0FBVCxHQUFjUCxHQUF2QixDQUEzQyxDQUFqQixDQUFkO0FBQ0FkLGFBQVcsQ0FBQyxHQUFELENBQVg7QUFDSCxDIiwiZmlsZSI6InJvdGF0ZWV5ZS42M2FhNTgxNWRhOTRjZmRhMzA2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3MGZmOWM3Zjc3NTcyODZhZTdjNGEyMTEwYjAwZGIwLmdsc2xcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YjMzMTYwZTI0ZmM4YjlmZDAzZjMzZWVkYTJlMzk2Zi5nbHNsXCI7IiwiaW1wb3J0IHsgaW5pdFdlYkdsLCBsb2FkRmlsZSwgaW5pdFNoYWRlclByb2dyYW0gfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5pbXBvcnQgR2VuZXJhdGVCdWZmZXJzIGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB2ZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFVybCBmcm9tICcuL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9kcmF3LmpzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNhbnZhcyk7XG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAnYmVmb3JlZW5kJywgXG4gICAgYFxuICAgIDxwIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Y29sb3I6d2hpdGU7cGFkZGluZy1sZWZ0OjIwcHg7XCI+5oyJ4oaQ6ZSu5ZKM4oaS6ZSu6LCD5pW06KeG6YeO5pa55L2NPC9wPlxuICAgIGBcbilcbi8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4vLyA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiA1MHB4O2xlZnQ6MjBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuLy8gYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlj7NcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlt6ZcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgICAgLy8g5YmNXG4gICAgICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIOWQjlxuICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAgIC8vIOmhtlxuICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgIC8vIOW6lVxuICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAgIC8vIOWPs1xuICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLCAgIC8vIOW3plxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgY29sb3JCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9ufSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Q29sb3InKTtcblxuICAgIGNvbnN0IG9ydGhvTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdvcnRob01hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIC8vIOato+S6pOaKleW9seinhuiniemHj++8iOS5n+WwseaYr+WumuS5ieS4gOS4quebkuWtkO+8jOWPquacieebkuWtkOmHjOmdoueahOeJqeS9k+aJjeiDveiiq+eci+WIsO+8ieS4jeeuoei3neemu+i/nOi/keaYvuekuueahOWkp+Wwj+S4gOagt1xuICAgIC8vIG1hdDQub3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcik7XG4gICAgLy8gbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wIOiuvue9ruaIkCAtMSwgMSwgLTEsIDEg6KGo56S65oyJ54Wn5Y6f5q+U5L6L5bGV56S65Zu+5b2iXG4gICAgY29uc3QgT3J0aG9NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQub3J0aG8oT3J0aG9NYXRyaXgsIC0yLCAyLCAtMiwgMiwgLTIuMCwgMi4wKTsgLy8g5Y6f5aeL5Zu+5b2i57yp5bCP5LiA5YCNXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihvcnRob01hdHJpeCwgZmFsc2UsIE9ydGhvTWF0cml4KTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQucm90YXRlWSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9XG5cbiAgICBsZXQgciA9IDAuNSwgYW5nID0gMTAuMDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzk6IGFuZyArPSAxOyBicmVhazsgLy8g5Y+z566t5aS0XG4gICAgICAgICAgICBjYXNlIDM3OiBhbmcgLT0gMTsgYnJlYWs7IC8vIOW3pueureWktFxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuOyAvLyBQcmV2ZW50IHRoZSB1bm5lY2Vzc2FyeSBkcmF3aW5nXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOinhumHjue7lXnlkajml4vovaxcbiAgICAgICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFtyICogTWF0aC5zaW4oKE1hdGguUEkvMTgwKSphbmcpLCAwLjUsIHIgKiBNYXRoLmNvcygoTWF0aC5QSS8xODApKmFuZyldKTtcbiAgICAgICAgXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgZHJhd0dyYXBoaWMoMC4wKTtcbiAgICB9XG5cbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgW3IgKiBNYXRoLnNpbigoTWF0aC5QSS8xODApKmFuZyksIDAuNSwgciAqIE1hdGguY29zKChNYXRoLlBJLzE4MCkqYW5nKV0pO1xuICAgIGRyYXdHcmFwaGljKDAuMCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==