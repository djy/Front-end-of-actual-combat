(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["framebuffer"],{

/***/ "GHM1":
/*!************************************!*\
  !*** ./src/frameBuffer/buffers.js ***!
  \************************************/
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
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0])); // 立方体每个面的纹理点坐标

  var textureBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// Front
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Back
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Top
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Bottom
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Right
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, // Left
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0])); // 立方体每个面的点索引

  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3, // 前
  4, 5, 6, 4, 6, 7, // 后
  8, 9, 10, 8, 10, 11, // 顶
  12, 13, 14, 12, 14, 15, // 底
  16, 17, 18, 16, 18, 19, // 右
  20, 21, 22, 20, 22, 23]));
  return {
    vertexBuffer: vertexBuffer,
    textureBuffer: textureBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "YJnk":
/*!****************************!*\
  !*** ./image/texture.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65f7930ca212bc63604a5f855e427a79.jpeg";

/***/ }),

/***/ "Yt5o":
/*!**********************************!*\
  !*** ./src/frameBuffer/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "GHM1");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "tv8w");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "ZiOz");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "yZCE");







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

/***/ "ZiOz":
/*!***********************************************!*\
  !*** ./src/frameBuffer/shaders/Fragment.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eae71b7ebdb838ed8088989162879337.glsl";

/***/ }),

/***/ "tv8w":
/*!*********************************************!*\
  !*** ./src/frameBuffer/shaders/Vertex.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53c2f67e60e606480a7b73eccc7c6cb0.glsl";

/***/ }),

/***/ "yZCE":
/*!*********************************!*\
  !*** ./src/frameBuffer/draw.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image/texture.jpeg */ "YJnk");
/* harmony import */ var _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_texture_jpeg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var texturePosition = gl.getAttribLocation(shaderProgram, 'texturePosition');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix');
  var textureSampler = gl.getUniformLocation(shaderProgram, 'textureSampler'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [3, 3, 7]);

  var drawGraphic = function drawGraphic() {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置纹理坐标

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.textureBuffer);
    gl.vertexAttribPointer(texturePosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texturePosition); // 设置纹理图片

    var texture = gl.createTexture();
    var image = new Image();

    image.onload = function () {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer); // 初始化frameBuffer

      var fbo = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initFramebufferObject"])(gl);
      var angle = 0.0;
      var then = 0.0;

      function render(now) {
        now *= 0.001;
        angle += now - then;
        then = now; // 将绘制的对象保存在fbo中

        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.viewport(0, 0, document.body.clientWidth, document.body.clientHeight); // 设置fbo的背景色并且清空fbo

        gl.clearColor(1.0, 0.2, 0.3, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 设置纹理图片

        Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initTexture"])(gl, image, textureSampler, texture, 0);
        var tranformMatrix = mat4.create();
        mat4.rotateX(tranformMatrix, tranformMatrix, angle);
        mat4.rotateZ(tranformMatrix, tranformMatrix, angle);
        gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0); // 将绘制的对象保存在color buffer中，也就是绘制图形到webgl中

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, document.body.clientWidth, document.body.clientHeight); // 设置webgl的颜色并且清空webgl

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 将fbo中的纹理buffer提取出来

        gl.activeTexture(gl["TEXTURE0"]);
        gl.bindTexture(gl.TEXTURE_2D, fbo.texture); // 将fbo作为纹理绘制到图形中

        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    };

    image.src = _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a;
  };

  drawGraphic();
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVCdWZmZXIvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZS90ZXh0dXJlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZUJ1ZmZlci9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL3NoYWRlcnMvVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL2RyYXcuanMiXSwibmFtZXMiOlsiR2VuZXJhdGVCdWZmZXJzIiwiZ2wiLCJ2ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwidGV4dHVyZUJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwic2hhZGVycyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5IiwibG9hZEZpbGUiLCJwdXNoIiwiaW5pdFdlYkdsIiwiYmYiLCJzaGFkZXJQcm9ncmFtIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidGV4dHVyZVBvc2l0aW9uIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsInRleHR1cmVTYW1wbGVyIiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJmYm8iLCJpbml0RnJhbWVidWZmZXJPYmplY3QiLCJhbmdsZSIsInRoZW4iLCJyZW5kZXIiLCJub3ciLCJiaW5kRnJhbWVidWZmZXIiLCJGUkFNRUJVRkZFUiIsInZpZXdwb3J0IiwiY2xlYXJDb2xvciIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJpbml0VGV4dHVyZSIsInRyYW5mb3JtTWF0cml4Iiwicm90YXRlWCIsInJvdGF0ZVoiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIiwiYWN0aXZlVGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV8yRCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNyYyIsInRleHR1cmVVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQ0YsRUFBRCxFQUFLLElBQUlHLFlBQUosQ0FBaUIsQ0FDN0Q7QUFDQSxHQUFDLEdBRjRELEVBRXZELENBQUMsR0FGc0QsRUFFaEQsR0FGZ0QsRUFHN0QsR0FINkQsRUFHeEQsQ0FBQyxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxHQUo2RCxFQUl2RCxHQUp1RCxFQUlqRCxHQUppRCxFQUs3RCxDQUFDLEdBTDRELEVBS3RE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LE1BQUQsQ0FBckI7QUFDSCxLQXpDRDs7QUEwQ0FSLFNBQUssQ0FBQzRCLEdBQU4sR0FBWUMsMERBQVo7QUFFSCxHQXhFRDs7QUEwRUFyQyxhQUFXO0FBQ2QsQyIsImZpbGUiOiJmcmFtZWJ1ZmZlci42M2FhNTgxNWRhOTRjZmRhMzA2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnlnZDmoIdidWZmZXJcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8gRnJvbnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJhY2sgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRvcCBmYWNlXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQm90dG9tIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBSaWdodCBmYWNlXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIExlZnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE57q555CG54K55Z2Q5qCHXG4gICAgY29uc3QgdGV4dHVyZUJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udFxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgLy8gQmFja1xuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgLy8gVG9wXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAvLyBCb3R0b21cbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIC8vIFJpZ2h0XG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAvLyBMZWZ0XG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgICAgLy8g5YmNXG4gICAgICAgIDQsIDUsIDYsIDQsIDYsIDcsICAgIC8vIOWQjlxuICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAgIC8vIOmhtlxuICAgICAgICAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LCAgIC8vIOW6lVxuICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAgIC8vIOWPs1xuICAgICAgICAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLCAgIC8vIOW3plxuICAgIF0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRleEJ1ZmZlcixcbiAgICAgICAgdGV4dHVyZUJ1ZmZlcixcbiAgICAgICAgaW5kZXhCdWZmZXIsXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY1Zjc5MzBjYTIxMmJjNjM2MDRhNWY4NTVlNDI3YTc5LmpwZWdcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbi8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4vLyA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuLy8gYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWFlNzFiN2ViZGI4MzhlZDgwODg5ODkxNjI4NzkzMzcuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUzYzJmNjdlNjBlNjA2NDgwYTdiNzNlY2NjN2M2Y2IwLmdsc2xcIjsiLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9uLCBpbml0VGV4dHVyZSwgaW5pdEZyYW1lYnVmZmVyT2JqZWN0fSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcbmltcG9ydCB0ZXh0dXJlVXJsIGZyb20gJy4uLy4uL2ltYWdlL3RleHR1cmUuanBlZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCB0ZXh0dXJlUG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndGV4dHVyZVBvc2l0aW9uJyk7XG5cbiAgICBjb25zdCBwZXJzcGV0aXZlTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4Jyk7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndmlld01hdHJpeCcpO1xuICAgIGNvbnN0IG1vZGVsTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdtb2RlbE1hdHJpeCcpO1xuICAgIGNvbnN0IHRleHR1cmVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpO1xuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBQZXJzcGV0aXZlTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihwZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFszLCAzLCA3XSk7XG5cbiAgICBjb25zdCBkcmF3R3JhcGhpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7nurnnkIblnZDmoIdcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudGV4dHVyZUJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICB0ZXh0dXJlUG9zaXRpb24sIFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXh0dXJlUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rue6ueeQhuWbvueJh1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuaW5kZXhCdWZmZXIpO1xuICAgICAgICAgICAgLy8g5Yid5aeL5YyWZnJhbWVCdWZmZXJcbiAgICAgICAgICAgIGNvbnN0IGZibyA9IGluaXRGcmFtZWJ1ZmZlck9iamVjdChnbCk7XG5cbiAgICAgICAgICAgIGxldCBhbmdsZSA9IDAuMDtcbiAgICAgICAgICAgIGxldCB0aGVuID0gMC4wO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuICAgICAgICAgICAgICAgIG5vdyAqPSAwLjAwMTtcbiAgICAgICAgICAgICAgICBhbmdsZSArPSBub3cgLSB0aGVuO1xuICAgICAgICAgICAgICAgIHRoZW4gPSBub3c7XG5cbiAgICAgICAgICAgICAgICAvLyDlsIbnu5jliLbnmoTlr7nosaHkv53lrZjlnKhmYm/kuK1cbiAgICAgICAgICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZibyk7XG4gICAgICAgICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9rmZib+eahOiDjOaZr+iJsuW5tuS4lOa4heepumZib1xuICAgICAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IoMS4wLCAwLjIsIDAuMywgMS4wKTtcbiAgICAgICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u57q555CG5Zu+54mHXG4gICAgICAgICAgICAgICAgaW5pdFRleHR1cmUoZ2wsIGltYWdlLCB0ZXh0dXJlU2FtcGxlciwgdGV4dHVyZSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIG1hdDQucm90YXRlWCh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgICAgICAgICBtYXQ0LnJvdGF0ZVoodHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4LCBhbmdsZSk7XG4gICAgICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfQllURSwgMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDlsIbnu5jliLbnmoTlr7nosaHkv53lrZjlnKhjb2xvciBidWZmZXLkuK3vvIzkuZ/lsLHmmK/nu5jliLblm77lvaLliLB3ZWJnbOS4rVxuICAgICAgICAgICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9rndlYmds55qE6aKc6Imy5bm25LiU5riF56m6d2ViZ2xcbiAgICAgICAgICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgICAgIC8vIOWwhmZib+S4reeahOe6ueeQhmJ1ZmZlcuaPkOWPluWHuuadpVxuICAgICAgICAgICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2xbYFRFWFRVUkUwYF0pO1xuICAgICAgICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGZiby50ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAvLyDlsIZmYm/kvZzkuLrnurnnkIbnu5jliLbliLDlm77lvaLkuK1cbiAgICAgICAgICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAzNiwgZ2wuVU5TSUdORURfQllURSwgMCk7XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLnNyYyA9IHRleHR1cmVVcmw7XG5cbiAgICB9XG5cbiAgICBkcmF3R3JhcGhpYygpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=