import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

export default (function (Menu) {
  var DocumentedMenu = describe(Menu).availableAt(getAvailableAtBadge('Menu')).description('Presents a list of choices within a drop down via a control that\n      opens it.').usage('import { Menu } from \'grommet\';\n<Menu />');

  DocumentedMenu.propTypes = {
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      color: PropTypes.string,
      opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool])
    })]).description('Background color when drop is active'),
    dropAlign: PropTypes.shape({
      top: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      bottom: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      left: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
      right: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
    }).description('Where to place the drop down. The keys correspond to a side of the drop down.\nThe values correspond to a side of the control. For instance,\n{left: \'left\', top: \'bottom\'} would align the left edges and the top of\nthe drop down to the bottom of the control. At most one of left or right and\none of top or bottom should be specified.'),
    icon: PropTypes.node.description('Indicates the icon shown as a control to open it.'),
    items: PropTypes.arrayOf(PropTypes.object).description('Menu items to be placed inside the drop down.\nThe object values can be any Button prop, for example: label and onClick.').isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description('Indicates the label shown as a control to open it.'),
    messages: PropTypes.shape({
      closeMenu: PropTypes.string,
      openMenu: PropTypes.string
    }).description('Custom messages for Menu. Used for accessibility by screen readers.')
  };

  return DocumentedMenu;
});