(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["triangle"],{

/***/ "2PQc":
/*!********************************************!*\
  !*** ./src/triangle/shaders/Fragment.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "E8sC":
/*!*******************************!*\
  !*** ./src/triangle/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "gW1W");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "szhx");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "2PQc");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "popF");







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

/***/ "gW1W":
/*!*********************************!*\
  !*** ./src/triangle/buffers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0]));
  var colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2]));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "popF":
/*!******************************!*\
  !*** ./src/triangle/draw.js ***!
  \******************************/
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
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [0, 10, 9]);

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置图形过渡

    var tranformMatrix = mat4.create(); // mat4.rotateY(tranformMatrix, tranformMatrix, angle);

    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_BYTE, 0);
  };

  drawGraphic(0.0);
});

/***/ }),

/***/ "szhx":
/*!******************************************!*\
  !*** ./src/triangle/shaders/Vertex.glsl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "092573494f967c72f81f9824e6424f85.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90cmlhbmdsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvc2hhZGVycy9WZXJ0ZXguZ2xzbCJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnbCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwidmVydGV4QnVmZmVyIiwiaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSIsIkZsb2F0MzJBcnJheSIsImNvbG9yQnVmZmVyIiwiaW5kZXhCdWZmZXIiLCJpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSIsIlVpbnQ4QXJyYXkiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwicG9pbnRDb2xvciIsInBlcnNwZXRpdmVNYXRyaXgiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2aWV3TWF0cml4IiwibW9kZWxNYXRyaXgiLCJQZXJzcGV0aXZlTWF0cml4IiwibWF0NCIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiTWF0aCIsIlBJIiwidW5pZm9ybU1hdHJpeDRmdiIsInNldEV5ZVBvc2l0aW9uIiwiZHJhd0dyYXBoaWMiLCJhbmdsZSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInRyYW5mb3JtTWF0cml4IiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFNLENBQUNHLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUEzQztBQUNBTCxNQUFNLENBQUNHLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxZQUE1QztBQUVBTCxRQUFRLENBQUNHLElBQVQsQ0FBY0csU0FBZCxHQUEwQixFQUExQjtBQUNBTixRQUFRLENBQUNHLElBQVQsQ0FBY0ksTUFBZCxDQUFxQlIsTUFBckI7QUFDQUMsUUFBUSxDQUFDRyxJQUFULENBQWNLLGtCQUFkLENBQWlDLFdBQWpDO0FBSUEsSUFBTUMsRUFBRSxHQUFHVixNQUFNLENBQUNXLFVBQVAsQ0FBa0IsT0FBbEIsQ0FBWDs7QUFDQSxJQUFNQyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ01DLG1CQUZhLEdBRUgsRUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBR0YsTUFBVUMsTUFBTSxDQUFD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LENBRkosRUFHSTdCLEVBQUUsQ0FBQytDLEtBSFAsRUFJSSxLQUpKLEVBS0ksQ0FMSixFQU1JLENBTko7QUFRQS9DLE1BQUUsQ0FBQ2dELHVCQUFILENBQTJCbkIsVUFBM0IsRUF4QmdDLENBMEJoQzs7QUFDQSxRQUFNb0IsY0FBYyxHQUFHZCxJQUFJLENBQUNDLE1BQUwsRUFBdkIsQ0EzQmdDLENBNEJoQzs7QUFDQXBDLE1BQUUsQ0FBQ3dDLGdCQUFILENBQW9CUCxXQUFwQixFQUFpQyxLQUFqQyxFQUF3Q2dCLGNBQXhDO0FBQ0FqRCxNQUFFLENBQUM0QyxVQUFILENBQWM1QyxFQUFFLENBQUNrRCxvQkFBakIsRUFBdUN4QixPQUFPLENBQUNILFdBQS9DO0FBQ0F2QixNQUFFLENBQUNtRCxZQUFILENBQWdCbkQsRUFBRSxDQUFDb0QsU0FBbkIsRUFBOEIsQ0FBOUIsRUFBaUNwRCxFQUFFLENBQUNxRCxhQUFwQyxFQUFtRCxDQUFuRDtBQUNILEdBaENEOztBQWtDQVgsYUFBVyxDQUFDLEdBQUQsQ0FBWDtBQUNILEM7Ozs7Ozs7Ozs7O0FDcERELGlCQUFpQixxQkFBdUIsMkMiLCJmaWxlIjoidHJpYW5nbGUuZTY2NjhkZDNkMzhkMjhiMzk3N2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzBmZjljN2Y3NzU3Mjg2YWU3YzRhMjExMGIwMGRiMC5nbHNsXCI7IiwiaW1wb3J0IHsgaW5pdFdlYkdsLCBsb2FkRmlsZSwgaW5pdFNoYWRlclByb2dyYW0gfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5pbXBvcnQgR2VuZXJhdGVCdWZmZXJzIGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB2ZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFVybCBmcm9tICcuL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9kcmF3LmpzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNhbnZhcyk7XG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogMTBweDtsZWZ0OjEwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbmApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVyUHJvZ3JhbSk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICBdKSk7XG5cbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICBjb2xvckJ1ZmZlcixcbiAgICAgICAgaW5kZXhCdWZmZXIsXG4gICAgfVxufSIsImltcG9ydCB7c2V0RXllUG9zaXRpb259IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRDb2xvcicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjMwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbMCwgMTAsIDldKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIC8vIG1hdDQucm90YXRlWSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDMsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIGRyYXdHcmFwaGljKDAuMCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDkyNTczNDk0Zjk2N2M3MmY4MWY5ODI0ZTY0MjRmODUuZ2xzbFwiOyJdLCJzb3VyY2VSb290IjoiIn0=