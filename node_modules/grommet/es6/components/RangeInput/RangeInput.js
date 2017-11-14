var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { withFocus, withTheme } from '../hocs';

import StyledRangeInput from './StyledRangeInput';
import doc from './doc';

var RangeInput = function (_Component) {
  _inherits(RangeInput, _Component);

  function RangeInput() {
    _classCallCheck(this, RangeInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RangeInput.prototype.render = function render() {
    var grommet = this.context.grommet;

    return React.createElement(StyledRangeInput, _extends({ grommet: grommet }, this.props, { type: 'range' }));
  };

  return RangeInput;
}(Component);

RangeInput.contextTypes = {
  grommet: PropTypes.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  doc(RangeInput);
}

export default compose(withFocus, withTheme)(RangeInput);