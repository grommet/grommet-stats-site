'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meter = function (_Component) {
  _inherits(Meter, _Component);

  function Meter() {
    _classCallCheck(this, Meter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Meter.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['type']);

    var content = void 0;
    if (type === 'bar') {
      content = _react2.default.createElement(_Bar2.default, rest);
    } else if (type === 'circle') {
      content = _react2.default.createElement(_Circle2.default, rest);
    }

    return content;
  };

  return Meter;
}(_react.Component);

Meter.defaultProps = {
  background: 'light-1',
  size: 'medium',
  thickness: 'medium',
  type: 'bar'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Meter);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Meter);