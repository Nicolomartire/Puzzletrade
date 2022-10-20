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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const { value , type =\"user\"  } = req.query;\n    // const id = req.query.id;\n    // const puzzles = await prisma.puzzle1.delete({\n    // \twhere: {\n    // \t\tid: id\n    // \t}\n    // })\n    const queryType = {\n        \"user\": \"user1\",\n        \"puzzle\": \"puzzle1\"\n    }[type];\n    const searchType = {\n        \"user\": \"city\",\n        \"puzzle\": \"pieces\"\n    }[type];\n    const searchObj = type === \"puzzle\" ? {\n        gte: Number(value)\n    } : {\n        startsWith: value\n    };\n    const result = await prisma[queryType].findMany({\n        where: {\n            [searchType]: {\n                ...searchObj\n            }\n        }\n    });\n    res.status(200).json({\n        result\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoL1t2YWx1ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFDQyxLQUFLLEdBQUVDLElBQUksRUFBRyxNQUFNLEdBQUMsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO0lBRXhDLDJCQUEyQjtJQUUzQixnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLFdBQVc7SUFDWCxLQUFLO0lBQ0wsS0FBSztJQUVMLE1BQU1DLFNBQVMsR0FBRztRQUNqQixNQUFNLEVBQUUsT0FBTztRQUNmLFFBQVEsRUFBRSxTQUFTO0tBQ25CLENBQUNGLElBQUksQ0FBQztJQUVQLE1BQU1HLFVBQVUsR0FBRztRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxRQUFRO0tBQ2xCLENBQUNILElBQUksQ0FBQztJQUVQLE1BQU1JLFNBQVMsR0FBR0osSUFBSSxLQUFLLFFBQVEsR0FBRztRQUNyQ0ssR0FBRyxFQUFFQyxNQUFNLENBQUNQLEtBQUssQ0FBQztLQUNsQixHQUFHO1FBQ0hRLFVBQVUsRUFBRVIsS0FBSztLQUNqQjtJQUVELE1BQU1TLE1BQU0sR0FBRyxNQUFNYixNQUFNLENBQUNPLFNBQVMsQ0FBQyxDQUFDTyxRQUFRLENBQUM7UUFDL0NDLEtBQUssRUFBRTtZQUNOLENBQUNQLFVBQVUsQ0FBQyxFQUFFO2dCQUNiLEdBQUdDLFNBQVM7YUFDWjtTQUNEO0tBS0QsQ0FBQztJQUVGTixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVKLE1BQU07S0FBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1enpsZXRyYWRlLy4vcGFnZXMvYXBpL3NlYXJjaC9bdmFsdWVdLmpzPzIxYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRjb25zdCB7dmFsdWUsIHR5cGUgPSAndXNlcid9ID0gcmVxLnF1ZXJ5XG5cblx0Ly8gY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XG5cblx0Ly8gY29uc3QgcHV6emxlcyA9IGF3YWl0IHByaXNtYS5wdXp6bGUxLmRlbGV0ZSh7XG5cdC8vIFx0d2hlcmU6IHtcblx0Ly8gXHRcdGlkOiBpZFxuXHQvLyBcdH1cblx0Ly8gfSlcblxuXHRjb25zdCBxdWVyeVR5cGUgPSB7XG5cdFx0J3VzZXInOiAndXNlcjEnLFxuXHRcdCdwdXp6bGUnOiAncHV6emxlMScsXG5cdH1bdHlwZV1cblxuXHRjb25zdCBzZWFyY2hUeXBlID0ge1xuXHRcdCd1c2VyJzogJ2NpdHknLFxuXHRcdCdwdXp6bGUnOiAncGllY2VzJyxcblx0fVt0eXBlXVxuXG5cdGNvbnN0IHNlYXJjaE9iaiA9IHR5cGUgPT09ICdwdXp6bGUnID8ge1xuXHRcdGd0ZTogTnVtYmVyKHZhbHVlKVxuXHR9IDoge1xuXHRcdHN0YXJ0c1dpdGg6IHZhbHVlLFxuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hW3F1ZXJ5VHlwZV0uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHRbc2VhcmNoVHlwZV06IHtcblx0XHRcdFx0Li4uc2VhcmNoT2JqXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly8gc2VsZWN0OiB7XG5cdFx0Ly8gXHRmaXJzdG5hbWU6IHRydWUsXG5cdFx0Ly8gXHRsYXN0bmFtZTogdHJ1ZSxcblx0XHQvLyB9XG5cdH0pO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0IH0pO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ2YWx1ZSIsInR5cGUiLCJxdWVyeSIsInF1ZXJ5VHlwZSIsInNlYXJjaFR5cGUiLCJzZWFyY2hPYmoiLCJndGUiLCJOdW1iZXIiLCJzdGFydHNXaXRoIiwicmVzdWx0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/search/[value].js\n");

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