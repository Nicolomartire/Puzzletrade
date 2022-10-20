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
exports.id = "pages/api/searchcity/[searchcity]";
exports.ids = ["pages/api/searchcity/[searchcity]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/searchcity/[searchcity].js":
/*!**********************************************!*\
  !*** ./pages/api/searchcity/[searchcity].js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const searchValue = req.query.searchcity;\n    const users = await prisma.user1.findMany({\n        where: {\n            piece: searchValue\n        }\n    });\n    res.status(200).json({\n        users\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoY2l0eS9bc2VhcmNoY2l0eV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTUMsV0FBVyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsVUFBVTtJQUV4QyxNQUFNQyxLQUFLLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxLQUFLLENBQUNDLFFBQVEsQ0FBQztRQUN6Q0MsS0FBSyxFQUFFO1lBQ05DLEtBQUssRUFBRVAsV0FBVztTQUNsQjtLQUNELENBQUM7SUFFRkQsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFTixLQUFLO0tBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXp6bGV0cmFkZS8uL3BhZ2VzL2FwaS9zZWFyY2hjaXR5L1tzZWFyY2hjaXR5XS5qcz9jNGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSByZXEucXVlcnkuc2VhcmNoY2l0eTtcblxuXHRjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyMS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHBpZWNlOiBzZWFyY2hWYWx1ZSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IHVzZXJzIH0pO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZWFyY2hWYWx1ZSIsInF1ZXJ5Iiwic2VhcmNoY2l0eSIsInVzZXJzIiwidXNlcjEiLCJmaW5kTWFueSIsIndoZXJlIiwicGllY2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/searchcity/[searchcity].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/searchcity/[searchcity].js"));
module.exports = __webpack_exports__;

})();