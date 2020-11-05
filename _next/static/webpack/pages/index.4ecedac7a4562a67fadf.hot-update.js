webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar/UserInfo/UserInfo.js":
/*!****************************************************!*\
  !*** ./src/components/NavBar/UserInfo/UserInfo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/userActions */ \"./src/actions/userActions.js\");\n/* harmony import */ var components_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Avatar */ \"./src/components/Avatar/index.js\");\n/* harmony import */ var components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/GTM/GTMButton */ \"./src/components/GTM/GTMButton.js\");\n/* harmony import */ var constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! constants/tracking/buttons/nav */ \"./src/constants/tracking/buttons/nav.js\");\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UserInfo.module.scss */ \"./src/components/NavBar/UserInfo/UserInfo.module.scss\");\n/* harmony import */ var _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/wilson/PolicyPal/Moneybag/src/components/NavBar/UserInfo/UserInfo.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import { withRouter } from 'react-router-dom';\n\n\n\n\n\n // import { clearCampaignTokens } from 'actions/campaignActions';\n// import urls from 'constants/urls';\n\n\n // import GTMLink from 'components/GTM/GTMLink';\n\n // import Prize from '../Prize';\n\n\nvar MAX_WIDTH = 991;\n\nvar UserInfo = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(UserInfo, _Component);\n\n  var _super = _createSuper(UserInfo);\n\n  function UserInfo(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, UserInfo);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isOpen: false,\n      gender: props.userData.gender ? props.userData.gender.toLowerCase() : 'male',\n      name: props.userData.firstName || 'User'\n    };\n    _this.updateIsOpen = _this.updateIsOpen.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleOnMouseEvent = _this.handleOnMouseEvent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleClickButtonLogout = _this.handleClickButtonLogout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleOnClickButtonToggle = _this.handleOnClickButtonToggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(UserInfo, [{\n    key: \"updateIsOpen\",\n    value: function updateIsOpen(newState) {\n      this.setState({\n        isOpen: newState\n      });\n    }\n  }, {\n    key: \"handleOnMouseEvent\",\n    value: function handleOnMouseEvent(newState) {\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n      if (windowWidth > MAX_WIDTH) {\n        this.updateIsOpen(newState);\n      }\n    }\n  }, {\n    key: \"handleOnClickButtonToggle\",\n    value: function handleOnClickButtonToggle() {\n      var isOpen = this.state.isOpen;\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n      if (windowWidth < MAX_WIDTH) {\n        this.updateIsOpen(!isOpen);\n      }\n    }\n  }, {\n    key: \"handleClickButtonLogout\",\n    value: function handleClickButtonLogout() {\n      var doLogout = this.props.doLogout;\n      doLogout(); // doClearCampaignTokens();\n      // history && history.push(urls.landing.url);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          isOpen = _this$state.isOpen,\n          gender = _this$state.gender,\n          name = _this$state.name; // const { gameToken, isShowPrize, isWelcomeSpin } = this.props;\n\n      var toggleStatus = isOpen ? 'show' : '';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Dropdown\"], {\n        className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.wrapper, this.props.className].join(' '),\n        direction: \"down\",\n        toggle: function toggle() {},\n        onMouseOver: function onMouseOver() {\n          return _this2.handleOnMouseEvent(true);\n        },\n        onMouseLeave: function onMouseLeave() {\n          return _this2.handleOnMouseEvent(false);\n        },\n        isOpen: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n          gtmData: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_LOGOUT,\n          onClick: function onClick() {\n            return _this2.handleClickButtonLogout();\n          },\n          className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.subMenuItem, 'd-block d-sm-none'].join(' '),\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"DropdownToggle\"], {\n          id: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_USER_MENU.id,\n          nav: true,\n          caret: true,\n          className: [_UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.toggle, toggleStatus].join(' '),\n          onClick: function onClick() {\n            return _this2.handleOnClickButtonToggle();\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_Avatar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            gender: gender,\n            className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userImage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"span\", {\n            className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userName,\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"DropdownMenu\"], {\n          className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.dropdownMenu,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Collapse\"], {\n            isOpen: isOpen,\n            enter: false,\n            exit: false,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__[\"Container\"], {\n              className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.container,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n                className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.subMenuList,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(components_GTM_GTMButton__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                  gtmData: constants_tracking_buttons_nav__WEBPACK_IMPORTED_MODULE_15__[\"default\"].NAV_LOGOUT,\n                  onClick: function onClick() {\n                    return _this2.handleClickButtonLogout();\n                  },\n                  className: _UserInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.subMenuItem,\n                  children: \"Logout\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 143,\n                  columnNumber: 17\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 7\n      }, this);\n    }\n  }], [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(nextProps, prevState) {\n      var newState = {};\n\n      if (nextProps.userData.gender && prevState.gender !== nextProps.userData.gender.toLowerCase()) {\n        newState.gender = nextProps.userData.gender.toLowerCase();\n      }\n\n      if (nextProps.userData.firstName && prevState.name !== nextProps.userData.firstName) {\n        newState.name = nextProps.userData.firstName;\n      }\n\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"isEmpty\"])(newState) ? null : newState;\n    }\n  }]);\n\n  return UserInfo;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nUserInfo.defaultProps = {\n  className: '',\n  userData: {} // doLogout: () => { },\n  // gameToken: null,\n\n};\nUserInfo.propTypes = {\n  // history: PropTypes.object.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,\n  userData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,\n  //\n  doLogout: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired // gameToken: PropTypes.string,\n  // isShowPrize: PropTypes.bool.isRequired,\n  // isWelcomeSpin: PropTypes.bool.isRequired,\n  // doClearCampaignTokens: PropTypes.func.isRequired,\n\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    userData: state.userDetails.data || {} // gameToken: state.campaign.gameTokens && state.campaign.gameTokens[3],\n    // isShowPrize: state.campaign.isShowPrize,\n    // isWelcomeSpin: state.campaign.isWelcomeSpin,\n\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    doLogout: function doLogout() {\n      return dispatch(Object(actions_userActions__WEBPACK_IMPORTED_MODULE_12__[\"clearLoginData\"])());\n    } // doClearCampaignTokens: () => dispatch(clearCampaignTokens()),\n\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, mapDispatchToProps)(UserInfo));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyL1VzZXJJbmZvL1VzZXJJbmZvLmpzPzEwMjgiXSwibmFtZXMiOlsiTUFYX1dJRFRIIiwiVXNlckluZm8iLCJwcm9wcyIsInN0YXRlIiwiaXNPcGVuIiwiZ2VuZGVyIiwidXNlckRhdGEiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJ1cGRhdGVJc09wZW4iLCJiaW5kIiwiaGFuZGxlT25Nb3VzZUV2ZW50IiwiaGFuZGxlQ2xpY2tCdXR0b25Mb2dvdXQiLCJoYW5kbGVPbkNsaWNrQnV0dG9uVG9nZ2xlIiwibmV3U3RhdGUiLCJzZXRTdGF0ZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib2R5IiwiZG9Mb2dvdXQiLCJ0b2dnbGVTdGF0dXMiLCJzdHlsZXMiLCJ3cmFwcGVyIiwiY2xhc3NOYW1lIiwiam9pbiIsImd0bVRyYWNrZXIiLCJOQVZfTE9HT1VUIiwic3ViTWVudUl0ZW0iLCJOQVZfVVNFUl9NRU5VIiwiaWQiLCJ0b2dnbGUiLCJ1c2VySW1hZ2UiLCJ1c2VyTmFtZSIsImRyb3Bkb3duTWVudSIsImNvbnRhaW5lciIsInN1Yk1lbnVMaXN0IiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiaXNFbXB0eSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlckRldGFpbHMiLCJkYXRhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjbGVhckxvZ2luRGF0YSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUpzQixDQUF4QjtBQU1BTCxRQUFRLENBQUM2QyxTQUFULEdBQXFCO0FBQ25CO0FBQ0FsQixXQUFTLEVBQUVtQixpREFBUyxDQUFDQyxNQUZGO0FBR25CMUMsVUFBUSxFQUFFeUMsaURBQVMsQ0FBQ0UsTUFIRDtBQUluQjtBQUNBekIsVUFBUSxFQUFFdUIsaURBQVMsQ0FBQ0csSUFBVixDQUFlQyxVQUxOLENBTW5CO0FBQ0E7QUFDQTtBQUNBOztBQVRtQixDQUFyQjs7QUFZQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNqRCxLQUFEO0FBQUEsU0FBWTtBQUNsQ0csWUFBUSxFQUFFSCxLQUFLLENBQUNrRCxXQUFOLENBQWtCQyxJQUFsQixJQUEwQixFQURGLENBRWxDO0FBQ0E7QUFDQTs7QUFKa0MsR0FBWjtBQUFBLENBQXhCOztBQU9BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENoQyxZQUFRLEVBQUU7QUFBQSxhQUFNZ0MsUUFBUSxDQUFDQywyRUFBYyxFQUFmLENBQWQ7QUFBQSxLQUQ4QixDQUV4Qzs7QUFGd0MsR0FBZjtBQUFBLENBQTNCOztBQUtlQywwSEFBTyxDQUFDTixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q3RELFFBQTdDLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvVXNlckluZm8vVXNlckluZm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBDb250YWluZXIsXG4gIENvbGxhcHNlLFxufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGNsZWFyTG9naW5EYXRhIH0gZnJvbSAnYWN0aW9ucy91c2VyQWN0aW9ucyc7XG4vLyBpbXBvcnQgeyBjbGVhckNhbXBhaWduVG9rZW5zIH0gZnJvbSAnYWN0aW9ucy9jYW1wYWlnbkFjdGlvbnMnO1xuLy8gaW1wb3J0IHVybHMgZnJvbSAnY29uc3RhbnRzL3VybHMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdjb21wb25lbnRzL0F2YXRhcic7XG5cbmltcG9ydCBHVE1CdXR0b24gZnJvbSAnY29tcG9uZW50cy9HVE0vR1RNQnV0dG9uJztcbi8vIGltcG9ydCBHVE1MaW5rIGZyb20gJ2NvbXBvbmVudHMvR1RNL0dUTUxpbmsnO1xuaW1wb3J0IGd0bVRyYWNrZXIgZnJvbSAnY29uc3RhbnRzL3RyYWNraW5nL2J1dHRvbnMvbmF2JztcblxuLy8gaW1wb3J0IFByaXplIGZyb20gJy4uL1ByaXplJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VySW5mby5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1BWF9XSURUSCA9IDk5MTtcblxuY2xhc3MgVXNlckluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgZ2VuZGVyOiAocHJvcHMudXNlckRhdGEuZ2VuZGVyKSA/IHByb3BzLnVzZXJEYXRhLmdlbmRlci50b0xvd2VyQ2FzZSgpIDogJ21hbGUnLFxuICAgICAgbmFtZTogcHJvcHMudXNlckRhdGEuZmlyc3ROYW1lIHx8ICdVc2VyJyxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVJc09wZW4gPSB0aGlzLnVwZGF0ZUlzT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25Nb3VzZUV2ZW50ID0gdGhpcy5oYW5kbGVPbk1vdXNlRXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0ID0gdGhpcy5oYW5kbGVDbGlja0J1dHRvbkxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZSA9IHRoaXMuaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG5cbiAgICBpZiAobmV4dFByb3BzLnVzZXJEYXRhLmdlbmRlciAmJiBwcmV2U3RhdGUuZ2VuZGVyICE9PSBuZXh0UHJvcHMudXNlckRhdGEuZ2VuZGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIG5ld1N0YXRlLmdlbmRlciA9IG5leHRQcm9wcy51c2VyRGF0YS5nZW5kZXIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLnVzZXJEYXRhLmZpcnN0TmFtZSAmJiBwcmV2U3RhdGUubmFtZSAhPT0gbmV4dFByb3BzLnVzZXJEYXRhLmZpcnN0TmFtZSkge1xuICAgICAgbmV3U3RhdGUubmFtZSA9IG5leHRQcm9wcy51c2VyRGF0YS5maXJzdE5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChpc0VtcHR5KG5ld1N0YXRlKSkgPyBudWxsIDogbmV3U3RhdGU7XG4gIH1cblxuICB1cGRhdGVJc09wZW4obmV3U3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBuZXdTdGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZU9uTW91c2VFdmVudChuZXdTdGF0ZSkge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgaWYgKHdpbmRvd1dpZHRoID4gTUFYX1dJRFRIKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlzT3BlbihuZXdTdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25DbGlja0J1dHRvblRvZ2dsZSgpIHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IE1BWF9XSURUSCkge1xuICAgICAgdGhpcy51cGRhdGVJc09wZW4oIWlzT3Blbik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tCdXR0b25Mb2dvdXQoKSB7XG4gICAgY29uc3QgeyBkb0xvZ291dCB9ID0gdGhpcy5wcm9wcztcbiAgICBkb0xvZ291dCgpO1xuICAgIC8vIGRvQ2xlYXJDYW1wYWlnblRva2VucygpO1xuICAgIC8vIGhpc3RvcnkgJiYgaGlzdG9yeS5wdXNoKHVybHMubGFuZGluZy51cmwpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBnZW5kZXIsIG5hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc3QgeyBnYW1lVG9rZW4sIGlzU2hvd1ByaXplLCBpc1dlbGNvbWVTcGluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZ2dsZVN0YXR1cyA9IGlzT3BlbiA/ICdzaG93JyA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93blxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMud3JhcHBlciwgdGhpcy5wcm9wcy5jbGFzc05hbWVdLmpvaW4oJyAnKX1cbiAgICAgICAgZGlyZWN0aW9uPVwiZG93blwiXG4gICAgICAgIHRvZ2dsZT17KCkgPT4geyB9fVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlRXZlbnQodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlRXZlbnQoZmFsc2UpfVxuICAgICAgICBpc09wZW5cbiAgICAgID5cbiAgICAgICAgPEdUTUJ1dHRvblxuICAgICAgICAgIGd0bURhdGE9e2d0bVRyYWNrZXIuTkFWX0xPR09VVH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0KCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLnN1Yk1lbnVJdGVtLCAnZC1ibG9jayBkLXNtLW5vbmUnXS5qb2luKCcgJyl9XG4gICAgICAgID5cbiAgICAgICAgICBMb2dvdXRcbiAgICAgICAgPC9HVE1CdXR0b24+XG4gICAgICAgIDxEcm9wZG93blRvZ2dsZVxuICAgICAgICAgIGlkPXtndG1UcmFja2VyLk5BVl9VU0VSX01FTlUuaWR9XG4gICAgICAgICAgbmF2XG4gICAgICAgICAgY2FyZXRcbiAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMudG9nZ2xlLCB0b2dnbGVTdGF0dXNdLmpvaW4oJyAnKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU9uQ2xpY2tCdXR0b25Ub2dnbGUoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBdmF0YXIgZ2VuZGVyPXtnZW5kZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbWFnZX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0+e25hbWV9PC9zcGFuPlxuICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICBpc1Nob3dQcml6ZSAmJiAoXG4gICAgICAgICAgICAgIDxQcml6ZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdpZnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSAqL31cbiAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bk1lbnV9PlxuICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gZW50ZXI9e2ZhbHNlfSBleGl0PXtmYWxzZX0+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViTWVudUxpc3R9PlxuICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICBpc1Nob3dQcml6ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxHVE1MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgZ3RtRGF0YT17Z3RtVHJhY2tlci5OQVZfV0VMQ09NRV9TVVJQUklTRX1cbiAgICAgICAgICAgICAgICAgICAgICB0bz17YCR7dXJscy5jYW1wYWdpbl93aGVlbC51cmx9P2lkPTMmdG9rZW49JHtnYW1lVG9rZW4gfHwgJ25vdF92ZXJpZmllZCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMuc3ViTWVudUl0ZW0sIHN0eWxlcy53ZWxjb21TcGluXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNXZWxjb21lU3BpbiA/ICdXZWxjb21lIFNwaW4hJyA6ICdTdXJwcmlzZSBTcGluISd9XG4gICAgICAgICAgICAgICAgICAgIDwvR1RNTGluaz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8R1RNTGlua1xuICAgICAgICAgICAgICAgICAgZ3RtRGF0YT17Z3RtVHJhY2tlci5OQVZfTVlfQUNDT1VOVH1cbiAgICAgICAgICAgICAgICAgIHRvPXt1cmxzLnByb2ZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3ViTWVudUl0ZW19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTXkgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgPC9HVE1MaW5rPiAqL31cbiAgICAgICAgICAgICAgICA8R1RNQnV0dG9uXG4gICAgICAgICAgICAgICAgICBndG1EYXRhPXtndG1UcmFja2VyLk5BVl9MT0dPVVR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrQnV0dG9uTG9nb3V0KCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJNZW51SXRlbX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L0dUTUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VySW5mby5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHVzZXJEYXRhOiB7fSxcbiAgLy8gZG9Mb2dvdXQ6ICgpID0+IHsgfSxcbiAgLy8gZ2FtZVRva2VuOiBudWxsLFxufTtcblVzZXJJbmZvLnByb3BUeXBlcyA9IHtcbiAgLy8gaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvL1xuICBkb0xvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gZ2FtZVRva2VuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBpc1Nob3dQcml6ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy8gaXNXZWxjb21lU3BpbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy8gZG9DbGVhckNhbXBhaWduVG9rZW5zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyRGF0YTogc3RhdGUudXNlckRldGFpbHMuZGF0YSB8fCB7fSxcbiAgLy8gZ2FtZVRva2VuOiBzdGF0ZS5jYW1wYWlnbi5nYW1lVG9rZW5zICYmIHN0YXRlLmNhbXBhaWduLmdhbWVUb2tlbnNbM10sXG4gIC8vIGlzU2hvd1ByaXplOiBzdGF0ZS5jYW1wYWlnbi5pc1Nob3dQcml6ZSxcbiAgLy8gaXNXZWxjb21lU3Bpbjogc3RhdGUuY2FtcGFpZ24uaXNXZWxjb21lU3Bpbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGRvTG9nb3V0OiAoKSA9PiBkaXNwYXRjaChjbGVhckxvZ2luRGF0YSgpKSxcbiAgLy8gZG9DbGVhckNhbXBhaWduVG9rZW5zOiAoKSA9PiBkaXNwYXRjaChjbGVhckNhbXBhaWduVG9rZW5zKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJJbmZvKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar/UserInfo/UserInfo.js\n");

/***/ })

})