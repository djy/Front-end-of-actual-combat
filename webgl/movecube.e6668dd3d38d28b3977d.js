(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movecube"],{

/***/ "/gSz":
/*!********************************************!*\
  !*** ./src/moveCube/shaders/Fragment.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "Kfyz":
/*!*********************************!*\
  !*** ./src/moveCube/buffers.js ***!
  \*********************************/
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

/***/ "QfBJ":
/*!******************************!*\
  !*** ./src/moveCube/draw.js ***!
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
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]);
  var boxAngle = [0.0, 0.0];

  var drawGraphic = function drawGraphic() {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotate(tranformMatrix, tranformMatrix, Math.PI / 180 * boxAngle[0], [1.0, 0.0, 0.0]);
    mat4.rotate(tranformMatrix, tranformMatrix, Math.PI / 180 * boxAngle[1], [0.0, 1.0, 0.0]);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var render = function render() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    drawGraphic(0.0);
    requestAnimationFrame(render);
  };

  render();

  document.body.onmousedown = function (e) {
    // 记录上一次操作最后的坐标
    var lastX = e.clientX;
    var lastY = e.clientY;

    document.body.onmousemove = function (e) {
      // 获取当前操作的坐标
      var x = e.clientX;
      var y = e.clientY; // factor用来设置一个比例因子，针对不同的屏幕大小能起到一定兼容性效果

      var factor = 100 / document.body.clientHeight; // 获取差值

      var dx = factor * (x - lastX);
      var dy = factor * (y - lastY); // 控制绕x轴旋转的角度范围在[-90, 90]度之间

      boxAngle[0] = Math.max(Math.min(boxAngle[0] + dy, 90.0), -90.0);
      boxAngle[1] = boxAngle[1] + dx;
      lastX = x;
      lastY = y;
    };
  };

  document.body.onmouseup = function () {
    document.body.onmousemove = null;
  };
});

/***/ }),

/***/ "h3jb":
/*!******************************************!*\
  !*** ./src/moveCube/shaders/Vertex.glsl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "092573494f967c72f81f9824e6424f85.glsl";

/***/ }),

/***/ "lCsd":
/*!*******************************!*\
  !*** ./src/moveCube/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "Kfyz");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "h3jb");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "/gSz");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "QfBJ");







var canvas = document.createElement('canvas');
canvas.setAttribute('width', document.body.clientWidth);
canvas.setAttribute('height', document.body.clientHeight);
document.body.innerHTML = '';
document.body.append(canvas);
document.body.insertAdjacentHTML('beforeend', "\n    <p style=\"position:absolute;top:0;color:white;padding-left:20px;\">\u7528\u9F20\u6807\u65CB\u8F6C\u7ACB\u65B9\u4F53\u770B\u770B\u6548\u679C</p>\n    ");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW92ZUN1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJHZW5lcmF0ZUJ1ZmZlcnMiLCJnbCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImJveEFuZ2xlIiwiZHJhd0dyYXBoaWMiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZSIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsInJlbmRlciIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25tb3VzZWRvd24iLCJlIiwibGFzdFgiLCJjbGllbnRYIiwibGFzdFkiLCJjbGllbnRZIiwib25tb3VzZW1vdmUiLCJ4IiwieSIsImZhY3RvciIsImR4IiwiZHkiLCJtYXgiLCJtaW4iLCJvbm1vdXNldXAiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwic2hhZGVycyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5IiwibG9hZEZpbGUiLCJwdXNoIiwiaW5pdFdlYkdsIiwiYmYiLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDeEM7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLDhFQUFzQixDQUFDRixFQUFELEVBQUssSUFBSUcsWUFBSixDQUFpQixDQUM3RDtBQUNBLEdBQUMsR0FGNEQsRUFFdkQsQ0FBQyxHQUZzRCxFQUVoRCxHQUZnRCxFQUc3RCxHQUg2RCxFQUd4RCxDQUFDLEdBSHVELEVBR2pELEdBSGlELEVBSTdELEdBSjZELEVBSXZELEdBSnVELEVBSWpELEdBSmlELEVBSzdELENBQUMsR0FMNEQsRUFLdEQsR0FMc0QsRUFLaEQsR0FMZ0QsRUFPN0Q7QUFDQSxHQUFDLEdBUjRELEVBUXZELENBQUMsR0FSc0QsRUFRakQsQ0FBQyxHQVJnRCxFQVM3RCxDQUFDLEdBVDRELEVBU3RELEdBVHNELEVBU2pELENBQUMsR0FUZ0Qs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QUFsQjtBQUNILENBSEQsTUFHTztBQUNIQyxPQUFLLENBQUMsZ0JBQUQsQ0FBTDtBQUNILEMiLCJmaWxlIjoibW92ZWN1YmUuZTY2NjhkZDNkMzhkMjhiMzk3N2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzBmZjljN2Y3NzU3Mjg2YWU3YzRhMjExMGIwMGRiMC5nbHNsXCI7IiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlj7NcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlt6ZcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgICAgLy8g5YmNXG4gICAgICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIOWQjlxuICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAgIC8vIOmhtlxuICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgIC8vIOW6lVxuICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAgIC8vIOWPs1xuICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLCAgIC8vIOW3plxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgY29sb3JCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9ufSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludENvbG9yID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Q29sb3InKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcblxuICAgIGxldCBib3hBbmdsZSA9IFswLjAsIDAuMF07XG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u54K56aKc6ImyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQucm90YXRlKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgKE1hdGguUEkgLyAxODApICogYm94QW5nbGVbMF0sIFsxLjAsIDAuMCwgMC4wXSk7XG4gICAgICAgIG1hdDQucm90YXRlKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgKE1hdGguUEkgLyAxODApICogYm94QW5nbGVbMV0sIFswLjAsIDEuMCwgMC4wXSk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuaW5kZXhCdWZmZXIpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfQllURSwgMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICBkcmF3R3JhcGhpYygwLjApO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cbiAgICByZW5kZXIoKTtcblxuICAgIGRvY3VtZW50LmJvZHkub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIOiusOW9leS4iuS4gOasoeaTjeS9nOacgOWQjueahOWdkOagh1xuICAgICAgICBsZXQgbGFzdFggPSBlLmNsaWVudFg7XG4gICAgICAgIGxldCBsYXN0WSA9IGUuY2xpZW50WTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN5pON5L2c55qE5Z2Q5qCHXG4gICAgICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WTtcblxuICAgICAgICAgICAgLy8gZmFjdG9y55So5p2l6K6+572u5LiA5Liq5q+U5L6L5Zug5a2Q77yM6ZKI5a+55LiN5ZCM55qE5bGP5bmV5aSn5bCP6IO96LW35Yiw5LiA5a6a5YW85a655oCn5pWI5p6cXG4gICAgICAgICAgICBjb25zdCBmYWN0b3IgPSAxMDAgLyBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgLy8g6I635Y+W5beu5YC8XG4gICAgICAgICAgICBjb25zdCBkeCA9IGZhY3RvciAqICh4IC0gbGFzdFgpO1xuICAgICAgICAgICAgY29uc3QgZHkgPSBmYWN0b3IgKiAoeSAtIGxhc3RZKTtcblxuICAgICAgICAgICAgLy8g5o6n5Yi257uVeOi9tOaXi+i9rOeahOinkuW6puiMg+WbtOWcqFstOTAsIDkwXeW6puS5i+mXtFxuICAgICAgICAgICAgYm94QW5nbGVbMF0gPSBNYXRoLm1heChNYXRoLm1pbihib3hBbmdsZVswXSArIGR5LCA5MC4wKSwgLTkwLjApO1xuICAgICAgICAgICAgYm94QW5nbGVbMV0gPSBib3hBbmdsZVsxXSArIGR4O1xuXG4gICAgICAgICAgICBsYXN0WCA9IHg7XG4gICAgICAgICAgICBsYXN0WSA9IHk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDkyNTczNDk0Zjk2N2M3MmY4MWY5ODI0ZTY0MjRmODUuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgJ2JlZm9yZWVuZCcsIFxuICAgIGBcbiAgICA8cCBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2NvbG9yOndoaXRlO3BhZGRpbmctbGVmdDoyMHB4O1wiPueUqOm8oOagh+aXi+i9rOeri+aWueS9k+eci+eci+aViOaenDwvcD5cbiAgICBgXG4pXG5cbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG48YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiA1MHB4O2xlZnQ6MjBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==