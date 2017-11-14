var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import StyledRadioButton, { StyledRadioButtonContainer, StyledRadioButtonInput, StyledRadioButtonButton } from './StyledRadioButton';
import doc from './doc';

var RadioButton = function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RadioButton.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        onChange = _props.onChange,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'id', 'label', 'name', 'onChange', 'theme']);

    var grommet = this.context.grommet;


    var normalizedLabel = typeof label === 'string' ? React.createElement(
      'div',
      null,
      label
    ) : label;

    return React.createElement(
      StyledRadioButtonContainer,
      {
        htmlFor: id,
        theme: theme,
        grommet: grommet
      },
      React.createElement(
        StyledRadioButton,
        { theme: theme },
        React.createElement(StyledRadioButtonInput, _extends({}, rest, {
          tabIndex: '0',
          id: id,
          name: name,
          type: 'checkbox',
          disabled: disabled,
          checked: checked,
          onChange: onChange,
          theme: theme,
          grommet: grommet
        })),
        React.createElement(
          StyledRadioButtonButton,
          { theme: theme, grommet: grommet },
          React.createElement(
            'svg',
            { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet' },
            React.createElement('circle', { cx: 12, cy: 12, r: 6 })
          )
        )
      ),
      normalizedLabel
    );
  };

  return RadioButton;
}(Component);

RadioButton.contextTypes = {
  grommet: PropTypes.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  doc(RadioButton);
}

export default compose(withTheme)(RadioButton);