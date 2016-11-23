var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("let welcome = __webpack_require__(1);\r\n\r\nwelcome('home my friends!')\r\n\r\n//отправляем функцию в глобальную переменную home\r\nexports.welcome = welcome;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvbWUuanM/YTYzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgd2VsY29tZSA9IHJlcXVpcmUoJy4vd2VsY29tZScpO1xyXG5cclxud2VsY29tZSgnaG9tZSBteSBmcmllbmRzIScpXHJcblxyXG4vL9C+0YLQv9GA0LDQstC70Y/QtdC8INGE0YPQvdC60YbQuNGOINCyINCz0LvQvtCx0LDQu9GM0L3Rg9GOINC/0LXRgNC10LzQtdC90L3Rg9GOIGhvbWVcclxuZXhwb3J0cy53ZWxjb21lID0gd2VsY29tZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2hvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = function(message){\r\n    \r\n    //Только в development режиме\r\n    if(true){\r\n        console.log(message);\r\n        console.log((\"development\"));\r\n    }\r\n\r\n    alert(`Welcome ${message}`)\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlbGNvbWUuanM/N2MwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1lc3NhZ2Upe1xyXG4gICAgXHJcbiAgICAvL9Ci0L7Qu9GM0LrQviDQsiBkZXZlbG9wbWVudCDRgNC10LbQuNC80LVcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGVydChgV2VsY29tZSAke21lc3NhZ2V9YClcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd2VsY29tZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);