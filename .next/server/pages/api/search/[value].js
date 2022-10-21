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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n// http://localhost:3000/api/search/100?type=puzzle&field=pieces\n// http://localhost:3000/api/search/Stockh?type=puzzle&field=city\n// http://localhost:3000/api/search/Stockh?type=user&field=city\nasync function handler(req, res) {\n    const { value =\"\" , type =\"\" , field =\"\"  } = req.query;\n    const table = {\n        \"user\": \"user1\",\n        \"puzzle\": \"puzzle1\"\n    }[type] || \"user1\";\n    const searchField = {\n        \"city\": \"city\",\n        \"pieces\": \"pieces\"\n    }[field] || \"city\";\n    const searchObj = isNaN(value) ? {\n        startsWith: value\n    } : {\n        gte: Number(value)\n    };\n    const result = await prisma[table].findMany({\n        where: {\n            [searchField]: {\n                ...searchObj\n            }\n        }\n    });\n    res.status(200).json({\n        result\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoL1t2YWx1ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLGdFQUFnRTtBQUNoRSxpRUFBaUU7QUFDakUsK0RBQStEO0FBRWhELGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFDQyxLQUFLLEVBQUcsRUFBRSxHQUFFQyxJQUFJLEVBQUcsRUFBRSxHQUFFQyxLQUFLLEVBQUcsRUFBRSxHQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSztJQUVyRCxNQUFNQyxLQUFLLEdBQUc7UUFDYixNQUFNLEVBQUUsT0FBTztRQUNmLFFBQVEsRUFBRSxTQUFTO0tBQ25CLENBQUNILElBQUksQ0FBQyxJQUFJLE9BQU87SUFFbEIsTUFBTUksV0FBVyxHQUFHO1FBQ25CLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFFBQVE7S0FFbEIsQ0FBQ0gsS0FBSyxDQUFDLElBQUksTUFBTTtJQUVsQixNQUFNSSxTQUFTLEdBQUdDLEtBQUssQ0FBQ1AsS0FBSyxDQUFDLEdBQUc7UUFDaENRLFVBQVUsRUFBRVIsS0FBSztLQUNqQixHQUFHO1FBQ0hTLEdBQUcsRUFBRUMsTUFBTSxDQUFDVixLQUFLLENBQUM7S0FDbEI7SUFFRCxNQUFNVyxNQUFNLEdBQUcsTUFBTWYsTUFBTSxDQUFDUSxLQUFLLENBQUMsQ0FBQ1EsUUFBUSxDQUFDO1FBQzNDQyxLQUFLLEVBQUU7WUFDTixDQUFDUixXQUFXLENBQUMsRUFBRTtnQkFDZCxHQUFHQyxTQUFTO2FBQ1o7U0FDRDtLQUtELENBQUM7SUFFRlAsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFSixNQUFNO0tBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXp6bGV0cmFkZS8uL3BhZ2VzL2FwaS9zZWFyY2gvW3ZhbHVlXS5qcz8yMWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VhcmNoLzEwMD90eXBlPXB1enpsZSZmaWVsZD1waWVjZXNcbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VhcmNoL1N0b2NraD90eXBlPXB1enpsZSZmaWVsZD1jaXR5XG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlYXJjaC9TdG9ja2g/dHlwZT11c2VyJmZpZWxkPWNpdHlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRjb25zdCB7dmFsdWUgPSAnJywgdHlwZSA9ICcnLCBmaWVsZCA9ICcnfSA9IHJlcS5xdWVyeVxuXG5cdGNvbnN0IHRhYmxlID0ge1xuXHRcdCd1c2VyJzogJ3VzZXIxJyxcblx0XHQncHV6emxlJzogJ3B1enpsZTEnLFxuXHR9W3R5cGVdIHx8ICd1c2VyMSdcblxuXHRjb25zdCBzZWFyY2hGaWVsZCA9IHtcblx0XHQnY2l0eSc6ICdjaXR5Jyxcblx0XHQncGllY2VzJzogJ3BpZWNlcycsXG5cdFx0Ly8gTmVlZCBtb3JlIHNlYXJjaCBmaWVsZHM/IEFkZCB0aGVtIGhlcmVcblx0fVtmaWVsZF0gfHwgJ2NpdHknXG5cblx0Y29uc3Qgc2VhcmNoT2JqID0gaXNOYU4odmFsdWUpID8ge1xuXHRcdHN0YXJ0c1dpdGg6IHZhbHVlLFxuXHR9IDoge1xuXHRcdGd0ZTogTnVtYmVyKHZhbHVlKVxuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hW3RhYmxlXS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdFtzZWFyY2hGaWVsZF06IHtcblx0XHRcdFx0Li4uc2VhcmNoT2JqXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly8gc2VsZWN0OiB7XG5cdFx0Ly8gXHRmaXJzdG5hbWU6IHRydWUsXG5cdFx0Ly8gXHRsYXN0bmFtZTogdHJ1ZSxcblx0XHQvLyB9XG5cdH0pO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0IH0pO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ2YWx1ZSIsInR5cGUiLCJmaWVsZCIsInF1ZXJ5IiwidGFibGUiLCJzZWFyY2hGaWVsZCIsInNlYXJjaE9iaiIsImlzTmFOIiwic3RhcnRzV2l0aCIsImd0ZSIsIk51bWJlciIsInJlc3VsdCIsImZpbmRNYW55Iiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search/[value].js\n");

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