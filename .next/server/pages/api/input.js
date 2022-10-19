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
exports.id = "pages/api/input";
exports.ids = ["pages/api/input"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/input.js":
/*!****************************!*\
  !*** ./pages/api/input.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const users = await prisma.user1.findMany({\n        include: {\n            pusselref: true\n        }\n    });\n    console.log(users);\n    const body = req.body;\n    const newUser = await prisma.user1.create({\n        data: {\n            firstname: body.firstName,\n            lastname: body.lastName,\n            email: body.email,\n            city: body.city\n        }\n    });\n    /*   */ res.status(200).json(newUser, {\n        sucess: true\n    });\n    console.warn(\"Sucessfully created use:\", newUser);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQy9CO0FBQzlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTUMsS0FBSyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFBRUMsT0FBTyxFQUFFO1lBQUVDLFNBQVMsRUFBRSxJQUFJO1NBQUU7S0FBRSxDQUFDO0lBQzNFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDLENBQUM7SUFFbkIsTUFBTU8sSUFBSSxHQUFHVCxHQUFHLENBQUNTLElBQUk7SUFDckIsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDUSxNQUFNLENBQUM7UUFDekNDLElBQUksRUFBRTtZQUNMQyxTQUFTLEVBQUVKLElBQUksQ0FBQ0ssU0FBUztZQUN6QkMsUUFBUSxFQUFFTixJQUFJLENBQUNPLFFBQVE7WUFDdkJDLEtBQUssRUFBRVIsSUFBSSxDQUFDUSxLQUFLO1lBQ2pCQyxJQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBSTtTQU1mO0tBQ0QsQ0FBQztJQUVGLEtBQUssR0FDTGpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPLEVBQUU7UUFBRVcsTUFBTSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7SUFDaERkLE9BQU8sQ0FBQ2UsSUFBSSxDQUFDLDBCQUEwQixFQUFFWixPQUFPLENBQUMsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV6emxldHJhZGUvLi9wYWdlcy9hcGkvaW5wdXQuanM/Yzc2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0Y29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEudXNlcjEuZmluZE1hbnkoeyBpbmNsdWRlOiB7IHB1c3NlbHJlZjogdHJ1ZSB9IH0pO1xuXHRjb25zb2xlLmxvZyh1c2Vycyk7XG5cblx0Y29uc3QgYm9keSA9IHJlcS5ib2R5O1xuXHRjb25zdCBuZXdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIxLmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0Zmlyc3RuYW1lOiBib2R5LmZpcnN0TmFtZSxcblx0XHRcdGxhc3RuYW1lOiBib2R5Lmxhc3ROYW1lLFxuXHRcdFx0ZW1haWw6IGJvZHkuZW1haWwsXG5cdFx0XHRjaXR5OiBib2R5LmNpdHksXG5cdFx0XHQvKiAgIG5hbW5wdXp6bGU6IGJvZHkubmFtbnB1enpsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgIHBpZWNlczogYm9keS5waWVjZXMsXG4gICAgICAgIGNvbmRpdGlvbjogYm9keS5jb25kaXRpb24gKi9cblx0XHRcdC8qIHBpY3R1cmU6IGJvZHkuUGljdHVyZSwgKi9cblx0XHR9LFxuXHR9KTtcblxuXHQvKiAgICovXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1VzZXIsIHsgc3VjZXNzOiB0cnVlIH0pO1xuXHRjb25zb2xlLndhcm4oXCJTdWNlc3NmdWxseSBjcmVhdGVkIHVzZTpcIiwgbmV3VXNlcik7XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJzIiwidXNlcjEiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJwdXNzZWxyZWYiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm5ld1VzZXIiLCJjcmVhdGUiLCJkYXRhIiwiZmlyc3RuYW1lIiwiZmlyc3ROYW1lIiwibGFzdG5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiY2l0eSIsInN0YXR1cyIsImpzb24iLCJzdWNlc3MiLCJ3YXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/input.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/input.js"));
module.exports = __webpack_exports__;

})();