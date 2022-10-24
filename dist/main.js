/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* body {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n} */\n\n/* .task {\n  display: grid;\n  grid-template-columns: 20px 150px 150px 20px;\n} */\n\n.modal-container {\n  display: none; \n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n#add-task-modal, #info-modal, #edit-modal {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 30px;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n}\n\n#close-task-modal, #close-info-modal, #close-edit-modal {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.tasks li, #task-headers {\n  display: grid;\n  grid-template-columns: 1fr 48px 48px 82px 48px 48px;\n  gap: 10px;\n  align-items: center;\n}\n\n.tasks input[type='checkbox'] {\n  display: none;\n}\n\n.tasks img, .tasks label {\n  cursor: pointer;\n}\n\n.tasks img:hover {\n  opacity: 0.4;\n}\n\n.faded {\n  opacity: 0.1;\n}\n\n.green-checkmark {\n  background: rgb(108, 165, 108);\n  border-radius: 5px;\n}\n\n.yellow-star {\n  background: rgb(212, 191, 70);\n  border-radius: 50%;\n}\n\n.title-label, #title-block {\n  display: grid;\n  grid-template-columns: 48px 1fr 1fr;\n  gap: 10px;\n  align-items: center;\n}\n\n#info-modal {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n}\n\n#edit-modal {\n  display: grid;\n}\n\n#edit-id { \n  display: none;\n}\n\n#add-task-modal {\n  display: grid;\n  justify-content: center;\n  gap: 10px;\n}\n\nli:nth-child(odd) {\n  background: #eee;\n}\n\nli:hover {\n  background: #ddd;\n}\n\n#edit-modal label {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  padding: 5px 0;\n}\n\n.filter, .task-header {\n  cursor: pointer;\n}\n\n.filter:hover, .task-header:hover {\n  background: #eee;\n}\n\n.created-project {\n  padding-left: 10px;\n}\n\nbutton {\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background:rgb(108, 165, 108);\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background:rgb(74, 114, 74)\n}\n\ninput, textarea, select {\n  padding: 8px;\n}\n\ntextarea {\n  resize: none;\n  height: 6em;\n}\n\nnav {\n  padding: 10px;\n  display: grid;  \n  display: 5px;\n  /* border: 2px solid red; */\n  min-height: 50vh;\n  font-size: 20px;\n}\n\n#create-project-btn {\n  margin-top: 50px;\n  height: 3em;\n}\n\n#logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.filter:hover {\n  padding-left: 10px;\n}\n\n.created-project:hover {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n#default-view {\n  display: grid;\n  grid-template-columns: 300px minmax(500px, 1000px);\n  justify-content: center;\n}\n\n#filter-criteria {\n  font-size: 2em;\n  font-weight: bold;\n  padding: 0.5rem 0;\n}\n\n.fraction {\n  min-width: 200px;\n}\n\n#task-view {\n  padding: 10px;\n}\n\n#edit-priority {\n  justify-self: flex-start;\n}\n\n#update-task {\n  width: 30%;\n  margin: 20px auto 0;\n}\n\n#add-project-btn {\n  margin: 0 5px;\n}\n\n.grid-container {\n  display: grid;\n}\n\n#task-priority {\n  margin-left: 10px;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-center { \n  justify-content: center;\n  gap: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;;;GAGG;;AAEH;;;GAGG;;AAEH;EACE,aAAa;EACb,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,kBAAkB,EAAE,wBAAwB;EAC5C,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mDAAmD;EACnD,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,SAAS;AACX","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/* body {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n} */\n\n/* .task {\n  display: grid;\n  grid-template-columns: 20px 150px 150px 20px;\n} */\n\n.modal-container {\n  display: none; \n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n#add-task-modal, #info-modal, #edit-modal {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 30px;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n}\n\n#close-task-modal, #close-info-modal, #close-edit-modal {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.tasks li, #task-headers {\n  display: grid;\n  grid-template-columns: 1fr 48px 48px 82px 48px 48px;\n  gap: 10px;\n  align-items: center;\n}\n\n.tasks input[type='checkbox'] {\n  display: none;\n}\n\n.tasks img, .tasks label {\n  cursor: pointer;\n}\n\n.tasks img:hover {\n  opacity: 0.4;\n}\n\n.faded {\n  opacity: 0.1;\n}\n\n.green-checkmark {\n  background: rgb(108, 165, 108);\n  border-radius: 5px;\n}\n\n.yellow-star {\n  background: rgb(212, 191, 70);\n  border-radius: 50%;\n}\n\n.title-label, #title-block {\n  display: grid;\n  grid-template-columns: 48px 1fr 1fr;\n  gap: 10px;\n  align-items: center;\n}\n\n#info-modal {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n}\n\n#edit-modal {\n  display: grid;\n}\n\n#edit-id { \n  display: none;\n}\n\n#add-task-modal {\n  display: grid;\n  justify-content: center;\n  gap: 10px;\n}\n\nli:nth-child(odd) {\n  background: #eee;\n}\n\nli:hover {\n  background: #ddd;\n}\n\n#edit-modal label {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  padding: 5px 0;\n}\n\n.filter, .task-header {\n  cursor: pointer;\n}\n\n.filter:hover, .task-header:hover {\n  background: #eee;\n}\n\n.created-project {\n  padding-left: 10px;\n}\n\nbutton {\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background:rgb(108, 165, 108);\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background:rgb(74, 114, 74)\n}\n\ninput, textarea, select {\n  padding: 8px;\n}\n\ntextarea {\n  resize: none;\n  height: 6em;\n}\n\nnav {\n  padding: 10px;\n  display: grid;  \n  display: 5px;\n  /* border: 2px solid red; */\n  min-height: 50vh;\n  font-size: 20px;\n}\n\n#create-project-btn {\n  margin-top: 50px;\n  height: 3em;\n}\n\n#logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.filter:hover {\n  padding-left: 10px;\n}\n\n.created-project:hover {\n  font-weight: bold;\n}\n\n.center {\n  text-align: center;\n}\n\n#default-view {\n  display: grid;\n  grid-template-columns: 300px minmax(500px, 1000px);\n  justify-content: center;\n}\n\n#filter-criteria {\n  font-size: 2em;\n  font-weight: bold;\n  padding: 0.5rem 0;\n}\n\n.fraction {\n  min-width: 200px;\n}\n\n#task-view {\n  padding: 10px;\n}\n\n#edit-priority {\n  justify-self: flex-start;\n}\n\n#update-task {\n  width: 30%;\n  margin: 20px auto 0;\n}\n\n#add-project-btn {\n  margin: 0 5px;\n}\n\n.grid-container {\n  display: grid;\n}\n\n#task-priority {\n  margin-left: 10px;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-center { \n  justify-content: center;\n  gap: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ test)
/* harmony export */ });
function test() {
  console.log('hello world');
  // connsole.log('error');
}


/***/ }),

/***/ "./src/assets/images/check.png":
/*!*************************************!*\
  !*** ./src/assets/images/check.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/check.png";

/***/ }),

/***/ "./src/assets/images/checklist.png":
/*!*****************************************!*\
  !*** ./src/assets/images/checklist.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/checklist.png";

/***/ }),

/***/ "./src/assets/images/delete.png":
/*!**************************************!*\
  !*** ./src/assets/images/delete.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/delete.png";

/***/ }),

/***/ "./src/assets/images/edit.png":
/*!************************************!*\
  !*** ./src/assets/images/edit.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/edit.png";

/***/ }),

/***/ "./src/assets/images/info.png":
/*!************************************!*\
  !*** ./src/assets/images/info.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/info.png";

/***/ }),

/***/ "./src/assets/images/star.png":
/*!************************************!*\
  !*** ./src/assets/images/star.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/star.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.js */ "./src/test.js");
/* harmony import */ var _assets_images_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/check.png */ "./src/assets/images/check.png");
/* harmony import */ var _assets_images_checklist_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/checklist.png */ "./src/assets/images/checklist.png");
/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/delete.png */ "./src/assets/images/delete.png");
/* harmony import */ var _assets_images_edit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/edit.png */ "./src/assets/images/edit.png");
/* harmony import */ var _assets_images_info_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/info.png */ "./src/assets/images/info.png");
/* harmony import */ var _assets_images_star_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/star.png */ "./src/assets/images/star.png");









(0,_test_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const projects = new Set();
let tasks = [];


function initializeListeners() {

  openTaskModalListener();
  hideTaskModalListener();
  addTaskListener();
  clickOutsideTaskModal();
  clickOutsideInfoModal();
  clickOutsideEditModal()
  createProjectListener();
  removeTaskListener();
  checkboxListeners();
  editAndInfoListeners();
  updateTaskListener();
  importantFilterListener();
  homeFilterListener();
  todayFilterListener();
  taskHeaderListener();

}

function openTaskModalListener() {
  const createTask = document.querySelector('.create-task');
  createTask.onclick = displayTaskModal;
}

function hideTaskModalListener() {
  const cancelTaskModal = document.getElementById('cancel-task-btn');
  cancelTaskModal.onclick = hideTaskModal;
}

function displayTaskModal() {
  const addTaskModal = document.getElementById('task-modal-container');
  const closeTaskModal = document.getElementById('close-task-modal');
  addTaskModal.style.display = 'block';
  createProjectOptions();
  const taskTitle = document.getElementById('task-title');
  taskTitle.focus();
  closeTaskModal.onclick = hideTaskModal;
}

function hideTaskModal() {
  const addTaskModal = document.getElementById('task-modal-container');
  addTaskModal.style.display = 'none';
  clearTaskModal();
}

function addTaskListener() {
  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.onclick = getTask;
}

function getTask() {
  const taskTitle = document.getElementById('task-title');
  const taskDueDate = document.getElementById('task-due-date');
  const taskPriority = document.getElementById('task-priority');
  const taskDescription = document.getElementById('task-description');
  const taskProject = document.getElementById('task-project');

  let task = {
    id: assignTaskId(),
    title: taskTitle.value,
    dueDate: taskDueDate.value,
    isPriority: taskPriority.checked,
    description: taskDescription.value,
    project: taskProject.value,
    completed: false,
  }
  if (task.title && task.dueDate) {
    tasks.push(task);
    appendTaskList(taskTemplate(task));
  }
  hideTaskModal();
  
}

function clearTaskModal() {
  const taskTitle = document.getElementById('task-title');
  const taskDueDate = document.getElementById('task-due-date');
  const taskPriority = document.getElementById('task-priority');
  const taskDescription = document.getElementById('task-description');
  const taskProject = document.getElementById('task-project');

  taskTitle.value = null;
  taskDueDate.value = null;
  taskPriority.checked = null;
  taskDescription.value = null;
  taskProject.value = null;
}

function clickOutsideTaskModal() {
  const modalContainer = document.getElementById('task-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideTaskModal();
  }
}

function clickOutsideInfoModal() {
  const modalContainer = document.getElementById('info-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideInfoModal();
  }
}

function clickOutsideEditModal() {
  const modalContainer = document.getElementById('edit-modal-container');
  modalContainer.onclick = e => {
    if (e.target.parentElement.tagName === 'BODY') hideEditModal();
  }
}

function createProjectListener() {
  const createProjectBtn = document.getElementById('create-project-btn');
  createProjectBtn.onclick = createProject;
}

function createProject() {
  const projectsNode = document.getElementById('projectsNode');
  const addProjectBtn = document.createElement('button');
  addProjectBtn.setAttribute('id', 'add-project-btn');
  const newProject = document.createElement('input');
  newProject.setAttribute('type', 'text');
  newProject.setAttribute('id', 'new-project');
  addProjectBtn.append('ADD ');
  projectsNode.append(newProject, addProjectBtn);
  removeProjectListener();
  newProject.focus();
  addProject();
}

function removeProjectListener() {
  const createProjectBtn = document.getElementById('create-project-btn');
  createProjectBtn.onclick = null;
}

function addProject() {
  const projectsNode = document.getElementById('projectsNode');
  const newProject = document.getElementById('new-project');
  const addProjectBtn = document.getElementById('add-project-btn');
  addProjectBtn.addEventListener('click', () => {
    if (newProject.value && !(projects.has(newProject.value))) {
      projects.add(newProject.value);
      const projectNode = document.createElement('div');
      projectNode.append(`${newProject.value}`);
      projectNode.setAttribute('id', `project-${newProject.value}`);
      projectNode.classList.add('created-project', 'filter');
      projectsNode.append(projectNode);
    }
    newProject.remove();
    addProjectBtn.remove();
    createProjectListener();
    projectFilterListener();
  })
}

function getOptions() {
  const optionNodes = document.querySelectorAll('.project-option');
  let existingOptions = [];
  Array.from(optionNodes).forEach(option => existingOptions.push(option.innerText));
  return existingOptions;
}

function createProjectOptions() {
  const taskProject = document.getElementById('task-project');
  const options = getOptions();
  projects.forEach(project => {
    if (!options.includes(project)) {
      let projectOption = document.createElement('option');
      projectOption.classList.add('project-option');
      projectOption.setAttribute('value', project);
      projectOption.append(project);
      taskProject.append(projectOption);
    }
  })
}

function removeTaskListener() {
  const removeBtns = document.querySelectorAll('.remove-task');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', e => {
      removeTask(e.target.parentElement);
      let task = tasks.find(obj => obj.id == e.target.dataset.id);
      tasks = tasks.filter(ele => ele !== task);
    })
  })
}

function removeTask(node) {
  node.remove();
}

function assignTaskId() {
  let ids = Array.from(tasks, task => task.id);
  let highestId = Math.max(...ids);
  if (highestId <= 0) return 1;
  else return highestId + 1;
}

function taskTemplate(task) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  const img = document.createElement('img');
  const div = document.createElement('div');

  const checkbox1 = input.cloneNode();
  checkbox1.setAttribute('id', `title-cb-${task.id}`);
  checkbox1.setAttribute('data-id', `${task.id}`);
  const checkboxImg = img.cloneNode();
  checkboxImg.src = _assets_images_check_png__WEBPACK_IMPORTED_MODULE_2__;
  checkboxImg.classList.add('faded', 'checkmark');
  const templateTitle = div.cloneNode();
  templateTitle.classList.add('fraction');
  templateTitle.append(`${task.title}`);
  const templateProject = div.cloneNode();
  templateProject.classList.add('fraction');
  templateProject.append(`${task.project}`);
  const titleLabel = label.cloneNode();
  titleLabel.setAttribute('for', `title-cb-${task.id}`);
  titleLabel.setAttribute('data-id', `${task.id}`);
  titleLabel.classList.add('title-label');
  titleLabel.append(checkbox1, checkboxImg, templateTitle, templateProject);

  const checkbox2 = input.cloneNode();
  checkbox2.setAttribute('id', `star-cb-${task.id}`);
  checkbox2.setAttribute('data-id', `${task.id}`);
  const starImg = img.cloneNode();
  starImg.src = _assets_images_star_png__WEBPACK_IMPORTED_MODULE_7__;
  starImg.classList.add('faded', 'star');
  if (task.isPriority) {
    checkboxTicked(starImg);
    checkbox2.setAttribute('checked', true);
  }
  if (task.completed) {
    checkboxTicked(checkboxImg);
    checkbox1.setAttribute('checked', true);
  }
  const starLabel = label.cloneNode();
  starLabel.setAttribute('for', `star-cb-${task.id}`);
  starLabel.append(checkbox2, starImg);

  const infoImg = img.cloneNode();
  infoImg.src = _assets_images_info_png__WEBPACK_IMPORTED_MODULE_6__;
  infoImg.setAttribute('data-id', `${task.id}`);
  infoImg.setAttribute('data-type', 'info');
  infoImg.classList.add('get-id');
  const templateDate = div.cloneNode();
  templateDate.append(`${task.dueDate}`);
  const editImg = img.cloneNode();
  editImg.src = _assets_images_edit_png__WEBPACK_IMPORTED_MODULE_5__;
  editImg.setAttribute('data-id', `${task.id}`);
  editImg.setAttribute('data-type', 'edit');
  editImg.classList.add('get-id');
  const deleteImg = img.cloneNode();
  deleteImg.setAttribute('class', 'remove-task');
  deleteImg.setAttribute('data-id', `${task.id}`);
  deleteImg.src = _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_4__;

  li.setAttribute('id', `${task.id}`);
  li.append(titleLabel, starLabel, infoImg, templateDate, editImg, deleteImg);
  
  // appendTaskList(li);
  return li;
}

function appendTaskList(task) {
  const ul = document.querySelector('.tasks ul');
  ul.append(task);
  // initializeListeners();
  removeTaskListener();
  editAndInfoListeners();
  checkboxListeners();
}

function checkboxListeners() {
  const checkboxes = document.querySelectorAll('.tasks input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      if (e.target.checked) {
        checkboxTicked(e.target.nextSibling);
        confirmChoice(e);
      } else {
        checkboxUnticked(e.target.nextSibling);
        removeChoice(e);
      }
    })
  })
}

function confirmChoice(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.id.includes('star')) {
    task.isPriority = true;
  }
  if (e.target.id.includes('title')) {
    task.completed = true;
  }
}

function removeChoice(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.id.includes('star')) {
    task.isPriority = false;
  }
  if (e.target.id.includes('title')) {
    task.completed = false;
  }
}

function checkboxTicked(node) {
  node.classList.remove('faded');
  if (Array.from(node.classList).includes('star')) {
    node.classList.add('yellow-star');
  }
  if (Array.from(node.classList).includes('checkmark')) {
    node.classList.add('green-checkmark');
  }
}

function checkboxUnticked(node) {
  node.classList.add('faded');
  if (Array.from(node.classList).includes('star')) {
    node.classList.remove('yellow-star');
  }
  if (Array.from(node.classList).includes('checkmark')) {
    node.classList.remove('green-checkmark');
  }
}

function editAndInfoListeners() {

  const nodes = document.querySelectorAll('.get-id');
  nodes.forEach(node => {
    node.addEventListener('click', showModal)
  })
}

function showModal(e) {
  let task = tasks.find(obj => obj.id == e.target.dataset.id);
  if (e.target.dataset.type === 'info') {
    const infoModal = document.getElementById('info-modal-container');
    const title = document.getElementById('info-title');
    const dueDate = document.getElementById('info-date');
    const priority = document.getElementById('info-priority');
    const description = document.getElementById('info-description');
    const project = document.getElementById('info-project');
    title.append(task.title);
    dueDate.append(task.dueDate);
    priority.append(task.isPriority ? 'Yes' : 'No');
    description.append(task.description);
    project.append(task.project);
    infoModal.style.display = 'block';
    const closeInfoModal = document.getElementById('close-info-modal');
    closeInfoModal.onclick = hideInfoModal;
  }
  if (e.target.dataset.type === 'edit') {
    const editId = document.getElementById('edit-id');
    editId.innerText = task.id;
    const editModal = document.getElementById('edit-modal-container');
    const titleEdit = document.getElementById('edit-title');
    titleEdit.value = task.title;
    const dueDateEdit = document.getElementById('edit-date');
    dueDateEdit.value = task.dueDate;
    const priorityEdit = document.getElementById('edit-priority');
    if (task.isPriority) {
      priorityEdit.setAttribute('checked', true);
    } else {
      priorityEdit.setAttribute('checked', false);
      priorityEdit.removeAttribute('checked');
    }
    const descriptionEdit = document.getElementById('edit-description');
    descriptionEdit.value = task.description;
    // const projectEdit = document.getElementById('edit-project');
    editProjectOptions();
    preselectTaskProject(task);
    editModal.style.display = 'block';
    const closeEditModal = document.getElementById('close-edit-modal');
    titleEdit.focus();
    closeEditModal.onclick = hideEditModal;
  };
}

function hideEditModal() {
  const editModal = document.getElementById('edit-modal-container');
  editModal.style.display = 'none';
}

function hideInfoModal() {
  const title = document.getElementById('info-title');
  const dueDate = document.getElementById('info-date');
  const priority = document.getElementById('info-priority');
  const description = document.getElementById('info-description');
  const project = document.getElementById('info-project');
  title.innerText = null;
  dueDate.innerText = null;
  priority.innerText = null;
  description.innerText = null;
  project.innerText = null;
  const infoModal = document.getElementById('info-modal-container');
  infoModal.style.display = 'none';
}

function editProjectOptions() {
  const editProject = document.getElementById('edit-project');
  const option = document.createElement('option');
  projects.forEach(project => {
    const editProjectOption = option.cloneNode();
    editProjectOption.classList.add('edit-project-option');
    editProjectOption.innerText = project;
    editProjectOption.value = project;
    const existingOptions = [];
    Array.from(editProject.children).forEach(child => {
      if (child.value) {
        existingOptions.push(child.value);
      }
    });
    if (!existingOptions.includes(project)) {
      editProject.append(editProjectOption);
    }

  });
}

function preselectTaskProject(task) {
  let optionSet = false;
  const editProject = document.getElementById('edit-project');
  Array.from(editProject.children).forEach(child => {
    if (child.value != task.project) {
      child.removeAttribute('selected', true);
    }
    if (child.value == task.project) {
      child.setAttribute('selected', true);
      optionSet = true;
    } 
  
  })
  if (!optionSet) {
    const editDefaultProject = document.getElementById('edit-default-project');
    editDefaultProject.setAttribute('selected', true);
  }
}

function updateTaskListener() {
  const updateTaskBtn = document.getElementById('update-task');
  updateTaskBtn.onclick = updateTask;
}

function updateTask() {
  const taskId = document.getElementById('edit-id');
  const editedTitle = document.getElementById('edit-title');
  const editedDate = document.getElementById('edit-date');
  const editedPriority = document.getElementById('edit-priority');
  const editedProject = document.getElementById('edit-project');
  const editedDescription = document.getElementById('edit-description');

  let task = tasks.find(obj => obj.id == taskId.innerText);
  if (editedTitle.value) task.title = editedTitle.value;
  if (editedDate.value) task.dueDate = editedDate.value;
  task.isPriority = editedPriority.checked;
  if (editedProject.value) task.project = editedProject.value;
  if (editedDescription.value) task.description = editedDescription.value;
  replaceTask(task);
  hideEditModal();
}

function replaceTask(task) {
  const taskToUpdate = document.getElementById(`${task.id}`);
  taskToUpdate.replaceWith(taskTemplate(task));
  initializeListeners();
}

function importantFilterListener() {
  const importantFilter = document.getElementById('important-filter');
  importantFilter.onclick = filterByImportant;
}

function filterByImportant() {
  clearTasks();
  displayAllTasks();
  const tasksDisplayed = document.querySelectorAll('.tasks ul li');
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Important';
  tasksDisplayed.forEach(taskDisplayed => {
    let currentTask = tasks.find(task => task.id == taskDisplayed.id);
    if (!currentTask.isPriority) taskDisplayed.remove();
  });
}

function homeFilterListener() {
  const homeFilter = document.getElementById('home-filter');
  homeFilter.onclick = displayAllTasks;
}

function displayAllTasks() {
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Home';
  clearTasks();
  tasks.forEach(task => {
    appendTaskList(taskTemplate(task));
  })
}

function clearTasks() {
  const ul = document.querySelector('.tasks ul');
  Array.from(ul.children).forEach(child => child.remove());
}

function todayFilterListener() {
  const todayFilter = document.getElementById('today-filter');
  todayFilter.onclick = filterByToday;
}

function filterByToday() {
  clearTasks();
  displayAllTasks();
  const filterCriteria = document.getElementById('filter-criteria');
  filterCriteria.innerText = 'Today';
  let today = new Date();
  const todaysDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

  const tasksDisplayed = document.querySelectorAll('.tasks ul li');
  tasksDisplayed.forEach(taskDisplayed => {
    let currentTask = tasks.find(task => task.id == taskDisplayed.id);
    if (currentTask.dueDate != todaysDate) taskDisplayed.remove();
  });
}

function projectFilterListener() {
  const projectFilters = document.querySelectorAll('.created-project');
  projectFilters.forEach(projectFilter => {
    projectFilter.addEventListener('click', e => {
      clearTasks();
      displayAllTasks();
      const tasksDisplayed = document.querySelectorAll('.tasks ul li');
      const filterCriteria = document.getElementById('filter-criteria');
      filterCriteria.innerText = `${e.target.innerText}`;
      tasksDisplayed.forEach(taskDisplayed => {
        let currentTask = tasks.find(task => task.id == taskDisplayed.id);
        if (currentTask.project != e.target.innerText) taskDisplayed.remove();
      });
    })
  })
}

function taskHeaderListener() {
  const taskHeaders = document.querySelectorAll('.task-header');
  taskHeaders.forEach(taskHeader => taskHeader.addEventListener('click', e => {
    let key = e.target.dataset.key;
    // console.log(e.target.classList);
    if ((Array.from(e.target.classList)).includes('descending')) {
      tasks.sort((a, b) => {
        if (a[`${key}`] < b[`${key}`]) return -1;
        if (b[`${key}`] < a[`${key}`]) return 1;
      })
      e.target.classList.remove('descending');
      e.target.classList.add('ascending');
    }
    else if ((Array.from(e.target.classList)).includes('ascending')) {
      tasks.sort((a, b) => {
        if (a[`${key}`] < b[`${key}`]) return 1;
        if (b[`${key}`] < a[`${key}`]) return -1;
      })
      e.target.classList.remove('ascending');
      e.target.classList.add('descending');
    }
    clearTasks();
    tasks.forEach(task => {
    appendTaskList(taskTemplate(task));
    })
    removeTaskListener();
    editAndInfoListeners();
    checkboxListeners();

  }))
}


function demo() {

  let task1 = {
              id: 1,
              title: 'Wash car',
              dueDate: '2022-10-22',
              isPriority: false,
              description: 'Wax and polish',
              project: '',
              completed: true,
              };

  let task2 = {
              id: 2,
              title: 'Paint fence',
              dueDate: '2022-10-24',
              isPriority: true,
              description: 'Give 2 coats',
              project: 'Home',
              completed: false,
          };

  let task3 = {
            id: 3,
            title: 'Walk dog',
            dueDate: '2003-03-23',
            isPriority: false,
            description: 'Go to beach',
            project: '',
            completed: true,
            };
  let task4 = {
            id: 47,
            title: 'Weight training',
            dueDate: '2022-10-22',
            isPriority: false,
            description: 'Chest and shoulders',
            project: 'Exercise',
            completed: false,
          };



  tasks.push(task1, task2, task3, task4);
  appendTaskList(taskTemplate(tasks[0]));
  appendTaskList(taskTemplate(tasks[1]));
  appendTaskList(taskTemplate(tasks[2]));
  appendTaskList(taskTemplate(tasks[3]));
}


demo();

initializeListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsR0FBRyxnQkFBZ0I7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksVUFBVSxJQUFJO0FBQ25DLGlCQUFpQixJQUFJLFVBQVUsSUFBSTtBQUNuQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJLFVBQVUsSUFBSTtBQUNuQyxpQkFBaUIsSUFBSSxVQUFVLElBQUk7QUFDbkMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIGJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn0gKi9cXG5cXG4vKiAudGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDE1MHB4IDE1MHB4IDIwcHg7XFxufSAqL1xcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuI2FkZC10YXNrLW1vZGFsLCAjaW5mby1tb2RhbCwgI2VkaXQtbW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Nsb3NlLXRhc2stbW9kYWwsICNjbG9zZS1pbmZvLW1vZGFsLCAjY2xvc2UtZWRpdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzIGxpLCAjdGFzay1oZWFkZXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0OHB4IDQ4cHggODJweCA0OHB4IDQ4cHg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFza3MgaW1nLCAudGFza3MgbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MgaW1nOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmZhZGVkIHtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLmdyZWVuLWNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA4LCAxNjUsIDEwOCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi55ZWxsb3ctc3RhciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAxOTEsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRpdGxlLWxhYmVsLCAjdGl0bGUtYmxvY2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luZm8tbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xcbn1cXG5cXG4jZWRpdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jZWRpdC1pZCB7IFxcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZC10YXNrLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuI2VkaXQtbW9kYWwgbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMWZyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5maWx0ZXIsIC50YXNrLWhlYWRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXI6aG92ZXIsIC50YXNrLWhlYWRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0IHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOnJnYigxMDgsIDE2NSwgMTA4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDpyZ2IoNzQsIDExNCwgNzQpXFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiA2ZW07XFxufVxcblxcbm5hdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDsgIFxcbiAgZGlzcGxheTogNXB4O1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAzZW07XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZpbHRlcjpob3ZlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3Q6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGVmYXVsdC12aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IG1pbm1heCg1MDBweCwgMTAwMHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZmlsdGVyLWNyaXRlcmlhIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZyYWN0aW9uIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbiN0YXNrLXZpZXcge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jdXBkYXRlLXRhc2sge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHlDQUF5QztBQUMzQzs7QUFFQTs7O0dBR0c7O0FBRUg7OztHQUdHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1EQUFtRDtFQUNuRCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59ICovXFxuXFxuLyogLnRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxNTBweCAxNTBweCAyMHB4O1xcbn0gKi9cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbiNhZGQtdGFzay1tb2RhbCwgI2luZm8tbW9kYWwsICNlZGl0LW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjbG9zZS10YXNrLW1vZGFsLCAjY2xvc2UtaW5mby1tb2RhbCwgI2Nsb3NlLWVkaXQtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcyBsaSwgI3Rhc2staGVhZGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDhweCA0OHB4IDgycHggNDhweCA0OHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tzIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2tzIGltZywgLnRhc2tzIGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzIGltZzpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5mYWRlZCB7XFxuICBvcGFjaXR5OiAwLjE7XFxufVxcblxcbi5ncmVlbi1jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZDogcmdiKDEwOCwgMTY1LCAxMDgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ueWVsbG93LXN0YXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIxMiwgMTkxLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50aXRsZS1sYWJlbCwgI3RpdGxlLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbmZvLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcXG59XFxuXFxuI2VkaXQtbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2VkaXQtaWQgeyBcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtdGFzay1tb2RhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxufVxcblxcbiNlZGl0LW1vZGFsIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDFmcjtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uZmlsdGVyLCAudGFzay1oZWFkZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyLCAudGFzay1oZWFkZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDpyZ2IoMTA4LCAxNjUsIDEwOCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6cmdiKDc0LCAxMTQsIDc0KVxcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogNmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7ICBcXG4gIGRpc3BsYXk6IDVweDtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGhlaWdodDogM2VtO1xcbn1cXG5cXG4jbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5maWx0ZXI6aG92ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RlZmF1bHQtdmlldyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBtaW5tYXgoNTAwcHgsIDEwMDBweCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2ZpbHRlci1jcml0ZXJpYSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcblxcbi5mcmFjdGlvbiB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4jdGFzay12aWV3IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI3VwZGF0ZS10YXNrIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDIwcHggYXV0byAwO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jdGFzay1wcmlvcml0eSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdCgpIHtcbiAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG4gIC8vIGNvbm5zb2xlLmxvZygnZXJyb3InKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdC5qcyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoZWNrLnBuZyc7XG5pbXBvcnQgY2hlY2tsaXN0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jaGVja2xpc3QucG5nJztcbmltcG9ydCBiaW4gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5wbmcnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2VkaXQucG5nJztcbmltcG9ydCBpbmZvIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9pbmZvLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmcnO1xuXG50ZXN0KCk7XG5cbmNvbnN0IHByb2plY3RzID0gbmV3IFNldCgpO1xubGV0IHRhc2tzID0gW107XG5cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcblxuICBvcGVuVGFza01vZGFsTGlzdGVuZXIoKTtcbiAgaGlkZVRhc2tNb2RhbExpc3RlbmVyKCk7XG4gIGFkZFRhc2tMaXN0ZW5lcigpO1xuICBjbGlja091dHNpZGVUYXNrTW9kYWwoKTtcbiAgY2xpY2tPdXRzaWRlSW5mb01vZGFsKCk7XG4gIGNsaWNrT3V0c2lkZUVkaXRNb2RhbCgpXG4gIGNyZWF0ZVByb2plY3RMaXN0ZW5lcigpO1xuICByZW1vdmVUYXNrTGlzdGVuZXIoKTtcbiAgY2hlY2tib3hMaXN0ZW5lcnMoKTtcbiAgZWRpdEFuZEluZm9MaXN0ZW5lcnMoKTtcbiAgdXBkYXRlVGFza0xpc3RlbmVyKCk7XG4gIGltcG9ydGFudEZpbHRlckxpc3RlbmVyKCk7XG4gIGhvbWVGaWx0ZXJMaXN0ZW5lcigpO1xuICB0b2RheUZpbHRlckxpc3RlbmVyKCk7XG4gIHRhc2tIZWFkZXJMaXN0ZW5lcigpO1xuXG59XG5cbmZ1bmN0aW9uIG9wZW5UYXNrTW9kYWxMaXN0ZW5lcigpIHtcbiAgY29uc3QgY3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzaycpO1xuICBjcmVhdGVUYXNrLm9uY2xpY2sgPSBkaXNwbGF5VGFza01vZGFsO1xufVxuXG5mdW5jdGlvbiBoaWRlVGFza01vZGFsTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGNhbmNlbFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtdGFzay1idG4nKTtcbiAgY2FuY2VsVGFza01vZGFsLm9uY2xpY2sgPSBoaWRlVGFza01vZGFsO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza01vZGFsKCkge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbC1jb250YWluZXInKTtcbiAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzay1tb2RhbCcpO1xuICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNyZWF0ZVByb2plY3RPcHRpb25zKCk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gIHRhc2tUaXRsZS5mb2N1cygpO1xuICBjbG9zZVRhc2tNb2RhbC5vbmNsaWNrID0gaGlkZVRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tNb2RhbCgpIHtcbiAgY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbW9kYWwtY29udGFpbmVyJyk7XG4gIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjbGVhclRhc2tNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnRuJyk7XG4gIGFkZFRhc2tCdG4ub25jbGljayA9IGdldFRhc2s7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcm9qZWN0Jyk7XG5cbiAgbGV0IHRhc2sgPSB7XG4gICAgaWQ6IGFzc2lnblRhc2tJZCgpLFxuICAgIHRpdGxlOiB0YXNrVGl0bGUudmFsdWUsXG4gICAgZHVlRGF0ZTogdGFza0R1ZURhdGUudmFsdWUsXG4gICAgaXNQcmlvcml0eTogdGFza1ByaW9yaXR5LmNoZWNrZWQsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBwcm9qZWN0OiB0YXNrUHJvamVjdC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9XG4gIGlmICh0YXNrLnRpdGxlICYmIHRhc2suZHVlRGF0ZSkge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgYXBwZW5kVGFza0xpc3QodGFza1RlbXBsYXRlKHRhc2spKTtcbiAgfVxuICBoaWRlVGFza01vZGFsKCk7XG4gIFxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tNb2RhbCgpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKTtcblxuICB0YXNrVGl0bGUudmFsdWUgPSBudWxsO1xuICB0YXNrRHVlRGF0ZS52YWx1ZSA9IG51bGw7XG4gIHRhc2tQcmlvcml0eS5jaGVja2VkID0gbnVsbDtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcbiAgdGFza1Byb2plY3QudmFsdWUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjbGlja091dHNpZGVUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbW9kYWwtY29udGFpbmVyJyk7XG4gIG1vZGFsQ29udGFpbmVyLm9uY2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnQk9EWScpIGhpZGVUYXNrTW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGlja091dHNpZGVJbmZvTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tbW9kYWwtY29udGFpbmVyJyk7XG4gIG1vZGFsQ29udGFpbmVyLm9uY2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnQk9EWScpIGhpZGVJbmZvTW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGlja091dHNpZGVFZGl0TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbW9kYWwtY29udGFpbmVyJyk7XG4gIG1vZGFsQ29udGFpbmVyLm9uY2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnQk9EWScpIGhpZGVFZGl0TW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdGVuZXIoKSB7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtYnRuJyk7XG4gIGNyZWF0ZVByb2plY3RCdG4ub25jbGljayA9IGNyZWF0ZVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RzTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c05vZGUnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QtYnRuJyk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvamVjdCcpO1xuICBhZGRQcm9qZWN0QnRuLmFwcGVuZCgnQUREICcpO1xuICBwcm9qZWN0c05vZGUuYXBwZW5kKG5ld1Byb2plY3QsIGFkZFByb2plY3RCdG4pO1xuICByZW1vdmVQcm9qZWN0TGlzdGVuZXIoKTtcbiAgbmV3UHJvamVjdC5mb2N1cygpO1xuICBhZGRQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RMaXN0ZW5lcigpIHtcbiAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1idG4nKTtcbiAgY3JlYXRlUHJvamVjdEJ0bi5vbmNsaWNrID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdHNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTm9kZScpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0Jyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5ld1Byb2plY3QudmFsdWUgJiYgIShwcm9qZWN0cy5oYXMobmV3UHJvamVjdC52YWx1ZSkpKSB7XG4gICAgICBwcm9qZWN0cy5hZGQobmV3UHJvamVjdC52YWx1ZSk7XG4gICAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdE5vZGUuYXBwZW5kKGAke25ld1Byb2plY3QudmFsdWV9YCk7XG4gICAgICBwcm9qZWN0Tm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtJHtuZXdQcm9qZWN0LnZhbHVlfWApO1xuICAgICAgcHJvamVjdE5vZGUuY2xhc3NMaXN0LmFkZCgnY3JlYXRlZC1wcm9qZWN0JywgJ2ZpbHRlcicpO1xuICAgICAgcHJvamVjdHNOb2RlLmFwcGVuZChwcm9qZWN0Tm9kZSk7XG4gICAgfVxuICAgIG5ld1Byb2plY3QucmVtb3ZlKCk7XG4gICAgYWRkUHJvamVjdEJ0bi5yZW1vdmUoKTtcbiAgICBjcmVhdGVQcm9qZWN0TGlzdGVuZXIoKTtcbiAgICBwcm9qZWN0RmlsdGVyTGlzdGVuZXIoKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgY29uc3Qgb3B0aW9uTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKTtcbiAgbGV0IGV4aXN0aW5nT3B0aW9ucyA9IFtdO1xuICBBcnJheS5mcm9tKG9wdGlvbk5vZGVzKS5mb3JFYWNoKG9wdGlvbiA9PiBleGlzdGluZ09wdGlvbnMucHVzaChvcHRpb24uaW5uZXJUZXh0KSk7XG4gIHJldHVybiBleGlzdGluZ09wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPcHRpb25zKCkge1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKTtcbiAgY29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnMoKTtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBpZiAoIW9wdGlvbnMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgIGxldCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBwcm9qZWN0T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gICAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0KTtcbiAgICAgIHByb2plY3RPcHRpb24uYXBwZW5kKHByb2plY3QpO1xuICAgICAgdGFza1Byb2plY3QuYXBwZW5kKHByb2plY3RPcHRpb24pO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0xpc3RlbmVyKCkge1xuICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS10YXNrJyk7XG4gIHJlbW92ZUJ0bnMuZm9yRWFjaChyZW1vdmVCdG4gPT4ge1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgcmVtb3ZlVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIGxldCB0YXNrID0gdGFza3MuZmluZChvYmogPT4gb2JqLmlkID09IGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZWxlID0+IGVsZSAhPT0gdGFzayk7XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhub2RlKSB7XG4gIG5vZGUucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblRhc2tJZCgpIHtcbiAgbGV0IGlkcyA9IEFycmF5LmZyb20odGFza3MsIHRhc2sgPT4gdGFzay5pZCk7XG4gIGxldCBoaWdoZXN0SWQgPSBNYXRoLm1heCguLi5pZHMpO1xuICBpZiAoaGlnaGVzdElkIDw9IDApIHJldHVybiAxO1xuICBlbHNlIHJldHVybiBoaWdoZXN0SWQgKyAxO1xufVxuXG5mdW5jdGlvbiB0YXNrVGVtcGxhdGUodGFzaykge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGNoZWNrYm94MSA9IGlucHV0LmNsb25lTm9kZSgpO1xuICBjaGVja2JveDEuc2V0QXR0cmlidXRlKCdpZCcsIGB0aXRsZS1jYi0ke3Rhc2suaWR9YCk7XG4gIGNoZWNrYm94MS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHt0YXNrLmlkfWApO1xuICBjb25zdCBjaGVja2JveEltZyA9IGltZy5jbG9uZU5vZGUoKTtcbiAgY2hlY2tib3hJbWcuc3JjID0gY2hlY2s7XG4gIGNoZWNrYm94SW1nLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkJywgJ2NoZWNrbWFyaycpO1xuICBjb25zdCB0ZW1wbGF0ZVRpdGxlID0gZGl2LmNsb25lTm9kZSgpO1xuICB0ZW1wbGF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZyYWN0aW9uJyk7XG4gIHRlbXBsYXRlVGl0bGUuYXBwZW5kKGAke3Rhc2sudGl0bGV9YCk7XG4gIGNvbnN0IHRlbXBsYXRlUHJvamVjdCA9IGRpdi5jbG9uZU5vZGUoKTtcbiAgdGVtcGxhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2ZyYWN0aW9uJyk7XG4gIHRlbXBsYXRlUHJvamVjdC5hcHBlbmQoYCR7dGFzay5wcm9qZWN0fWApO1xuICBjb25zdCB0aXRsZUxhYmVsID0gbGFiZWwuY2xvbmVOb2RlKCk7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdGl0bGUtY2ItJHt0YXNrLmlkfWApO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUtbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC5hcHBlbmQoY2hlY2tib3gxLCBjaGVja2JveEltZywgdGVtcGxhdGVUaXRsZSwgdGVtcGxhdGVQcm9qZWN0KTtcblxuICBjb25zdCBjaGVja2JveDIgPSBpbnB1dC5jbG9uZU5vZGUoKTtcbiAgY2hlY2tib3gyLnNldEF0dHJpYnV0ZSgnaWQnLCBgc3Rhci1jYi0ke3Rhc2suaWR9YCk7XG4gIGNoZWNrYm94Mi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHt0YXNrLmlkfWApO1xuICBjb25zdCBzdGFySW1nID0gaW1nLmNsb25lTm9kZSgpO1xuICBzdGFySW1nLnNyYyA9IHN0YXI7XG4gIHN0YXJJbWcuY2xhc3NMaXN0LmFkZCgnZmFkZWQnLCAnc3RhcicpO1xuICBpZiAodGFzay5pc1ByaW9yaXR5KSB7XG4gICAgY2hlY2tib3hUaWNrZWQoc3RhckltZyk7XG4gICAgY2hlY2tib3gyLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xuICB9XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIGNoZWNrYm94VGlja2VkKGNoZWNrYm94SW1nKTtcbiAgICBjaGVja2JveDEuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gIH1cbiAgY29uc3Qgc3RhckxhYmVsID0gbGFiZWwuY2xvbmVOb2RlKCk7XG4gIHN0YXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBzdGFyLWNiLSR7dGFzay5pZH1gKTtcbiAgc3RhckxhYmVsLmFwcGVuZChjaGVja2JveDIsIHN0YXJJbWcpO1xuXG4gIGNvbnN0IGluZm9JbWcgPSBpbWcuY2xvbmVOb2RlKCk7XG4gIGluZm9JbWcuc3JjID0gaW5mbztcbiAgaW5mb0ltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHt0YXNrLmlkfWApO1xuICBpbmZvSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ2luZm8nKTtcbiAgaW5mb0ltZy5jbGFzc0xpc3QuYWRkKCdnZXQtaWQnKTtcbiAgY29uc3QgdGVtcGxhdGVEYXRlID0gZGl2LmNsb25lTm9kZSgpO1xuICB0ZW1wbGF0ZURhdGUuYXBwZW5kKGAke3Rhc2suZHVlRGF0ZX1gKTtcbiAgY29uc3QgZWRpdEltZyA9IGltZy5jbG9uZU5vZGUoKTtcbiAgZWRpdEltZy5zcmMgPSBlZGl0O1xuICBlZGl0SW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnZWRpdCcpO1xuICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoJ2dldC1pZCcpO1xuICBjb25zdCBkZWxldGVJbWcgPSBpbWcuY2xvbmVOb2RlKCk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlbW92ZS10YXNrJyk7XG4gIGRlbGV0ZUltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHt0YXNrLmlkfWApO1xuICBkZWxldGVJbWcuc3JjID0gYmluO1xuXG4gIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrLmlkfWApO1xuICBsaS5hcHBlbmQodGl0bGVMYWJlbCwgc3RhckxhYmVsLCBpbmZvSW1nLCB0ZW1wbGF0ZURhdGUsIGVkaXRJbWcsIGRlbGV0ZUltZyk7XG4gIFxuICAvLyBhcHBlbmRUYXNrTGlzdChsaSk7XG4gIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza0xpc3QodGFzaykge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyB1bCcpO1xuICB1bC5hcHBlbmQodGFzayk7XG4gIC8vIGluaXRpYWxpemVMaXN0ZW5lcnMoKTtcbiAgcmVtb3ZlVGFza0xpc3RlbmVyKCk7XG4gIGVkaXRBbmRJbmZvTGlzdGVuZXJzKCk7XG4gIGNoZWNrYm94TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXJzKCkge1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBjaGVja2JveFRpY2tlZChlLnRhcmdldC5uZXh0U2libGluZyk7XG4gICAgICAgIGNvbmZpcm1DaG9pY2UoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja2JveFVudGlja2VkKGUudGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgcmVtb3ZlQ2hvaWNlKGUpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1DaG9pY2UoZSkge1xuICBsZXQgdGFzayA9IHRhc2tzLmZpbmQob2JqID0+IG9iai5pZCA9PSBlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKCdzdGFyJykpIHtcbiAgICB0YXNrLmlzUHJpb3JpdHkgPSB0cnVlO1xuICB9XG4gIGlmIChlLnRhcmdldC5pZC5pbmNsdWRlcygndGl0bGUnKSkge1xuICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaG9pY2UoZSkge1xuICBsZXQgdGFzayA9IHRhc2tzLmZpbmQob2JqID0+IG9iai5pZCA9PSBlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKCdzdGFyJykpIHtcbiAgICB0YXNrLmlzUHJpb3JpdHkgPSBmYWxzZTtcbiAgfVxuICBpZiAoZS50YXJnZXQuaWQuaW5jbHVkZXMoJ3RpdGxlJykpIHtcbiAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94VGlja2VkKG5vZGUpIHtcbiAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlZCcpO1xuICBpZiAoQXJyYXkuZnJvbShub2RlLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3N0YXInKSkge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgneWVsbG93LXN0YXInKTtcbiAgfVxuICBpZiAoQXJyYXkuZnJvbShub2RlLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2NoZWNrbWFyaycpKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdncmVlbi1jaGVja21hcmsnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja2JveFVudGlja2VkKG5vZGUpIHtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdmYWRlZCcpO1xuICBpZiAoQXJyYXkuZnJvbShub2RlLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3N0YXInKSkge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgneWVsbG93LXN0YXInKTtcbiAgfVxuICBpZiAoQXJyYXkuZnJvbShub2RlLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2NoZWNrbWFyaycpKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbi1jaGVja21hcmsnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0QW5kSW5mb0xpc3RlbmVycygpIHtcblxuICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZXQtaWQnKTtcbiAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKVxuICB9KVxufVxuXG5mdW5jdGlvbiBzaG93TW9kYWwoZSkge1xuICBsZXQgdGFzayA9IHRhc2tzLmZpbmQob2JqID0+IG9iai5pZCA9PSBlLnRhcmdldC5kYXRhc2V0LmlkKTtcbiAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gJ2luZm8nKSB7XG4gICAgY29uc3QgaW5mb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tbW9kYWwtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby10aXRsZScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1wcmlvcml0eScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tcHJvamVjdCcpO1xuICAgIHRpdGxlLmFwcGVuZCh0YXNrLnRpdGxlKTtcbiAgICBkdWVEYXRlLmFwcGVuZCh0YXNrLmR1ZURhdGUpO1xuICAgIHByaW9yaXR5LmFwcGVuZCh0YXNrLmlzUHJpb3JpdHkgPyAnWWVzJyA6ICdObycpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZCh0YXNrLmRlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0LmFwcGVuZCh0YXNrLnByb2plY3QpO1xuICAgIGluZm9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBjbG9zZUluZm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1pbmZvLW1vZGFsJyk7XG4gICAgY2xvc2VJbmZvTW9kYWwub25jbGljayA9IGhpZGVJbmZvTW9kYWw7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgY29uc3QgZWRpdElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtaWQnKTtcbiAgICBlZGl0SWQuaW5uZXJUZXh0ID0gdGFzay5pZDtcbiAgICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tb2RhbC1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZScpO1xuICAgIHRpdGxlRWRpdC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgY29uc3QgZHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kYXRlJyk7XG4gICAgZHVlRGF0ZUVkaXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKTtcbiAgICBpZiAodGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICBwcmlvcml0eUVkaXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaW9yaXR5RWRpdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICBwcmlvcml0eUVkaXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgfVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAvLyBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgICBlZGl0UHJvamVjdE9wdGlvbnMoKTtcbiAgICBwcmVzZWxlY3RUYXNrUHJvamVjdCh0YXNrKTtcbiAgICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgY2xvc2VFZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtZWRpdC1tb2RhbCcpO1xuICAgIHRpdGxlRWRpdC5mb2N1cygpO1xuICAgIGNsb3NlRWRpdE1vZGFsLm9uY2xpY2sgPSBoaWRlRWRpdE1vZGFsO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoaWRlRWRpdE1vZGFsKCkge1xuICBjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tb2RhbC1jb250YWluZXInKTtcbiAgZWRpdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGhpZGVJbmZvTW9kYWwoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tdGl0bGUnKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRhdGUnKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1wcmlvcml0eScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1wcm9qZWN0Jyk7XG4gIHRpdGxlLmlubmVyVGV4dCA9IG51bGw7XG4gIGR1ZURhdGUuaW5uZXJUZXh0ID0gbnVsbDtcbiAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gbnVsbDtcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gbnVsbDtcbiAgcHJvamVjdC5pbm5lclRleHQgPSBudWxsO1xuICBjb25zdCBpbmZvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1tb2RhbC1jb250YWluZXInKTtcbiAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0T3B0aW9ucygpIHtcbiAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0T3B0aW9uID0gb3B0aW9uLmNsb25lTm9kZSgpO1xuICAgIGVkaXRQcm9qZWN0T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1vcHRpb24nKTtcbiAgICBlZGl0UHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0O1xuICAgIGVkaXRQcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICBjb25zdCBleGlzdGluZ09wdGlvbnMgPSBbXTtcbiAgICBBcnJheS5mcm9tKGVkaXRQcm9qZWN0LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZC52YWx1ZSkge1xuICAgICAgICBleGlzdGluZ09wdGlvbnMucHVzaChjaGlsZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFleGlzdGluZ09wdGlvbnMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgIGVkaXRQcm9qZWN0LmFwcGVuZChlZGl0UHJvamVjdE9wdGlvbik7XG4gICAgfVxuXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmVzZWxlY3RUYXNrUHJvamVjdCh0YXNrKSB7XG4gIGxldCBvcHRpb25TZXQgPSBmYWxzZTtcbiAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0Jyk7XG4gIEFycmF5LmZyb20oZWRpdFByb2plY3QuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGlmIChjaGlsZC52YWx1ZSAhPSB0YXNrLnByb2plY3QpIHtcbiAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnZhbHVlID09IHRhc2sucHJvamVjdCkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgb3B0aW9uU2V0ID0gdHJ1ZTtcbiAgICB9IFxuICBcbiAgfSlcbiAgaWYgKCFvcHRpb25TZXQpIHtcbiAgICBjb25zdCBlZGl0RGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZWZhdWx0LXByb2plY3QnKTtcbiAgICBlZGl0RGVmYXVsdFByb2plY3Quc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgdXBkYXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtdGFzaycpO1xuICB1cGRhdGVUYXNrQnRuLm9uY2xpY2sgPSB1cGRhdGVUYXNrO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKCkge1xuICBjb25zdCB0YXNrSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pZCcpO1xuICBjb25zdCBlZGl0ZWRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG4gIGNvbnN0IGVkaXRlZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kYXRlJyk7XG4gIGNvbnN0IGVkaXRlZFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHknKTtcbiAgY29uc3QgZWRpdGVkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgY29uc3QgZWRpdGVkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjcmlwdGlvbicpO1xuXG4gIGxldCB0YXNrID0gdGFza3MuZmluZChvYmogPT4gb2JqLmlkID09IHRhc2tJZC5pbm5lclRleHQpO1xuICBpZiAoZWRpdGVkVGl0bGUudmFsdWUpIHRhc2sudGl0bGUgPSBlZGl0ZWRUaXRsZS52YWx1ZTtcbiAgaWYgKGVkaXRlZERhdGUudmFsdWUpIHRhc2suZHVlRGF0ZSA9IGVkaXRlZERhdGUudmFsdWU7XG4gIHRhc2suaXNQcmlvcml0eSA9IGVkaXRlZFByaW9yaXR5LmNoZWNrZWQ7XG4gIGlmIChlZGl0ZWRQcm9qZWN0LnZhbHVlKSB0YXNrLnByb2plY3QgPSBlZGl0ZWRQcm9qZWN0LnZhbHVlO1xuICBpZiAoZWRpdGVkRGVzY3JpcHRpb24udmFsdWUpIHRhc2suZGVzY3JpcHRpb24gPSBlZGl0ZWREZXNjcmlwdGlvbi52YWx1ZTtcbiAgcmVwbGFjZVRhc2sodGFzayk7XG4gIGhpZGVFZGl0TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRhc2sodGFzaykge1xuICBjb25zdCB0YXNrVG9VcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXNrLmlkfWApO1xuICB0YXNrVG9VcGRhdGUucmVwbGFjZVdpdGgodGFza1RlbXBsYXRlKHRhc2spKTtcbiAgaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBpbXBvcnRhbnRGaWx0ZXJMaXN0ZW5lcigpIHtcbiAgY29uc3QgaW1wb3J0YW50RmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFudC1maWx0ZXInKTtcbiAgaW1wb3J0YW50RmlsdGVyLm9uY2xpY2sgPSBmaWx0ZXJCeUltcG9ydGFudDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlJbXBvcnRhbnQoKSB7XG4gIGNsZWFyVGFza3MoKTtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzIHVsIGxpJyk7XG4gIGNvbnN0IGZpbHRlckNyaXRlcmlhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1jcml0ZXJpYScpO1xuICBmaWx0ZXJDcml0ZXJpYS5pbm5lclRleHQgPSAnSW1wb3J0YW50JztcbiAgdGFza3NEaXNwbGF5ZWQuZm9yRWFjaCh0YXNrRGlzcGxheWVkID0+IHtcbiAgICBsZXQgY3VycmVudFRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrRGlzcGxheWVkLmlkKTtcbiAgICBpZiAoIWN1cnJlbnRUYXNrLmlzUHJpb3JpdHkpIHRhc2tEaXNwbGF5ZWQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBob21lRmlsdGVyTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGhvbWVGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1maWx0ZXInKTtcbiAgaG9tZUZpbHRlci5vbmNsaWNrID0gZGlzcGxheUFsbFRhc2tzO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gIGNvbnN0IGZpbHRlckNyaXRlcmlhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1jcml0ZXJpYScpO1xuICBmaWx0ZXJDcml0ZXJpYS5pbm5lclRleHQgPSAnSG9tZSc7XG4gIGNsZWFyVGFza3MoKTtcbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFzaykpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcyB1bCcpO1xuICBBcnJheS5mcm9tKHVsLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcbn1cblxuZnVuY3Rpb24gdG9kYXlGaWx0ZXJMaXN0ZW5lcigpIHtcbiAgY29uc3QgdG9kYXlGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZmlsdGVyJyk7XG4gIHRvZGF5RmlsdGVyLm9uY2xpY2sgPSBmaWx0ZXJCeVRvZGF5O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJCeVRvZGF5KCkge1xuICBjbGVhclRhc2tzKCk7XG4gIGRpc3BsYXlBbGxUYXNrcygpO1xuICBjb25zdCBmaWx0ZXJDcml0ZXJpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItY3JpdGVyaWEnKTtcbiAgZmlsdGVyQ3JpdGVyaWEuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlzRGF0ZSA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LSR7dG9kYXkuZ2V0RGF0ZSgpfWBcblxuICBjb25zdCB0YXNrc0Rpc3BsYXllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcyB1bCBsaScpO1xuICB0YXNrc0Rpc3BsYXllZC5mb3JFYWNoKHRhc2tEaXNwbGF5ZWQgPT4ge1xuICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IHRhc2tEaXNwbGF5ZWQuaWQpO1xuICAgIGlmIChjdXJyZW50VGFzay5kdWVEYXRlICE9IHRvZGF5c0RhdGUpIHRhc2tEaXNwbGF5ZWQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RmlsdGVyTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHByb2plY3RGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZWQtcHJvamVjdCcpO1xuICBwcm9qZWN0RmlsdGVycy5mb3JFYWNoKHByb2plY3RGaWx0ZXIgPT4ge1xuICAgIHByb2plY3RGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICAgICAgY29uc3QgdGFza3NEaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3MgdWwgbGknKTtcbiAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1jcml0ZXJpYScpO1xuICAgICAgZmlsdGVyQ3JpdGVyaWEuaW5uZXJUZXh0ID0gYCR7ZS50YXJnZXQuaW5uZXJUZXh0fWA7XG4gICAgICB0YXNrc0Rpc3BsYXllZC5mb3JFYWNoKHRhc2tEaXNwbGF5ZWQgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSB0YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrRGlzcGxheWVkLmlkKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrLnByb2plY3QgIT0gZS50YXJnZXQuaW5uZXJUZXh0KSB0YXNrRGlzcGxheWVkLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gdGFza0hlYWRlckxpc3RlbmVyKCkge1xuICBjb25zdCB0YXNrSGVhZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWhlYWRlcicpO1xuICB0YXNrSGVhZGVycy5mb3JFYWNoKHRhc2tIZWFkZXIgPT4gdGFza0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGxldCBrZXkgPSBlLnRhcmdldC5kYXRhc2V0LmtleTtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3QpO1xuICAgIGlmICgoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpKS5pbmNsdWRlcygnZGVzY2VuZGluZycpKSB7XG4gICAgICB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhW2Ake2tleX1gXSA8IGJbYCR7a2V5fWBdKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChiW2Ake2tleX1gXSA8IGFbYCR7a2V5fWBdKSByZXR1cm4gMTtcbiAgICAgIH0pXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjZW5kaW5nJyk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhc2NlbmRpbmcnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KSkuaW5jbHVkZXMoJ2FzY2VuZGluZycpKSB7XG4gICAgICB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhW2Ake2tleX1gXSA8IGJbYCR7a2V5fWBdKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGJbYCR7a2V5fWBdIDwgYVtgJHtrZXl9YF0pIHJldHVybiAtMTtcbiAgICAgIH0pXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhc2NlbmRpbmcnKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NlbmRpbmcnKTtcbiAgICB9XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgYXBwZW5kVGFza0xpc3QodGFza1RlbXBsYXRlKHRhc2spKTtcbiAgICB9KVxuICAgIHJlbW92ZVRhc2tMaXN0ZW5lcigpO1xuICAgIGVkaXRBbmRJbmZvTGlzdGVuZXJzKCk7XG4gICAgY2hlY2tib3hMaXN0ZW5lcnMoKTtcblxuICB9KSlcbn1cblxuXG5mdW5jdGlvbiBkZW1vKCkge1xuXG4gIGxldCB0YXNrMSA9IHtcbiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgIHRpdGxlOiAnV2FzaCBjYXInLFxuICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMi0xMC0yMicsXG4gICAgICAgICAgICAgIGlzUHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dheCBhbmQgcG9saXNoJyxcbiAgICAgICAgICAgICAgcHJvamVjdDogJycsXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfTtcblxuICBsZXQgdGFzazIgPSB7XG4gICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICB0aXRsZTogJ1BhaW50IGZlbmNlJyxcbiAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjItMTAtMjQnLFxuICAgICAgICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0dpdmUgMiBjb2F0cycsXG4gICAgICAgICAgICAgIHByb2plY3Q6ICdIb21lJyxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuXG4gIGxldCB0YXNrMyA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6ICdXYWxrIGRvZycsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMjAwMy0wMy0yMycsXG4gICAgICAgICAgICBpc1ByaW9yaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnR28gdG8gYmVhY2gnLFxuICAgICAgICAgICAgcHJvamVjdDogJycsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICBsZXQgdGFzazQgPSB7XG4gICAgICAgICAgICBpZDogNDcsXG4gICAgICAgICAgICB0aXRsZTogJ1dlaWdodCB0cmFpbmluZycsXG4gICAgICAgICAgICBkdWVEYXRlOiAnMjAyMi0xMC0yMicsXG4gICAgICAgICAgICBpc1ByaW9yaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2hlc3QgYW5kIHNob3VsZGVycycsXG4gICAgICAgICAgICBwcm9qZWN0OiAnRXhlcmNpc2UnLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICB9O1xuXG5cblxuICB0YXNrcy5wdXNoKHRhc2sxLCB0YXNrMiwgdGFzazMsIHRhc2s0KTtcbiAgYXBwZW5kVGFza0xpc3QodGFza1RlbXBsYXRlKHRhc2tzWzBdKSk7XG4gIGFwcGVuZFRhc2tMaXN0KHRhc2tUZW1wbGF0ZSh0YXNrc1sxXSkpO1xuICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFza3NbMl0pKTtcbiAgYXBwZW5kVGFza0xpc3QodGFza1RlbXBsYXRlKHRhc2tzWzNdKSk7XG59XG5cblxuZGVtbygpO1xuXG5pbml0aWFsaXplTGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=