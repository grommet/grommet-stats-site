'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledHeading = require('./StyledHeading');

var _StyledHeading2 = _interopRequireDefault(_StyledHeading);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styledComponents = {
  div: _StyledHeading2.default
}; // tag -> styled component

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Heading.prototype.render = function render() {
    var _props = this.props,
        level = _props.level,
        rest = _objectWithoutProperties(_props, ['level']);

    var tag = 'h' + level;
    var StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = _StyledHeading2.default.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }

    return _react2.default.createElement(StyledComponent, _extends({ level: level }, rest));
  };

  return Heading;
}(_react.Component);

Heading.defaultProps = {
  level: 1
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Heading);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Heading);