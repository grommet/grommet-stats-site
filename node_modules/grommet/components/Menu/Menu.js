'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _grommetIcons = require('grommet-icons');

var _Box = require('../Box');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Drop = require('../Drop');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeItemIndex: -1,
      showDrop: false
    }, _this.buttonRefs = {}, _this.onDropClose = function () {
      _this.setState({
        activeItemIndex: -1,
        showDrop: false
      });
    }, _this.onSelectMenuItem = function (event) {
      var activeItemIndex = _this.state.activeItemIndex;

      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        (0, _reactDom.findDOMNode)(_this.buttonRefs[activeItemIndex]).click();
      }
    }, _this.onNextMenuItem = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          showDrop = _this$state.showDrop,
          activeItemIndex = _this$state.activeItemIndex;

      if (!showDrop) {
        _this.setState({
          showDrop: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = Math.min(activeItemIndex + 1, items.length - 1);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _this.onPreviousMenuItem = function (event) {
      event.preventDefault();
      var _this$state2 = _this.state,
          showDrop = _this$state2.showDrop,
          activeItemIndex = _this$state2.activeItemIndex;

      if (!showDrop) {
        _this.setState({
          showDrop: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Menu.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        background = _props.background,
        dropAlign = _props.dropAlign,
        icon = _props.icon,
        id = _props.id,
        items = _props.items,
        label = _props.label,
        _props$messages = _props.messages,
        messages = _props$messages === undefined ? {} : _props$messages,
        onKeyDown = _props.onKeyDown,
        rest = _objectWithoutProperties(_props, ['background', 'dropAlign', 'icon', 'id', 'items', 'label', 'messages', 'onKeyDown']);

    var _state = this.state,
        activeItemIndex = _state.activeItemIndex,
        showDrop = _state.showDrop;


    var menuIcon = icon || _react2.default.createElement(_grommetIcons.FormDown, null);

    var labelNode = void 0;
    if (label) {
      labelNode = _react2.default.createElement(
        _Box.Box,
        { margin: { right: 'small' } },
        label
      );
    }
    var controlMirror = _react2.default.createElement(
      _Button.Button,
      {
        fill: true,
        a11yTitle: messages.closeMenu || 'Close Menu',
        onClick: this.onDropClose
      },
      _react2.default.createElement(
        _Box.Box,
        {
          pad: 'small',
          direction: 'row',
          justify: dropAlign.right ? 'end' : 'start'
        },
        labelNode,
        menuIcon
      )
    );

    var drop = void 0;
    if (showDrop) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          id: id ? 'menu-drop__' + id : undefined,
          align: dropAlign,
          ref: function ref(_ref2) {
            _this2.dropRef = _ref2;
          },
          control: this.componentRef,
          onClose: this.onDropClose
        },
        _react2.default.createElement(
          _Box.Box,
          { background: background },
          dropAlign.top === 'top' ? controlMirror : undefined,
          _react2.default.createElement(
            _Box.Box,
            null,
            items.map(function (item, index) {
              return _react2.default.createElement(
                _Button.Button,
                {
                  ref: function ref(_ref) {
                    _this2.buttonRefs[index] = _ref;
                  },
                  active: activeItemIndex === index,
                  key: 'menuItem_' + index,
                  hoverIndicator: 'background',
                  onClick: item.onClick ? function () {
                    item.onClick.apply(item, arguments);
                    if (item.close !== false) {
                      _this2.onDropClose();
                    }
                  } : undefined
                },
                _react2.default.createElement(
                  _Box.Box,
                  { align: 'start', pad: 'small', direction: 'row' },
                  item.icon,
                  item.label
                )
              );
            })
          ),
          dropAlign.bottom === 'bottom' ? controlMirror : undefined
        )
      );
    }

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      {
        onEnter: this.onSelectMenuItem,
        onSpace: this.onSelectMenuItem,
        onDown: this.onNextMenuItem,
        onUp: this.onPreviousMenuItem,
        onEsc: this.onDropClose,
        onTab: this.onDropClose,
        onKeyDown: onKeyDown
      },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button.Button,
          _extends({
            id: id,
            ref: function ref(_ref3) {
              _this2.componentRef = _ref3;
            },
            a11yTitle: messages.openMenu || 'Open Menu',
            onClick: function onClick() {
              return _this2.setState({ activeItemIndex: -1, showDrop: !_this2.state.showDrop });
            }
          }, rest),
          _react2.default.createElement(
            _Box.Box,
            { align: 'start', direction: 'row', pad: 'small' },
            labelNode,
            menuIcon
          )
        ),
        drop
      )
    );
  };

  return Menu;
}(_react.Component);

Menu.defaultProps = {
  dropAlign: { top: 'top', left: 'left' }
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Menu);
}

exports.default = Menu;