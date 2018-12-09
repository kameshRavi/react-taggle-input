(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-taggle-input"] = factory();
	else
		root["react-taggle-input"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonpreact_taggle_input"] = window["webpackJsonpreact_taggle_input"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".taggle_wrapper input {\\n  border: none;\\n  padding: 0;\\n  background: transparent;\\n  font-family: Lato;\\n  font-weight: 400;\\n  font-size: 30px;\\n  color: #000000;\\n  line-height: 32px;\\n  float: left;\\n  background: none;\\n  width: 100%;\\n  max-width: 100%;\\n  line-height: inherit; }\\n  .taggle_wrapper input:focus {\\n    outline: none; }\\n\\n.taggle_wrapper .taggle_placeholder {\\n  font-family: Lato;\\n  font-weight: 700;\\n  font-size: 30px;\\n  color: rgba(0, 0, 0, 0.2);\\n  position: absolute;\\n  left: 50%;\\n  top: 8px;\\n  transform: translate(-50%);\\n  white-space: nowrap; }\\n\\n.taggle_wrapper .taggle_list {\\n  margin: 0;\\n  padding: 0;\\n  min-height: 48px;\\n  padding-bottom: 10px;\\n  max-height: 58px;\\n  max-width: 750px;\\n  display: inline-block;\\n  white-space: nowrap;\\n  overflow-x: auto; }\\n  .taggle_wrapper .taggle_list li {\\n    display: inline-block;\\n    vertical-align: middle;\\n    height: 100%;\\n    line-height: 48px;\\n    transition: all .3s; }\\n    .taggle_wrapper .taggle_list li.taggle {\\n      border: 1px solid #267FE7;\\n      padding: 5px 10px;\\n      margin: 0 20px 0px 0;\\n      animation-duration: 1s;\\n      animation-iteration-count: infinite;\\n      animation-fill-mode: both;\\n      line-height: initial; }\\n    .taggle_wrapper .taggle_list li .taggle_text {\\n      font-family: Lato;\\n      font-weight: 400;\\n      font-size: 30px;\\n      color: #000000;\\n      line-height: 32px; }\\n    .taggle_wrapper .taggle_list li .close {\\n      opacity: 0.1;\\n      font-family: Lato;\\n      font-weight: 400;\\n      font-size: 30px;\\n      color: #000000;\\n      border: 0;\\n      outline: none;\\n      padding: 0;\\n      margin-left: 10px;\\n      cursor: pointer; }\\n  .taggle_wrapper .taggle_list:after {\\n    clear: both;\\n    content: \\\"\\\";\\n    display: block; }\\n\\n.taggle_wrapper .taggle_sizer {\\n  font-size: 0;\\n  opacity: 0;\\n  line-height: 0;\\n  height: 0;\\n  padding: 0;\\n  margin: 0;\\n  position: absolute;\\n  top: -500px;\\n  z-index: -1;\\n  visibility: hidden; }\\n\\n.taggle_wrapper .taggle_placeholder:before {\\n  content: '';\\n  position: absolute;\\n  width: 1px;\\n  height: 108%;\\n  background: #000;\\n  font-weight: 300;\\n  left: 0;\\n  -webkit-animation: 1s blink infinite;\\n  -moz-animation: 1s blink  infinite;\\n  -ms-animation: 1s blink infinite;\\n  -o-animation: 1s blink infinite;\\n  animation: 1s blink infinite; }\\n\\n@-moz-keyframes blink {\\n  from, to {\\n    color: transparent; }\\n  50% {\\n    color: black; } }\\n\\n@-webkit-keyframes blink {\\n  from, to {\\n    color: transparent; }\\n  50% {\\n    color: black; } }\\n\\n@keyframes blink {\\n  0%, 100% {\\n    color: transparent; }\\n  50% {\\n    color: black; } }\\n\\n@-ms-keyframes blink {\\n  from, to {\\n    color: transparent; }\\n  50% {\\n    color: black; } }\\n\\n@-o-keyframes blink {\\n  from, to {\\n    color: transparent; }\\n  50% {\\n    color: black; } }\\n\\n@-webkit-keyframes bounce {\\n  0%, 20%, 50%, 80%, 100% {\\n    -webkit-transform: translateY(0); }\\n  40% {\\n    -webkit-transform: translateY(-16px); }\\n  60% {\\n    -webkit-transform: translateY(-7px); } }\\n\\n@-moz-keyframes bounce {\\n  0%, 20%, 50%, 80%, 100% {\\n    -moz-transform: translateY(0); }\\n  40% {\\n    -moz-transform: translateY(-16px); }\\n  60% {\\n    -moz-transform: translateY(-7px); } }\\n\\n@-o-keyframes bounce {\\n  0%, 20%, 50%, 80%, 100% {\\n    -o-transform: translateY(0); }\\n  40% {\\n    -o-transform: translateY(-16px); }\\n  60% {\\n    -o-transform: translateY(-7px); } }\\n\\n@keyframes bounce {\\n  0%, 20%, 50%, 80%, 100% {\\n    transform: translateY(0); }\\n  40% {\\n    transform: translateY(-16px); }\\n  60% {\\n    transform: translateY(-7px); } }\\n\\n.bounce {\\n  animation-name: bounce; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://react-taggle-input/./src/style.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/icons.jsx":
/*!***********************!*\
  !*** ./src/icons.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar CloseIcon = function CloseIcon() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    width: \"12px\",\n    height: \"12px\",\n    viewBox: \"6 6 12 12\",\n    version: \"1.1\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M13.4297,12.0156 L17.7067,7.7386 C18.0977,7.3476 18.0977,6.7146 17.7067,6.3246 C17.3167,5.9336 16.6837,5.9336 16.2927,6.3246 L12.0157,10.6016 L7.7387,6.3246 C7.3477,5.9336 6.7147,5.9336 6.3247,6.3246 C5.9337,6.7146 5.9337,7.3476 6.3247,7.7386 L10.6017,12.0156 L6.3247,16.2926 C5.9337,16.6836 5.9337,17.3166 6.3247,17.7066 C6.5197,17.9026 6.7757,17.9996 7.0317,17.9996 C7.2867,17.9996 7.5427,17.9026 7.7387,17.7066 L12.0157,13.4296 L16.2927,17.7066 C16.4887,17.9026 16.7437,17.9996 16.9997,17.9996 C17.2557,17.9996 17.5117,17.9026 17.7067,17.7066 C18.0977,17.3166 18.0977,16.6836 17.7067,16.2926 L13.4297,12.0156 Z\",\n    stroke: \"none\",\n    fill: \"#000000\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CloseIcon);\n\n//# sourceURL=webpack://react-taggle-input/./src/icons.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TaggleInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.jsx */ \"./src/icons.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar TaggleInput =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TaggleInput, _Component);\n\n  function TaggleInput(props) {\n    var _this;\n\n    _classCallCheck(this, TaggleInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TaggleInput).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onKeyDown\", function (event) {\n      var keys = {\n        enter: 13,\n        tab: 9,\n        spacebar: 32,\n        backspace: 8\n      };\n\n      switch (event.keyCode) {\n        case keys.backspace:\n          if (!event.target.value) {\n            _this.removeTag(_this.state.tags[_this.state.tags.length - 1]);\n          }\n\n          break;\n\n        case keys.tab:\n          event.preventDefault();\n\n          _this.addTag(event.target.value);\n\n          break;\n\n        case keys.enter:\n        case keys.spacebar:\n          _this.addTag(event.target.value);\n\n          break;\n\n        default:\n          break;\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"addTag\", function (tag) {\n      var tagRef = tag.trim();\n\n      if (!_this.props.allowDuplicates && _this.state.tags.indexOf(tagRef) !== -1) {\n        _this.setState({\n          duplicateIndex: _this.state.tags.indexOf(tagRef)\n        });\n      } else if (tagRef) {\n        if (_this.props.onBeforeTagAdd) {\n          _this.props.onBeforeTagAdd(tagRef);\n        }\n\n        _this.setState({\n          tags: _toConsumableArray(_this.state.tags).concat([tagRef]),\n          duplicateIndex: ''\n        });\n\n        _this.input.value = '';\n\n        _this.input.focus();\n\n        if (_this.props.onAfterTagAdd) {\n          _this.props.onAfterTagAdd(tagRef);\n        }\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"removeTag\", function (index) {\n      if (_this.props.onBeforeTagRemove) {\n        _this.props.onBeforeTagRemove(_this.state.tags[index]);\n      }\n\n      var tags = _this.state.tags;\n      tags.splice(index, 1);\n\n      _this.setState({\n        tags: tags\n      });\n\n      if (_this.props.onAfterTagRemove) {\n        _this.props.onAfterTagRemove(_this.state.tags[index]);\n      }\n    });\n\n    var _tags = props.tags;\n    _this.state = {\n      tags: _tags,\n      duplicateIndex: ''\n    };\n    return _this;\n  }\n\n  _createClass(TaggleInput, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.input.focus();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          maxTags = _this$props.maxTags,\n          placeholder = _this$props.placeholder,\n          duplicateTagClass = _this$props.duplicateTagClass,\n          getTagValues = _this$props.getTagValues,\n          submitButtonText = _this$props.submitButtonText;\n      var _this$state = this.state,\n          tags = _this$state.tags,\n          duplicateIndex = _this$state.duplicateIndex;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"taggle_wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"taggle_list\"\n      }, tags.length > 0 && tags.map(function (tag, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: Math.random(),\n          className: \"taggle \".concat(duplicateIndex === index ? duplicateTagClass : '')\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"taggle_text\"\n        }, tag, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"close\",\n          onClick: function onClick() {\n            return _this2.removeTag(index);\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n      }), (!maxTags || tags.length < maxTags) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        ref: function ref(ele) {\n          _this2.input = ele;\n        },\n        type: \"text\",\n        placeholder: placeholder,\n        onKeyDown: this.onKeyDown\n      })))), getTagValues && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          return getTagValues(tags);\n        }\n      }, submitButtonText));\n    }\n  }]);\n\n  return TaggleInput;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(TaggleInput, \"propTypes\", {\n  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  maxTags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  allowDuplicates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  duplicateTagClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onBeforeTagAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onAfterTagAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onBeforeTagRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onAfterTagRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  getTagValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  submitButtonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n_defineProperty(TaggleInput, \"defaultProps\", {\n  tags: [],\n  maxTags: 0,\n  allowDuplicates: false,\n  duplicateTagClass: 'bounce',\n  placeholder: 'Enter the tags',\n  onBeforeTagAdd: undefined,\n  onAfterTagAdd: undefined,\n  onBeforeTagRemove: undefined,\n  onAfterTagRemove: undefined,\n  getTagValues: undefined,\n  submitButtonText: 'Get Tags'\n});\n\n\n\n//# sourceURL=webpack://react-taggle-input/./src/index.jsx?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://react-taggle-input/./src/style.scss?");

/***/ })

/******/ });
});