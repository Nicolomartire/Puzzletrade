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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    const users = await prisma.user1.findMany({\n        include: {\n            pusselref: true\n        }\n    });\n    console.log(users);\n    const body = req.body;\n    const newUser = await prisma.user1.create({\n        data: {\n            firstname: body.firstName,\n            lastname: body.lastName,\n            email: body.email,\n            city: body.city,\n            piece: body.piece,\n            genre: body.genre\n        }\n    });\n    /*   */ res.status(200).json(newUser, {\n        sucess: true\n    });\n    console.warn(\"Sucessfully created use:\", newUser);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQy9CO0FBQzlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTUMsS0FBSyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFBRUMsT0FBTyxFQUFFO1lBQUVDLFNBQVMsRUFBRSxJQUFJO1NBQUU7S0FBRSxDQUFDO0lBQzNFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDLENBQUM7SUFFbkIsTUFBTU8sSUFBSSxHQUFHVCxHQUFHLENBQUNTLElBQUk7SUFDckIsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDUSxNQUFNLENBQUM7UUFDekNDLElBQUksRUFBRTtZQUNMQyxTQUFTLEVBQUVKLElBQUksQ0FBQ0ssU0FBUztZQUN6QkMsUUFBUSxFQUFFTixJQUFJLENBQUNPLFFBQVE7WUFDdkJDLEtBQUssRUFBRVIsSUFBSSxDQUFDUSxLQUFLO1lBQ2pCQyxJQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBSTtZQUNmQyxLQUFLLEVBQUVWLElBQUksQ0FBQ1UsS0FBSztZQUNqQkMsS0FBSyxFQUFFWCxJQUFJLENBQUNXLEtBQUs7U0FFakI7S0FDRCxDQUFDO0lBRUYsS0FBSyxHQUNMbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNaLE9BQU8sRUFBRTtRQUFFYSxNQUFNLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQztJQUNoRGhCLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQywwQkFBMEIsRUFBRWQsT0FBTyxDQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1enpsZXRyYWRlLy4vcGFnZXMvYXBpL2lucHV0LmpzP2M3NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIxLmZpbmRNYW55KHsgaW5jbHVkZTogeyBwdXNzZWxyZWY6IHRydWUgfSB9KTtcblx0Y29uc29sZS5sb2codXNlcnMpO1xuXG5cdGNvbnN0IGJvZHkgPSByZXEuYm9keTtcblx0Y29uc3QgbmV3VXNlciA9IGF3YWl0IHByaXNtYS51c2VyMS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGZpcnN0bmFtZTogYm9keS5maXJzdE5hbWUsXG5cdFx0XHRsYXN0bmFtZTogYm9keS5sYXN0TmFtZSxcblx0XHRcdGVtYWlsOiBib2R5LmVtYWlsLFxuXHRcdFx0Y2l0eTogYm9keS5jaXR5LFxuXHRcdFx0cGllY2U6IGJvZHkucGllY2UsXG5cdFx0XHRnZW5yZTogYm9keS5nZW5yZVxuXG5cdFx0fSxcblx0fSk7XG5cblx0LyogICAqL1xuXHRyZXMuc3RhdHVzKDIwMCkuanNvbihuZXdVc2VyLCB7IHN1Y2VzczogdHJ1ZSB9KTtcblx0Y29uc29sZS53YXJuKFwiU3VjZXNzZnVsbHkgY3JlYXRlZCB1c2U6XCIsIG5ld1VzZXIpO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VycyIsInVzZXIxIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwicHVzc2VscmVmIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuZXdVc2VyIiwiY3JlYXRlIiwiZGF0YSIsImZpcnN0bmFtZSIsImZpcnN0TmFtZSIsImxhc3RuYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImNpdHkiLCJwaWVjZSIsImdlbnJlIiwic3RhdHVzIiwianNvbiIsInN1Y2VzcyIsIndhcm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/input.js\n");

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