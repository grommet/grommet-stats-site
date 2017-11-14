var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledMeter = styled.svg.withConfig({
  displayName: 'StyledMeter'
})(['max-width:100%;path{transition:all 0.3s;}']);

export default StyledMeter.extend(_templateObject, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});