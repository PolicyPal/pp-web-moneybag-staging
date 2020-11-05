webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar/UserInfo/UserInfo.js":
/*!****************************************************!*\
  !*** ./src/components/NavBar/UserInfo/UserInfo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/userActions */ \"./src/actions/userActions.js\");\n/* harmony import */ var components_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Avatar */ \"./src/components/Avatar/index.js\");\n/* harmony import */ var components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/GTM/GTMButton */ \"./src/components/GTM/GTMButton.js\");\n/* harmony import */ var constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! constants/tracking/buttons/nav */ \"./src/constants/tracking/buttons/nav.js\");\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UserInfo.module.scss */ \"./src/components/NavBar/UserInfo/UserInfo.module.scss\");\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wilson/PolicyPal/Moneybag/src/components/NavBar/UserInfo/UserInfo.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import { withRouter } from 'react-router-dom';\n\n\n\n\n\n // import { clearCampaignTokens } from 'actions/campaignActions';\n// import urls from 'constants/urls';\n\n\n // import GTMLink from 'components/GTM/GTMLink';\n\n // import Prize from '../Prize';\n\n\nvar MAX_WIDTH = 767;\n\nvar UserInfo = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(UserInfo, _Component);\n\n  var _super = _createSuper(UserInfo);\n\n  function UserInfo(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, UserInfo);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isOpen: false,\n      gender: props.userData.gender ? props.userData.gender.toLowerCase() : 'male',\n      name: props.userData.firstName || 'User'\n    };\n    _this.updateIsOpen = _this.updateIsOpen.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleOnMouseEvent = _this.handleOnMouseEvent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleClickButtonLogout = _this.handleClickButtonLogout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleOnClickButtonToggle = _this.handleOnClickButtonToggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(UserInfo, [{\n    key: \"updateIsOpen\",\n    value: function updateIsOpen(newState) {\n      this.setState({\n        isOpen: newState\n      });\n    }\n  }, {\n    key: \"handleOnMouseEvent\",\n    value: function handleOnMouseEvent(newState) {\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n      if (windowWidth > MAX_WIDTH) {\n        this.updateIsOpen(newState);\n      }\n    }\n  }, {\n    key: \"handleOnClickButtonToggle\",\n    value: function handleOnClickButtonToggle() {\n      var isOpen = this.state.isOpen;\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n      if (windowWidth < MAX_WIDTH) {\n        this.updateIsOpen(!isOpen);\n      }\n    }\n  }, {\n    key: \"handleClickButtonLogout\",\n    value: function handleClickButtonLogout() {\n      var doLogout = this.props.doLogout;\n      doLogout(); // doClearCampaignTokens();\n      // history && history.push(urls.landing.url);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          isOpen = _this$state.isOpen,\n          gender = _this$state.gender,\n          name = _this$state.name; // const { gameToken, isShowPrize, isWelcomeSpin } = this.props;\n\n      var toggleStatus = isOpen ? 'show' : '';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.respNav, 'd-flex d-md-none'].join(' '),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            gtmData: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_LOGOUT,\n            onClick: function onClick() {\n              return _this2.handleClickButtonLogout();\n            },\n            className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.logoutBtn, 'd-inline-block d-sm-none'].join(' '),\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.toggle,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_Avatar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n              gender: gender,\n              className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userImage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n              className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userName,\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Dropdown\"], {\n          className: ['d-none d-md-block', _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.wrapper, this.props.className].join(' '),\n          direction: \"down\",\n          toggle: function toggle() {},\n          onMouseOver: function onMouseOver() {\n            return _this2.handleOnMouseEvent(true);\n          },\n          onMouseLeave: function onMouseLeave() {\n            return _this2.handleOnMouseEvent(false);\n          },\n          isOpen: true,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"DropdownToggle\"], {\n            id: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_USER_MENU.id,\n            nav: true,\n            caret: true,\n            className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.toggle, toggleStatus].join(' '),\n            onClick: function onClick() {\n              return _this2.handleOnClickButtonToggle();\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_Avatar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n              gender: gender,\n              className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userImage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n              className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userName,\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"DropdownMenu\"], {\n            className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.dropdownMenu,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Collapse\"], {\n              isOpen: isOpen,\n              enter: false,\n              exit: false,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Container\"], {\n                className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.container,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n                  className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.subMenuList,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                    gtmData: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_LOGOUT,\n                    onClick: function onClick() {\n                      return _this2.handleClickButtonLogout();\n                    },\n                    className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.subMenuItem,\n                    children: \"Logout\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 150,\n                    columnNumber: 19\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 131,\n                  columnNumber: 17\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true);\n    }\n  }], [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(nextProps, prevState) {\n      var newState = {};\n\n      if (nextProps.userData.gender && prevState.gender !== nextProps.userData.gender.toLowerCase()) {\n        newState.gender = nextProps.userData.gender.toLowerCase();\n      }\n\n      if (nextProps.userData.firstName && prevState.name !== nextProps.userData.firstName) {\n        newState.name = nextProps.userData.firstName;\n      }\n\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"isEmpty\"])(newState) ? null : newState;\n    }\n  }]);\n\n  return UserInfo;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nUserInfo.defaultProps = {\n  className: '',\n  userData: {} // doLogout: () => { },\n  // gameToken: null,\n\n};\nUserInfo.propTypes = {\n  // history: PropTypes.object.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  userData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,\n  //\n  doLogout: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired // gameToken: PropTypes.string,\n  // isShowPrize: PropTypes.bool.isRequired,\n  // isWelcomeSpin: PropTypes.bool.isRequired,\n  // doClearCampaignTokens: PropTypes.func.isRequired,\n\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    userData: state.userDetails.data || {} // gameToken: state.campaign.gameTokens && state.campaign.gameTokens[3],\n    // isShowPrize: state.campaign.isShowPrize,\n    // isWelcomeSpin: state.campaign.isWelcomeSpin,\n\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    doLogout: function doLogout() {\n      return dispatch(Object(actions_userActions__WEBPACK_IMPORTED_MODULE_12__[\"clearLoginData\"])());\n    } // doClearCampaignTokens: () => dispatch(clearCampaignTokens()),\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps)(UserInfo));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyL1VzZXJJbmZvL1VzZXJJbmZvLmpzPzEwMjgiXSwibmFtZXMiOlsiTUFYX1dJRFRIIiwiVXNlckluZm8iLCJwcm9wcyIsInN0YXRlIiwiaXNPcGVuIiwiZ2VuZGVyIiwidXNlckRhdGEiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJ1cGRhdGVJc09wZW4iLCJiaW5kIiwiaGFuZGxlT25Nb3VzZUV2ZW50IiwiaGFuZGxlQ2xpY2tCdXR0b25Mb2dvdXQiLCJoYW5kbGVPbkNsaWNrQnV0dG9uVG9nZ2xlIiwibmV3U3RhdGUiLCJzZXRTdGF0ZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5IiwiZG9Mb2dvdXQiLCJ0b2dnbGVTdGF0dXMiLCJzdHlsZXMiLCJyZXNwTmF2Iiwiam9pbiIsImd0bVRyYWNrZXIiLCJOQVZfTE9HT1VUIiwibG9nb3V0QnRuIiwidG9nZ2xlIiwidXNlckltYWdlIiwidXNlck5hbWUiLCJ3cmFwcGVyIiwiY2xhc3NOYW1lIiwiTkFWX1VTRVJfTUVOVSIsImlkIiwiZHJvcGRvd25NZW51IiwiY29udGFpbmVyIiwic3ViTWVudUxpc3QiLCJzdWJNZW51SXRlbSIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImlzRW1wdHkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJEZXRhaWxzIiwiZGF0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2xlYXJMb2dpbkRhdGEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NB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QUFNa0MsUUFBUSxDQUFDQywyRUFBYyxFQUFmLENBQWQ7QUFBQSxLQUQ4QixDQUV4Qzs7QUFGd0MsR0FBZjtBQUFBLENBQTNCOztBQUtlQywwSEFBTyxDQUFDTixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q3hELFFBQTdDLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvVXNlckluZm8vVXNlckluZm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBDb250YWluZXIsXG4gIENvbGxhcHNlLFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNsZWFyTG9naW5EYXRhIH0gZnJvbSAnYWN0aW9ucy91c2VyQWN0aW9ucyc7XG4vLyBpbXBvcnQgeyBjbGVhckNhbXBhaWduVG9rZW5zIH0gZnJvbSAnYWN0aW9ucy9jYW1wYWlnbkFjdGlvbnMnO1xuLy8gaW1wb3J0IHVybHMgZnJvbSAnY29uc3RhbnRzL3VybHMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdjb21wb25lbnRzL0F2YXRhcic7XG5cbmltcG9ydCBHVE1CdXR0b24gZnJvbSAnY29tcG9uZW50cy9HVE0vR1RNQnV0dG9uJztcbi8vIGltcG9ydCBHVE1MaW5rIGZyb20gJ2NvbXBvbmVudHMvR1RNL0dUTUxpbmsnO1xuaW1wb3J0IGd0bVRyYWNrZXIgZnJvbSAnY29uc3RhbnRzL3RyYWNraW5nL2J1dHRvbnMvbmF2JztcblxuLy8gaW1wb3J0IFByaXplIGZyb20gJy4uL1ByaXplJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VySW5mby5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1BWF9XSURUSCA9IDc2NztcblxuY2xhc3MgVXNlckluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgZ2VuZGVyOiAocHJvcHMudXNlckRhdGEuZ2VuZGVyKSA/IHByb3BzLnVzZXJEYXRhLmdlbmRlci50b0xvd2VyQ2FzZSgpIDogJ21hbGUnLFxuICAgICAgbmFtZTogcHJvcHMudXNlckRhdGEuZmlyc3ROYW1lIHx8ICdVc2VyJyxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVJc09wZW4gPSB0aGlzLnVwZGF0ZUlzT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25Nb3VzZUV2ZW50ID0gdGhpcy5oYW5kbGVPbk1vdXNlRXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0ID0gdGhpcy5oYW5kbGVDbGlja0J1dHRvbkxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZSA9IHRoaXMuaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG5cbiAgICBpZiAobmV4dFByb3BzLnVzZXJEYXRhLmdlbmRlciAmJiBwcmV2U3RhdGUuZ2VuZGVyICE9PSBuZXh0UHJvcHMudXNlckRhdGEuZ2VuZGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIG5ld1N0YXRlLmdlbmRlciA9IG5leHRQcm9wcy51c2VyRGF0YS5nZW5kZXIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLnVzZXJEYXRhLmZpcnN0TmFtZSAmJiBwcmV2U3RhdGUubmFtZSAhPT0gbmV4dFByb3BzLnVzZXJEYXRhLmZpcnN0TmFtZSkge1xuICAgICAgbmV3U3RhdGUubmFtZSA9IG5leHRQcm9wcy51c2VyRGF0YS5maXJzdE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChpc0VtcHR5KG5ld1N0YXRlKSkgPyBudWxsIDogbmV3U3RhdGU7XG4gIH1cblxuICB1cGRhdGVJc09wZW4obmV3U3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBuZXdTdGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VFdmVudChuZXdTdGF0ZSkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgaWYgKHdpbmRvd1dpZHRoID4gTUFYX1dJRFRIKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlzT3BlbihuZXdTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZSgpIHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IE1BWF9XSURUSCkge1xuICAgICAgdGhpcy51cGRhdGVJc09wZW4oIWlzT3Blbik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tCdXR0b25Mb2dvdXQoKSB7XG4gICAgY29uc3QgeyBkb0xvZ291dCB9ID0gdGhpcy5wcm9wcztcbiAgICBkb0xvZ291dCgpO1xuICAgIC8vIGRvQ2xlYXJDYW1wYWlnblRva2VucygpO1xuICAgIC8vIGhpc3RvcnkgJiYgaGlzdG9yeS5wdXNoKHVybHMubGFuZGluZy51cmwpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBnZW5kZXIsIG5hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc3QgeyBnYW1lVG9rZW4sIGlzU2hvd1ByaXplLCBpc1dlbGNvbWVTcGluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZ2dsZVN0YXR1cyA9IGlzT3BlbiA/ICdzaG93JyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLnJlc3BOYXYsICdkLWZsZXggZC1tZC1ub25lJ10uam9pbignICcpfT5cbiAgICAgICAgICA8R1RNQnV0dG9uXG4gICAgICAgICAgICBndG1EYXRhPXtndG1UcmFja2VyLk5BVl9MT0dPVVR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0KCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMubG9nb3V0QnRuLCAnZC1pbmxpbmUtYmxvY2sgZC1zbS1ub25lJ10uam9pbignICcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvR1RNQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlfT5cbiAgICAgICAgICAgIDxBdmF0YXIgZ2VuZGVyPXtnZW5kZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbWFnZX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT57bmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBjbGFzc05hbWU9e1snZC1ub25lIGQtbWQtYmxvY2snLCBzdHlsZXMud3JhcHBlciwgdGhpcy5wcm9wcy5jbGFzc05hbWVdLmpvaW4oJyAnKX1cbiAgICAgICAgICBkaXJlY3Rpb249XCJkb3duXCJcbiAgICAgICAgICB0b2dnbGU9eygpID0+IHsgfX1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlRXZlbnQodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLmhhbmRsZU9uTW91c2VFdmVudChmYWxzZSl9XG4gICAgICAgICAgaXNPcGVuXG4gICAgICAgID5cbiAgICAgICAgICA8RHJvcGRvd25Ub2dnbGVcbiAgICAgICAgICAgIGlkPXtndG1UcmFja2VyLk5BVl9VU0VSX01FTlUuaWR9XG4gICAgICAgICAgICBuYXZcbiAgICAgICAgICAgIGNhcmV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMudG9nZ2xlLCB0b2dnbGVTdGF0dXNdLmpvaW4oJyAnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBdmF0YXIgZ2VuZGVyPXtnZW5kZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbWFnZX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgaXNTaG93UHJpemUgJiYgKFxuICAgICAgICAgICAgICA8UHJpemVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5naWZ0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gKi99XG4gICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duTWVudX0+XG4gICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IGVudGVyPXtmYWxzZX0gZXhpdD17ZmFsc2V9PlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJNZW51TGlzdH0+XG4gICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgaXNTaG93UHJpemUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R1RNTGlua1xuICAgICAgICAgICAgICAgICAgICAgIGd0bURhdGE9e2d0bVRyYWNrZXIuTkFWX1dFTENPTUVfU1VSUFJJU0V9XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2Ake3VybHMuY2FtcGFnaW5fd2hlZWwudXJsfT9pZD0zJnRva2VuPSR7Z2FtZVRva2VuIHx8ICdub3RfdmVyaWZpZWQnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLnN1Yk1lbnVJdGVtLCBzdHlsZXMud2VsY29tU3Bpbl0uam9pbignICcpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzV2VsY29tZVNwaW4gPyAnV2VsY29tZSBTcGluIScgOiAnU3VycHJpc2UgU3BpbiEnfVxuICAgICAgICAgICAgICAgICAgICA8L0dUTUxpbms+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiA8R1RNTGlua1xuICAgICAgICAgICAgICAgICAgZ3RtRGF0YT17Z3RtVHJhY2tlci5OQVZfTVlfQUNDT1VOVH1cbiAgICAgICAgICAgICAgICAgIHRvPXt1cmxzLnByb2ZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViTWVudUl0ZW19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTXkgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgPC9HVE1MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgIDxHVE1CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZ3RtRGF0YT17Z3RtVHJhY2tlci5OQVZfTE9HT1VUfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0KCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1Yk1lbnVJdGVtfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L0dUTUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VySW5mby5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHVzZXJEYXRhOiB7fSxcbiAgLy8gZG9Mb2dvdXQ6ICgpID0+IHsgfSxcbiAgLy8gZ2FtZVRva2VuOiBudWxsLFxufTtcblVzZXJJbmZvLnByb3BUeXBlcyA9IHtcbiAgLy8gaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvL1xuICBkb0xvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gZ2FtZVRva2VuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBpc1Nob3dQcml6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy8gaXNXZWxjb21lU3BpbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy8gZG9DbGVhckNhbXBhaWduVG9rZW5zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyRGF0YTogc3RhdGUudXNlckRldGFpbHMuZGF0YSB8fCB7fSxcbiAgLy8gZ2FtZVRva2VuOiBzdGF0ZS5jYW1wYWlnbi5nYW1lVG9rZW5zICYmIHN0YXRlLmNhbXBhaWduLmdhbWVUb2tlbnNbM10sXG4gIC8vIGlzU2hvd1ByaXplOiBzdGF0ZS5jYW1wYWlnbi5pc1Nob3dQcml6ZSxcbiAgLy8gaXNXZWxjb21lU3Bpbjogc3RhdGUuY2FtcGFpZ24uaXNXZWxjb21lU3Bpbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGRvTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChjbGVhckxvZ2luRGF0YSgpKSxcbiAgLy8gZG9DbGVhckNhbXBhaWduVG9rZW5zOiAoKSA9PiBkaXNwYXRjaChjbGVhckNhbXBhaWduVG9rZW5zKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJJbmZvKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar/UserInfo/UserInfo.js\n");

/***/ })

})