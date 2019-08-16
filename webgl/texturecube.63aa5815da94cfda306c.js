(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["texturecube"],{

/***/ "7tV7":
/*!*********************************!*\
  !*** ./src/textureCube/draw.js ***!
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
      Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initTexture"])(gl, image, textureSampler, texture, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      var angle = 0.0;
      var then = 0.0;

      function render(now) {
        now *= 0.001;
        angle += now - then;
        then = now;
        var tranformMatrix = mat4.create();
        mat4.rotateX(tranformMatrix, tranformMatrix, angle);
        mat4.rotateZ(tranformMatrix, tranformMatrix, angle);
        gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    };

    image.src = _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a;
  };

  drawGraphic();
});

/***/ }),

/***/ "E+wr":
/*!************************************!*\
  !*** ./src/textureCube/buffers.js ***!
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

/***/ "M9M5":
/*!***********************************************!*\
  !*** ./src/textureCube/shaders/Fragment.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eae71b7ebdb838ed8088989162879337.glsl";

/***/ }),

/***/ "WoE8":
/*!*********************************************!*\
  !*** ./src/textureCube/shaders/Vertex.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f2a87ada11d479d0b001a146fc03c99.glsl";

/***/ }),

/***/ "YJnk":
/*!****************************!*\
  !*** ./image/texture.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65f7930ca212bc63604a5f855e427a79.jpeg";

/***/ }),

/***/ "d1ig":
/*!**********************************!*\
  !*** ./src/textureCube/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "E+wr");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "WoE8");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "M9M5");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "7tV7");







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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUN1YmUvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUN1YmUvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUN1YmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlQ3ViZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL2ltYWdlL3RleHR1cmUuanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUN1YmUvaW5kZXguanMiXSwibmFtZXMiOlsiQnVmZmVycyIsImdsIiwic2hhZGVyUHJvZ3JhbSIsInBvaW50UG9zaXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInRleHR1cmVQb3NpdGlvbiIsInBlcnNwZXRpdmVNYXRyaXgiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2aWV3TWF0cml4IiwibW9kZWxNYXRyaXgiLCJ0ZXh0dXJlU2FtcGxlciIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEJ1ZmZlciIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidGV4dHVyZUJ1ZmZlciIsInRleHR1cmUiLCJjcmVhdGVUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImluaXRUZXh0dXJlIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsImFuZ2xlIiwidGhlbiIsInJlbmRlciIsIm5vdyIsInRyYW5mb3JtTWF0cml4Iiwicm90YXRlWCIsInJvdGF0ZVoiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsImluZGV4QnVmZmVyIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfQllURSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNyYyIsInRleHR1cmVVcmwiLCJHZW5lcmF0ZUJ1ZmZlcnMiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5IiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFwcGVuZCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSx5RUFBU0EsT0FBVCxFQUFrQkMsRUFBbEIsRUFBc0JDLGFBQXRCLEVBQXFDO0FBQ2hEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixFQUFFLENBQUNHLGlCQUFILENBQXFCRixhQUFyQixFQUFvQyxlQUFwQyxDQUF0QjtBQUNBLE1BQU1HLGVBQWUsR0FBR0osRUFBRSxDQUFDRyxpQkFBSCxDQUFxQkYsYUFBckIsRUFBb0MsaUJBQXBDLENBQXhCO0FBRUEsTUFBTUksZ0JBQWdCLEdBQUdMLEVBQUUsQ0FBQ00sa0JBQUgsQ0FBc0JMLGFBQXRCLEVBQXFDLGtCQUFyQyxDQUF6QjtBQUNBLE1BQU1NLFVBQVUsR0FBR1AsRUFBRSxDQUFDTSxrQkFBSCxDQUFzQkwsYUFBdEIsRUFBcUMsWUFBckMsQ0FBbkI7QUFDQSxNQUFNTyxXQUFXLEdBQUdSLEVBQUUsQ0FBQ00s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LCJmaWxlIjoidGV4dHVyZWN1YmUuNjNhYTU4MTVkYTk0Y2ZkYTMwNmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldEV5ZVBvc2l0aW9uLCBpbml0VGV4dHVyZX0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnXG5pbXBvcnQgdGV4dHVyZVVybCBmcm9tICcuLi8uLi9pbWFnZS90ZXh0dXJlLmpwZWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEJ1ZmZlcnMsIGdsLCBzaGFkZXJQcm9ncmFtKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgdGV4dHVyZVBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3RleHR1cmVQb3NpdGlvbicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcbiAgICBjb25zdCB0ZXh0dXJlU2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndGV4dHVyZVNhbXBsZXInKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjMwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbMywgMywgN10pO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g6K6+572u54K55L2N572uXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u57q555CG5Z2Q5qCHXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnRleHR1cmVCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgdGV4dHVyZVBvc2l0aW9uLCBcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGV4dHVyZVBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7nurnnkIblm77niYdcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbml0VGV4dHVyZShnbCwgaW1hZ2UsIHRleHR1cmVTYW1wbGVyLCB0ZXh0dXJlLCAwKTtcbiAgICAgICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gMC4wO1xuICAgICAgICAgICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgICAgICAgICBmdW5jdGlvbiByZW5kZXIobm93KSB7XG4gICAgICAgICAgICAgICAgbm93ICo9IDAuMDAxO1xuICAgICAgICAgICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgICAgICAgICAgdGhlbiA9IG5vdztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBtYXQ0LnJvdGF0ZVgodHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4LCBhbmdsZSk7XG4gICAgICAgICAgICAgICAgbWF0NC5yb3RhdGVaKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuXG4gICAgICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpbWFnZS5zcmMgPSB0ZXh0dXJlVXJsO1xuXG4gICAgfVxuXG4gICAgZHJhd0dyYXBoaWMoKTtcbn0iLCJpbXBvcnQgeyBpbml0QnVmZmVyc0ZvckxhdGVyVXNlLCBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVCdWZmZXJzKGdsKSB7XG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE54K55Z2Q5qCHYnVmZmVyXG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIEZyb250IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCYWNrIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBUb3AgZmFjZVxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJvdHRvbSBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gUmlnaHQgZmFjZVxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBMZWZ0IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOe6ueeQhueCueWdkOagh1xuICAgIGNvbnN0IHRleHR1cmVCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8gRnJvbnRcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIC8vIEJhY2tcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIC8vIFRvcFxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgLy8gQm90dG9tXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAvLyBSaWdodFxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgLy8gTGVmdFxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjBcbiAgICBdKSk7XG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnntKLlvJVcbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIHRleHR1cmVCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYWU3MWI3ZWJkYjgzOGVkODA4ODk4OTE2Mjg3OTMzNy5nbHNsXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2YyYTg3YWRhMTFkNDc5ZDBiMDAxYTE0NmZjMDNjOTkuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY1Zjc5MzBjYTIxMmJjNjM2MDRhNWY4NTVlNDI3YTc5LmpwZWdcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbi8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4vLyA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuLy8gYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==