var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { focusStyle } from '../../utils';

export var StyledRadioButtonContainer = styled.label.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonContainer'
})(['display:flex;flex-direction:row;align-items:center;cursor:pointer;user-select:none;> div:first-child{', '}:hover input:not([disabled]) + div{border-color:', ';}'], function (props) {
  return 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.global.colors.black;
});

export var StyledRadioButtonInput = styled.input.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonInput'
})(['opacity:0;width:0;height:0;margin:0;:focus + div,:focus + span{', '}:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background-color:', ';}'], focusStyle, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.radioButton.check.color;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.radioButton.check.color;
});

export var StyledRadioButtonButton = styled.div.withConfig({
  displayName: 'StyledRadioButton__StyledRadioButtonButton'
})(['position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background-color:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';fill:', ';}'], function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.border.width;
}, function (props) {
  return props.theme.radioButton.border.color[props.grommet.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.radioButton.border.radius;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.theme.radioButton.size;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.radioButton.check.color;
});

var StyledRadioButton = styled.div.withConfig({
  displayName: 'StyledRadioButton'
})(['']);

export default StyledRadioButton.extend(_templateObject, function (props) {
  return props.theme.radioButton && props.theme.radioButton.extend;
});