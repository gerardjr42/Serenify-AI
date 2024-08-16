"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-title";
exports.ids = ["vendor-chunks/micromark-factory-title"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-title/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-title/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryTitle: () => (/* binding */ factoryTitle)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(ssr)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n\n\n/**\n * Parse titles.\n *\n * ###### Examples\n *\n * ```markdown\n * \"a\"\n * 'b'\n * (c)\n * \"a\n * b\"\n * 'a\n *     b'\n * (a\\)b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole title (`\"a\"`, `'b'`, `(c)`).\n * @param {TokenType} markerType\n *   Type for the markers (`\"`, `'`, `(`, and `)`).\n * @param {TokenType} stringType\n *   Type for the value (`a`).\n * @returns {State}\n *   Start state.\n */\n// eslint-disable-next-line max-params\nfunction factoryTitle(effects, ok, nok, type, markerType, stringType) {\n  /** @type {NonNullable<Code>} */\n  let marker\n\n  return start\n\n  /**\n   * Start of title.\n   *\n   * ```markdown\n   * > | \"a\"\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.quotationMark ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.apostrophe ||\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis\n    ) {\n      effects.enter(type)\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      marker = code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis : code\n      return begin\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * After opening marker.\n   *\n   * This is also used at the closing marker.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function begin(code) {\n    if (code === marker) {\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    return atBreak(code)\n  }\n\n  /**\n   * At something, before something else.\n   *\n   * ```markdown\n   * > | \"a\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function atBreak(code) {\n    if (code === marker) {\n      effects.exit(stringType)\n      return begin(marker)\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof) {\n      return nok(code)\n    }\n\n    // Note: blank lines can’t exist in content.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n      // To do: use `space_or_tab_eol_with_options`, connect.\n      effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.lineEnding)\n      return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, atBreak, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.linePrefix)\n    }\n\n    effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.constants.contentTypeString})\n    return inside(code)\n  }\n\n  /**\n   *\n   *\n   * @type {State}\n   */\n  function inside(code) {\n    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n      effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString)\n      return atBreak(code)\n    }\n\n    effects.consume(code)\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? escape : inside\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | \"a\\*b\"\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function escape(code) {\n    if (code === marker || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n      effects.consume(code)\n      return inside\n    }\n\n    return inside(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQsYUFBYSx3Q0FBd0M7QUFDckQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSwwQ0FBMEM7QUFDdkQ7O0FBRW9EO0FBQ087QUFDRTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUCxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0RBQUs7QUFDcEIsZUFBZSx3REFBSztBQUNwQixlQUFlLHdEQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQUssbUJBQW1CLHdEQUFLO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix3REFBSztBQUN0QjtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUI7QUFDQSxvQkFBb0Isd0RBQUs7QUFDekI7QUFDQSxtQkFBbUIsd0RBQUs7QUFDeEIsYUFBYSxxRUFBWSxtQkFBbUIsd0RBQUs7QUFDakQ7O0FBRUEsa0JBQWtCLHdEQUFLLGVBQWUsYUFBYSw0REFBUyxtQkFBbUI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9DQUFvQyx3REFBSyxRQUFRLDRFQUFrQjtBQUNuRSxtQkFBbUIsd0RBQUs7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3REFBSztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQ0FBb0Msd0RBQUs7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FpX2NoYXQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktdGl0bGUvZGV2L2luZGV4LmpzPzJlYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvZGV9IENvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5UeXBlfSBUb2tlblR5cGVcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZ30gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIFBhcnNlIHRpdGxlcy5cbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBgYGBtYXJrZG93blxuICogXCJhXCJcbiAqICdiJ1xuICogKGMpXG4gKiBcImFcbiAqIGJcIlxuICogJ2FcbiAqICAgICBiJ1xuICogKGFcXCliKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIG9mIHRoZSB3aG9sZSB0aXRsZSAoYFwiYVwiYCwgYCdiJ2AsIGAoYylgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgXCJgLCBgJ2AsIGAoYCwgYW5kIGApYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlUaXRsZShlZmZlY3RzLCBvaywgbm9rLCB0eXBlLCBtYXJrZXJUeXBlLCBzdHJpbmdUeXBlKSB7XG4gIC8qKiBAdHlwZSB7Tm9uTnVsbGFibGU8Q29kZT59ICovXG4gIGxldCBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgdGl0bGUuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcIlxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLnF1b3RhdGlvbk1hcmsgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmFwb3N0cm9waGUgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpc1xuICAgICkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIG1hcmtlciA9IGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcyA/IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgOiBjb2RlXG4gICAgICByZXR1cm4gYmVnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgb3BlbmluZyBtYXJrZXIuXG4gICAqXG4gICAqIFRoaXMgaXMgYWxzbyB1c2VkIGF0IHRoZSBjbG9zaW5nIG1hcmtlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFwiYVwiXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYmVnaW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IHNvbWV0aGluZywgYmVmb3JlIHNvbWV0aGluZyBlbHNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgXCJhXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBiZWdpbihtYXJrZXIpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmVvZikge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIC8vIE5vdGU6IGJsYW5rIGxpbmVzIGNhbuKAmXQgZXhpc3QgaW4gY29udGVudC5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICAvLyBUbyBkbzogdXNlIGBzcGFjZV9vcl90YWJfZW9sX3dpdGhfb3B0aW9uc2AsIGNvbm5lY3QuXG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhdEJyZWFrLCB0eXBlcy5saW5lUHJlZml4KVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gaW5zaWRlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyIHx8IGNvZGUgPT09IGNvZGVzLmVvZiB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5jaHVua1N0cmluZylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IGVzY2FwZSA6IGluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBcImFcXCpiXCJcbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zaWRlKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-title/dev/index.js\n");

/***/ })

};
;