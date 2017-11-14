'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _StyledChart = require('./StyledChart');

var _StyledChart2 = _interopRequireDefault(_StyledChart);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderBars = function renderBars(values, bounds, scale, height) {
  return (values || []).map(function (valueArg, index) {
    var label = valueArg.label,
        value = valueArg.value,
        rest = _objectWithoutProperties(valueArg, ['label', 'value']);

    var key = 'p-' + index;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    var top = value.length === 2 ? value[1] : value[2];
    if (top !== 0) {
      var d = 'M ' + value[0] * scale[0] + ',' + (height - bottom * scale[1]) + (' L ' + value[0] * scale[0] + ',' + (height - top * scale[1]));

      return _react2.default.createElement(
        'g',
        { key: key, fill: 'none' },
        _react2.default.createElement(
          'title',
          null,
          label
        ),
        _react2.default.createElement('path', _extends({ d: d }, rest))
      );
    }
    return undefined;
  });
};

var renderLine = function renderLine(values, bounds, scale, height) {
  var d = '';
  (values || []).forEach(function (_ref, index) {
    var value = _ref.value;

    d += (index ? ' L' : 'M') + ' ' + value[0] * scale[0] + ',' + (height - value[1] * scale[1]);
  });
  return _react2.default.createElement(
    'g',
    { fill: 'none' },
    _react2.default.createElement('path', { d: d })
  );
};

var renderArea = function renderArea(values, bounds, scale, height, props) {
  var color = props.color,
      theme = props.theme;

  var d = '';
  (values || []).forEach(function (_ref2, index) {
    var value = _ref2.value;

    var top = value.length === 2 ? value[1] : value[2];
    d += (!index ? 'M' : ' L') + ' ' + value[0] * scale[0] + ',' + (height - top * scale[1]);
  });
  (values || []).reverse().forEach(function (_ref3) {
    var value = _ref3.value;

    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    d += ' L ' + value[0] * scale[0] + ',' + (height - bottom * scale[1]);
  });
  d += ' Z';
  return _react2.default.createElement(
    'g',
    { fill: (0, _utils.colorForName)(color, theme) },
    _react2.default.createElement('path', { d: d })
  );
};

var normalizeBounds = function normalizeBounds(props) {
  var bounds = props.bounds;
  if (!bounds) {
    bounds = [[0, 1], [0, 1]];
    (props.values || []).forEach(function (value) {
      bounds[0][0] = Math.min(bounds[0][0], value.value[0]);
      bounds[0][1] = Math.max(bounds[0][1], value.value[0]);
      bounds[1][0] = Math.min(bounds[1][0], value.value[1]);
      bounds[1][1] = Math.max(bounds[1][1], value.value[1]);
    });
  }
  return bounds;
};

var Chart = function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props, context) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.state = { bounds: normalizeBounds(props) };
    return _this;
  }

  Chart.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({ bounds: normalizeBounds(nextProps) });
  };

  Chart.prototype.render = function render() {
    var _props = this.props,
        color = _props.color,
        round = _props.round,
        size = _props.size,
        theme = _props.theme,
        thickness = _props.thickness,
        type = _props.type,
        values = _props.values,
        rest = _objectWithoutProperties(_props, ['color', 'round', 'size', 'theme', 'thickness', 'type', 'values']);

    var bounds = this.state.bounds;


    var sizeWidth = typeof size === 'string' ? size : size.width;
    var sizeHeight = typeof size === 'string' ? size : size.height;
    var width = sizeWidth === 'full' ? bounds[0][1] - bounds[0][0] : (0, _utils.parseMetricToInt)(theme.global.size[sizeWidth]);
    var height = sizeHeight === 'full' ? bounds[1][1] - bounds[1][0] : (0, _utils.parseMetricToInt)(theme.global.size[sizeHeight]);
    var strokeWidth = (0, _utils.parseMetricToInt)(theme.global.edgeSize[thickness]);
    var scale = [width / (bounds[0][1] - bounds[0][0]), height / (bounds[1][1] - bounds[1][0])];

    var contents = void 0;
    if (type === 'bar') {
      contents = renderBars(values, bounds, scale, height);
    } else if (type === 'line') {
      contents = renderLine(values, bounds, scale, height);
    } else if (type === 'area') {
      contents = renderArea(values, bounds, scale, height, this.props);
    }

    return _react2.default.createElement(
      _StyledChart2.default,
      _extends({
        viewBox: '-' + strokeWidth / 2 + ' -' + strokeWidth / 2 + '\n          ' + (width + strokeWidth) + ' ' + (height + strokeWidth),
        preserveAspectRatio: 'none',
        width: size === 'full' ? '100%' : width,
        height: height
      }, rest),
      _react2.default.createElement(
        'g',
        {
          stroke: (0, _utils.colorForName)(color, theme),
          strokeWidth: strokeWidth,
          strokeLinecap: round ? 'round' : 'butt',
          strokeLinejoin: round ? 'round' : 'miter'
        },
        contents
      )
    );
  };

  return Chart;
}(_react.Component);

Chart.defaultProps = {
  color: 'accent-1',
  size: { width: 'medium', height: 'small' },
  thickness: 'medium',
  type: 'bar'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Chart);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Chart);