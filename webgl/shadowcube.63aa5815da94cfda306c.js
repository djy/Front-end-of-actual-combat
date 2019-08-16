(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shadowcube"],{

/***/ "5UxJ":
/*!*********************************************************!*\
  !*** ./src/shadowCube/shaders/FrameBufferFragment.glsl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "082610eb1392266136fc2fd0e66ad686.glsl";

/***/ }),

/***/ "DxSz":
/*!********************************!*\
  !*** ./src/shadowCube/draw.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram, mvpFromLight_triangle, mvpFromLight_plane, flag, angle) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var pointColor = gl.getAttribLocation(shaderProgram, 'pointColor');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix');
  var textureSampler = gl.getUniformLocation(shaderProgram, 'textureSampler');
  var shadowMvpMatrixFromLight = gl.getUniformLocation(shaderProgram, 'shadowMvpMatrixFromLight');
  var PerspetiveMatrixFromLight = mat4.create();
  var eyeMatrixFromLight = null;

  if (flag) {
    // frameBuffer绘图
    mat4.perspective(PerspetiveMatrixFromLight, Math.PI / 180 * 70, document.body.clientWidth / document.body.clientHeight, 1, 100);
    eyeMatrixFromLight = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [1, 5, 0]);
    gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrixFromLight);
  } else {
    // webgl绘图
    gl.uniform1i(textureSampler, 0); // 设置纹理采集器
    // 设置3D透视视野和视野位置

    var PerspetiveMatrix = mat4.create();
    mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
    gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
    Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]);
  }

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.cube.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotateY(tranformMatrix, tranformMatrix, angle);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);

    if (flag) {
      // frameBuffer绘图
      var mvpMatrix = mat4.create();
      mat4.multiply(mvpMatrix, PerspetiveMatrixFromLight, eyeMatrixFromLight);
      mat4.multiply(mvpMatrix, mvpMatrix, tranformMatrix);
      mat4.copy(mvpFromLight_triangle, mvpMatrix);
    } else {
      // webgl绘图
      // 设置点颜色
      gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.cube.colorBuffer);
      gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pointColor);
      gl.uniformMatrix4fv(shadowMvpMatrixFromLight, false, mvpFromLight_triangle);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.cube.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var drawPlane = function drawPlane() {
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.plane.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition);
    var tranformMatrix = mat4.create();
    mat4.translate(tranformMatrix, tranformMatrix, [-0.5, -1.0, 0.0]);
    mat4.rotateX(tranformMatrix, tranformMatrix, -(Math.PI / 180) * 80);
    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);

    if (flag) {
      // frameBuffer绘图
      var mvpMatrix = mat4.create();
      mat4.multiply(mvpMatrix, PerspetiveMatrixFromLight, eyeMatrixFromLight);
      mat4.multiply(mvpMatrix, mvpMatrix, tranformMatrix);
      mat4.copy(mvpFromLight_plane, mvpMatrix);
    } else {
      // wegl绘图
      gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.plane.colorBuffer);
      gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(pointColor);
      gl.uniformMatrix4fv(shadowMvpMatrixFromLight, false, mvpFromLight_plane);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.plane.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
  };

  drawGraphic(angle);
  drawPlane();
});

/***/ }),

/***/ "FzV6":
/*!*********************************!*\
  !*** ./src/shadowCube/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "J6tP");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "gXWr");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "l3kz");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shaders_FrameBufferVertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/FrameBufferVertex.glsl */ "PG3Z");
/* harmony import */ var _shaders_FrameBufferVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shaders_FrameBufferVertex_glsl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shaders_FrameBufferFragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/FrameBufferFragment.glsl */ "5UxJ");
/* harmony import */ var _shaders_FrameBufferFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shaders_FrameBufferFragment_glsl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draw.js */ "DxSz");









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
        fbo,
        mainFn,
        angle,
        then,
        render,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            render = function _ref2(now) {
              now *= 0.001;
              angle += now - then;
              then = now;
              mainFn(angle);
              requestAnimationFrame(render);
            };

            // 加载shader
            shaders = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = _args[Symbol.iterator]()[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 17;
              break;
            }

            key = _step.value;
            _context.t0 = shaders;
            _context.next = 12;
            return Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["loadFile"])(key);

          case 12:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t2 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t2;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 26:
            _context.prev = 26;

            if (!_didIteratorError) {
              _context.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return _context.finish(26);

          case 30:
            return _context.finish(23);

          case 31:
            // webgl所有的相关操作不能在异步流中执行，必须放在同步流中一气呵成，否则会出很多奇怪的问题
            // 初始化webgl
            Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initWebGl"])(gl); // 加载绘图用的buffer

            bf = Object(_buffers__WEBPACK_IMPORTED_MODULE_3__["default"])(gl); // 初始化frameBuffer

            fbo = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initFramebufferObject"])(gl);

            mainFn = function mainFn(angle) {
              var mvpFromLight_triangle = mat4.create();
              var mvpFromLight_plane = mat4.create(); // 将绘制的对象保存在fbo中

              gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
              gl.viewport(0, 0, document.body.clientWidth, document.body.clientHeight); // 设置fbo的背景色并且清空fbo
              // gl.clearColor(0.0, 0.0, 0.0, 1.0);

              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 初始化shader

              var frameBufferShaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[2], shaders[3]);
              gl.useProgram(frameBufferShaderProgram); // 画图

              Object(_draw_js__WEBPACK_IMPORTED_MODULE_8__["default"])(bf, gl, frameBufferShaderProgram, mvpFromLight_triangle, mvpFromLight_plane, true, angle); // 将绘制的对象保存在color buffer中，也就是绘制图形到webgl中

              gl.bindFramebuffer(gl.FRAMEBUFFER, null);
              gl.viewport(0, 0, document.body.clientWidth, document.body.clientHeight); // 初始化shader

              var shaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[0], shaders[1]);
              gl.useProgram(shaderProgram); // 设置webgl的颜色并且清空webgl
              // gl.clearColor(0.0, 0.0, 0.0, 1.0);

              gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 将fbo中的纹理buffer提取出来

              gl.activeTexture(gl["TEXTURE0"]);
              gl.bindTexture(gl.TEXTURE_2D, fbo.texture); // 画图

              Object(_draw_js__WEBPACK_IMPORTED_MODULE_8__["default"])(bf, gl, shaderProgram, mvpFromLight_triangle, mvpFromLight_plane, false, angle);
            };

            angle = 0.0;
            then = 0.0;
            requestAnimationFrame(render);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function loadAllShaders() {
    return _ref.apply(this, arguments);
  };
}();

if (gl) {
  // 加载loader
  loadAllShaders.apply(void 0, [_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default.a, _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default.a, _shaders_FrameBufferVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default.a, _shaders_FrameBufferFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default.a]);
} else {
  alert("你的浏览器不支持webgl.");
}

/***/ }),

/***/ "J6tP":
/*!***********************************!*\
  !*** ./src/shadowCube/buffers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  // 立方体每个面的点坐标buffer
  var cube_vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// Front face
  -0.3, -0.3, 0.3, 0.3, -0.3, 0.3, 0.3, 0.3, 0.3, -0.3, 0.3, 0.3, // Back face
  -0.3, -0.3, -0.3, -0.3, 0.3, -0.3, 0.3, 0.3, -0.3, 0.3, -0.3, -0.3, // Top face
  -0.3, 0.3, -0.3, -0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, -0.3, // Bottom face
  -0.3, -0.3, -0.3, 0.3, -0.3, -0.3, 0.3, -0.3, 0.3, -0.3, -0.3, 0.3, // Right face
  0.3, -0.3, -0.3, 0.3, 0.3, -0.3, 0.3, 0.3, 0.3, 0.3, -0.3, 0.3, // Left face
  -0.3, -0.3, -0.3, -0.3, -0.3, 0.3, -0.3, 0.3, 0.3, -0.3, 0.3, -0.3])); // 立方体每个面的点颜色buffer

  var cube_colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// 前
  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, // 后
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, // 顶
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, // 底
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, // 右
  1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, // 左
  1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0])); // 立方体每个面的点索引

  var cube_indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3, // 前
  4, 5, 6, 4, 6, 7, // 后
  8, 9, 10, 8, 10, 11, // 顶
  12, 13, 14, 12, 14, 15, // 底
  16, 17, 18, 16, 18, 19, // 右
  20, 21, 22, 20, 22, 23]));
  var plane_vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([-1.5, -1.5, 0.0, 1.5, -1.5, 0.0, 1.5, 1.5, 0.0, -1.5, 1.5, 0.0]));
  var plane_colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]));
  var plane_indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3]));
  return {
    cube: {
      vertexBuffer: cube_vertexBuffer,
      colorBuffer: cube_colorBuffer,
      indexBuffer: cube_indexBuffer
    },
    plane: {
      vertexBuffer: plane_vertexBuffer,
      colorBuffer: plane_colorBuffer,
      indexBuffer: plane_indexBuffer
    }
  };
}

/***/ }),

/***/ "PG3Z":
/*!*******************************************************!*\
  !*** ./src/shadowCube/shaders/FrameBufferVertex.glsl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "80c2e1843a8b77217acfca31187de7ef.glsl";

/***/ }),

/***/ "gXWr":
/*!********************************************!*\
  !*** ./src/shadowCube/shaders/Vertex.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "15464321bb1d2184e48e274eccefa357.glsl";

/***/ }),

/***/ "l3kz":
/*!**********************************************!*\
  !*** ./src/shadowCube/shaders/Fragment.glsl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "449ea3cee953bf609fa029142cb5d161.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2hhZG93Q3ViZS9zaGFkZXJzL0ZyYW1lQnVmZmVyRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZG93Q3ViZS9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkb3dDdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkb3dDdWJlL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRvd0N1YmUvc2hhZGVycy9GcmFtZUJ1ZmZlclZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkb3dDdWJlL3NoYWRlcnMvVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRvd0N1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIl0sIm5hbWVzIjpbIkJ1ZmZlcnMiLCJnbCIsInNoYWRlclByb2dyYW0iLCJtdnBGcm9tTGlnaHRfdHJpYW5nbGUiLCJtdnBGcm9tTGlnaHRfcGxhbmUiLCJmbGFnIiwiYW5nbGUiLCJwb2ludFBvc2l0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJwb2ludENvbG9yIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsInRleHR1cmVTYW1wbGVyIiwic2hhZG93TXZwTWF0cml4RnJvbUxpZ2h0IiwiUGVyc3BldGl2ZU1hdHJpeEZyb21MaWdodCIsIm1hdDQiLCJjcmVhdGUiLCJleWVNYXRyaXhGcm9tTGlnaHQiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2V0RXllUG9zaXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2IiwidW5pZm9ybTFpIiwiUGVyc3BldGl2ZU1hdHJpeCIsImRyYXdHcmFwaGljIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsImN1YmUiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInRyYW5mb3JtTWF0cml4Iiwicm90YXRlWSIsIm12cE1hdHJpeCIsIm11bHRpcGx5IiwiY29weSIsImNvbG9yQnVmZmVyIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJpbmRleEJ1ZmZlciIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJkcmF3UGxhbmUiLCJwbGFuZSIsInRyYW5zbGF0ZSIsInJvdGF0ZVgiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwicmVuZGVyIiwibm93IiwidGhlbiIsIm1haW5GbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwiZmJvIiwiaW5pdEZyYW1lYnVmZmVyT2JqZWN0IiwiYmluZEZyYW1lYnVmZmVyIiwiRlJBTUVCVUZGRVIiLCJ2aWV3cG9ydCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJmcmFtZUJ1ZmZlclNoYWRlclByb2dyYW0iLCJpbml0U2hhZGVyUHJvZ3JhbSIsInVzZVByb2dyYW0iLCJEcmF3IiwiYWN0aXZlVGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV8yRCIsInRleHR1cmUiLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImZyYW1lQnVmZmVyVmVydGV4VXJsIiwiZnJhbWVCdWZmZXJGcmFnbWVudFVybCIsImFsZXJ0IiwiY3ViZV92ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiY3ViZV9jb2xvckJ1ZmZlciIsImN1YmVfaW5kZXhCdWZmZXIiLCJpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSIsIlVpbnQ4QXJyYXkiLCJwbGFuZV92ZXJ0ZXhCdWZmZXIiLCJwbGFuZV9jb2xvckJ1ZmZlciIsInBsYW5lX2luZGV4QnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBRWUseUVBQVNBLE9BQVQsRUFBa0JDLEVBQWxCLEVBQXNCQyxhQUF0QixFQUFxQ0MscUJBQXJDLEVBQTREQyxrQkFBNUQsRUFBZ0ZDLElBQWhGLEVBQXNGQyxLQUF0RixFQUE2RjtBQUN4RztBQUNBLE1BQU1DLGFBQWEsR0FBR04sRUFBRSxDQUFDTyxpQkFBSCxDQUFxQk4sYUFBckIsRUFBb0MsZUFBcEMsQ0FBdEI7QUFDQSxNQUFNTyxVQUFVLEdBQUdSLEVBQUUsQ0FBQ08saUJBQUgsQ0FBcUJOLGFBQXJCLEVBQW9DLFlBQXBDLENBQW5CO0FBRUEsTUFBTVEsZ0JBQWdCLEdBQUdULEVBQUUsQ0FBQ1Usa0JBQUgsQ0FBc0JULGFBQXRCLEVBQXFDLGtCQUFyQyxDQUF6QjtBQUNBLE1BQU1VLFVBQVUsR0FBR1gsRUFBRSxDQUFDVSxrQkFBSCxDQUFzQlQsYUFBdEIsRUFBcUMsWUFBckMsQ0FBbkI7QUFDQSxNQUFNVyxXQUFXLEdBQUdaLEVBQUUsQ0FBQ1Usa0JBQUgsQ0FBc0JULGFBQXRCLEVBQXFDLGFBQXJDLENBQXBCO0FBRUEsTUFBTVksY0FBYyxHQUFHYixFQUFFLENBQUNVLGtCQUFILENBQXNCVCxhQUF0QixFQUFxQyxnQkFBckMsQ0FBdkI7QUFDQSxNQUFNYSx3QkFBd0IsR0FBR2QsRUFBRSxDQUFDVSxrQkFBSCxDQUFzQlQsYUFBdEIsRUFBcUMsMEJBQXJDLENBQWpDO0FBRUEsTUFBSWMseUJBQXlCLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxFQUFoQztBQUNBLE1BQUlDLGtCQUFrQixHQUFHLElBQXpCOztBQUNBLE1BQUdkLElBQUgsRUFBUztBQUNMO0FBQ0FZLFFBQUksQ0FB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VUFBSixDQUFlLENBQ3ZFLENBRHVFLEVBQ3BFLENBRG9FLEVBQ2pFLENBRGlFLEVBRXZFLENBRnVFLEVBRXBFLENBRm9FLEVBRWpFLENBRmlFLENBQWYsQ0FBTCxDQUF2RDtBQUtBLFNBQU87QUFDSHBFLFFBQUksRUFBRTtBQUNGQyxrQkFBWSxFQUFFNkQsaUJBRFo7QUFFRnBELGlCQUFXLEVBQUV1RCxnQkFGWDtBQUdGckQsaUJBQVcsRUFBRXNEO0FBSFgsS0FESDtBQU1IakQsU0FBSyxFQUFFO0FBQ0hoQixrQkFBWSxFQUFFb0Usa0JBRFg7QUFFSDNELGlCQUFXLEVBQUU0RCxpQkFGVjtBQUdIMUQsaUJBQVcsRUFBRTJEO0FBSFY7QUFOSixHQUFQO0FBYUgsQzs7Ozs7Ozs7Ozs7QUMzSEQsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwyQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwyQyIsImZpbGUiOiJzaGFkb3djdWJlLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDgyNjEwZWIxMzkyMjY2MTM2ZmMyZmQwZTY2YWQ2ODYuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb259IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSwgbXZwRnJvbUxpZ2h0X3RyaWFuZ2xlLCBtdnBGcm9tTGlnaHRfcGxhbmUsIGZsYWcsIGFuZ2xlKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgcG9pbnRDb2xvciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludENvbG9yJyk7XG5cbiAgICBjb25zdCBwZXJzcGV0aXZlTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4Jyk7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndmlld01hdHJpeCcpO1xuICAgIGNvbnN0IG1vZGVsTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdtb2RlbE1hdHJpeCcpO1xuXG4gICAgY29uc3QgdGV4dHVyZVNhbXBsZXIgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3RleHR1cmVTYW1wbGVyJyk7XG4gICAgY29uc3Qgc2hhZG93TXZwTWF0cml4RnJvbUxpZ2h0ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdzaGFkb3dNdnBNYXRyaXhGcm9tTGlnaHQnKTtcblxuICAgIGxldCBQZXJzcGV0aXZlTWF0cml4RnJvbUxpZ2h0ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBsZXQgZXllTWF0cml4RnJvbUxpZ2h0ID0gbnVsbDtcbiAgICBpZihmbGFnKSB7XG4gICAgICAgIC8vIGZyYW1lQnVmZmVy57uY5Zu+XG4gICAgICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeEZyb21MaWdodCwgKE1hdGguUEkvMTgwKSo3MCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICAgICAgZXllTWF0cml4RnJvbUxpZ2h0ID0gc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFsxLCA1LCAwXSk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXhGcm9tTGlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlYmds57uY5Zu+XG4gICAgICAgIGdsLnVuaWZvcm0xaSh0ZXh0dXJlU2FtcGxlciwgMCk7IC8vIOiuvue9rue6ueeQhumHh+mbhuWZqFxuXG4gICAgICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgICAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3R3JhcGhpYyA9IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5jdWJlLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5yb3RhdGVZKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG5cbiAgICAgICAgaWYoZmxhZyl7XG4gICAgICAgICAgICAvLyBmcmFtZUJ1ZmZlcue7mOWbvlxuICAgICAgICAgICAgY29uc3QgbXZwTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgICAgIG1hdDQubXVsdGlwbHkobXZwTWF0cml4LCBQZXJzcGV0aXZlTWF0cml4RnJvbUxpZ2h0LCBleWVNYXRyaXhGcm9tTGlnaHQpO1xuICAgICAgICAgICAgbWF0NC5tdWx0aXBseShtdnBNYXRyaXgsIG12cE1hdHJpeCwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICAgICAgbWF0NC5jb3B5KG12cEZyb21MaWdodF90cmlhbmdsZSwgbXZwTWF0cml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlYmds57uY5Zu+XG5cbiAgICAgICAgICAgIC8vIOiuvue9rueCueminOiJslxuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY3ViZS5jb2xvckJ1ZmZlcik7XG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgICAgIHBvaW50Q29sb3IsIFxuICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRDb2xvcik7XG5cbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoc2hhZG93TXZwTWF0cml4RnJvbUxpZ2h0LCBmYWxzZSwgbXZwRnJvbUxpZ2h0X3RyaWFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmN1YmUuaW5kZXhCdWZmZXIpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfQllURSwgMCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnBsYW5lLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnRyYW5zbGF0ZSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIFstMC41LCAtMS4wLCAwLjBdKTtcbiAgICAgICAgbWF0NC5yb3RhdGVYKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgLShNYXRoLlBJIC8gMTgwKSAqIDgwKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgXG4gICAgICAgIGlmKGZsYWcpe1xuICAgICAgICAgICAgLy8gZnJhbWVCdWZmZXLnu5jlm75cbiAgICAgICAgICAgIGNvbnN0IG12cE1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgICAgICBtYXQ0Lm11bHRpcGx5KG12cE1hdHJpeCwgUGVyc3BldGl2ZU1hdHJpeEZyb21MaWdodCwgZXllTWF0cml4RnJvbUxpZ2h0KTtcbiAgICAgICAgICAgIG1hdDQubXVsdGlwbHkobXZwTWF0cml4LCBtdnBNYXRyaXgsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgICAgIG1hdDQuY29weShtdnBGcm9tTGlnaHRfcGxhbmUsIG12cE1hdHJpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZWds57uY5Zu+XG5cbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnBsYW5lLmNvbG9yQnVmZmVyKTtcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICAgICAgcG9pbnRDb2xvciwgXG4gICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludENvbG9yKTtcblxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihzaGFkb3dNdnBNYXRyaXhGcm9tTGlnaHQsIGZhbHNlLCBtdnBGcm9tTGlnaHRfcGxhbmUpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5wbGFuZS5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIFxuICAgIGRyYXdHcmFwaGljKGFuZ2xlKTtcbiAgICBkcmF3UGxhbmUoKTtcbn0iLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSwgaW5pdEZyYW1lYnVmZmVyT2JqZWN0IH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IGZyYW1lQnVmZmVyVmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9GcmFtZUJ1ZmZlclZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFtZUJ1ZmZlckZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFtZUJ1ZmZlckZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuLy8gZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbi8vIDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG4vLyBgKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZmcmFtZUJ1ZmZlclxuICAgIGNvbnN0IGZibyA9IGluaXRGcmFtZWJ1ZmZlck9iamVjdChnbCk7XG5cbiAgICBjb25zdCBtYWluRm4gPSAoYW5nbGUpID0+IHtcbiAgICAgICAgY29uc3QgbXZwRnJvbUxpZ2h0X3RyaWFuZ2xlID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgY29uc3QgbXZwRnJvbUxpZ2h0X3BsYW5lID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWwhue7mOWItueahOWvueixoeS/neWtmOWcqGZib+S4rVxuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibyk7XG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgLy8g6K6+572uZmJv55qE6IOM5pmv6Imy5bm25LiU5riF56m6ZmJvXG4gICAgICAgIC8vIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICAgICAgY29uc3QgZnJhbWVCdWZmZXJTaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMl0sIHNoYWRlcnNbM10pO1xuICAgICAgICBnbC51c2VQcm9ncmFtKGZyYW1lQnVmZmVyU2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIC8vIOeUu+WbvlxuICAgICAgICBEcmF3KGJmLCBnbCwgZnJhbWVCdWZmZXJTaGFkZXJQcm9ncmFtLCBtdnBGcm9tTGlnaHRfdHJpYW5nbGUsIG12cEZyb21MaWdodF9wbGFuZSwgdHJ1ZSwgYW5nbGUpO1xuXG4gICAgICAgIC8vIOWwhue7mOWItueahOWvueixoeS/neWtmOWcqGNvbG9yIGJ1ZmZlcuS4re+8jOS5n+WwseaYr+e7mOWItuWbvuW9ouWIsHdlYmds5LitXG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIC8vIOiuvue9rndlYmds55qE6aKc6Imy5bm25LiU5riF56m6d2ViZ2xcbiAgICAgICAgLy8gZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgIC8vIOWwhmZib+S4reeahOe6ueeQhmJ1ZmZlcuaPkOWPluWHuuadpVxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsW2BURVhUVVJFMGBdKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZmJvLnRleHR1cmUpO1xuICAgICAgICAvLyDnlLvlm75cbiAgICAgICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0sIG12cEZyb21MaWdodF90cmlhbmdsZSwgbXZwRnJvbUxpZ2h0X3BsYW5lLCBmYWxzZSwgYW5nbGUpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgYW5nbGUgPSAwLjA7XG4gICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuICAgICAgICBub3cgKj0gMC4wMDE7XG4gICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgIHRoZW4gPSBub3c7XG5cbiAgICAgICAgbWFpbkZuKGFuZ2xlKVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmwsIGZyYW1lQnVmZmVyVmVydGV4VXJsLCBmcmFtZUJ1ZmZlckZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnlnZDmoIdidWZmZXJcbiAgICBjb25zdCBjdWJlX3ZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0wLjMsIC0wLjMsICAwLjMsXG4gICAgICAgIDAuMywgLTAuMywgIDAuMyxcbiAgICAgICAgMC4zLCAgMC4zLCAgMC4zLFxuICAgICAgICAtMC4zLCAgMC4zLCAgMC4zLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0wLjMsIC0wLjMsIC0wLjMsXG4gICAgICAgIC0wLjMsICAwLjMsIC0wLjMsXG4gICAgICAgIDAuMywgIDAuMywgLTAuMyxcbiAgICAgICAgMC4zLCAtMC4zLCAtMC4zLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTAuMywgIDAuMywgLTAuMyxcbiAgICAgICAgLTAuMywgIDAuMywgIDAuMyxcbiAgICAgICAgMC4zLCAgMC4zLCAgMC4zLFxuICAgICAgICAwLjMsICAwLjMsIC0wLjMsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMC4zLCAtMC4zLCAtMC4zLFxuICAgICAgICAwLjMsIC0wLjMsIC0wLjMsXG4gICAgICAgIDAuMywgLTAuMywgIDAuMyxcbiAgICAgICAgLTAuMywgLTAuMywgIDAuMyxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMC4zLCAtMC4zLCAtMC4zLFxuICAgICAgICAwLjMsICAwLjMsIC0wLjMsXG4gICAgICAgIDAuMywgIDAuMywgIDAuMyxcbiAgICAgICAgMC4zLCAtMC4zLCAgMC4zLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0wLjMsIC0wLjMsIC0wLjMsXG4gICAgICAgIC0wLjMsIC0wLjMsICAwLjMsXG4gICAgICAgIC0wLjMsICAwLjMsICAwLjMsXG4gICAgICAgIC0wLjMsICAwLjMsIC0wLjNcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnpopzoibJidWZmZXJcbiAgICBjb25zdCBjdWJlX2NvbG9yQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIOWJjVxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWQjlxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIC8vIOmhtlxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW6lVxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWPs1xuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuXG4gICAgICAgIC8vIOW3plxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K557Si5byVXG4gICAgY29uc3QgY3ViZV9pbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICBjb25zdCBwbGFuZV92ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTEuNSwgLTEuNSwgIDAuMCxcbiAgICAgICAgMS41LCAtMS41LCAgMC4wLFxuICAgICAgICAxLjUsICAxLjUsICAwLjAsXG4gICAgICAgIC0xLjUsICAxLjUsICAwLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgcGxhbmVfY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICBdKSk7XG5cbiAgICBjb25zdCBwbGFuZV9pbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsXG4gICAgICAgIDAsIDIsIDMsXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3ViZToge1xuICAgICAgICAgICAgdmVydGV4QnVmZmVyOiBjdWJlX3ZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIGNvbG9yQnVmZmVyOiBjdWJlX2NvbG9yQnVmZmVyLFxuICAgICAgICAgICAgaW5kZXhCdWZmZXI6IGN1YmVfaW5kZXhCdWZmZXIsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYW5lOiB7XG4gICAgICAgICAgICB2ZXJ0ZXhCdWZmZXI6IHBsYW5lX3ZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIGNvbG9yQnVmZmVyOiBwbGFuZV9jb2xvckJ1ZmZlcixcbiAgICAgICAgICAgIGluZGV4QnVmZmVyOiBwbGFuZV9pbmRleEJ1ZmZlcixcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODBjMmUxODQzYThiNzcyMTdhY2ZjYTMxMTg3ZGU3ZWYuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE1NDY0MzIxYmIxZDIxODRlNDhlMjc0ZWNjZWZhMzU3Lmdsc2xcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NDllYTNjZWU5NTNiZjYwOWZhMDI5MTQyY2I1ZDE2MS5nbHNsXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==