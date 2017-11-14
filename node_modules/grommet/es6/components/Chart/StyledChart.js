var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledChart = styled.svg.withConfig({
  displayName: 'StyledChart'
})(['max-width:100%;']);

export default StyledChart.extend(_templateObject, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});