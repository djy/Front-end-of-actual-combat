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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3BoZXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvc2hhZGVycy9GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZS90ZXh0dXJlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwaGVyZS9zaGFkZXJzL1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zcGhlcmUvZHJhdy5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJnbCIsImdldENvbnRleHQiLCJsb2FkQWxsU2hhZGVycyIsInNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwicHVzaCIsImluaXRXZWJHbCIsImJmIiwiR2VuZXJhdGVCdWZmZXJzIiwic2hhZGVyUHJvZ3JhbSIsImluaXRTaGFkZXJQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIkRyYXciLCJ2ZXJ0ZXhVcmwiLCJmcmFnbWVudFVybCIsImFsZXJ0IiwibGF0aXR1ZGVOdW1iZXIiLCJsb25naXR1ZGVOdW1iZXIiLCJyIiwidmVydGV4UG9zaXRpb24iLCJ2ZXJ0ZXh0Q29sb3IiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleE5vcm1hbCIsInRleHR1cmVQb3NpdGlvbiIsImkiLCJyYWdfeHoiLCJNYXRoIiwiUEkiLCJzaW5fcmFnX3h6Iiwic2luIiwiY29zX3JhZ194eiIsImNvcyIsImoiLCJyYWdfeXoiLCJzaW5fcmFnX3l6IiwiY29zX3JhZ195eiIsIngiLCJ5IiwieiIsIm9uZSIsInR3byIsInZlcnRleEJ1ZmZlciIsImluaXRCdWZmZXJzRm9yTGF0ZXJVc2UiLCJGbG9hdDMyQXJyYXkiLCJjb2xvckJ1ZmZlciIsInRleHR1cmVCdWZmZXIiLCJub3JtYWxCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIiwiVWludDE2QXJyYXkiLCJ2ZXJ0ZXhMZW5ndGgiLCJsZW5ndGgiLCJCdWZmZXJzIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwicG9pbnROb3JtYWwiLCJwb2ludExpZ2h0Q29sb3IiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJhbWJpZW50TGlnaHRDb2xvciIsImludmVyc2VUcmFuc3Bvc2UiLCJwb2ludExpZ2h0UG9zaXRpb24iLCJwZXJzcGV0aXZlTWF0cml4Iiwidmlld01hdHJpeCIsIm1vZGVsTWF0cml4IiwidGV4dHVyZVNhbXBsZXIiLCJQZXJzcGV0aXZlTWF0cml4IiwibWF0NCIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwidW5pZm9ybU1hdHJpeDRmdiIsInVuaWZvcm0zZiIsImRyYXdHcmFwaGljIiwiYW5nbGUiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJ0cmFuZm9ybU1hdHJpeCIsImludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCIsImludmVydCIsInRyYW5zcG9zZSIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiZHJhd0VsZW1lbnRzIiwiVFJJQU5HTEVTIiwiVU5TSUdORURfU0hPUlQiLCJsb2FkSW1hZ2UiLCJzcmMiLCJ1bml0IiwiaW1hZ2UiLCJJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJpbml0VGV4dHVyZSIsInJlbmRlckltYWdlIiwicmVuZGVyIiwibm93IiwidGhlbiIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJzZXRFeWVQb3NpdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRl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Q0FBQ3lHLGdCQUFILEdBQXNCekcsRUFBRSxDQUFDMEcsZ0JBQWxDLEVBTmlCLENBT2pCOztBQUNBQyxzRkFBYyxDQUFDM0csRUFBRCxFQUFLaUUsVUFBTCxFQUFpQixDQUFDNUMsQ0FBQyxHQUFHUSxJQUFJLENBQUNHLEdBQUwsQ0FBVUgsSUFBSSxDQUFDQyxFQUFMLEdBQVEsR0FBVCxHQUFjNkMsS0FBZCxHQUFvQixFQUE3QixDQUFMLEVBQXVDLEdBQXZDLEVBQTRDdEQsQ0FBQyxHQUFHUSxJQUFJLENBQUNLLEdBQUwsQ0FBVUwsSUFBSSxDQUFDQyxFQUFMLEdBQVEsR0FBVCxHQUFjNkMsS0FBZCxHQUFvQixFQUE3QixDQUFoRCxDQUFqQixDQUFkO0FBRUEzRSxrQkFBRSxDQUFDd0csS0FBSCxDQUFTeEcsRUFBRSxDQUFDeUcsZ0JBQUgsR0FBc0J6RyxFQUFFLENBQUMwRyxnQkFBbEM7QUFDQWhDLDJCQUFXLENBQUMsR0FBRCxDQUFYO0FBRUFrQyxxQ0FBcUIsQ0FBQ1AsTUFBRCxDQUFyQjtBQUNILGVBckJlOztBQUFBO0FBQUEscUJBRUlaLFNBQVMsQ0FBQ29CLDBEQUFELEVBQWExQyxjQUFiLEVBQTZCLENBQTdCLENBRmI7O0FBQUE7QUFFVnlCLG1CQUZVO0FBSVpqQixtQkFKWSxHQUlKLEdBSkk7QUFLWjRCLGtCQUxZLEdBS0wsR0FMSztBQU1abEYsZUFOWSxHQU1SLEVBTlE7QUFzQmhCdUYsbUNBQXFCLENBQUNQLE1BQUQsQ0FBckI7O0FBdEJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYRCxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQXlCQUEsYUFBVztBQUNkLEMiLCJmaWxlIjoic3BoZXJlLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFdlYkdsLCBsb2FkRmlsZSwgaW5pdFNoYWRlclByb2dyYW0gfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5pbXBvcnQgR2VuZXJhdGVCdWZmZXJzIGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB2ZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFVybCBmcm9tICcuL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9kcmF3LmpzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNhbnZhcyk7XG4vLyBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuLy8gPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogMTBweDtsZWZ0OjEwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbi8vIGApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1swXSwgc2hhZGVyc1sxXSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVyUHJvZ3JhbSk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU0MzZmYmI0NzNhNmE5MTYwNzFkNDA0ODM1MTQwNGQ0Lmdsc2xcIjsiLCJpbXBvcnQgeyBpbml0QnVmZmVyc0ZvckxhdGVyVXNlLCBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSB9IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcblxuLy8g566X5rOV55qE5qC45b+D5oCd5oOzXG4vLyAxLiDlhYjorqHnrpflnIblv4PliLDmr4/kuIDmnaHnuqzluqbnur/kuI54euW5s+mdoueahOWkueinknJhZ194eu+8jOeEtuWQjuiuoeeul+WchuW/g+WIsOavj+S4gOadoee7j+W6pue6v+S4jnl65bmz6Z2i55qE5aS56KeScmFnX3l6XG4vLyAyLiDnlLFyYWdfeHrlkoxyYWdfeXrljbPlj6/orqHnrpflh7rnu4/luqbnur/lkoznuqzluqbnur/kuqTngrnnmoTlnZDmoIdcbmNvbnN0IGxhdGl0dWRlTnVtYmVyID0gNTA7XG5jb25zdCBsb25naXR1ZGVOdW1iZXIgPSA1MDtcbmNvbnN0IHIgPSAyO1xubGV0IHZlcnRleFBvc2l0aW9uID0gW107XG5sZXQgdmVydGV4dENvbG9yID0gW107XG5sZXQgdmVydGV4SW5kZXggPSBbXTtcbmxldCB2ZXJ0ZXhOb3JtYWwgPSBbXTtcbmxldCB0ZXh0dXJlUG9zaXRpb24gPSBbXTtcblxuZm9yKGxldCBpID0gMDsgaSA8PSBsYXRpdHVkZU51bWJlcjsgaSsrKSB7XG4gICAgY29uc3QgcmFnX3h6ID0gaSAqIE1hdGguUEkgLyBsYXRpdHVkZU51bWJlcjtcbiAgICBjb25zdCBzaW5fcmFnX3h6ID0gTWF0aC5zaW4ocmFnX3h6KTtcbiAgICBjb25zdCBjb3NfcmFnX3h6ID0gTWF0aC5jb3MocmFnX3h6KTtcblxuICAgIGZvcihsZXQgaiA9IDA7IGogPD0gbG9uZ2l0dWRlTnVtYmVyOyBqKyspIHtcbiAgICAgICAgY29uc3QgcmFnX3l6ID0gaiAqIDIgKiBNYXRoLlBJIC8gbG9uZ2l0dWRlTnVtYmVyO1xuICAgICAgICBjb25zdCBzaW5fcmFnX3l6ID0gTWF0aC5zaW4ocmFnX3l6KTtcbiAgICAgICAgY29uc3QgY29zX3JhZ195eiA9IE1hdGguY29zKHJhZ195eik7XG5cbiAgICAgICAgLy8g6K6h566X54K55Z2Q5qCHXG4gICAgICAgIGNvbnN0IHggPSBzaW5fcmFnX3h6ICogY29zX3JhZ195ejtcbiAgICAgICAgY29uc3QgeSA9IGNvc19yYWdfeHo7XG4gICAgICAgIGNvbnN0IHogPSBzaW5fcmFnX3h6ICogc2luX3JhZ195ejtcblxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbi5wdXNoKHggKiByLCB5ICogciwgeiAqIHIpO1xuICAgICAgICB2ZXJ0ZXh0Q29sb3IucHVzaCgxLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgdmVydGV4Tm9ybWFsLnB1c2goeCwgeSwgeik7XG5cbiAgICAgICAgdGV4dHVyZVBvc2l0aW9uLnB1c2goMSAtIChqIC8gbG9uZ2l0dWRlTnVtYmVyKSwgMSAtIChqIC8gbG9uZ2l0dWRlTnVtYmVyKSk7XG4gICAgfVxufVxuXG4vLyDlhbPplK7mraXpqqTvvIznoa7lrprnu5jliLbnmoTmr4/kuKrlsI/mlrnlvaLnmoTlnZDmoIdcbmZvcihsZXQgaSA9IDA7IGkgPCBsYXRpdHVkZU51bWJlcjsgaSsrKSB7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGxvbmdpdHVkZU51bWJlcjsgaisrKSB7XG4gICAgICAgIGNvbnN0IG9uZSA9IGkgKiAobG9uZ2l0dWRlTnVtYmVyICsgMSkgKyBqO1xuICAgICAgICBjb25zdCB0d28gPSBvbmUgKyBsb25naXR1ZGVOdW1iZXIgKyAxO1xuICAgICAgICB2ZXJ0ZXhJbmRleC5wdXNoKG9uZSwgdHdvLCBvbmUgKyAxLCB0d28sIHR3byArIDEsIG9uZSArIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJhdGVCdWZmZXJzKGdsKSB7XG4gICAgY29uc3QgdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhQb3NpdGlvbikpO1xuXG4gICAgY29uc3QgY29sb3JCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRleHRDb2xvcikpO1xuXG4gICAgY29uc3QgdGV4dHVyZUJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkodGV4dHVyZVBvc2l0aW9uKSk7XG5cbiAgICBjb25zdCBub3JtYWxCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRleE5vcm1hbCkpO1xuXG4gICAgY29uc3QgaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQxNkFycmF5KHZlcnRleEluZGV4KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIGNvbG9yQnVmZmVyLCAvLyBjb2xvckJ1ZmZlcueoi+W6j+S4reacqueUqO+8jOS4uuS6humAmueUqOaAp+WGmeWHuuadpeS6hlxuICAgICAgICB0ZXh0dXJlQnVmZmVyLFxuICAgICAgICBub3JtYWxCdWZmZXIsXG4gICAgICAgIGluZGV4QnVmZmVyLFxuICAgICAgICB2ZXJ0ZXhMZW5ndGg6IHZlcnRleEluZGV4Lmxlbmd0aFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NWY3OTMwY2EyMTJiYzYzNjA0YTVmODU1ZTQyN2E3OS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGI1YTM5NTgyMjIwNDU2NzVlNTk3YmQxNzhhYzNjM2UuZ2xzbFwiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb24sIGluaXRUZXh0dXJlfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcydcbmltcG9ydCB0ZXh0dXJlVXJsIGZyb20gJy4uLy4uL2ltYWdlL3RleHR1cmUuanBlZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIC8vIOiOt+WPlnNoYWRlcuWPmOmHj+S4reeahOWcsOWdgFxuICAgIGNvbnN0IHBvaW50UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpO1xuICAgIGNvbnN0IHRleHR1cmVQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd0ZXh0dXJlUG9zaXRpb24nKTtcbiAgICBjb25zdCBwb2ludE5vcm1hbCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludE5vcm1hbCcpO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodENvbG9yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdwb2ludExpZ2h0Q29sb3InKTtcbiAgICBjb25zdCBhbWJpZW50TGlnaHRDb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYW1iaWVudExpZ2h0Q29sb3InKTtcblxuICAgIGNvbnN0IGludmVyc2VUcmFuc3Bvc2UgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2ludmVyc2VUcmFuc3Bvc2UnKTtcbiAgICBjb25zdCBwb2ludExpZ2h0UG9zaXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3BvaW50TGlnaHRQb3NpdGlvbicpO1xuXG4gICAgY29uc3QgcGVyc3BldGl2ZU1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpO1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKTtcbiAgICBjb25zdCBtb2RlbE1hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKTtcblxuICAgIGNvbnN0IHRleHR1cmVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpO1xuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBQZXJzcGV0aXZlTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBtYXQ0LnBlcnNwZWN0aXZlKFBlcnNwZXRpdmVNYXRyaXgsIChNYXRoLlBJLzE4MCkqMzAsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgvZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIDEsIDEwMCk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihwZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgUGVyc3BldGl2ZU1hdHJpeCk7XG5cbiAgICAvLyDorr7nva7mlrnlkJHlhYnmupDmvKvlj43lsIRcbiAgICBnbC51bmlmb3JtM2YocG9pbnRMaWdodENvbG9yLCAxLjAsIDEuMCwgMS4wKTsgLy8g6K6+572u5pa55ZCR5YWJ5rqQ77yI5ryr5Y+N5bCE77yJ6aKc6ImyXG4gICAgZ2wudW5pZm9ybTNmKGFtYmllbnRMaWdodENvbG9yLCAwLjIsIDAuMiwgMC4yKTsgLy8g546v5aKD5YWJ5rqQ6aKc6ImyXG4gICAgZ2wudW5pZm9ybTNmKHBvaW50TGlnaHRQb3NpdGlvbiwgMy4wLCAzLjAsIDAuMCk7XG5cbiAgICBjb25zdCBkcmF3R3JhcGhpYyA9IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIC8vIOiuvue9rueCueS9jee9rlxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgcG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rue6ueeQhuWdkOagh1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy50ZXh0dXJlQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHRleHR1cmVQb3NpdGlvbiwgXG4gICAgICAgICAgICAyLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleHR1cmVQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5rOV57q/5ZCR6YePXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBCdWZmZXJzLm5vcm1hbEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICBwb2ludE5vcm1hbCwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb2ludE5vcm1hbCk7XG5cblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICAvLyDkuLrkuoborqnku6PnoIHpgJrnlKjngrnvvIzov5nph4zomb3nhLbliJflh7rvvIzkvYbmmK/lubbmsqHmnInlgZrku7vkvZXmk43kvZxcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtb2RlbE1hdHJpeCwgZmFsc2UsIHRyYW5mb3JtTWF0cml4KTtcblxuICAgICAgICAvLyDorr7nva7pnaLms5Xnur/lkJHph4/kv67mraPvvIzpnIDopoHlnKjljp/lp4vnmoTlkJHph4/kuIrkuZjku6UgdHJhbmZvcm1NYXRyaXgg55qE6YCG6L2s572u55+p6Zi1XG4gICAgICAgIGNvbnN0IGludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQuaW52ZXJ0KGludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBtYXQ0LnRyYW5zcG9zZShpbnZlcnNlVHJhbnNwb3NlVHJhbmZvcm1NYXRyaXgsIGludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoaW52ZXJzZVRyYW5zcG9zZSwgZmFsc2UsIGludmVyc2VUcmFuc3Bvc2VUcmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIFxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgQnVmZmVycy52ZXJ0ZXhMZW5ndGgsIGdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkSW1hZ2UgPSBmdW5jdGlvbihzcmMsIHRleHR1cmVTYW1wbGVyLCB1bml0KSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICBpbml0VGV4dHVyZShnbCwgaW1hZ2UsIHRleHR1cmVTYW1wbGVyLCB0ZXh0dXJlLCB1bml0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVySW1hZ2UgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZSh0ZXh0dXJlVXJsLCB0ZXh0dXJlU2FtcGxlciwgMCk7XG5cbiAgICAgICAgbGV0IGFuZ2xlID0gMC4wO1xuICAgICAgICBsZXQgdGhlbiA9IDAuMDtcbiAgICAgICAgbGV0IHIgPSAxMDtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuXG4gICAgICAgICAgICBub3cgKj0gMC4wMDE7XG4gICAgICAgICAgICBhbmdsZSArPSBub3cgLSB0aGVuO1xuICAgICAgICAgICAgdGhlbiA9IG5vdztcblxuICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgLy8g6KeG6YeO57uVeeWRqOaXi+i9rFxuICAgICAgICAgICAgc2V0RXllUG9zaXRpb24oZ2wsIHZpZXdNYXRyaXgsIFtyICogTWF0aC5zaW4oKE1hdGguUEkvMTgwKSphbmdsZSoxNSksIDAuNSwgciAqIE1hdGguY29zKChNYXRoLlBJLzE4MCkqYW5nbGUqMTUpXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbiAgICAgICAgICAgIGRyYXdHcmFwaGljKDAuMCk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlckltYWdlKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==