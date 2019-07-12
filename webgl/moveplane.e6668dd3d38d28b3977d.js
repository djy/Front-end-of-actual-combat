(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moveplane"],{

/***/ "ETLa":
/*!*******************************!*\
  !*** ./src/movePlane/draw.js ***!
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
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 60, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [0, 0, 2]);

  var drawGraphic = function drawGraphic(x, y, move) {
    // 设置点位置
    if (!move) {
      gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    } else {
      gl.bindBuffer(gl.ARRAY_BUFFER, Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([x - 1, y - 1, 0.0, x + 1, y - 1, 0.0, x + 1, y + 1, 0.0, x - 1, y + 1, 0.0])));
    }

    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.translate(tranformMatrix, tranformMatrix, [x, y, 0.0]);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
  };

  drawGraphic(0.0, 0.0, false);

  document.body.onpointerdown = function (e) {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 根据像素选中物体

    drawGraphic(0.0, 0.0, false); // 必须要重新画一次才能获取到像素值

    var pixels = new Uint8Array(4);
    gl.readPixels(e.clientX, e.clientY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    if (pixels[0] !== 0) {
      // 选中了矩形
      document.body.onpointermove = function (e) {
        // 将canvas坐标系中的点坐标换算成webgl的坐标[-1, 1]
        var rect = e.target.getBoundingClientRect();
        var x = (e.clientX - rect.left - e.target.width / 2) / (e.target.width / 2);
        var y = (e.target.height / 2 - (e.clientY - rect.top)) / (e.target.height / 2);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 因为视野点的问题，物体在视觉上不会百分百根据鼠标位置移动，可以自行调整视野点位置查看效果

        drawGraphic(x, y, true);
      };
    }
  };

  document.body.onpointerup = function (e) {
    document.body.onpointermove = null;
  };
});

/***/ }),

/***/ "OSRa":
/*!*********************************************!*\
  !*** ./src/movePlane/shaders/Fragment.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "UgTk":
/*!********************************!*\
  !*** ./src/movePlane/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "lH/a");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "uVcC");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "OSRa");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "ETLa");







var canvas = document.createElement('canvas');
canvas.setAttribute('width', document.body.clientWidth);
canvas.setAttribute('height', document.body.clientHeight);
document.body.innerHTML = '';
document.body.append(canvas);
document.body.insertAdjacentHTML('beforeend', "\n    <p style=\"position:absolute;top:0;color:white;padding-left:20px;\">\u7528\u9F20\u6807\u79FB\u52A8\u77E9\u5F62\u770B\u770B\u6548\u679C</p>\n    ");
document.body.insertAdjacentHTML('beforeend', "\n<button style=\"position:absolute;top: 50px;left:20px;\" type=\"button\" onclick=\"history.go(-1);\">\u8FD4\u56DE</button>\n");
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

/***/ "lH/a":
/*!**********************************!*\
  !*** ./src/movePlane/buffers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0]));
  var colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0]));
  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3]));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "uVcC":
/*!*******************************************!*\
  !*** ./src/movePlane/shaders/Vertex.glsl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "092573494f967c72f81f9824e6424f85.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW92ZVBsYW5lL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZVBsYW5lL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9zaGFkZXJzL1ZlcnRleC5nbHNsIl0sIm5hbWVzIjpbIkJ1ZmZlcnMiLCJnbCIsInNoYWRlclByb2dyYW0iLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwieCIsInkiLCJtb3ZlIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsImNvbG9yQnVmZmVyIiwidHJhbmZvcm1NYXRyaXgiLCJ0cmFuc2xhdGUiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImluZGV4QnVmZmVyIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsIm9ucG9pbnRlcmRvd24iLCJlIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsInBpeGVscyIsIlVpbnQ4QXJyYXkiLCJyZWFkUGl4ZWxzIiwiY2xpZW50WCIsImNsaWVudFkiLCJSR0JBIiwib25wb2ludGVybW92ZSIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJvbnBvaW50ZXJ1cCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJzaGFkZXJzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXkiLCJsb2FkRmlsZSIsInB1c2giLCJpbml0V2ViR2wiLCJiZiIsIkdlbmVyYXRlQnVmZmVycyIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFZSx5RUFBU0EsT0FBVCxFQUFrQkMsRUFBbEIsRUFBc0JDLGFBQXRCLEVBQXFDO0FBQ2hEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixFQUFFLENBQUNHLGlCQUFILENBQXFCRixhQUFyQixFQUFvQyxlQUFwQyxDQUF0QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0osRUFBRSxDQUFDRyxpQkFBSCxDQUFxQkYsYUFBckIsRUFBb0MsWUFBcEMsQ0FBbkI7QUFFQSxNQUFNSSxnQkFBZ0IsR0FBR0wsRUFBRSxDQUFDTSxrQkFBSCxDQUFzQkwsYUFBdEIsRUFBcUMsa0JBQXJDLENBQXpCO0FBQ0EsTUFBTU0sVUFBVSxHQUFHUCxFQUFFLENBQUNNLGtCQUFILENBQXNCTCxhQUF0QixFQUFxQyxZQUFyQyxDQUFuQjtBQUNBLE1BQU1PLFdBQVcsR0FBR1IsRUFBRSxDQUFDTSxrQkFBSCxDQUFzQkwsYUFBdEIsRUFBcUMs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Q0gsQzs7Ozs7Ozs7Ozs7O0FDL0NEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU04sZUFBVCxDQUF5QjdFLEVBQXpCLEVBQTZCO0FBQ3hDLE1BQU0yQixZQUFZLEdBQUdDLDhFQUFzQixDQUFDNUIsRUFBRCxFQUFLLElBQUk2QixZQUFKLENBQWlCLENBQzdELENBQUMsR0FENEQsRUFDdkQsQ0FBQyxHQURzRCxFQUNoRCxHQURnRCxFQUU3RCxHQUY2RCxFQUV4RCxDQUFDLEdBRnVELEVBRWpELEdBRmlELEVBRzdELEdBSDZELEVBR3ZELEdBSHVELEVBR2pELEdBSGlELEVBSTdELENBQUMsR0FKNEQsRUFJdEQsR0FKc0QsRUFJaEQsR0FKZ0QsQ0FBakIsQ0FBTCxDQUEzQztBQU9BLE1BQU1JLFdBQVcsR0FBR0wsOEVBQXNCLENBQUM1QixFQUFELEVBQUssSUFBSTZCLFlBQUosQ0FBaUIsQ0FDNUQsR0FENEQsRUFDdkQsR0FEdUQsRUFDbEQsR0FEa0QsRUFFNUQsR0FGNEQsRUFFdkQsR0FGdUQsRUFFbEQsR0FGa0QsRUFHNUQsR0FINEQsRUFHdkQsR0FIdUQsRUFHbEQsR0FIa0QsRUFJNUQsR0FKNEQsRUFJdkQsR0FKdUQsRUFJbEQsR0FKa0QsQ0FBakIsQ0FBTCxDQUExQztBQU9BLE1BQU1RLFdBQVcsR0FBRytDLHFGQUE2QixDQUFDcEYsRUFBRCxFQUFLLElBQUkrQyxVQUFKLENBQWUsQ0FDakUsQ0FEaUUsRUFDOUQsQ0FEOEQsRUFDM0QsQ0FEMkQsRUFFakUsQ0FGaUUsRUFFOUQsQ0FGOEQsRUFFM0QsQ0FGMkQsQ0FBZixDQUFMLENBQWpEO0FBS0EsU0FBTztBQUNIcEIsZ0JBQVksRUFBWkEsWUFERztBQUVITSxlQUFXLEVBQVhBLFdBRkc7QUFHSEksZUFBVyxFQUFYQTtBQUhHLEdBQVA7QUFLSCxDOzs7Ozs7Ozs7OztBQzNCRCxpQkFBaUIscUJBQXVCLDJDIiwiZmlsZSI6Im1vdmVwbGFuZS5lNjY2OGRkM2QzOGQyOGIzOTc3ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0RXllUG9zaXRpb24sIGluaXRCdWZmZXJzRm9yTGF0ZXJVc2V9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRDb2xvcicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjYwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbMCwgMCwgMl0pO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbih4LCB5LCBtb3ZlKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBpZighbW92ZSkge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgICAgICAgeCAtIDEsIHkgLSAxLCAgMC4wLFxuICAgICAgICAgICAgICAgIHggKyAxLCB5IC0gMSwgIDAuMCxcbiAgICAgICAgICAgICAgICB4ICsgMSwgeSArIDEsICAwLjAsXG4gICAgICAgICAgICAgICAgeCAtIDEsIHkgKyAxLCAgMC4wLFxuICAgICAgICAgICAgXSkpKTtcbiAgICAgICAgfVxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rueCueminOiJslxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5jb2xvckJ1ZmZlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50Q29sb3IsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludENvbG9yKTtcblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnRyYW5zbGF0ZSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIFt4LCB5LCAwLjBdKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIGRyYXdHcmFwaGljKDAuMCwgMC4wLCBmYWxzZSk7XG5cblxuICAgIGRvY3VtZW50LmJvZHkub25wb2ludGVyZG93biA9IChlKSA9PiB7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgLy8g5qC55o2u5YOP57Sg6YCJ5Lit54mp5L2TXG4gICAgICAgIGRyYXdHcmFwaGljKDAuMCwgMC4wLCBmYWxzZSk7IC8vIOW/hemhu+imgemHjeaWsOeUu+S4gOasoeaJjeiDveiOt+WPluWIsOWDj+e0oOWAvFxuICAgICAgICBsZXQgcGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG4gICAgICAgIGdsLnJlYWRQaXhlbHMoZS5jbGllbnRYLCBlLmNsaWVudFksIDEsIDEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHBpeGVscyk7XG4gICAgICAgIGlmKHBpeGVsc1swXSAhPT0gMCkge1xuICAgICAgICAgICAgLy8g6YCJ5Lit5LqG55+p5b2iXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9ucG9pbnRlcm1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWwhmNhbnZhc+WdkOagh+ezu+S4reeahOeCueWdkOagh+aNoueul+aIkHdlYmds55qE5Z2Q5qCHWy0xLCAxXVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gKCAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAtIGUudGFyZ2V0LndpZHRoIC8gMiApIC8gKCBlLnRhcmdldC53aWR0aCAvIDIgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gKCBlLnRhcmdldC5oZWlnaHQgLyAyIC0gKGUuY2xpZW50WSAtIHJlY3QudG9wKSApIC8gKCBlLnRhcmdldC5oZWlnaHQgLyAyICk7XG5cbiAgICAgICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICAgICAgLy8g5Zug5Li66KeG6YeO54K555qE6Zeu6aKY77yM54mp5L2T5Zyo6KeG6KeJ5LiK5LiN5Lya55m+5YiG55m+5qC55o2u6byg5qCH5L2N572u56e75Yqo77yM5Y+v5Lul6Ieq6KGM6LCD5pW06KeG6YeO54K55L2N572u5p+l55yL5pWI5p6cXG4gICAgICAgICAgICAgICAgZHJhd0dyYXBoaWMoeCwgeSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkub25wb2ludGVydXAgPSAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ucG9pbnRlcm1vdmUgPSBudWxsO1xuICAgIH07XG4gICAgXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwZmY5YzdmNzc1NzI4NmFlN2M0YTIxMTBiMDBkYjAuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgJ2JlZm9yZWVuZCcsIFxuICAgIGBcbiAgICA8cCBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2NvbG9yOndoaXRlO3BhZGRpbmctbGVmdDoyMHB4O1wiPueUqOm8oOagh+enu+WKqOefqeW9oueci+eci+aViOaenDwvcD5cbiAgICBgXG4pXG5kb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogNTBweDtsZWZ0OjIwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbmApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVyUHJvZ3JhbSk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTEuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAwLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCxcbiAgICBdKSk7XG5cbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsXG4gICAgICAgIDAsIDIsIDMsXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICBjb2xvckJ1ZmZlcixcbiAgICAgICAgaW5kZXhCdWZmZXIsXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5MjU3MzQ5NGY5NjdjNzJmODFmOTgyNGU2NDI0Zjg1Lmdsc2xcIjsiXSwic291cmNlUm9vdCI6IiJ9