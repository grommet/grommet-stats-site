var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { cloneElement, Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import StyledStack from './StyledStack';
import doc from './doc';
import styleMap from './styleMap';

var Stack = function (_Component) {
  _inherits(Stack, _Component);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Stack.prototype.render = function render() {
    var _props = this.props,
        anchor = _props.anchor,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['anchor', 'children']);

    // make all children but the first absolutely positioned


    var styledChildren = React.Children.map(children, function (child, index) {
      if (index === 0) {
        return child;
      }

      if (child) {
        var style = _extends({
          position: 'absolute',
          overflow: 'hidden'
        }, styleMap[anchor || 'fill']);
        return cloneElement(child, { style: style });
      }

      return child;
    });

    return React.createElement(
      StyledStack,
      rest,
      styledChildren
    );
  };

  return Stack;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(Stack);
}

export default compose(withTheme)(Stack);