var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledStack = styled.div.withConfig({
  displayName: 'StyledStack'
})(['position:relative;']);

export default StyledStack.extend(_templateObject, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});