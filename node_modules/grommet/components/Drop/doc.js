'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Drop) {
  var DocumentedDrop = (0, _reactDesc.describe)(Drop).availableAt((0, _utils.getAvailableAtBadge)('Drop')).description('A drop container that opens next to a target.').usage('import { Drop } from \'grommet\';\n<Drop target={element}>...</Drop>');

  DocumentedDrop.propTypes = {
    align: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop with respect to the target element.').defaultValue({
      defaultProp: {
        top: 'top',
        left: 'left'
      }
    }),
    control: _reactDesc.PropTypes.object.description('Target container where the drop will be aligned.').isRequired,
    dir: _reactDesc.PropTypes.oneOf(['rtl', 'ltr']).description('Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'),
    restrictFocus: _reactDesc.PropTypes.bool.description('Whether the drop should control focus.'),
    onClose: _reactDesc.PropTypes.func.description('Function that will be invoked when the user clicks outside the drop area.'),
    responsive: _reactDesc.PropTypes.bool.description('Whether to dynamically re-place when resized.').defaultValue({
      defaultProp: true
    }),
    theme: _reactDesc.PropTypes.object.description('Custom styles for Drop component.')
  };

  return DocumentedDrop;
};