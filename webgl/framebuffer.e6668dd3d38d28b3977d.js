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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVCdWZmZXIvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZS90ZXh0dXJlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZUJ1ZmZlci9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL3NoYWRlcnMvVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lQnVmZmVyL2RyYXcuanMiXSwibmFtZXMiOlsiR2VuZXJhdGVCdWZmZXJzIiwiZ2wiLCJ2ZXJ0ZXhCdWZmZXIiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwidGV4dHVyZUJ1ZmZlciIsImluZGV4QnVmZmVyIiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZ2V0Q29udGV4dCIsImxvYWRBbGxTaGFkZXJzIiwic2hhZGVycyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwia2V5IiwibG9hZEZpbGUiLCJwdXNoIiwiaW5pdFdlYkdsIiwiYmYiLCJzaGFkZXJQcm9ncmFtIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidGV4dHVyZVBvc2l0aW9uIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsInRleHR1cmVTYW1wbGVyIiwiUGVyc3BldGl2ZU1hdHJpeCIsIm1hdDQiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIk1hdGgiLCJQSSIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJmYm8iLCJpbml0RnJhbWVidWZmZXJPYmplY3QiLCJhbmdsZSIsInRoZW4iLCJyZW5kZXIiLCJub3ciLCJiaW5kRnJhbWVidWZmZXIiLCJGUkFNRUJVRkZFUiIsInZpZXdwb3J0IiwiY2xlYXJDb2xvciIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJpbml0VGV4dHVyZSIsInRyYW5mb3JtTWF0cml4Iiwicm90YXRlWCIsInJvdGF0ZVoiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIiwiYWN0aXZlVGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV8yRCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNyYyIsInRleHR1cmVVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ3hDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyw4RUFBc0IsQ0FBQ0YsRUFBRCxFQUFLLElBQUlHLFlBQUosQ0FBaUIsQ0FDN0Q7QUFDQSxHQUFDLEdBRjRELEVBRXZELENBQUMsR0FGc0QsRUFFaEQsR0FGZ0QsRUFHN0QsR0FINkQsRUFHeEQsQ0FBQyxHQUh1RCxFQUdqRCxHQUhpRCxFQUk3RCxHQUo2RCxFQUl2RCxHQUp1RCxFQUlqRCxHQUppRCxF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QkFBcUIsQ0FBQ25CLE1BQUQsQ0FBckI7QUFDSDs7QUFDRG1CLDJCQUFxQixDQUFDbkIsTUFBRCxDQUFyQjtBQUNILEtBekNEOztBQTBDQVIsU0FBSyxDQUFDNEIsR0FBTixHQUFZQywwREFBWjtBQUVILEdBeEVEOztBQTBFQXJDLGFBQVc7QUFDZCxDIiwiZmlsZSI6ImZyYW1lYnVmZmVyLmU2NjY4ZGQzZDM4ZDI4YjM5NzdkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQmFjayBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gVG9wIGZhY2VcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCb3R0b20gZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGZhY2VcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gTGVmdCBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTnurnnkIbngrnlnZDmoIdcbiAgICBjb25zdCB0ZXh0dXJlQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIEZyb250XG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAvLyBCYWNrXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAvLyBUb3BcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIC8vIEJvdHRvbVxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgLy8gUmlnaHRcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIC8vIExlZnRcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K557Si5byVXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCAgICAvLyDliY1cbiAgICAgICAgNCwgNSwgNiwgNCwgNiwgNywgICAgLy8g5ZCOXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsICAgLy8g6aG2XG4gICAgICAgIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsICAgLy8g5bqVXG4gICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksICAgLy8g5Y+zXG4gICAgICAgIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsICAgLy8g5bemXG4gICAgXSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICB0ZXh0dXJlQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjVmNzkzMGNhMjEyYmM2MzYwNGE1Zjg1NWU0MjdhNzkuanBlZ1wiOyIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbjxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG5gKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYWU3MWI3ZWJkYjgzOGVkODA4ODk4OTE2Mjg3OTMzNy5nbHNsXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTNjMmY2N2U2MGU2MDY0ODBhN2I3M2VjY2M3YzZjYjAuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb24sIGluaXRUZXh0dXJlLCBpbml0RnJhbWVidWZmZXJPYmplY3R9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJ1xuaW1wb3J0IHRleHR1cmVVcmwgZnJvbSAnLi4vLi4vaW1hZ2UvdGV4dHVyZS5qcGVnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHRleHR1cmVQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd0ZXh0dXJlUG9zaXRpb24nKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG4gICAgY29uc3QgdGV4dHVyZVNhbXBsZXIgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3RleHR1cmVTYW1wbGVyJyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzMsIDMsIDddKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rue6ueeQhuWdkOagh1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy50ZXh0dXJlQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHRleHR1cmVQb3NpdGlvbiwgXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleHR1cmVQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u57q555CG5Zu+54mHXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgICAgICAvLyDliJ3lp4vljJZmcmFtZUJ1ZmZlclxuICAgICAgICAgICAgY29uc3QgZmJvID0gaW5pdEZyYW1lYnVmZmVyT2JqZWN0KGdsKTtcblxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gMC4wO1xuICAgICAgICAgICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgICAgICAgICBmdW5jdGlvbiByZW5kZXIobm93KSB7XG4gICAgICAgICAgICAgICAgbm93ICo9IDAuMDAxO1xuICAgICAgICAgICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgICAgICAgICAgdGhlbiA9IG5vdztcblxuICAgICAgICAgICAgICAgIC8vIOWwhue7mOWItueahOWvueixoeS/neWtmOWcqGZib+S4rVxuICAgICAgICAgICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZmJvKTtcbiAgICAgICAgICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8g6K6+572uZmJv55qE6IOM5pmv6Imy5bm25LiU5riF56m6ZmJvXG4gICAgICAgICAgICAgICAgZ2wuY2xlYXJDb2xvcigxLjAsIDAuMiwgMC4zLCAxLjApO1xuICAgICAgICAgICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7nurnnkIblm77niYdcbiAgICAgICAgICAgICAgICBpbml0VGV4dHVyZShnbCwgaW1hZ2UsIHRleHR1cmVTYW1wbGVyLCB0ZXh0dXJlLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgbWF0NC5yb3RhdGVYKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICAgICAgICAgIG1hdDQucm90YXRlWih0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlKTtcbiAgICAgICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcblxuICAgICAgICAgICAgICAgIC8vIOWwhue7mOWItueahOWvueixoeS/neWtmOWcqGNvbG9yIGJ1ZmZlcuS4re+8jOS5n+WwseaYr+e7mOWItuWbvuW9ouWIsHdlYmds5LitXG4gICAgICAgICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgICAgICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8g6K6+572ud2ViZ2znmoTpopzoibLlubbkuJTmuIXnqbp3ZWJnbFxuICAgICAgICAgICAgICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICAgICAgLy8g5bCGZmJv5Lit55qE57q555CGYnVmZmVy5o+Q5Y+W5Ye65p2lXG4gICAgICAgICAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbFtgVEVYVFVSRTBgXSk7XG4gICAgICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZmJvLnRleHR1cmUpO1xuICAgICAgICAgICAgICAgIC8vIOWwhmZib+S9nOS4uue6ueeQhue7mOWItuWIsOWbvuW9ouS4rVxuICAgICAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uuc3JjID0gdGV4dHVyZVVybDtcblxuICAgIH1cblxuICAgIGRyYXdHcmFwaGljKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==