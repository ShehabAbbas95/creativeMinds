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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Posts */ \"./components/Posts.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\n// Import any other necessary modules or components here\nvar IndexPage = function() {\n    var _this1 = _this;\n    // Replace this with actual blog post data fetched from the backend API\n    var blogPosts = [\n        {\n            id: 1,\n            title: \"Sample Blog Post 1\",\n            content: \"This is the content of Sample Blog Post 1...\"\n        },\n        {\n            id: 2,\n            title: \"Sample Blog Post 2\",\n            content: \"This is the content of Sample Blog Post 2...\"\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Blog Posts\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: blogPosts.map(function(post) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: blogPosts,\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    });\n                })\n            })\n        ]\n    }));\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFFYTs7QUFDdEMsRUFBd0Q7QUFDeEQsR0FBSyxDQUFDRSxTQUFTLEdBQWEsUUFDNUIsR0FEa0MsQ0FBQzs7SUFDakMsRUFBdUU7SUFDdkUsR0FBSyxDQUFDQyxTQUFTLEdBQWdCLENBQUM7UUFDOUIsQ0FBQztZQUNDQyxFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsQ0FBb0I7WUFDM0JDLE9BQU8sRUFBRSxDQUE4QztRQUN6RCxDQUFDO1FBQ0QsQ0FBQztZQUNDRixFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsQ0FBb0I7WUFDM0JDLE9BQU8sRUFBRSxDQUE4QztRQUN6RCxDQUFDO0lBRUgsQ0FBQztJQUVELE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQVU7O2lGQUNiQyxDQUFFOzs7Ozs7OzBCQUNBTixTQUFTLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7a0NBQ2xCLE1BQU1BLENBQUFBLHNEQUFBQSxDQUFMVix5REFBSTt3QkFBQ1UsSUFBSSxFQUFFUixTQUFTOzs7Ozs7Ozs7Ozs7QUFLL0IsQ0FBQztLQTFCS0QsU0FBUztBQTRCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RzXCI7XG4vLyBJbXBvcnQgYW55IG90aGVyIG5lY2Vzc2FyeSBtb2R1bGVzIG9yIGNvbXBvbmVudHMgaGVyZVxuY29uc3QgSW5kZXhQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gUmVwbGFjZSB0aGlzIHdpdGggYWN0dWFsIGJsb2cgcG9zdCBkYXRhIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBBUElcbiAgY29uc3QgYmxvZ1Bvc3RzOiBQb3N0UHJvcHNbXSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIlNhbXBsZSBCbG9nIFBvc3QgMVwiLFxuICAgICAgY29udGVudDogXCJUaGlzIGlzIHRoZSBjb250ZW50IG9mIFNhbXBsZSBCbG9nIFBvc3QgMS4uLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJTYW1wbGUgQmxvZyBQb3N0IDJcIixcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpcyB0aGUgY29udGVudCBvZiBTYW1wbGUgQmxvZyBQb3N0IDIuLi5cIixcbiAgICB9LFxuICAgIC8vIEFkZCBtb3JlIGJsb2cgcG9zdHMgaGVyZVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CbG9nIFBvc3RzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2Jsb2dQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8UG9zdCBwb3N0PXtibG9nUG9zdHN9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3QiLCJJbmRleFBhZ2UiLCJibG9nUG9zdHMiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});