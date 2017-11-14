var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { Box } from '../Box';
import { Button } from '../Button';
import { Keyboard } from '../Keyboard';
import { Drop } from '../Drop';
import { withTheme } from '../hocs';

import StyledTextInput, { StyledTextInputContainer, StyledSuggestions } from './StyledTextInput';
import doc from './doc';

function renderLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeSuggestionIndex: -1,
      announceChange: false,
      showDrop: false
    }, _this.announce = function (message, mode) {
      var suggestions = _this.props.suggestions;
      var grommet = _this.context.grommet;

      var announce = grommet && grommet.announce;
      if (announce && suggestions && suggestions.length > 0) {
        announce(message, mode);
      }
    }, _this.announceSuggestionsCount = function () {
      var _this$props = _this.props,
          suggestions = _this$props.suggestions,
          suggestionsCount = _this$props.messages.suggestionsCount;

      _this.announce(suggestions.length + ' ' + suggestionsCount);
    }, _this.announceSuggestionsExist = function () {
      var suggestionsExist = _this.props.messages.suggestionsExist;

      _this.announce(suggestionsExist);
    }, _this.announceSuggestionsIsOpen = function () {
      var suggestionIsOpen = _this.props.messages.suggestionIsOpen;

      _this.announce(suggestionIsOpen);
    }, _this.resetSuggestions = function () {
      var suggestions = _this.props.suggestions;


      if (suggestions && suggestions.length) {
        _this.setState({
          activeSuggestionIndex: -1,
          announceChange: true,
          showDrop: true,
          selectedSuggestionIndex: -1
        }, _this.announceSuggestionsCount);
      }
    }, _this.getSelectedSuggestionIndex = function () {
      var _this$props2 = _this.props,
          suggestions = _this$props2.suggestions,
          value = _this$props2.value;

      var suggestionValues = suggestions.map(function (suggestion) {
        if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
          return suggestion.value;
        }
        return suggestion;
      });
      return suggestionValues.indexOf(value);
    }, _this.onShowSuggestions = function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      }, _this.announceSuggestionsIsOpen);
    }, _this.onNextSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
          _this.setState({ activeSuggestionIndex: index }, function () {
            return _this.announceSuggestion(index);
          });
        }
      }
    }, _this.onPreviousSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);
        _this.setState({ activeSuggestionIndex: index }, function () {
          return _this.announceSuggestion(index);
        });
      }
    }, _this.onClickSuggestion = function (suggestion) {
      var onSelect = _this.props.onSelect;

      _this.setState({ value: suggestion, showDrop: false });
      if (onSelect) {
        onSelect({
          target: _this.componentRef, suggestion: suggestion
        });
      }
    }, _this.onSuggestionSelect = function (event) {
      var _this$props3 = _this.props,
          onSelect = _this$props3.onSelect,
          suggestions = _this$props3.suggestions;
      var activeSuggestionIndex = _this.state.activeSuggestionIndex;

      _this.setState({ showDrop: false });
      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        var suggestion = suggestions[activeSuggestionIndex];
        _this.setState({ value: suggestion });
        if (onSelect) {
          onSelect({
            target: _this.componentRef, suggestion: suggestion
          });
        }
      }
    }, _this.onDropClose = function () {
      _this.setState({ showDrop: false });
    }, _this.renderSuggestions = function () {
      var _this$props4 = _this.props,
          suggestions = _this$props4.suggestions,
          theme = _this$props4.theme;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state3.selectedSuggestionIndex;

      var items = void 0;
      if (suggestions && suggestions.length > 0) {
        items = suggestions.map(function (suggestion, index) {
          return React.createElement(
            'li',
            { key: renderLabel(suggestion) },
            React.createElement(
              Button,
              {
                active: activeSuggestionIndex === index || selectedSuggestionIndex === index,
                fill: true,
                hoverIndicator: 'background',
                onClick: function onClick() {
                  return _this.onClickSuggestion(suggestion);
                }
              },
              React.createElement(
                Box,
                { align: 'start', pad: 'small' },
                renderLabel(suggestion)
              )
            )
          );
        });
      }

      return React.createElement(
        StyledSuggestions,
        { theme: theme },
        items
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TextInput.prototype.announceSuggestion = function announceSuggestion(index) {
    var _props = this.props,
        suggestions = _props.suggestions,
        enterSelect = _props.messages.enterSelect;

    if (suggestions && suggestions.length > 0) {
      var labelMessage = renderLabel(suggestions[index]);
      this.announce(labelMessage + ' ' + enterSelect);
    }
  };

  TextInput.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        defaultValue = _props2.defaultValue,
        plain = _props2.plain,
        value = _props2.value,
        _onFocus = _props2.onFocus,
        _onInput = _props2.onInput,
        onKeyDown = _props2.onKeyDown,
        rest = _objectWithoutProperties(_props2, ['defaultValue', 'plain', 'value', 'onFocus', 'onInput', 'onKeyDown']);

    delete rest.onInput; // se we can manage in onInputChange()
    var showDrop = this.state.showDrop;
    // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop = void 0;
    if (showDrop) {
      drop = React.createElement(
        Drop,
        {
          align: { top: 'bottom', left: 'left' },
          responsive: false,
          control: this.componentRef,
          onClose: function onClose() {
            return _this2.setState({ showDrop: false });
          }
        },
        this.renderSuggestions()
      );
    }
    return React.createElement(
      StyledTextInputContainer,
      { plain: plain },
      React.createElement(
        Keyboard,
        {
          onEnter: this.onSuggestionSelect,
          onEsc: this.onDropClose,
          onTab: this.onDropClose,
          onUp: this.onPreviousSuggestion,
          onDown: this.onNextSuggestion,
          onKeyDown: onKeyDown
        },
        React.createElement(StyledTextInput, _extends({
          ref: function ref(_ref) {
            _this2.componentRef = _ref;
          },
          autoComplete: 'off',
          plain: plain
        }, rest, {
          defaultValue: renderLabel(defaultValue),
          value: renderLabel(value),
          onFocus: function onFocus(event) {
            _this2.announceSuggestionsExist();
            if (_onFocus) {
              _onFocus(event);
            }
          },
          onInput: function onInput(event) {
            _this2.resetSuggestions();
            if (_onInput) {
              _onInput(event);
            }
          }
        }))
      ),
      drop
    );
  };

  return TextInput;
}(Component);

TextInput.contextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object
};
TextInput.defaultProps = {
  messages: {
    enterSelect: '(Press Enter to Select)',
    suggestionsCount: 'suggestions available',
    suggestionsExist: 'This input has suggestions use arrow keys to navigate',
    suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
  }
};


if (process.env.NODE_ENV !== 'production') {
  doc(TextInput);
}

export default compose(withTheme)(TextInput);