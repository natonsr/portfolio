webpackJsonp([0],Array(23).concat([
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATA_PATH = exports.DATA_PATH = 'products.json';
var LOCAL_VALUE = exports.LOCAL_VALUE = 'bears_card';
var SEND_MAIL_SCRIPT = exports.SEND_MAIL_SCRIPT = 'send.php';
var SEND_ORDER_SCRIPT = exports.SEND_ORDER_SCRIPT = 'sendOrder.php';

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function categoryHead(categories, currentCategory) {
	var header = '';
	if (currentCategory === 'all') {
		header = '\u0432\u0441\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B';
	} else {
		var _currentCategory$spli = currentCategory.split('-'),
		    _currentCategory$spli2 = _slicedToArray(_currentCategory$spli, 2),
		    size1 = _currentCategory$spli2[0],
		    size2 = _currentCategory$spli2[1];

		if (categories.indexOf(currentCategory) === 0) {
			header += '\u0434\u043E ' + size2 + '\u0441\u043C';
		} else if (categories.indexOf(currentCategory) === categories.length - 1) {
			header += '\u0432\u044B\u0448\u0435 ' + size1 + '\u0441\u043C';
		} else {
			header += '\u043E\u0442 ' + size1 + ' \u0434\u043E ' + size2 + '\u0441\u043C';
		}
	}
	return header;
}

exports.default = categoryHead;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuList = function (_Component) {
	_inherits(MenuList, _Component);

	function MenuList() {
		_classCallCheck(this, MenuList);

		var _this = _possibleConstructorReturn(this, (MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call(this));

		_this.state = {
			isOpen: false
		};
		_this.onClick = _this.onClick.bind(_this);
		_this._getBody = _this._getBody.bind(_this);
		return _this;
	}

	_createClass(MenuList, [{
		key: 'onClick',
		value: function onClick() {
			var isOpen = this.state.isOpen;
			this.setState({
				isOpen: !isOpen
			});
		}
	}, {
		key: '_getBody',
		value: function _getBody() {
			var menuText = this.props.menuText;
			var isOpen = this.state.isOpen;
			return isOpen ? _react2.default.createElement(
				'p',
				{ className: 'panel' },
				menuText
			) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var menuTitle = this.props.menuTitle;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					{ className: 'menu_list', onClick: this.onClick },
					menuTitle
				),
				this._getBody()
			);
		}
	}]);

	return MenuList;
}(_react.Component);

exports.default = MenuList;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var sendData = function sendData(path, data) {
	var str = path + '?' + data;
	var XHR = new XMLHttpRequest();
	XHR.open('get', str, true);
	XHR.send();
};

exports.default = sendData;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodByBlock = function (_Component) {
	_inherits(GoodByBlock, _Component);

	function GoodByBlock() {
		_classCallCheck(this, GoodByBlock);

		return _possibleConstructorReturn(this, (GoodByBlock.__proto__ || Object.getPrototypeOf(GoodByBlock)).call(this));
	}

	_createClass(GoodByBlock, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'good-by' },
				_react2.default.createElement(
					'div',
					null,
					'\u0414\u043E \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u044F!'
				),
				_react2.default.createElement('div', null)
			);
		}
	}]);

	return GoodByBlock;
}(_react.Component);

exports.default = GoodByBlock;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Router = __webpack_require__(58);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Router2.default, null), document.getElementById('react-container'));

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _App = __webpack_require__(81);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Component) {
	_inherits(Router, _Component);

	function Router() {
		_classCallCheck(this, Router);

		return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));
	}

	_createClass(Router, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.HashRouter,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { component: _App2.default })
			);
		}
	}]);

	return Router;
}(_react.Component);

exports.default = Router;

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(82);

var _reactRouterDom = __webpack_require__(8);

var _Header = __webpack_require__(83);

var _Header2 = _interopRequireDefault(_Header);

var _MainPage = __webpack_require__(93);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _DeliveryPage = __webpack_require__(109);

var _DeliveryPage2 = _interopRequireDefault(_DeliveryPage);

var _ContactsPage = __webpack_require__(111);

var _ContactsPage2 = _interopRequireDefault(_ContactsPage);

var _CartPage = __webpack_require__(118);

var _CartPage2 = _interopRequireDefault(_CartPage);

var _ThankYouPage = __webpack_require__(126);

var _ThankYouPage2 = _interopRequireDefault(_ThankYouPage);

var _notFoundPage = __webpack_require__(128);

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

var _getData = __webpack_require__(130);

var _getData2 = _interopRequireDefault(_getData);

var _settings = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {
			products: [],
			cart: {}
		};
		_this.getProducts = _this.getProducts.bind(_this);
		_this.addToCart = _this.addToCart.bind(_this);
		_this.getCart = _this.getCart.bind(_this);
		_this.setCart = _this.setCart.bind(_this);
		_this.sendOrder = _this.sendOrder.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'addToCart',
		value: function addToCart(id) {
			var cart = this.state.cart;
			if (cart[id]) {
				cart[id]++;
			} else {
				cart[id] = 1;
			}
			this.setState({
				cart: cart
			});
		}
	}, {
		key: 'getProducts',
		value: function getProducts() {
			var _this2 = this;

			var p = (0, _getData2.default)(_settings.DATA_PATH);
			p.then(function (data) {
				_this2.setState({
					products: JSON.parse(data)
				});
			}, function () {
				_this2.setState({
					products: []
				});
			});
		}
	}, {
		key: 'getCart',
		value: function getCart(localStorageName) {
			var storage = localStorage.getItem(localStorageName);
			if (storage) {
				return JSON.parse(storage);
			}
		}
	}, {
		key: 'setCart',
		value: function setCart(localStorageName) {
			var cart = this.state.cart;
			localStorage.setItem(localStorageName, JSON.stringify(cart));
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.getProducts();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var cart = this.getCart(_settings.LOCAL_VALUE) || {};
			this.setState({
				cart: cart
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.setCart(_settings.LOCAL_VALUE);
		}
	}, {
		key: 'sendOrder',
		value: function sendOrder() {
			this.setState({
				cart: {}
			});
			this.setCart(_settings.LOCAL_VALUE);
			this.props.history.push("/thanks");
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, {
					cart: this.state.cart,
					products: this.state.products
				}),
				_react2.default.createElement(
					_reactRouterDom.Switch,
					null,
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/',
						render: function render() {
							return _react2.default.createElement(_MainPage2.default, {
								products: _this3.state.products,
								addToCart: _this3.addToCart
							});
						}
					}),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/delivery', component: _DeliveryPage2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/contacts', component: _ContactsPage2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/cart',
						render: function render() {
							return _react2.default.createElement(_CartPage2.default, {
								products: _this3.state.products,
								cart: _this3.state.cart,
								sendOrder: _this3.sendOrder
							});
						}
					}),
					_react2.default.createElement(_reactRouterDom.Route, { path: '/thanks', component: _ThankYouPage2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { component: _notFoundPage2.default })
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(84);

var _HeaderTitle = __webpack_require__(85);

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

var _HeaderContacts = __webpack_require__(87);

var _HeaderContacts2 = _interopRequireDefault(_HeaderContacts);

var _Nav = __webpack_require__(89);

var _Nav2 = _interopRequireDefault(_Nav);

var _HeaderCart = __webpack_require__(91);

var _HeaderCart2 = _interopRequireDefault(_HeaderCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'header_top clearfix' },
					_react2.default.createElement(_HeaderTitle2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'header_information' },
						_react2.default.createElement(_HeaderContacts2.default, null),
						_react2.default.createElement(_HeaderCart2.default, {
							cart: this.props.cart,
							products: this.props.products
						})
					)
				),
				_react2.default.createElement(_Nav2.default, null)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderTitle = function (_Component) {
  _inherits(HeaderTitle, _Component);

  function HeaderTitle() {
    _classCallCheck(this, HeaderTitle);

    return _possibleConstructorReturn(this, (HeaderTitle.__proto__ || Object.getPrototypeOf(HeaderTitle)).call(this));
  }

  _createClass(HeaderTitle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'header_title' },
        _react2.default.createElement(
          'h1',
          null,
          '\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043C\u044F\u0433\u043A\u0438\u0445 \u0438\u0433\u0440\u0443\u0448\u0435\u043A'
        )
      );
    }
  }]);

  return HeaderTitle;
}(_react.Component);

exports.default = HeaderTitle;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderContacts = function (_Component) {
	_inherits(HeaderContacts, _Component);

	function HeaderContacts() {
		_classCallCheck(this, HeaderContacts);

		return _possibleConstructorReturn(this, (HeaderContacts.__proto__ || Object.getPrototypeOf(HeaderContacts)).call(this));
	}

	_createClass(HeaderContacts, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'header_contacts' },
				_react2.default.createElement(
					'p',
					null,
					'\u0422\u0435\u043B. ',
					_react2.default.createElement(
						'span',
						null,
						'+375(33)***-**-**'
					),
					'.'
				),
				_react2.default.createElement(
					'p',
					null,
					' \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 10.00 \u0434\u043E 21.00 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E'
				),
				_react2.default.createElement(
					'p',
					null,
					'\u0410\u0434\u0440\u0435\u0441: \u0433.\u041C\u0438\u043D\u0441\u043A, \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 '
				)
			);
		}
	}]);

	return HeaderContacts;
}(_react.Component);

exports.default = HeaderContacts;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(90);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'wrapper clearfix' },
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ exact: true, activeClassName: 'active_page', to: '/' },
						'\u0413\u043B\u0430\u0432\u043D\u0430\u044F'
					),
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ activeClassName: 'active_page', to: '/delivery' },
						'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430'
					),
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ activeClassName: 'active_page', to: '/contacts' },
						'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
					)
				)
			);
		}
	}]);

	return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(92);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderCart = function (_Component) {
  _inherits(HeaderCart, _Component);

  function HeaderCart() {
    _classCallCheck(this, HeaderCart);

    return _possibleConstructorReturn(this, (HeaderCart.__proto__ || Object.getPrototypeOf(HeaderCart)).call(this));
  }

  _createClass(HeaderCart, [{
    key: 'render',
    value: function render() {
      var cart = this.props.cart;
      var products = this.props.products;
      var cartCount = 0;
      var cartSum = 0;
      for (var key in cart) {
        cartCount += cart[key];
      }
      var cartProducts = products.filter(function (item) {
        return cart[item.id];
      });
      if (cartProducts.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = cartProducts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            cartSum += item.price * cart[item.id];
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'header_cart' },
        _react2.default.createElement(
          'p',
          null,
          '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 ',
          _react2.default.createElement(
            'span',
            null,
            cartCount
          ),
          ' \u0442\u043E\u0432\u0430\u0440(\u043E\u0432). \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ',
          _react2.default.createElement(
            'span',
            null,
            cartSum
          ),
          ' \u0440\u0443\u0431.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/cart', className: 'btn_shop' },
            '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443'
          )
        )
      );
    }
  }]);

  return HeaderCart;
}(_react.Component);

exports.default = HeaderCart;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(94);

var _SideBar = __webpack_require__(95);

var _SideBar2 = _interopRequireDefault(_SideBar);

var _MainContent = __webpack_require__(105);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_Component) {
	_inherits(MainPage, _Component);

	function MainPage(props) {
		_classCallCheck(this, MainPage);

		var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, props));

		_this.state = {
			categories: ['0-40', '40-110', '110-200', '200-300'],
			currentCategory: 'all'
		};
		_this.filterCards = _this.filterCards.bind(_this);
		return _this;
	}

	_createClass(MainPage, [{
		key: 'filterCards',
		value: function filterCards(category) {
			this.setState({
				currentCategory: category
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'main',
				{ className: 'main_page' },
				_react2.default.createElement(_SideBar2.default, {
					categories: this.state.categories,
					filterCards: this.filterCards
				}),
				_react2.default.createElement(_MainContent2.default, {
					categories: this.state.categories,
					currentCategory: this.state.currentCategory,
					products: this.props.products,
					addToCart: this.props.addToCart
				})
			);
		}
	}]);

	return MainPage;
}(_react.Component);

exports.default = MainPage;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(96);

var _Categories = __webpack_require__(97);

var _Categories2 = _interopRequireDefault(_Categories);

var _Payments = __webpack_require__(100);

var _Payments2 = _interopRequireDefault(_Payments);

var _Delivery = __webpack_require__(103);

var _Delivery2 = _interopRequireDefault(_Delivery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_Component) {
	_inherits(SideBar, _Component);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this));
	}

	_createClass(SideBar, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'aside',
				null,
				_react2.default.createElement(_Categories2.default, {
					categories: this.props.categories,
					filterCards: this.props.filterCards
				}),
				_react2.default.createElement(_Payments2.default, null),
				_react2.default.createElement(_Delivery2.default, null)
			);
		}
	}]);

	return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(98);

var _CategoryLink = __webpack_require__(99);

var _CategoryLink2 = _interopRequireDefault(_CategoryLink);

var _categoryHead = __webpack_require__(43);

var _categoryHead2 = _interopRequireDefault(_categoryHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = function (_Component) {
	_inherits(Categories, _Component);

	function Categories() {
		_classCallCheck(this, Categories);

		var _this = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(Categories, [{
		key: 'onClick',
		value: function onClick(e, category) {
			e.preventDefault();
			this.props.filterCards(category);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var categories = this.props.categories;
			return _react2.default.createElement(
				'div',
				{ className: 'aside_block border_round categories' },
				_react2.default.createElement(
					'h2',
					null,
					'\u0420\u0430\u0437\u043C\u0435\u0440\u044B'
				),
				_react2.default.createElement(
					'ul',
					null,
					categories.map(function (item, i) {
						var categoryName = (0, _categoryHead2.default)(categories, item);
						return _react2.default.createElement(_CategoryLink2.default, {
							key: i,
							category: item,
							categoryName: categoryName,
							onClick: _this2.onClick
						});
					}),
					_react2.default.createElement(_CategoryLink2.default, {
						key: categories.length - 1,
						category: 'all',
						categoryName: (0, _categoryHead2.default)(categories, 'all'),
						onClick: this.onClick
					})
				)
			);
		}
	}]);

	return Categories;
}(_react.Component);

exports.default = Categories;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryLink = function (_Component) {
  _inherits(CategoryLink, _Component);

  function CategoryLink() {
    _classCallCheck(this, CategoryLink);

    return _possibleConstructorReturn(this, (CategoryLink.__proto__ || Object.getPrototypeOf(CategoryLink)).call(this));
  }

  _createClass(CategoryLink, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var text = this.props.categoryName;
      text = text.charAt(0).toUpperCase() + text.slice(1);

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', onClick: function onClick(e) {
              return _this2.props.onClick(e, _this2.props.category);
            } },
          text
        )
      );
    }
  }]);

  return CategoryLink;
}(_react.Component);

exports.default = CategoryLink;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(101);

var _MenuList = __webpack_require__(44);

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payments = function (_Component) {
	_inherits(Payments, _Component);

	function Payments() {
		_classCallCheck(this, Payments);

		return _possibleConstructorReturn(this, (Payments.__proto__ || Object.getPrototypeOf(Payments)).call(this));
	}

	_createClass(Payments, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'aside_block border_round payments' },
				_react2.default.createElement(
					'h2',
					null,
					'\u041E\u043F\u043B\u0430\u0442\u0430'
				),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u0443',
					menuText: '\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043B\u0438\u0431\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u043E\u0439 (\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430 \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043E\u0442 150 \u0440\u0443\u0431).'
				}),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u0427\u0435\u0440\u0435\u0437 \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0415\u0420\u0418\u041F',
					menuText: '\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B: \u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F \u0415\u0420\u0418\u041F *******'
				}),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043E\u043C',
					menuText: '\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0432\u0435\u0441\u0430 \u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0438 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u0411\u0435\u043B\u043F\u043E\u0447\u0442\u044B'
				})
			);
		}
	}]);

	return Payments;
}(_react.Component);

exports.default = Payments;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(104);

var _MenuList = __webpack_require__(44);

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Delivery = function (_Component) {
	_inherits(Delivery, _Component);

	function Delivery() {
		_classCallCheck(this, Delivery);

		return _possibleConstructorReturn(this, (Delivery.__proto__ || Object.getPrototypeOf(Delivery)).call(this));
	}

	_createClass(Delivery, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'aside_block border_round delivery' },
				_react2.default.createElement(
					'h2',
					null,
					'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430'
				),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430',
					menuText: '\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u0433.\u041C\u0438\u043D\u0441\u043A \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u0441 10.00 \u0434\u043E 21.00 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E'
				}),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043E\u0442 150 \u0440\u0443\u0431.)',
					menuText: '\u0412 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u0434\u043E 18.00, \u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043F\u043E\u0441\u043B\u0435 18.00.'
				}),
				_react2.default.createElement(_MenuList2.default, {
					menuTitle: '\u041F\u043E\u0447\u0442\u043E\u0432\u0430\u044F \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430',
					menuText: '\u041F\u043E\u0447\u0442\u043E\u0432\u0430\u044F \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430 \u0420\u0423\u041F \u0411\u0435\u043B\u043F\u043E\u0447\u0442\u0430 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043E\u043C'
				})
			);
		}
	}]);

	return Delivery;
}(_react.Component);

exports.default = Delivery;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(106);

var _CardProduct = __webpack_require__(107);

var _CardProduct2 = _interopRequireDefault(_CardProduct);

var _categoryHead = __webpack_require__(43);

var _categoryHead2 = _interopRequireDefault(_categoryHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContent = function (_Component) {
	_inherits(MainContent, _Component);

	function MainContent() {
		_classCallCheck(this, MainContent);

		return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).call(this));
	}

	_createClass(MainContent, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    categories = _props.categories,
			    currentCategory = _props.currentCategory,
			    products = _props.products;

			var card_block_header = '\u041C\u0435\u0434\u0432\u0435\u0434\u0438 ';
			var showedProducts = products.filter(function (item) {
				return item.size_category === currentCategory;
			});
			if (!showedProducts.length) {
				showedProducts = products;
			};
			card_block_header += (0, _categoryHead2.default)(categories, currentCategory);

			return _react2.default.createElement(
				'div',
				{ className: 'main_content' },
				_react2.default.createElement(
					'h2',
					null,
					card_block_header
				),
				_react2.default.createElement(
					'div',
					{ className: 'card_block' },
					showedProducts.map(function (item, key) {
						return _react2.default.createElement(_CardProduct2.default, {
							key: key,
							card: item,
							addToCart: _this2.props.addToCart
						});
					})
				)
			);
		}
	}]);

	return MainContent;
}(_react.Component);

exports.default = MainContent;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import SideBar from './SideBar';

var CardProduct = function (_Component) {
	_inherits(CardProduct, _Component);

	function CardProduct() {
		_classCallCheck(this, CardProduct);

		var _this = _possibleConstructorReturn(this, (CardProduct.__proto__ || Object.getPrototypeOf(CardProduct)).call(this));

		_this.addToCart = _this.addToCart.bind(_this);
		return _this;
	}

	_createClass(CardProduct, [{
		key: 'addToCart',
		value: function addToCart(event, id) {
			event.stopPropagation();
			this.props.addToCart(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props$card = this.props.card,
			    id = _props$card.id,
			    full_name = _props$card.full_name,
			    img = _props$card.img,
			    price = _props$card.price,
			    size = _props$card.size,
			    size_category = _props$card.size_category;

			return _react2.default.createElement(
				'div',
				{ className: 'card border_round' },
				_react2.default.createElement(
					'div',
					{ className: 'card_img column_center border_round' },
					_react2.default.createElement('img', { src: 'img/' + img, className: 'img_auto' })
				),
				_react2.default.createElement(
					'p',
					{ className: 'card_name' },
					full_name
				),
				_react2.default.createElement(
					'div',
					{ className: 'card_text' },
					_react2.default.createElement(
						'div',
						{ className: 'card_buy' },
						_react2.default.createElement(
							'div',
							{ className: 'card_size' },
							size,
							'\u0441\u043C'
						),
						_react2.default.createElement(
							'div',
							{ className: 'card_price' },
							price,
							' \u0440\u0443\u0431.'
						)
					),
					_react2.default.createElement(
						'button',
						{ onClick: function onClick(event) {
								return _this2.addToCart(event, id);
							} },
						'\u041A\u0443\u043F\u0438\u0442\u044C'
					)
				)
			);
		}
	}]);

	return CardProduct;
}(_react.Component);

exports.default = CardProduct;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeliveryPage = function (_Component) {
	_inherits(DeliveryPage, _Component);

	function DeliveryPage() {
		_classCallCheck(this, DeliveryPage);

		return _possibleConstructorReturn(this, (DeliveryPage.__proto__ || Object.getPrototypeOf(DeliveryPage)).call(this));
	}

	_createClass(DeliveryPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'main',
				{ className: 'main_delivery' },
				_react2.default.createElement(
					'h2',
					null,
					'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430'
					),
					' - \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u0433.\u041C\u0438\u043D\u0441\u043A \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u0441 10.00 \u0434\u043E 21.00 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430'
					),
					' \u0432 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u0434\u043E 18.00, \u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043F\u043E\u0441\u043B\u0435 18.00.'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041F\u043E\u0447\u0442\u043E\u0432\u0430\u044F \u043F\u0435\u0440\u0435\u0441\u044B\u043B\u043A\u0430 \u0420\u0423\u041F \u0411\u0435\u043B\u043F\u043E\u0447\u0442\u0430'
					),
					' \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043E\u043C'
				),
				_react2.default.createElement(
					'h2',
					null,
					'\u041E\u043F\u043B\u0430\u0442\u0430'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u0443'
					),
					' \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043B\u0438\u0431\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u043E\u0439 (\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430 \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043E\u0442 150 \u0440\u0443\u0431).'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u0427\u0435\u0440\u0435\u0437 \u0440\u0430\u0441\u0441\u0447\u0435\u0442\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0415\u0420\u0418\u041F.'
					),
					' \u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B: \u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F \u0415\u0420\u0418\u041F *******'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043E\u043C'
					),
					' (\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0432\u0435\u0441\u0430 \u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0438 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u0411\u0435\u043B\u043F\u043E\u0447\u0442\u044B)'
				)
			);
		}
	}]);

	return DeliveryPage;
}(_react.Component);

exports.default = DeliveryPage;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(112);

var _Contacts = __webpack_require__(113);

var _Contacts2 = _interopRequireDefault(_Contacts);

var _ContactsForm = __webpack_require__(115);

var _ContactsForm2 = _interopRequireDefault(_ContactsForm);

var _GoodByBlock = __webpack_require__(46);

var _GoodByBlock2 = _interopRequireDefault(_GoodByBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactsPage = function (_Component) {
	_inherits(ContactsPage, _Component);

	function ContactsPage() {
		_classCallCheck(this, ContactsPage);

		return _possibleConstructorReturn(this, (ContactsPage.__proto__ || Object.getPrototypeOf(ContactsPage)).call(this));
	}

	_createClass(ContactsPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'main',
				null,
				_react2.default.createElement(_Contacts2.default, null),
				_react2.default.createElement(_ContactsForm2.default, null),
				_react2.default.createElement(_GoodByBlock2.default, null)
			);
		}
	}]);

	return ContactsPage;
}(_react.Component);

exports.default = ContactsPage;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_Component) {
	_inherits(Contacts, _Component);

	function Contacts() {
		_classCallCheck(this, Contacts);

		return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this));
	}

	_createClass(Contacts, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main_contacts' },
				_react2.default.createElement(
					'h1',
					null,
					'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443:'
					),
					' \u0433.\u041C\u0438\u043D\u0441\u043A, \u041F\u0430\u0440\u0442\u0438\u0437\u0430\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B:'
					),
					' +375(33)***-**-**, +375(17)***-**-**(\u0444\u0430\u043A\u0441)'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'E-mail:'
					),
					' example@tut.by'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						'\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B:'
					),
					' \u0427\u0422\u0423\u041F "\u041C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A", \u0423\u041D\u041F *********, \u0440/\u0441 1111111111111, \u041E\u0410\u041E \u0411\u0430\u043D\u043A \u0411\u0435\u043B\u0412\u042D\u0411, \u0411\u0418\u041A 153001226, \u0433. \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u041C\u044F\u0441\u043D\u0438\u043A\u043E\u0432\u0430, 32.'
				)
			);
		}
	}]);

	return Contacts;
}(_react.Component);

exports.default = Contacts;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(116);

var _sendData = __webpack_require__(45);

var _sendData2 = _interopRequireDefault(_sendData);

var _settings = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactsForm = function (_Component) {
	_inherits(ContactsForm, _Component);

	function ContactsForm() {
		_classCallCheck(this, ContactsForm);

		var _this = _possibleConstructorReturn(this, (ContactsForm.__proto__ || Object.getPrototypeOf(ContactsForm)).call(this));

		_this.onSubmitContactsForm = _this.onSubmitContactsForm.bind(_this);
		return _this;
	}

	_createClass(ContactsForm, [{
		key: 'onSubmitContactsForm',
		value: function onSubmitContactsForm(e) {
			e.preventDefault();
			var str = '';
			var elements = e.target.elements;
			str += 'name=' + elements['name'].value;
			str += '&' + ('email=' + elements['email'].value);
			str += '&' + ('message=' + encodeURIComponent(elements['message'].value));
			(0, _sendData2.default)(_settings.SEND_MAIL_SCRIPT, str);
			e.target.reset();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'contacts_form_wrapper' },
				_react2.default.createElement(
					'h2',
					null,
					'\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0445\u043E\u0440\u043E\u0448\u0435\u0435, \u0438 \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438:'
				),
				_react2.default.createElement(
					'form',
					{ name: 'contacts_form', className: 'contacts_form', onSubmit: function onSubmit(e) {
							return _this2.onSubmitContactsForm(e);
						} },
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							null,
							'\u0412\u0430\u0448\u0435 \u0438\u043C\u044F:'
						),
						_react2.default.createElement('input', { type: 'text', name: 'name', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							null,
							'E-mail:'
						),
						_react2.default.createElement('input', { type: 'email', name: 'email', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							null,
							'\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:'
						),
						_react2.default.createElement('textarea', { name: 'message', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'button',
							{ type: 'submit' },
							'\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
						)
					)
				)
			);
		}
	}]);

	return ContactsForm;
}(_react.Component);

exports.default = ContactsForm;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(119);

var _OrderForm = __webpack_require__(120);

var _OrderForm2 = _interopRequireDefault(_OrderForm);

var _Cart = __webpack_require__(122);

var _Cart2 = _interopRequireDefault(_Cart);

var _sendData = __webpack_require__(45);

var _sendData2 = _interopRequireDefault(_sendData);

var _settings = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartPage = function (_Component) {
	_inherits(CartPage, _Component);

	function CartPage() {
		_classCallCheck(this, CartPage);

		var _this = _possibleConstructorReturn(this, (CartPage.__proto__ || Object.getPrototypeOf(CartPage)).call(this));

		_this.sendOrder = _this.sendOrder.bind(_this);
		return _this;
	}

	_createClass(CartPage, [{
		key: 'sendOrder',
		value: function sendOrder(info) {
			var cart = this.props.cart;
			if (Object.keys(cart).length == 0) {
				return;
			}
			var orderId = 'orderId=' + Date.now();
			var goods = [];
			var k = '1';
			for (var key in cart) {
				goods.push('productId' + k + '=' + key);
				goods.push('count' + k + '=' + cart[key]);
				k++;
			}
			var order = goods.join('&');
			var request = orderId + '&' + order + '&' + info;
			(0, _sendData2.default)(_settings.SEND_ORDER_SCRIPT, request);
			this.props.sendOrder();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'main',
				{ className: 'main_cart' },
				_react2.default.createElement(
					'h1',
					null,
					'\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
				),
				_react2.default.createElement(_Cart2.default, {
					cart: this.props.cart,
					products: this.props.products
				}),
				_react2.default.createElement(_OrderForm2.default, { sendOrder: this.sendOrder })
			);
		}
	}]);

	return CartPage;
}(_react.Component);

exports.default = CartPage;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderForm = function (_Component) {
	_inherits(OrderForm, _Component);

	function OrderForm() {
		_classCallCheck(this, OrderForm);

		var _this = _possibleConstructorReturn(this, (OrderForm.__proto__ || Object.getPrototypeOf(OrderForm)).call(this));

		_this.onSubmitOrderForm = _this.onSubmitOrderForm.bind(_this);
		return _this;
	}

	_createClass(OrderForm, [{
		key: 'onSubmitOrderForm',
		value: function onSubmitOrderForm(e) {
			e.preventDefault();
			var request = [];
			var elements = e.target.elements;
			for (var key in elements) {
				if (elements[key].tagName === 'INPUT') {
					var req = '';
					if (elements[key].type === 'radio') {
						if (elements[key].checked) {
							req = elements[key].name + '=' + elements[key].value;
							request.push(req);
						}
					} else {
						req = elements[key].name + '=' + elements[key].value;
						request.push(req);
					}
				}
			}
			this.props.sendOrder(request.join('&'));
			e.target.reset();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'form',
				{ name: 'order_form', className: 'order_form', onSubmit: function onSubmit(e) {
						return _this2.onSubmitOrderForm(e);
					} },
				_react2.default.createElement(
					'div',
					{ className: 'order_wrapper' },
					_react2.default.createElement(
						'h2',
						null,
						'\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430'
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'text', name: 'name', placeholder: '\u0412\u0430\u0448\u0435 \u0438\u043C\u044F', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'tel', name: 'phone', placeholder: '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'text', name: 'address', placeholder: '\u0410\u0434\u0440\u0435\u0441', required: true })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'email', name: 'email', placeholder: '\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430' })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'order_wrapper' },
					_react2.default.createElement(
						'h2',
						null,
						'\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438'
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'radio', defaultChecked: true, name: 'delivery', value: 'self' }),
						'\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437'
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'radio', name: 'delivery', value: 'curier' }),
						'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C'
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement('input', { type: 'radio', name: 'delivery', value: 'post' }),
						'\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E\u0447\u0442\u043E\u0439'
					)
				),
				_react2.default.createElement(
					'button',
					{ type: 'submit' },
					'\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437'
				)
			);
		}
	}]);

	return OrderForm;
}(_react.Component);

exports.default = OrderForm;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(123);

var _CartItem = __webpack_require__(124);

var _CartItem2 = _interopRequireDefault(_CartItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
	_inherits(Cart, _Component);

	function Cart() {
		_classCallCheck(this, Cart);

		var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this));

		_this._getBody = _this._getBody.bind(_this);
		_this.countTotalSum = _this.countTotalSum.bind(_this);
		_this.cartSum = 0;
		return _this;
	}

	_createClass(Cart, [{
		key: '_getBody',
		value: function _getBody(order, cart) {
			return _react2.default.createElement(
				'table',
				{ className: 'cart_item_wrapper' },
				_react2.default.createElement(
					'thead',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement('th', null),
						_react2.default.createElement(
							'th',
							null,
							'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
						),
						_react2.default.createElement(
							'th',
							null,
							'\u0426\u0435\u043D\u0430'
						),
						_react2.default.createElement(
							'th',
							null,
							'\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
						),
						_react2.default.createElement(
							'th',
							null,
							'\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C'
						)
					)
				),
				_react2.default.createElement(
					'tbody',
					null,
					order.map(function (item, i) {
						return _react2.default.createElement(_CartItem2.default, { key: i, count: cart[item.id], order: item });
					})
				)
			);
		}
	}, {
		key: 'countTotalSum',
		value: function countTotalSum(order, cart) {
			var sum = 0;
			if (order.length) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = order[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						sum += item.price * cart[item.id];
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
			return sum;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    products = _props.products,
			    cart = _props.cart;

			var order = products.filter(function (item) {
				return cart[item.id];
			});
			this.cartSum = this.countTotalSum(order, cart);
			return _react2.default.createElement(
				'div',
				null,
				order.length ? this._getBody(order, cart) : _react2.default.createElement(
					'p',
					null,
					'\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430'
				),
				_react2.default.createElement(
					'p',
					{ className: 'cart_total' },
					' \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ',
					_react2.default.createElement(
						'span',
						null,
						this.cartSum
					),
					' \u0440\u0443\u0431.'
				)
			);
		}
	}]);

	return Cart;
}(_react.Component);

exports.default = Cart;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartItem = function (_Component) {
	_inherits(CartItem, _Component);

	function CartItem() {
		_classCallCheck(this, CartItem);

		return _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).call(this));
	}

	_createClass(CartItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    count = _props.count,
			    order = _props.order;

			return _react2.default.createElement(
				'tr',
				{ className: 'cart_item' },
				_react2.default.createElement(
					'td',
					null,
					_react2.default.createElement('img', { src: 'img/' + order.img })
				),
				_react2.default.createElement(
					'td',
					null,
					order.full_name
				),
				_react2.default.createElement(
					'td',
					null,
					order.price,
					' \u0440\u0443\u0431.'
				),
				_react2.default.createElement(
					'td',
					null,
					count,
					'\u0448\u0442.'
				),
				_react2.default.createElement(
					'td',
					null,
					count * order.price,
					' \u0440\u0443\u0431.'
				)
			);
		}
	}]);

	return CartItem;
}(_react.Component);

exports.default = CartItem;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(127);

var _GoodByBlock = __webpack_require__(46);

var _GoodByBlock2 = _interopRequireDefault(_GoodByBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThankYouPage = function (_Component) {
	_inherits(ThankYouPage, _Component);

	function ThankYouPage() {
		_classCallCheck(this, ThankYouPage);

		return _possibleConstructorReturn(this, (ThankYouPage.__proto__ || Object.getPrototypeOf(ThankYouPage)).call(this));
	}

	_createClass(ThankYouPage, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'thank_wrapper' },
				_react2.default.createElement(
					'p',
					{ className: 'thank_text' },
					'\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!'
				),
				_react2.default.createElement(_GoodByBlock2.default, null)
			);
		}
	}]);

	return ThankYouPage;
}(_react.Component);

exports.default = ThankYouPage;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(129);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notFoundPage = function notFoundPage() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{ className: 'not-page-wrapper' },
			_react2.default.createElement('div', { className: 'not-page-img' }),
			_react2.default.createElement(
				'div',
				{ className: 'not-page-text' },
				_react2.default.createElement(
					'p',
					null,
					'\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442 :-('
				),
				_react2.default.createElement(
					'p',
					null,
					'\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0434\u0440\u0443\u0433\u043E\u0435'
				)
			)
		)
	);
};

exports.default = notFoundPage;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getData = function getData(path) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', path, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject();
      }
    };
    xhr.onerror = function () {
      reject();
    };
    xhr.send();
  });
};

exports.default = getData;

/***/ })
]),[47]);