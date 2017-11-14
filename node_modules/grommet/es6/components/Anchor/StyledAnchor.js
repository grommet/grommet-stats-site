var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, fontSize } from '../../utils';

var primaryIconLabelStyle = css(['', ' font-weight:', ';'], function (props) {
  return fontSize(props.theme.global.control.font.size, props.theme.global.spacing);
}, function (props) {
  return props.theme.global.control.font.weight;
});

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n';

var StyledAnchor = styled.a.withConfig({
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
  return props.focus && focusStyle;
});

export var StyledIcon = styled.span.withConfig({
  displayName: 'StyledAnchor__StyledIcon'
})(['display:inline-block;', ' > *{vertical-align:bottom;}'], function (props) {
  return props.label && '\n    ' + (props.reverse ? '\n      margin-left: ' + props.theme.global.edgeSize.small + ';\n    ' : '\n      margin-right: ' + props.theme.global.edgeSize.small + ';\n    ') + '\n  ';
});

export default StyledAnchor.extend(_templateObject, function (props) {
  return props.theme.anchor.extend;
});