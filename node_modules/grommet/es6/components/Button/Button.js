var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, Component } from 'react';
import { compose } from 'recompose';

import { withFocus, withTheme } from '../hocs';

import StyledButton, { StyledLabel, StyledIcon } from './StyledButton';
import doc from './doc';

var AnchorStyledButton = StyledButton.withComponent('a');

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props, context) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }
    return _this;
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        icon = _props.icon,
        focus = _props.focus,
        href = _props.href,
        label = _props.label,
        onClick = _props.onClick,
        plain = _props.plain,
        reverse = _props.reverse,
        theme = _props.theme,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'icon', 'focus', 'href', 'label', 'onClick', 'plain', 'reverse', 'theme', 'type']);

    var Tag = href ? AnchorStyledButton : StyledButton;

    var buttonIcon = void 0;
    if (icon) {
      buttonIcon = React.createElement(
        StyledIcon,
        { 'aria-hidden': true, key: 'styled-icon', theme: theme },
        icon
      );
    }

    var buttonLabel = void 0;
    if (label) {
      buttonLabel = React.createElement(
        StyledLabel,
        { key: 'styled-label', theme: theme },
        label
      );
    }

    var first = reverse ? buttonLabel : buttonIcon;
    var second = reverse ? buttonIcon : buttonLabel;

    var disabled = !href && !onClick && ['reset', 'submit'].indexOf(type) === -1;

    var plainProp = plain || Children.count(children) > 0 || icon && !label;

    return React.createElement(
      Tag,
      _extends({
        tabIndex: '0'
      }, rest, {
        'aria-label': a11yTitle,
        disabled: disabled,
        icon: icon,
        focus: focus,
        href: href,
        label: label,
        onClick: onClick,
        plain: plainProp,
        theme: theme,
        type: !href ? type : undefined
      }),
      first || second ? [first, second] : children
    );
  };

  return Button;
}(Component);

Button.defaultProps = {
  type: 'button'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Button);
}

export default compose(withFocus, withTheme)(Button);