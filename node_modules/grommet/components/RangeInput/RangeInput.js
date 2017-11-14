'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledRangeInput = require('./StyledRangeInput');

var _StyledRangeInput2 = _interopRequireDefault(_StyledRangeInput);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeInput = function (_Component) {
  _inherits(RangeInput, _Component);

  function RangeInput() {
    _classCallCheck(this, RangeInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RangeInput.prototype.render = function render() {
    var grommet = this.context.grommet;

    return _react2.default.createElement(_StyledRangeInput2.default, _extends({ grommet: grommet }, this.props, { type: 'range' }));
  };

  return RangeInput;
}(_react.Component);

RangeInput.contextTypes = {
  grommet: _propTypes2.default.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(RangeInput);
}

exports.default = (0, _recompose.compose)(_hocs.withFocus, _hocs.withTheme)(RangeInput);