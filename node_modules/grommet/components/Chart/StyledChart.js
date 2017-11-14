'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledChart = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledChart'
})(['max-width:100%;']);

exports.default = StyledChart.extend(_templateObject, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});