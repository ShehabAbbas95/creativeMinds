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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\n// Import any other necessary modules or components here\nvar IndexPage = function() {\n    var _this1 = _this;\n    // Replace this with actual blog post data fetched from the backend API\n    var blogPosts = [\n        {\n            id: 1,\n            title: \"Sample Blog Post 1\",\n            content: \"This is the content of Sample Blog Post 1...\"\n        },\n        {\n            id: 2,\n            title: \"Sample Blog Post 2\",\n            content: \"This is the content of Sample Blog Post 2...\"\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                class: \"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Button\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"bg-green-500\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"New Post\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Blog Posts\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: blogPosts.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                post: post,\n                                __source: {\n                                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            });\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFFMkI7O0FBQ3BELEVBQXdEO0FBQ3hELEdBQUssQ0FBQ0UsU0FBUyxHQUFhLFFBQzVCLEdBRGtDLENBQUM7O0lBQ2pDLEVBQXVFO0lBQ3ZFLEdBQUssQ0FBQ0MsU0FBUyxHQUFnQixDQUFDO1FBQzlCLENBQUM7WUFDQ0MsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLENBQW9CO1lBQzNCQyxPQUFPLEVBQUUsQ0FBOEM7UUFDekQsQ0FBQztRQUNELENBQUM7WUFDQ0YsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLENBQW9CO1lBQzNCQyxPQUFPLEVBQUUsQ0FBOEM7UUFDekQsQ0FBQztJQUVILENBQUM7SUFFRCxNQUFNOztpRkFFREMsQ0FBTTtnQkFBQ0MsS0FBSyxFQUFDLENBQWlKOzs7Ozs7OzBCQUFDLENBRWhLOztpRkFDQ0QsQ0FBTTtnQkFBQ0UsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7MEJBQUMsQ0FBUTs7a0ZBQ3hDQyxDQUFHOzs7Ozs7Ozt5RkFDREMsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFVOzt5RkFDYkQsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQXFCOzs7Ozs7O2tDQUNqQ04sU0FBUyxDQUFDUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzBDQUNsQixNQUFNQSxDQUFBQSxzREFBQUEsQ0FBTFosd0RBQUk7Z0NBQUNZLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUFNNUIsQ0FBQztLQWhDS1gsU0FBUztBQWtDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3N0LCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcbi8vIEltcG9ydCBhbnkgb3RoZXIgbmVjZXNzYXJ5IG1vZHVsZXMgb3IgY29tcG9uZW50cyBoZXJlXG5jb25zdCBJbmRleFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAvLyBSZXBsYWNlIHRoaXMgd2l0aCBhY3R1YWwgYmxvZyBwb3N0IGRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kIEFQSVxuICBjb25zdCBibG9nUG9zdHM6IFBvc3RQcm9wc1tdID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwiU2FtcGxlIEJsb2cgUG9zdCAxXCIsXG4gICAgICBjb250ZW50OiBcIlRoaXMgaXMgdGhlIGNvbnRlbnQgb2YgU2FtcGxlIEJsb2cgUG9zdCAxLi4uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiBcIlNhbXBsZSBCbG9nIFBvc3QgMlwiLFxuICAgICAgY29udGVudDogXCJUaGlzIGlzIHRoZSBjb250ZW50IG9mIFNhbXBsZSBCbG9nIFBvc3QgMi4uLlwiLFxuICAgIH0sXG4gICAgLy8gQWRkIG1vcmUgYmxvZyBwb3N0cyBoZXJlXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgIEJ1dHRvblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMFwiPk5ldyBQb3N0PC9idXR0b24+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QmxvZyBQb3N0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMlwiPlxuICAgICAgICAgIHtibG9nUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9zdCIsIkluZGV4UGFnZSIsImJsb2dQb3N0cyIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9uIiwiY2xhc3MiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});