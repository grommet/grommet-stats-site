'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    if (props.margin === 'none') {
      return '\n        margin-top: 0;\n        margin-bottom: 0;\n      ';
    }
    var margin = props.theme.global.edgeSize[props.margin];
    return '\n      margin-top: ' + margin + ';\n      margin-bottom: ' + margin + ';\n    ';
  }
  var result = '';
  if (props.margin.top) {
    if (props.margin.top === 'none') {
      result += 'margin-top: 0;';
    } else {
      result += 'margin-top: ' + props.theme.global.edgeSize[props.margin.top] + ';';
    }
  }
  if (props.margin.bottom) {
    if (props.margin.bottom === 'none') {
      result += 'margin-bottom: 0;';
    } else {
      result += 'margin-bottom: ' + props.theme.global.edgeSize[props.margin.bottom] + ';';
    }
  }
  return result;
};

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.heading.level[props.level][size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';max-width:', ';font-weight:', ';'], data.size, data.height, data.maxWidth, props.theme.heading.weight);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var truncateStyle = '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n';

var StyledHeading = _styledComponents2.default.h1.withConfig({
  displayName: 'StyledHeading'
})(['', ' ', ' ', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
});

exports.default = StyledHeading.extend(_templateObject, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});