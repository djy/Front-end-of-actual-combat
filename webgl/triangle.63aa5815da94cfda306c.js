(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["triangle"],{

/***/ "2PQc":
/*!********************************************!*\
  !*** ./src/triangle/shaders/Fragment.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70ff9c7f7757286ae7c4a2110b00db0.glsl";

/***/ }),

/***/ "E8sC":
/*!*******************************!*\
  !*** ./src/triangle/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "gW1W");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "szhx");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "2PQc");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "popF");







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

/***/ "gW1W":
/*!*********************************!*\
  !*** ./src/triangle/buffers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");

function GenerateBuffers(gl) {
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0]));
  var colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2]));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "popF":
/*!******************************!*\
  !*** ./src/triangle/draw.js ***!
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
  Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["setEyePosition"])(gl, viewMatrix, [0, 10, 9]);

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置点颜色

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.colorBuffer);
    gl.vertexAttribPointer(pointColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointColor); // 设置图形过渡

    var tranformMatrix = mat4.create(); // mat4.rotateY(tranformMatrix, tranformMatrix, angle);

    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_BYTE, 0);
  };

  drawGraphic(0.0);
});

/***/ }),

/***/ "szhx":
/*!******************************************!*\
  !*** ./src/triangle/shaders/Vertex.glsl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "092573494f967c72f81f9824e6424f85.glsl";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90cmlhbmdsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpYW5nbGUvc2hhZGVycy9WZXJ0ZXguZ2xzbCJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJnbCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwidmVydGV4QnVmZmVyIiwiaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSIsIkZsb2F0MzJBcnJheSIsImNvbG9yQnVmZmVyIiwiaW5kZXhCdWZmZXIiLCJpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSIsIlVpbnQ4QXJyYXkiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwicG9pbnRDb2xvciIsInBlcnNwZXRpdmVNYXRyaXgiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2aWV3TWF0cml4IiwibW9kZWxNYXRyaXgiLCJQZXJzcGV0aXZlTWF0cml4IiwibWF0NCIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiTWF0aCIsIlBJIiwidW5pZm9ybU1hdHJpeDRmdiIsInNldEV5ZVBvc2l0aW9uIiwiZHJhd0dyYXBoaWMiLCJhbmdsZSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiRkxPQVQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInRyYW5mb3JtTWF0cml4IiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJVTlNJR05FRF9CWVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFNLENBQUNHLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUEzQztBQUNBTCxNQUFNLENBQUNHLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxZQUE1QztBQUVBTCxRQUFRLENBQUNHLElBQVQsQ0FBY0csU0FBZCxHQUEwQixFQUExQjtBQUNBTixRQUFRLENBQUNHLElBQVQsQ0FBY0ksTUFBZCxDQUFxQlIsTUFBckIsRSxDQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxFQUFFLEdBQUdULE1BQU0sQ0FBQ1UsVUFBUCxDQUFrQixPQUFsQixDQUFYOztBQUNBLElBQU1DLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDTUMsbUJBRmEsR0FFSCxFQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFHRixNQUFVQyxNQUFNLENBQUNDLFFBQWpCLEdBSEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHVEMsZUFI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LEVBTUksQ0FOSjtBQVFBL0MsTUFBRSxDQUFDZ0QsdUJBQUgsQ0FBMkJuQixVQUEzQixFQXhCZ0MsQ0EwQmhDOztBQUNBLFFBQU1vQixjQUFjLEdBQUdkLElBQUksQ0FBQ0MsTUFBTCxFQUF2QixDQTNCZ0MsQ0E0QmhDOztBQUNBcEMsTUFBRSxDQUFDd0MsZ0JBQUgsQ0FBb0JQLFdBQXBCLEVBQWlDLEtBQWpDLEVBQXdDZ0IsY0FBeEM7QUFDQWpELE1BQUUsQ0FBQzRDLFVBQUgsQ0FBYzVDLEVBQUUsQ0FBQ2tELG9CQUFqQixFQUF1Q3hCLE9BQU8sQ0FBQ0gsV0FBL0M7QUFDQXZCLE1BQUUsQ0FBQ21ELFlBQUgsQ0FBZ0JuRCxFQUFFLENBQUNvRCxTQUFuQixFQUE4QixDQUE5QixFQUFpQ3BELEVBQUUsQ0FBQ3FELGFBQXBDLEVBQW1ELENBQW5EO0FBQ0gsR0FoQ0Q7O0FBa0NBWCxhQUFXLENBQUMsR0FBRCxDQUFYO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNwREQsaUJBQWlCLHFCQUF1QiwyQyIsImZpbGUiOiJ0cmlhbmdsZS42M2FhNTgxNWRhOTRjZmRhMzA2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3MGZmOWM3Zjc3NTcyODZhZTdjNGEyMTEwYjAwZGIwLmdsc2xcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlLCBpbml0U2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBHZW5lcmF0ZUJ1ZmZlcnMgZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvVmVydGV4Lmdsc2wnO1xuaW1wb3J0IGZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9GcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbi8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4vLyA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuLy8gYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG4gICAgLy8g5Yid5aeL5YyWc2hhZGVyXG4gICAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCBzaGFkZXJzWzBdLCBzaGFkZXJzWzFdKTtcbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIC8vIOeUu+WbvlxuICAgIERyYXcoYmYsIGdsLCBzaGFkZXJQcm9ncmFtKTtcbn1cblxuaWYgKGdsKSB7XG4gICAgLy8g5Yqg6L29bG9hZGVyXG4gICAgbG9hZEFsbFNoYWRlcnMoLi4uW3ZlcnRleFVybCwgZnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICBdKSk7XG5cbiAgICBjb25zdCBjb2xvckJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgIF0pKTtcblxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMCwgMSwgMixcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIGNvbG9yQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICB9XG59IiwiaW1wb3J0IHtzZXRFeWVQb3NpdGlvbn0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKEJ1ZmZlcnMsIGdsLCBzaGFkZXJQcm9ncmFtKSB7XG4gICAgLy8g6I635Y+Wc2hhZGVy5Y+Y6YeP5Lit55qE5Zyw5Z2AXG4gICAgY29uc3QgcG9pbnRQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyk7XG4gICAgY29uc3QgcG9pbnRDb2xvciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludENvbG9yJyk7XG5cbiAgICBjb25zdCBwZXJzcGV0aXZlTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4Jyk7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndmlld01hdHJpeCcpO1xuICAgIGNvbnN0IG1vZGVsTWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdtb2RlbE1hdHJpeCcpO1xuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBQZXJzcGV0aXZlTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihwZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFswLCAxMCwgOV0pO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7ngrnpopzoibJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY29sb3JCdWZmZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludENvbG9yLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnRDb2xvcik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgLy8gbWF0NC5yb3RhdGVZKHRyYW5mb3JtTWF0cml4LCB0cmFuZm9ybU1hdHJpeCwgYW5nbGUpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMywgZ2wuVU5TSUdORURfQllURSwgMCk7XG4gICAgfVxuXG4gICAgZHJhd0dyYXBoaWMoMC4wKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwOTI1NzM0OTRmOTY3YzcyZjgxZjk4MjRlNjQyNGY4NS5nbHNsXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==