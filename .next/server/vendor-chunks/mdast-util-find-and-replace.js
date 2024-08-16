"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-find-and-replace";
exports.ids = ["vendor-chunks/mdast-util-find-and-replace"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findAndReplace: () => (/* binding */ findAndReplace)\n/* harmony export */ });\n/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ \"(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js\");\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-is */ \"(ssr)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').Nodes} Nodes\n * @typedef {import('mdast').Parents} Parents\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast').Text} Text\n * @typedef {import('unist-util-visit-parents').Test} Test\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */\n\n/**\n * @typedef RegExpMatchObject\n *   Info on the match.\n * @property {number} index\n *   The index of the search at which the result was found.\n * @property {string} input\n *   A copy of the search string in the text node.\n * @property {[...Array<Parents>, Text]} stack\n *   All ancestors of the text node, where the last node is the text itself.\n *\n * @typedef {RegExp | string} Find\n *   Pattern to find.\n *\n *   Strings are escaped and then turned into global expressions.\n *\n * @typedef {Array<FindAndReplaceTuple>} FindAndReplaceList\n *   Several find and replaces, in array form.\n *\n * @typedef {[Find, Replace?]} FindAndReplaceTuple\n *   Find and replace in tuple form.\n *\n * @typedef {ReplaceFunction | string | null | undefined} Replace\n *   Thing to replace with.\n *\n * @callback ReplaceFunction\n *   Callback called when a search matches.\n * @param {...any} parameters\n *   The parameters are the result of corresponding search expression:\n *\n *   * `value` (`string`) — whole match\n *   * `...capture` (`Array<string>`) — matches from regex capture groups\n *   * `match` (`RegExpMatchObject`) — info on the match\n * @returns {Array<PhrasingContent> | PhrasingContent | string | false | null | undefined}\n *   Thing to replace with.\n *\n *   * when `null`, `undefined`, `''`, remove the match\n *   * …or when `false`, do not replace at all\n *   * …or when `string`, replace with a text node of that value\n *   * …or when `Node` or `Array<Node>`, replace with those nodes\n *\n * @typedef {[RegExp, ReplaceFunction]} Pair\n *   Normalized find and replace.\n *\n * @typedef {Array<Pair>} Pairs\n *   All find and replaced.\n *\n * @typedef Options\n *   Configuration.\n * @property {Test | null | undefined} [ignore]\n *   Test for which nodes to ignore (optional).\n */\n\n\n\n\n\n/**\n * Find patterns in a tree and replace them.\n *\n * The algorithm searches the tree in *preorder* for complete values in `Text`\n * nodes.\n * Partial matches are not supported.\n *\n * @param {Nodes} tree\n *   Tree to change.\n * @param {FindAndReplaceList | FindAndReplaceTuple} list\n *   Patterns to find.\n * @param {Options | null | undefined} [options]\n *   Configuration (when `find` is not `Find`).\n * @returns {undefined}\n *   Nothing.\n */\nfunction findAndReplace(tree, list, options) {\n  const settings = options || {}\n  const ignored = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_1__.convert)(settings.ignore || [])\n  const pairs = toPairs(list)\n  let pairIndex = -1\n\n  while (++pairIndex < pairs.length) {\n    (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_2__.visitParents)(tree, 'text', visitor)\n  }\n\n  /** @type {import('unist-util-visit-parents').BuildVisitor<Root, 'text'>} */\n  function visitor(node, parents) {\n    let index = -1\n    /** @type {Parents | undefined} */\n    let grandparent\n\n    while (++index < parents.length) {\n      const parent = parents[index]\n      /** @type {Array<Nodes> | undefined} */\n      const siblings = grandparent ? grandparent.children : undefined\n\n      if (\n        ignored(\n          parent,\n          siblings ? siblings.indexOf(parent) : undefined,\n          grandparent\n        )\n      ) {\n        return\n      }\n\n      grandparent = parent\n    }\n\n    if (grandparent) {\n      return handler(node, parents)\n    }\n  }\n\n  /**\n   * Handle a text node which is not in an ignored parent.\n   *\n   * @param {Text} node\n   *   Text node.\n   * @param {Array<Parents>} parents\n   *   Parents.\n   * @returns {VisitorResult}\n   *   Result.\n   */\n  function handler(node, parents) {\n    const parent = parents[parents.length - 1]\n    const find = pairs[pairIndex][0]\n    const replace = pairs[pairIndex][1]\n    let start = 0\n    /** @type {Array<Nodes>} */\n    const siblings = parent.children\n    const index = siblings.indexOf(node)\n    let change = false\n    /** @type {Array<PhrasingContent>} */\n    let nodes = []\n\n    find.lastIndex = 0\n\n    let match = find.exec(node.value)\n\n    while (match) {\n      const position = match.index\n      /** @type {RegExpMatchObject} */\n      const matchObject = {\n        index: match.index,\n        input: match.input,\n        stack: [...parents, node]\n      }\n      let value = replace(...match, matchObject)\n\n      if (typeof value === 'string') {\n        value = value.length > 0 ? {type: 'text', value} : undefined\n      }\n\n      // It wasn’t a match after all.\n      if (value === false) {\n        // False acts as if there was no match.\n        // So we need to reset `lastIndex`, which currently being at the end of\n        // the current match, to the beginning.\n        find.lastIndex = position + 1\n      } else {\n        if (start !== position) {\n          nodes.push({\n            type: 'text',\n            value: node.value.slice(start, position)\n          })\n        }\n\n        if (Array.isArray(value)) {\n          nodes.push(...value)\n        } else if (value) {\n          nodes.push(value)\n        }\n\n        start = position + match[0].length\n        change = true\n      }\n\n      if (!find.global) {\n        break\n      }\n\n      match = find.exec(node.value)\n    }\n\n    if (change) {\n      if (start < node.value.length) {\n        nodes.push({type: 'text', value: node.value.slice(start)})\n      }\n\n      parent.children.splice(index, 1, ...nodes)\n    } else {\n      nodes = [node]\n    }\n\n    return index + nodes.length\n  }\n}\n\n/**\n * Turn a tuple or a list of tuples into pairs.\n *\n * @param {FindAndReplaceList | FindAndReplaceTuple} tupleOrList\n *   Schema.\n * @returns {Pairs}\n *   Clean pairs.\n */\nfunction toPairs(tupleOrList) {\n  /** @type {Pairs} */\n  const result = []\n\n  if (!Array.isArray(tupleOrList)) {\n    throw new TypeError('Expected find and replace tuple or list of tuples')\n  }\n\n  /** @type {FindAndReplaceList} */\n  // @ts-expect-error: correct.\n  const list =\n    !tupleOrList[0] || Array.isArray(tupleOrList[0])\n      ? tupleOrList\n      : [tupleOrList]\n\n  let index = -1\n\n  while (++index < list.length) {\n    const tuple = list[index]\n    result.push([toExpression(tuple[0]), toFunction(tuple[1])])\n  }\n\n  return result\n}\n\n/**\n * Turn a find into an expression.\n *\n * @param {Find} find\n *   Find.\n * @returns {RegExp}\n *   Expression.\n */\nfunction toExpression(find) {\n  return typeof find === 'string' ? new RegExp((0,escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(find), 'g') : find\n}\n\n/**\n * Turn a replace into a function.\n *\n * @param {Replace} replace\n *   Replace.\n * @returns {ReplaceFunction}\n *   Function.\n */\nfunction toFunction(replace) {\n  return typeof replace === 'function'\n    ? replace\n    : function () {\n        return replace\n      }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLGtEQUFrRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBLGFBQWEsNkNBQTZDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTs7QUFFeUM7QUFDWTtBQUNoQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLDBDQUEwQztBQUNyRDtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0JBQWtCLHNEQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNFQUFZO0FBQ2hCOztBQUVBLGFBQWEsK0RBQStEO0FBQzVFO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQTZDO0FBQ2pFOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQTBDO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0VBQU07QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FpX2NoYXQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2xpYi9pbmRleC5qcz83OTUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Ob2Rlc30gTm9kZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGFyZW50c30gUGFyZW50c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5QaHJhc2luZ0NvbnRlbnR9IFBocmFzaW5nQ29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRleHR9IFRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlRlc3R9IFRlc3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIFJlZ0V4cE1hdGNoT2JqZWN0XG4gKiAgIEluZm8gb24gdGhlIG1hdGNoLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4XG4gKiAgIFRoZSBpbmRleCBvZiB0aGUgc2VhcmNoIGF0IHdoaWNoIHRoZSByZXN1bHQgd2FzIGZvdW5kLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlucHV0XG4gKiAgIEEgY29weSBvZiB0aGUgc2VhcmNoIHN0cmluZyBpbiB0aGUgdGV4dCBub2RlLlxuICogQHByb3BlcnR5IHtbLi4uQXJyYXk8UGFyZW50cz4sIFRleHRdfSBzdGFja1xuICogICBBbGwgYW5jZXN0b3JzIG9mIHRoZSB0ZXh0IG5vZGUsIHdoZXJlIHRoZSBsYXN0IG5vZGUgaXMgdGhlIHRleHQgaXRzZWxmLlxuICpcbiAqIEB0eXBlZGVmIHtSZWdFeHAgfCBzdHJpbmd9IEZpbmRcbiAqICAgUGF0dGVybiB0byBmaW5kLlxuICpcbiAqICAgU3RyaW5ncyBhcmUgZXNjYXBlZCBhbmQgdGhlbiB0dXJuZWQgaW50byBnbG9iYWwgZXhwcmVzc2lvbnMuXG4gKlxuICogQHR5cGVkZWYge0FycmF5PEZpbmRBbmRSZXBsYWNlVHVwbGU+fSBGaW5kQW5kUmVwbGFjZUxpc3RcbiAqICAgU2V2ZXJhbCBmaW5kIGFuZCByZXBsYWNlcywgaW4gYXJyYXkgZm9ybS5cbiAqXG4gKiBAdHlwZWRlZiB7W0ZpbmQsIFJlcGxhY2U/XX0gRmluZEFuZFJlcGxhY2VUdXBsZVxuICogICBGaW5kIGFuZCByZXBsYWNlIGluIHR1cGxlIGZvcm0uXG4gKlxuICogQHR5cGVkZWYge1JlcGxhY2VGdW5jdGlvbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFJlcGxhY2VcbiAqICAgVGhpbmcgdG8gcmVwbGFjZSB3aXRoLlxuICpcbiAqIEBjYWxsYmFjayBSZXBsYWNlRnVuY3Rpb25cbiAqICAgQ2FsbGJhY2sgY2FsbGVkIHdoZW4gYSBzZWFyY2ggbWF0Y2hlcy5cbiAqIEBwYXJhbSB7Li4uYW55fSBwYXJhbWV0ZXJzXG4gKiAgIFRoZSBwYXJhbWV0ZXJzIGFyZSB0aGUgcmVzdWx0IG9mIGNvcnJlc3BvbmRpbmcgc2VhcmNoIGV4cHJlc3Npb246XG4gKlxuICogICAqIGB2YWx1ZWAgKGBzdHJpbmdgKSDigJQgd2hvbGUgbWF0Y2hcbiAqICAgKiBgLi4uY2FwdHVyZWAgKGBBcnJheTxzdHJpbmc+YCkg4oCUIG1hdGNoZXMgZnJvbSByZWdleCBjYXB0dXJlIGdyb3Vwc1xuICogICAqIGBtYXRjaGAgKGBSZWdFeHBNYXRjaE9iamVjdGApIOKAlCBpbmZvIG9uIHRoZSBtYXRjaFxuICogQHJldHVybnMge0FycmF5PFBocmFzaW5nQ29udGVudD4gfCBQaHJhc2luZ0NvbnRlbnQgfCBzdHJpbmcgfCBmYWxzZSB8IG51bGwgfCB1bmRlZmluZWR9XG4gKiAgIFRoaW5nIHRvIHJlcGxhY2Ugd2l0aC5cbiAqXG4gKiAgICogd2hlbiBgbnVsbGAsIGB1bmRlZmluZWRgLCBgJydgLCByZW1vdmUgdGhlIG1hdGNoXG4gKiAgICog4oCmb3Igd2hlbiBgZmFsc2VgLCBkbyBub3QgcmVwbGFjZSBhdCBhbGxcbiAqICAgKiDigKZvciB3aGVuIGBzdHJpbmdgLCByZXBsYWNlIHdpdGggYSB0ZXh0IG5vZGUgb2YgdGhhdCB2YWx1ZVxuICogICAqIOKApm9yIHdoZW4gYE5vZGVgIG9yIGBBcnJheTxOb2RlPmAsIHJlcGxhY2Ugd2l0aCB0aG9zZSBub2Rlc1xuICpcbiAqIEB0eXBlZGVmIHtbUmVnRXhwLCBSZXBsYWNlRnVuY3Rpb25dfSBQYWlyXG4gKiAgIE5vcm1hbGl6ZWQgZmluZCBhbmQgcmVwbGFjZS5cbiAqXG4gKiBAdHlwZWRlZiB7QXJyYXk8UGFpcj59IFBhaXJzXG4gKiAgIEFsbCBmaW5kIGFuZCByZXBsYWNlZC5cbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKiBAcHJvcGVydHkge1Rlc3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbaWdub3JlXVxuICogICBUZXN0IGZvciB3aGljaCBub2RlcyB0byBpZ25vcmUgKG9wdGlvbmFsKS5cbiAqL1xuXG5pbXBvcnQgZXNjYXBlIGZyb20gJ2VzY2FwZS1zdHJpbmctcmVnZXhwJ1xuaW1wb3J0IHt2aXNpdFBhcmVudHN9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcblxuLyoqXG4gKiBGaW5kIHBhdHRlcm5zIGluIGEgdHJlZSBhbmQgcmVwbGFjZSB0aGVtLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gc2VhcmNoZXMgdGhlIHRyZWUgaW4gKnByZW9yZGVyKiBmb3IgY29tcGxldGUgdmFsdWVzIGluIGBUZXh0YFxuICogbm9kZXMuXG4gKiBQYXJ0aWFsIG1hdGNoZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtOb2Rlc30gdHJlZVxuICogICBUcmVlIHRvIGNoYW5nZS5cbiAqIEBwYXJhbSB7RmluZEFuZFJlcGxhY2VMaXN0IHwgRmluZEFuZFJlcGxhY2VUdXBsZX0gbGlzdFxuICogICBQYXR0ZXJucyB0byBmaW5kLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKHdoZW4gYGZpbmRgIGlzIG5vdCBgRmluZGApLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbmRSZXBsYWNlKHRyZWUsIGxpc3QsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIGNvbnN0IGlnbm9yZWQgPSBjb252ZXJ0KHNldHRpbmdzLmlnbm9yZSB8fCBbXSlcbiAgY29uc3QgcGFpcnMgPSB0b1BhaXJzKGxpc3QpXG4gIGxldCBwYWlySW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK3BhaXJJbmRleCA8IHBhaXJzLmxlbmd0aCkge1xuICAgIHZpc2l0UGFyZW50cyh0cmVlLCAndGV4dCcsIHZpc2l0b3IpXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJykuQnVpbGRWaXNpdG9yPFJvb3QsICd0ZXh0Jz59ICovXG4gIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgcGFyZW50cykge1xuICAgIGxldCBpbmRleCA9IC0xXG4gICAgLyoqIEB0eXBlIHtQYXJlbnRzIHwgdW5kZWZpbmVkfSAqL1xuICAgIGxldCBncmFuZHBhcmVudFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1tpbmRleF1cbiAgICAgIC8qKiBAdHlwZSB7QXJyYXk8Tm9kZXM+IHwgdW5kZWZpbmVkfSAqL1xuICAgICAgY29uc3Qgc2libGluZ3MgPSBncmFuZHBhcmVudCA/IGdyYW5kcGFyZW50LmNoaWxkcmVuIDogdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgaWdub3JlZChcbiAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgc2libGluZ3MgPyBzaWJsaW5ncy5pbmRleE9mKHBhcmVudCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZ3JhbmRwYXJlbnRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBncmFuZHBhcmVudCA9IHBhcmVudFxuICAgIH1cblxuICAgIGlmIChncmFuZHBhcmVudCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIobm9kZSwgcGFyZW50cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgdGV4dCBub2RlIHdoaWNoIGlzIG5vdCBpbiBhbiBpZ25vcmVkIHBhcmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtUZXh0fSBub2RlXG4gICAqICAgVGV4dCBub2RlLlxuICAgKiBAcGFyYW0ge0FycmF5PFBhcmVudHM+fSBwYXJlbnRzXG4gICAqICAgUGFyZW50cy5cbiAgICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gICAqICAgUmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlcihub2RlLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgZmluZCA9IHBhaXJzW3BhaXJJbmRleF1bMF1cbiAgICBjb25zdCByZXBsYWNlID0gcGFpcnNbcGFpckluZGV4XVsxXVxuICAgIGxldCBzdGFydCA9IDBcbiAgICAvKiogQHR5cGUge0FycmF5PE5vZGVzPn0gKi9cbiAgICBjb25zdCBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlblxuICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZihub2RlKVxuICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuICAgIC8qKiBAdHlwZSB7QXJyYXk8UGhyYXNpbmdDb250ZW50Pn0gKi9cbiAgICBsZXQgbm9kZXMgPSBbXVxuXG4gICAgZmluZC5sYXN0SW5kZXggPSAwXG5cbiAgICBsZXQgbWF0Y2ggPSBmaW5kLmV4ZWMobm9kZS52YWx1ZSlcblxuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBtYXRjaC5pbmRleFxuICAgICAgLyoqIEB0eXBlIHtSZWdFeHBNYXRjaE9iamVjdH0gKi9cbiAgICAgIGNvbnN0IG1hdGNoT2JqZWN0ID0ge1xuICAgICAgICBpbmRleDogbWF0Y2guaW5kZXgsXG4gICAgICAgIGlucHV0OiBtYXRjaC5pbnB1dCxcbiAgICAgICAgc3RhY2s6IFsuLi5wYXJlbnRzLCBub2RlXVxuICAgICAgfVxuICAgICAgbGV0IHZhbHVlID0gcmVwbGFjZSguLi5tYXRjaCwgbWF0Y2hPYmplY3QpXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoID4gMCA/IHt0eXBlOiAndGV4dCcsIHZhbHVlfSA6IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICAvLyBJdCB3YXNu4oCZdCBhIG1hdGNoIGFmdGVyIGFsbC5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gRmFsc2UgYWN0cyBhcyBpZiB0aGVyZSB3YXMgbm8gbWF0Y2guXG4gICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gcmVzZXQgYGxhc3RJbmRleGAsIHdoaWNoIGN1cnJlbnRseSBiZWluZyBhdCB0aGUgZW5kIG9mXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IG1hdGNoLCB0byB0aGUgYmVnaW5uaW5nLlxuICAgICAgICBmaW5kLmxhc3RJbmRleCA9IHBvc2l0aW9uICsgMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXJ0ICE9PSBwb3NpdGlvbikge1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdmFsdWU6IG5vZGUudmFsdWUuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKC4uLnZhbHVlKVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgbm9kZXMucHVzaCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0ID0gcG9zaXRpb24gKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbmQuZ2xvYmFsKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIG1hdGNoID0gZmluZC5leGVjKG5vZGUudmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgaWYgKHN0YXJ0IDwgbm9kZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZS5zbGljZShzdGFydCl9KVxuICAgICAgfVxuXG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxLCAuLi5ub2RlcylcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMgPSBbbm9kZV1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXggKyBub2Rlcy5sZW5ndGhcbiAgfVxufVxuXG4vKipcbiAqIFR1cm4gYSB0dXBsZSBvciBhIGxpc3Qgb2YgdHVwbGVzIGludG8gcGFpcnMuXG4gKlxuICogQHBhcmFtIHtGaW5kQW5kUmVwbGFjZUxpc3QgfCBGaW5kQW5kUmVwbGFjZVR1cGxlfSB0dXBsZU9yTGlzdFxuICogICBTY2hlbWEuXG4gKiBAcmV0dXJucyB7UGFpcnN9XG4gKiAgIENsZWFuIHBhaXJzLlxuICovXG5mdW5jdGlvbiB0b1BhaXJzKHR1cGxlT3JMaXN0KSB7XG4gIC8qKiBAdHlwZSB7UGFpcnN9ICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHR1cGxlT3JMaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGZpbmQgYW5kIHJlcGxhY2UgdHVwbGUgb3IgbGlzdCBvZiB0dXBsZXMnKVxuICB9XG5cbiAgLyoqIEB0eXBlIHtGaW5kQW5kUmVwbGFjZUxpc3R9ICovXG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IGNvcnJlY3QuXG4gIGNvbnN0IGxpc3QgPVxuICAgICF0dXBsZU9yTGlzdFswXSB8fCBBcnJheS5pc0FycmF5KHR1cGxlT3JMaXN0WzBdKVxuICAgICAgPyB0dXBsZU9yTGlzdFxuICAgICAgOiBbdHVwbGVPckxpc3RdXG5cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgY29uc3QgdHVwbGUgPSBsaXN0W2luZGV4XVxuICAgIHJlc3VsdC5wdXNoKFt0b0V4cHJlc3Npb24odHVwbGVbMF0pLCB0b0Z1bmN0aW9uKHR1cGxlWzFdKV0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogVHVybiBhIGZpbmQgaW50byBhbiBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7RmluZH0gZmluZFxuICogICBGaW5kLlxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICAgRXhwcmVzc2lvbi5cbiAqL1xuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGZpbmQpIHtcbiAgcmV0dXJuIHR5cGVvZiBmaW5kID09PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAoZXNjYXBlKGZpbmQpLCAnZycpIDogZmluZFxufVxuXG4vKipcbiAqIFR1cm4gYSByZXBsYWNlIGludG8gYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlcGxhY2V9IHJlcGxhY2VcbiAqICAgUmVwbGFjZS5cbiAqIEByZXR1cm5zIHtSZXBsYWNlRnVuY3Rpb259XG4gKiAgIEZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHJlcGxhY2UpIHtcbiAgcmV0dXJuIHR5cGVvZiByZXBsYWNlID09PSAnZnVuY3Rpb24nXG4gICAgPyByZXBsYWNlXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlXG4gICAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ escapeStringRegexp)\n/* harmony export */ });\nfunction escapeStringRegexp(string) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\t// Escape characters with special meaning either inside or outside character sets.\n\t// Use a simple backslash escape when it’s always valid, and a `\\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.\n\treturn string\n\t\t.replace(/[|\\\\{}()[\\]^$+*?.]/g, '\\\\$&')\n\t\t.replace(/-/g, '\\\\x2d');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haV9jaGF0Ly4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZS9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanM/MTZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVTdHJpbmdSZWdleHAoc3RyaW5nKSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHQvLyBFc2NhcGUgY2hhcmFjdGVycyB3aXRoIHNwZWNpYWwgbWVhbmluZyBlaXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgY2hhcmFjdGVyIHNldHMuXG5cdC8vIFVzZSBhIHNpbXBsZSBiYWNrc2xhc2ggZXNjYXBlIHdoZW4gaXTigJlzIGFsd2F5cyB2YWxpZCwgYW5kIGEgYFxceG5uYCBlc2NhcGUgd2hlbiB0aGUgc2ltcGxlciBmb3JtIHdvdWxkIGJlIGRpc2FsbG93ZWQgYnkgVW5pY29kZSBwYXR0ZXJuc+KAmSBzdHJpY3RlciBncmFtbWFyLlxuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJylcblx0XHQucmVwbGFjZSgvLS9nLCAnXFxcXHgyZCcpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js\n");

/***/ })

};
;