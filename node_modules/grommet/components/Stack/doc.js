'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Stack) {
  var DocumentedStack = (0, _reactDesc.describe)(Stack).availableAt((0, _utils.getAvailableAtBadge)('Stack')).description('Stacks components on top of the first child component.').usage('import { Stack } from \'grommet\';\n<Stack />');

  DocumentedStack.propTypes = {
    anchor: _reactDesc.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description('Where to anchor children from. If not specified, children fill the\nfirst child\'s area.')
  };

  return DocumentedStack;
};