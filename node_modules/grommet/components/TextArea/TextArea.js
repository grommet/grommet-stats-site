'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledTextArea = require('./StyledTextArea');

var _StyledTextArea2 = _interopRequireDefault(_StyledTextArea);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TextArea.prototype.render = function render() {
    return _react2.default.createElement(_StyledTextArea2.default, this.props);
  };

  return TextArea;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(TextArea);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(TextArea);