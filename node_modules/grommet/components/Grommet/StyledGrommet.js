'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledGrommet = _styledComponents2.default.div.withConfig({
  displayName: 'StyledGrommet'
})(['', ' ', ' ', ''], _utils.baseStyle, (0, _utils.lapAndUp)('\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: visible;\n  '), function (props) {
  return props.theme.global.font.face;
});

exports.default = StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});