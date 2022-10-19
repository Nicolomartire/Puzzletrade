"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search/[value]";
exports.ids = ["pages/api/search/[value]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/search/[value].js":
/*!*************************************!*\
  !*** ./pages/api/search/[value].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const searchValue = req.query.value;\n    const users = await prisma.user1.findMany({\n        where: {\n            firstname: {\n                startsWith: searchValue\n            }\n        }\n    });\n    res.status(200).json({\n        users\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoL1t2YWx1ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsV0FBVyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztJQUd0QyxNQUFNQyxLQUFLLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxLQUFLLENBQUNDLFFBQVEsQ0FBQztRQUN6Q0MsS0FBSyxFQUFFO1lBQ05DLFNBQVMsRUFBRTtnQkFDVkMsVUFBVSxFQUFFUixXQUFXO2FBQ3ZCO1NBQ0Q7S0FDRCxDQUFDO0lBR0ZELEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRVAsS0FBSztLQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV6emxldHJhZGUvLi9wYWdlcy9hcGkvc2VhcmNoL1t2YWx1ZV0uanM/MjFiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSByZXEucXVlcnkudmFsdWVcblxuXG5cdGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIxLmZpbmRNYW55KHsgXG5cdFx0d2hlcmU6IHsgXG5cdFx0XHRmaXJzdG5hbWU6IHtcblx0XHRcdFx0c3RhcnRzV2l0aDogc2VhcmNoVmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cblx0cmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VycyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2VhcmNoVmFsdWUiLCJxdWVyeSIsInZhbHVlIiwidXNlcnMiLCJ1c2VyMSIsImZpbmRNYW55Iiwid2hlcmUiLCJmaXJzdG5hbWUiLCJzdGFydHNXaXRoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/search/[value].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search/[value].js"));
module.exports = __webpack_exports__;

})();