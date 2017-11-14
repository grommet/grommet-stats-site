var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { baseStyle, lapAndUp } from '../../utils';

var StyledGrommet = styled.div.withConfig({
  displayName: 'StyledGrommet'
})(['', ' ', ' ', ''], baseStyle, lapAndUp('\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: visible;\n  '), function (props) {
  return props.theme.global.font.face;
});

export default StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});