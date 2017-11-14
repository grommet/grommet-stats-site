function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import Bar from './Bar';
import Circle from './Circle';
import doc from './doc';

var Meter = function (_Component) {
  _inherits(Meter, _Component);

  function Meter() {
    _classCallCheck(this, Meter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Meter.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['type']);

    var content = void 0;
    if (type === 'bar') {
      content = React.createElement(Bar, rest);
    } else if (type === 'circle') {
      content = React.createElement(Circle, rest);
    }

    return content;
  };

  return Meter;
}(Component);

Meter.defaultProps = {
  background: 'light-1',
  size: 'medium',
  thickness: 'medium',
  type: 'bar'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Meter);
}

export default compose(withTheme)(Meter);