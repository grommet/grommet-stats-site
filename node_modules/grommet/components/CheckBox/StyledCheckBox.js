'use strict';

exports.__esModule = true;
exports.StyledCheckBoxKnob = exports.StyledCheckBoxToggle = exports.StyledCheckBoxBox = exports.StyledCheckBoxInput = exports.StyledCheckBoxContainer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledCheckBoxContainer = exports.StyledCheckBoxContainer = _styledComponents2.default.label.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxContainer'
})(['display:flex;flex-direction:', ';align-items:center;cursor:pointer;user-select:none;> div:first-child{', '}:hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:', ';}'], function (props) {
  return props.reverse ? 'row-reverse' : 'row';
}, function (props) {
  return props.reverse ? 'margin-left: ' + props.theme.global.edgeSize.small + ';' : 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.global.colors.black;
});

var StyledCheckBoxInput = exports.StyledCheckBoxInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxInput'
})(['opacity:0;width:0;height:0;margin:0;:focus + div,:focus + span{', '}:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background-color:', ';}'], _utils.focusStyle, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
});

var StyledCheckBoxBox = exports.StyledCheckBoxBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxBox'
})(['position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background-color:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';stroke-width:', ';stroke:', ';}'], function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.grommet.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.border.radius;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.check.width;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.checkBox.check.color;
});

var StyledCheckBoxToggle = exports.StyledCheckBoxToggle = _styledComponents2.default.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxToggle'
})(['position:relative;vertical-align:middle;display:inline-block;width:', ';height:', ';border:', ' solid;border-color:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.grommet.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

var StyledCheckBoxKnob = exports.StyledCheckBoxKnob = _styledComponents2.default.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxKnob'
})(['position:absolute;top:-', ';left:-', ';transition:all 0.3s;width:', ';height:', ';background-color:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.toggle.color;
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

var StyledCheckBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCheckBox'
})(['']);

exports.default = StyledCheckBox.extend(_templateObject, function (props) {
  return props.theme.checkBox && props.theme.checkBox.extend;
});