'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};

var fitStyle = (0, _styledComponents.css)(['flex:1 1;overflow:hidden;object-fit:', ';'], function (props) {
  return FIT_MAP[props.fit];
});

var StyledImage = _styledComponents2.default.img.withConfig({
  displayName: 'StyledImage'
})(['', ''], function (props) {
  return props.fit && fitStyle;
});

exports.default = StyledImage.extend(_templateObject, function (props) {
  return props.theme.image && props.theme.image.extend;
});