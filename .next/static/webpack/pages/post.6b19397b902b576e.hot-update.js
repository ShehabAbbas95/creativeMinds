"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        title: \"\",\n        content: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var handleChange = function(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(function(prevData) {\n            return _objectSpread({\n            }, prevData, _defineProperty({\n            }, name, value));\n        });\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(formData); // You can handle form submission logic here\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        className: \"max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n        onSubmit: handleSubmit,\n        __source: {\n            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"mb-4\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        htmlFor: \"name\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Author\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: formData.name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your name\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"mb-4\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        htmlFor: \"email\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Title\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                        type: \"text\",\n                        id: \"title\",\n                        name: \"title\",\n                        value: formData.title,\n                        onChange: handleChange,\n                        placeholder: \"Enter your name\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"mb-6\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        htmlFor: \"message\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Message\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                        id: \"content\",\n                        name: \"content\",\n                        value: formData.content,\n                        onChange: handleChange,\n                        placeholder: \"Enter your post\",\n                        __source: {\n                            fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex items-center justify-center\",\n                __source: {\n                    fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                    type: \"submit\",\n                    __source: {\n                        fileName: \"/home/shehab/creativeMinds/components/Form.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Submit\"\n                })\n            })\n        ]\n    }));\n};\n_s(Form, \"WlVB/BPchMX0XrzcAMo0BOoTIhA=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFROzs7Ozs7OzhCQUNkLENBRUQ7Ozs7O0FBSVIsQ0FBQztHQWxGS3RCLElBQUk7S0FBSkEsSUFBSTtBQW9GViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS50c3g/ZWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICB0aXRsZTogXCJcIixcbiAgICBjb250ZW50OiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHsgLi4ucHJldkRhdGEsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTsgLy8gWW91IGNhbiBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkIHB4LTggcHQtNiBwYi04IG1iLTRcIlxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgID5cbiAgICAgICAgICBBdXRob3JcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRpdGxlXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgIGlkPVwiY29udGVudFwiXG4gICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb250ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBvc3RcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJuYW1lIiwidGl0bGUiLCJjb250ZW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZEYXRhIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.tsx\n");

/***/ })

});