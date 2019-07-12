(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sphere"],{

/***/ "1HjN":
/*!*****************************!*\
  !*** ./src/sphere/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "N7Ro");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "x716");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "JOWL");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draw.js */ "yNm3");







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

/***/ "JOWL":
/*!******************************************!*\
  !*** ./src/sphere/shaders/Fragment.glsl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5436fbb473a6a916071d4048351404d4.glsl";

/***/ }),

/***/ "N7Ro":
/*!*******************************!*\
  !*** ./src/sphere/buffers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateBuffers; });
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
 // 算法的核心思想
// 1. 先计算圆心到每一条纬度线与xz平面的夹角rag_xz，然后计算圆心到每一条经度线与yz平面的夹角rag_yz
// 2. 由rag_xz和rag_yz即可计算出经度线和纬度线交点的坐标

var latitudeNumber = 50;
var longitudeNumber = 50;
var r = 2;
var vertexPosition = [];
var vertextColor = [];
var vertexIndex = [];
var vertexNormal = [];
var texturePosition = [];

for (var i = 0; i <= latitudeNumber; i++) {
  var rag_xz = i * Math.PI / latitudeNumber;
  var sin_rag_xz = Math.sin(rag_xz);
  var cos_rag_xz = Math.cos(rag_xz);

  for (var j = 0; j <= longitudeNumber; j++) {
    var rag_yz = j * 2 * Math.PI / longitudeNumber;
    var sin_rag_yz = Math.sin(rag_yz);
    var cos_rag_yz = Math.cos(rag_yz); // 计算点坐标

    var x = sin_rag_xz * cos_rag_yz;
    var y = cos_rag_xz;
    var z = sin_rag_xz * sin_rag_yz;
    vertexPosition.push(x * r, y * r, z * r);
    vertextColor.push(1.0, 0.0, 1.0);
    vertexNormal.push(x, y, z);
    texturePosition.push(1 - j / longitudeNumber, 1 - j / longitudeNumber);
  }
} // 关键步骤，确定绘制的每个小方形的坐标


for (var _i = 0; _i < latitudeNumber; _i++) {
  for (var _j = 0; _j < longitudeNumber; _j++) {
    var one = _i * (longitudeNumber + 1) + _j;
    var two = one + longitudeNumber + 1;
    vertexIndex.push(one, two, one + 1, two, two + 1, one + 1);
  }
}

function GenerateBuffers(gl) {
  var vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(vertexPosition));
  var colorBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(vertextColor));
  var textureBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(texturePosition));
  var normalBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(vertexNormal));
  var indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint16Array(vertexIndex));
  return {
    vertexBuffer: vertexBuffer,
    colorBuffer: colorBuffer,
    // colorBuffer程序中未用，为了通用性写出来了
    textureBuffer: textureBuffer,
    normalBuffer: normalBuffer,
    indexBuffer: indexBuffer,
    vertexLength: vertexIndex.length
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

/***/ "x716":
/*!****************************************!*\
  !*** ./src/sphere/shaders/Vertex.glsl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b5a3958222045675e597bd178ac3c3e.glsl";

/***/ }),

/***/ "yNm3":
/*!****************************!*\
  !*** ./src/sphere/draw.js ***!
  \****************************/
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




/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaderProgram) {
  // 获取shader变量中的地址
  var pointPosition = gl.getAttribLocation(shaderProgram, 'pointPosition');
  var texturePosition = gl.getAttribLocation(shaderProgram, 'texturePosition');
  var pointNormal = gl.getAttribLocation(shaderProgram, 'pointNormal');
  var pointLightColor = gl.getUniformLocation(shaderProgram, 'pointLightColor');
  var ambientLightColor = gl.getUniformLocation(shaderProgram, 'ambientLightColor');
  var inverseTranspose = gl.getUniformLocation(shaderProgram, 'inverseTranspose');
  var pointLightPosition = gl.getUniformLocation(shaderProgram, 'pointLightPosition');
  var perspetiveMatrix = gl.getUniformLocation(shaderProgram, 'perspetiveMatrix');
  var viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
  var modelMatrix = gl.getUniformLocation(shaderProgram, 'modelMatrix');
  var textureSampler = gl.getUniformLocation(shaderProgram, 'textureSampler'); // 设置3D透视视野和视野位置

  var PerspetiveMatrix = mat4.create();
  mat4.perspective(PerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 100);
  gl.uniformMatrix4fv(perspetiveMatrix, false, PerspetiveMatrix); // 设置方向光源漫反射

  gl.uniform3f(pointLightColor, 1.0, 1.0, 1.0); // 设置方向光源（漫反射）颜色

  gl.uniform3f(ambientLightColor, 0.2, 0.2, 0.2); // 环境光源颜色

  gl.uniform3f(pointLightPosition, 3.0, 3.0, 0.0);

  var drawGraphic = function drawGraphic(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointPosition); // 设置纹理坐标

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.textureBuffer);
    gl.vertexAttribPointer(texturePosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texturePosition); // 设置面法线向量

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.normalBuffer);
    gl.vertexAttribPointer(pointNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointNormal); // 设置图形过渡

    var tranformMatrix = mat4.create(); // 为了让代码通用点，这里虽然列出，但是并没有做任何操作

    gl.uniformMatrix4fv(modelMatrix, false, tranformMatrix); // 设置面法线向量修正，需要在原始的向量上乘以 tranformMatrix 的逆转置矩阵

    var inverseTransposeTranformMatrix = mat4.create();
    mat4.invert(inverseTransposeTranformMatrix, tranformMatrix);
    mat4.transpose(inverseTransposeTranformMatrix, inverseTransposeTranformMatrix);
    gl.uniformMatrix4fv(inverseTranspose, false, inverseTransposeTranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, Buffers.vertexLength, gl.UNSIGNED_SHORT, 0);
  };

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
      var image, angle, then, r, render;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              render = function _ref2(now) {
                now *= 0.001;
                angle += now - then;
                then = now;
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // 视野绕y周旋转

                Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, viewMatrix, [r * Math.sin(Math.PI / 180 * angle * 15), 0.5, r * Math.cos(Math.PI / 180 * angle * 15)]);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                drawGraphic(0.0);
                requestAnimationFrame(render);
              };

              _context.next = 3;
              return loadImage(_image_texture_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a, textureSampler, 0);

            case 3:
              image = _context.sent;
              angle = 0.0;
              then = 0.0;
              r = 10;
              requestAnimationFrame(render);

            case 8:
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
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BoZXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZS90ZXh0dXJlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwaGVyZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvZHJhdy5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnbCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwibGF0aXR1ZGVOdW1iZXIiLCJsb25naXR1ZGVOdW1iZXIiLCJyIiwidmVydGV4UG9zaXRpb24iLCJ2ZXJ0ZXh0Q29sb3IiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleE5vcm1hbCIsInRleHR1cmVQb3NpdGlvbiIsImkiLCJyYWdfeHoiLCJNYXRoIiwiUEkiLCJzaW5fcmFnX3h6Iiwic2luIiwiY29zX3JhZ194eiIsImNvcyIsImoiLCJyYWdfeXoiLCJzaW5fcmFnX3l6IiwiY29zX3JhZ195eiIsIngiLCJ5IiwieiIsIm9uZSIsInR3byIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsInRleHR1cmVCdWZmZXIiLCJub3JtYWxCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIiwiVWludDE2QXJyYXkiLCJ2ZXJ0ZXhMZW5ndGgiLCJsZW5ndGgiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwicG9pbnROb3JtYWwiLCJwb2ludExpZ2h0Q29sb3IiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJhbWJpZW50TGlnaHRDb2xvciIsImludmVyc2VUcmFuc3Bvc2UiLCJwb2ludExpZ2h0UG9zaXRpb24iLCJwZXJzcGV0aXZlTWF0cml4Iiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwidGV4dHVyZVNhbXBsZXIiLCJQZXJzcGV0aXZlTWF0cml4IiwibWF0NCIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwidW5pZm9ybU1hdHJpeDRmdiIsInVuaWZvcm0zZiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsImludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCIsImludmVydCIsInRyYW5zcG9zZSIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJsb2FkSW1hZ2UiLCJzcmMiLCJ1bml0IiwiaW1hZ2UiLCJJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJpbml0VGV4dHVyZSIsInJlbmRlckltYWdlIiwicmVuZGVyIiwibm93IiwidGhlbiIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJzZXRFeWVQb3NpdGlvbiIsInJlcXVl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LEdBQUdELEdBQVA7QUFFQXRHLGtCQUFFLENBQUN3RyxLQUFILENBQVN4RyxFQUFFLENBQUN5RyxnQkFBSCxHQUFzQnpHLEVBQUUsQ0FBQzBHLGdCQUFsQyxFQU5pQixDQU9qQjs7QUFDQUMsc0ZBQWMsQ0FBQzNHLEVBQUQsRUFBS2lFLFVBQUwsRUFBaUIsQ0FBQzVDLENBQUMsR0FBR1EsSUFBSSxDQUFDRyxHQUFMLENBQVVILElBQUksQ0FBQ0MsRUFBTCxHQUFRLEdBQVQsR0FBYzZDLEtBQWQsR0FBb0IsRUFBN0IsQ0FBTCxFQUF1QyxHQUF2QyxFQUE0Q3RELENBQUMsR0FBR1EsSUFBSSxDQUFDSyxHQUFMLENBQVVMLElBQUksQ0FBQ0MsRUFBTCxHQUFRLEdBQVQsR0FBYzZDLEtBQWQsR0FBb0IsRUFBN0IsQ0FBaEQsQ0FBakIsQ0FBZDtBQUVBM0Usa0JBQUUsQ0FBQ3dHLEtBQUgsQ0FBU3hHLEVBQUUsQ0FBQ3lHLGdCQUFILEdBQXNCekcsRUFBRSxDQUFDMEcsZ0JBQWxDO0FBQ0FoQywyQkFBVyxDQUFDLEdBQUQsQ0FBWDtBQUVBa0MscUNBQXFCLENBQUNQLE1BQUQsQ0FBckI7QUFDSCxlQXJCZTs7QUFBQTtBQUFBLHFCQUVJWixTQUFTLENBQUNvQiwwREFBRCxFQUFhMUMsY0FBYixFQUE2QixDQUE3QixDQUZiOztBQUFBO0FBRVZ5QixtQkFGVTtBQUlaakIsbUJBSlksR0FJSixHQUpJO0FBS1o0QixrQkFMWSxHQUtMLEdBTEs7QUFNWmxGLGVBTlksR0FNUixFQU5RO0FBc0JoQnVGLG1DQUFxQixDQUFDUCxNQUFELENBQXJCOztBQXRCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEQsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF5QkFBLGFBQVc7QUFDZCxDIiwiZmlsZSI6InNwaGVyZS5lNjY2OGRkM2QzOGQyOGIzOTc3ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUsIGluaXRTaGFkZXJQcm9ncmFtIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vZHJhdy5qc1wiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjYW52YXMpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbjxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6IDEwcHg7bGVmdDoxMHB4O1wiIHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPVwiaGlzdG9yeS5nbygtMSk7XCI+6L+U5ZuePC9idXR0b24+XG5gKVxuXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5jb25zdCBsb2FkQWxsU2hhZGVycyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDliqDovb1zaGFkZXJcbiAgICBjb25zdCBzaGFkZXJzID0gW107XG4gICAgZm9yKGNvbnN0IGtleSBvZiBhcmd1bWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgc2hhZGVycy5wdXNoKGF3YWl0IGxvYWRGaWxlKGtleSkpO1xuICAgIH1cbiAgICAvLyB3ZWJnbOaJgOacieeahOebuOWFs+aTjeS9nOS4jeiDveWcqOW8guatpea1geS4reaJp+ihjO+8jOW/hemhu+aUvuWcqOWQjOatpea1geS4reS4gOawlOWRteaIkO+8jOWQpuWImeS8muWHuuW+iOWkmuWlh+aAqueahOmXrumimFxuXG4gICAgLy8g5Yid5aeL5YyWd2ViZ2xcbiAgICBpbml0V2ViR2woZ2wpO1xuICAgIC8vIOWKoOi9vee7mOWbvueUqOeahGJ1ZmZlclxuICAgIGNvbnN0IGJmID0gR2VuZXJhdGVCdWZmZXJzKGdsKTtcbiAgICAvLyDliJ3lp4vljJZzaGFkZXJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlclByb2dyYW0pO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybF0pO1xufSBlbHNlIHtcbiAgICBhbGVydChcIuS9oOeahOa1j+iniOWZqOS4jeaUr+aMgXdlYmdsLlwiKTtcbn1cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NDM2ZmJiNDczYTZhOTE2MDcxZDQwNDgzNTE0MDRkNC5nbHNsXCI7IiwiaW1wb3J0IHsgaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSwgaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5cbi8vIOeul+azleeahOaguOW/g+aAneaDs1xuLy8gMS4g5YWI6K6h566X5ZyG5b+D5Yiw5q+P5LiA5p2h57qs5bqm57q/5LiOeHrlubPpnaLnmoTlpLnop5JyYWdfeHrvvIznhLblkI7orqHnrpflnIblv4PliLDmr4/kuIDmnaHnu4/luqbnur/kuI55euW5s+mdoueahOWkueinknJhZ195elxuLy8gMi4g55SxcmFnX3h65ZKMcmFnX3l65Y2z5Y+v6K6h566X5Ye657uP5bqm57q/5ZKM57qs5bqm57q/5Lqk54K555qE5Z2Q5qCHXG5jb25zdCBsYXRpdHVkZU51bWJlciA9IDUwO1xuY29uc3QgbG9uZ2l0dWRlTnVtYmVyID0gNTA7XG5jb25zdCByID0gMjtcbmxldCB2ZXJ0ZXhQb3NpdGlvbiA9IFtdO1xubGV0IHZlcnRleHRDb2xvciA9IFtdO1xubGV0IHZlcnRleEluZGV4ID0gW107XG5sZXQgdmVydGV4Tm9ybWFsID0gW107XG5sZXQgdGV4dHVyZVBvc2l0aW9uID0gW107XG5cbmZvcihsZXQgaSA9IDA7IGkgPD0gbGF0aXR1ZGVOdW1iZXI7IGkrKykge1xuICAgIGNvbnN0IHJhZ194eiA9IGkgKiBNYXRoLlBJIC8gbGF0aXR1ZGVOdW1iZXI7XG4gICAgY29uc3Qgc2luX3JhZ194eiA9IE1hdGguc2luKHJhZ194eik7XG4gICAgY29uc3QgY29zX3JhZ194eiA9IE1hdGguY29zKHJhZ194eik7XG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDw9IGxvbmdpdHVkZU51bWJlcjsgaisrKSB7XG4gICAgICAgIGNvbnN0IHJhZ195eiA9IGogKiAyICogTWF0aC5QSSAvIGxvbmdpdHVkZU51bWJlcjtcbiAgICAgICAgY29uc3Qgc2luX3JhZ195eiA9IE1hdGguc2luKHJhZ195eik7XG4gICAgICAgIGNvbnN0IGNvc19yYWdfeXogPSBNYXRoLmNvcyhyYWdfeXopO1xuXG4gICAgICAgIC8vIOiuoeeul+eCueWdkOagh1xuICAgICAgICBjb25zdCB4ID0gc2luX3JhZ194eiAqIGNvc19yYWdfeXo7XG4gICAgICAgIGNvbnN0IHkgPSBjb3NfcmFnX3h6O1xuICAgICAgICBjb25zdCB6ID0gc2luX3JhZ194eiAqIHNpbl9yYWdfeXo7XG5cbiAgICAgICAgdmVydGV4UG9zaXRpb24ucHVzaCh4ICogciwgeSAqIHIsIHogKiByKTtcbiAgICAgICAgdmVydGV4dENvbG9yLnB1c2goMS4wLCAwLjAsIDEuMCk7XG4gICAgICAgIHZlcnRleE5vcm1hbC5wdXNoKHgsIHksIHopO1xuXG4gICAgICAgIHRleHR1cmVQb3NpdGlvbi5wdXNoKDEgLSAoaiAvIGxvbmdpdHVkZU51bWJlciksIDEgLSAoaiAvIGxvbmdpdHVkZU51bWJlcikpO1xuICAgIH1cbn1cblxuLy8g5YWz6ZSu5q2l6aqk77yM56Gu5a6a57uY5Yi255qE5q+P5Liq5bCP5pa55b2i55qE5Z2Q5qCHXG5mb3IobGV0IGkgPSAwOyBpIDwgbGF0aXR1ZGVOdW1iZXI7IGkrKykge1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBsb25naXR1ZGVOdW1iZXI7IGorKykge1xuICAgICAgICBjb25zdCBvbmUgPSBpICogKGxvbmdpdHVkZU51bWJlciArIDEpICsgajtcbiAgICAgICAgY29uc3QgdHdvID0gb25lICsgbG9uZ2l0dWRlTnVtYmVyICsgMTtcbiAgICAgICAgdmVydGV4SW5kZXgucHVzaChvbmUsIHR3bywgb25lICsgMSwgdHdvLCB0d28gKyAxLCBvbmUgKyAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkodmVydGV4UG9zaXRpb24pKTtcblxuICAgIGNvbnN0IGNvbG9yQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXh0Q29sb3IpKTtcblxuICAgIGNvbnN0IHRleHR1cmVCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KHRleHR1cmVQb3NpdGlvbikpO1xuXG4gICAgY29uc3Qgbm9ybWFsQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhOb3JtYWwpKTtcblxuICAgIGNvbnN0IGluZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50MTZBcnJheSh2ZXJ0ZXhJbmRleCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGV4QnVmZmVyLFxuICAgICAgICBjb2xvckJ1ZmZlciwgLy8gY29sb3JCdWZmZXLnqIvluo/kuK3mnKrnlKjvvIzkuLrkuobpgJrnlKjmgKflhpnlh7rmnaXkuoZcbiAgICAgICAgdGV4dHVyZUJ1ZmZlcixcbiAgICAgICAgbm9ybWFsQnVmZmVyLFxuICAgICAgICBpbmRleEJ1ZmZlcixcbiAgICAgICAgdmVydGV4TGVuZ3RoOiB2ZXJ0ZXhJbmRleC5sZW5ndGhcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjVmNzkzMGNhMjEyYmM2MzYwNGE1Zjg1NWU0MjdhNzkuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRiNWEzOTU4MjIyMDQ1Njc1ZTU5N2JkMTc4YWMzYzNlLmdsc2xcIjsiLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9uLCBpbml0VGV4dHVyZX0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnXG5pbXBvcnQgdGV4dHVyZVVybCBmcm9tICcuLi8uLi9pbWFnZS90ZXh0dXJlLmpwZWcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlclByb2dyYW0pIHtcbiAgICAvLyDojrflj5ZzaGFkZXLlj5jph4/kuK3nmoTlnLDlnYBcbiAgICBjb25zdCBwb2ludFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50UG9zaXRpb24nKTtcbiAgICBjb25zdCB0ZXh0dXJlUG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndGV4dHVyZVBvc2l0aW9uJyk7XG4gICAgY29uc3QgcG9pbnROb3JtYWwgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnROb3JtYWwnKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHRDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRMaWdodENvbG9yJyk7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0Q29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FtYmllbnRMaWdodENvbG9yJyk7XG5cbiAgICBjb25zdCBpbnZlcnNlVHJhbnNwb3NlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdpbnZlcnNlVHJhbnNwb3NlJyk7XG4gICAgY29uc3QgcG9pbnRMaWdodFBvc2l0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludExpZ2h0UG9zaXRpb24nKTtcblxuICAgIGNvbnN0IHBlcnNwZXRpdmVNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BlcnNwZXRpdmVNYXRyaXgnKTtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd2aWV3TWF0cml4Jyk7XG4gICAgY29uc3QgbW9kZWxNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4Jyk7XG5cbiAgICBjb25zdCB0ZXh0dXJlU2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndGV4dHVyZVNhbXBsZXInKTtcblxuICAgIC8vIOiuvue9rjNE6YCP6KeG6KeG6YeO5ZKM6KeG6YeO5L2N572uXG4gICAgY29uc3QgUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShQZXJzcGV0aXZlTWF0cml4LCAoTWF0aC5QSS8xODApKjMwLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoL2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCAxLCAxMDApO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYocGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIFBlcnNwZXRpdmVNYXRyaXgpO1xuXG4gICAgLy8g6K6+572u5pa55ZCR5YWJ5rqQ5ryr5Y+N5bCEXG4gICAgZ2wudW5pZm9ybTNmKHBvaW50TGlnaHRDb2xvciwgMS4wLCAxLjAsIDEuMCk7IC8vIOiuvue9ruaWueWQkeWFiea6kO+8iOa8q+WPjeWwhO+8ieminOiJslxuICAgIGdsLnVuaWZvcm0zZihhbWJpZW50TGlnaHRDb2xvciwgMC4yLCAwLjIsIDAuMik7IC8vIOeOr+Wig+WFiea6kOminOiJslxuICAgIGdsLnVuaWZvcm0zZihwb2ludExpZ2h0UG9zaXRpb24sIDMuMCwgMy4wLCAwLjApO1xuXG4gICAgY29uc3QgZHJhd0dyYXBoaWMgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7nurnnkIblnZDmoIdcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudGV4dHVyZUJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICB0ZXh0dXJlUG9zaXRpb24sIFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXh0dXJlUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rumdouazlee6v+WQkemHj1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5ub3JtYWxCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnROb3JtYWwsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9pbnROb3JtYWwpO1xuXG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgLy8g5Li65LqG6K6p5Luj56CB6YCa55So54K577yM6L+Z6YeM6Jm954S25YiX5Ye677yM5L2G5piv5bm25rKh5pyJ5YGa5Lu75L2V5pON5L2cXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5rOV57q/5ZCR6YeP5L+u5q2j77yM6ZyA6KaB5Zyo5Y6f5aeL55qE5ZCR6YeP5LiK5LmY5LulIHRyYW5mb3JtTWF0cml4IOeahOmAhui9rOe9ruefqemYtVxuICAgICAgICBjb25zdCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LmludmVydChpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4KTtcbiAgICAgICAgbWF0NC50cmFuc3Bvc2UoaW52ZXJzZVRyYW5zcG9zZVRyYW5mb3JtTWF0cml4LCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGludmVyc2VUcmFuc3Bvc2UsIGZhbHNlLCBpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgQnVmZmVycy5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIEJ1ZmZlcnMudmVydGV4TGVuZ3RoLCBnbC5VTlNJR05FRF9TSE9SVCwgMCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZEltYWdlID0gZnVuY3Rpb24oc3JjLCB0ZXh0dXJlU2FtcGxlciwgdW5pdCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICAgICAgaW5pdFRleHR1cmUoZ2wsIGltYWdlLCB0ZXh0dXJlU2FtcGxlciwgdGV4dHVyZSwgdW5pdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckltYWdlID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UodGV4dHVyZVVybCwgdGV4dHVyZVNhbXBsZXIsIDApO1xuXG4gICAgICAgIGxldCBhbmdsZSA9IDAuMDtcbiAgICAgICAgbGV0IHRoZW4gPSAwLjA7XG4gICAgICAgIGxldCByID0gMTA7XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcihub3cpIHtcblxuICAgICAgICAgICAgbm93ICo9IDAuMDAxO1xuICAgICAgICAgICAgYW5nbGUgKz0gbm93IC0gdGhlbjtcbiAgICAgICAgICAgIHRoZW4gPSBub3c7XG5cbiAgICAgICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgIC8vIOinhumHjue7lXnlkajml4vovaxcbiAgICAgICAgICAgIHNldEV5ZVBvc2l0aW9uKGdsLCB2aWV3TWF0cml4LCBbciAqIE1hdGguc2luKChNYXRoLlBJLzE4MCkqYW5nbGUqMTUpLCAwLjUsIHIgKiBNYXRoLmNvcygoTWF0aC5QSS8xODApKmFuZ2xlKjE1KV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICBkcmF3R3JhcGhpYygwLjApO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXJJbWFnZSgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=