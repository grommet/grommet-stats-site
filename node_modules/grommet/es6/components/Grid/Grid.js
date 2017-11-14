function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import StyledGrid from './StyledGrid';
import doc from './doc';

var styledComponents = {
  div: StyledGrid
}; // tag -> styled component

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _props = this.props,
        tag = _props.tag,
        rest = _objectWithoutProperties(_props, ['tag']);

    var StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = StyledGrid.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }

    return React.createElement(StyledComponent, rest);
  };

  return Grid;
}(Component);

Grid.defaultProps = {
  tag: 'div'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Grid);
}

export default compose(withTheme)(Grid);