(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directionlight"],{

/***/ "HJpP":
/*!***************************************!*\
  !*** ./src/directionLight/buffers.js ***!
  \***************************************/
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

/***/ "fDC2":
/*!************************************************!*\
  !*** ./src/directionLight/shaders/Vertex.glsl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eff4fd8593f7a785ba41792e2653ea9f.glsl";

/***/ }),

/***/ "m373":
/*!************************************!*\
  !*** ./src/directionLight/draw.js ***!
  \************************************/
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
  var diffuselightColor = gl.getUniformLocation(shaderProgram, 'diffuselightColor');
  var ambientLightColor = gl.getUniformLocation(shaderProgram, 'ambientLightColor');
  var inverseTranspose = gl.getUniformLocation(shaderProgram, 'inverseTranspose');
  var difuselightDirection = gl.getUniformLocation(shaderProgram, 'difuselightDirection');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]); // 设置方向光源漫反射

  gl.uniform3f(diffuselightColor, 1.0, 1.0, 1.0); // 设置方向光源（漫反射）颜色

  gl.uniform3f(ambientLightColor, 0.2, 0.2, 0.2); // 环境光源颜色

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
    gl.uniformMatrix4fv(inverseTranspose, false, inverseTransposeTranformMatrix); // 设置光源方向

    var DifuselightDirection = vec3.create();
    vec3.set(DifuselightDirection, 0.5, 3.0, 4.0);
    vec3.normalize(DifuselightDirection, DifuselightDirection);
    gl.uniform3fv(difuselightDirection, DifuselightDirection);
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

/***/ }),

/***/ "uy03":
/*!*************************************!*\
  !*** ./src/directionLight/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "HJpP");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "fDC2");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "zUdv");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "m373");







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

/***/ "zUdv":
/*!**************************************************!*\
  !*** ./src/directionLight/shaders/Fragment.glsl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aW9uTGlnaHQvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aW9uTGlnaHQvc2hhZGVycy9WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aW9uTGlnaHQvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aW9uTGlnaHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGlvbkxpZ2h0L3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCJdLCJuYW1lcyI6WyJHZW5lcmF0ZUJ1ZmZlcnMiLCJnbCIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsIm5vcm1hbEJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiQnVmZmVycyIsInNoYWRlclByb2dyYW0iLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicG9pbnROb3JtYWwiLCJkaWZmdXNlbGlnaHRDb2xvciIsImdldFVuaWZvcm1Mb2NhdGlvbiIsImFtYmllbnRMaWdodENvbG9yIiwiaW52ZXJzZVRyYW5zcG9zZSIsImRpZnVzZWxpZ2h0RGlyZWN0aW9uIiwicGVyc3BldGl2ZU1hdHJpeCIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsInVuaWZvcm0zZiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsInJvdGF0ZVkiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCIsImludmVydCIsInRyYW5zcG9zZSIsIkRpZnVzZWxpZ2h0RGlyZWN0aW9uIiwidmVjMyIsInNldCIsIm5vcm1hbGl6ZSIsInVuaWZvcm0zZnYiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIiwidGhlbiIsInJlbmRlciIsIm5vdyIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFwcGVuZCIsImluc2VydEFkamFjZW50SFRNTCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQ0YsRUFBRCxFQUFLLElBQUlHLFlBQUosQ0FBaUIsQ0FDN0Q7QUFDQSxHQUFDLEdBRjRELEVBRXZELENBQUMsR0FGc0QsRUFFaEQsR0FGZ0QsRUFHN0QsR0FINkQsRUFHeEQsQ0FBQyxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxHQUo2RCxFQUl2RCxHQUp1RCxFQUlqRCxHQUppRCxFQUs3RCxDQUFDLEdBTDRE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QTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFNbkI7QUFFQTtBQUNBQyw2RUFBUyxDQUFDL0UsRUFBRCxDQUFULENBVG1CLENBVW5COztBQUNNZ0YsY0FYYSxHQVdSakYsd0RBQWUsQ0FBQ0MsRUFBRCxDQVhQLEVBWW5COztBQUNNVSx5QkFiYSxHQWFHdUUseUVBQWlCLENBQUNqRixFQUFELEVBQUt5RSxPQUFPLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxPQUFPLENBQUMsQ0FBRCxDQUF4QixDQWJwQjtBQWNuQnpFLGNBQUUsQ0FBQ2tGLFVBQUgsQ0FBY3hFLGFBQWQsRUFkbUIsQ0FlbkI7O0FBQ0F5RSxvRUFBSSxDQUFDSCxFQUFELEVBQUtoRixFQUFMLEVBQVNVLGFBQVQsQ0FBSjs7QUFoQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWQ4RCxjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCOztBQW1CQSxJQUFJeEUsRUFBSixFQUFRO0FBQ0o7QUFDQXdFLGdCQUFjLE1BQWQsU0FBa0IsQ0FBQ1ksMkRBQUQsRUFBWUMsNkRBQVosQ0FBbEI7QUFDSCxDQUhELE1BR087QUFDSEMsT0FBSyxDQUFDLGdCQUFELENBQUw7QUFDSCxDOzs7Ozs7Ozs7OztBQ3pDRCxpQkFBaUIscUJBQXVCLDJDIiwiZmlsZSI6ImRpcmVjdGlvbmxpZ2h0LmU2NjY4ZGQzZDM4ZDI4YjM5NzdkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlj7NcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlt6ZcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOazlee6v+WNleS9jeWQkemHj++8jOWQkemHj+aWueWQkeeUsee7mOWItueCueeahOWPs+aJi+azleWImeehruWumlxuICAgIGNvbnN0IG5vcm1hbEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyDliY1cbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAvLyDlkI5cbiAgICAgICAgMC4wLCAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAwLjAsIC0xLjAsXG5cbiAgICAgICAgLy8g6aG2XG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bqVXG4gICAgICAgIDAuMCwgLTEuMCwgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOWPs1xuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW3plxuICAgICAgICAtMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgLTEuMCwgMC4wLCAwLjAsXG4gICAgICAgIC0xLjAsIDAuMCwgMC4wLFxuICAgICAgICAtMS4wLCAwLjAsIDAuMCxcblxuICAgIF0pKVxuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K557Si5byVXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCAgICAvLyDliY1cbiAgICAgICAgNCwgNSwgNiwgNCwgNiwgNywgICAgLy8g5ZCOXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsICAgLy8g6aG2XG4gICAgICAgIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsICAgLy8g5bqVXG4gICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksICAgLy8g5Y+zXG4gICAgICAgIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsICAgLy8g5bemXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICBjb2xvckJ1ZmZlcixcbiAgICAgICAgbm9ybWFsQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWZmNGZkODU5M2Y3YTc4NWJhNDE3OTJlMjY1M2VhOWYuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb259IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHBvaW50Q29sb3IgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRDb2xvcicpO1xuICAgIGNvbnN0IHBvaW50Tm9ybWFsID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50Tm9ybWFsJyk7XG5cbiAgICBjb25zdCBkaWZmdXNlbGlnaHRDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnZGlmZnVzZWxpZ2h0Q29sb3InKTtcbiAgICBjb25zdCBhbWJpZW50TGlnaHRDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYW1iaWVudExpZ2h0Q29sb3InKTtcblxuICAgIGNvbnN0IGludmVyc2VUcmFuc3Bvc2UgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2ludmVyc2VUcmFuc3Bvc2UnKTtcbiAgICBjb25zdCBkaWZ1c2VsaWdodERpcmVjdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnZGlmdXNlbGlnaHREaXJlY3Rpb24nKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcblxuICAgIC8vIOiuvue9ruaWueWQkeWFiea6kOa8q+WPjeWwhFxuICAgIGdsLnVuaWZvcm0zZihkaWZmdXNlbGlnaHRDb2xvciwgMS4wLCAxLjAsIDEuMCk7IC8vIOiuvue9ruaWueWQkeWFiea6kO+8iOa8q+WPjeWwhO+8ieminOiJslxuICAgIGdsLnVuaWZvcm0zZihhbWJpZW50TGlnaHRDb2xvciwgMC4yLCAwLjIsIDAuMik7IC8vIOeOr+Wig+WFiea6kOminOiJslxuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7ngrnpopzoibJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY29sb3JCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50Q29sb3IpO1xuXG4gICAgICAgIC8vIOiuvue9rumdouazlee6v+WQkemHj1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5ub3JtYWxCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnROb3JtYWwsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnROb3JtYWwpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbvuW9oui/h+a4oVxuICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQucm90YXRlWSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5rOV57q/5ZCR6YeP5L+u5q2j77yM6ZyA6KaB5Zyo5Y6f5aeL55qE5ZCR6YeP5LiK5LmY5LulIHRyYW5mb3JtTWF0cml4IOeahOmAhui9rOe9ruefqemYtVxuICAgICAgICBjb25zdCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LmludmVydChpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgbWF0NC50cmFuc3Bvc2UoaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4LCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGludmVyc2VUcmFuc3Bvc2UsIGZhbHNlLCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgpO1xuXG4gICAgICAgIC8vIOiuvue9ruWFiea6kOaWueWQkVxuICAgICAgICBjb25zdCBEaWZ1c2VsaWdodERpcmVjdGlvbiA9IHZlYzMuY3JlYXRlKCk7XG4gICAgICAgIHZlYzMuc2V0KERpZnVzZWxpZ2h0RGlyZWN0aW9uLCAwLjUsIDMuMCwgNC4wKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUoRGlmdXNlbGlnaHREaXJlY3Rpb24sIERpZnVzZWxpZ2h0RGlyZWN0aW9uKTtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihkaWZ1c2VsaWdodERpcmVjdGlvbiwgRGlmdXNlbGlnaHREaXJlY3Rpb24pO1xuXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9XG5cbiAgICBcbiAgICBsZXQgYW5nbGUgPSAwLjA7XG4gICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuXG4gICAgICAgIG5vdyAqPSAwLjAwMTtcbiAgICAgICAgYW5nbGUgKz0gbm93IC0gdGhlbjtcbiAgICAgICAgdGhlbiA9IG5vdztcblxuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgZHJhd0dyYXBoaWMoYW5nbGUpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn0iLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG48YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwZmY5YzdmNzc1NzI4NmFlN2M0YTIxMTBiMDBkYjAuZ2xzbFwiOyJdLCJzb3VyY2VSb290IjoiIn0=