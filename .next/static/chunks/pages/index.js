/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Post(param) {\n    var post = param.post;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"mb-4\",\n        __source: {\n            fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"w-96 bg-zinc-400 shadow lg:w-96\",\n            __source: {\n                fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"w-full px-4 py-5\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: \"font-Inter text-lg font-medium leading-6 text-gray-900\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: post.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"mt-2 h-16 max-w-xs text-sm text-gray-500\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: post.content\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Post.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Read More\"\n                    })\n                ]\n            })\n        })\n    }));\n}\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7U0FhaEJDLElBQUksQ0FBQyxLQUFlLEVBQUUsQ0FBQztRQUFoQkMsSUFBSSxHQUFOLEtBQWUsQ0FBYkEsSUFBSTtJQUNsQixNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7O3VGQUNsQkQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBaUM7Ozs7Ozs7NEZBQzdDRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7O3lGQUM5QkMsQ0FBRTt3QkFBQ0QsU0FBUyxFQUFDLENBQXdEOzs7Ozs7O2tDQUNuRUYsSUFBSSxDQUFDSSxLQUFLOzt5RkFFWkgsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTBDOzs7Ozs7O3VHQUN0REcsQ0FBQzs7Ozs7OztzQ0FBRUwsSUFBSSxDQUFDTSxPQUFPOzs7eUZBRWpCQyxDQUFDO3dCQUFDQyxJQUFJLEVBQUMsQ0FBRTs7Ozs7OztrQ0FBQyxDQUFTOzs7Ozs7QUFLOUIsQ0FBQztLQWhCUVQsSUFBSTtBQWtCYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgaWQ7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9zdDogUG9zdFByb3BzO1xufVxuXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTk2IGJnLXppbmMtNDAwIHNoYWRvdyBsZzp3LTk2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNVwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LUludGVyIHRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGgtMTYgbWF4LXcteHMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+UmVhZCBNb3JlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9zdCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// Import any other necessary modules or components here\nvar IndexPage = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Replace this with actual blog post data fetched from the backend API\n    var blogPosts = [\n        {\n            id: 1,\n            title: \"Sample Blog Post 1\",\n            content: \"This is the content of Sample Blog Post 1...\"\n        },\n        {\n            id: 2,\n            title: \"Sample Blog Post 2\",\n            content: \"This is the content of Sample Blog Post 2...\"\n        }\n    ];\n    var addNewPost = function() {\n        router.push(\"/post\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: addNewPost,\n                className: \"my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"New Post\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Blog Posts\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: blogPosts.map(function(post) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                post: post,\n                                __source: {\n                                    fileName: \"/home/shehab/creativeMinds/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            });\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(IndexPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUUyQjtBQUNiOzs7QUFDdkMsRUFBd0Q7QUFDeEQsR0FBSyxDQUFDRyxTQUFTLEdBQWEsUUFDNUIsR0FEa0MsQ0FBQzs7O0lBQ2pDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHRixzREFBUztJQUN4QixFQUF1RTtJQUN2RSxHQUFLLENBQUNHLFNBQVMsR0FBZ0IsQ0FBQztRQUM5QixDQUFDO1lBQ0NDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxDQUFvQjtZQUMzQkMsT0FBTyxFQUFFLENBQThDO1FBQ3pELENBQUM7UUFDRCxDQUFDO1lBQ0NGLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxDQUFvQjtZQUMzQkMsT0FBTyxFQUFFLENBQThDO1FBQ3pELENBQUM7SUFFSCxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztRQUN4QkwsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBTztJQUNyQixDQUFDO0lBRUQsTUFBTTs7aUZBRURDLENBQU07Z0JBQ0xDLE9BQU8sRUFBRUgsVUFBVTtnQkFDbkJJLFNBQVMsRUFBQyxDQUFzSjs7Ozs7OzswQkFDakssQ0FFRDs7a0ZBQ0NDLENBQUc7Ozs7Ozs7O3lGQUNEQyxDQUFFOzs7Ozs7O2tDQUFDLENBQVU7O3lGQUNiRCxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7a0NBQ2pDUixTQUFTLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7MENBQ2xCLE1BQU1BLENBQUFBLHNEQUFBQSxDQUFMaEIsd0RBQUk7Z0NBQUNnQixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLENBQUM7R0F0Q0tkLFNBQVM7O1FBQ0VELGtEQUFTOzs7S0FEcEJDLFNBQVM7QUF3Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIEltcG9ydCBhbnkgb3RoZXIgbmVjZXNzYXJ5IG1vZHVsZXMgb3IgY29tcG9uZW50cyBoZXJlXG5jb25zdCBJbmRleFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gUmVwbGFjZSB0aGlzIHdpdGggYWN0dWFsIGJsb2cgcG9zdCBkYXRhIGZldGNoZWQgZnJvbSB0aGUgYmFja2VuZCBBUElcbiAgY29uc3QgYmxvZ1Bvc3RzOiBQb3N0UHJvcHNbXSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIlNhbXBsZSBCbG9nIFBvc3QgMVwiLFxuICAgICAgY29udGVudDogXCJUaGlzIGlzIHRoZSBjb250ZW50IG9mIFNhbXBsZSBCbG9nIFBvc3QgMS4uLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJTYW1wbGUgQmxvZyBQb3N0IDJcIixcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpcyB0aGUgY29udGVudCBvZiBTYW1wbGUgQmxvZyBQb3N0IDIuLi5cIixcbiAgICB9LFxuICAgIC8vIEFkZCBtb3JlIGJsb2cgcG9zdHMgaGVyZVxuICBdO1xuICBjb25zdCBhZGROZXdQb3N0ID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3Bvc3RcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXthZGROZXdQb3N0fVxuICAgICAgICBjbGFzc05hbWU9XCJteS02IGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCJcbiAgICAgID5cbiAgICAgICAgTmV3IFBvc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkJsb2cgUG9zdHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTJcIj5cbiAgICAgICAgICB7YmxvZ1Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3QiLCJ1c2VSb3V0ZXIiLCJJbmRleFBhZ2UiLCJyb3V0ZXIiLCJibG9nUG9zdHMiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImFkZE5ld1Bvc3QiLCJwdXNoIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibWFwIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fshehab%2FcreativeMinds%2Fpages%2Findex.tsx!":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fshehab%2FcreativeMinds%2Fpages%2Findex.tsx! ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGc2hlaGFiJTJGY3JlYXRpdmVNaW5kcyUyRnBhZ2VzJTJGaW5kZXgudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YThjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fshehab%2FcreativeMinds%2Fpages%2Findex.tsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fshehab%2FcreativeMinds%2Fpages%2Findex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);