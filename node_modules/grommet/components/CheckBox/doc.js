'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (CheckBox) {
  var DocumentedCheckBox = (0, _reactDesc.describe)(CheckBox).availableAt((0, _utils.getAvailableAtBadge)('CheckBox')).description('A checkbox toggle control.').usage('import { CheckBox } from \'grommet\';\n<CheckBox />');

  DocumentedCheckBox.propTypes = {
    checked: _reactDesc.PropTypes.bool.description('Same as React <input checked={} />'),
    defaultChecked: _reactDesc.PropTypes.bool.description('Same as React <input defaultChecked={} />'),
    disabled: _reactDesc.PropTypes.bool.description('Same as React <input disabled={} />. Also adds a hidden input element\n      with the same name so form submissions work.'),
    id: _reactDesc.PropTypes.string.description('The DOM id attribute value to use for the underlying <input/> element.'),
    label: _reactDesc.PropTypes.node.description('Label text to place next to the control.'),
    name: _reactDesc.PropTypes.string.description('The DOM name attribute value to use for the underlying <input/> element.'),
    onChange: _reactDesc.PropTypes.func.description('Same as React <input onChange={} />'),
    reverse: _reactDesc.PropTypes.bool.description('Whether to show the label in front of the checkbox.'),
    toggle: _reactDesc.PropTypes.bool.description('Whether to visualize it as a toggle switch.')
  };

  return DocumentedCheckBox;
};