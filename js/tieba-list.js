// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/Desktop/学习demo/weex/helloWeex/src/components/TiebaCell.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4ce60e51"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "backgroundColor": "#FFFFFF",
    "marginTop": "21.6",
    "marginRight": "25.2",
    "marginBottom": 0,
    "marginLeft": "25.2"
  },
  "cell-header": {
    "marginTop": "25.2",
    "flexDirection": "row"
  },
  "creator-image": {
    "width": "76.8",
    "height": "76.8",
    "borderRadius": "38.4",
    "marginLeft": "25.2"
  },
  "creator-content": {
    "marginLeft": "28.8"
  },
  "creator-name-level": {
    "flexDirection": "row"
  },
  "creator-name": {
    "fontSize": "32.4",
    "maxWidth": "468",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "creator-level": {
    "marginLeft": "14.4",
    "marginRight": "14.4",
    "fontSize": "21.6",
    "color": "#FFFFFF",
    "height": "27.6",
    "borderRadius": "14.4",
    "paddingLeft": "14.4",
    "paddingRight": "14.4",
    "backgroundColor": "rgb(236,191,98)"
  },
  "sign-post-time": {
    "flexDirection": "row"
  },
  "sign-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "sign-dot": {
    "width": "7.2",
    "height": "7.2",
    "borderRadius": "3.6",
    "backgroundColor": "rgb(153,153,153)",
    "marginLeft": "10.8",
    "marginRight": "10.8"
  },
  "sign": {
    "maxWidth": "252",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "sign-text": {
    "color": "rgb(153,153,153)",
    "fontSize": "21.6"
  },
  "cell-content": {
    "marginTop": "30",
    "marginRight": "25.2",
    "marginBottom": 0,
    "marginLeft": "25.2"
  },
  "content-desc": {
    "fontSize": "28.8",
    "textOverflow": "ellipsis",
    "lines": 6,
    "lineHeight": "36"
  },
  "image-container": {
    "marginTop": "32.4",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "multiple-content-image": {
    "width": "204",
    "height": "204",
    "borderRadius": "9",
    "marginBottom": "12.6",
    "marginRight": "10.8",
    "resize": "cover"
  },
  "single-content-image": {
    "width": "644.4",
    "height": "324",
    "borderRadius": "18",
    "marginBottom": "12.6",
    "resize": "cover"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    contentData: Object
  },
  data: function data() {
    return {
      userLevel: this.contentData.contentCreator.userLevel,
      signName: this.contentData.contentCreator.signName,
      createTime: this.contentData.createTime,
      contentDesc: this.contentData.contentDesc,
      imageList: this.contentData.imageList
    };
  }

};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell"]
  }, [_c('div', {
    staticClass: ["cell-header"]
  }, [_c('image', {
    staticClass: ["creator-image"],
    attrs: {
      "src": _vm.contentData.contentCreator.image
    }
  }), _c('div', {
    staticClass: ["creator-content"]
  }, [_c('div', {
    staticClass: ["creator-name-level"]
  }, [_c('text', {
    staticClass: ["creator-name"]
  }, [_vm._v(_vm._s(_vm.contentData.contentCreator.name))]), (_vm.userLevel) ? _c('text', {
    staticClass: ["creator-level"]
  }, [_vm._v(_vm._s(_vm.userLevel))]) : _vm._e()]), _c('div', {
    staticClass: ["sign-post-time"]
  }, [(_vm.signName) ? _c('div', {
    staticClass: ["sign-box"]
  }, [_c('text', {
    staticClass: ["sign", "sign-text"]
  }, [_vm._v(_vm._s(_vm.signName))]), _c('div', {
    staticClass: ["sign-dot"]
  })]) : _vm._e(), _c('text', {
    staticClass: ["post-time", "sign-text"]
  }, [_vm._v(_vm._s(_vm.createTime))])])])]), _c('div', {
    staticClass: ["cell-content"]
  }, [_c('text', {
    staticClass: ["content-desc"]
  }, [_vm._v(_vm._s(_vm.contentDesc))]), (_vm.imageList.length > 0) ? _c('div', {
    staticClass: ["image-container"]
  }, _vm._l((_vm.imageList), function(item, index) {
    return _c('image', {
      key: index,
      class: [_vm.imageList.length > 1 ? 'multiple-content-image' : 'single-content-image'],
      attrs: {
        "src": item.picture
      }
    })
  })) : _vm._e()]), _c('div', {
    staticClass: ["cell-footer"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/Desktop/学习demo/weex/helloWeex/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-469af010"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "backgroundColor": "rgb(244,244,244)"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TiebaCell = __webpack_require__(0);

var _TiebaCell2 = _interopRequireDefault(_TiebaCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stream = weex.requireModule('stream') || {}; //
//
//
//
//
//
//
//

var modal = weex.requireModule('modal') || {};
// const meta = weex.requireModule('meta')
// const API = 'http://192.168.0.109:8081/dist/tieba_list.json'
// const API = 'http://192.168.0.9:8081/dist/tieba_list.json'
var API = 'https://andyxtcao.github.io/json/tieba_list.json';

// meta.setViewport({
//   width: 1242
// })

exports.default = {
  components: {
    TiebaCell: _TiebaCell2.default
  },
  data: function data() {
    return {
      lists: []
    };
  },
  created: function created() {
    var self = this;
    stream.fetch({
      method: 'GET',
      url: API,
      type: 'json'
    }, function (ret) {
      console.log('请求结束');
      if (!ret.ok) {
        modal.toast({
          message: 'Network Error!',
          duration: 3
        });
      } else {
        // console.log(ret.data.data.returnData)
        self.lists = self.lists.concat(ret.data.data.returnData);
      }
    });
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.lists), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('tieba-cell', {
      attrs: {
        "contentData": item
      }
    })], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HelloWorld = __webpack_require__(4);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HelloWorld2.default.el = '#root';
new Vue(_HelloWorld2.default);

/***/ })
/******/ ]);