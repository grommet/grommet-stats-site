'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
var StyledDrop = _styledComponents2.default.div.withConfig({
  displayName: 'StyledDrop'
})(['', ' border-radius:', ';box-shadow:', ';position:fixed;z-index:20;overflow:auto;outline:none;', ' opacity:0;transform-origin:', ';animation:grow-box 0.1s forwards;animation-delay:0.01s;@keyframes grow-box{0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}}'], _utils.baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.theme.global.drop.shadow;
}, function (props) {
  return (0, _utils.backgroundStyle)(props.theme.global.drop.backgroundColor, props.theme);
}, function (props) {
  return getTransformOriginStyle(props.align);
});

exports.default = StyledDrop.extend(_templateObject, function (props) {
  return props.theme.drop && props.theme.drop.extend;
});