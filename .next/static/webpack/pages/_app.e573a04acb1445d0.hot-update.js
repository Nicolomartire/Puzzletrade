"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\n*::before, *::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"SF Pro Text\\\", \\\"SF Pro Icons\\\", \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n  color: white;\\n  padding: 20px 20px 60px;\\n  background-color: rgb(165, 160, 151);\\n  max-width: 680px;\\n  margin: 0 auto;\\n}\\n\\n.header {\\n  padding: 8px;\\n  width: 100%;\\n  position: fixed;\\n  left: 0;\\n  background: rgb(229, 215, 213);\\n  top: 0;\\n}\\n\\n.footer {\\n  padding: 8px;\\n  width: 100%;\\n  position: fixed;\\n  left: 0;\\n  background: rgb(57, 64, 57);\\n  bottom: 0;\\n}\\n\\n.flex-container {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-around;\\n  padding: 10px;\\n  margin: 0;\\n  list-style: none;\\n}\\n\\n.flex-item {\\n  background: rgb(104, 100, 99);\\n  padding: 5px;\\n  width: 150px;\\n  height: 75px;\\n  margin-top: 10px;\\n  line-height: 75px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.5em;\\n  text-align: center;\\n}\\n\\n.wrapper {\\n  margin-top: 40px;\\n}\\n\\n.TopNavBar {\\n  display: flex;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n\\n.homeTNB, .tradeTNB, .userTNB {\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 80px;\\n  height: 54px;\\n  border-radius: 10%;\\n  text-decoration: none;\\n  background-image: url(/puzzle.png);\\n  background-size: 100%;\\n  background-repeat: no-repeat;\\n  font-size: small;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.aboutTNB {\\n  color: white;\\n  text-decoration: none;\\n  font-size: x-small;\\n}\\n\\n.titelPages {\\n  margin-top: 50px;\\n}\\n\\n\\n/* Mats CSS--> */\\n.puzzle {\\n  width: 232px;\\n  height: 345px;\\n  margin: 1.5rem;\\n  position: relative;\\n  border-radius: 12px;\\n  overflow: hidden;\\n  border: none;\\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);\\n  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);\\n  background-color: whitesmoke\\n}\\n.container {\\n  width: 100%;\\n  margin-top: 3rem;\\n  display: 0;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: nowrap;\\n}\\n/* .container {\\n  width: 100%;\\n  margin-top: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n}\\n\\n/* Mats CSS--> */\\n/* .container {\\n  width: 100%;\\n  margin-top: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n}\\n\\n.puzzle {\\n  width: 232px;\\n  height: 345px;\\n  margin: 1.5rem;\\n  position: relative;\\n  border-radius: 12px;\\n  overflow: hidden;\\n  border: none;\\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);\\n  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);\\n}\\n\\n.puzzle div:nth-of-type(1) {\\n  position: absolute;\\n  padding: 16px;\\n  width: 100%;\\n  opacity: 0;\\n  top: 0;\\n  color: #f9d3b4;\\n}\\n\\n.puzzle:hover {\\n  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);\\n  transform: scale(1.05, 1.05);\\n}\\n\\n.puzzle div:nth-of-type(2) {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.puzzle div:nth-of-type(2) img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.puzzle div:nth-of-type(3) {\\n  z-index: 2;\\n  background-color: #343739;\\n  padding: 16px 24px 24px 24px;\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n}\\n\\n.puzzle div:nth-of-type(3) span {\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  text-transform: uppercase;\\n  font-size: 13px;\\n  letter-spacing: 2px;\\n  font-weight: 500;\\n  color: #f0f0f0;\\n}\\n\\n.puzzle div:nth-of-type(3) h3 {\\n  margin-top: 5px;\\n  font-family: \\\"Roboto Slab\\\", serif;\\n  color: #f9d3b4;\\n}\\n\\n.puzzle:hover div:nth-of-type(2) {\\n  height: 100%;\\n  opacity: 0.3;\\n}\\n\\n.puzzle:hover div:nth-of-type(3) {\\n  background-color: transparent;\\n}\\n\\n.puzzle:hover div:nth-of-type(1) {\\n  opacity: 1;\\n} */\\n/*# sourceMappingURL=styles.css.map */\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.scss\",\"webpack://styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;ACCF;;ADCA;EACE,sBAAA;ACEF;;ADQA;EACE,8FAAA;EAEA,YAAA;EACA,uBAAA;EACA,oCAAA;EACA,gBAAA;EACA,cAAA;ACNF;;ADSA;EAhBE,YAAA;EACA,WAAA;EACA,eAAA;EACA,OAAA;EAeA,8BAAA;EACA,MAAA;ACHF;;ADMA;EAtBE,YAAA;EACA,WAAA;EACA,eAAA;EACA,OAAA;EAqBA,2BAAA;EACA,SAAA;ACAF;;ADEA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;ACCF;;ADEA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,aAAA;EACA,6BAAA;EACA,eAAA;ACCF;;ADCA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,kCAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;ACEF;;ADSA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ACNF;;ADQA;EACE,YAAA;EACA,qBAAA;EACA,kBAAA;ACLF;;ADQA;EACE,gBAAA;ACLF;;;ADSA,gBAAA;ACLA;EDOE,YAAA;EAEA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;ECNF,gBAAA;EACE,YAAY;EDQd,qDAAA;EACE,iDAAA;EACA;ACNF;AACA;EDSE,WAAA;EACA,gBAAA;EACA,UAAA;EAEA,uBAAA;EACA,mBAAA;ECRF,iBAAA;AACA;ADUA;;;;;;;;;gBASA;ACRA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAiFG;AACH,qCAAqC\",\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN1SDtBQUN2SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxVQUFVLDZHQUE2RyxpQkFBaUIsNEJBQTRCLHlDQUF5QyxxQkFBcUIsbUJBQW1CLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixZQUFZLG1DQUFtQyxXQUFXLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixZQUFZLGdDQUFnQyxjQUFjLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isa0NBQWtDLGtCQUFrQixjQUFjLHFCQUFxQixHQUFHLGdCQUFnQixrQ0FBa0MsaUJBQWlCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNCQUFzQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGdCQUFnQixrQkFBa0Isa0NBQWtDLG9CQUFvQixHQUFHLG1DQUFtQyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVDQUF1QywwQkFBMEIsaUNBQWlDLHFCQUFxQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLGlCQUFpQiwwQkFBMEIsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLGtDQUFrQyxpQkFBaUIsa0JBQWtCLG1CQUFtQix1QkFBdUIsd0JBQXdCLHFCQUFxQixpQkFBaUIsMERBQTBELHNEQUFzRCxtQ0FBbUMsY0FBYyxnQkFBZ0IscUJBQXFCLGVBQWUsNEJBQTRCLHdCQUF3QixzQkFBc0IsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxzQ0FBc0MsZ0JBQWdCLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxhQUFhLGlCQUFpQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IscUJBQXFCLGlCQUFpQiwwREFBMEQsc0RBQXNELEdBQUcsZ0NBQWdDLHVCQUF1QixrQkFBa0IsZ0JBQWdCLGVBQWUsV0FBVyxtQkFBbUIsR0FBRyxtQkFBbUIsc0RBQXNELGlDQUFpQyxHQUFHLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLEdBQUcsb0NBQW9DLGlCQUFpQixnQkFBZ0IsR0FBRyxnQ0FBZ0MsZUFBZSw4QkFBOEIsaUNBQWlDLHVCQUF1QixjQUFjLGFBQWEsWUFBWSxHQUFHLHFDQUFxQyx5Q0FBeUMsOEJBQThCLG9CQUFvQix3QkFBd0IscUJBQXFCLG1CQUFtQixHQUFHLG1DQUFtQyxvQkFBb0Isd0NBQXdDLG1CQUFtQixHQUFHLHNDQUFzQyxpQkFBaUIsaUJBQWlCLEdBQUcsc0NBQXNDLGtDQUFrQyxHQUFHLHNDQUFzQyxlQUFlLElBQUksaURBQWlELG1HQUFtRyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxhQUFhLE1BQU0scUZBQXFGLE1BQU0sNkJBQTZCO0FBQzU3SjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy5jc3M/ZDY1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbio6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNGIFBybyBUZXh0XFxcIiwgXFxcIlNGIFBybyBJY29uc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjAsIDE1MSk7XFxuICBtYXgtd2lkdGg6IDY4MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiKDIyOSwgMjE1LCAyMTMpO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYig1NywgNjQsIDU3KTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmZsZXgtaXRlbSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTA0LCAxMDAsIDk5KTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogNzVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLlRvcE5hdkJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ob21lVE5CLCAudHJhZGVUTkIsIC51c2VyVE5CIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvcHV6emxlLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRUTkIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4udGl0ZWxQYWdlcyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5cXG4vKiBNYXRzIENTUy0tPiAqL1xcbi5wdXp6bGUge1xcbiAgd2lkdGg6IDIzMnB4O1xcbiAgaGVpZ2h0OiAzNDVweDtcXG4gIG1hcmdpbjogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLCAxKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgZGlzcGxheTogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4vKiAuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi8qIE1hdHMgQ1NTLS0+ICovXFxuLyogLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHV6emxlIHtcXG4gIHdpZHRoOiAyMzJweDtcXG4gIGhlaWdodDogMzQ1cHg7XFxuICBtYXJnaW46IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMCwgMSk7XFxuICBib3gtc2hhZG93OiAwcHggMTNweCAxMHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ucHV6emxlIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6ICNmOWQzYjQ7XFxufVxcblxcbi5wdXp6bGU6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDMwcHggMThweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XFxufVxcblxcbi5wdXp6bGUgZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHV6emxlIGRpdjpudGgtb2YtdHlwZSgyKSBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wdXp6bGUgZGl2Om50aC1vZi10eXBlKDMpIHtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNzM5O1xcbiAgcGFkZGluZzogMTZweCAyNHB4IDI0cHggMjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnB1enpsZSBkaXY6bnRoLW9mLXR5cGUoMykgc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5wdXp6bGUgZGl2Om50aC1vZi10eXBlKDMpIGgzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gIGNvbG9yOiAjZjlkM2I0O1xcbn1cXG5cXG4ucHV6emxlOmhvdmVyIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5wdXp6bGU6aG92ZXIgZGl2Om50aC1vZi10eXBlKDMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucHV6emxlOmhvdmVyIGRpdjpudGgtb2YtdHlwZSgxKSB7XFxuICBvcGFjaXR5OiAxO1xcbn0gKi9cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZXMuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURRQTtFQUNFLDhGQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQWhCRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBZUEsOEJBQUE7RUFDQSxNQUFBO0FDSEY7O0FETUE7RUF0QkUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQXFCQSwyQkFBQTtFQUNBLFNBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7OztBRFNBLGdCQUFBO0FDTEE7RURPRSxZQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDTkYsZ0JBQUE7RUFDRSxZQUFZO0VEUWQscURBQUE7RUFDRSxpREFBQTtFQUNBO0FDTkY7QUFDQTtFRFNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VDUkYsaUJBQUE7QUFDQTtBRFVBOzs7Ozs7Ozs7Z0JBU0E7QUNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUZHO0FBQ0gscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css\n"));

/***/ })

});