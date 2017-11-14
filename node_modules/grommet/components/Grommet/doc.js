'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Grommet) {
  var DocumentedGrommet = (0, _reactDesc.describe)(Grommet).availableAt((0, _utils.getAvailableAtBadge)('Grommet')).description('This is the top level Grommet container.').usage('import { Grommet } from \'grommet\';\n<Grommet>...</Grommet>');

  DocumentedGrommet.propTypes = {
    dir: _reactDesc.PropTypes.oneOf(['rtl', 'ltr']).description('Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'),
    theme: _reactDesc.PropTypes.object.description('Custom styles for Grommet app component.')
  };

  return DocumentedGrommet;
};