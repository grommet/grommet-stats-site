'use strict';

exports.__esModule = true;
exports.StyledIcon = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var primaryIconLabelStyle = (0, _styledComponents.css)(['', ' font-weight:', ';'], function (props) {
  return (0, _utils.fontSize)(props.theme.global.control.font.size, props.theme.global.spacing);
}, function (props) {
  return props.theme.global.control.font.weight;
});

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n';

var StyledAnchor = _styledComponents2.default.a.withConfig({
  displayName: 'StyledAnchor'
})(['color:', ';text-decoration:', ';cursor:pointer;outline:none;', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.grommet.dark ? props.theme.global.colors.darkBackground.text : props.theme.anchor.color;
}, function (props) {
  return props.theme.anchor.textDecoration;
}, function (props) {
  return !props.disabled && '\n    &:hover {\n      text-decoration: underline;\n    }\n  ';
}, function (props) {
  return (props.primary || props.icon && props.label) && primaryIconLabelStyle;
}, function (props) {
  return !props.primary && props.icon && props.label && '\n    color: ' + props.theme.global.colors.text + ';\n  ';
}, function (props) {
  return props.icon && !props.label && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && _utils.focusStyle;
});

var StyledIcon = exports.StyledIcon = _styledComponents2.default.span.withConfig({
  displayName: 'StyledAnchor__StyledIcon'
})(['display:inline-block;', ' > *{vertical-align:bottom;}'], function (props) {
  return props.label && '\n    ' + (props.reverse ? '\n      margin-left: ' + props.theme.global.edgeSize.small + ';\n    ' : '\n      margin-right: ' + props.theme.global.edgeSize.small + ';\n    ') + '\n  ';
});

exports.default = StyledAnchor.extend(_templateObject, function (props) {
  return props.theme.anchor.extend;
});