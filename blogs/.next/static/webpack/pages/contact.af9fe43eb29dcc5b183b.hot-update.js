webpackHotUpdate_N_E("pages/contact",{

/***/ "./apis/api.js":
/*!*********************!*\
  !*** ./apis/api.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getAboutData: function getAboutData() {\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve({\n          email: \"test@gmail.com\",\n          address: \"HN\"\n        });\n      }, 500);\n    });\n  },\n  getPageInfo: function getPageInfo() {\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        resolve({\n          author: \"ReactJS2008\",\n          phone: \"09xxxxxxx\"\n        });\n      }, 1000);\n    });\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpcy9hcGkuanM/M2EzOSJdLCJuYW1lcyI6WyJnZXRBYm91dERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJlbWFpbCIsImFkZHJlc3MiLCJnZXRQYWdlSW5mbyIsImF1dGhvciIsInBob25lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLDhDQUFlO0FBQ1hBLGNBQVksRUFBRSx3QkFBTTtBQUNoQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDNUJDLGdCQUFVLENBQUMsWUFBTTtBQUNiRCxlQUFPLENBQUM7QUFBQ0UsZUFBSyxFQUFFLGdCQUFSO0FBQTBCQyxpQkFBTyxFQUFFO0FBQW5DLFNBQUQsQ0FBUDtBQUNILE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxLQUpNLENBQVA7QUFLSCxHQVBVO0FBUVhDLGFBQVcsRUFBRSx1QkFBTTtBQUNmLFdBQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JELGVBQU8sQ0FDSDtBQUNJSyxnQkFBTSxFQUFFLGFBRFo7QUFFSUMsZUFBSyxFQUFFO0FBRlgsU0FERyxDQUFQO0FBS0gsT0FOUyxFQU1QLElBTk8sQ0FBVjtBQU9ILEtBUk0sQ0FBUDtBQVNIO0FBbEJVLENBQWYiLCJmaWxlIjoiLi9hcGlzL2FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRBYm91dERhdGE6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtlbWFpbDogXCJ0ZXN0QGdtYWlsLmNvbVwiLCBhZGRyZXNzOiBcIkhOXCJ9KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0UGFnZUluZm86ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiUmVhY3RKUzIwMDhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiBcIjA5eHh4eHh4eFwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apis/api.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/Layout */ \"./pages/layouts/Layout.js\");\n/* harmony import */ var _apis_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/api */ \"./apis/api.js\");\n\n\nvar _jsxFileName = \"/Users/HuyLo/Desktop/ReactJS_T3H/blogs/pages/contact.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Contact(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      author = _useState[0],\n      setAuthor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      phone = _useState2[0],\n      setPhone = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    _apis_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPageInfo().then(function (data) {\n      return function () {\n        console.log(\"data\", data);\n        setAuthor(data.author);\n        setPhone(data.phone);\n      };\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Contact\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Author: \", author]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Phone: \", phone]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Contact, \"RngeIldnDx5GWVToAqxgjYpadaA=\");\n\n_c = Contact;\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsInVzZVN0YXRlIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwicGhvbmUiLCJzZXRQaG9uZSIsInVzZUVmZmVjdCIsImFwaSIsImdldFBhZ2VJbmZvIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxFQUFELENBREE7QUFBQSxNQUM1QkMsTUFENEI7QUFBQSxNQUNwQkMsU0FEb0I7O0FBQUEsbUJBRVZGLHNEQUFRLENBQUMsRUFBRCxDQUZFO0FBQUEsTUFFNUJHLEtBRjRCO0FBQUEsTUFFckJDLFFBRnFCOztBQUduQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLHFEQUFHLENBQUNDLFdBQUosR0FBa0JDLElBQWxCLENBQXVCLFVBQUFDLElBQUk7QUFBQSxhQUFHLFlBQU07QUFDaENDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0FQLGlCQUFTLENBQUNPLElBQUksQ0FBQ1IsTUFBTixDQUFUO0FBQ0FHLGdCQUFRLENBQUNLLElBQUksQ0FBQ04sS0FBTixDQUFSO0FBQ0gsT0FKMEI7QUFBQSxLQUEzQjtBQUtILEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDSSxxRUFBQyx1REFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLDZCQUFZRixNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSw0QkFBV0UsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztHQWxCdUJMLE87O0tBQUFBLE8iLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRzL0xheW91dFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpcy9hcGlcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XG4gICAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXT0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGhvbmUsIHNldFBob25lXT0gdXNlU3RhdGUoXCJcIilcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhcGkuZ2V0UGFnZUluZm8oKS50aGVuKGRhdGE9PiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIHNldEF1dGhvcihkYXRhLmF1dGhvcilcbiAgICAgICAgICAgIHNldFBob25lKGRhdGEucGhvbmUpXG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgICAgICAgICA8cD5BdXRob3I6IHthdXRob3J9PC9wPlxuICAgICAgICAgICAgPHA+UGhvbmU6IHtwaG9uZX08L3A+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})