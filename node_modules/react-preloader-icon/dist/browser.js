(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PreloaderIcon"] = factory();
	else
		root["PreloaderIcon"] = factory();
})(this, function() {
return webpackJsonpPreloaderIcon([0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(0);
var ReactPropTypesSecret = __webpack_require__(58);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(105)();
}


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var memory = {};

function pfx(property) {
    if (memory[property]) {
        return memory[property];
    }

    var style = document.createElement("dummy").style;
    var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
    var camelCaseProp = property.replace(/-(\w)/g, function (m, g) {
        return g.toUpperCase();
    });
    var firstUpperProp = camelCaseProp.charAt(0).toUpperCase() + camelCaseProp.substr(1);
    var properties = (camelCaseProp + " " + prefixes.join(firstUpperProp + " ") + firstUpperProp).split(" ");

    memory[property] = {
        support: false,
        prefix: '',
        original: property,
        property: ''
    };

    for (var i = 0, n = properties.length; i < n; i++) {
        if (style[properties[i]] !== undefined) {
            memory[property] = {
                support: true,
                prefix: prefixes[i - 1] || '',
                original: property,
                property: properties[i]
            };

            break;
        }
    }

    return memory[property];
}

exports.default = pfx;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(107);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(3);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = __webpack_require__(89);

var _Oval = __webpack_require__(85);

var _Oval2 = _interopRequireDefault(_Oval);

var _TailSpin = __webpack_require__(88);

var _TailSpin2 = _interopRequireDefault(_TailSpin);

var _Spinning = __webpack_require__(87);

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Puff = __webpack_require__(86);

var _Puff2 = _interopRequireDefault(_Puff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_TYPE = {
    OVAL: 'oval',
    TAIL_SPIN: 'tailSpin',
    SPINNING: 'spinning',
    PUFF: 'puff'
};

var PreloaderIcon = function (_React$Component) {
    _inherits(PreloaderIcon, _React$Component);

    function PreloaderIcon() {
        _classCallCheck(this, PreloaderIcon);

        return _possibleConstructorReturn(this, (PreloaderIcon.__proto__ || Object.getPrototypeOf(PreloaderIcon)).apply(this, arguments));
    }

    _createClass(PreloaderIcon, [{
        key: 'render',
        value: function render() {
            var className = 'preloader-icon ' + this.props.className;
            var size = '' + this.props.size + this.props.unit;
            var style = (0, _objectAssign2.default)({ width: size, height: size }, this.props.style);
            var _props = this.props,
                strokeWidth = _props.strokeWidth,
                strokeColor = _props.strokeColor,
                duration = _props.duration;

            var loader = this.createLoader(this.props.type, { strokeWidth: strokeWidth, strokeColor: strokeColor, duration: duration });

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'preloader-icon__inner', style: _styles.inner },
                    _react2.default.createElement(
                        'em',
                        { className: 'preloader-icon__title', style: _styles.title },
                        'Loading...'
                    ),
                    loader
                )
            );
        }
    }, {
        key: 'createLoader',
        value: function createLoader(type, options) {
            switch (type) {
                case ICON_TYPE.OVAL:
                    return _react2.default.createElement(_Oval2.default, options);
                case ICON_TYPE.TAIL_SPIN:
                    return _react2.default.createElement(_TailSpin2.default, options);
                case ICON_TYPE.SPINNING:
                    return _react2.default.createElement(_Spinning2.default, options);
                case ICON_TYPE.PUFF:
                    return _react2.default.createElement(_Puff2.default, options);
                default:
                    return null;
            }
        }
    }]);

    return PreloaderIcon;
}(_react2.default.Component);

PreloaderIcon.propTypes = {
    className: _propTypes2.default.string,
    type: _propTypes2.default.string,
    size: _propTypes2.default.number,
    unit: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.number,
    strokeColor: _propTypes2.default.string,
    duration: _propTypes2.default.number
};
PreloaderIcon.defaultProps = {
    className: '',
    type: ICON_TYPE.OVAL,
    size: 32,
    unit: 'px',
    strokeWidth: 3,
    strokeColor: '#f0ad4e',
    duration: 800
};
exports.default = PreloaderIcon;
exports.ICON_TYPE = ICON_TYPE;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PreloaderIcon = __webpack_require__(82);

var _PreloaderIcon2 = _interopRequireDefault(_PreloaderIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _PreloaderIcon2.default;
module.exports.ICON_TYPE = _PreloaderIcon.ICON_TYPE;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(19);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(25);

var _linear2 = _interopRequireDefault(_linear);

var _pfx = __webpack_require__(53);

var _pfx2 = _interopRequireDefault(_pfx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Oval = function (_React$Component) {
    _inherits(Oval, _React$Component);

    function Oval(props) {
        _classCallCheck(this, Oval);

        var _this = _possibleConstructorReturn(this, (Oval.__proto__ || Object.getPrototypeOf(Oval)).call(this, props));

        _this.stepper = new _stepperjs2.default({
            duration: _this.props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Oval, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var transform = (0, _pfx2.default)('transform').property;
            var rotate = (0, _pfx2.default)('perspective').support ? 'rotateZ' : 'rotate';

            this.stepper.on('update', function (progress) {
                _this2.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                this.stepper.option('duration', this.props.duration);
                this.stepper.stop();
                this.stepper.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stepper.stop();
            this.stepper.off();
            this.stepper = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var strokeWidth = this.props.strokeWidth;
            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.target = el;
                    }, className: 'preloader-icon__oval', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 102 102',
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(1 1)', strokeWidth: strokeWidth },
                            _react2.default.createElement('circle', { stroke: this.props.strokeColor, strokeOpacity: '.5', cx: '50', cy: '50', r: radius }),
                            _react2.default.createElement('path', { d: 'M50,' + strokeWidth / 2 + ' A' + radius + ',' + radius + ',0,0,1,' + (50 + radius) + ',50' })
                        )
                    )
                )
            );
        }
    }]);

    return Oval;
}(_react2.default.Component);

exports.default = Oval;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(19);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(25);

var _linear2 = _interopRequireDefault(_linear);

var _bezierEasing = __webpack_require__(52);

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spread = (0, _bezierEasing2.default)(0.165, 0.84, 0.44, 1);
var fade = (0, _bezierEasing2.default)(0.3, 0.61, 0.355, 1);

var Puff = function (_React$Component) {
    _inherits(Puff, _React$Component);

    function Puff(props) {
        _classCallCheck(this, Puff);

        var _this = _possibleConstructorReturn(this, (Puff.__proto__ || Object.getPrototypeOf(Puff)).call(this, props));

        _this.radius = 50 - props.strokeWidth / 2;
        _this.stepper = new _stepperjs2.default({
            duration: props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Puff, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var c1 = this.c1,
                c2 = this.c2;


            this.stepper.on('update', function (n) {
                var n2 = n >= .5 ? n - .5 : n + .5;

                c1.setAttribute('r', spread(n) * _this2.radius);
                c2.setAttribute('r', spread(n2) * _this2.radius);
                c1.style.strokeOpacity = 1 - fade(n);
                c2.style.strokeOpacity = 1 - fade(n2);
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.strokeWidth !== this.props.strokeWidth) {
                this.radius = 50 - this.props.strokeWidth / 2;
            }

            if (prevProps.duration !== this.props.duration) {
                this.c1.setAttribute('r', '0');
                this.c2.setAttribute('r', '0');
                this.c1.style.strokeOpacity = 0;
                this.c2.style.strokeOpacity = 0;
                this.stepper.option('duration', this.props.duration);
                this.stepper.stop();
                this.stepper.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stepper.stop();
            this.stepper.off();
            this.stepper = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'preloader-icon__puff', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 102 102',
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(1 1)', strokeWidth: this.props.strokeWidth },
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c1 = el;
                                }, cx: '50', cy: '50', r: '0', style: { strokeOpacity: 0 } }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c2 = el;
                                }, cx: '50', cy: '50', r: '0', style: { strokeOpacity: 0 } })
                        )
                    )
                )
            );
        }
    }]);

    return Puff;
}(_react2.default.Component);

exports.default = Puff;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(19);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(25);

var _linear2 = _interopRequireDefault(_linear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CIRCULAR_COUNT = 8;
var PART_PROGRESS = 1 / CIRCULAR_COUNT;

var Spinning = function (_React$Component) {
    _inherits(Spinning, _React$Component);

    function Spinning(props) {
        _classCallCheck(this, Spinning);

        var _this = _possibleConstructorReturn(this, (Spinning.__proto__ || Object.getPrototypeOf(Spinning)).call(this, props));

        _this.stepper = new _stepperjs2.default({
            duration: _this.props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Spinning, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var prevIndex = 0;

            this.stepper.on('update', function (progress) {
                progress = progress > 1 ? 0.9999 : progress;

                var nextIndex = parseInt(progress / PART_PROGRESS, 10);
                var nextTarget = void 0;
                var prevTarget = void 0;

                if (nextIndex - 1 !== prevIndex && !(nextIndex === 0 && prevIndex === 7)) {
                    prevTarget = _this2['c' + prevIndex];
                    prevTarget.style.fillOpacity = 0;

                    prevIndex = nextIndex === 0 ? 7 : nextIndex - 1;
                }

                progress = (progress - PART_PROGRESS * nextIndex) / PART_PROGRESS;

                nextTarget = _this2['c' + nextIndex];
                prevTarget = _this2['c' + prevIndex];

                nextTarget.style.fillOpacity = progress;
                prevTarget.style.fillOpacity = 1 - progress;
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                for (var i = 0, n = 8; i < n; i++) {
                    this['c' + i].style.fillOpacity = 0;
                }

                this.stepper.option('duration', this.props.duration);
                this.stepper.stop();
                this.stepper.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stepper.stop();
            this.stepper.off();
            this.stepper = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                strokeColor = _props.strokeColor,
                strokeWidth = _props.strokeWidth;

            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { className: 'preloader-icon__spinning', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 560 560'
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'translate(10 10)',
                                stroke: strokeColor,
                                strokeWidth: strokeWidth
                            },
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c0 = el;
                                }, cx: '426.01', cy: '114.62', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c1 = el;
                                }, cx: '490.63', cy: '270.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c2 = el;
                                }, cx: '426.01', cy: '426.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c3 = el;
                                }, cx: '270', cy: '491.25', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c4 = el;
                                }, cx: '113.99', cy: '426.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c5 = el;
                                }, cx: '49.38', cy: '270.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c6 = el;
                                }, cx: '113.99', cy: '114.62', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c7 = el;
                                }, cx: '270', cy: '50', r: radius, style: { fillOpacity: 0 }, fill: strokeColor })
                        )
                    )
                )
            );
        }
    }]);

    return Spinning;
}(_react2.default.Component);

exports.default = Spinning;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(19);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(25);

var _linear2 = _interopRequireDefault(_linear);

var _pfx = __webpack_require__(53);

var _pfx2 = _interopRequireDefault(_pfx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TailSpin = function (_React$Component) {
    _inherits(TailSpin, _React$Component);

    function TailSpin(props) {
        _classCallCheck(this, TailSpin);

        var _this = _possibleConstructorReturn(this, (TailSpin.__proto__ || Object.getPrototypeOf(TailSpin)).call(this, props));

        _this.stepper = new _stepperjs2.default({
            duration: _this.props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(TailSpin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var transform = (0, _pfx2.default)('transform').property;
            var rotate = (0, _pfx2.default)('perspective').support ? 'rotateZ' : 'rotate';

            this.stepper.on('update', function (progress) {
                _this2.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                this.stepper.option('duration', this.props.duration);
                this.stepper.stop();
                this.stepper.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stepper.stop();
            this.stepper.off();
            this.stepper = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var strokeWidth = this.props.strokeWidth;
            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.target = el;
                    }, className: 'preloader-icon__tail-spin', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 102 102'
                    },
                    _react2.default.createElement(
                        'defs',
                        null,
                        _react2.default.createElement(
                            'linearGradient',
                            { x1: '8.042%', y1: '0%', x2: '65.682%', y2: '23.865%', id: 'a' },
                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, stopOpacity: '0', offset: '0%' }),
                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, stopOpacity: '.631', offset: '63.146%' }),
                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, offset: '100%' })
                        )
                    ),
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(1 1)' },
                            _react2.default.createElement('path', {
                                d: 'M50,' + strokeWidth / 2 + ' A' + radius + ',' + radius + ',0,0,1,' + (50 + radius) + ',50',
                                stroke: 'url(#a)',
                                strokeWidth: strokeWidth
                            }),
                            _react2.default.createElement('circle', { fill: this.props.strokeColor, cx: 50 + radius, cy: '50', r: strokeWidth / 2 })
                        )
                    )
                )
            );
        }
    }]);

    return TailSpin;
}(_react2.default.Component);

exports.default = TailSpin;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var inner = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    lineHeight: 0
};

var title = {
    fontSize: 0,
    height: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    visibility: 'hidden',
    width: 0
};

exports.inner = inner;
exports.title = title;

/***/ })

},[84]);
});
//# sourceMappingURL=browser.js.map