'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (RangeInput) {
  var DocumentedRangeInput = (0, _reactDesc.describe)(RangeInput).availableAt((0, _utils.getAvailableAtBadge)('RangeInput')).description('A range input with custom styles.').usage('import { RangeInput } from \'grommet\';\n<RangeInput />');

  DocumentedRangeInput.propTypes = {
    id: _reactDesc.PropTypes.string.description('The id attribute of the range input.'),
    min: _reactDesc.PropTypes.string.description('The min attribute of the range input.'),
    max: _reactDesc.PropTypes.string.description('The max attribute of the range input.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the range input.'),
    value: _reactDesc.PropTypes.string.description('The value attribute of the range input.')
  };

  return DocumentedRangeInput;
};