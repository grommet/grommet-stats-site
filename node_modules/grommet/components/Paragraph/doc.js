'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Paragraph) {
  var DocumentedParagraph = (0, _reactDesc.describe)(Paragraph).availableAt((0, _utils.getAvailableAtBadge)('Paragraph')).description('A paragraph of text.').usage('import { Paragraph } from \'grommet\';\n<Paragraph />');

  DocumentedParagraph.propTypes = {
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']),
      top: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('The amount of margin above and/or below the paragraph. An object can be\nspecified to distinguish top margin and bottom margin.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.')
  };

  return DocumentedParagraph;
};