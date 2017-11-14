var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { arcCommands, colorForName, parseMetricToInt, translateEndAngle } from '../../utils';

import StyledMeter from './StyledMeter';

var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Circle.prototype.render = function render() {
    var _props = this.props,
        background = _props.background,
        round = _props.round,
        size = _props.size,
        theme = _props.theme,
        thickness = _props.thickness,
        values = _props.values,
        rest = _objectWithoutProperties(_props, ['background', 'round', 'size', 'theme', 'thickness', 'values']);

    var width = size === 'full' ? 288 : parseMetricToInt(theme.global.size[size]);
    var height = parseMetricToInt(theme.global.edgeSize[thickness]);
    var mid = width / 2;
    var radius = width / 2 - height / 2;
    var max = 100;
    var anglePer = 360 / max;
    var someHighlight = (values || []).some(function (v) {
      return v.highlight;
    });

    var startValue = 0;
    var startAngle = 0;
    var paths = (values || []).filter(function (v) {
      return v.value > 0;
    }).map(function (valueArg, index) {
      var color = valueArg.color,
          highlight = valueArg.highlight,
          label = valueArg.label,
          onHover = valueArg.onHover,
          value = valueArg.value,
          pathRest = _objectWithoutProperties(valueArg, ['color', 'highlight', 'label', 'onHover', 'value']);

      var key = 'p-' + index;
      var colorName = color || (index === values.length - 1 ? 'accent-1' : 'neutral-' + (index + 1));

      var endAngle = void 0;
      if (startValue + value >= max) {
        endAngle = 360;
      } else {
        endAngle = Math.min(360, translateEndAngle(startAngle, anglePer, value));
      }
      var d = arcCommands(width / 2, width / 2, radius, startAngle, endAngle);
      var hoverProps = void 0;
      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }
      startValue += value;
      startAngle = endAngle;

      return React.createElement('path', _extends({
        key: key,
        d: d,
        fill: 'none',
        stroke: colorForName(someHighlight && !highlight ? background : colorName, theme),
        strokeWidth: height,
        strokeLinecap: round ? 'round' : 'square'
      }, hoverProps, pathRest));
    }).reverse(); // reverse so the caps looks right

    return React.createElement(
      StyledMeter,
      _extends({
        viewBox: '0 0 ' + width + ' ' + width,
        width: size === 'full' ? '100%' : width,
        height: size === 'full' ? '100%' : width
      }, rest),
      React.createElement('circle', {
        cx: mid,
        cy: mid,
        r: radius,
        stroke: colorForName(background, theme),
        strokeWidth: height,
        strokeLinecap: round ? 'round' : 'square',
        fill: 'none'
      }),
      paths
    );
  };

  return Circle;
}(Component);

export default Circle;