var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { colorForName, colorIsDark } from '../../utils';

import { withTheme } from '../hocs';

import StyledBox from './StyledBox';

import doc from './doc';

var styledComponents = {
  div: StyledBox
}; // tag -> styled component

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Box.prototype.getChildContext = function getChildContext() {
    var grommet = this.context.grommet;
    var _props = this.props,
        background = _props.background,
        theme = _props.theme;

    var dark = false;
    if (background) {
      if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
        dark = background.dark;
      } else {
        var color = colorForName(background, theme);
        if (color) {
          dark = colorIsDark(color);
        }
      }
      return {
        grommet: _extends({}, grommet, { dark: dark })
      };
    }
    return {};
  };

  Box.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        a11yTitle = _props2.a11yTitle,
        tag = _props2.tag,
        rest = _objectWithoutProperties(_props2, ['a11yTitle', 'tag']);

    var StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = StyledBox.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }

    return React.createElement(StyledComponent, _extends({
      'aria-label': a11yTitle,
      ref: function ref(_ref) {
        _this2.componentRef = _ref;
      }
    }, rest));
  };

  return Box;
}(Component);

Box.contextTypes = {
  grommet: PropTypes.object.isRequired
};
Box.childContextTypes = {
  grommet: PropTypes.object
};
Box.defaultProps = {
  direction: 'column',
  tag: 'div'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Box);
}

export default compose(withTheme)(Box);