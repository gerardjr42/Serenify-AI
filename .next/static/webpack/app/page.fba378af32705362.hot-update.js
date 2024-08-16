"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?\"\n        }\n    ]);\n    const handleSendMessage = async ()=>{\n        if (!message.trim()) return; // Prevent sending empty messages\n        setMessage(\"\");\n        const newUserMessage = {\n            role: \"user\",\n            content: message\n        };\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                newUserMessage\n            ]);\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    newUserMessage\n                ])\n            });\n            if (!response.ok) throw new Error(\"Failed to send message\");\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            let assistantMessage = {\n                role: \"assistant\",\n                content: \"\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    assistantMessage\n                ]);\n            while(true){\n                const { done, value } = await reader.read();\n                if (done) break;\n                const chunk = decoder.decode(value);\n                // Add proper formatting\n                const formattedChunk = chunk// replace all newlines with <br>\n                .replace(/\\n/g, \"<br>\")// convert markdown bold to html\n                .replace(/\\*\\*(.*?)\\*\\*/g, \"<strong>$1</strong>\")// convert numbered lists to html\n                .replace(/(\\d+\\.)\\s/g, \"<br>$1 \");\n                assistantMessage.content += formattedChunk;\n                // real-time updates of the assistant's response as it's being received, without affecting the other messages in the conversation history.\n                setMessages((prevMessages)=>prevMessages.map((msg, index)=>index === prevMessages.length - 1 ? {\n                            ...assistantMessage\n                        } : msg));\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Serenify\"\n                }, void 0, false, {\n                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                direction: \"column\",\n                spacing: 3,\n                width: \"600px\",\n                height: \"700px\",\n                border: \"1px solid #ccc\",\n                p: 2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        direction: \"column\",\n                        spacing: 2,\n                        flexGrow: 1,\n                        overflow: \"auto\",\n                        maxHeight: \"100%\",\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                display: \"flex\",\n                                justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    bgcolor: message.role === \"assistant\" ? \"primary.main\" : \"secondary.main\",\n                                    p: 2,\n                                    borderRadius: 2,\n                                    color: \"white\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: message.content\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        direction: \"row\",\n                        spacing: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                label: \"message\",\n                                fullWidth: true,\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                onKeyDown: (e)=>e.key === \"Enter\" && !e.shiftKey && handleSendMessage()\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"contained\",\n                                onClick: handleSendMessage,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EXL205CmAJGARt8TMxNFMSRDmoY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBeUI7d0NBQUVDLFFBQVF2RCxRQUFRSyxPQUFPO29DQUFDOzs7Ozs7K0JBZmhENEI7Ozs7Ozs7Ozs7a0NBb0JYLDhEQUFDckMsc0dBQUtBO3dCQUFDZ0QsV0FBVTt3QkFBTUMsU0FBUzs7MENBQzlCLDhEQUFDaEQsc0dBQVNBO2dDQUNSMkQsT0FBTTtnQ0FDTkMsU0FBUztnQ0FDVGhDLE9BQU96QjtnQ0FDUDBELFVBQVUsQ0FBQ0MsSUFBTTFELFdBQVcwRCxFQUFFQyxNQUFNLENBQUNuQyxLQUFLO2dDQUMxQ29DLFdBQVcsQ0FBQ0YsSUFDVkEsRUFBRUcsR0FBRyxLQUFLLFdBQVcsQ0FBQ0gsRUFBRUksUUFBUSxJQUFJekQ7Ozs7OzswQ0FHeEMsOERBQUNYLHNHQUFNQTtnQ0FBQ3FFLFNBQVE7Z0NBQVlDLFNBQVMzRDswQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRTtHQTlId0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgU3RhY2ssIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgcm9sZTogXCJhc3Npc3RhbnRcIixcbiAgICAgIGNvbnRlbnQ6IGBIZWxsbywgSSdtIFNlcmVuaWZ5LCB5b3VyIEFJLXBvd2VyZWQgdGhlcmFweSBhc3Npc3RhbnQuIEknbSBoZXJlIHRvIHN1cHBvcnQgeW91IG9uIHlvdXIgbWVudGFsIGhlYWx0aCBqb3VybmV5IGFuZCBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IG91ciBzZXJ2aWNlcy4gSG93IGNhbiBJIGhlbHAgeW91IHRvZGF5P2AsXG4gICAgfSxcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFtZXNzYWdlLnRyaW0oKSkgcmV0dXJuOyAvLyBQcmV2ZW50IHNlbmRpbmcgZW1wdHkgbWVzc2FnZXNcblxuICAgIHNldE1lc3NhZ2UoXCJcIik7XG4gICAgY29uc3QgbmV3VXNlck1lc3NhZ2UgPSB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBtZXNzYWdlIH07XG4gICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbmV3VXNlck1lc3NhZ2VdKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jaGF0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbLi4ubWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZVwiKTtcblxuICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgIGxldCBhc3Npc3RhbnRNZXNzYWdlID0geyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiBcIlwiIH07XG5cbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGFzc2lzdGFudE1lc3NhZ2VdKTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgaWYgKGRvbmUpIGJyZWFrO1xuICAgICAgICBjb25zdCBjaHVuayA9IGRlY29kZXIuZGVjb2RlKHZhbHVlKTtcblxuICAgICAgICAvLyBBZGQgcHJvcGVyIGZvcm1hdHRpbmdcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ2h1bmsgPSBjaHVua1xuICAgICAgICAgIC8vIHJlcGxhY2UgYWxsIG5ld2xpbmVzIHdpdGggPGJyPlxuICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCI8YnI+XCIpXG4gICAgICAgICAgLy8gY29udmVydCBtYXJrZG93biBib2xkIHRvIGh0bWxcbiAgICAgICAgICAucmVwbGFjZSgvXFwqXFwqKC4qPylcXCpcXCovZywgXCI8c3Ryb25nPiQxPC9zdHJvbmc+XCIpXG4gICAgICAgICAgLy8gY29udmVydCBudW1iZXJlZCBsaXN0cyB0byBodG1sXG4gICAgICAgICAgLnJlcGxhY2UoLyhcXGQrXFwuKVxccy9nLCBcIjxicj4kMSBcIik7XG5cbiAgICAgICAgYXNzaXN0YW50TWVzc2FnZS5jb250ZW50ICs9IGZvcm1hdHRlZENodW5rO1xuICAgICAgICAvLyByZWFsLXRpbWUgdXBkYXRlcyBvZiB0aGUgYXNzaXN0YW50J3MgcmVzcG9uc2UgYXMgaXQncyBiZWluZyByZWNlaXZlZCwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIG90aGVyIG1lc3NhZ2VzIGluIHRoZSBjb252ZXJzYXRpb24gaGlzdG9yeS5cbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT5cbiAgICAgICAgICBwcmV2TWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PlxuICAgICAgICAgICAgaW5kZXggPT09IHByZXZNZXNzYWdlcy5sZW5ndGggLSAxID8geyAuLi5hc3Npc3RhbnRNZXNzYWdlIH0gOiBtc2dcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPVwiMTAwdndcIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8aDE+U2VyZW5pZnk8L2gxPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgc3BhY2luZz17M31cbiAgICAgICAgd2lkdGg9XCI2MDBweFwiXG4gICAgICAgIGhlaWdodD1cIjcwMHB4XCJcbiAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkICNjY2NcIlxuICAgICAgICBwPXsyfVxuICAgICAgPlxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICBtYXhIZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGJnY29sb3I9e1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJwcmltYXJ5Lm1haW5cIlxuICAgICAgICAgICAgICAgICAgICA6IFwic2Vjb25kYXJ5Lm1haW5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17Mn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UuY29udGVudCB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbktleURvd249eyhlKSA9PlxuICAgICAgICAgICAgICBlLmtleSA9PT0gXCJFbnRlclwiICYmICFlLnNoaWZ0S2V5ICYmIGhhbmRsZVNlbmRNZXNzYWdlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJUZXh0RmllbGQiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsIm5ld1VzZXJNZXNzYWdlIiwicHJldk1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwiZG9uZSIsInZhbHVlIiwicmVhZCIsImNodW5rIiwiZGVjb2RlIiwiZm9ybWF0dGVkQ2h1bmsiLCJyZXBsYWNlIiwibWFwIiwibXNnIiwiaW5kZXgiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaDEiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwiYm9yZGVyIiwicCIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJiZ2NvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImxhYmVsIiwiZnVsbFdpZHRoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwia2V5Iiwic2hpZnRLZXkiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});