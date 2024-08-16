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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-gfm */ \"(app-pages-browser)/./node_modules/remark-gfm/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatComponent() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?\"\n        }\n    ]);\n    const handleSendMessage = ()=>{\n        if (!message.trim()) return;\n        setMessage(\"\");\n        const newUserMessage = {\n            role: \"user\",\n            content: message\n        };\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                newUserMessage\n            ]);\n        fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                ...messages,\n                newUserMessage\n            ])\n        }).then((response)=>{\n            if (!response.ok) throw new Error(\"Failed to send message\");\n            return response.body.getReader();\n        }).then((reader)=>{\n            const decoder = new TextDecoder();\n            let assistantMessage = {\n                role: \"assistant\",\n                content: \"\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    assistantMessage\n                ]);\n            function readChunk() {\n                return reader.read().then((param)=>{\n                    let { done, value } = param;\n                    if (done) return;\n                    const chunk = decoder.decode(value);\n                    assistantMessage.content += chunk;\n                    setMessages((prevMessages)=>prevMessages.map((msg, index)=>index === prevMessages.length - 1 ? {\n                                ...assistantMessage\n                            } : msg));\n                    return readChunk();\n                });\n            }\n            return readChunk();\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            direction: \"column\",\n            spacing: 3,\n            width: \"600px\",\n            height: \"700px\",\n            border: \"1px solid #ccc\",\n            p: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    direction: \"column\",\n                    p: 2,\n                    spacing: 2,\n                    flexGrow: 1,\n                    overflow: \"auto\",\n                    maxHeight: \"100%\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                            width: \"100%\",\n                            mb: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                bgcolor: message.role === \"assistant\" ? \"primary.main\" : \"secondary.main\",\n                                p: 2,\n                                borderRadius: 2,\n                                color: \"white\",\n                                maxWidth: \"80%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__.Markdown, {\n                                    remarkPlugins: [\n                                        remark_gfm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                    ],\n                                    components: {\n                                        h1: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"mt-4 mb-2 text-xl font-bold\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 115,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        },\n                                        h2: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"mt-4 mb-2 text-lg font-semibold\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 118,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        },\n                                        p: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-2\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        },\n                                        ul: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"mb-2 ml-6 list-disc\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        },\n                                        ol: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                                className: \"mb-2 ml-6 list-decimal\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 130,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        },\n                                        li: (param)=>{\n                                            let { node, ...props } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"mb-1\",\n                                                ...props\n                                            }, void 0, false, {\n                                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 23\n                                            }, void 0);\n                                        }\n                                    },\n                                    className: \"markdown-content\",\n                                    children: message.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    direction: \"row\",\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            label: \"message\",\n                            fullWidth: true,\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value),\n                            onKeyDown: (e)=>e.key === \"Enter\" && !e.shiftKey && handleSendMessage(),\n                            InputProps: {\n                                style: {\n                                    color: \"white\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: handleSendMessage,\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/components/ChatComponent.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatComponent, \"EXL205CmAJGARt8TMxNFMSRDmoY=\");\n_c = ChatComponent;\nvar _c;\n$RefreshReg$(_c, \"ChatComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NoYXRDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQzdCO0FBQ1U7QUFDUjtBQUVwQixTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUN2QztZQUNFUSxNQUFNO1lBQ05DLFNBQVU7UUFDWjtLQUNEO0lBRUQsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUksQ0FBQ04sUUFBUU8sSUFBSSxJQUFJO1FBRXJCTixXQUFXO1FBQ1gsTUFBTU8saUJBQWlCO1lBQUVKLE1BQU07WUFBUUMsU0FBU0w7UUFBUTtRQUN4REcsWUFBWSxDQUFDTSxlQUFpQjttQkFBSUE7Z0JBQWNEO2FBQWU7UUFFL0RFLE1BQU0sYUFBYTtZQUNqQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7bUJBQUliO2dCQUFVTTthQUFlO1FBQ3BELEdBQ0dRLElBQUksQ0FBQyxDQUFDQztZQUNMLElBQUksQ0FBQ0EsU0FBU0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtZQUNsQyxPQUFPRixTQUFTSixJQUFJLENBQUNPLFNBQVM7UUFDaEMsR0FDQ0osSUFBSSxDQUFDLENBQUNLO1lBQ0wsTUFBTUMsVUFBVSxJQUFJQztZQUNwQixJQUFJQyxtQkFBbUI7Z0JBQUVwQixNQUFNO2dCQUFhQyxTQUFTO1lBQUc7WUFFeERGLFlBQVksQ0FBQ00sZUFBaUI7dUJBQUlBO29CQUFjZTtpQkFBaUI7WUFFakUsU0FBU0M7Z0JBQ1AsT0FBT0osT0FBT0ssSUFBSSxHQUFHVixJQUFJLENBQUM7d0JBQUMsRUFBRVcsSUFBSSxFQUFFQyxLQUFLLEVBQUU7b0JBQ3hDLElBQUlELE1BQU07b0JBQ1YsTUFBTUUsUUFBUVAs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Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEU7R0E5SndCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DaGF0Q29tcG9uZW50LmpzPzc1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2ssIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICByb2xlOiBcImFzc2lzdGFudFwiLFxuICAgICAgY29udGVudDogYEhlbGxvLCBJJ20gU2VyZW5pZnksIHlvdXIgQUktcG93ZXJlZCB0aGVyYXB5IGFzc2lzdGFudC4gSSdtIGhlcmUgdG8gc3VwcG9ydCB5b3Ugb24geW91ciBtZW50YWwgaGVhbHRoIGpvdXJuZXkgYW5kIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgb3VyIHNlcnZpY2VzLiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk/YCxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBpZiAoIW1lc3NhZ2UudHJpbSgpKSByZXR1cm47XG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIGNvbnN0IG5ld1VzZXJNZXNzYWdlID0geyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9O1xuICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSk7XG5cbiAgICBmZXRjaChcIi9hcGkvY2hhdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbLi4ubWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVhZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgICAgbGV0IGFzc2lzdGFudE1lc3NhZ2UgPSB7IHJvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiXCIgfTtcblxuICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBhc3Npc3RhbnRNZXNzYWdlXSk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZENodW5rKCkge1xuICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4oKHsgZG9uZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNodW5rID0gZGVjb2Rlci5kZWNvZGUodmFsdWUpO1xuICAgICAgICAgICAgYXNzaXN0YW50TWVzc2FnZS5jb250ZW50ICs9IGNodW5rO1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT5cbiAgICAgICAgICAgICAgcHJldk1lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gcHJldk1lc3NhZ2VzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgID8geyAuLi5hc3Npc3RhbnRNZXNzYWdlIH1cbiAgICAgICAgICAgICAgICAgIDogbXNnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gcmVhZENodW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVhZENodW5rKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIHsvKiA8Qm94XG4gICAgICAgIHdpZHRoPVwiMTAwdndcIlxuICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICA+ICovfVxuICAgICAgPFN0YWNrXG4gICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgIHdpZHRoPVwiNjAwcHhcIlxuICAgICAgICBoZWlnaHQ9XCI3MDBweFwiXG4gICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjY2NjXCJcbiAgICAgICAgcD17Mn1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrXG4gICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBwPXsyfVxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICBtYXhIZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAvLyB3aWR0aD1cIjEwMCVcIlxuICAgICAgICA+XG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYj17Mn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGJnY29sb3I9e1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJwcmltYXJ5Lm1haW5cIlxuICAgICAgICAgICAgICAgICAgICA6IFwic2Vjb25kYXJ5Lm1haW5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17Mn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjgwJVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIGgxOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTQgbWItMiB0ZXh0LXhsIGZvbnQtYm9sZFwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgaDI6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWItMiB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHA6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB1bDogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi0yIG1sLTYgbGlzdC1kaXNjXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBvbDogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJtYi0yIG1sLTYgbGlzdC1kZWNpbWFsXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBsaTogKHsgbm9kZSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT5cbiAgICAgICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZS5zaGlmdEtleSAmJiBoYW5kbGVTZW5kTWVzc2FnZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBcIndoaXRlXCIgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICBTZW5kXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1N0YWNrPlxuICAgICAgey8qIDwvQm94PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJTdGFjayIsIlRleHRGaWVsZCIsInVzZVN0YXRlIiwiUmVhY3RNYXJrZG93biIsInJlbWFya0dmbSIsIkNoYXRDb21wb25lbnQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsIm5ld1VzZXJNZXNzYWdlIiwicHJldk1lc3NhZ2VzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwiZ2V0UmVhZGVyIiwicmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiYXNzaXN0YW50TWVzc2FnZSIsInJlYWRDaHVuayIsInJlYWQiLCJkb25lIiwidmFsdWUiLCJjaHVuayIsImRlY29kZSIsIm1hcCIsIm1zZyIsImluZGV4IiwibGVuZ3RoIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJwIiwiZmxleEdyb3ciLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYmdjb2xvciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwibWF4V2lkdGgiLCJyZW1hcmtQbHVnaW5zIiwiY29tcG9uZW50cyIsImgxIiwibm9kZSIsInByb3BzIiwiaDIiLCJ1bCIsIm9sIiwibGkiLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsInNoaWZ0S2V5IiwiSW5wdXRQcm9wcyIsInN0eWxlIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ChatComponent.js\n"));

/***/ })

});