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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Posts */ \"./components/Posts.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\n// Import any other necessary modules or components here\nvar IndexPage = function() {\n    var _this1 = _this;\n    // Replace this with actual blog post data fetched from the backend API\n    var blogPosts = [\n        {\n            id: 1,\n            title: \"Sample Blog Post 1\",\n            content: \"This is the content of Sample Blog Post 1...\"\n        },\n        {\n            id: 2,\n            title: \"Sample Blog Post 2\",\n            content: \"This is the content of Sample Blog Post 2...\"\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Blog Posts\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: blogPosts.map(function(post) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post,\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    });\n                })\n            })\n        ]\n    }));\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFFNEI7O0FBQ3JELEVBQXdEO0FBQ3hELEdBQUssQ0FBQ0UsU0FBUyxHQUFhLFFBQzVCLEdBRGtDLENBQUM7O0lBQ2pDLEVBQXVFO0lBQ3ZFLEdBQUssQ0FBQ0MsU0FBUyxHQUFnQixDQUFDO1FBQzlCLENBQUM7WUFDQ0MsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLENBQW9CO1lBQzNCQyxPQUFPLEVBQUUsQ0FBOEM7UUFDekQsQ0FBQztRQUNELENBQUM7WUFDQ0YsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLENBQW9CO1lBQzNCQyxPQUFPLEVBQUUsQ0FBOEM7UUFDekQsQ0FBQztJQUVILENBQUM7SUFFRCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFVOztpRkFDYkQsQ0FBRzs7Ozs7OzswQkFDREosU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO2tDQUNsQixNQUFNQSxDQUFBQSxzREFBQUEsQ0FBTFQseURBQUk7d0JBQUNTLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7S0ExQktSLFNBQVM7QUE0QmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0c1wiO1xuLy8gSW1wb3J0IGFueSBvdGhlciBuZWNlc3NhcnkgbW9kdWxlcyBvciBjb21wb25lbnRzIGhlcmVcbmNvbnN0IEluZGV4UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vIFJlcGxhY2UgdGhpcyB3aXRoIGFjdHVhbCBibG9nIHBvc3QgZGF0YSBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgQVBJXG4gIGNvbnN0IGJsb2dQb3N0czogUG9zdFByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogXCJTYW1wbGUgQmxvZyBQb3N0IDFcIixcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpcyB0aGUgY29udGVudCBvZiBTYW1wbGUgQmxvZyBQb3N0IDEuLi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6IFwiU2FtcGxlIEJsb2cgUG9zdCAyXCIsXG4gICAgICBjb250ZW50OiBcIlRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgU2FtcGxlIEJsb2cgUG9zdCAyLi4uXCIsXG4gICAgfSxcbiAgICAvLyBBZGQgbW9yZSBibG9nIHBvc3RzIGhlcmVcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QmxvZyBQb3N0czwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YmxvZ1Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0IiwiSW5kZXhQYWdlIiwiYmxvZ1Bvc3RzIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkaXYiLCJoMSIsIm1hcCIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});