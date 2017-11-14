'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _DropContainer = require('./DropContainer');

var _DropContainer2 = _interopRequireDefault(_DropContainer);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drop = function (_Component) {
  _inherits(Drop, _Component);

  function Drop() {
    var _temp, _this, _ret;

    _classCallCheck(this, Drop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.originalFocusedElement = document.activeElement, _this.dropContainer = (0, _utils.getNewContainer)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.render = function render() {
    return (0, _reactDom.createPortal)(_react2.default.createElement(_DropContainer2.default, this.props), this.dropContainer);
  };

  return Drop;
}(_react.Component);

Drop.defaultProps = {
  align: {
    top: 'top',
    left: 'left'
  }
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Drop);
}

exports.default = (0, _hocs.withTheme)(Drop);