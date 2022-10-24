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




initializeListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0IsR0FBRyxxQkFBcUIsR0FBRyxnQkFBZ0I7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksVUFBVSxJQUFJO0FBQ25DLGlCQUFpQixJQUFJLFVBQVUsSUFBSTtBQUNuQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJLFVBQVUsSUFBSTtBQUNuQyxpQkFBaUIsSUFBSSxVQUFVLElBQUk7QUFDbkMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufSAqL1xcblxcbi8qIC50YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMTUwcHggMTUwcHggMjBweDtcXG59ICovXFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4jYWRkLXRhc2stbW9kYWwsICNpbmZvLW1vZGFsLCAjZWRpdC1tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY2xvc2UtdGFzay1tb2RhbCwgI2Nsb3NlLWluZm8tbW9kYWwsICNjbG9zZS1lZGl0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MgbGksICN0YXNrLWhlYWRlcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQ4cHggNDhweCA4MnB4IDQ4cHggNDhweDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrcyBpbWcsIC50YXNrcyBsYWJlbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcyBpbWc6aG92ZXIge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgb3BhY2l0eTogMC4xO1xcbn1cXG5cXG4uZ3JlZW4tY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDgsIDE2NSwgMTA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnllbGxvdy1zdGFyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMTIsIDE5MSwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGl0bGUtbGFiZWwsICN0aXRsZS1ibG9jayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaW5mby1tb2RhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxZnI7XFxufVxcblxcbiNlZGl0LW1vZGFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNlZGl0LWlkIHsgXFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLXRhc2stbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5saTpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG4jZWRpdC1tb2RhbCBsYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmZpbHRlciwgLnRhc2staGVhZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbHRlcjpob3ZlciwgLnRhc2staGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6cmdiKDEwOCwgMTY1LCAxMDgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOnJnYig3NCwgMTE0LCA3NClcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDZlbTtcXG59XFxuXFxubmF2IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkOyAgXFxuICBkaXNwbGF5OiA1cHg7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDNlbTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmNyZWF0ZWQtcHJvamVjdDpob3ZlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkZWZhdWx0LXZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggbWlubWF4KDUwMHB4LCAxMDAwcHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmaWx0ZXItY3JpdGVyaWEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG5cXG4uZnJhY3Rpb24ge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuI3Rhc2stdmlldyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jZWRpdC1wcmlvcml0eSB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiN1cGRhdGUtdGFzayB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI3Rhc2stcHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIgeyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBOzs7R0FHRzs7QUFFSDs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7RUFDNUMsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbURBQW1EO0VBQ25ELFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIGJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn0gKi9cXG5cXG4vKiAudGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDE1MHB4IDE1MHB4IDIwcHg7XFxufSAqL1xcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuI2FkZC10YXNrLW1vZGFsLCAjaW5mby1tb2RhbCwgI2VkaXQtbW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2Nsb3NlLXRhc2stbW9kYWwsICNjbG9zZS1pbmZvLW1vZGFsLCAjY2xvc2UtZWRpdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzIGxpLCAjdGFzay1oZWFkZXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0OHB4IDQ4cHggODJweCA0OHB4IDQ4cHg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFza3MgaW1nLCAudGFza3MgbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MgaW1nOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmZhZGVkIHtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLmdyZWVuLWNoZWNrbWFyayB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA4LCAxNjUsIDEwOCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi55ZWxsb3ctc3RhciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAxOTEsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRpdGxlLWxhYmVsLCAjdGl0bGUtYmxvY2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2luZm8tbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xcbn1cXG5cXG4jZWRpdC1tb2RhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jZWRpdC1pZCB7IFxcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZC10YXNrLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGk6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuI2VkaXQtbW9kYWwgbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMWZyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5maWx0ZXIsIC50YXNrLWhlYWRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maWx0ZXI6aG92ZXIsIC50YXNrLWhlYWRlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4uY3JlYXRlZC1wcm9qZWN0IHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOnJnYigxMDgsIDE2NSwgMTA4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDpyZ2IoNzQsIDExNCwgNzQpXFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiA2ZW07XFxufVxcblxcbm5hdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDsgIFxcbiAgZGlzcGxheTogNXB4O1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAzZW07XFxufVxcblxcbiNsb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZpbHRlcjpob3ZlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5jcmVhdGVkLXByb2plY3Q6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGVmYXVsdC12aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IG1pbm1heCg1MDBweCwgMTAwMHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZmlsdGVyLWNyaXRlcmlhIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZyYWN0aW9uIHtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbiN0YXNrLXZpZXcge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jdXBkYXRlLXRhc2sge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiN0YXNrLXByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0KCkge1xuICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbiAgLy8gY29ubnNvbGUubG9nKCdlcnJvcicpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHRlc3QgZnJvbSAnLi90ZXN0LmpzJztcbmltcG9ydCBjaGVjayBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY2hlY2sucG5nJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoZWNrbGlzdC5wbmcnO1xuaW1wb3J0IGJpbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnBuZyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZWRpdC5wbmcnO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2luZm8ucG5nJztcbmltcG9ydCBzdGFyIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zdGFyLnBuZyc7XG5cbnRlc3QoKTtcblxuY29uc3QgcHJvamVjdHMgPSBuZXcgU2V0KCk7XG5sZXQgdGFza3MgPSBbXTtcblxuXG5mdW5jdGlvbiBpbml0aWFsaXplTGlzdGVuZXJzKCkge1xuXG4gIG9wZW5UYXNrTW9kYWxMaXN0ZW5lcigpO1xuICBoaWRlVGFza01vZGFsTGlzdGVuZXIoKTtcbiAgYWRkVGFza0xpc3RlbmVyKCk7XG4gIGNsaWNrT3V0c2lkZVRhc2tNb2RhbCgpO1xuICBjbGlja091dHNpZGVJbmZvTW9kYWwoKTtcbiAgY2xpY2tPdXRzaWRlRWRpdE1vZGFsKClcbiAgY3JlYXRlUHJvamVjdExpc3RlbmVyKCk7XG4gIHJlbW92ZVRhc2tMaXN0ZW5lcigpO1xuICBjaGVja2JveExpc3RlbmVycygpO1xuICBlZGl0QW5kSW5mb0xpc3RlbmVycygpO1xuICB1cGRhdGVUYXNrTGlzdGVuZXIoKTtcbiAgaW1wb3J0YW50RmlsdGVyTGlzdGVuZXIoKTtcbiAgaG9tZUZpbHRlckxpc3RlbmVyKCk7XG4gIHRvZGF5RmlsdGVyTGlzdGVuZXIoKTtcbiAgdGFza0hlYWRlckxpc3RlbmVyKCk7XG5cbn1cblxuZnVuY3Rpb24gb3BlblRhc2tNb2RhbExpc3RlbmVyKCkge1xuICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrJyk7XG4gIGNyZWF0ZVRhc2sub25jbGljayA9IGRpc3BsYXlUYXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGhpZGVUYXNrTW9kYWxMaXN0ZW5lcigpIHtcbiAgY29uc3QgY2FuY2VsVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10YXNrLWJ0bicpO1xuICBjYW5jZWxUYXNrTW9kYWwub25jbGljayA9IGhpZGVUYXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW1vZGFsLWNvbnRhaW5lcicpO1xuICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS10YXNrLW1vZGFsJyk7XG4gIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY3JlYXRlUHJvamVjdE9wdGlvbnMoKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgdGFza1RpdGxlLmZvY3VzKCk7XG4gIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSBoaWRlVGFza01vZGFsO1xufVxuXG5mdW5jdGlvbiBoaWRlVGFza01vZGFsKCkge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbC1jb250YWluZXInKTtcbiAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNsZWFyVGFza01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcigpIHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idG4nKTtcbiAgYWRkVGFza0J0bi5vbmNsaWNrID0gZ2V0VGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKTtcblxuICBsZXQgdGFzayA9IHtcbiAgICBpZDogYXNzaWduVGFza0lkKCksXG4gICAgdGl0bGU6IHRhc2tUaXRsZS52YWx1ZSxcbiAgICBkdWVEYXRlOiB0YXNrRHVlRGF0ZS52YWx1ZSxcbiAgICBpc1ByaW9yaXR5OiB0YXNrUHJpb3JpdHkuY2hlY2tlZCxcbiAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgIHByb2plY3Q6IHRhc2tQcm9qZWN0LnZhbHVlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH1cbiAgaWYgKHRhc2sudGl0bGUgJiYgdGFzay5kdWVEYXRlKSB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFzaykpO1xuICB9XG4gIGhpZGVUYXNrTW9kYWwoKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza01vZGFsKCkge1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJvamVjdCcpO1xuXG4gIHRhc2tUaXRsZS52YWx1ZSA9IG51bGw7XG4gIHRhc2tEdWVEYXRlLnZhbHVlID0gbnVsbDtcbiAgdGFza1ByaW9yaXR5LmNoZWNrZWQgPSBudWxsO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBudWxsO1xuICB0YXNrUHJvamVjdC52YWx1ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNsaWNrT3V0c2lkZVRhc2tNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWxDb250YWluZXIub25jbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJykgaGlkZVRhc2tNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrT3V0c2lkZUluZm9Nb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWxDb250YWluZXIub25jbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJykgaGlkZUluZm9Nb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrT3V0c2lkZUVkaXRNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tb2RhbC1jb250YWluZXInKTtcbiAgbW9kYWxDb250YWluZXIub25jbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJykgaGlkZUVkaXRNb2RhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0ZW5lcigpIHtcbiAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1idG4nKTtcbiAgY3JlYXRlUHJvamVjdEJ0bi5vbmNsaWNrID0gY3JlYXRlUHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdHNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTm9kZScpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idG4nKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1wcm9qZWN0Jyk7XG4gIGFkZFByb2plY3RCdG4uYXBwZW5kKCdBREQgJyk7XG4gIHByb2plY3RzTm9kZS5hcHBlbmQobmV3UHJvamVjdCwgYWRkUHJvamVjdEJ0bik7XG4gIHJlbW92ZVByb2plY3RMaXN0ZW5lcigpO1xuICBuZXdQcm9qZWN0LmZvY3VzKCk7XG4gIGFkZFByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdExpc3RlbmVyKCkge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuICBjcmVhdGVQcm9qZWN0QnRuLm9uY2xpY2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0c05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNOb2RlJyk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdC52YWx1ZSAmJiAhKHByb2plY3RzLmhhcyhuZXdQcm9qZWN0LnZhbHVlKSkpIHtcbiAgICAgIHByb2plY3RzLmFkZChuZXdQcm9qZWN0LnZhbHVlKTtcbiAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0Tm9kZS5hcHBlbmQoYCR7bmV3UHJvamVjdC52YWx1ZX1gKTtcbiAgICAgIHByb2plY3ROb2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC0ke25ld1Byb2plY3QudmFsdWV9YCk7XG4gICAgICBwcm9qZWN0Tm9kZS5jbGFzc0xpc3QuYWRkKCdjcmVhdGVkLXByb2plY3QnLCAnZmlsdGVyJyk7XG4gICAgICBwcm9qZWN0c05vZGUuYXBwZW5kKHByb2plY3ROb2RlKTtcbiAgICB9XG4gICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcbiAgICBhZGRQcm9qZWN0QnRuLnJlbW92ZSgpO1xuICAgIGNyZWF0ZVByb2plY3RMaXN0ZW5lcigpO1xuICAgIHByb2plY3RGaWx0ZXJMaXN0ZW5lcigpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICBjb25zdCBvcHRpb25Ob2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICBsZXQgZXhpc3RpbmdPcHRpb25zID0gW107XG4gIEFycmF5LmZyb20ob3B0aW9uTm9kZXMpLmZvckVhY2gob3B0aW9uID0+IGV4aXN0aW5nT3B0aW9ucy5wdXNoKG9wdGlvbi5pbm5lclRleHQpKTtcbiAgcmV0dXJuIGV4aXN0aW5nT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE9wdGlvbnMoKSB7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJvamVjdCcpO1xuICBjb25zdCBvcHRpb25zID0gZ2V0T3B0aW9ucygpO1xuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIGlmICghb3B0aW9ucy5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcbiAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QpO1xuICAgICAgcHJvamVjdE9wdGlvbi5hcHBlbmQocHJvamVjdCk7XG4gICAgICB0YXNrUHJvamVjdC5hcHBlbmQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXRhc2snKTtcbiAgcmVtb3ZlQnRucy5mb3JFYWNoKHJlbW92ZUJ0biA9PiB7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICByZW1vdmVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgbGV0IHRhc2sgPSB0YXNrcy5maW5kKG9iaiA9PiBvYmouaWQgPT0gZS50YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihlbGUgPT4gZWxlICE9PSB0YXNrKTtcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKG5vZGUpIHtcbiAgbm9kZS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduVGFza0lkKCkge1xuICBsZXQgaWRzID0gQXJyYXkuZnJvbSh0YXNrcywgdGFzayA9PiB0YXNrLmlkKTtcbiAgbGV0IGhpZ2hlc3RJZCA9IE1hdGgubWF4KC4uLmlkcyk7XG4gIGlmIChoaWdoZXN0SWQgPD0gMCkgcmV0dXJuIDE7XG4gIGVsc2UgcmV0dXJuIGhpZ2hlc3RJZCArIDE7XG59XG5cbmZ1bmN0aW9uIHRhc2tUZW1wbGF0ZSh0YXNrKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgY2hlY2tib3gxID0gaW5wdXQuY2xvbmVOb2RlKCk7XG4gIGNoZWNrYm94MS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRpdGxlLWNiLSR7dGFzay5pZH1gKTtcbiAgY2hlY2tib3gxLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIGNvbnN0IGNoZWNrYm94SW1nID0gaW1nLmNsb25lTm9kZSgpO1xuICBjaGVja2JveEltZy5zcmMgPSBjaGVjaztcbiAgY2hlY2tib3hJbWcuY2xhc3NMaXN0LmFkZCgnZmFkZWQnLCAnY2hlY2ttYXJrJyk7XG4gIGNvbnN0IHRlbXBsYXRlVGl0bGUgPSBkaXYuY2xvbmVOb2RlKCk7XG4gIHRlbXBsYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnZnJhY3Rpb24nKTtcbiAgdGVtcGxhdGVUaXRsZS5hcHBlbmQoYCR7dGFzay50aXRsZX1gKTtcbiAgY29uc3QgdGVtcGxhdGVQcm9qZWN0ID0gZGl2LmNsb25lTm9kZSgpO1xuICB0ZW1wbGF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnZnJhY3Rpb24nKTtcbiAgdGVtcGxhdGVQcm9qZWN0LmFwcGVuZChgJHt0YXNrLnByb2plY3R9YCk7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBsYWJlbC5jbG9uZU5vZGUoKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0aXRsZS1jYi0ke3Rhc2suaWR9YCk7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7dGFzay5pZH1gKTtcbiAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1sYWJlbCcpO1xuICB0aXRsZUxhYmVsLmFwcGVuZChjaGVja2JveDEsIGNoZWNrYm94SW1nLCB0ZW1wbGF0ZVRpdGxlLCB0ZW1wbGF0ZVByb2plY3QpO1xuXG4gIGNvbnN0IGNoZWNrYm94MiA9IGlucHV0LmNsb25lTm9kZSgpO1xuICBjaGVja2JveDIuc2V0QXR0cmlidXRlKCdpZCcsIGBzdGFyLWNiLSR7dGFzay5pZH1gKTtcbiAgY2hlY2tib3gyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIGNvbnN0IHN0YXJJbWcgPSBpbWcuY2xvbmVOb2RlKCk7XG4gIHN0YXJJbWcuc3JjID0gc3RhcjtcbiAgc3RhckltZy5jbGFzc0xpc3QuYWRkKCdmYWRlZCcsICdzdGFyJyk7XG4gIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICBjaGVja2JveFRpY2tlZChzdGFySW1nKTtcbiAgICBjaGVja2JveDIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XG4gIH1cbiAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgY2hlY2tib3hUaWNrZWQoY2hlY2tib3hJbWcpO1xuICAgIGNoZWNrYm94MS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgfVxuICBjb25zdCBzdGFyTGFiZWwgPSBsYWJlbC5jbG9uZU5vZGUoKTtcbiAgc3RhckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHN0YXItY2ItJHt0YXNrLmlkfWApO1xuICBzdGFyTGFiZWwuYXBwZW5kKGNoZWNrYm94Miwgc3RhckltZyk7XG5cbiAgY29uc3QgaW5mb0ltZyA9IGltZy5jbG9uZU5vZGUoKTtcbiAgaW5mb0ltZy5zcmMgPSBpbmZvO1xuICBpbmZvSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIGluZm9JbWcuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnaW5mbycpO1xuICBpbmZvSW1nLmNsYXNzTGlzdC5hZGQoJ2dldC1pZCcpO1xuICBjb25zdCB0ZW1wbGF0ZURhdGUgPSBkaXYuY2xvbmVOb2RlKCk7XG4gIHRlbXBsYXRlRGF0ZS5hcHBlbmQoYCR7dGFzay5kdWVEYXRlfWApO1xuICBjb25zdCBlZGl0SW1nID0gaW1nLmNsb25lTm9kZSgpO1xuICBlZGl0SW1nLnNyYyA9IGVkaXQ7XG4gIGVkaXRJbWcuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7dGFzay5pZH1gKTtcbiAgZWRpdEltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdlZGl0Jyk7XG4gIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnZ2V0LWlkJyk7XG4gIGNvbnN0IGRlbGV0ZUltZyA9IGltZy5jbG9uZU5vZGUoKTtcbiAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVtb3ZlLXRhc2snKTtcbiAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3Rhc2suaWR9YCk7XG4gIGRlbGV0ZUltZy5zcmMgPSBiaW47XG5cbiAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2suaWR9YCk7XG4gIGxpLmFwcGVuZCh0aXRsZUxhYmVsLCBzdGFyTGFiZWwsIGluZm9JbWcsIHRlbXBsYXRlRGF0ZSwgZWRpdEltZywgZGVsZXRlSW1nKTtcbiAgXG4gIC8vIGFwcGVuZFRhc2tMaXN0KGxpKTtcbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUYXNrTGlzdCh0YXNrKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHVsJyk7XG4gIHVsLmFwcGVuZCh0YXNrKTtcbiAgLy8gaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuICByZW1vdmVUYXNrTGlzdGVuZXIoKTtcbiAgZWRpdEFuZEluZm9MaXN0ZW5lcnMoKTtcbiAgY2hlY2tib3hMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tib3hMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3MgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGNoZWNrYm94VGlja2VkKGUudGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgY29uZmlybUNob2ljZShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94VW50aWNrZWQoZS50YXJnZXQubmV4dFNpYmxpbmcpO1xuICAgICAgICByZW1vdmVDaG9pY2UoZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY29uZmlybUNob2ljZShlKSB7XG4gIGxldCB0YXNrID0gdGFza3MuZmluZChvYmogPT4gb2JqLmlkID09IGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICBpZiAoZS50YXJnZXQuaWQuaW5jbHVkZXMoJ3N0YXInKSkge1xuICAgIHRhc2suaXNQcmlvcml0eSA9IHRydWU7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKCd0aXRsZScpKSB7XG4gICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNob2ljZShlKSB7XG4gIGxldCB0YXNrID0gdGFza3MuZmluZChvYmogPT4gb2JqLmlkID09IGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICBpZiAoZS50YXJnZXQuaWQuaW5jbHVkZXMoJ3N0YXInKSkge1xuICAgIHRhc2suaXNQcmlvcml0eSA9IGZhbHNlO1xuICB9XG4gIGlmIChlLnRhcmdldC5pZC5pbmNsdWRlcygndGl0bGUnKSkge1xuICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tib3hUaWNrZWQobm9kZSkge1xuICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVkJyk7XG4gIGlmIChBcnJheS5mcm9tKG5vZGUuY2xhc3NMaXN0KS5pbmNsdWRlcygnc3RhcicpKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCd5ZWxsb3ctc3RhcicpO1xuICB9XG4gIGlmIChBcnJheS5mcm9tKG5vZGUuY2xhc3NMaXN0KS5pbmNsdWRlcygnY2hlY2ttYXJrJykpIHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLWNoZWNrbWFyaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94VW50aWNrZWQobm9kZSkge1xuICBub2RlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVkJyk7XG4gIGlmIChBcnJheS5mcm9tKG5vZGUuY2xhc3NMaXN0KS5pbmNsdWRlcygnc3RhcicpKSB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3ctc3RhcicpO1xuICB9XG4gIGlmIChBcnJheS5mcm9tKG5vZGUuY2xhc3NMaXN0KS5pbmNsdWRlcygnY2hlY2ttYXJrJykpIHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuLWNoZWNrbWFyaycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRBbmRJbmZvTGlzdGVuZXJzKCkge1xuXG4gIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdldC1pZCcpO1xuICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dNb2RhbChlKSB7XG4gIGxldCB0YXNrID0gdGFza3MuZmluZChvYmogPT4gb2JqLmlkID09IGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICBpZiAoZS50YXJnZXQuZGF0YXNldC50eXBlID09PSAnaW5mbycpIHtcbiAgICBjb25zdCBpbmZvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1tb2RhbC1jb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLXRpdGxlJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1wcm9qZWN0Jyk7XG4gICAgdGl0bGUuYXBwZW5kKHRhc2sudGl0bGUpO1xuICAgIGR1ZURhdGUuYXBwZW5kKHRhc2suZHVlRGF0ZSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kKHRhc2suaXNQcmlvcml0eSA/ICdZZXMnIDogJ05vJyk7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kKHRhc2suZGVzY3JpcHRpb24pO1xuICAgIHByb2plY3QuYXBwZW5kKHRhc2sucHJvamVjdCk7XG4gICAgaW5mb01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNsb3NlSW5mb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWluZm8tbW9kYWwnKTtcbiAgICBjbG9zZUluZm9Nb2RhbC5vbmNsaWNrID0gaGlkZUluZm9Nb2RhbDtcbiAgfVxuICBpZiAoZS50YXJnZXQuZGF0YXNldC50eXBlID09PSAnZWRpdCcpIHtcbiAgICBjb25zdCBlZGl0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1pZCcpO1xuICAgIGVkaXRJZC5pbm5lclRleHQgPSB0YXNrLmlkO1xuICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1vZGFsLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlJyk7XG4gICAgdGl0bGVFZGl0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBjb25zdCBkdWVEYXRlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRhdGUnKTtcbiAgICBkdWVEYXRlRWRpdC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBjb25zdCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eScpO1xuICAgIGlmICh0YXNrLmlzUHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5RWRpdC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpb3JpdHlFZGl0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgIHByaW9yaXR5RWRpdC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICB9XG4gICAgY29uc3QgZGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkVkaXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIC8vIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRQcm9qZWN0T3B0aW9ucygpO1xuICAgIHByZXNlbGVjdFRhc2tQcm9qZWN0KHRhc2spO1xuICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBjbG9zZUVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1lZGl0LW1vZGFsJyk7XG4gICAgdGl0bGVFZGl0LmZvY3VzKCk7XG4gICAgY2xvc2VFZGl0TW9kYWwub25jbGljayA9IGhpZGVFZGl0TW9kYWw7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhpZGVFZGl0TW9kYWwoKSB7XG4gIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1vZGFsLWNvbnRhaW5lcicpO1xuICBlZGl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gaGlkZUluZm9Nb2RhbCgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby10aXRsZScpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGF0ZScpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLXByaW9yaXR5Jyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLXByb2plY3QnKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbnVsbDtcbiAgZHVlRGF0ZS5pbm5lclRleHQgPSBudWxsO1xuICBwcmlvcml0eS5pbm5lclRleHQgPSBudWxsO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBudWxsO1xuICBwcm9qZWN0LmlubmVyVGV4dCA9IG51bGw7XG4gIGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLW1vZGFsLWNvbnRhaW5lcicpO1xuICBpbmZvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3RPcHRpb25zKCkge1xuICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgZWRpdFByb2plY3RPcHRpb24gPSBvcHRpb24uY2xvbmVOb2RlKCk7XG4gICAgZWRpdFByb2plY3RPcHRpb24uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LW9wdGlvbicpO1xuICAgIGVkaXRQcm9qZWN0T3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3Q7XG4gICAgZWRpdFByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgIGNvbnN0IGV4aXN0aW5nT3B0aW9ucyA9IFtdO1xuICAgIEFycmF5LmZyb20oZWRpdFByb2plY3QuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLnZhbHVlKSB7XG4gICAgICAgIGV4aXN0aW5nT3B0aW9ucy5wdXNoKGNoaWxkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWV4aXN0aW5nT3B0aW9ucy5pbmNsdWRlcyhwcm9qZWN0KSkge1xuICAgICAgZWRpdFByb2plY3QuYXBwZW5kKGVkaXRQcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByZXNlbGVjdFRhc2tQcm9qZWN0KHRhc2spIHtcbiAgbGV0IG9wdGlvblNldCA9IGZhbHNlO1xuICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QnKTtcbiAgQXJyYXkuZnJvbShlZGl0UHJvamVjdC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgaWYgKGNoaWxkLnZhbHVlICE9IHRhc2sucHJvamVjdCkge1xuICAgICAgY2hpbGQucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQudmFsdWUgPT0gdGFzay5wcm9qZWN0KSB7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICBvcHRpb25TZXQgPSB0cnVlO1xuICAgIH0gXG4gIFxuICB9KVxuICBpZiAoIW9wdGlvblNldCkge1xuICAgIGNvbnN0IGVkaXREZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlZmF1bHQtcHJvamVjdCcpO1xuICAgIGVkaXREZWZhdWx0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0xpc3RlbmVyKCkge1xuICBjb25zdCB1cGRhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS10YXNrJyk7XG4gIHVwZGF0ZVRhc2tCdG4ub25jbGljayA9IHVwZGF0ZVRhc2s7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2soKSB7XG4gIGNvbnN0IHRhc2tJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWlkJyk7XG4gIGNvbnN0IGVkaXRlZFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUnKTtcbiAgY29uc3QgZWRpdGVkRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRhdGUnKTtcbiAgY29uc3QgZWRpdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eScpO1xuICBjb25zdCBlZGl0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdCcpO1xuICBjb25zdCBlZGl0ZWREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uJyk7XG5cbiAgbGV0IHRhc2sgPSB0YXNrcy5maW5kKG9iaiA9PiBvYmouaWQgPT0gdGFza0lkLmlubmVyVGV4dCk7XG4gIGlmIChlZGl0ZWRUaXRsZS52YWx1ZSkgdGFzay50aXRsZSA9IGVkaXRlZFRpdGxlLnZhbHVlO1xuICBpZiAoZWRpdGVkRGF0ZS52YWx1ZSkgdGFzay5kdWVEYXRlID0gZWRpdGVkRGF0ZS52YWx1ZTtcbiAgdGFzay5pc1ByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHkuY2hlY2tlZDtcbiAgaWYgKGVkaXRlZFByb2plY3QudmFsdWUpIHRhc2sucHJvamVjdCA9IGVkaXRlZFByb2plY3QudmFsdWU7XG4gIGlmIChlZGl0ZWREZXNjcmlwdGlvbi52YWx1ZSkgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRlZERlc2NyaXB0aW9uLnZhbHVlO1xuICByZXBsYWNlVGFzayh0YXNrKTtcbiAgaGlkZUVkaXRNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tUb1VwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2suaWR9YCk7XG4gIHRhc2tUb1VwZGF0ZS5yZXBsYWNlV2l0aCh0YXNrVGVtcGxhdGUodGFzaykpO1xuICBpbml0aWFsaXplTGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIGltcG9ydGFudEZpbHRlckxpc3RlbmVyKCkge1xuICBjb25zdCBpbXBvcnRhbnRGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW50LWZpbHRlcicpO1xuICBpbXBvcnRhbnRGaWx0ZXIub25jbGljayA9IGZpbHRlckJ5SW1wb3J0YW50O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJCeUltcG9ydGFudCgpIHtcbiAgY2xlYXJUYXNrcygpO1xuICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgY29uc3QgdGFza3NEaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3MgdWwgbGknKTtcbiAgY29uc3QgZmlsdGVyQ3JpdGVyaWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWNyaXRlcmlhJyk7XG4gIGZpbHRlckNyaXRlcmlhLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQnO1xuICB0YXNrc0Rpc3BsYXllZC5mb3JFYWNoKHRhc2tEaXNwbGF5ZWQgPT4ge1xuICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IHRhc2tEaXNwbGF5ZWQuaWQpO1xuICAgIGlmICghY3VycmVudFRhc2suaXNQcmlvcml0eSkgdGFza0Rpc3BsYXllZC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhvbWVGaWx0ZXJMaXN0ZW5lcigpIHtcbiAgY29uc3QgaG9tZUZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWZpbHRlcicpO1xuICBob21lRmlsdGVyLm9uY2xpY2sgPSBkaXNwbGF5QWxsVGFza3M7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgY29uc3QgZmlsdGVyQ3JpdGVyaWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWNyaXRlcmlhJyk7XG4gIGZpbHRlckNyaXRlcmlhLmlubmVyVGV4dCA9ICdIb21lJztcbiAgY2xlYXJUYXNrcygpO1xuICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGFwcGVuZFRhc2tMaXN0KHRhc2tUZW1wbGF0ZSh0YXNrKSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIHVsJyk7XG4gIEFycmF5LmZyb20odWwuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xufVxuXG5mdW5jdGlvbiB0b2RheUZpbHRlckxpc3RlbmVyKCkge1xuICBjb25zdCB0b2RheUZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1maWx0ZXInKTtcbiAgdG9kYXlGaWx0ZXIub25jbGljayA9IGZpbHRlckJ5VG9kYXk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckJ5VG9kYXkoKSB7XG4gIGNsZWFyVGFza3MoKTtcbiAgZGlzcGxheUFsbFRhc2tzKCk7XG4gIGNvbnN0IGZpbHRlckNyaXRlcmlhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1jcml0ZXJpYScpO1xuICBmaWx0ZXJDcml0ZXJpYS5pbm5lclRleHQgPSAnVG9kYXknO1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheXNEYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHt0b2RheS5nZXRNb250aCgpICsgMX0tJHt0b2RheS5nZXREYXRlKCl9YFxuXG4gIGNvbnN0IHRhc2tzRGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzIHVsIGxpJyk7XG4gIHRhc2tzRGlzcGxheWVkLmZvckVhY2godGFza0Rpc3BsYXllZCA9PiB7XG4gICAgbGV0IGN1cnJlbnRUYXNrID0gdGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0Rpc3BsYXllZC5pZCk7XG4gICAgaWYgKGN1cnJlbnRUYXNrLmR1ZURhdGUgIT0gdG9kYXlzRGF0ZSkgdGFza0Rpc3BsYXllZC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RGaWx0ZXJMaXN0ZW5lcigpIHtcbiAgY29uc3QgcHJvamVjdEZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlZC1wcm9qZWN0Jyk7XG4gIHByb2plY3RGaWx0ZXJzLmZvckVhY2gocHJvamVjdEZpbHRlciA9PiB7XG4gICAgcHJvamVjdEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICBjb25zdCB0YXNrc0Rpc3BsYXllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcyB1bCBsaScpO1xuICAgICAgY29uc3QgZmlsdGVyQ3JpdGVyaWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWNyaXRlcmlhJyk7XG4gICAgICBmaWx0ZXJDcml0ZXJpYS5pbm5lclRleHQgPSBgJHtlLnRhcmdldC5pbm5lclRleHR9YDtcbiAgICAgIHRhc2tzRGlzcGxheWVkLmZvckVhY2godGFza0Rpc3BsYXllZCA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50VGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IHRhc2tEaXNwbGF5ZWQuaWQpO1xuICAgICAgICBpZiAoY3VycmVudFRhc2sucHJvamVjdCAhPSBlLnRhcmdldC5pbm5lclRleHQpIHRhc2tEaXNwbGF5ZWQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiB0YXNrSGVhZGVyTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHRhc2tIZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staGVhZGVyJyk7XG4gIHRhc2tIZWFkZXJzLmZvckVhY2godGFza0hlYWRlciA9PiB0YXNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgbGV0IGtleSA9IGUudGFyZ2V0LmRhdGFzZXQua2V5O1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsYXNzTGlzdCk7XG4gICAgaWYgKChBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkpLmluY2x1ZGVzKCdkZXNjZW5kaW5nJykpIHtcbiAgICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGFbYCR7a2V5fWBdIDwgYltgJHtrZXl9YF0pIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGJbYCR7a2V5fWBdIDwgYVtgJHtrZXl9YF0pIHJldHVybiAxO1xuICAgICAgfSlcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Rlc2NlbmRpbmcnKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FzY2VuZGluZycpO1xuICAgIH1cbiAgICBlbHNlIGlmICgoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpKS5pbmNsdWRlcygnYXNjZW5kaW5nJykpIHtcbiAgICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGFbYCR7a2V5fWBdIDwgYltgJHtrZXl9YF0pIHJldHVybiAxO1xuICAgICAgICBpZiAoYltgJHtrZXl9YF0gPCBhW2Ake2tleX1gXSkgcmV0dXJuIC0xO1xuICAgICAgfSlcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FzY2VuZGluZycpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGVzY2VuZGluZycpO1xuICAgIH1cbiAgICBjbGVhclRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFzaykpO1xuICAgIH0pXG4gICAgcmVtb3ZlVGFza0xpc3RlbmVyKCk7XG4gICAgZWRpdEFuZEluZm9MaXN0ZW5lcnMoKTtcbiAgICBjaGVja2JveExpc3RlbmVycygpO1xuXG4gIH0pKVxufVxuXG5cbmZ1bmN0aW9uIGRlbW8oKSB7XG5cbiAgbGV0IHRhc2sxID0ge1xuICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgdGl0bGU6ICdXYXNoIGNhcicsXG4gICAgICAgICAgICAgIGR1ZURhdGU6ICcyMDIyLTEwLTIyJyxcbiAgICAgICAgICAgICAgaXNQcmlvcml0eTogZmFsc2UsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2F4IGFuZCBwb2xpc2gnLFxuICAgICAgICAgICAgICBwcm9qZWN0OiAnJyxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9O1xuXG4gIGxldCB0YXNrMiA9IHtcbiAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgIHRpdGxlOiAnUGFpbnQgZmVuY2UnLFxuICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMi0xMC0yNCcsXG4gICAgICAgICAgICAgIGlzUHJpb3JpdHk6IHRydWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnR2l2ZSAyIGNvYXRzJyxcbiAgICAgICAgICAgICAgcHJvamVjdDogJ0hvbWUnLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG5cbiAgbGV0IHRhc2szID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ1dhbGsgZG9nJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICcyMDAzLTAzLTIzJyxcbiAgICAgICAgICAgIGlzUHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdHbyB0byBiZWFjaCcsXG4gICAgICAgICAgICBwcm9qZWN0OiAnJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gIGxldCB0YXNrNCA9IHtcbiAgICAgICAgICAgIGlkOiA0NyxcbiAgICAgICAgICAgIHRpdGxlOiAnV2VpZ2h0IHRyYWluaW5nJyxcbiAgICAgICAgICAgIGR1ZURhdGU6ICcyMDIyLTEwLTIyJyxcbiAgICAgICAgICAgIGlzUHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaGVzdCBhbmQgc2hvdWxkZXJzJyxcbiAgICAgICAgICAgIHByb2plY3Q6ICdFeGVyY2lzZScsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIH07XG5cblxuXG4gIHRhc2tzLnB1c2godGFzazEsIHRhc2syLCB0YXNrMywgdGFzazQpO1xuICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFza3NbMF0pKTtcbiAgYXBwZW5kVGFza0xpc3QodGFza1RlbXBsYXRlKHRhc2tzWzFdKSk7XG4gIGFwcGVuZFRhc2tMaXN0KHRhc2tUZW1wbGF0ZSh0YXNrc1syXSkpO1xuICBhcHBlbmRUYXNrTGlzdCh0YXNrVGVtcGxhdGUodGFza3NbM10pKTtcbn1cblxuXG5cblxuaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9