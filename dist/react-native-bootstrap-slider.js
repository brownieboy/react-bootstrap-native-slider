(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "detect-browser", "react-html5-slider", "react-bootstrap-slider"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("detect-browser"), require("react-html5-slider"), require("react-bootstrap-slider"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.detectBrowser, global.reactHtml5Slider, global.reactBootstrapSlider);
        global.reactNativeBootstrapSlider = mod.exports;
    }
})(this, function (exports, _react, _detectBrowser, _reactHtml5Slider, _reactBootstrapSlider) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ReactNativeBootstrapSlider = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _detectBrowser2 = _interopRequireDefault(_detectBrowser);

    var _reactHtml5Slider2 = _interopRequireDefault(_reactHtml5Slider);

    var _reactBootstrapSlider2 = _interopRequireDefault(_reactBootstrapSlider);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ReactNativeBootstrapSlider = exports.ReactNativeBootstrapSlider = function (_React$Component) {
        _inherits(ReactNativeBootstrapSlider, _React$Component);

        function ReactNativeBootstrapSlider(props) {
            _classCallCheck(this, ReactNativeBootstrapSlider);

            // Although IE10+ displays the native range control,it:
            //      a) looks crap
            //      b) doesn"t respond to its Input or Change events properly.
            // So have augmented a feature test with some good, old-fashioned
            // browser sniffing to always display the Bootstrap version on IE.
            // var browserVersion = parseInt(browser.version, 10);
            // if (browser.name === "ie" && (browserVersion > 9 && browserVersion < 12)) {
            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactNativeBootstrapSlider).call(this, props));

            if (_detectBrowser2.default.name === "ie" || _detectBrowser2.default.name === "edge") {
                // IE all versions.  Note: previous versions of this  module used to display
                // the native control on IE 12/Edge, but it actually looks crap there too.
                _this.supportsRange = false;
            } else {
                // All other browsers except IE.
                // Test whether range input is accepted by creating such a field, then seeing what its
                // type is set to.
                var input = document.createElement("input");
                input.setAttribute("type", "range");
                _this.supportsRange = input.type !== "text" ? true : false;
            }
            return _this;
        }

        _createClass(ReactNativeBootstrapSlider, [{
            key: "render",
            value: function render() {
                var polyfill = typeof this.props.polyfill === "undefined" ? true : this.props.polyfill;
                if (polyfill && this.supportsRange) {
                    return _react2.default.createElement(_reactHtml5Slider2.default, this.props);
                } else {
                    return _react2.default.createElement(_reactBootstrapSlider2.default, this.props);
                }
            }
        }]);

        return ReactNativeBootstrapSlider;
    }(_react2.default.Component);

    exports.default = ReactNativeBootstrapSlider;
});
