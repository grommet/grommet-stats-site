var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};

var fitStyle = css(['flex:1 1;overflow:hidden;object-fit:', ';'], function (props) {
  return FIT_MAP[props.fit];
});

var StyledImage = styled.img.withConfig({
  displayName: 'StyledImage'
})(['', ''], function (props) {
  return props.fit && fitStyle;
});

export default StyledImage.extend(_templateObject, function (props) {
  return props.theme.image && props.theme.image.extend;
});