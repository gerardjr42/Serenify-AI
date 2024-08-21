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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-gfm */ \"(app-pages-browser)/./node_modules/remark-gfm/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ChatComponent() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?\"\n        }\n    ]);\n    const handleSendMessage = ()=>{\n        if (!message.trim()) return;\n        setMessage(\"\");\n        const newUserMessage = {\n            role: \"user\",\n            content: message\n        };\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                newUserMessage\n            ]);\n        fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                ...messages,\n                newUserMessage\n            ])\n        }).then((response)=>{\n            if (!response.ok) throw new Error(\"Failed to send message\");\n            return response.body.getReader();\n        }).then((reader)=>{\n            const decoder = new TextDecoder();\n            let assistantMessage = {\n                role: \"assistant\",\n                content: \"\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    assistantMessage\n                ]);\n            function readChunk() {\n                reader.read().then((param)=>{\n                    let { done, value } = param;\n                    if (done) return;\n                    const chunk = decoder.decode(value);\n                    assistantMessage.content += chunk;\n                    setMessages((prevMessages)=>prevMessages.map((msg, index)=>index === prevMessages.length - 1 ? {\n                                ...assistantMessage\n                            } : msg));\n                    readChunk();\n                });\n            }\n            readChunk();\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-start h-[90%] bg-gradient-to-b from-purple-800/10 to-purple-900/10 rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[500px] h-[85%] rounded-lg drop-shadow-2xl shadow-white overflow-hidden flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 overflow-hidden flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-4 \",\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.role === \"assistant\" ? \"justify-start\" : \"justify-end\", \" mb-4\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"max-w-[80%] p-3 rounded-lg \".concat(message.role === \"assistant\" ? \"bg-blue-600 text-white\" : \"bg-gray-700 text-white\", \" shadow-md\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n                                        remarkPlugins: [\n                                            remark_gfm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                                        ],\n                                        components: {\n                                            h1: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-xl font-bold mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            h2: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-lg font-semibold mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            p: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            ul: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    className: \"list-disc pl-4 mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            ol: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                                    className: \"list-decimal pl-4 mb-2\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            },\n                                            li: (param)=>{\n                                                let { node, ...props } = param;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"mb-1\",\n                                                    ...props\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 25\n                                                }, void 0);\n                                            }\n                                        },\n                                        className: \"markdown-content\",\n                                        children: message.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 bg-gray-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center bg-gray-700 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Type your message...\",\n                                className: \"flex-1 bg-transparent text-white p-3 focus:outline-none\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && !e.shiftKey && handleSendMessage()\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                className: \"p-3 text-blue-400 hover:text-blue-300 focus:outline-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-6 w-6\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: 2,\n                                        d: \"M12 19l9 2-9-18-9 18 9-2zm0 0v-8\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatComponent, \"EXL205CmAJGARt8TMxNFMSRDmoY=\");\n_c = ChatComponent;\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDVTtBQUNSO0FBRXBCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3ZDO1lBQ0VRLE1BQU07WUFDTkMsU0FBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNQyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDTixRQUFRTyxJQUFJLElBQUk7UUFFckJOLFdBQVc7UUFDWCxNQUFNTyxpQkFBaUI7WUFBRUosTUFBTTtZQUFRQyxTQUFTTDtRQUFRO1FBQ3hERyxZQUFZLENBQUNNLGVBQWlCO21CQUFJQTtnQkFBY0Q7YUFBZTtRQUUvREUsTUFBTSxhQUFhO1lBQ2pCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzttQkFBSWI7Z0JBQVVNO2FBQWU7UUFDcEQsR0FDR1EsSUFBSSxDQUFDLENBQUNDO1lBQ0wsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO1lBQ2xDLE9BQU9GLFNBQVNKLElBQUksQ0FBQ08sU0FBUztRQUNoQyxHQUNDSixJQUFJLENBQUMsQ0FBQ0s7WUFDTCxNQUFNQyxVQUFVLElBQUlDO1lBQ3BCLElBQUlDLG1CQUFtQjtnQkFBRXBCLE1BQU07Z0JBQWFDLFNBQVM7WUFBRztZQUV4REYsWUFBWSxDQUFDTSxlQUFpQjt1QkFBSUE7b0JBQWNlO2lCQUFpQjtZQUVqRSxTQUFTQztnQkFDUEosT0FBT0ssSUFBSSxHQUFHVixJQUFJLENBQUM7d0JBQUMsRUFBRVcsSUFBSSxFQUFFQyxLQUFLLEVBQUU7b0JBQ2pDLElBQUlELE1BQU07b0JBQ1YsTUFBTUUsUUFBUVAsUUFBUVEsTUFBTSxDQUFDRjtvQkFDN0JKLGlCQUFpQm5CLE9BQU8sSUFBSXdCO29CQUM1QjFCLFlBQVksQ0FBQ00sZUFDWEEsYUFBYXNCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxRQUNyQkEsVUFBVXhCLGFBQWF5QixNQUFNLEdBQUcsSUFDNUI7Z0NBQUUsR0FBR1YsZ0JBQWdCOzRCQUFDLElBQ3RCUTtvQkFHUlA7Z0JBQ0Y7WUFDRjtZQUVBQTtRQUNGLEdBQ0NVLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7UUFDMUI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNackMsU0FBUzZCLEdBQUcsQ0FBQyxDQUFDL0IsU0FBU2lDLHNCQUN0Qiw4REFBQ0s7Z0NBRUNDLFdBQVcsUUFFVixPQURDdkMsUUFBUUksSUFBSSxLQUFLLGNBQWMsa0JBQWtCLGVBQ2xEOzBDQUVELDRFQUFDa0M7b0NBQ0NDLFdBQVcsOEJBSVYsT0FIQ3ZDLFFBQVFJLElBQUksS0FBSyxjQUNiLDJCQUNBLDBCQUNMOzhDQUVELDRFQUFDUCxvREFBYUE7d0NBQ1oyQyxlQUFlOzRDQUFDMUMsa0RBQVNBO3lDQUFDO3dDQUMxQjJDLFlBQVk7NENBQ1ZDLElBQUk7b0RBQUMsRUFBRUMsSUFBSSxFQUFFLEdBQUdDLE9BQU87cUVBQ3JCLDhEQUFDRjtvREFBR0gsV0FBVTtvREFBMEIsR0FBR0ssS0FBSzs7Ozs7Ozs0Q0FFbERDLElBQUk7b0RBQUMsRUFBRUYsSUFBSSxFQUFFLEdBQUdDLE9BQU87cUVBQ3JCLDhEQUFDQztvREFBR04sV0FBVTtvREFBOEIsR0FBR0ssS0FBSzs7Ozs7Ozs0Q0FFdERFLEdBQUc7b0RBQUMsRUFBRUgsSUFBSSxFQUFFLEdBQUdDLE9BQU87cUVBQ3BCLDhEQUFDRTtvREFBRVAsV0FBVTtvREFBUSxHQUFHSyxLQUFLOzs7Ozs7OzRDQUUvQkcsSUFBSTtvREFBQyxFQUFFSixJQUFJLEVBQUUsR0FBR0MsT0FBTztxRUFDckIsOERBQUNHO29EQUFHUixXQUFVO29EQUF1QixHQUFHSyxLQUFLOzs7Ozs7OzRDQUUvQ0ksSUFBSTtvREFBQyxFQUFFTCxJQUFJLEVBQUUsR0FBR0MsT0FBTztxRUFDckIsOERBQUNJO29EQUFHVCxXQUFVO29EQUEwQixHQUFHSyxLQUFLOzs7Ozs7OzRDQUVsREssSUFBSTtvREFBQyxFQUFFTixJQUFJLEVBQUUsR0FBR0MsT0FBTztxRUFDckIsOERBQUNLO29EQUFHVixXQUFVO29EQUFRLEdBQUdLLEtBQUs7Ozs7Ozs7d0NBRWxDO3dDQUNBTCxXQUFVO2tEQUVUdkMsUUFBUUssT0FBTzs7Ozs7Ozs7Ozs7K0JBcENmNEI7Ozs7Ozs7Ozs7Ozs7Ozs4QkEyQ2IsOERBQUNLO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNXO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaYixXQUFVO2dDQUNWWCxPQUFPNUI7Z0NBQ1BxRCxVQUFVLENBQUNDLElBQU1yRCxXQUFXcUQsRUFBRUMsTUFBTSxDQUFDM0IsS0FBSztnQ0FDMUM0QixXQUFXLENBQUNGLElBQ1ZBLEVBQUVHLEdBQUcsS0FBSyxXQUFXLENBQUNILEVBQUVJLFFBQVEsSUFBSXBEOzs7Ozs7MENBR3hDLDhEQUFDcUQ7Z0NBQ0NDLFNBQVN0RDtnQ0FDVGlDLFdBQVU7MENBRVYsNEVBQUNzQjtvQ0FDQ0MsT0FBTTtvQ0FDTnZCLFdBQVU7b0NBQ1Z3QixNQUFLO29DQUNMQyxTQUFRO29DQUNSQyxRQUFPOzhDQUVQLDRFQUFDQzt3Q0FDQ0MsZUFBYzt3Q0FDZEMsZ0JBQWU7d0NBQ2ZDLGFBQWE7d0NBQ2JDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCO0dBOUl3QnZFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NoYXRDb21wb25lbnQuanM/NzU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCByZW1hcmtHZm0gZnJvbSBcInJlbWFyay1nZm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdENvbXBvbmVudCgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OiBgSGVsbG8sIEknbSBTZXJlbmlmeSwgeW91ciBBSS1wb3dlcmVkIHRoZXJhcHkgYXNzaXN0YW50LiBJJ20gaGVyZSB0byBzdXBwb3J0IHlvdSBvbiB5b3VyIG1lbnRhbCBoZWFsdGggam91cm5leSBhbmQgcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCBvdXIgc2VydmljZXMuIEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheT9gLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmICghbWVzc2FnZS50cmltKCkpIHJldHVybjtcblxuICAgIHNldE1lc3NhZ2UoXCJcIik7XG4gICAgY29uc3QgbmV3VXNlck1lc3NhZ2UgPSB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBtZXNzYWdlIH07XG4gICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbmV3VXNlck1lc3NhZ2VdKTtcblxuICAgIGZldGNoKFwiL2FwaS9jaGF0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFsuLi5tZXNzYWdlcywgbmV3VXNlck1lc3NhZ2VdKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzZW5kIG1lc3NhZ2VcIik7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZWFkZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgICAgICBsZXQgYXNzaXN0YW50TWVzc2FnZSA9IHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCJcIiB9O1xuXG4gICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGFzc2lzdGFudE1lc3NhZ2VdKTtcblxuICAgICAgICBmdW5jdGlvbiByZWFkQ2h1bmsoKSB7XG4gICAgICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKCh7IGRvbmUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBjaHVuayA9IGRlY29kZXIuZGVjb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIGFzc2lzdGFudE1lc3NhZ2UuY29udGVudCArPSBjaHVuaztcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+XG4gICAgICAgICAgICAgIHByZXZNZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IHByZXZNZXNzYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICA/IHsgLi4uYXNzaXN0YW50TWVzc2FnZSB9XG4gICAgICAgICAgICAgICAgICA6IG1zZ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVhZENodW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWFkQ2h1bmsoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgaC1bOTAlXSBiZy1ncmFkaWVudC10by1iIGZyb20tcHVycGxlLTgwMC8xMCB0by1wdXJwbGUtOTAwLzEwIHJvdW5kZWQtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAwcHhdIGgtWzg1JV0gcm91bmRlZC1sZyBkcm9wLXNoYWRvdy0yeGwgc2hhZG93LXdoaXRlIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNCBcIj5cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwianVzdGlmeS1zdGFydFwiIDogXCJqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgICAgfSBtYi00YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LVs4MCVdIHAtMyByb3VuZGVkLWxnICR7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS03MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB9IHNoYWRvdy1tZGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBoMTogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIiB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBoMjogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgcDogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIHVsOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLTQgbWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIG9sOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIHBsLTQgbWItMlwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGxpOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWdyYXktODAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTcwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcC0zIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PlxuICAgICAgICAgICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiYgIWUuc2hpZnRLZXkgJiYgaGFuZGxlU2VuZE1lc3NhZ2UoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHRleHQtYmx1ZS00MDAgaG92ZXI6dGV4dC1ibHVlLTMwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTEyIDE5bDkgMi05LTE4LTkgMTggOS0yem0wIDB2LThcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdE1hcmtkb3duIiwicmVtYXJrR2ZtIiwiQ2hhdENvbXBvbmVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwibmV3VXNlck1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJnZXRSZWFkZXIiLCJyZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwicmVhZENodW5rIiwicmVhZCIsImRvbmUiLCJ2YWx1ZSIsImNodW5rIiwiZGVjb2RlIiwibWFwIiwibXNnIiwiaW5kZXgiLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInJlbWFya1BsdWdpbnMiLCJjb21wb25lbnRzIiwiaDEiLCJub2RlIiwicHJvcHMiLCJoMiIsInAiLCJ1bCIsIm9sIiwibGkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsInNoaWZ0S2V5IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatComponent.js\n"));

/***/ })

});