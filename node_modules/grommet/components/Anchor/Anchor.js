'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _grommetIcons = require('grommet-icons');

var _hocs = require('../hocs');

var _StyledAnchor = require('./StyledAnchor');

var _StyledAnchor2 = _interopRequireDefault(_StyledAnchor);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor(props, context) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }
    return _this;
  }

  Anchor.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        disabled = _props.disabled,
        href = _props.href,
        icon = _props.icon,
        focus = _props.focus,
        label = _props.label,
        primary = _props.primary,
        onClick = _props.onClick,
        reverse = _props.reverse,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'disabled', 'href', 'icon', 'focus', 'label', 'primary', 'onClick', 'reverse', 'theme']);

    var grommet = this.context.grommet;


    var anchorIcon = void 0;
    if (icon) {
      anchorIcon = icon;
    } else if (primary) {
      anchorIcon = _react2.default.createElement(_grommetIcons.LinkNext, { color: primary ? 'brand' : undefined });
    }

    if (anchorIcon) {
      anchorIcon = _react2.default.createElement(
        _StyledAnchor.StyledIcon,
        { reverse: reverse, label: label, theme: theme },
        anchorIcon
      );
    }

    var first = void 0;
    var second = void 0;
    if (children) {
      first = children;
    } else if (reverse) {
      first = label || null;
      second = anchorIcon || null;
    } else {
      first = anchorIcon || null;
      second = label || null;
    }

    return _react2.default.createElement(
      _StyledAnchor2.default,
      _extends({}, rest, {
        'aria-label': a11yTitle,
        disabled: disabled,
        icon: anchorIcon,
        focus: focus,
        label: label,
        primary: primary,
        reverse: reverse,
        theme: theme,
        grommet: grommet,
        href: !disabled ? href : undefined,
        onClick: !disabled ? onClick : undefined
      }),
      first,
      second
    );
  };

  return Anchor;
}(_react.Component);

Anchor.contextTypes = {
  grommet: _propTypes2.default.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Anchor);
}

exports.default = (0, _recompose.compose)(_hocs.withFocus, _hocs.withTheme)(Anchor);