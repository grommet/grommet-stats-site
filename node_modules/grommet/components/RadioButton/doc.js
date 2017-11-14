'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (RadioButton) {
  var DocumentedRadioButton = (0, _reactDesc.describe)(RadioButton).availableAt((0, _utils.getAvailableAtBadge)('RadioButton')).description('A radio button control.').usage('import { RadioButton } from \'grommet\';\n<RadioButton />');

  DocumentedRadioButton.propTypes = {
    checked: _reactDesc.PropTypes.bool.description('Same as React <input checked={} />'),
    defaultChecked: _reactDesc.PropTypes.bool.description('Same as React <input defaultChecked={} />'),
    disabled: _reactDesc.PropTypes.bool.description('Same as React <input disabled={} />. Also adds a hidden input element\nwith the same name so form submissions work.'),
    id: _reactDesc.PropTypes.string.description('The DOM id attribute value to use for the underlying <input/> element.'),
    label: _reactDesc.PropTypes.node.description('Label text to place next to the control.'),
    name: _reactDesc.PropTypes.string.description('The DOM name attribute value to use for the underlying <input/> element.'),
    onChange: _reactDesc.PropTypes.func.description('Same as React <input onChange={} />')
  };

  return DocumentedRadioButton;
};