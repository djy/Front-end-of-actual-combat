(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./index.js webpack-hot-middleware/client?timeout=10000&reload=true ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jacklin/Desktop/learn/webglDemo/index.js */"QfWi");
module.exports = __webpack_require__(/*! webpack-hot-middleware/client?timeout=10000&reload=true */"6jG0");


/***/ }),

/***/ "QfWi":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/index.js */ "UaCZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "pyAK");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);





var generateLists = function generateLists(links) {
  var ol = document.createElement('ol');
  var fragment = document.createDocumentFragment();
  links.forEach(function (item) {
    var li = document.createElement('li');
    li.insertAdjacentHTML('beforeend', "<a href=\"".concat(item.url, "\" traget=\"_blank\">").concat(item.title, "</a>"));
    fragment.append(li);
  });
  ol.append(fragment);
  document.body.innerHTML = '';
  document.body.append(ol);
};

var handleHashChange =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(links) {
    var hash, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hash = location.hash;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;

            for (_iterator = document.scripts[Symbol.iterator]()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              item = _step.value;

              if (item.charset === 'utf-8') {
                document.head.removeChild(item);
              }
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 12:
            _context.prev = 12;
            _context.prev = 13;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 15:
            _context.prev = 15;

            if (!_didIteratorError) {
              _context.next = 18;
              break;
            }

            throw _iteratorError;

          case 18:
            return _context.finish(15);

          case 19:
            return _context.finish(12);

          case 20:
            if (location.hash) {
              _context.next = 24;
              break;
            }

            generateLists(links);
            _context.next = 26;
            break;

          case 24:
            _context.next = 26;
            return links.find(function (item) {
              return item.url === hash;
            }).component();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 8, 12, 20], [13,, 15, 19]]);
  }));

  return function handleHashChange(_x) {
    return _ref.apply(this, arguments);
  };
}();

handleHashChange(_router_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

window.onhashchange = function () {
  handleHashChange(_router_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

window.onpopstate = function () {
  location.reload();
};

/***/ }),

/***/ "UaCZ":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "title": "绘制三角形",
  "url": '#/triangel',
  "component": function component() {
    return Promise.all(/*! import() | triangle */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("triangle")]).then(__webpack_require__.bind(null, /*! ../src/triangle/index.js */ "E8sC"));
  }
}, {
  "title": "用鼠标移动矩形",
  "url": '#/moveplane',
  "component": function component() {
    return Promise.all(/*! import() | moveplane */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("moveplane")]).then(__webpack_require__.bind(null, /*! ../src/movePlane/index.js */ "UgTk"));
  }
}, {
  "title": "绘制旋转的立方体",
  "url": '#/rotatecube',
  "component": function component() {
    return Promise.all(/*! import() | cube */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("cube")]).then(__webpack_require__.bind(null, /*! ../src/cube/index.js */ "e0bR"));
  }
}, {
  "title": "用鼠标旋转立方体",
  "url": '#/movecube',
  "component": function component() {
    return Promise.all(/*! import() | movecube */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("movecube")]).then(__webpack_require__.bind(null, /*! ../src/moveCube/index.js */ "lCsd"));
  }
}, {
  "title": "绘制带纹理图片的旋转的立方体",
  "url": '#/texturerotatecube',
  "component": function component() {
    return Promise.all(/*! import() | texturecube */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("texturecube")]).then(__webpack_require__.bind(null, /*! ../src/textureCube/index.js */ "d1ig"));
  }
}, {
  "title": "纹理合成",
  "url": '#/texturecompose',
  "component": function component() {
    return Promise.all(/*! import() | texturecompose */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("texturecompose")]).then(__webpack_require__.bind(null, /*! ../src/textureCompose/index.js */ "VCCJ"));
  }
}, {
  "title": "旋转视野点",
  "url": '#/rotateeye',
  "component": function component() {
    return Promise.all(/*! import() | rotateeye */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("rotateeye")]).then(__webpack_require__.bind(null, /*! ../src/rotateEye/index.js */ "PUge"));
  }
}, {
  "title": "方向光源照射运动的物体",
  "url": '#/directionlight',
  "component": function component() {
    return Promise.all(/*! import() | directionlight */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("directionlight")]).then(__webpack_require__.bind(null, /*! ../src/directionLight/index.js */ "uy03"));
  }
}, {
  "title": "点光源照射运动的物体",
  "url": '#/pointlight',
  "component": function component() {
    return Promise.all(/*! import() | pointlight */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("pointlight")]).then(__webpack_require__.bind(null, /*! ../src/pointLight/index.js */ "JKOo"));
  }
}, {
  "title": "球体（结合点光源、纹理、旋转视野点）",
  "url": '#/sphere',
  "component": function component() {
    return Promise.all(/*! import() | sphere */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("sphere")]).then(__webpack_require__.bind(null, /*! ../src/sphere/index.js */ "1HjN"));
  }
}, {
  "title": "雾",
  "url": '#/fog',
  "component": function component() {
    return Promise.all(/*! import() | fogCube */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("fogCube")]).then(__webpack_require__.bind(null, /*! ../src/fogCube/index.js */ "0hmc"));
  }
}, {
  "title": "frameBuffer",
  "url": '#/framebuffer',
  "component": function component() {
    return Promise.all(/*! import() | framebuffer */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("framebuffer")]).then(__webpack_require__.bind(null, /*! ../src/frameBuffer/index.js */ "Yt5o"));
  }
}, {
  "title": "生成影子",
  "url": '#/shadowcube',
  "component": function component() {
    return Promise.all(/*! import() | shadowcube */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("shadowcube")]).then(__webpack_require__.bind(null, /*! ../src/shadowCube/index.js */ "FzV6"));
  }
}, {
  "title": "全景图和立方体镜面反射",
  "url": '#/skybox_cube',
  "component": function component() {
    return Promise.all(/*! import() | skybox */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("skybox")]).then(__webpack_require__.bind(null, /*! ../src/skyBox_Cube/index.js */ "C/3O"));
  }
}, {
  "title": "全景图和球体镜面反射",
  "url": '#/skybox_sphere',
  "component": function component() {
    return Promise.all(/*! import() | skybox */[__webpack_require__.e("cube~directionlight~fogCube~framebuffer~movecube~moveplane~pointlight~rotateeye~shadowcube~skybox~sp~59d8d724"), __webpack_require__.e("skybox")]).then(__webpack_require__.bind(null, /*! ../src/skyBox_Sphere/index.js */ "miQ0"));
  }
}, {
  "title": "加载gltf模型",
  "url": '#/gltf',
  "component": function component() {
    return Promise.all(/*! import() | gltf */[__webpack_require__.e("vendors"), __webpack_require__.e("gltf")]).then(__webpack_require__.bind(null, /*! ../src/gltf/index.js */ "A6gx"));
  }
}]);

/***/ }),

/***/ "iu/V":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "html,body{\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nol{\n    margin: 0;\n}", ""]);


/***/ }),

/***/ "pyAK":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./index.css */ "iu/V");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ./node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !./node_modules/css-loader/dist/cjs.js!./index.css */ "iu/V", function() {
		var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./index.css */ "iu/V");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguY3NzIiwid2VicGFjazovLy8uL2luZGV4LmNzcz8yOGViIl0sIm5hbWVzIjpbImdlbmVyYXRlTGlzdHMiLCJsaW5rcyIsIm9sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZm9yRWFjaCIsIml0ZW0iLCJsaSIsImluc2VydEFkamFjZW50SFRNTCIsInVybCIsInRpdGxlIiwiYXBwZW5kIiwiYm9keSIsImlubmVySFRNTCIsImhhbmRsZUhhc2hDaGFuZ2UiLCJoYXNoIiwibG9jYXRpb24iLCJzY3JpcHRzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjaGFyc2V0IiwiaGVhZCIsInJlbW92ZUNoaWxkIiwiZmluZCIsImNvbXBvbmVudCIsIndpbmRvdyIsIm9uaGFzaGNoYW5nZSIsIm9ucG9wc3RhdGUiLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFVQyxLQUFWLEVBQWlCO0FBQ25DLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsRUFBakI7QUFDQUwsT0FBSyxDQUFDTSxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xCLFFBQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUssTUFBRSxDQUFDQyxrQkFBSCxDQUFzQixXQUF0QixzQkFBK0NGLElBQUksQ0FBQ0csR0FBcEQsa0NBQTRFSCxJQUFJLENBQUNJLEtBQWpGO0FBQ0FQLFlBQVEsQ0FBQ1EsTUFBVCxD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QW1CLG1CQUFPLENBQUMsZ0VBQXFEOztBQUVoRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJtYWluLjYzYWE1ODE1ZGE5NGNmZGEzMDZjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxpbmtzIGZyb20gJy4vcm91dGVyL2luZGV4LmpzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBnZW5lcmF0ZUxpc3RzID0gZnVuY3Rpb24gKGxpbmtzKSB7XG4gICAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGxpbmtzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdHJhZ2V0PVwiX2JsYW5rXCI+JHtpdGVtLnRpdGxlfTwvYT5gKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGxpKTtcbiAgICB9KVxuICAgIG9sLmFwcGVuZChmcmFnbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChvbCk7XG59XG5cbmNvbnN0IGhhbmRsZUhhc2hDaGFuZ2UgPSBhc3luYyBmdW5jdGlvbihsaW5rcykge1xuICAgIGNvbnN0IGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIGZvcihjb25zdCBpdGVtIG9mIGRvY3VtZW50LnNjcmlwdHNbU3ltYm9sLml0ZXJhdG9yXSgpKXtcbiAgICAgICAgaWYoaXRlbS5jaGFyc2V0ID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKCFsb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIGdlbmVyYXRlTGlzdHMobGlua3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGxpbmtzLmZpbmQoaXRlbSA9PiB7cmV0dXJuIGl0ZW0udXJsID09PSBoYXNoO30pLmNvbXBvbmVudCgpO1xuICAgIH1cbn1cbmhhbmRsZUhhc2hDaGFuZ2UobGlua3MpO1xuXG53aW5kb3cub25oYXNoY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaGFuZGxlSGFzaENoYW5nZShsaW5rcyk7XG59XG5cbndpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCLnu5jliLbkuInop5LlvaJcIixcbiAgICAgICAgXCJ1cmxcIjogJyMvdHJpYW5nZWwnLFxuICAgICAgICBcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ0cmlhbmdsZVwiICovICcuLi9zcmMvdHJpYW5nbGUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi55So6byg5qCH56e75Yqo55+p5b2iXCIsXG4gICAgICAgIFwidXJsXCI6ICcjL21vdmVwbGFuZScsXG4gICAgICAgIFwiY29tcG9uZW50XCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vdmVwbGFuZVwiICovICcuLi9zcmMvbW92ZVBsYW5lL2luZGV4LmpzJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIue7mOWItuaXi+i9rOeahOeri+aWueS9k1wiLFxuICAgICAgICBcInVybFwiOiAnIy9yb3RhdGVjdWJlJyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY3ViZVwiICovICcuLi9zcmMvY3ViZS9pbmRleC5qcycpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCLnlKjpvKDmoIfml4vovaznq4vmlrnkvZNcIixcbiAgICAgICAgXCJ1cmxcIjogJyMvbW92ZWN1YmUnLFxuICAgICAgICBcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtb3ZlY3ViZVwiICovICcuLi9zcmMvbW92ZUN1YmUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi57uY5Yi25bim57q555CG5Zu+54mH55qE5peL6L2s55qE56uL5pa55L2TXCIsXG4gICAgICAgIFwidXJsXCI6ICcjL3RleHR1cmVyb3RhdGVjdWJlJyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidGV4dHVyZWN1YmVcIiAqLyAnLi4vc3JjL3RleHR1cmVDdWJlL2luZGV4LmpzJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIue6ueeQhuWQiOaIkFwiLFxuICAgICAgICBcInVybFwiOiAnIy90ZXh0dXJlY29tcG9zZScsXG4gICAgICAgIFwiY29tcG9uZW50XCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRleHR1cmVjb21wb3NlXCIgKi8gJy4uL3NyYy90ZXh0dXJlQ29tcG9zZS9pbmRleC5qcycpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCLml4vovazop4bph47ngrlcIixcbiAgICAgICAgXCJ1cmxcIjogJyMvcm90YXRlZXllJyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicm90YXRlZXllXCIgKi8gJy4uL3NyYy9yb3RhdGVFeWUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi5pa55ZCR5YWJ5rqQ54Wn5bCE6L+Q5Yqo55qE54mp5L2TXCIsXG4gICAgICAgIFwidXJsXCI6ICcjL2RpcmVjdGlvbmxpZ2h0JyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlyZWN0aW9ubGlnaHRcIiAqLyAnLi4vc3JjL2RpcmVjdGlvbkxpZ2h0L2luZGV4LmpzJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIueCueWFiea6kOeFp+WwhOi/kOWKqOeahOeJqeS9k1wiLFxuICAgICAgICBcInVybFwiOiAnIy9wb2ludGxpZ2h0JyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicG9pbnRsaWdodFwiICovICcuLi9zcmMvcG9pbnRMaWdodC9pbmRleC5qcycpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCLnkIPkvZPvvIjnu5PlkIjngrnlhYnmupDjgIHnurnnkIbjgIHml4vovazop4bph47ngrnvvIlcIixcbiAgICAgICAgXCJ1cmxcIjogJyMvc3BoZXJlJyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3BoZXJlXCIgKi8gJy4uL3NyYy9zcGhlcmUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi6Zu+XCIsXG4gICAgICAgIFwidXJsXCI6ICcjL2ZvZycsXG4gICAgICAgIFwiY29tcG9uZW50XCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImZvZ0N1YmVcIiAqLyAnLi4vc3JjL2ZvZ0N1YmUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiZnJhbWVCdWZmZXJcIixcbiAgICAgICAgXCJ1cmxcIjogJyMvZnJhbWVidWZmZXInLFxuICAgICAgICBcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJmcmFtZWJ1ZmZlclwiICovICcuLi9zcmMvZnJhbWVCdWZmZXIvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi55Sf5oiQ5b2x5a2QXCIsXG4gICAgICAgIFwidXJsXCI6ICcjL3NoYWRvd2N1YmUnLFxuICAgICAgICBcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzaGFkb3djdWJlXCIgKi8gJy4uL3NyYy9zaGFkb3dDdWJlL2luZGV4LmpzJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIuWFqOaZr+WbvuWSjOeri+aWueS9k+mVnOmdouWPjeWwhFwiLFxuICAgICAgICBcInVybFwiOiAnIy9za3lib3hfY3ViZScsXG4gICAgICAgIFwiY29tcG9uZW50XCI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNreWJveFwiICovICcuLi9zcmMvc2t5Qm94X0N1YmUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi5YWo5pmv5Zu+5ZKM55CD5L2T6ZWc6Z2i5Y+N5bCEXCIsXG4gICAgICAgIFwidXJsXCI6ICcjL3NreWJveF9zcGhlcmUnLFxuICAgICAgICBcImNvbXBvbmVudFwiOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJza3lib3hcIiAqLyAnLi4vc3JjL3NreUJveF9TcGhlcmUvaW5kZXguanMnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwi5Yqg6L29Z2x0ZuaooeWei1wiLFxuICAgICAgICBcInVybFwiOiAnIy9nbHRmJyxcbiAgICAgICAgXCJjb21wb25lbnRcIjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZ2x0ZlwiICovICcuLi9zcmMvZ2x0Zi9pbmRleC5qcycpXG4gICAgfVxuXSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcblxcbm9se1xcbiAgICBtYXJnaW46IDA7XFxufVwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=