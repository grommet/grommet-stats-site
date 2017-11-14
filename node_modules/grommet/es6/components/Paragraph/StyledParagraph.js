var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    if (props.margin === 'none') {
      return '\n        margin-top: 0;\n        margin-bottom: 0;\n      ';
    }
    var margin = props.theme.global.edgeSize[props.margin];
    return '\n      margin-top: ' + margin + ';\n      margin-bottom: ' + margin + ';\n    ';
  }
  if (props.margin.top) {
    return 'margin-top: ' + props.theme.global.edgeSize[props.margin.top] + ';';
  }
  if (props.margin.bottom) {
    return 'margin-bottom: ' + props.theme.global.edgeSize[props.margin.bottom] + ';';
  }
  return '';
};

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return css(['font-size:', ';line-height:', ';max-width:', ';'], data.size, data.height, data.maxWidth);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = css(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var StyledParagraph = styled.p.withConfig({
  displayName: 'StyledParagraph'
})(['', ' ', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
});

export default StyledParagraph.extend(_templateObject, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});