'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Chart) {
  var DocumentedChart = (0, _reactDesc.describe)(Chart).availableAt((0, _utils.getAvailableAtBadge)('Chart')).description('A graphical chart.').usage("import { Chart } from 'grommet';\n<Chart />");

  DocumentedChart.propTypes = {
    bounds: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)).description('The limits for the values, specified as a two dimensional array.\n      If not specified, the bounds will automatically be set to fit\n      the provided values.'),
    color: _reactDesc.PropTypes.string.description('A color identifier to use for the graphic color.').defaultValue('accent-1'),
    round: _reactDesc.PropTypes.bool.description('Whether to round the line ends.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.shape({
      height: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
      width: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full'])
    })]).description('The size of the Chart.').defaultValue({ width: 'medium', height: 'small' }),
    thickness: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).description('The width of the stroke.').defaultValue('medium'),
    type: _reactDesc.PropTypes.oneOf(['bar', 'line', 'area']).description('The visual type of meter.').defaultValue('bar'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      label: _reactDesc.PropTypes.string, // for accessibility of bars
      value: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).isRequired
    })).description('Array of value objects describing the data.\n      \'value\' is a tuple indicating the coordinate of the value or a triple\n      indicating the x coordinate and a range of two y coordinates.\n      \'label\' is a text string describing it.').isRequired
  };

  return DocumentedChart;
};