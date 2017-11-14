'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (TextInput) {
  var DocumentedTextInput = (0, _reactDesc.describe)(TextInput).availableAt((0, _utils.getAvailableAtBadge)('TextInput')).description('A text input field with optional suggestions.').usage('import { TextInput } from \'grommet\';\n<TextInput id=\'item\' name=\'item\' />');

  DocumentedTextInput.propTypes = {
    defaultValue: _reactDesc.PropTypes.string.description('What text to start with in the input.'),
    id: _reactDesc.PropTypes.string.description('The id attribute of the input.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain text input should receive a focus outline.'),
    messages: _reactDesc.PropTypes.shape({
      enterSelect: _reactDesc.PropTypes.string,
      suggestionsCount: _reactDesc.PropTypes.string,
      suggestionsExist: _reactDesc.PropTypes.string,
      suggestionIsOpen: _reactDesc.PropTypes.string
    }).description('Custom messages for TextInput. Used for accessibility by screen readers.').defaultValue({
      messages: {
        enterSelect: '(Press Enter to Select)',
        suggestionsCount: 'suggestions available',
        suggestionsExist: 'This input has suggestions use arrow keys to navigate',
        suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
      }
    }),
    name: _reactDesc.PropTypes.string.description('The name attribute of the input.'),
    onInput: _reactDesc.PropTypes.func.description('Function that will be called when the user types in the input.'),
    onSelect: _reactDesc.PropTypes.func.description('Function that will be called when the user selects a suggestion.\nThe suggestion contains the object chosen from the supplied suggestions.'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain input with no border or padding.\nOnly use this when the containing context provides sufficient affordance'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the TextInput.'),
    suggestions: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.shape({
      label: _reactDesc.PropTypes.node,
      value: _reactDesc.PropTypes.any
    }), _reactDesc.PropTypes.string])).description('Suggestions to show. It is recommended to avoid showing too many\nsuggestions and instead rely on the user to type more.'),
    value: _reactDesc.PropTypes.string.description('What text to put in the input.')
  };

  return DocumentedTextInput;
};