'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Button = require('../Button');

var _Drop = require('../Drop');

var _hocs = require('../hocs');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropButton = function (_Component) {
  _inherits(DropButton, _Component);

  function DropButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      showDrop: false
    }, _this.onDropClose = function () {
      var onClose = _this.props.onClose;

      _this.setState({
        showDrop: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DropButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var open = _ref.open;
    var showDrop = this.state.showDrop;

    if (open !== showDrop) {
      this.setState({ showDrop: open });
    }
  };

  DropButton.prototype.componentDidMount = function componentDidMount() {
    var open = this.props.open;
    // if the drop is open during first mount we need to call render again to retreive
    // the right ref

    if (open) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({ showDrop: true });
      /* eslint-enable react/no-did-mount-set-state */
    }
  };

  DropButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        control = _props.control,
        id = _props.id,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'control', 'id', 'theme']);

    var showDrop = this.state.showDrop;


    var drop = void 0;
    if (showDrop) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          key: 'drop-button__drop',
          restrictFocus: true,
          id: id ? 'drop-button__' + id : undefined,
          align: { top: 'bottom', left: 'left' },
          ref: function ref(_ref2) {
            _this2.dropRef = _ref2;
          },
          control: this.componentRef,
          onClose: this.onDropClose
        },
        children
      );
    }

    return [_react2.default.createElement(
      _Button.Button,
      _extends({
        fill: true,
        key: 'drop-button__button',
        id: id,
        ref: function ref(_ref3) {
          _this2.componentRef = _ref3;
        },
        a11yTitle: a11yTitle || 'Open Drop',
        onClick: function onClick() {
          return _this2.setState({ showDrop: !_this2.state.showDrop });
        }
      }, rest),
      control
    ), drop];
  };

  return DropButton;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(DropButton);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(DropButton);