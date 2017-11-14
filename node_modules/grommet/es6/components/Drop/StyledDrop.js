var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { backgroundStyle, baseStyle } from '../../utils';

function getTransformOriginStyle(align) {
  var vertical = 'top';
  if (align.bottom) {
    vertical = 'bottom';
  }
  var horizontal = 'left';
  if (align.right) {
    horizontal = 'right';
  }
  return vertical + ' ' + horizontal;
}
var StyledDrop = styled.div.withConfig({
  displayName: 'StyledDrop'
})(['', ' border-radius:', ';box-shadow:', ';position:fixed;z-index:20;overflow:auto;outline:none;', ' opacity:0;transform-origin:', ';animation:grow-box 0.1s forwards;animation-delay:0.01s;@keyframes grow-box{0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}}'], baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.theme.global.drop.shadow;
}, function (props) {
  return backgroundStyle(props.theme.global.drop.backgroundColor, props.theme);
}, function (props) {
  return getTransformOriginStyle(props.align);
});

export default StyledDrop.extend(_templateObject, function (props) {
  return props.theme.drop && props.theme.drop.extend;
});