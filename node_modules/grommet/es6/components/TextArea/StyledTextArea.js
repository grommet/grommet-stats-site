var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, inputStyle } from '../../utils';

var placeholderColor = css(['color:', ';'], function (props) {
  return props.theme.global.colors.placeholder;
});

var plainStyle = css(['border:none;width:100%;-webkit-appearance:none;']);

var StyledTextArea = styled.textarea.withConfig({
  displayName: 'StyledTextArea'
})(['', ' ', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], inputStyle, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor, function (props) {
  return (!props.plain || props.focusIndicator) && focusStyle;
});

export default StyledTextArea.extend(_templateObject, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});