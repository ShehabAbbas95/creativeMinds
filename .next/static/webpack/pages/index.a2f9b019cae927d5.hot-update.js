"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Post(param) {\n    var post = param.post;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"mb-4\",\n        __source: {\n            fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"w-full bg-zinc-400 shadow lg:w-96\",\n            __source: {\n                fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"w-full px-4 py-5\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: \"font-Inter text-lg font-medium leading-6 text-gray-900\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: post.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"mt-2 h-16 max-w-xs text-sm text-gray-500\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: post.content\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"mt-5 flex\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Posts.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        })\n    }));\n}\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO1NBYWhCQyxJQUFJLENBQUMsS0FBZSxFQUFFLENBQUM7UUFBaEJDLElBQUksR0FBTixLQUFlLENBQWJBLElBQUk7SUFDbEIsTUFBTSxzRUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozt1RkFDbEJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQW1DOzs7Ozs7OzRGQUMvQ0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWtCOzs7Ozs7Ozt5RkFDOUJDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUF3RDs7Ozs7OztrQ0FDbkVGLElBQUksQ0FBQ0ksS0FBSzs7eUZBRVpILENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUEwQzs7Ozs7Ozt1R0FDdERHLENBQUM7Ozs7Ozs7c0NBQUVMLElBQUksQ0FBQ00sT0FBTzs7O3lGQUVqQkwsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7Ozs7OztBQUtwQyxDQUFDO0tBaEJRSCxJQUFJO0FBa0JiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy50c3g/ZWZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgaWQ7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9zdDogUG9zdFByb3BzO1xufVxuXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctemluYy00MDAgc2hhZG93IGxnOnctOTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtSW50ZXIgdGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgaC0xNiBtYXgtdy14cyB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0IiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidGl0bGUiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});