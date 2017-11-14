'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledRadioButton = require('./StyledRadioButton');

var _StyledRadioButton2 = _interopRequireDefault(_StyledRadioButton);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RadioButton.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        onChange = _props.onChange,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'id', 'label', 'name', 'onChange', 'theme']);

    var grommet = this.context.grommet;


    var normalizedLabel = typeof label === 'string' ? _react2.default.createElement(
      'div',
      null,
      label
    ) : label;

    return _react2.default.createElement(
      _StyledRadioButton.StyledRadioButtonContainer,
      {
        htmlFor: id,
        theme: theme,
        grommet: grommet
      },
      _react2.default.createElement(
        _StyledRadioButton2.default,
        { theme: theme },
        _react2.default.createElement(_StyledRadioButton.StyledRadioButtonInput, _extends({}, rest, {
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
        _react2.default.createElement(
          _StyledRadioButton.StyledRadioButtonButton,
          { theme: theme, grommet: grommet },
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet' },
            _react2.default.createElement('circle', { cx: 12, cy: 12, r: 6 })
          )
        )
      ),
      normalizedLabel
    );
  };

  return RadioButton;
}(_react.Component);

RadioButton.contextTypes = {
  grommet: _propTypes2.default.object.isRequired
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(RadioButton);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(RadioButton);