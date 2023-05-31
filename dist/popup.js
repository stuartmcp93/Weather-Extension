/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@material-ui/core/esm/CardActions/CardActions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActions/CardActions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiCardActions'
})(CardActions));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Add.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Add.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/PictureInPicture.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/PictureInPicture.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"
}), 'PictureInPicture'));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/weatherCard/WeatherCard.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/weatherCard/WeatherCard.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wetaherCard-title {\n    font-size: 24px !important;\n}\n\n.weatherCard-body {\n    font-size: 16px !important;\n}\n\n.weatherCard-temp {\n    font-size: 46px !important;\n    text-align: center !important;\n}", "",{"version":3,"sources":["webpack://./src/components/weatherCard/WeatherCard.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,6BAA6B;AACjC","sourcesContent":[".wetaherCard-title {\n    font-size: 24px !important;\n}\n\n.weatherCard-body {\n    font-size: 16px !important;\n}\n\n.weatherCard-temp {\n    font-size: 46px !important;\n    text-align: center !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/weatherCardContainer/weatherCardContainer.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/weatherCardContainer/weatherCardContainer.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".weatherCardContainer-body {\n    font-size: 16px !important;\n}", "",{"version":3,"sources":["webpack://./src/components/weatherCardContainer/weatherCardContainer.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;AAC9B","sourcesContent":[".weatherCardContainer-body {\n    font-size: 16px !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f5f5f5;\n  width: 460px;\n  height: 512px;\n  font-family: 'Roboto';\n}\n", "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB","sourcesContent":["body {\n  background-color: #f5f5f5;\n  width: 460px;\n  height: 512px;\n  font-family: 'Roboto';\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/weatherCard/WeatherCard.css":
/*!****************************************************!*\
  !*** ./src/components/weatherCard/WeatherCard.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WeatherCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./WeatherCard.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/weatherCard/WeatherCard.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_WeatherCard_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_WeatherCard_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/weatherCardContainer/weatherCardContainer.css":
/*!**********************************************************************!*\
  !*** ./src/components/weatherCardContainer/weatherCardContainer.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherCardContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./weatherCardContainer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/weatherCardContainer/weatherCardContainer.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherCardContainer_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherCardContainer_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/weatherCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/weatherCard/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "WeatherCardContainer": () => (/* reexport safe */ _weatherCardContainer_WeatherCardContainer__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _weatherCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherCard */ "./src/components/weatherCard/weatherCard.tsx");
/* harmony import */ var _weatherCardContainer_WeatherCardContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weatherCardContainer/WeatherCardContainer */ "./src/components/weatherCardContainer/WeatherCardContainer.tsx");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_weatherCard__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/components/weatherCard/weatherCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/weatherCard/weatherCard.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _weatherCardContainer_WeatherCardContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherCardContainer/WeatherCardContainer */ "./src/components/weatherCardContainer/WeatherCardContainer.tsx");
/* harmony import */ var _WeatherCard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeatherCard.css */ "./src/components/weatherCard/WeatherCard.css");





const WeatherCard = ({ city, tempScale, onDelete, }) => {
    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [cardState, setCardState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchOpenWeatherData)(city, tempScale)
            .then((data) => {
            setWeatherData(data);
            setCardState('ready');
        })
            .catch((error) => {
            console.log(error);
            setCardState('error');
        });
    }, [city, tempScale]);
    if (cardState == 'loading' || cardState == 'error') {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_weatherCardContainer_WeatherCardContainer__WEBPACK_IMPORTED_MODULE_2__.default, { onDelete: onDelete },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weathercard-title" }, city),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weathercard-body" }, cardState == 'loading'
                ? 'Loading...'
                : 'Error: could not retreive weather data for this city.')));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_weatherCardContainer_WeatherCardContainer__WEBPACK_IMPORTED_MODULE_2__.default, { onDelete: onDelete },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, { container: true, justifyContent: "space-around" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weatherCard-title" }, weatherData.name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weatherCard-temp" }, Math.round(weatherData.main.temp)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weatherCard-body" },
                    "Feels like ",
                    Math.round(weatherData.main.feels_like))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, { item: true }, weatherData.weather.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getWeatherIconSrc)(weatherData.weather[0].icon) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, { className: "weatherCard-body" }, weatherData.weather[0].main)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCard);


/***/ }),

/***/ "./src/components/weatherCardContainer/WeatherCardContainer.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/weatherCardContainer/WeatherCardContainer.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardActions/CardActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _weatherCardContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCardContainer.css */ "./src/components/weatherCardContainer/weatherCardContainer.css");



const WeatherCardContainer = ({ children, onDelete, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, { mx: '4px', my: '16px' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null, children),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, null, onDelete && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, { color: "secondary", onClick: onDelete },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { className: "weatherCardContainer-body" }, "Delete")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCardContainer);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Add.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/PictureInPicture.js");
/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fontsource-roboto */ "./node_modules/fontsource-roboto/index.css");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _components_weatherCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/weatherCard */ "./src/components/weatherCard/index.tsx");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/messages */ "./src/utils/messages.ts");









const App = () => {
    const [cities, setCities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.getStoredCities)().then((cities) => setCities(cities));
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.getStoredOptions)().then((options) => setOptions(options));
    }, []);
    const [cityInput, setCityInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const handleCityButtonClick = () => {
        if (cityInput === '') {
            return;
        }
        const updatedCities = [...cities, cityInput];
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.setStoredCities)(updatedCities).then(() => {
            setCities(updatedCities);
            setCityInput('');
        });
    };
    const handleCityDeleteButtonClick = (index) => {
        cities.splice(index, 1);
        const updatedCities = [...cities];
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.setStoredCities)(updatedCities).then(() => {
            setCities(updatedCities);
        });
    };
    const handleTempScaleButtonClick = () => {
        const updateOptions = Object.assign(Object.assign({}, options), { tempScale: options.tempScale === 'metric' ? 'imperial' : 'metric' });
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.setStoredOptions)(updateOptions).then(() => {
            setOptions(updateOptions);
        });
    };
    const handleOverlayButtonClick = () => {
        chrome.tabs.query({
            active: true,
        }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, _utils_messages__WEBPACK_IMPORTED_MODULE_6__.Messages.TOGGLE_OVERLAY);
            }
        });
    };
    if (!options) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { mx: "8px", my: "16px" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, { container: true, justifyContent: "space-evenly" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { px: "15px", py: "5px" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, { placeholder: "Add a city name", value: cityInput, onChange: (event) => setCityInput(event.target.value) }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, { onClick: handleCityButtonClick },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__.default, null))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { py: "4px" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, { onClick: handleTempScaleButtonClick }, options.tempScale === 'metric' ? '\u2103' : '\u2109')))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, { item: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { py: "4px" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, { onClick: handleOverlayButtonClick },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_13__.default, null)))))),
        options.homeCity != '' && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_weatherCard__WEBPACK_IMPORTED_MODULE_4__.default, { city: options.homeCity, tempScale: options.tempScale })),
        cities.map((city, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_weatherCard__WEBPACK_IMPORTED_MODULE_4__.default, { city: city, tempScale: options.tempScale, key: index, onDelete: () => handleCityDeleteButtonClick(index) })))));
};
const root = document.createElement('div');
document.body.appendChild(root);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), root);


/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOpenWeatherData": () => (/* binding */ fetchOpenWeatherData),
/* harmony export */   "getWeatherIconSrc": () => (/* binding */ getWeatherIconSrc)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const OPEN_WEATHER_API_KEY = '638f948d0e20af77b71b9a15cf5795ec';
function fetchOpenWeatherData(city, tempScale) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempScale}&appid=${OPEN_WEATHER_API_KEY}`);
        if (!response.ok) {
            throw new Error('city not found');
        }
        const data = yield response.json();
        return data;
    });
}
function getWeatherIconSrc(iconcode) {
    return `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
}


/***/ }),

/***/ "./src/utils/messages.ts":
/*!*******************************!*\
  !*** ./src/utils/messages.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Messages": () => (/* binding */ Messages)
/* harmony export */ });
var Messages;
(function (Messages) {
    Messages[Messages["TOGGLE_OVERLAY"] = 0] = "TOGGLE_OVERLAY";
})(Messages || (Messages = {}));


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStoredCities": () => (/* binding */ setStoredCities),
/* harmony export */   "getStoredCities": () => (/* binding */ getStoredCities),
/* harmony export */   "setStoredOptions": () => (/* binding */ setStoredOptions),
/* harmony export */   "getStoredOptions": () => (/* binding */ getStoredOptions)
/* harmony export */ });
function setStoredCities(cities) {
    const values = {
        cities,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(values, () => {
            resolve();
        });
    });
}
function getStoredCities() {
    const keys = ["cities"];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (result) => {
            var _a;
            resolve((_a = result.cities) !== null && _a !== void 0 ? _a : []);
        });
    });
}
function setStoredOptions(options) {
    const values = {
        options,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(values, () => {
            resolve();
        });
    });
}
function getStoredOptions() {
    const keys = ['options'];
    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (res) => {
            resolve(res.options);
        });
    });
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_extension"] = self["webpackChunkweather_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material-ui_core_esm_Box_Box_js-node_modules_material-ui_core_esm_Button-e4dabe"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map