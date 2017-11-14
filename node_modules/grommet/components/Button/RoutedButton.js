'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoutedButton = function (_Component) {
  _inherits(RoutedButton, _Component);

  function RoutedButton() {
    _classCallCheck(this, RoutedButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RoutedButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        path = _props.path,
        method = _props.method,
        rest = _objectWithoutProperties(_props, ['path', 'method']);

    return _react2.default.createElement(_Button2.default, _extends({}, rest, {
      href: path,
      onClick: function onClick(event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var onClick = _this2.props.onClick;
        var router = _this2.context.router;

        if (event) {
          var modifierKey = event.ctrlKey || event.metaKey;

          // if the user right-clicked in the button we should let it go
          if (modifierKey) {
            return;
          }
        }
        if (router) {
          event.preventDefault();
          (router.history || router)[method](path);
        }
        if (onClick) {
          onClick.apply(undefined, [event].concat(args));
        }
      }
    }));
  };

  return RoutedButton;
}(_react.Component);

RoutedButton.contextTypes = {
  router: _propTypes2.default.object.isRequired
};
RoutedButton.defaultProps = {
  method: 'push'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc.routedButton)(RoutedButton);
}

exports.default = RoutedButton;