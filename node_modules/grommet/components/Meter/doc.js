'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Meter) {
  var DocumentedMeter = (0, _reactDesc.describe)(Meter).availableAt((0, _utils.getAvailableAtBadge)('Meter')).description('A graphical meter.').usage('import { Meter } from \'grommet\';\n<Meter />');

  DocumentedMeter.propTypes = {
    background: _reactDesc.PropTypes.string.description('A color identifier to use for the background color. For example:\n      \'light-1\'.'),
    round: _reactDesc.PropTypes.bool.description('Whether to round the line ends'),
    size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']).description('The size of the Meter.').defaultValue('medium'),
    thickness: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('The size of the Meter.').defaultValue('medium'),
    type: _reactDesc.PropTypes.oneOf(['bar', 'circle']).description('The visual type of meter.'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      highlight: _reactDesc.PropTypes.bool,
      label: _reactDesc.PropTypes.string.isRequired, // for accessibility
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func,
      value: _reactDesc.PropTypes.number.isRequired
    })).description('Array of value objects describing the data.\n      \'value\' is the actual numeric value.\n      \'label\' is a text string describing it.\n      \'color\' indicates the color name to use. If not specified a default one\n      will be chosen.\n      \'onClick\' will be called when the user clicks on it.\n      Set \'highlight\' to call attention to it.\n      \'onHover\' will be called with a boolean argument indicating when the\n      user hovers onto or away from it.')
  };

  return DocumentedMeter;
};