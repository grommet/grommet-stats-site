'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (DropButton) {
  var DocumentedDropButton = (0, _reactDesc.describe)(DropButton).availableAt((0, _utils.getAvailableAtBadge)('DropButton')).description('A control that when clicked will render its children in a drop layer.\nWhen opened, the drop will control the focus so that the contents behind it are not focusable.\n      ').usage('import { DropButton } from \'grommet\';\n<DropButton control={element}>{dropContents...}</DropButton>');

  DocumentedDropButton.propTypes = {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    control: _reactDesc.PropTypes.element.description('React node to open/close the drop content.').isRequired,
    onClose: _reactDesc.PropTypes.func.description('Callback for when the drop is closed'),
    open: _reactDesc.PropTypes.bool.description('Whether the drop should be open or not.')
  };

  return DocumentedDropButton;
};