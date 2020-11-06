webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var components_FormsV3_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FormsV3/Button/Button */ \"./src/components/FormsV3/Button/Button.js\");\n/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Image */ \"./src/components/Image/index.js\");\n/* harmony import */ var constants_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/images */ \"./src/constants/images/index.js\");\n/* harmony import */ var constants_urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! constants/urls */ \"./src/constants/urls.js\");\n/* harmony import */ var actions_authModalsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/authModalsActions */ \"./src/actions/authModalsActions.js\");\n/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserInfo */ \"./src/components/NavBar/UserInfo/index.js\");\n/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavBar.module.scss */ \"./src/components/NavBar/NavBar.module.scss\");\n/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\nvar _jsxFileName = \"/Users/wilson/PolicyPal/Moneybag/src/components/NavBar/NavBar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar logo = Object(constants_images__WEBPACK_IMPORTED_MODULE_8__[\"getImage\"])('policypal.logo');\nvar logoIcon = Object(constants_images__WEBPACK_IMPORTED_MODULE_8__[\"getImage\"])('policypal.logo_icon');\n\nvar NavBar = function NavBar() {\n  _s();\n\n  var userDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.userDetails.data;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])(); // const [isOpen, setIsOpen] = useState(false);\n  // const toggle = () => setIsOpen(!isOpen);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.nav,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n      color: \"white\",\n      light: true,\n      expand: \"md\",\n      fixed: \"top\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: constants_urls__WEBPACK_IMPORTED_MODULE_9__[\"default\"].home.url,\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          className: ['d-block d-sm-block', 'navbar-brand', _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.navBrand].join(' '),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_Image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _objectSpread({}, logo), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Nav\"], {\n        className: \"mr-auto\",\n        navbar: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), userDetails ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_UserInfo__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_FormsV3_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"] // gtmData={gtmTracker.MONEYBAG_HELP_OPEN}\n      , {\n        variant: \"medium-outline-orange\",\n        height: 42,\n        width: 120,\n        onClick: function onClick() {\n          return dispatch(Object(actions_authModalsActions__WEBPACK_IMPORTED_MODULE_10__[\"callModalLogin\"])());\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"Login\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavBar, \"jRXUzLqA5uFv6/Z8HnVOEwynJFI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(NavBar));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcz85NmNiIl0sIm5hbWVzIjpbImxvZ28iLCJnZXRJbWFnZSIsImxvZ29JY29uIiwiTmF2QmFyIiwidXNlckRldGFpbHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzdHlsZXMiLCJuYXYiLCJ1cmxzIiwiaG9tZSIsInVybCIsIm5hdkJyYW5kIiwiam9pbiIsImNhbGxNb2RhbExvZ2luIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLGlFQUFRLENBQUMsZ0JBQUQsQ0FBckI7QUFDQSxJQUFNQyxRQUFRLEdBQUdELGlFQUFRLENBQUMscUJBQUQsQ0FBekI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxXQUFXLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsV0FBTixDQUFrQkcsSUFBN0I7QUFBQSxHQUFELENBQS9CO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUZtQixDQUduQjtBQUNBOztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyREFBTSxDQUFDQyxHQUF2QjtBQUFBLDJCQUNFLHFFQUFDLGlEQUFEO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBc0IsV0FBSyxNQUEzQjtBQUE0QixZQUFNLEVBQUMsSUFBbkM7QUFBd0MsV0FBSyxFQUFDLEtBQTlDO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVDLHNEQUFJLENBQUNDLElBQUwsQ0FBVUMsR0FBdEI7QUFBMkIsZ0JBQVEsTUFBbkM7QUFBQSwrQkFFRTtBQUFHLG1CQUFTLEVBQUUsQ0FBQyxvQkFBRCxFQUF1QixjQUF2QixFQUF1Q0osMkRBQU0sQ0FBQ0ssUUFBOUMsRUFBd0RDLElBQXhELENBQTZELEdBQTdELENBQWQ7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRCxvQkFBV2hCLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyw4Q0FBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixjQUFNO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQVVJSSxXQUFXLGdCQUNULHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUyxnQkFJUCxxRUFBQyx3RUFBRCxDQUNFO0FBREY7QUFFRSxlQUFPLEVBQUMsdUJBRlY7QUFHRSxjQUFNLEVBQUUsRUFIVjtBQUlFLGFBQUssRUFBRSxHQUpUO0FBS0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQ1MsaUZBQWMsRUFBZixDQUFkO0FBQUEsU0FMWDtBQUFBLCtCQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXBDRDs7R0FBTWQsTTtVQUNnQkUsdUQsRUFDSEksdUQ7OztLQUZiTixNO0FBc0NTLGtGQUFBZSw0Q0FBSyxDQUFDQyxJQUFOLENBQVdoQixNQUFYLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICAvLyBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICAvLyBOYXZiYXJUb2dnbGVyLFxuICBOYXYsXG4gIC8vIE5hdkl0ZW0sXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvRm9ybXNWMy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL0ltYWdlJztcbmltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnY29uc3RhbnRzL2ltYWdlcyc7XG5pbXBvcnQgdXJscyBmcm9tICdjb25zdGFudHMvdXJscyc7XG5cbmltcG9ydCB7IGNhbGxNb2RhbExvZ2luIH0gZnJvbSAnYWN0aW9ucy9hdXRoTW9kYWxzQWN0aW9ucyc7XG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi9Vc2VySW5mbyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBsb2dvID0gZ2V0SW1hZ2UoJ3BvbGljeXBhbC5sb2dvJyk7XG5jb25zdCBsb2dvSWNvbiA9IGdldEltYWdlKCdwb2xpY3lwYWwubG9nb19pY29uJyk7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgdXNlckRldGFpbHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJEZXRhaWxzLmRhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxOYXZiYXIgY29sb3I9XCJ3aGl0ZVwiIGxpZ2h0IGV4cGFuZD1cIm1kXCIgZml4ZWQ9XCJ0b3BcIj5cbiAgICAgICAgPExpbmsgaHJlZj17dXJscy5ob21lLnVybH0gcGFzc0hyZWY+XG4gICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL31cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e1snZC1ibG9jayBkLXNtLWJsb2NrJywgJ25hdmJhci1icmFuZCcsIHN0eWxlcy5uYXZCcmFuZF0uam9pbignICcpfT5cbiAgICAgICAgICAgIDxJbWFnZSB7Li4ubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXIgLz5cbiAgICAgICAge1xuICAgICAgICAgIHVzZXJEZXRhaWxzID8gKFxuICAgICAgICAgICAgPFVzZXJJbmZvIC8+XG4gICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAvLyBndG1EYXRhPXtndG1UcmFja2VyLk1PTkVZQkFHX0hFTFBfT1BFTn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwibWVkaXVtLW91dGxpbmUtb3JhbmdlXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezQyfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2FsbE1vZGFsTG9naW4oKSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cD5Mb2dpbjwvcD5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvTmF2YmFyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhOYXZCYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar/NavBar.js\n");

/***/ })

})