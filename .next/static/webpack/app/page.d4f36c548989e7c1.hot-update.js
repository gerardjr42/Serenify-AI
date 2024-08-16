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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _splinetool_react_spline_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splinetool/react-spline/next */ \"(app-pages-browser)/./node_modules/@splinetool/react-spline/dist/react-spline-next.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavBar */ \"(app-pages-browser)/./app/components/NavBar.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hello, I'm Serenify, your AI-powered therapy assistant. I'm here to support you on your mental health journey and provide information about our services. How can I help you today?\"\n        }\n    ]);\n    const handleSendMessage = async ()=>{\n        if (!message.trim()) return; // Prevent sending empty messages\n        setMessage(\"\");\n        const newUserMessage = {\n            role: \"user\",\n            content: message\n        };\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                newUserMessage\n            ]);\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    newUserMessage\n                ])\n            });\n            if (!response.ok) throw new Error(\"Failed to send message\");\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            let assistantMessage = {\n                role: \"assistant\",\n                content: \"\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    assistantMessage\n                ]);\n            while(true){\n                const { done, value } = await reader.read();\n                if (done) break;\n                const chunk = decoder.decode(value);\n                // // Add proper formatting\n                // const formattedChunk = chunk\n                //   // replace all newlines with <br>\n                //   .replace(\"<br>\", \"\\n\\n\");\n                assistantMessage.content += chunk;\n                // real-time updates of the assistant's response as it's being received, without affecting the other messages in the conversation history.\n                setMessages((prevMessages)=>prevMessages.map((msg, index)=>index === prevMessages.length - 1 ? {\n                            ...assistantMessage\n                        } : msg));\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return(// <>\n    //   <div>\n    //     <Spline scene=\"https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode\" />\n    //   </div>\n    //   <Box\n    //     width=\"100vw\"\n    //     height=\"100vh\"\n    //     display=\"flex\"\n    //     flexDirection=\"column\"\n    //     justifyContent=\"center\"\n    //     alignItems=\"center\"\n    //   >\n    //     <Box>\n    //       <h1>Serenify</h1>\n    //     </Box>\n    //     <Stack\n    //       direction=\"column\"\n    //       spacing={3}\n    //       width=\"600px\"\n    //       height=\"700px\"\n    //       border=\"1px solid #ccc\"\n    //       p={2}\n    //     >\n    //       <Stack\n    //         direction=\"column\"\n    //         p={2}\n    //         spacing={2}\n    //         flexGrow={1}\n    //         overflow=\"auto\"\n    //         maxHeight=\"100%\"\n    //         // width=\"100%\"\n    //       >\n    //         {messages.map((message, index) => (\n    //           <Box\n    //             key={index}\n    //             display=\"flex\"\n    //             justifyContent={\n    //               message.role === \"assistant\" ? \"flex-start\" : \"flex-end\"\n    //             }\n    //             width=\"100%\"\n    //             mb={2}\n    //           >\n    //             <Box\n    //               bgcolor={\n    //                 message.role === \"assistant\"\n    //                   ? \"primary.main\"\n    //                   : \"secondary.main\"\n    //               }\n    //               p={2}\n    //               borderRadius={2}\n    //               color=\"white\"\n    //               maxWidth=\"80%\"\n    //             >\n    //               <ReactMarkdown\n    //                 remarkPlugins={[remarkGfm]}\n    //                 components={{\n    //                   h1: ({ node, ...props }) => (\n    //                     <h1\n    //                       className=\"mt-4 mb-2 text-xl font-bold\"\n    //                       {...props}\n    //                     />\n    //                   ),\n    //                   h2: ({ node, ...props }) => (\n    //                     <h2\n    //                       className=\"mt-4 mb-2 text-lg font-semibold\"\n    //                       {...props}\n    //                     />\n    //                   ),\n    //                   p: ({ node, ...props }) => (\n    //                     <p className=\"mb-2\" {...props} />\n    //                   ),\n    //                   ul: ({ node, ...props }) => (\n    //                     <ul className=\"mb-2 ml-6 list-disc\" {...props} />\n    //                   ),\n    //                   ol: ({ node, ...props }) => (\n    //                     <ol className=\"mb-2 ml-6 list-decimal\" {...props} />\n    //                   ),\n    //                   li: ({ node, ...props }) => (\n    //                     <li className=\"mb-1\" {...props} />\n    //                   ),\n    //                 }}\n    //                 className=\"markdown-content\"\n    //               >\n    //                 {message.content}\n    //               </ReactMarkdown>\n    //             </Box>\n    //           </Box>\n    //         ))}\n    //       </Stack>\n    //       <Stack direction=\"row\" spacing={2}>\n    //         <TextField\n    //           label=\"message\"\n    //           fullWidth\n    //           value={message}\n    //           onChange={(e) => setMessage(e.target.value)}\n    //           onKeyDown={(e) =>\n    //             e.key === \"Enter\" && !e.shiftKey && handleSendMessage()\n    //           }\n    //         />\n    //         <Button variant=\"contained\" onClick={handleSendMessage}>\n    //           Send\n    //         </Button>\n    //       </Stack>\n    //     </Stack>\n    //   </Box>\n    // </>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"grid grid-cols-[1fr_3fr] text-white w-full mx-auto min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-cols-1 text-center\",\n                        children: \"Intro\"\n                    }, void 0, false, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-cols-2\",\n                        children: [\n                            \"ChatBot\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-screen w-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splinetool_react_spline_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    scene: \"https://prod.spline.design/6nHbXNojOn8UGSpN/scene.splinecode\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                    lineNumber: 176,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/theseus/Documents/Projects/Serenify-AI/app/page.js\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"EXL205CmAJGARt8TMxNFMSRDmoY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBaEx3QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgU3BsaW5lIGZyb20gXCJAc3BsaW5ldG9vbC9yZWFjdC1zcGxpbmUvbmV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZCYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiYXNzaXN0YW50XCIsXG4gICAgICBjb250ZW50OiBgSGVsbG8sIEknbSBTZXJlbmlmeSwgeW91ciBBSS1wb3dlcmVkIHRoZXJhcHkgYXNzaXN0YW50LiBJJ20gaGVyZSB0byBzdXBwb3J0IHlvdSBvbiB5b3VyIG1lbnRhbCBoZWFsdGggam91cm5leSBhbmQgcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCBvdXIgc2VydmljZXMuIEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheT9gLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbWVzc2FnZS50cmltKCkpIHJldHVybjsgLy8gUHJldmVudCBzZW5kaW5nIGVtcHR5IG1lc3NhZ2VzXG5cbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIGNvbnN0IG5ld1VzZXJNZXNzYWdlID0geyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9O1xuICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG5ld1VzZXJNZXNzYWdlXSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY2hhdFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoWy4uLm1lc3NhZ2VzLCBuZXdVc2VyTWVzc2FnZV0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzZW5kIG1lc3NhZ2VcIik7XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG4gICAgICBsZXQgYXNzaXN0YW50TWVzc2FnZSA9IHsgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCJcIiB9O1xuXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBhc3Npc3RhbnRNZXNzYWdlXSk7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmIChkb25lKSBicmVhaztcbiAgICAgICAgY29uc3QgY2h1bmsgPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gLy8gQWRkIHByb3BlciBmb3JtYXR0aW5nXG4gICAgICAgIC8vIGNvbnN0IGZvcm1hdHRlZENodW5rID0gY2h1bmtcbiAgICAgICAgLy8gICAvLyByZXBsYWNlIGFsbCBuZXdsaW5lcyB3aXRoIDxicj5cbiAgICAgICAgLy8gICAucmVwbGFjZShcIjxicj5cIiwgXCJcXG5cXG5cIik7XG5cbiAgICAgICAgYXNzaXN0YW50TWVzc2FnZS5jb250ZW50ICs9IGNodW5rO1xuICAgICAgICAvLyByZWFsLXRpbWUgdXBkYXRlcyBvZiB0aGUgYXNzaXN0YW50J3MgcmVzcG9uc2UgYXMgaXQncyBiZWluZyByZWNlaXZlZCwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIG90aGVyIG1lc3NhZ2VzIGluIHRoZSBjb252ZXJzYXRpb24gaGlzdG9yeS5cbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT5cbiAgICAgICAgICBwcmV2TWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PlxuICAgICAgICAgICAgaW5kZXggPT09IHByZXZNZXNzYWdlcy5sZW5ndGggLSAxID8geyAuLi5hc3Npc3RhbnRNZXNzYWdlIH0gOiBtc2dcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIC8vIDw+XG4gICAgLy8gICA8ZGl2PlxuICAgIC8vICAgICA8U3BsaW5lIHNjZW5lPVwiaHR0cHM6Ly9wcm9kLnNwbGluZS5kZXNpZ24vNm5IYlhOb2pPbjhVR1NwTi9zY2VuZS5zcGxpbmVjb2RlXCIgLz5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vICAgPEJveFxuICAgIC8vICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAvLyAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgIC8vICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgLy8gICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgIC8vICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgLy8gICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIC8vICAgPlxuICAgIC8vICAgICA8Qm94PlxuICAgIC8vICAgICAgIDxoMT5TZXJlbmlmeTwvaDE+XG4gICAgLy8gICAgIDwvQm94PlxuICAgIC8vICAgICA8U3RhY2tcbiAgICAvLyAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgIC8vICAgICAgIHNwYWNpbmc9ezN9XG4gICAgLy8gICAgICAgd2lkdGg9XCI2MDBweFwiXG4gICAgLy8gICAgICAgaGVpZ2h0PVwiNzAwcHhcIlxuICAgIC8vICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjY2NjXCJcbiAgICAvLyAgICAgICBwPXsyfVxuICAgIC8vICAgICA+XG4gICAgLy8gICAgICAgPFN0YWNrXG4gICAgLy8gICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgIC8vICAgICAgICAgcD17Mn1cbiAgICAvLyAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgLy8gICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAvLyAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXG4gICAgLy8gICAgICAgICBtYXhIZWlnaHQ9XCIxMDAlXCJcbiAgICAvLyAgICAgICAgIC8vIHdpZHRoPVwiMTAwJVwiXG4gICAgLy8gICAgICAgPlxuICAgIC8vICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAvLyAgICAgICAgICAgPEJveFxuICAgIC8vICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgIC8vICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcbiAgICAvLyAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwiXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgLy8gICAgICAgICAgICAgbWI9ezJ9XG4gICAgLy8gICAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgICA8Qm94XG4gICAgLy8gICAgICAgICAgICAgICBiZ2NvbG9yPXtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgPyBcInByaW1hcnkubWFpblwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgOiBcInNlY29uZGFyeS5tYWluXCJcbiAgICAvLyAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgLy8gICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezJ9XG4gICAgLy8gICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAvLyAgICAgICAgICAgICAgIG1heFdpZHRoPVwiODAlXCJcbiAgICAvLyAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgIC8vICAgICAgICAgICAgICAgICByZW1hcmtQbHVnaW5zPXtbcmVtYXJrR2ZtXX1cbiAgICAvLyAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgIC8vICAgICAgICAgICAgICAgICAgIGgxOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtYi0yIHRleHQteGwgZm9udC1ib2xkXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgICApLFxuICAgIC8vICAgICAgICAgICAgICAgICAgIGgyOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtYi0yIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICAgICAgICAgICAgKSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICBwOiAoeyBub2RlLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCIgey4uLnByb3BzfSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgdWw6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi0yIG1sLTYgbGlzdC1kaXNjXCIgey4uLnByb3BzfSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgb2w6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJtYi0yIG1sLTYgbGlzdC1kZWNpbWFsXCIgey4uLnByb3BzfSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICksXG4gICAgLy8gICAgICAgICAgICAgICAgICAgbGk6ICh7IG5vZGUsIC4uLnByb3BzIH0pID0+IChcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCIgey4uLnByb3BzfSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICAgICksXG4gICAgLy8gICAgICAgICAgICAgICAgIH19XG4gICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtkb3duLWNvbnRlbnRcIlxuICAgIC8vICAgICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgIC8vICAgICAgICAgICAgICAgPC9SZWFjdE1hcmtkb3duPlxuICAgIC8vICAgICAgICAgICAgIDwvQm94PlxuICAgIC8vICAgICAgICAgICA8L0JveD5cbiAgICAvLyAgICAgICAgICkpfVxuICAgIC8vICAgICAgIDwvU3RhY2s+XG4gICAgLy8gICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9PlxuICAgIC8vICAgICAgICAgPFRleHRGaWVsZFxuICAgIC8vICAgICAgICAgICBsYWJlbD1cIm1lc3NhZ2VcIlxuICAgIC8vICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAvLyAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgLy8gICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgLy8gICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+XG4gICAgLy8gICAgICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZS5zaGlmdEtleSAmJiBoYW5kbGVTZW5kTWVzc2FnZSgpXG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+XG4gICAgLy8gICAgICAgICAgIFNlbmRcbiAgICAvLyAgICAgICAgIDwvQnV0dG9uPlxuICAgIC8vICAgICAgIDwvU3RhY2s+XG4gICAgLy8gICAgIDwvU3RhY2s+XG4gICAgLy8gICA8L0JveD5cbiAgICAvLyA8Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIFwiPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtWzFmcl8zZnJdIHRleHQtd2hpdGUgdy1mdWxsIG14LWF1dG8gbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEgdGV4dC1jZW50ZXJcIj5JbnRybzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29scy0yXCI+XG4gICAgICAgICAgQ2hhdEJvdFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1hdXRvXCI+XG4gICAgICAgICAgICA8U3BsaW5lIHNjZW5lPVwiaHR0cHM6Ly9wcm9kLnNwbGluZS5kZXNpZ24vNm5IYlhOb2pPbjhVR1NwTi9zY2VuZS5zcGxpbmVjb2RlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3BsaW5lIiwidXNlU3RhdGUiLCJOYXZCYXIiLCJIb21lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJuZXdVc2VyTWVzc2FnZSIsInByZXZNZXNzYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiYXNzaXN0YW50TWVzc2FnZSIsImRvbmUiLCJ2YWx1ZSIsInJlYWQiLCJjaHVuayIsImRlY29kZSIsIm1hcCIsIm1zZyIsImluZGV4IiwibGVuZ3RoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInNjZW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});