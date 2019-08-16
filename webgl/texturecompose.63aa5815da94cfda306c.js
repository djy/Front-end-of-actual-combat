(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["texturecompose"],{

/***/ "5AX/":
/*!**************************************************!*\
  !*** ./src/textureCompose/shaders/Fragment.glsl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21acc306a5b6ada9cf891deb9ffb9729.glsl";

/***/ }),

/***/ "AkR6":
/*!************************************!*\
  !*** ./src/textureCompose/draw.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/texture.jpeg */ "YJnk");
/* harmony import */ var _image_texture_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_texture_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_brick_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/brick.jpeg */ "gS+u");
/* harmony import */ var _image_brick_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_image_brick_jpeg__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var texturePosition = gl.getAttribLocation(shaderProgram, 'texturePosition');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix');
  var textureSampler1 = gl.getUniformLocation(shaderProgram, 'textureSampler1');
  var textureSampler2 = gl.getUniformLocation(shaderProgram, 'textureSampler2'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix);
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, viewMatrix, [0, 0, 5]);

  var drawGraphic = function drawGraphic() {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置纹理坐标

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.textureBuffer);
    gl.vertexAttribPointer(texturePosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texturePosition);

    var loadImage = function loadImage(src, textureSampler, unit) {
      var image = new Image();
      image.src = src;
      return new Promise(function (resolve) {
        image.onload = function () {
          var texture = gl.createTexture();
          Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initTexture"])(gl, image, textureSampler, texture, unit);
          resolve(image);
        };
      });
    };

    var renderImage =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var image1, image2, tranformMatrix;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadImage(_image_texture_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a, textureSampler1, 0);

              case 2:
                image1 = _context.sent;
                _context.next = 5;
                return loadImage(_image_brick_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a, textureSampler2, 1);

              case 5:
                image2 = _context.sent;
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                tranformMatrix = mat4.create();
                gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
                gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function renderImage() {
        return _ref.apply(this, arguments);
      };
    }();

    renderImage();
  };

  drawGraphic();
});

/***/ }),

/***/ "Mraz":
/*!************************************************!*\
  !*** ./src/textureCompose/shaders/Vertex.glsl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f2a87ada11d479d0b001a146fc03c99.glsl";

/***/ }),

/***/ "VCCJ":
/*!*************************************!*\
  !*** ./src/textureCompose/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "mkBC");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "Mraz");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "5AX/");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "AkR6");







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

/***/ "YJnk":
/*!****************************!*\
  !*** ./image/texture.jpeg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65f7930ca212bc63604a5f855e427a79.jpeg";

/***/ }),

/***/ "gS+u":
/*!**************************!*\
  !*** ./image/brick.jpeg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "23ac81905831489de3accea465fe4279.jpeg";

/***/ }),

/***/ "mkBC":
/*!***************************************!*\
  !*** ./src/textureCompose/buffers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0]));
  var textureBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// Front
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]));
  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3]));
  return {
    vertexBuffer: vertexBuffer,
    textureBuffer: textureBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUNvbXBvc2Uvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlQ29tcG9zZS9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlQ29tcG9zZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlQ29tcG9zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZS90ZXh0dXJlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2UvYnJpY2suanBlZyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dHVyZUNvbXBvc2UvYnVmZmVycy5qcyJdLCJuYW1lcyI6WyJCdWZmZXJzIiwiZ2wiLCJzaGFkZXJQcm9ncmFtIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwidGV4dHVyZVBvc2l0aW9uIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsInRleHR1cmVTYW1wbGVyMSIsInRleHR1cmVTYW1wbGVyMiIsIlBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzZXRFeWVQb3NpdGlvbiIsImRyYXdHcmFwaGljIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEJ1ZmZlciIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidGV4dHVyZUJ1ZmZlciIsImxvYWRJbWFnZSIsInNyYyIsInRleHR1cmVTYW1wbGVyIiwidW5pdCIsImltYWdlIiwiSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsInRleHR1cmUiLCJjcmVhdGVUZXh0dXJlIiwiaW5pdFRleHR1cmUiLCJyZW5kZXJJbWFnZSIsInRleHR1cmVVcmwiLCJpbWFnZTEiLCJicmlrZVVybCIsImltYWdlMiIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJ0cmFuZm9ybU1hdHJpeCIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiaW5kZXhCdWZmZXIiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFwcGVuZCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwiaW5pdFNoYWRlclByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiRHJhdyIsInZlcnRleFVybCIsImZyYWdtZW50VXJsIiwiYWxlcnQiLCJpbml0QnVmZmVyc0ZvckxhdGVyVXNlIiwiRmxvYXQzMkFycmF5IiwiaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJVaW50OEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7QUFDQTtBQUNBO0FBRWUseUVBQVNBLE9BQVQsRUFBa0JDLEVBQWxCLEVBQXNCQyxhQUF0QixFQUFxQztBQUNoRDtBQUNBLE1BQU1DLGFBQWEsR0FBR0YsRUFBRSxDQUFDRyxpQkFBSCxDQUFxQkYsYUFBckIsRUFBb0MsZUFBcEMsQ0FBdEI7QUFDQSxNQUFNRyxlQUFlLEdBQUdKLEVBQUUsQ0FBQ0csaUJBQUgsQ0FBcUJGLGFBQXJCLEVBQW9DLGlCQUFwQyxDQUF4QjtBQUVBLE1BQU1JLGdCQUFnQixHQUFHTCxFQUFFLENBQUNNLGtCQUFILENBQXNCTCxhQUF0QixF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QVpBLFlBREc7QUFFSEksaUJBQWEsRUFBYkEsYUFGRztBQUdIdUIsZUFBVyxFQUFYQTtBQUhHLEdBQVA7QUFLSCxDIiwiZmlsZSI6InRleHR1cmVjb21wb3NlLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjFhY2MzMDZhNWI2YWRhOWNmODkxZGViOWZmYjk3MjkuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb24sIGluaXRUZXh0dXJlfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcbmltcG9ydCB0ZXh0dXJlVXJsIGZyb20gJy4uLy4uL2ltYWdlL3RleHR1cmUuanBlZyc7XG5pbXBvcnQgYnJpa2VVcmwgZnJvbSAnLi4vLi4vaW1hZ2UvYnJpY2suanBlZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEJ1ZmZlcnMsIGdsLCBzaGFkZXJQcm9ncmFtKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgdGV4dHVyZVBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3RleHR1cmVQb3NpdGlvbicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcbiAgICBjb25zdCB0ZXh0dXJlU2FtcGxlcjEgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3RleHR1cmVTYW1wbGVyMScpO1xuICAgIGNvbnN0IHRleHR1cmVTYW1wbGVyMiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndGV4dHVyZVNhbXBsZXIyJyk7XG5cbiAgICAvLyDorr7nva4zROmAj+inhuinhumHjuWSjOinhumHjuS9jee9rlxuICAgIGNvbnN0IFBlcnNwZXRpdmVNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUoUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMTAwKTtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICBzZXRFeWVQb3NpdGlvbihnbCwgdmlld01hdHJpeCwgWzAsIDAsIDVdKTtcblxuICAgIGNvbnN0IGRyYXdHcmFwaGljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rue6ueeQhuWdkOagh1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy50ZXh0dXJlQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHRleHR1cmVQb3NpdGlvbiwgXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleHR1cmVQb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgbG9hZEltYWdlID0gZnVuY3Rpb24oc3JjLCB0ZXh0dXJlU2FtcGxlciwgdW5pdCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5pdFRleHR1cmUoZ2wsIGltYWdlLCB0ZXh0dXJlU2FtcGxlciwgdGV4dHVyZSwgdW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVuZGVySW1hZ2UgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW1hZ2UxID0gYXdhaXQgbG9hZEltYWdlKHRleHR1cmVVcmwsIHRleHR1cmVTYW1wbGVyMSwgMCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTIgPSBhd2FpdCBsb2FkSW1hZ2UoYnJpa2VVcmwsIHRleHR1cmVTYW1wbGVyMiwgMSk7XG5cbiAgICAgICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVySW1hZ2UoKTtcblxuICAgIH1cblxuICAgIGRyYXdHcmFwaGljKCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2YyYTg3YWRhMTFkNDc5ZDBiMDAxYTE0NmZjMDNjOTkuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuLy8gZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbi8vIDxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG4vLyBgKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NWY3OTMwY2EyMTJiYzYzNjA0YTVmODU1ZTQyN2E3OS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjNhYzgxOTA1ODMxNDg5ZGUzYWNjZWE0NjVmZTQyNzkuanBlZ1wiOyIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgdGV4dHVyZUJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyBGcm9udFxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG4gICAgXSkpO1xuXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLCBcbiAgICAgICAgMCwgMiwgMyxcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIHRleHR1cmVCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9