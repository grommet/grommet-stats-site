'use strict';

exports.__esModule = true;
exports.StyledContainer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var hiddenPositionStyle = (0, _styledComponents.css)(['left:-100%;right:100%;z-index:-1;position:fixed;']);

var StyledLayer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledLayer'
})(['', ' position:relative;z-index:10;height:100vh;overflow:auto;background-color:', ';', ''], _utils.baseStyle, function (props) {
  return props.plain ? 'transparent' : props.theme.layer.overlayBackgroundColor;
}, function (props) {
  return props.position === 'hidden' ? hiddenPositionStyle : (0, _utils.lapAndUp)('\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  ');
});

var leftPositionStyle = '\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n\n  animation: slide-left 0.2s ease-in-out forwards;\n  \n  @keyframes slide-left {\n    0% {\n      left: -100%;\n    }\n\n    100% {\n      left: 0px;\n    }\n  }\n';

var rightPositionStyle = '\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n\n  animation: slide-right 0.2s ease-in-out forwards;\n  \n  @keyframes slide-right {\n    0% {\n      right: -200px;\n    }\n\n    100% {\n      right: 0px;\n    }\n  }\n';

var topPositionStyle = '\n  left: 50%;\n  transform: translateX(-50%);\n\n  animation: slide-down 0.2s ease-in-out forwards;\n  \n  @keyframes slide-down {\n    0% {\n      top: -100vh;\n    }\n  \n    100% {\n      top: 0px;\n    }\n  }\n';

var bottomPositionStyle = '\n  bottom: 0px;\n  right: 50%;\n  transform: translateX(50%);\n\n  animation: slide-up 0.2s ease-in-out forwards;\n  \n  @keyframes slide-up {\n    0% {\n      margin-bottom: -200px;\n    }\n  \n    100% {\n      margin-bottom: 0px;\n    }\n  }\n';

var centerPositionStyle = (0, _styledComponents.css)(['bottom:50%;right:50%;animation:grow-box 0.1s forwards;@keyframes grow-box{0%{transform:translate(50%,50%) scale(0.8);}100%{transform:translate(50%,50%) scale(1);}}']);

function getPositionStyle(props) {
  var POSITION_MAP = {
    'bottom': bottomPositionStyle,
    'center': centerPositionStyle,
    'left': leftPositionStyle,
    'right': rightPositionStyle,
    'top': topPositionStyle
  };
  return POSITION_MAP[props.position] || '';
}

var StyledContainer = exports.StyledContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledLayer__StyledContainer'
})(['display:flex;flex-direction:column;min-height:', ';outline:none;background-color:', ';', ' ', ''], function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return props.plain ? 'transparent' : props.theme.layer.backgroundColor;
}, (0, _utils.palm)('\n    min-height: 100%;\n    min-width: 100%;\n  '), function (props) {
  return (0, _utils.lapAndUp)('\n    position: absolute;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto;\n    border-radius: ' + (props.plain ? 'none' : props.theme.layer.border.radius) + ';\n\n    ' + getPositionStyle(props) + '\n  ');
});

exports.default = StyledLayer.extend(_templateObject, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});