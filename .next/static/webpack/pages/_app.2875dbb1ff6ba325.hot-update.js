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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\n*::before, *::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"SF Pro Text\\\", \\\"SF Pro Icons\\\", \\\"Helvetica Neue\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n  color: white;\\n  padding: 20px 20px 60px;\\n  background-color: rgb(165, 160, 151);\\n  max-width: 680px;\\n  margin: 0 auto;\\n}\\n\\n.header {\\n  padding: 8px;\\n  width: 100%;\\n  position: fixed;\\n  left: 0;\\n  background: rgb(229, 215, 213);\\n  top: 0;\\n}\\n\\n.footer {\\n  padding: 8px;\\n  width: 100%;\\n  position: fixed;\\n  left: 0;\\n  background: rgb(57, 64, 57);\\n  bottom: 0;\\n}\\n\\n.flex-container {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-around;\\n  padding: 10px;\\n  margin: 0;\\n  list-style: none;\\n}\\n\\n.flex-item {\\n  background: rgb(104, 100, 99);\\n  padding: 5px;\\n  width: 150px;\\n  height: 75px;\\n  margin-top: 10px;\\n  line-height: 75px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.5em;\\n  text-align: center;\\n}\\n\\n.wrapper {\\n  margin-top: 40px;\\n}\\n\\n.TopNavBar {\\n  display: flex;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n\\n.homeTNB, .tradeTNB, .userTNB {\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 80px;\\n  height: 54px;\\n  border-radius: 10%;\\n  text-decoration: none;\\n  background-image: url(/puzzle.png);\\n  background-size: 100%;\\n  background-repeat: no-repeat;\\n  font-size: small;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.aboutTNB {\\n  color: white;\\n  text-decoration: none;\\n  font-size: x-small;\\n}\\n\\n.titelPages {\\n  margin-top: 50px;\\n}\\n\\n/* Mats CSS--> */\\n.container {\\n  width: 100%;\\n  margin-top: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: row wrap;\\n}\\n\\n.puzzle {\\n  width: 232px;\\n  height: 345px;\\n  margin: 1.5rem;\\n  position: relative;\\n  border-radius: 12px;\\n  overflow: hidden;\\n  border: none;\\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);\\n  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);\\n}\\n\\n.puzzle div:nth-of-type(1) {\\n  position: absolute;\\n  padding: 16px;\\n  width: 100%;\\n  opacity: 0;\\n  top: 0;\\n  color: #f9d3b4;\\n}\\n\\n.puzzle:hover {\\n  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);\\n  transform: scale(1.05, 1.05);\\n}\\n\\n.puzzle div:nth-of-type(2) {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.puzzle div:nth-of-type(2) img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.puzzle div:nth-of-type(3) {\\n  z-index: 2;\\n  background-color: #343739;\\n  padding: 16px 24px 24px 24px;\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n}\\n\\n.puzzle div:nth-of-type(3) span {\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  text-transform: uppercase;\\n  font-size: 13px;\\n  letter-spacing: 2px;\\n  font-weight: 500;\\n  color: #f0f0f0;\\n}\\n\\n.puzzle div:nth-of-type(3) h3 {\\n  margin-top: 5px;\\n  font-family: \\\"Roboto Slab\\\", serif;\\n  color: #f9d3b4;\\n}\\n\\n.puzzle:hover div:nth-of-type(2) {\\n  height: 100%;\\n  opacity: 0.3;\\n}\\n\\n.puzzle:hover div:nth-of-type(3) {\\n  background-color: transparent;\\n}\\n\\n.puzzle:hover div:nth-of-type(1) {\\n  opacity: 1;\\n}/*# sourceMappingURL=styles.css.map */\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.scss\",\"webpack://styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;ACCF;;ADCA;EACE,sBAAA;ACEF;;ADQA;EACE,8FAAA;EAEA,YAAA;EACA,uBAAA;EACA,oCAAA;EACA,gBAAA;EACA,cAAA;ACNF;;ADSA;EAhBE,YAAA;EACA,WAAA;EACA,eAAA;EACA,OAAA;EAeA,8BAAA;EACA,MAAA;ACHF;;ADMA;EAtBE,YAAA;EACA,WAAA;EACA,eAAA;EACA,OAAA;EAqBA,2BAAA;EACA,SAAA;ACAF;;ADEA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;ACCF;;ADEA;EACE,6BAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,aAAA;EACA,6BAAA;EACA,eAAA;ACCF;;ADCA;EACE,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,kCAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;ACEF;;ADSA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ACNF;;ADQA;EACE,YAAA;EACA,qBAAA;EACA,kBAAA;ACLF;;ADQA;EACE,gBAAA;ACLF;;ADQA,gBAAA;AACA;EACE,WAAA;EACA,gBAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;ACNF;;ADSA;EACE,YAAA;EACA,aAAA;EACA,cAAA;EAEA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EAEA,qDAAA;EACA,iDAAA;ACRF;;ADWA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;EACA,MAAA;EACA,cAAA;ACRF;;ADWA;EACE,iDAAA;EACA,4BAAA;ACRF;;ADWA;EACE,WAAA;EACA,YAAA;ACRF;;ADWA;EACE,YAAA;EACA,WAAA;ACRF;;ADWA;EACE,UAAA;EACA,yBAAA;EACA,4BAAA;EAEA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,OAAA;ACTF;;ADYA;EACE,kCAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;ACTF;;ADYA;EACE,eAAA;EACA,iCAAA;EACA,cAAA;ACTF;;ADYA;EACE,YAAA;EACA,YAAA;ACTF;;ADYA;EACE,6BAAA;ACTF;;ADYA;EACE,UAAA;ACTF,CAAA,qCAAA\",\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN1SDtBQUN2SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxVQUFVLDZHQUE2RyxpQkFBaUIsNEJBQTRCLHlDQUF5QyxxQkFBcUIsbUJBQW1CLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixZQUFZLG1DQUFtQyxXQUFXLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLG9CQUFvQixZQUFZLGdDQUFnQyxjQUFjLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isa0NBQWtDLGtCQUFrQixjQUFjLHFCQUFxQixHQUFHLGdCQUFnQixrQ0FBa0MsaUJBQWlCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNCQUFzQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLGdCQUFnQixrQkFBa0Isa0NBQWtDLG9CQUFvQixHQUFHLG1DQUFtQyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVDQUF1QywwQkFBMEIsaUNBQWlDLHFCQUFxQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLGlCQUFpQiwwQkFBMEIsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLG1DQUFtQyxnQkFBZ0IscUJBQXFCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixHQUFHLGFBQWEsaUJBQWlCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsaUJBQWlCLDBEQUEwRCxzREFBc0QsR0FBRyxnQ0FBZ0MsdUJBQXVCLGtCQUFrQixnQkFBZ0IsZUFBZSxXQUFXLG1CQUFtQixHQUFHLG1CQUFtQixzREFBc0QsaUNBQWlDLEdBQUcsZ0NBQWdDLGdCQUFnQixpQkFBaUIsR0FBRyxvQ0FBb0MsaUJBQWlCLGdCQUFnQixHQUFHLGdDQUFnQyxlQUFlLDhCQUE4QixpQ0FBaUMsdUJBQXVCLGNBQWMsYUFBYSxZQUFZLEdBQUcscUNBQXFDLHlDQUF5Qyw4QkFBOEIsb0JBQW9CLHdCQUF3QixxQkFBcUIsbUJBQW1CLEdBQUcsbUNBQW1DLG9CQUFvQix3Q0FBd0MsbUJBQW1CLEdBQUcsc0NBQXNDLGlCQUFpQixpQkFBaUIsR0FBRyxzQ0FBc0Msa0NBQWtDLEdBQUcsc0NBQXNDLGVBQWUsR0FBRyw2Q0FBNkMsbUdBQW1HLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxpQ0FBaUM7QUFDNXBKO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzLmNzcz9kNjUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU0YgUHJvIFRleHRcXFwiLCBcXFwiU0YgUHJvIEljb25zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2MCwgMTUxKTtcXG4gIG1heC13aWR0aDogNjgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjI5LCAyMTUsIDIxMyk7XFxuICB0b3A6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiKDU3LCA2NCwgNTcpO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDQsIDEwMCwgOTkpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4uVG9wTmF2QmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmhvbWVUTkIsIC50cmFkZVROQiwgLnVzZXJUTkIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wdXp6bGUucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFROQiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi50aXRlbFBhZ2VzIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi8qIE1hdHMgQ1NTLS0+ICovXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiByb3cgd3JhcDtcXG59XFxuXFxuLnB1enpsZSB7XFxuICB3aWR0aDogMjMycHg7XFxuICBoZWlnaHQ6IDM0NXB4O1xcbiAgbWFyZ2luOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAsIDEpO1xcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMTBweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnB1enpsZSBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiAjZjlkM2I0O1xcbn1cXG5cXG4ucHV6emxlOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAzMHB4IDE4cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xcbn1cXG5cXG4ucHV6emxlIGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnB1enpsZSBkaXY6bnRoLW9mLXR5cGUoMikgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHV6emxlIGRpdjpudGgtb2YtdHlwZSgzKSB7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzczOTtcXG4gIHBhZGRpbmc6IDE2cHggMjRweCAyNHB4IDI0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5wdXp6bGUgZGl2Om50aC1vZi10eXBlKDMpIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4ucHV6emxlIGRpdjpudGgtb2YtdHlwZSgzKSBoMyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICBjb2xvcjogI2Y5ZDNiNDtcXG59XFxuXFxuLnB1enpsZTpob3ZlciBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ucHV6emxlOmhvdmVyIGRpdjpudGgtb2YtdHlwZSgzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnB1enpsZTpob3ZlciBkaXY6bnRoLW9mLXR5cGUoMSkge1xcbiAgb3BhY2l0eTogMTtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVzLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FEUUE7RUFDRSw4RkFBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFoQkUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQWVBLDhCQUFBO0VBQ0EsTUFBQTtBQ0hGOztBRE1BO0VBdEJFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFxQkEsMkJBQUE7RUFDQSxTQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRFNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNORjs7QURRQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBLGdCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEscURBQUE7RUFDQSxpREFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsaURBQUE7RUFDQSw0QkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUkY7O0FEV0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDVEY7O0FEWUE7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDVEY7O0FEWUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsNkJBQUE7QUNURjs7QURZQTtFQUNFLFVBQUE7QUNURixDQUFBLHFDQUFBXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css\n"));

/***/ })

});