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
document.body.insertAdjacentHTML('beforeend', "\n    <p style=\"position:absolute;top:0;color:white;padding-left:20px;\">\u7528\u9F20\u6807\u79FB\u52A8\u77E9\u5F62\u770B\u770B\u6548\u679C</p>\n    "); // document.body.insertAdjacentHTML('beforeend', `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW92ZVBsYW5lL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92ZVBsYW5lL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmVQbGFuZS9zaGFkZXJzL1ZlcnRleC5nbHNsIl0sIm5hbWVzIjpbIkJ1ZmZlcnMiLCJnbCIsInNoYWRlclByb2dyYW0iLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwieCIsInkiLCJtb3ZlIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsImNvbG9yQnVmZmVyIiwidHJhbmZvcm1NYXRyaXgiLCJ0cmFuc2xhdGUiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImluZGV4QnVmZmVyIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsIm9ucG9pbnRlcmRvd24iLCJlIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsInBpeGVscyIsIlVpbnQ4QXJyYXkiLCJyZWFkUGl4ZWxzIiwiY2xpZW50WCIsImNsaWVudFkiLCJSR0JBIiwib25wb2ludGVybW92ZSIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJvbnBvaW50ZXJ1cCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJzaGFkZXJzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJrZXkiLCJsb2FkRmlsZSIsInB1c2giLCJpbml0V2ViR2wiLCJiZiIsIkdlbmVyYXRlQnVmZmVycyIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFZSx5RUFBU0EsT0FBVCxFQUFrQkMsRUFBbEIsRUFBc0JDLGFBQXRCLEVBQXFDO0FBQ2hEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixFQUFFLENBQUNHLGlCQUFILENBQXFCRixhQUFyQixFQUFvQyxlQUFwQyxDQUF0QjtBQUNBLE1BQU1HLFVBQVUsR0FBR0osRUFBRSxDQUFDRyxpQkFBSCxDQUFxQkYsYUFBckIsRUFBb0MsWUFBcEMsQ0FBbkI7QUFFQSxNQUFNSSxnQkFBZ0IsR0FBR0wsRUFBRSxDQUFDTSxrQkFBSCxDQUFzQkwsYUFBdEIsRUFBcUMsa0JBQXJDLENBQXpCO0FBQ0EsTUFBTU0sVUFBVSxHQUFHUCxFQUFFLENBQUNNLGtCQUFILENBQXNCTCxhQUF0QixFQUFxQyxZQUFyQyxDQUFuQjtBQUNBLE1BQU1PLFdBQVcsR0FBR1IsRUFBRSxDQUFDTSxrQkFBSCxDQUFzQkwsYUFBdEIsRUFBcUMs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QUE7QUFBQTtBQUVlLFNBQVNOLGVBQVQsQ0FBeUI3RSxFQUF6QixFQUE2QjtBQUN4QyxNQUFNMkIsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQzVCLEVBQUQsRUFBSyxJQUFJNkIsWUFBSixDQUFpQixDQUM3RCxDQUFDLEdBRDRELEVBQ3ZELENBQUMsR0FEc0QsRUFDaEQsR0FEZ0QsRUFFN0QsR0FGNkQsRUFFeEQsQ0FBQyxHQUZ1RCxFQUVqRCxHQUZpRCxFQUc3RCxHQUg2RCxFQUd2RCxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxDQUFDLEdBSjRELEVBSXRELEdBSnNELEVBSWhELEdBSmdELENBQWpCLENBQUwsQ0FBM0M7QUFPQSxNQUFNSSxXQUFXLEdBQUdMLDhFQUFzQixDQUFDNUIsRUFBRCxFQUFLLElBQUk2QixZQUFKLENBQWlCLENBQzVELEdBRDRELEVBQ3ZELEdBRHVELEVBQ2xELEdBRGtELEVBRTVELEdBRjRELEVBRXZELEdBRnVELEVBRWxELEdBRmtELEVBRzVELEdBSDRELEVBR3ZELEdBSHVELEVBR2xELEdBSGtELEVBSTVELEdBSjRELEVBSXZELEdBSnVELEVBSWxELEdBSmtELENBQWpCLENBQUwsQ0FBMUM7QUFPQSxNQUFNUSxXQUFXLEdBQUcrQyxxRkFBNkIsQ0FBQ3BGLEVBQUQsRUFBSyxJQUFJK0MsVUFBSixDQUFlLENBQ2pFLENBRGlFLEVBQzlELENBRDhELEVBQzNELENBRDJELEVBRWpFLENBRmlFLEVBRTlELENBRjhELEVBRTNELENBRjJELENBQWYsQ0FBTCxDQUFqRDtBQUtBLFNBQU87QUFDSHBCLGdCQUFZLEVBQVpBLFlBREc7QUFFSE0sZUFBVyxFQUFYQSxXQUZHO0FBR0hJLGVBQVcsRUFBWEE7QUFIRyxHQUFQO0FBS0gsQzs7Ozs7Ozs7Ozs7QUMzQkQsaUJBQWlCLHFCQUF1QiwyQyIsImZpbGUiOiJtb3ZlcGxhbmUuNjNhYTU4MTVkYTk0Y2ZkYTMwNmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldEV5ZVBvc2l0aW9uLCBpbml0QnVmZmVyc0ZvckxhdGVyVXNlfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Q29sb3InKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSo2MCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzAsIDAsIDJdKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oeCwgeSwgbW92ZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgaWYoIW1vdmUpIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgIHggLSAxLCB5IC0gMSwgIDAuMCxcbiAgICAgICAgICAgICAgICB4ICsgMSwgeSAtIDEsICAwLjAsXG4gICAgICAgICAgICAgICAgeCArIDEsIHkgKyAxLCAgMC4wLFxuICAgICAgICAgICAgICAgIHggLSAxLCB5ICsgMSwgIDAuMCxcbiAgICAgICAgICAgIF0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7ngrnpopzoibJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY29sb3JCdWZmZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludENvbG9yLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRDb2xvcik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC50cmFuc2xhdGUodHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4LCBbeCwgeSwgMC4wXSk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuaW5kZXhCdWZmZXIpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCA2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9XG5cbiAgICBkcmF3R3JhcGhpYygwLjAsIDAuMCwgZmFsc2UpO1xuXG5cbiAgICBkb2N1bWVudC5ib2R5Lm9ucG9pbnRlcmRvd24gPSAoZSkgPT4ge1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgIC8vIOagueaNruWDj+e0oOmAieS4reeJqeS9k1xuICAgICAgICBkcmF3R3JhcGhpYygwLjAsIDAuMCwgZmFsc2UpOyAvLyDlv4XpobvopoHph43mlrDnlLvkuIDmrKHmiY3og73ojrflj5bliLDlg4/ntKDlgLxcbiAgICAgICAgbGV0IHBpeGVscyA9IG5ldyBVaW50OEFycmF5KDQpO1xuICAgICAgICBnbC5yZWFkUGl4ZWxzKGUuY2xpZW50WCwgZS5jbGllbnRZLCAxLCAxLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMpO1xuICAgICAgICBpZihwaXhlbHNbMF0gIT09IDApIHtcbiAgICAgICAgICAgIC8vIOmAieS4reS6huefqeW9olxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbnBvaW50ZXJtb3ZlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlsIZjYW52YXPlnZDmoIfns7vkuK3nmoTngrnlnZDmoIfmjaLnrpfmiJB3ZWJnbOeahOWdkOagh1stMSwgMV1cbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9ICggKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLSBlLnRhcmdldC53aWR0aCAvIDIgKSAvICggZS50YXJnZXQud2lkdGggLyAyICk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9ICggZS50YXJnZXQuaGVpZ2h0IC8gMiAtIChlLmNsaWVudFkgLSByZWN0LnRvcCkgKSAvICggZS50YXJnZXQuaGVpZ2h0IC8gMiApO1xuXG4gICAgICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgICAgIC8vIOWboOS4uuinhumHjueCueeahOmXrumimO+8jOeJqeS9k+WcqOinhuinieS4iuS4jeS8mueZvuWIhueZvuagueaNrum8oOagh+S9jee9ruenu+WKqO+8jOWPr+S7peiHquihjOiwg+aVtOinhumHjueCueS9jee9ruafpeeci+aViOaenFxuICAgICAgICAgICAgICAgIGRyYXdHcmFwaGljKHgsIHksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5Lm9ucG9pbnRlcnVwID0gKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnBvaW50ZXJtb3ZlID0gbnVsbDtcbiAgICB9O1xuICAgIFxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3MGZmOWM3Zjc3NTcyODZhZTdjNGEyMTEwYjAwZGIwLmdsc2xcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICdiZWZvcmVlbmQnLCBcbiAgICBgXG4gICAgPHAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtjb2xvcjp3aGl0ZTtwYWRkaW5nLWxlZnQ6MjBweDtcIj7nlKjpvKDmoIfnp7vliqjnn6nlvaLnnIvnnIvmlYjmnpw8L3A+XG4gICAgYFxuKVxuLy8gZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbi8vIDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDUwcHg7bGVmdDoyMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG4vLyBgKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJpbXBvcnQgeyBpbml0QnVmZmVyc0ZvckxhdGVyVXNlLCBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVCdWZmZXJzKGdsKSB7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC0xLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMC4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMC4wLFxuICAgIF0pKTtcblxuICAgIGNvbnN0IGNvbG9yQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLFxuICAgICAgICAwLCAyLCAzLFxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgY29sb3JCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwOTI1NzM0OTRmOTY3YzcyZjgxZjk4MjRlNjQyNGY4NS5nbHNsXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==