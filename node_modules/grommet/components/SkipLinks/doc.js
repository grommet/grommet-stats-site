'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var _SkipLink = require('./SkipLink');

var _SkipLink2 = _interopRequireDefault(_SkipLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (SkipLinks) {
  var DocumentedSkipLinks = (0, _reactDesc.describe)(SkipLinks).availableAt((0, _utils.getAvailableAtBadge)('SkipLinks')).description('Describe a list of elements to skip to.').usage('import { SkipLinks } from \'grommet\';\n<SkipLinks elements={[\'main\', \'footer\']} />');

  DocumentedSkipLinks.propTypes = {
    children: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.instanceOf(_SkipLink2.default)).description('SkipLink array').isRequired,
    messages: _reactDesc.PropTypes.shape({
      skipTo: _reactDesc.PropTypes.string
    }).description('Custom messages for SkipLinks. Used for accessibility by screen readers.')
  };

  return DocumentedSkipLinks;
};