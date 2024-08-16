"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/components/ChatComponent.js":
/*!*****************************************!*\
  !*** ./app/components/ChatComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-gfm */ \"(app-pages-browser)/./node_modules/remark-gfm/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ChatComponent() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?\"\n        }\n    ]);\n    const handleSendMessage = ()=>{\n        if (!message.trim()) return;\n        setMessage(\"\");\n        const newUserMessage = {\n            role: \"user\",\n            content: message\n        };\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                newUserMessage\n            ]);\n        fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                ...messages,\n                newUserMessage\n            ])\n        }).then((response)=>{\n            if (!response.ok) throw new Error(\"Failed to send message\");\n            return response.body.getReader();\n        }).then((reader)=>{\n            const decoder = new TextDecoder();\n            let assistantMessage = {\n                role: \"assistant\",\n                content: \"\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    assistantMessage\n                ]);\n            function readChunk() {\n                return reader.read().then((param)=>{\n                    let { done, value } = param;\n                    if (done) return;\n                    const chunk = decoder.decode(value);\n                    assistantMessage.content += chunk;\n                    setMessages((prevMessages)=>prevMessages.map((msg, index)=>index === prevMessages.length - 1 ? {\n                                ...assistantMessage\n                            } : msg));\n                    return readChunk();\n                });\n            }\n            return readChunk();\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-start  h-[80vh] bg-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[500px] h-[80vh] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-4 space-y-4\",\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.role === \"assistant\" ? \"justify-start\" : \"justify-end\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-[80%] p-3 rounded-lg \".concat(message.role === \"assistant\" ? \"bg-blue-600 text-white\" : \"bg-gray-700 text-white\", \" shadow-md\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n                                        remarkPlugins: [\n                                            remark_gfm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                                        ],\n                                        components: {\n                                            h1: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-xl font-bold mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            h2: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-lg font-semibold mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            p: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            ul: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    className: \"list-disc pl-4 mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            ol: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                                    className: \"list-decimal pl-4 mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            li: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"mb-1\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            }\n                                        },\n                                        className: \"markdown-content\",\n                                        children: message.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 bg-gray-800\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center bg-gray-700 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Type your message...\",\n                                    className: \"flex-1 bg-transparent text-white p-3 focus:outline-none\",\n                                    value: message,\n                                    onChange: (e)=>setMessage(e.target.value),\n                                    onKeyDown: (e)=>e.key === \"Enter\" && !e.shiftKey && handleSendMessage()\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSendMessage,\n                                    className: \"p-3 text-blue-400 hover:text-blue-300 focus:outline-none\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        className: \"h-6 w-6\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        stroke: \"currentColor\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: 2,\n                                            d: \"M12 19l9 2-9-18-9 18 9-2zm0 0v-8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatComponent, \"EXL205CmAJGARt8TMxNFMSRDmoY=\");\n_c = ChatComponent;\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDVTtBQUNSO0FBRXBCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3ZDO1lBQ0VRLE1BQU07WUFDTkMsU0FBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNQyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDTixRQUFRTyxJQUFJLElBQUk7UUFFckJOLFdBQVc7UUFDWCxNQUFNTyxpQkFBaUI7WUFBRUosTUFBTTtZQUFRQyxTQUFTTDtRQUFRO1FBQ3hERyxZQUFZLENBQUNNLGVBQWlCO21CQUFJQTtnQkFBY0Q7YUFBZTtRQUUvREUsTUFBTSxhQUFhO1lBQ2pCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzttQkFBSWI7Z0JBQVVNO2FBQWU7UUFDcEQsR0FDR1EsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO1lBQ2xDLE9BQU9GLFNBQVNKLElBQUksQ0FBQ08sU0FBUztRQUNoQyxHQUNDSixJQUFJLENBQUMsQ0FBQ0s7WUFDTCxNQUFNQyxVQUFVLElBQUlDO1lBQ3BCLElBQUlDLG1CQUFtQjtnQkFBRXBCLE1BQU07Z0JBQWFDLFNBQVM7WUFBRztZQUV4REYsWUFBWSxDQUFDTSxlQUFpQjt1QkFBSUE7b0JBQWNlO2lCQUFpQjtZQUVqRSxTQUFTQztnQkFDUCxPQUFPSixPQUFPSyxJQUFJLEdBQUdWLElBQUksQ0FBQzt3QkFBQyxFQUFFVyxJQUFJLEVBQUVDLEtBQUssRUFBRTtvQkFDeEMsSUFBSUQsTUFBTTtvQkFDVixNQUFNRSxRQUFRUCxRQUFRUSxNQUFN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Pzc1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICByb2xlOiBcImFzc2lzdGFudFwiLFxuICAgICAgY29udGVudDogYEhlbGxvLCBJJ20gU2VyZW5pZnksIHlvdXIgQUktcG93ZXJlZCB0aGVyYXB5IGFzc2lzdGFudC4gSSdtIGhlcmUgdG8gc3VwcG9ydCB5b3Ugb24geW91ciBtZW50YWwgaGVhbHRoIGpvdXJuZXkgYW5kIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgb3VyIHNlcnZpY2VzLiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk/YCxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBpZiAoIW1lc3NhZ2UudHJpbSgpKSByZXR1cm47XG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIGNvbnN0IG5ld1VzZXJNZXNzYWdlID0geyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9O1xuICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSk7XG5cbiAgICBmZXRjaChcIi9hcGkvY2hhdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbLi4ubWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVhZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgICAgbGV0IGFzc2lzdGFudE1lc3NhZ2UgPSB7IHJvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiXCIgfTtcblxuICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBhc3Npc3RhbnRNZXNzYWdlXSk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZENodW5rKCkge1xuICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4oKHsgZG9uZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNodW5rID0gZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuICAgICAgICAgICAgYXNzaXN0YW50TWVzc2FnZS5jb250ZW50ICs9IGNodW5rO1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT5cbiAgICAgICAgICAgICAgcHJldk1lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gcHJldk1lc3NhZ2VzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgID8geyAuLi5hc3Npc3RhbnRNZXNzYWdlIH1cbiAgICAgICAgICAgICAgICAgIDogbXNnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gcmVhZENodW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVhZENodW5rKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0ICBoLVs4MHZoXSBiZy1ub25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwMHB4XSBoLVs4MHZoXSBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS04MDAgdG8tZ3JheS05MDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJqdXN0aWZ5LXN0YXJ0XCIgOiBcImp1c3RpZnktZW5kXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LVs4MCVdIHAtMyByb3VuZGVkLWxnICR7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS03MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB9IHNoYWRvdy1tZGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBoMTogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBoMjogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgcDogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIHVsOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLTQgbWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG9sOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIHBsLTQgbWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGxpOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTcwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBwLTMgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+XG4gICAgICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmICFlLnNoaWZ0S2V5ICYmIGhhbmRsZVNlbmRNZXNzYWdlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgdGV4dC1ibHVlLTQwMCBob3Zlcjp0ZXh0LWJsdWUtMzAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAxOWw5IDItOS0xOC05IDE4IDktMnptMCAwdi04XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdE1hcmtkb3duIiwicmVtYXJrR2ZtIiwiQ2hhdENvbXBvbmVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwibmV3VXNlck1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJnZXRSZWFkZXIiLCJyZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwicmVhZENodW5rIiwicmVhZCIsImRvbmUiLCJ2YWx1ZSIsImNodW5rIiwiZGVjb2RlIiwibWFwIiwibXNnIiwiaW5kZXgiLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInJlbWFya1BsdWdpbnMiLCJjb21wb25lbnRzIiwiaDEiLCJub2RlIiwicHJvcHMiLCJoMiIsInAiLCJ1bCIsIm9sIiwibGkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsInNoaWZ0S2V5IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatComponent.js\n"));

/***/ })

});