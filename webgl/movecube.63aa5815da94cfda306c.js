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
document.body.insertAdjacentHTML('beforeend', "\n    <p style=\"position:absolute;top:0;color:white;padding-left:20px;\">\u7528\u9F20\u6807\u65CB\u8F6C\u7ACB\u65B9\u4F53\u770B\u770B\u6548\u679C</p>\n    "); // document.body.insertAdjacentHTML('beforeend', `
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW92ZUN1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9tb3ZlQ3ViZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJHZW5lcmF0ZUJ1ZmZlcnMiLCJnbCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImJveEFuZ2xlIiwiZHJhd0dyYXBoaWMiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZSIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsInJlbmRlciIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25tb3VzZWRvd24iLCJlIiwibGFzdFgiLCJjbGllbnRYIiwibGFzdFkiLCJjbGllbnRZIiwib25tb3VzZW1vdmUiLCJ4IiwieSIsImZhY3RvciIsImR4IiwiZHkiLCJtYXgiLCJtaW4iLCJvbm1vdXNldXAiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwic2hhZGVycyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5IiwibG9hZEZpbGUiLCJwdXNoIiwiaW5pdFdlYkdsIiwiYmYiLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDeEM7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLDhFQUFzQixDQUFDRixFQUFELEVBQUssSUFBSUcsWUFBSixDQUFpQixDQUM3RDtBQUNBLEdBQUMsR0FGNEQsRUFFdkQsQ0FBQyxHQUZzRCxFQUVoRCxHQUZnRCxFQUc3RCxHQUg2RCxFQUd4RCxDQUFDLEdBSHVELEVBR2pELEdBSGlELEVBSTdELEdBSjZELEVBSXZELEdBSnVELEVBSWpELEdBSmlELEVBSzdELENBQUMsR0FMNEQsRUFLdEQsR0FMc0QsRUFLaEQsR0FMZ0QsRUFPN0Q7QUFDQSxHQUFDLEdBUjRELEVBUXZELENBQUMsR0FSc0QsRUFRakQsQ0FBQyxHQVJnRCxFQVM3RCxDQUFDLEdBVDRELEVBU3RELEdBVHNELEVBU2pELENBQUMsR0FUZ0Qs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SyxDQUFDLGdCQUFELENBQUw7QUFDSCxDIiwiZmlsZSI6Im1vdmVjdWJlLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwZmY5YzdmNzc1NzI4NmFlN2M0YTIxMTBiMDBkYjAuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnlnZDmoIdidWZmZXJcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8gRnJvbnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJhY2sgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRvcCBmYWNlXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQm90dG9tIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBSaWdodCBmYWNlXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIExlZnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K56aKc6ImyYnVmZmVyXG4gICAgY29uc3QgY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8g5YmNXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG5cbiAgICAgICAgLy8g5ZCOXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG5cbiAgICAgICAgLy8g6aG2XG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bqVXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG5cbiAgICAgICAgLy8g5Y+zXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bemXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnntKLlvJVcbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIGNvbG9yQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICB9XG59IiwiaW1wb3J0IHtzZXRFeWVQb3NpdGlvbn0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEJ1ZmZlcnMsIGdsLCBzaGFkZXJQcm9ncmFtKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgcG9pbnRDb2xvciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludENvbG9yJyk7XG5cbiAgICBjb25zdCBwZXJzcGV0aXZlTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4Jyk7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndmlld01hdHJpeCcpO1xuICAgIGNvbnN0IG1vZGVsTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdtb2RlbE1hdHJpeCcpO1xuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBQZXJzcGV0aXZlTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihwZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFszLCAzLCA3XSk7XG5cbiAgICBsZXQgYm94QW5nbGUgPSBbMC4wLCAwLjBdO1xuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rueCueminOiJslxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5jb2xvckJ1ZmZlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50Q29sb3IsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludENvbG9yKTtcblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnJvdGF0ZSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIChNYXRoLlBJIC8gMTgwKSAqIGJveEFuZ2xlWzBdLCBbMS4wLCAwLjAsIDAuMF0pO1xuICAgICAgICBtYXQ0LnJvdGF0ZSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIChNYXRoLlBJIC8gMTgwKSAqIGJveEFuZ2xlWzFdLCBbMC4wLCAxLjAsIDAuMF0pO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgZHJhd0dyYXBoaWMoMC4wKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG4gICAgcmVuZGVyKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyDorrDlvZXkuIrkuIDmrKHmk43kvZzmnIDlkI7nmoTlnZDmoIdcbiAgICAgICAgbGV0IGxhc3RYID0gZS5jbGllbnRYO1xuICAgICAgICBsZXQgbGFzdFkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjeaTjeS9nOeahOWdkOagh1xuICAgICAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFk7XG5cbiAgICAgICAgICAgIC8vIGZhY3RvcueUqOadpeiuvue9ruS4gOS4quavlOS+i+WboOWtkO+8jOmSiOWvueS4jeWQjOeahOWxj+W5leWkp+Wwj+iDvei1t+WIsOS4gOWumuWFvOWuueaAp+aViOaenFxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gMTAwIC8gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIOiOt+WPluW3ruWAvFxuICAgICAgICAgICAgY29uc3QgZHggPSBmYWN0b3IgKiAoeCAtIGxhc3RYKTtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZmFjdG9yICogKHkgLSBsYXN0WSk7XG5cbiAgICAgICAgICAgIC8vIOaOp+WItue7lXjovbTml4vovaznmoTop5LluqbojIPlm7TlnKhbLTkwLCA5MF3luqbkuYvpl7RcbiAgICAgICAgICAgIGJveEFuZ2xlWzBdID0gTWF0aC5tYXgoTWF0aC5taW4oYm94QW5nbGVbMF0gKyBkeSwgOTAuMCksIC05MC4wKTtcbiAgICAgICAgICAgIGJveEFuZ2xlWzFdID0gYm94QW5nbGVbMV0gKyBkeDtcblxuICAgICAgICAgICAgbGFzdFggPSB4O1xuICAgICAgICAgICAgbGFzdFkgPSB5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5MjU3MzQ5NGY5NjdjNzJmODFmOTgyNGU2NDI0Zjg1Lmdsc2xcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICdiZWZvcmVlbmQnLCBcbiAgICBgXG4gICAgPHAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtjb2xvcjp3aGl0ZTtwYWRkaW5nLWxlZnQ6MjBweDtcIj7nlKjpvKDmoIfml4vovaznq4vmlrnkvZPnnIvnnIvmlYjmnpw8L3A+XG4gICAgYFxuKVxuXG4vLyBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuLy8gPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogNTBweDtsZWZ0OjIwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbi8vIGApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVyUHJvZ3JhbSk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=