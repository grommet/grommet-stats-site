'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _grommetIcons = require('grommet-icons');

var _utils = require('../../utils');

var _Box = require('../Box');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Text = require('../Text');

var _TextInput = require('../TextInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectContainer = function (_Component) {
  _inherits(SelectContainer, _Component);

  function SelectContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedOptionIndex: -1,
      search: ''
    }, _this.optionsRef = {}, _this.onInput = function (event) {
      _this.setState({ search: event.target.value, selectedOptionIndex: -1 }, function () {
        return _this.onSearch(_this.state.search);
      });
    }, _this.onSearch = (0, _utils.debounce)(function (search) {
      return _this.props.onSearch(search);
    }, 150), _this.selectOption = function (option) {
      var onChange = _this.props.onChange;


      if (onChange) {
        onChange({ target: (0, _reactDom.findDOMNode)(_this.inputRef), option: option });
      }
    }, _this.onNextOption = function (event) {
      var options = _this.props.options;
      var selectedOptionIndex = _this.state.selectedOptionIndex;

      event.preventDefault();
      var index = Math.min(selectedOptionIndex + 1, options.length - 1);
      _this.setState({ selectedOptionIndex: index });
    }, _this.onPreviousOption = function (event) {
      var selectedOptionIndex = _this.state.selectedOptionIndex;

      event.preventDefault();
      var index = Math.max(selectedOptionIndex - 1, 0);
      _this.setState({ selectedOptionIndex: index });
    }, _this.onSelectOption = function (event) {
      var options = _this.props.options;
      var selectedOptionIndex = _this.state.selectedOptionIndex;

      if (selectedOptionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        _this.selectOption(options[selectedOptionIndex]);
      }
    }, _this.selectControl = function () {
      var _this$props = _this.props,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          rest = _objectWithoutProperties(_this$props, ['placeholder', 'value']);

      delete rest.children;
      var content = _react2.default.isValidElement(value) ? value : _react2.default.createElement(_TextInput.TextInput, _extends({
        ref: function ref(_ref) {
          _this.inputRef = _ref;
        }
      }, rest, {
        type: 'text',
        placeholder: placeholder,
        plain: true,
        readOnly: true,
        value: value
      }));
      return _react2.default.createElement(
        _Box.Box,
        { align: 'center', direction: 'row', border: 'all' },
        content,
        _react2.default.createElement(
          _Box.Box,
          { margin: { horizontal: 'small' } },
          _react2.default.createElement(_grommetIcons.Down, null)
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectContainer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var onSearch = this.props.onSearch;
    // timeout need to send the operation through event loop and allow time to the portal
    // to be available

    setTimeout(function () {
      if (onSearch) {
        (0, _reactDom.findDOMNode)(_this2.searchRef).querySelector('input').focus();
      } else {
        (0, _reactDom.findDOMNode)(_this2.selectRef).focus();
      }
    }, 0);
  };

  SelectContainer.prototype.componentDidUpdate = function componentDidUpdate() {
    var selectedOptionIndex = this.state.selectedOptionIndex;

    var buttonNode = (0, _reactDom.findDOMNode)(this.optionsRef[selectedOptionIndex]);
    if (selectedOptionIndex >= 0 && buttonNode) {
      buttonNode.scrollIntoView();
    }
  };

  SelectContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        activeOptionIndex = _props.activeOptionIndex,
        background = _props.background,
        children = _props.children,
        dropSize = _props.dropSize,
        name = _props.name,
        onKeyDown = _props.onKeyDown,
        onSearch = _props.onSearch,
        options = _props.options,
        searchPlaceholder = _props.searchPlaceholder,
        value = _props.value;
    var _state = this.state,
        selectedOptionIndex = _state.selectedOptionIndex,
        search = _state.search;

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      {
        onEnter: this.onSelectOption,
        onUp: this.onPreviousOption,
        onDown: this.onNextOption,
        onKeyDown: onKeyDown
      },
      _react2.default.createElement(
        _Box.Box,
        { background: background },
        onSearch ? _react2.default.createElement(
          _Box.Box,
          { pad: 'xsmall' },
          _react2.default.createElement(_TextInput.TextInput, {
            focusIndicator: true,
            plain: true,
            size: 'small',
            ref: function ref(_ref2) {
              _this3.searchRef = _ref2;
            },
            type: 'search',
            value: search,
            placeholder: searchPlaceholder,
            onInput: this.onInput
          })
        ) : undefined,
        _react2.default.createElement(
          _Box.Box,
          { basis: dropSize, overflow: 'auto' },
          _react2.default.createElement(
            _Box.Box,
            { flex: false, role: 'menubar', tabIndex: '-1', ref: function ref(_ref4) {
                _this3.selectRef = _ref4;
              } },
            options.map(function (option, index) {
              return _react2.default.createElement(
                _Button.Button,
                {
                  role: 'menuitem',
                  ref: function ref(_ref3) {
                    _this3.optionsRef[index] = _ref3;
                  },
                  active: activeOptionIndex === index || selectedOptionIndex === index || option === value,
                  key: 'option_' + (name || '') + '_' + index,
                  onClick: function onClick() {
                    return _this3.selectOption(option);
                  },
                  hoverIndicator: 'background'
                },
                children ? children(option, index, options) : _react2.default.createElement(
                  _Box.Box,
                  { align: 'start', pad: 'small' },
                  _react2.default.createElement(
                    _Text.Text,
                    { margin: 'none' },
                    option.toString()
                  )
                )
              );
            })
          )
        )
      )
    );
  };

  return SelectContainer;
}(_react.Component);

SelectContainer.defaultProps = {
  value: ''
};
exports.default = SelectContainer;