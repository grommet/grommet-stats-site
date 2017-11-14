'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Responsive) {
  var DocumentedResponsive = (0, _reactDesc.describe)(Responsive).description('A react component that handles responsive breakpoints.').usage('import { Responsive } from \'grommet\';\n<Responsive onChange={() => {}} />');

  DocumentedResponsive.propTypes = {
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the browser window crosses a responsive\nbreakpoint. It will be passed the current media size name, either\n\'narrow\' or \'wide\'')
  };

  return DocumentedResponsive;
};