'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledCheckBox = require('./StyledCheckBox');

var _StyledCheckBox2 = _interopRequireDefault(_StyledCheckBox);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CheckBox.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        onChange = _props.onChange,
        reverse = _props.reverse,
        theme = _props.theme,
        toggle = _props.toggle,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'id', 'label', 'name', 'onChange', 'reverse', 'theme', 'toggle']);

    var grommet = this.context.grommet;


    var normalizedLabel = typeof label === 'string' ? _react2.default.createElement(
      'div',
      null,
      label
    ) : label;

    var hidden = void 0;
    if (disabled && checked) {
      hidden = _react2.default.createElement('input', { name: name, type: 'hidden', value: 'true' });
    }

    var control = toggle ? _react2.default.createElement(
      _StyledCheckBox.StyledCheckBoxToggle,
      { theme: theme, grommet: grommet },
      _react2.default.createElement(_StyledCheckBox.StyledCheckBoxKnob, { theme: theme, grommet: grommet })
    ) : _react2.default.createElement(
      _StyledCheckBox.StyledCheckBoxBox,
      { theme: theme, grommet: grommet },
      _react2.default.createElement(
        'svg',
        { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet' },
        _react2.default.createElement('path', { fill: 'none', d: 'M6,11.3 L10.3,16 L18,6.2' })
      )
    );

    return _react2.default.createElement(
      _StyledCheckBox.StyledCheckBoxContainer,
      {
        htmlFor: id,
        reverse: reverse,
        theme: theme,
        grommet: grommet
      },
      _react2.default.createElement(
        _StyledCheckBox2.default,
        { theme: theme },
        _react2.default.createElement(_StyledCheckBox.StyledCheckBoxInput, _extends({}, rest, {
          tabIndex: '0',
          id: id,
          name: name,
          type: 'checkbox',
          disabled: disabled,
          checked: checked,
          onChange: onChange,
          theme: theme,
          grommet: grommet
        })),
        control
      ),
      normalizedLabel,
      hidden
    );
  };

  return CheckBox;
}(_react.Component);

CheckBox.contextTypes = {
  grommet: _propTypes2.default.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(CheckBox);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(CheckBox);