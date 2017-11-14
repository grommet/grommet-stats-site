'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Layer) {
  var DocumentedLayer = (0, _reactDesc.describe)(Layer).availableAt((0, _utils.getAvailableAtBadge)('Layer')).description('A modal overlay. It is the caller\'s responsibility to provide a control for\n      the user to close the layer.').usage('import { Layer } from \'grommet\';\n<Layer />');

  DocumentedLayer.propTypes = {
    position: _reactDesc.PropTypes.oneOf(['bottom', 'center', 'hidden', 'left', 'right', 'top']).description('Position of the layer content.').defaultValue('center'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the Layer.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Layer with no background color or border.')
  };

  return DocumentedLayer;
};