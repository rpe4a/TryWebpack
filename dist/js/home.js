var home =
webpackJsonp_name_([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _welcome = __webpack_require__(1);

	var _welcome2 = _interopRequireDefault(_welcome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*import {filter} from 'lodash/collection';*/

	document.getElementById("loginButton").onclick = function () {
	    //функция динамической подгрузки модулей, webpack автоматически соберет ее в бандл auth
	    __webpack_require__.e/* nsure */(3, function (require) {
	        var login = __webpack_require__(212);

	        login();
	    });
	};

	document.getElementById("logoutButton").onclick = function () {

	    //функция динамической подгрузки модулей, webpack автоматически соберет ее в бандл auth
	    __webpack_require__.e/* nsure */(3, function (require) {
	        var logout = __webpack_require__(213);

	        logout();
	    });
	};

	(0, _welcome2.default)('home').then(function () {
	    console.log("okkey promise!");
	});

	var users = [{ id: 1, name: 'Misha' }, { id: 2, name: 'Vanya' }, { id: 3, name: 'Serega' }];

	console.log(_.filter(users, ['id', 1]));

	//отправляем функцию в глобальную переменную home
	exports.welcome = _welcome2.default;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VsY29tZSBmcm9tICcuL3dlbGNvbWUnO1xyXG4vKmltcG9ydCB7ZmlsdGVyfSBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbic7Ki9cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5CdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvL9GE0YPQvdC60YbQuNGPINC00LjQvdCw0LzQuNGH0LXRgdC60L7QuSDQv9C+0LTQs9GA0YPQt9C60Lgg0LzQvtC00YPQu9C10LksIHdlYnBhY2sg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHQvtCx0LXRgNC10YIg0LXQtSDQsiDQsdCw0L3QtNC7IGF1dGhcclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKXtcclxuICAgICAgICBsZXQgbG9naW4gPSByZXF1aXJlKCcuL2F1dGgvbG9naW4nKSBcclxuXHJcbiAgICAgICAgbG9naW4oKTtcclxuICAgIH0sICdhdXRoJylcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXRCdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIC8v0YTRg9C90LrRhtC40Y8g0LTQuNC90LDQvNC40YfQtdGB0LrQvtC5INC/0L7QtNCz0YDRg9C30LrQuCDQvNC+0LTRg9C70LXQuSwgd2VicGFjayDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgdC+0LHQtdGA0LXRgiDQtdC1INCyINCx0LDQvdC00LsgYXV0aFxyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpe1xyXG4gICAgICAgIGxldCBsb2dvdXQgPSByZXF1aXJlKCcuL2F1dGgvbG9nb3V0JykgIFxyXG5cclxuICAgICAgICBsb2dvdXQoKTsgIFxyXG4gICAgfSwgJ2F1dGgnKVxyXG59XHJcblxyXG53ZWxjb21lKCdob21lJykudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9ra2V5IHByb21pc2UhXCIpOyBcclxufSlcclxuXHJcbmxldCB1c2VycyA9IFtcclxuICAgIHtpZDogMSwgbmFtZTogJ01pc2hhJyB9LFxyXG4gICAge2lkOiAyLCBuYW1lOiAnVmFueWEnIH0sXHJcbiAgICB7aWQ6IDMsIG5hbWU6ICdTZXJlZ2EnIH0sXHJcbl1cclxuXHJcbmNvbnNvbGUubG9nKF8uZmlsdGVyKHVzZXJzLCBbJ2lkJywgMV0pKTtcclxuXHJcbi8v0L7RgtC/0YDQsNCy0LvRj9C10Lwg0YTRg9C90LrRhtC40Y4g0LIg0LPQu9C+0LHQsNC70YzQvdGD0Y4g0L/QtdGA0LXQvNC10L3QvdGD0Y4gaG9tZVxyXG5leHBvcnRzLndlbGNvbWUgPSB3ZWxjb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hvbWUuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9