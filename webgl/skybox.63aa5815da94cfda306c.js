(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skybox"],{

/***/ "3QZ8":
/*!****************************************************!*\
  !*** ./src/skyBox_Cube/shaders/ReflectVertex.glsl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8d8ff12bb27947c3b99f5fa0f796372.glsl";

/***/ }),

/***/ "3psm":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_dn.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ef4791b3a549bb043553c06db202feb.jpg";

/***/ }),

/***/ "5W1R":
/*!*************************************************!*\
  !*** ./src/skyBox_Sphere/shaders/Fragment.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "667134bc97ecf6e9f58b8f1e16da1943.glsl";

/***/ }),

/***/ "63C6":
/*!*********************************!*\
  !*** ./src/skyBox_Cube/draw.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skyImage/morning_bk.jpg */ "M10M");
/* harmony import */ var _skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skyImage/morning_dn.jpg */ "3psm");
/* harmony import */ var _skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skyImage/morning_ft.jpg */ "H7l/");
/* harmony import */ var _skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skyImage/morning_lf.jpg */ "YEIk");
/* harmony import */ var _skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skyImage/morning_rt.jpg */ "uaIv");
/* harmony import */ var _skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skyImage/morning_up.jpg */ "Gmyx");
/* harmony import */ var _skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaders) {
  /**
   * 3D的环境场景，使用samplerCube构建
   *  1. 首先需要绘制一个立方体
   *  2. 立方体的点坐标就是纹理的坐标无需再重新指定纹理坐标了
   *  3. 需要准备6张纹理图片，代表真是环境6个方向的图片
   *  4. 将这6个图片利用texImage2D分别设置
   * 
   * 立方体镜面效果
   *  1. 首先需要视野点的实时坐标和立方体的normal向量
   *  2. 利用shader的reflect函数根据上面的两个参数可以计算出光线反射后的向量
   *  3. 根据上面计算的反射向量，可以从纹理对象中获取到纹理中的像素，从而绘制到立方体表面形成反射效果
   */
  // 初始化shader
  var cubeMapShaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[0], shaders[1]);
  var cubeMap = {
    pointPosition: gl.getAttribLocation(cubeMapShaderProgram, 'pointPosition'),
    perspetiveMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'perspetiveMatrix'),
    viewMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'viewMatrix'),
    modelMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'modelMatrix'),
    textureSampler: gl.getUniformLocation(cubeMapShaderProgram, 'textureSampler')
  };
  var reflectCubeShaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[2], shaders[3]);
  var reflectCube = {
    pointPosition: gl.getAttribLocation(reflectCubeShaderProgram, 'pointPosition'),
    //
    pointNormal: gl.getAttribLocation(reflectCubeShaderProgram, 'pointNormal'),
    //
    eyePosition: gl.getUniformLocation(reflectCubeShaderProgram, 'eyePosition'),
    // 
    perspetiveMatrix: gl.getUniformLocation(reflectCubeShaderProgram, 'perspetiveMatrix'),
    // 
    viewMatrix: gl.getUniformLocation(reflectCubeShaderProgram, 'viewMatrix'),
    // 
    modelMatrix: gl.getUniformLocation(reflectCubeShaderProgram, 'modelMatrix'),
    //
    textureSampler: gl.getUniformLocation(reflectCubeShaderProgram, 'textureSampler') //
    // 设置3D透视视野和视野位置

  };
  var cubeMapPerspetiveMatrix = mat4.create();
  mat4.perspective(cubeMapPerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 2000);

  var drawCubeMap = function drawCubeMap() {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(cubeMap.pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(cubeMap.pointPosition); // 设置图形过渡

    var tranformMatrix = mat4.create();
    gl.uniformMatrix4fv(cubeMap.modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var drawReflectCube = function drawReflectCube(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.vertexBuffer);
    gl.vertexAttribPointer(reflectCube.pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(reflectCube.pointPosition); // 设置面法线向量

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.normalBuffer);
    gl.vertexAttribPointer(reflectCube.pointNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(reflectCube.pointNormal); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotate(tranformMatrix, tranformMatrix, angle, [1, 1, 1]);
    gl.uniformMatrix4fv(reflectCube.modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var loadImage = function loadImage(src) {
    var image = new Image();
    image.src = src;
    return new Promise(function (resolve) {
      image.onload = function () {
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
      var images, cubeMaptexTure, angle, then, eyePoint, render;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              render = function _ref2(now) {
                now *= 0.0001;
                angle += now - then;
                then = now;
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                vec3.rotateY(eyePoint, eyePoint, new Float32Array([0, 0, 0]), 0.00125);
                gl.useProgram(cubeMapShaderProgram);
                gl.uniformMatrix4fv(cubeMap.perspetiveMatrix, false, cubeMapPerspetiveMatrix);
                gl.uniform1i(cubeMap.textureSampler, 0);
                Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, cubeMap.viewMatrix, eyePoint);
                gl.depthMask(false);
                gl.disable(gl.CULL_FACE);
                drawCubeMap();
                gl.useProgram(reflectCubeShaderProgram);
                gl.uniformMatrix4fv(reflectCube.perspetiveMatrix, false, cubeMapPerspetiveMatrix);
                gl.uniform1i(reflectCube.textureSampler, 0);
                gl.uniform3fv(reflectCube.eyePosition, eyePoint);
                Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, reflectCube.viewMatrix, [3, 3, 7]);
                gl.depthMask(true);
                gl.enable(gl.CULL_FACE);
                drawReflectCube(angle);
                requestAnimationFrame(render);
              };

              images = [];
              _context.t0 = images;
              _context.next = 5;
              return loadImage(_skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

            case 5:
              _context.t1 = _context.sent;
              _context.next = 8;
              return loadImage(_skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);

            case 8:
              _context.t2 = _context.sent;
              _context.next = 11;
              return loadImage(_skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);

            case 11:
              _context.t3 = _context.sent;
              _context.next = 14;
              return loadImage(_skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);

            case 14:
              _context.t4 = _context.sent;
              _context.next = 17;
              return loadImage(_skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);

            case 17:
              _context.t5 = _context.sent;
              _context.next = 20;
              return loadImage(_skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

            case 20:
              _context.t6 = _context.sent;

              _context.t0.push.call(_context.t0, _context.t1, _context.t2, _context.t3, _context.t4, _context.t5, _context.t6);

              // 初始化纹理
              cubeMaptexTure = gl.createTexture();
              Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initCubeMapTextureForLaterUse"])(gl, images, cubeMaptexTure, 0);
              angle = 0.0;
              then = 0.0;
              eyePoint = vec3.create();
              vec3.set(eyePoint, 1, 0, 0);
              requestAnimationFrame(render);

            case 29:
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

/***/ }),

/***/ "6whq":
/*!*********************************************!*\
  !*** ./src/skyBox_Cube/shaders/Vertex.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b59a8d23e5d0905657cab7d63d2617a2.glsl";

/***/ }),

/***/ "8+me":
/*!**************************************!*\
  !*** ./src/skyBox_Sphere/buffers.js ***!
  \**************************************/
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
var sphere_vertexPosition = [];
var sphere_vertexIndex = [];
var sphere_vertexNormal = [];

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
    sphere_vertexPosition.push(x * r, y * r, z * r);
    sphere_vertexNormal.push(x, y, z);
  }
} // 关键步骤，确定绘制的每个小方形的坐标


for (var _i = 0; _i < latitudeNumber; _i++) {
  for (var _j = 0; _j < longitudeNumber; _j++) {
    var one = _i * (longitudeNumber + 1) + _j;
    var two = one + longitudeNumber + 1;
    sphere_vertexIndex.push(one, two, one + 1, two, two + 1, one + 1);
  }
}

function GenerateBuffers(gl) {
  // 立方体每个面的点坐标buffer
  var cube_vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array([// Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0])); // 立方体每个面的点索引

  var cube_indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint8Array([0, 1, 2, 0, 2, 3, // 前
  4, 5, 6, 4, 6, 7, // 后
  8, 9, 10, 8, 10, 11, // 顶
  12, 13, 14, 12, 14, 15, // 底
  16, 17, 18, 16, 18, 19, // 右
  20, 21, 22, 20, 22, 23]));
  var sphere_vertexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(sphere_vertexPosition));
  var sphere_indexBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initElementBuffersForLaterUse"])(gl, new Uint16Array(sphere_vertexIndex));
  var sphere_normalBuffer = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_0__["initBuffersForLaterUse"])(gl, new Float32Array(sphere_vertexNormal));
  return {
    cube: {
      vertexBuffer: cube_vertexBuffer,
      indexBuffer: cube_indexBuffer
    },
    sphere: {
      vertexBuffer: sphere_vertexBuffer,
      indexBuffer: sphere_indexBuffer,
      normalBuffer: sphere_normalBuffer,
      vertexLength: sphere_vertexIndex.length
    }
  };
}

/***/ }),

/***/ "Aq0i":
/*!***********************************************!*\
  !*** ./src/skyBox_Sphere/shaders/Vertex.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b59a8d23e5d0905657cab7d63d2617a2.glsl";

/***/ }),

/***/ "Bixr":
/*!******************************************************!*\
  !*** ./src/skyBox_Cube/shaders/ReflectFragment.glsl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40d4a2748322eea80b830454f7e65cd4.glsl";

/***/ }),

/***/ "C/3O":
/*!**********************************!*\
  !*** ./src/skyBox_Cube/index.js ***!
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
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "ho/I");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "6whq");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "n2HD");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/ReflectVertex.glsl */ "3QZ8");
/* harmony import */ var _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/ReflectFragment.glsl */ "Bixr");
/* harmony import */ var _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draw.js */ "63C6");









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

            bf = Object(_buffers__WEBPACK_IMPORTED_MODULE_3__["default"])(gl); // 画图

            Object(_draw_js__WEBPACK_IMPORTED_MODULE_8__["default"])(bf, gl, shaders);

          case 33:
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
  loadAllShaders.apply(void 0, [_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default.a, _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default.a, _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default.a, _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default.a]);
} else {
  alert("你的浏览器不支持webgl.");
}

/***/ }),

/***/ "C6N/":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_ft.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "860f0456716c2c598160f613c1547812.jpg";

/***/ }),

/***/ "GM72":
/*!***********************************!*\
  !*** ./src/skyBox_Sphere/draw.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skyImage/morning_bk.jpg */ "Thpn");
/* harmony import */ var _skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skyImage/morning_dn.jpg */ "PCcv");
/* harmony import */ var _skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skyImage/morning_ft.jpg */ "C6N/");
/* harmony import */ var _skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skyImage/morning_lf.jpg */ "Lmtj");
/* harmony import */ var _skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skyImage/morning_rt.jpg */ "fzlY");
/* harmony import */ var _skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skyImage/morning_up.jpg */ "Io9W");
/* harmony import */ var _skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (function (Buffers, gl, shaders) {
  /**
   * 3D的环境场景，使用samplerCube构建
   *  1. 首先需要绘制一个立方体
   *  2. 立方体的点坐标就是纹理的坐标无需再重新指定纹理坐标了
   *  3. 需要准备6张纹理图片，代表真是环境6个方向的图片
   *  4. 将这6个图片利用texImage2D分别设置
   * 
   * 球体镜面效果
   *  1. 首先需要视野点的实时坐标和球体的normal向量
   *  2. 利用shader的reflect函数根据上面的两个参数可以计算出光线反射后的向量
   *  3. 根据上面计算的反射向量，可以从纹理对象中获取到纹理中的像素，从而绘制到球体表面形成反射效果
   */
  // 初始化shader
  var cubeMapShaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[0], shaders[1]);
  var cubeMap = {
    pointPosition: gl.getAttribLocation(cubeMapShaderProgram, 'pointPosition'),
    perspetiveMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'perspetiveMatrix'),
    viewMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'viewMatrix'),
    modelMatrix: gl.getUniformLocation(cubeMapShaderProgram, 'modelMatrix'),
    textureSampler: gl.getUniformLocation(cubeMapShaderProgram, 'textureSampler')
  };
  var reflectSphereShaderProgram = Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initShaderProgram"])(gl, shaders[2], shaders[3]);
  var reflectSphere = {
    pointPosition: gl.getAttribLocation(reflectSphereShaderProgram, 'pointPosition'),
    //
    pointNormal: gl.getAttribLocation(reflectSphereShaderProgram, 'pointNormal'),
    //
    eyePosition: gl.getUniformLocation(reflectSphereShaderProgram, 'eyePosition'),
    // 
    perspetiveMatrix: gl.getUniformLocation(reflectSphereShaderProgram, 'perspetiveMatrix'),
    // 
    viewMatrix: gl.getUniformLocation(reflectSphereShaderProgram, 'viewMatrix'),
    // 
    modelMatrix: gl.getUniformLocation(reflectSphereShaderProgram, 'modelMatrix'),
    //
    textureSampler: gl.getUniformLocation(reflectSphereShaderProgram, 'textureSampler') //
    // 设置3D透视视野和视野位置

  };
  var cubeMapPerspetiveMatrix = mat4.create();
  mat4.perspective(cubeMapPerspetiveMatrix, Math.PI / 180 * 30, document.body.clientWidth / document.body.clientHeight, 1, 2000);

  var drawCubeMap = function drawCubeMap() {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.cube.vertexBuffer);
    gl.vertexAttribPointer(cubeMap.pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(cubeMap.pointPosition); // 设置图形过渡

    var tranformMatrix = mat4.create();
    gl.uniformMatrix4fv(cubeMap.modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.cube.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_BYTE, 0);
  };

  var drawReflectSphere = function drawReflectSphere(angle) {
    // 设置点位置
    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.sphere.vertexBuffer);
    gl.vertexAttribPointer(reflectSphere.pointPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(reflectSphere.pointPosition); // 设置面法线向量

    gl.bindBuffer(gl.ARRAY_BUFFER, Buffers.sphere.normalBuffer);
    gl.vertexAttribPointer(reflectSphere.pointNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(reflectSphere.pointNormal); // 设置图形过渡

    var tranformMatrix = mat4.create();
    mat4.rotate(tranformMatrix, tranformMatrix, angle, [1, 1, 1]);
    gl.uniformMatrix4fv(reflectSphere.modelMatrix, false, tranformMatrix);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Buffers.sphere.indexBuffer);
    gl.drawElements(gl.TRIANGLES, Buffers.sphere.vertexLength, gl.UNSIGNED_SHORT, 0);
  };

  var loadImage = function loadImage(src) {
    var image = new Image();
    image.src = src;
    return new Promise(function (resolve) {
      image.onload = function () {
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
      var images, cubeMaptexTure, angle, then, eyePoint, render;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              render = function _ref2(now) {
                now *= 0.0001;
                angle += now - then;
                then = now;
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                vec3.rotateY(eyePoint, eyePoint, new Float32Array([0, 0, 0]), 0.00125);
                gl.useProgram(cubeMapShaderProgram);
                gl.uniformMatrix4fv(cubeMap.perspetiveMatrix, false, cubeMapPerspetiveMatrix);
                gl.uniform1i(cubeMap.textureSampler, 0);
                Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, cubeMap.viewMatrix, eyePoint);
                gl.depthMask(false);
                gl.disable(gl.CULL_FACE);
                drawCubeMap();
                gl.useProgram(reflectSphereShaderProgram);
                gl.uniformMatrix4fv(reflectSphere.perspetiveMatrix, false, cubeMapPerspetiveMatrix);
                gl.uniform1i(reflectSphere.textureSampler, 0);
                gl.uniform3fv(reflectSphere.eyePosition, eyePoint);
                Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["setEyePosition"])(gl, reflectSphere.viewMatrix, [3, 3, 20]);
                gl.depthMask(true);
                gl.enable(gl.CULL_FACE);
                drawReflectSphere(angle);
                requestAnimationFrame(render);
              };

              images = [];
              _context.t0 = images;
              _context.next = 5;
              return loadImage(_skyImage_morning_ft_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);

            case 5:
              _context.t1 = _context.sent;
              _context.next = 8;
              return loadImage(_skyImage_morning_bk_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);

            case 8:
              _context.t2 = _context.sent;
              _context.next = 11;
              return loadImage(_skyImage_morning_up_jpg__WEBPACK_IMPORTED_MODULE_8___default.a);

            case 11:
              _context.t3 = _context.sent;
              _context.next = 14;
              return loadImage(_skyImage_morning_dn_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);

            case 14:
              _context.t4 = _context.sent;
              _context.next = 17;
              return loadImage(_skyImage_morning_rt_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);

            case 17:
              _context.t5 = _context.sent;
              _context.next = 20;
              return loadImage(_skyImage_morning_lf_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);

            case 20:
              _context.t6 = _context.sent;

              _context.t0.push.call(_context.t0, _context.t1, _context.t2, _context.t3, _context.t4, _context.t5, _context.t6);

              // 初始化纹理
              cubeMaptexTure = gl.createTexture();
              Object(_WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__["initCubeMapTextureForLaterUse"])(gl, images, cubeMaptexTure, 0);
              angle = 0.0;
              then = 0.0;
              eyePoint = vec3.create();
              vec3.set(eyePoint, 1, 0, 0);
              requestAnimationFrame(render);

            case 29:
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

/***/ }),

/***/ "Gmyx":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_up.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f54de13eb433ae2f823b0c7cf3d5ab22.jpg";

/***/ }),

/***/ "H7l/":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_ft.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "860f0456716c2c598160f613c1547812.jpg";

/***/ }),

/***/ "Io9W":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_up.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f54de13eb433ae2f823b0c7cf3d5ab22.jpg";

/***/ }),

/***/ "Lmtj":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_lf.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01ba6e02c5b5a0100a30414e2295319d.jpg";

/***/ }),

/***/ "M10M":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_bk.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd5e2330c10475578aefa5889166a7c7.jpg";

/***/ }),

/***/ "PCcv":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_dn.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ef4791b3a549bb043553c06db202feb.jpg";

/***/ }),

/***/ "Thpn":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_bk.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd5e2330c10475578aefa5889166a7c7.jpg";

/***/ }),

/***/ "YEIk":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_lf.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01ba6e02c5b5a0100a30414e2295319d.jpg";

/***/ }),

/***/ "fzlY":
/*!***************************************************!*\
  !*** ./src/skyBox_Sphere/skyImage/morning_rt.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6e604290eae408ae7a2e9ca8c231fa4d.jpg";

/***/ }),

/***/ "ho/I":
/*!************************************!*\
  !*** ./src/skyBox_Cube/buffers.js ***!
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
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0])); // 立方体每个面的法线单位向量，向量方向由绘制点的右手法则确定

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
    normalBuffer: normalBuffer,
    indexBuffer: indexBuffer
  };
}

/***/ }),

/***/ "miQ0":
/*!************************************!*\
  !*** ./src/skyBox_Sphere/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WebGlHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WebGlHelper.js */ "ae2N");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffers */ "8+me");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/Vertex.glsl */ "Aq0i");
/* harmony import */ var _shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/Fragment.glsl */ "5W1R");
/* harmony import */ var _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaders/ReflectVertex.glsl */ "u9rH");
/* harmony import */ var _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/ReflectFragment.glsl */ "sh5M");
/* harmony import */ var _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draw.js */ "GM72");









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

            bf = Object(_buffers__WEBPACK_IMPORTED_MODULE_3__["default"])(gl); // 画图

            Object(_draw_js__WEBPACK_IMPORTED_MODULE_8__["default"])(bf, gl, shaders);

          case 33:
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
  loadAllShaders.apply(void 0, [_shaders_Vertex_glsl__WEBPACK_IMPORTED_MODULE_4___default.a, _shaders_Fragment_glsl__WEBPACK_IMPORTED_MODULE_5___default.a, _shaders_ReflectVertex_glsl__WEBPACK_IMPORTED_MODULE_6___default.a, _shaders_ReflectFragment_glsl__WEBPACK_IMPORTED_MODULE_7___default.a]);
} else {
  alert("你的浏览器不支持webgl.");
}

/***/ }),

/***/ "n2HD":
/*!***********************************************!*\
  !*** ./src/skyBox_Cube/shaders/Fragment.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "667134bc97ecf6e9f58b8f1e16da1943.glsl";

/***/ }),

/***/ "sh5M":
/*!********************************************************!*\
  !*** ./src/skyBox_Sphere/shaders/ReflectFragment.glsl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "40d4a2748322eea80b830454f7e65cd4.glsl";

/***/ }),

/***/ "u9rH":
/*!******************************************************!*\
  !*** ./src/skyBox_Sphere/shaders/ReflectVertex.glsl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8d8ff12bb27947c3b99f5fa0f796372.glsl";

/***/ }),

/***/ "uaIv":
/*!*************************************************!*\
  !*** ./src/skyBox_Cube/skyImage/morning_rt.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6e604290eae408ae7a2e9ca8c231fa4d.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X0N1YmUvc2hhZGVycy9SZWZsZWN0VmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9DdWJlL3NreUltYWdlL21vcm5pbmdfZG4uanBnIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X0N1YmUvZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X0N1YmUvc2hhZGVycy9WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X1NwaGVyZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL3NoYWRlcnMvVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9DdWJlL3NoYWRlcnMvUmVmbGVjdEZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9DdWJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL3NreUltYWdlL21vcm5pbmdfZnQuanBnIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9DdWJlL3NreUltYWdlL21vcm5pbmdfdXAuanBnIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfQ3ViZS9za3lJbWFnZS9tb3JuaW5nX2Z0LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X1NwaGVyZS9za3lJbWFnZS9tb3JuaW5nX3VwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X1NwaGVyZS9za3lJbWFnZS9tb3JuaW5nX2xmLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X0N1YmUvc2t5SW1hZ2UvbW9ybmluZ19iay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9TcGhlcmUvc2t5SW1hZ2UvbW9ybmluZ19kbi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9TcGhlcmUvc2t5SW1hZ2UvbW9ybmluZ19iay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9DdWJlL3NreUltYWdlL21vcm5pbmdfbGYuanBnIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL3NreUltYWdlL21vcm5pbmdfcnQuanBnIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfQ3ViZS9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfU3BoZXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9za3lCb3hfQ3ViZS9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NreUJveF9TcGhlcmUvc2hhZGVycy9SZWZsZWN0RnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X1NwaGVyZS9zaGFkZXJzL1JlZmxlY3RWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2t5Qm94X0N1YmUvc2t5SW1hZ2UvbW9ybmluZ19ydC5qcGciXSwibmFtZXMiOlsiQnVmZmVycyIsImdsIiwic2hhZGVycyIsImN1YmVNYXBTaGFkZXJQcm9ncmFtIiwiaW5pdFNoYWRlclByb2dyYW0iLCJjdWJlTWFwIiwicG9pbnRQb3NpdGlvbiIsImdldEF0dHJpYkxvY2F0aW9uIiwicGVyc3BldGl2ZU1hdHJpeCIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInZpZXdNYXRyaXgiLCJtb2RlbE1hdHJpeCIsInRleHR1cmVTYW1wbGVyIiwicmVmbGVjdEN1YmVTaGFkZXJQcm9ncmFtIiwicmVmbGVjdEN1YmUiLCJwb2ludE5vcm1hbCIsImV5ZVBvc2l0aW9uIiwiY3ViZU1hcFBlcnNwZXRpdmVNYXRyaXgiLCJtYXQ0IiwiY3JlYXRlIiwicGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRyYXdDdWJlTWFwIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInZlcnRleEJ1ZmZlciIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidHJhbmZvcm1NYXRyaXgiLCJ1bmlmb3JtTWF0cml4NGZ2IiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJpbmRleEJ1ZmZlciIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX0JZVEUiLCJkcmF3UmVmbGVjdEN1YmUiLCJhbmdsZSIsIm5vcm1hbEJ1ZmZlciIsInJvdGF0ZSIsImxvYWRJbWFnZSIsInNyYyIsImltYWdlIiwiSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZCIsInJlbmRlckltYWdlIiwicmVuZGVyIiwibm93IiwidGhlbiIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwidmVjMyIsInJvdGF0ZVkiLCJleWVQb2ludCIsIkZsb2F0MzJBcnJheSIsInVzZVByb2dyYW0iLCJ1bmlmb3JtMWkiLCJzZXRFeWVQb3NpdGlvbiIsImRlcHRoTWFzayIsImRpc2FibGUiLCJDVUxMX0ZBQ0UiLCJ1bmlmb3JtM2Z2IiwiZW5hYmxlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW1hZ2VzIiwiZnQiLCJiayIsInVwIiwiZG4iLCJydCIsImxmIiwicHVzaCIsImN1YmVNYXB0ZXhUdXJlIiwiY3JlYXRlVGV4dHVyZSIsImluaXRDdWJlTWFwVGV4dHVyZUZvckxhdGVyVXNlIiwic2V0IiwibGF0aXR1ZGVOdW1iZXIiLCJsb25naXR1ZGVOdW1iZXIiLCJyIiwic3BoZXJlX3ZlcnRleFBvc2l0aW9uIiwic3BoZXJlX3ZlcnRleEluZGV4Iiwic3BoZXJlX3ZlcnRleE5vcm1hbCIsImkiLCJyYWdfeHoiLCJzaW5fcmFnX3h6Iiwic2luIiwiY29zX3JhZ194eiIsImNvcyIsImoiLCJyYWdfeXoiLCJzaW5fcmFnX3l6IiwiY29zX3JhZ195eiIsIngiLCJ5IiwieiIsIm9uZSIsInR3byIsIkdlbmVyYXRlQnVmZmVycyIsImN1YmVfdmVydGV4QnVmZmVyIiwiaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZSIsImN1YmVfaW5kZXhCdWZmZXIiLCJpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZSIsIlVpbnQ4QXJyYXkiLCJzcGhlcmVfdmVydGV4QnVmZmVyIiwic3BoZXJlX2luZGV4QnVmZmVyIiwiVWludDE2QXJyYXkiLCJzcGhlcmVfbm9ybWFsQnVmZmVyIiwiY3ViZSIsInNwaGVyZSIsInZlcnRleExlbmd0aCIsImxlbmd0aCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJnZXRDb250ZXh0IiwibG9hZEFsbFNoYWRlcnMiLCJTeW1ib2wiLCJpdGVyYXRvciIsImtleSIsImxvYWRGaWxlIiwiaW5pdFdlYkdsIiwiYmYiLCJEcmF3IiwidmVydGV4VXJsIiwiZnJhZ21lbnRVcmwiLCJyZWZsZWN0VmVydGV4VXJsIiwicmVmbGVjdEZyYWdtZW50VXJsIiwiYWxlcnQiLCJyZWZsZWN0U3BoZXJlU2hhZGVyUHJvZ3JhbSIsInJlZmxlY3RTcGhlcmUiLCJkcmF3UmVmbGVjdFNwaGVyZSIsIlVOU0lHTkVEX1NIT1JUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLHlFQUFTQSxPQUFULEVBQWtCQyxFQUFsQixFQUFzQkMsT0FBdEIsRUFBK0I7QUFDMUM7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdDLHlFQUFpQixDQUFDSCxFQUFELEVBQUtDLE9BQU8sQ0FBQyxDQUFELENBQVosRUFB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dUIsMkM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMkM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMkM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEMiLCJmaWxlIjoic2t5Ym94LjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYThkOGZmMTJiYjI3OTQ3YzNiOTlmNWZhMGY3OTYzNzIuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJlZjQ3OTFiM2E1NDliYjA0MzU1M2MwNmRiMjAyZmViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY2NzEzNGJjOTdlY2Y2ZTlmNThiOGYxZTE2ZGExOTQzLmdsc2xcIjsiLCJpbXBvcnQge3NldEV5ZVBvc2l0aW9uLCBpbml0Q3ViZU1hcFRleHR1cmVGb3JMYXRlclVzZSwgaW5pdFNoYWRlclByb2dyYW19IGZyb20gJy4uL1dlYkdsSGVscGVyLmpzJztcbmltcG9ydCBiayBmcm9tICcuL3NreUltYWdlL21vcm5pbmdfYmsuanBnJ1xuaW1wb3J0IGRuIGZyb20gJy4vc2t5SW1hZ2UvbW9ybmluZ19kbi5qcGcnXG5pbXBvcnQgZnQgZnJvbSAnLi9za3lJbWFnZS9tb3JuaW5nX2Z0LmpwZydcbmltcG9ydCBsZiBmcm9tICcuL3NreUltYWdlL21vcm5pbmdfbGYuanBnJ1xuaW1wb3J0IHJ0IGZyb20gJy4vc2t5SW1hZ2UvbW9ybmluZ19ydC5qcGcnXG5pbXBvcnQgdXAgZnJvbSAnLi9za3lJbWFnZS9tb3JuaW5nX3VwLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oQnVmZmVycywgZ2wsIHNoYWRlcnMpIHtcbiAgICAvKipcbiAgICAgKiAzROeahOeOr+Wig+WcuuaZr++8jOS9v+eUqHNhbXBsZXJDdWJl5p6E5bu6XG4gICAgICogIDEuIOmmluWFiOmcgOimgee7mOWItuS4gOS4queri+aWueS9k1xuICAgICAqICAyLiDnq4vmlrnkvZPnmoTngrnlnZDmoIflsLHmmK/nurnnkIbnmoTlnZDmoIfml6DpnIDlho3ph43mlrDmjIflrprnurnnkIblnZDmoIfkuoZcbiAgICAgKiAgMy4g6ZyA6KaB5YeG5aSHNuW8oOe6ueeQhuWbvueJh++8jOS7o+ihqOecn+aYr+eOr+WigzbkuKrmlrnlkJHnmoTlm77niYdcbiAgICAgKiAgNC4g5bCG6L+ZNuS4quWbvueJh+WIqeeUqHRleEltYWdlMkTliIbliKvorr7nva5cbiAgICAgKiBcbiAgICAgKiDnq4vmlrnkvZPplZzpnaLmlYjmnpxcbiAgICAgKiAgMS4g6aaW5YWI6ZyA6KaB6KeG6YeO54K555qE5a6e5pe25Z2Q5qCH5ZKM56uL5pa55L2T55qEbm9ybWFs5ZCR6YePXG4gICAgICogIDIuIOWIqeeUqHNoYWRlcueahHJlZmxlY3Tlh73mlbDmoLnmja7kuIrpnaLnmoTkuKTkuKrlj4LmlbDlj6/ku6XorqHnrpflh7rlhYnnur/lj43lsITlkI7nmoTlkJHph49cbiAgICAgKiAgMy4g5qC55o2u5LiK6Z2i6K6h566X55qE5Y+N5bCE5ZCR6YeP77yM5Y+v5Lul5LuO57q555CG5a+56LGh5Lit6I635Y+W5Yiw57q555CG5Lit55qE5YOP57Sg77yM5LuO6ICM57uY5Yi25Yiw56uL5pa55L2T6KGo6Z2i5b2i5oiQ5Y+N5bCE5pWI5p6cXG4gICAgICovXG5cblxuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IGN1YmVNYXBTaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGNvbnN0IGN1YmVNYXAgPSB7XG4gICAgICAgIHBvaW50UG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKGN1YmVNYXBTaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpLFxuICAgICAgICBwZXJzcGV0aXZlTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oY3ViZU1hcFNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4JyksXG4gICAgICAgIHZpZXdNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihjdWJlTWFwU2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKSxcbiAgICAgICAgbW9kZWxNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihjdWJlTWFwU2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4JyksXG4gICAgICAgIHRleHR1cmVTYW1wbGVyOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oY3ViZU1hcFNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpXG4gICAgfVxuXG4gICAgY29uc3QgcmVmbGVjdEN1YmVTaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMl0sIHNoYWRlcnNbM10pO1xuICAgIGNvbnN0IHJlZmxlY3RDdWJlID0ge1xuICAgICAgICBwb2ludFBvc2l0aW9uOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihyZWZsZWN0Q3ViZVNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyksIC8vXG4gICAgICAgIHBvaW50Tm9ybWFsOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihyZWZsZWN0Q3ViZVNoYWRlclByb2dyYW0sICdwb2ludE5vcm1hbCcpLCAvL1xuICAgICAgICBleWVQb3NpdGlvbjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHJlZmxlY3RDdWJlU2hhZGVyUHJvZ3JhbSwgJ2V5ZVBvc2l0aW9uJyksIC8vIFxuICAgICAgICBwZXJzcGV0aXZlTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocmVmbGVjdEN1YmVTaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpLCAvLyBcbiAgICAgICAgdmlld01hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHJlZmxlY3RDdWJlU2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKSwgLy8gXG4gICAgICAgIG1vZGVsTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocmVmbGVjdEN1YmVTaGFkZXJQcm9ncmFtLCAnbW9kZWxNYXRyaXgnKSwgLy9cbiAgICAgICAgdGV4dHVyZVNhbXBsZXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihyZWZsZWN0Q3ViZVNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpIC8vXG4gICAgfVxuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMjAwMCk7XG5cbiAgICBjb25zdCBkcmF3Q3ViZU1hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIGN1YmVNYXAucG9pbnRQb3NpdGlvbiwgXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGN1YmVNYXAucG9pbnRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihjdWJlTWFwLm1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH07XG5cbiAgICBjb25zdCBkcmF3UmVmbGVjdEN1YmUgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHJlZmxlY3RDdWJlLnBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShyZWZsZWN0Q3ViZS5wb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7pnaLms5Xnur/lkJHph49cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMubm9ybWFsQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHJlZmxlY3RDdWJlLnBvaW50Tm9ybWFsLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHJlZmxlY3RDdWJlLnBvaW50Tm9ybWFsKTtcblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnJvdGF0ZSh0cmFuZm9ybU1hdHJpeCwgdHJhbmZvcm1NYXRyaXgsIGFuZ2xlLCBbMSwgMSwgMV0pO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHJlZmxlY3RDdWJlLm1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLmluZGV4QnVmZmVyKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgMzYsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGxvYWRJbWFnZSA9IGZ1bmN0aW9uKHNyYykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJJbWFnZSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGltYWdlcyA9IFtdO1xuICAgICAgICBpbWFnZXMucHVzaChcbiAgICAgICAgICAgIGF3YWl0IGxvYWRJbWFnZShmdCksIC8vIHB4XG4gICAgICAgICAgICBhd2FpdCBsb2FkSW1hZ2UoYmspLCAvLyBueFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBsb2FkSW1hZ2UodXApLCAvLyBweVxuICAgICAgICAgICAgYXdhaXQgbG9hZEltYWdlKGRuKSwgLy8gbnlcblxuICAgICAgICAgICAgYXdhaXQgbG9hZEltYWdlKHJ0KSwgLy8gcHpcbiAgICAgICAgICAgIGF3YWl0IGxvYWRJbWFnZShsZiksIC8vIG56XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgICAgICAvLyDliJ3lp4vljJbnurnnkIZcbiAgICAgICAgY29uc3QgY3ViZU1hcHRleFR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGluaXRDdWJlTWFwVGV4dHVyZUZvckxhdGVyVXNlKGdsLCBpbWFnZXMsIGN1YmVNYXB0ZXhUdXJlLCAwKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgYW5nbGUgPSAwLjA7XG4gICAgICAgIGxldCB0aGVuID0gMC4wO1xuICAgICAgICBjb25zdCBleWVQb2ludCA9IHZlYzMuY3JlYXRlKCk7XG4gICAgICAgIHZlYzMuc2V0KGV5ZVBvaW50LCAxLCAwLCAwKTtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuICAgICAgICAgICAgbm93ICo9IDAuMDAwMTtcbiAgICAgICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgICAgICB0aGVuID0gbm93O1xuXG4gICAgICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICB2ZWMzLnJvdGF0ZVkoZXllUG9pbnQsIGV5ZVBvaW50LCBuZXcgRmxvYXQzMkFycmF5KFsgXG4gICAgICAgICAgICAgICAgMCwgMCwgMFxuICAgICAgICAgICAgXSksIDAuMDAxMjUpXG5cbiAgICAgICAgICAgIGdsLnVzZVByb2dyYW0oY3ViZU1hcFNoYWRlclByb2dyYW0pO1xuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihjdWJlTWFwLnBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgICAgICAgICBnbC51bmlmb3JtMWkoY3ViZU1hcC50ZXh0dXJlU2FtcGxlciwgMCk7XG4gICAgICAgICAgICBzZXRFeWVQb3NpdGlvbihnbCwgY3ViZU1hcC52aWV3TWF0cml4LCBleWVQb2ludCk7XG4gICAgICAgICAgICBnbC5kZXB0aE1hc2soZmFsc2UpO1xuICAgICAgICAgICAgZ2wuZGlzYWJsZShnbC5DVUxMX0ZBQ0UpO1xuICAgICAgICAgICAgZHJhd0N1YmVNYXAoKTtcblxuICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbShyZWZsZWN0Q3ViZVNoYWRlclByb2dyYW0pO1xuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihyZWZsZWN0Q3ViZS5wZXJzcGV0aXZlTWF0cml4LCBmYWxzZSwgY3ViZU1hcFBlcnNwZXRpdmVNYXRyaXgpO1xuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKHJlZmxlY3RDdWJlLnRleHR1cmVTYW1wbGVyLCAwKTtcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYocmVmbGVjdEN1YmUuZXllUG9zaXRpb24sIGV5ZVBvaW50KTtcbiAgICAgICAgICAgIHNldEV5ZVBvc2l0aW9uKGdsLCByZWZsZWN0Q3ViZS52aWV3TWF0cml4LCBbMywgMywgN10pO1xuICAgICAgICAgICAgZ2wuZGVwdGhNYXNrKHRydWUpO1xuICAgICAgICAgICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgICAgICAgICBkcmF3UmVmbGVjdEN1YmUoYW5nbGUpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgIH1cblxuICAgIHJlbmRlckltYWdlKCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjU5YThkMjNlNWQwOTA1NjU3Y2FiN2Q2M2QyNjE3YTIuZ2xzbFwiOyIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG4vLyDnrpfms5XnmoTmoLjlv4PmgJ3mg7Ncbi8vIDEuIOWFiOiuoeeul+WchuW/g+WIsOavj+S4gOadoee6rOW6pue6v+S4jnh65bmz6Z2i55qE5aS56KeScmFnX3h677yM54S25ZCO6K6h566X5ZyG5b+D5Yiw5q+P5LiA5p2h57uP5bqm57q/5LiOeXrlubPpnaLnmoTlpLnop5JyYWdfeXpcbi8vIDIuIOeUsXJhZ194euWSjHJhZ195euWNs+WPr+iuoeeul+WHuue7j+W6pue6v+WSjOe6rOW6pue6v+S6pOeCueeahOWdkOagh1xuY29uc3QgbGF0aXR1ZGVOdW1iZXIgPSA1MDtcbmNvbnN0IGxvbmdpdHVkZU51bWJlciA9IDUwO1xuY29uc3QgciA9IDI7XG5sZXQgc3BoZXJlX3ZlcnRleFBvc2l0aW9uID0gW107XG5sZXQgc3BoZXJlX3ZlcnRleEluZGV4ID0gW107XG5sZXQgc3BoZXJlX3ZlcnRleE5vcm1hbCA9IFtdO1xuXG5mb3IobGV0IGkgPSAwOyBpIDw9IGxhdGl0dWRlTnVtYmVyOyBpKyspIHtcbiAgICBjb25zdCByYWdfeHogPSBpICogTWF0aC5QSSAvIGxhdGl0dWRlTnVtYmVyO1xuICAgIGNvbnN0IHNpbl9yYWdfeHogPSBNYXRoLnNpbihyYWdfeHopO1xuICAgIGNvbnN0IGNvc19yYWdfeHogPSBNYXRoLmNvcyhyYWdfeHopO1xuXG4gICAgZm9yKGxldCBqID0gMDsgaiA8PSBsb25naXR1ZGVOdW1iZXI7IGorKykge1xuICAgICAgICBjb25zdCByYWdfeXogPSBqICogMiAqIE1hdGguUEkgLyBsb25naXR1ZGVOdW1iZXI7XG4gICAgICAgIGNvbnN0IHNpbl9yYWdfeXogPSBNYXRoLnNpbihyYWdfeXopO1xuICAgICAgICBjb25zdCBjb3NfcmFnX3l6ID0gTWF0aC5jb3MocmFnX3l6KTtcblxuICAgICAgICAvLyDorqHnrpfngrnlnZDmoIdcbiAgICAgICAgY29uc3QgeCA9IHNpbl9yYWdfeHogKiBjb3NfcmFnX3l6O1xuICAgICAgICBjb25zdCB5ID0gY29zX3JhZ194ejtcbiAgICAgICAgY29uc3QgeiA9IHNpbl9yYWdfeHogKiBzaW5fcmFnX3l6O1xuXG4gICAgICAgIHNwaGVyZV92ZXJ0ZXhQb3NpdGlvbi5wdXNoKHggKiByLCB5ICogciwgeiAqIHIpO1xuICAgICAgICBzcGhlcmVfdmVydGV4Tm9ybWFsLnB1c2goeCwgeSwgeik7XG4gICAgfVxufVxuXG4vLyDlhbPplK7mraXpqqTvvIznoa7lrprnu5jliLbnmoTmr4/kuKrlsI/mlrnlvaLnmoTlnZDmoIdcbmZvcihsZXQgaSA9IDA7IGkgPCBsYXRpdHVkZU51bWJlcjsgaSsrKSB7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGxvbmdpdHVkZU51bWJlcjsgaisrKSB7XG4gICAgICAgIGNvbnN0IG9uZSA9IGkgKiAobG9uZ2l0dWRlTnVtYmVyICsgMSkgKyBqO1xuICAgICAgICBjb25zdCB0d28gPSBvbmUgKyBsb25naXR1ZGVOdW1iZXIgKyAxO1xuICAgICAgICBzcGhlcmVfdmVydGV4SW5kZXgucHVzaChvbmUsIHR3bywgb25lICsgMSwgdHdvLCB0d28gKyAxLCBvbmUgKyAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlQnVmZmVycyhnbCkge1xuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCueWdkOagh2J1ZmZlclxuICAgIGNvbnN0IGN1YmVfdmVydGV4QnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIEZyb250IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBCYWNrIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBUb3AgZmFjZVxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJvdHRvbSBmYWNlXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gUmlnaHQgZmFjZVxuICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBMZWZ0IGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgLTEuMFxuICAgIF0pKTtcblxuICAgIC8vIOeri+aWueS9k+avj+S4qumdoueahOeCuee0ouW8lVxuICAgIGNvbnN0IGN1YmVfaW5kZXhCdWZmZXIgPSBpbml0RWxlbWVudEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCAgICAvLyDliY1cbiAgICAgICAgNCwgNSwgNiwgNCwgNiwgNywgICAgLy8g5ZCOXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsICAgLy8g6aG2XG4gICAgICAgIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsICAgLy8g5bqVXG4gICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksICAgLy8g5Y+zXG4gICAgICAgIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsICAgLy8g5bemXG4gICAgXSkpO1xuXG4gICAgY29uc3Qgc3BoZXJlX3ZlcnRleEJ1ZmZlciA9IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBGbG9hdDMyQXJyYXkoc3BoZXJlX3ZlcnRleFBvc2l0aW9uKSk7XG4gICAgY29uc3Qgc3BoZXJlX2luZGV4QnVmZmVyID0gaW5pdEVsZW1lbnRCdWZmZXJzRm9yTGF0ZXJVc2UoZ2wsIG5ldyBVaW50MTZBcnJheShzcGhlcmVfdmVydGV4SW5kZXgpKTtcbiAgICBjb25zdCBzcGhlcmVfbm9ybWFsQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShzcGhlcmVfdmVydGV4Tm9ybWFsKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3ViZToge1xuICAgICAgICAgICAgdmVydGV4QnVmZmVyOiBjdWJlX3ZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIGluZGV4QnVmZmVyOiBjdWJlX2luZGV4QnVmZmVyLFxuICAgICAgICB9LFxuICAgICAgICBzcGhlcmU6IHtcbiAgICAgICAgICAgIHZlcnRleEJ1ZmZlcjogc3BoZXJlX3ZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIGluZGV4QnVmZmVyOiBzcGhlcmVfaW5kZXhCdWZmZXIsXG4gICAgICAgICAgICBub3JtYWxCdWZmZXI6IHNwaGVyZV9ub3JtYWxCdWZmZXIsXG4gICAgICAgICAgICB2ZXJ0ZXhMZW5ndGg6IHNwaGVyZV92ZXJ0ZXhJbmRleC5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjU5YThkMjNlNWQwOTA1NjU3Y2FiN2Q2M2QyNjE3YTIuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwZDRhMjc0ODMyMmVlYTgwYjgzMDQ1NGY3ZTY1Y2Q0Lmdsc2xcIjsiLCJpbXBvcnQgeyBpbml0V2ViR2wsIGxvYWRGaWxlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IEdlbmVyYXRlQnVmZmVycyBmcm9tIFwiLi9idWZmZXJzXCI7XG5pbXBvcnQgdmVydGV4VXJsIGZyb20gJy4vc2hhZGVycy9WZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgZnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL0ZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHJlZmxlY3RWZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1JlZmxlY3RWZXJ0ZXguZ2xzbCc7XG5pbXBvcnQgcmVmbGVjdEZyYWdtZW50VXJsIGZyb20gJy4vc2hhZGVycy9SZWZsZWN0RnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9kcmF3LmpzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNhbnZhcyk7XG4vLyBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuLy8gPGJ1dHRvbiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDogMTBweDtsZWZ0OjEwcHg7XCIgdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJoaXN0b3J5LmdvKC0xKTtcIj7ov5Tlm548L2J1dHRvbj5cbi8vIGApXG5cbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcbmNvbnN0IGxvYWRBbGxTaGFkZXJzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIOWKoOi9vXNoYWRlclxuICAgIGNvbnN0IHNoYWRlcnMgPSBbXTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGFyZ3VtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCkpe1xuICAgICAgICBzaGFkZXJzLnB1c2goYXdhaXQgbG9hZEZpbGUoa2V5KSk7XG4gICAgfVxuICAgIC8vIHdlYmds5omA5pyJ55qE55u45YWz5pON5L2c5LiN6IO95Zyo5byC5q2l5rWB5Lit5omn6KGM77yM5b+F6aG75pS+5Zyo5ZCM5q2l5rWB5Lit5LiA5rCU5ZG15oiQ77yM5ZCm5YiZ5Lya5Ye65b6I5aSa5aWH5oCq55qE6Zeu6aKYXG5cbiAgICAvLyDliJ3lp4vljJZ3ZWJnbFxuICAgIGluaXRXZWJHbChnbCk7XG4gICAgLy8g5Yqg6L2957uY5Zu+55So55qEYnVmZmVyXG4gICAgY29uc3QgYmYgPSBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpO1xuXG4gICAgLy8g55S75Zu+XG4gICAgRHJhdyhiZiwgZ2wsIHNoYWRlcnMpO1xufVxuXG5pZiAoZ2wpIHtcbiAgICAvLyDliqDovb1sb2FkZXJcbiAgICBsb2FkQWxsU2hhZGVycyguLi5bdmVydGV4VXJsLCBmcmFnbWVudFVybCwgcmVmbGVjdFZlcnRleFVybCwgcmVmbGVjdEZyYWdtZW50VXJsXSk7XG59IGVsc2Uge1xuICAgIGFsZXJ0KFwi5L2g55qE5rWP6KeI5Zmo5LiN5pSv5oyBd2ViZ2wuXCIpO1xufVxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg2MGYwNDU2NzE2YzJjNTk4MTYwZjYxM2MxNTQ3ODEyLmpwZ1wiOyIsImltcG9ydCB7c2V0RXllUG9zaXRpb24sIGluaXRDdWJlTWFwVGV4dHVyZUZvckxhdGVyVXNlLCBpbml0U2hhZGVyUHJvZ3JhbX0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuaW1wb3J0IGJrIGZyb20gJy4vc2t5SW1hZ2UvbW9ybmluZ19iay5qcGcnXG5pbXBvcnQgZG4gZnJvbSAnLi9za3lJbWFnZS9tb3JuaW5nX2RuLmpwZydcbmltcG9ydCBmdCBmcm9tICcuL3NreUltYWdlL21vcm5pbmdfZnQuanBnJ1xuaW1wb3J0IGxmIGZyb20gJy4vc2t5SW1hZ2UvbW9ybmluZ19sZi5qcGcnXG5pbXBvcnQgcnQgZnJvbSAnLi9za3lJbWFnZS9tb3JuaW5nX3J0LmpwZydcbmltcG9ydCB1cCBmcm9tICcuL3NreUltYWdlL21vcm5pbmdfdXAuanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihCdWZmZXJzLCBnbCwgc2hhZGVycykge1xuICAgIC8qKlxuICAgICAqIDNE55qE546v5aKD5Zy65pmv77yM5L2/55Soc2FtcGxlckN1YmXmnoTlu7pcbiAgICAgKiAgMS4g6aaW5YWI6ZyA6KaB57uY5Yi25LiA5Liq56uL5pa55L2TXG4gICAgICogIDIuIOeri+aWueS9k+eahOeCueWdkOagh+WwseaYr+e6ueeQhueahOWdkOagh+aXoOmcgOWGjemHjeaWsOaMh+Wumue6ueeQhuWdkOagh+S6hlxuICAgICAqICAzLiDpnIDopoHlh4blpIc25byg57q555CG5Zu+54mH77yM5Luj6KGo55yf5piv546v5aKDNuS4quaWueWQkeeahOWbvueJh1xuICAgICAqICA0LiDlsIbov5k25Liq5Zu+54mH5Yip55SodGV4SW1hZ2UyROWIhuWIq+iuvue9rlxuICAgICAqIFxuICAgICAqIOeQg+S9k+mVnOmdouaViOaenFxuICAgICAqICAxLiDpppblhYjpnIDopoHop4bph47ngrnnmoTlrp7ml7blnZDmoIflkoznkIPkvZPnmoRub3JtYWzlkJHph49cbiAgICAgKiAgMi4g5Yip55Soc2hhZGVy55qEcmVmbGVjdOWHveaVsOagueaNruS4iumdoueahOS4pOS4quWPguaVsOWPr+S7peiuoeeul+WHuuWFiee6v+WPjeWwhOWQjueahOWQkemHj1xuICAgICAqICAzLiDmoLnmja7kuIrpnaLorqHnrpfnmoTlj43lsITlkJHph4/vvIzlj6/ku6Xku47nurnnkIblr7nosaHkuK3ojrflj5bliLDnurnnkIbkuK3nmoTlg4/ntKDvvIzku47ogIznu5jliLbliLDnkIPkvZPooajpnaLlvaLmiJDlj43lsITmlYjmnpxcbiAgICAgKi9cblxuICAgIC8vIOWIneWni+WMlnNoYWRlclxuICAgIGNvbnN0IGN1YmVNYXBTaGFkZXJQcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHNoYWRlcnNbMF0sIHNoYWRlcnNbMV0pO1xuICAgIGNvbnN0IGN1YmVNYXAgPSB7XG4gICAgICAgIHBvaW50UG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKGN1YmVNYXBTaGFkZXJQcm9ncmFtLCAncG9pbnRQb3NpdGlvbicpLFxuICAgICAgICBwZXJzcGV0aXZlTWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oY3ViZU1hcFNoYWRlclByb2dyYW0sICdwZXJzcGV0aXZlTWF0cml4JyksXG4gICAgICAgIHZpZXdNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihjdWJlTWFwU2hhZGVyUHJvZ3JhbSwgJ3ZpZXdNYXRyaXgnKSxcbiAgICAgICAgbW9kZWxNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihjdWJlTWFwU2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4JyksXG4gICAgICAgIHRleHR1cmVTYW1wbGVyOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oY3ViZU1hcFNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpXG4gICAgfVxuXG4gICAgY29uc3QgcmVmbGVjdFNwaGVyZVNoYWRlclByb2dyYW0gPSBpbml0U2hhZGVyUHJvZ3JhbShnbCwgc2hhZGVyc1syXSwgc2hhZGVyc1szXSk7XG4gICAgY29uc3QgcmVmbGVjdFNwaGVyZSA9IHtcbiAgICAgICAgcG9pbnRQb3NpdGlvbjogZ2wuZ2V0QXR0cmliTG9jYXRpb24ocmVmbGVjdFNwaGVyZVNoYWRlclByb2dyYW0sICdwb2ludFBvc2l0aW9uJyksIC8vXG4gICAgICAgIHBvaW50Tm9ybWFsOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihyZWZsZWN0U3BoZXJlU2hhZGVyUHJvZ3JhbSwgJ3BvaW50Tm9ybWFsJyksIC8vXG4gICAgICAgIGV5ZVBvc2l0aW9uOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocmVmbGVjdFNwaGVyZVNoYWRlclByb2dyYW0sICdleWVQb3NpdGlvbicpLCAvLyBcbiAgICAgICAgcGVyc3BldGl2ZU1hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHJlZmxlY3RTcGhlcmVTaGFkZXJQcm9ncmFtLCAncGVyc3BldGl2ZU1hdHJpeCcpLCAvLyBcbiAgICAgICAgdmlld01hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHJlZmxlY3RTcGhlcmVTaGFkZXJQcm9ncmFtLCAndmlld01hdHJpeCcpLCAvLyBcbiAgICAgICAgbW9kZWxNYXRyaXg6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihyZWZsZWN0U3BoZXJlU2hhZGVyUHJvZ3JhbSwgJ21vZGVsTWF0cml4JyksIC8vXG4gICAgICAgIHRleHR1cmVTYW1wbGVyOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocmVmbGVjdFNwaGVyZVNoYWRlclByb2dyYW0sICd0ZXh0dXJlU2FtcGxlcicpIC8vXG4gICAgfVxuXG4gICAgLy8g6K6+572uM0TpgI/op4bop4bph47lkozop4bph47kvY3nva5cbiAgICBjb25zdCBjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgbWF0NC5wZXJzcGVjdGl2ZShjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCwgKE1hdGguUEkvMTgwKSozMCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aC9kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgMSwgMjAwMCk7XG5cbiAgICBjb25zdCBkcmF3Q3ViZU1hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY3ViZS52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgY3ViZU1hcC5wb2ludFBvc2l0aW9uLCBcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICBnbC5GTE9BVCxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoY3ViZU1hcC5wb2ludFBvc2l0aW9uKTtcblxuICAgICAgICAvLyDorr7nva7lm77lvaLov4fmuKFcbiAgICAgICAgY29uc3QgdHJhbmZvcm1NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGN1YmVNYXAubW9kZWxNYXRyaXgsIGZhbHNlLCB0cmFuZm9ybU1hdHJpeCk7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuY3ViZS5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDM2LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZHJhd1JlZmxlY3RTcGhlcmUgPSBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICAvLyDorr7nva7ngrnkvY3nva5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIEJ1ZmZlcnMuc3BoZXJlLnZlcnRleEJ1ZmZlcik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICByZWZsZWN0U3BoZXJlLnBvaW50UG9zaXRpb24sIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShyZWZsZWN0U3BoZXJlLnBvaW50UG9zaXRpb24pO1xuXG4gICAgICAgIC8vIOiuvue9rumdouazlee6v+WQkemHj1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgQnVmZmVycy5zcGhlcmUubm9ybWFsQnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgIHJlZmxlY3RTcGhlcmUucG9pbnROb3JtYWwsIFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIGdsLkZMT0FULFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocmVmbGVjdFNwaGVyZS5wb2ludE5vcm1hbCk7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5b2i6L+H5rihXG4gICAgICAgIGNvbnN0IHRyYW5mb3JtTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5yb3RhdGUodHJhbmZvcm1NYXRyaXgsIHRyYW5mb3JtTWF0cml4LCBhbmdsZSwgWzEsIDEsIDFdKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihyZWZsZWN0U3BoZXJlLm1vZGVsTWF0cml4LCBmYWxzZSwgdHJhbmZvcm1NYXRyaXgpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBCdWZmZXJzLnNwaGVyZS5pbmRleEJ1ZmZlcik7XG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIEJ1ZmZlcnMuc3BoZXJlLnZlcnRleExlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGxvYWRJbWFnZSA9IGZ1bmN0aW9uKHNyYykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJJbWFnZSA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGltYWdlcyA9IFtdO1xuICAgICAgICBpbWFnZXMucHVzaChcbiAgICAgICAgICAgIGF3YWl0IGxvYWRJbWFnZShmdCksXG4gICAgICAgICAgICBhd2FpdCBsb2FkSW1hZ2UoYmspLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBsb2FkSW1hZ2UodXApLFxuICAgICAgICAgICAgYXdhaXQgbG9hZEltYWdlKGRuKSxcblxuICAgICAgICAgICAgYXdhaXQgbG9hZEltYWdlKHJ0KSxcbiAgICAgICAgICAgIGF3YWl0IGxvYWRJbWFnZShsZiksXG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgICAgICAvLyDliJ3lp4vljJbnurnnkIZcbiAgICAgICAgY29uc3QgY3ViZU1hcHRleFR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGluaXRDdWJlTWFwVGV4dHVyZUZvckxhdGVyVXNlKGdsLCBpbWFnZXMsIGN1YmVNYXB0ZXhUdXJlLCAwKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgYW5nbGUgPSAwLjA7XG4gICAgICAgIGxldCB0aGVuID0gMC4wO1xuICAgICAgICBjb25zdCBleWVQb2ludCA9IHZlYzMuY3JlYXRlKCk7XG4gICAgICAgIHZlYzMuc2V0KGV5ZVBvaW50LCAxLCAwLCAwKTtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKG5vdykge1xuICAgICAgICAgICAgbm93ICo9IDAuMDAwMTtcbiAgICAgICAgICAgIGFuZ2xlICs9IG5vdyAtIHRoZW47XG4gICAgICAgICAgICB0aGVuID0gbm93O1xuXG4gICAgICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICB2ZWMzLnJvdGF0ZVkoZXllUG9pbnQsIGV5ZVBvaW50LCBuZXcgRmxvYXQzMkFycmF5KFsgXG4gICAgICAgICAgICAgICAgMCwgMCwgMFxuICAgICAgICAgICAgXSksIDAuMDAxMjUpXG5cbiAgICAgICAgICAgIGdsLnVzZVByb2dyYW0oY3ViZU1hcFNoYWRlclByb2dyYW0pO1xuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihjdWJlTWFwLnBlcnNwZXRpdmVNYXRyaXgsIGZhbHNlLCBjdWJlTWFwUGVyc3BldGl2ZU1hdHJpeCk7XG4gICAgICAgICAgICBnbC51bmlmb3JtMWkoY3ViZU1hcC50ZXh0dXJlU2FtcGxlciwgMCk7XG4gICAgICAgICAgICBzZXRFeWVQb3NpdGlvbihnbCwgY3ViZU1hcC52aWV3TWF0cml4LCBleWVQb2ludCk7XG4gICAgICAgICAgICBnbC5kZXB0aE1hc2soZmFsc2UpO1xuICAgICAgICAgICAgZ2wuZGlzYWJsZShnbC5DVUxMX0ZBQ0UpO1xuICAgICAgICAgICAgZHJhd0N1YmVNYXAoKTtcblxuICAgICAgICAgICAgZ2wudXNlUHJvZ3JhbShyZWZsZWN0U3BoZXJlU2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHJlZmxlY3RTcGhlcmUucGVyc3BldGl2ZU1hdHJpeCwgZmFsc2UsIGN1YmVNYXBQZXJzcGV0aXZlTWF0cml4KTtcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShyZWZsZWN0U3BoZXJlLnRleHR1cmVTYW1wbGVyLCAwKTtcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYocmVmbGVjdFNwaGVyZS5leWVQb3NpdGlvbiwgZXllUG9pbnQpO1xuICAgICAgICAgICAgc2V0RXllUG9zaXRpb24oZ2wsIHJlZmxlY3RTcGhlcmUudmlld01hdHJpeCwgWzMsIDMsIDIwXSk7XG4gICAgICAgICAgICBnbC5kZXB0aE1hc2sodHJ1ZSk7XG4gICAgICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcbiAgICAgICAgICAgIGRyYXdSZWZsZWN0U3BoZXJlKGFuZ2xlKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICB9XG5cbiAgICByZW5kZXJJbWFnZSgpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1NGRlMTNlYjQzM2FlMmY4MjNiMGM3Y2YzZDVhYjIyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg2MGYwNDU2NzE2YzJjNTk4MTYwZjYxM2MxNTQ3ODEyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1NGRlMTNlYjQzM2FlMmY4MjNiMGM3Y2YzZDVhYjIyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxYmE2ZTAyYzViNWEwMTAwYTMwNDE0ZTIyOTUzMTlkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkNWUyMzMwYzEwNDc1NTc4YWVmYTU4ODkxNjZhN2M3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJlZjQ3OTFiM2E1NDliYjA0MzU1M2MwNmRiMjAyZmViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkNWUyMzMwYzEwNDc1NTc4YWVmYTU4ODkxNjZhN2M3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAxYmE2ZTAyYzViNWEwMTAwYTMwNDE0ZTIyOTUzMTlkLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZlNjA0MjkwZWFlNDA4YWU3YTJlOWNhOGMyMzFmYTRkLmpwZ1wiOyIsImltcG9ydCB7IGluaXRCdWZmZXJzRm9yTGF0ZXJVc2UsIGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlIH0gZnJvbSAnLi4vV2ViR2xIZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmF0ZUJ1ZmZlcnMoZ2wpIHtcbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnlnZDmoIdidWZmZXJcbiAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSBpbml0QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLy8gRnJvbnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgLTEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEJhY2sgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRvcCBmYWNlXG4gICAgICAgIC0xLjAsICAxLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICBcbiAgICAgICAgLy8gQm90dG9tIGZhY2VcbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICAxLjAsXG4gICAgICAgIFxuICAgICAgICAvLyBSaWdodCBmYWNlXG4gICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgLTEuMCwgIDEuMCxcbiAgICAgICAgXG4gICAgICAgIC8vIExlZnQgZmFjZVxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAtMS4wLCAgMS4wLCAtMS4wXG4gICAgXSkpO1xuXG4gICAgLy8g56uL5pa55L2T5q+P5Liq6Z2i55qE5rOV57q/5Y2V5L2N5ZCR6YeP77yM5ZCR6YeP5pa55ZCR55Sx57uY5Yi254K555qE5Y+z5omL5rOV5YiZ56Gu5a6aXG4gICAgY29uc3Qgbm9ybWFsQnVmZmVyID0gaW5pdEJ1ZmZlcnNGb3JMYXRlclVzZShnbCwgbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vIOWJjVxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIC8vIOWQjlxuICAgICAgICAwLjAsIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsIDAuMCwgLTEuMCxcblxuICAgICAgICAvLyDpobZcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgICAvLyDlupVcbiAgICAgICAgMC4wLCAtMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAwLjAsXG5cbiAgICAgICAgLy8g5Y+zXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG5cbiAgICAgICAgLy8g5bemXG4gICAgICAgIC0xLjAsIDAuMCwgMC4wLFxuICAgICAgICAtMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgLTEuMCwgMC4wLCAwLjAsXG4gICAgICAgIC0xLjAsIDAuMCwgMC4wLFxuXG4gICAgXSkpXG5cbiAgICAvLyDnq4vmlrnkvZPmr4/kuKrpnaLnmoTngrnntKLlvJVcbiAgICBjb25zdCBpbmRleEJ1ZmZlciA9IGluaXRFbGVtZW50QnVmZmVyc0ZvckxhdGVyVXNlKGdsLCBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsICAgIC8vIOWJjVxuICAgICAgICA0LCA1LCA2LCA0LCA2LCA3LCAgICAvLyDlkI5cbiAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgICAvLyDpobZcbiAgICAgICAgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSwgICAvLyDlupVcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgICAvLyDlj7NcbiAgICAgICAgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMywgICAvLyDlt6ZcbiAgICBdKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJ0ZXhCdWZmZXIsXG4gICAgICAgIG5vcm1hbEJ1ZmZlcixcbiAgICAgICAgaW5kZXhCdWZmZXIsXG4gICAgfVxufSIsImltcG9ydCB7IGluaXRXZWJHbCwgbG9hZEZpbGUgfSBmcm9tICcuLi9XZWJHbEhlbHBlci5qcyc7XG5pbXBvcnQgR2VuZXJhdGVCdWZmZXJzIGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB2ZXJ0ZXhVcmwgZnJvbSAnLi9zaGFkZXJzL1ZlcnRleC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFVybCBmcm9tICcuL3NoYWRlcnMvRnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgcmVmbGVjdFZlcnRleFVybCBmcm9tICcuL3NoYWRlcnMvUmVmbGVjdFZlcnRleC5nbHNsJztcbmltcG9ydCByZWZsZWN0RnJhZ21lbnRVcmwgZnJvbSAnLi9zaGFkZXJzL1JlZmxlY3RGcmFnbWVudC5nbHNsJztcbmltcG9ydCBEcmF3IGZyb20gXCIuL2RyYXcuanNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoY2FudmFzKTtcbi8vIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4vLyA8YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOiAxMHB4O2xlZnQ6MTBweDtcIiB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz1cImhpc3RvcnkuZ28oLTEpO1wiPui/lOWbnjwvYnV0dG9uPlxuLy8gYClcblxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuY29uc3QgbG9hZEFsbFNoYWRlcnMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5Yqg6L29c2hhZGVyXG4gICAgY29uc3Qgc2hhZGVycyA9IFtdO1xuICAgIGZvcihjb25zdCBrZXkgb2YgYXJndW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKSl7XG4gICAgICAgIHNoYWRlcnMucHVzaChhd2FpdCBsb2FkRmlsZShrZXkpKTtcbiAgICB9XG4gICAgLy8gd2ViZ2zmiYDmnInnmoTnm7jlhbPmk43kvZzkuI3og73lnKjlvILmraXmtYHkuK3miafooYzvvIzlv4XpobvmlL7lnKjlkIzmraXmtYHkuK3kuIDmsJTlkbXmiJDvvIzlkKbliJnkvJrlh7rlvojlpJrlpYfmgKrnmoTpl67pophcblxuICAgIC8vIOWIneWni+WMlndlYmdsXG4gICAgaW5pdFdlYkdsKGdsKTtcbiAgICAvLyDliqDovb3nu5jlm77nlKjnmoRidWZmZXJcbiAgICBjb25zdCBiZiA9IEdlbmVyYXRlQnVmZmVycyhnbCk7XG5cbiAgICAvLyDnlLvlm75cbiAgICBEcmF3KGJmLCBnbCwgc2hhZGVycyk7XG59XG5cbmlmIChnbCkge1xuICAgIC8vIOWKoOi9vWxvYWRlclxuICAgIGxvYWRBbGxTaGFkZXJzKC4uLlt2ZXJ0ZXhVcmwsIGZyYWdtZW50VXJsLCByZWZsZWN0VmVydGV4VXJsLCByZWZsZWN0RnJhZ21lbnRVcmxdKTtcbn0gZWxzZSB7XG4gICAgYWxlcnQoXCLkvaDnmoTmtY/op4jlmajkuI3mlK/mjIF3ZWJnbC5cIik7XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjY3MTM0YmM5N2VjZjZlOWY1OGI4ZjFlMTZkYTE5NDMuZ2xzbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwZDRhMjc0ODMyMmVlYTgwYjgzMDQ1NGY3ZTY1Y2Q0Lmdsc2xcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOGQ4ZmYxMmJiMjc5NDdjM2I5OWY1ZmEwZjc5NjM3Mi5nbHNsXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmU2MDQyOTBlYWU0MDhhZTdhMmU5Y2E4YzIzMWZhNGQuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==