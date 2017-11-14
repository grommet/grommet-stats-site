'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _FocusedContainer = require('../FocusedContainer');

var _FocusedContainer2 = _interopRequireDefault(_FocusedContainer);

var _utils = require('../../utils');

var _Keyboard = require('../Keyboard');

var _StyledDrop = require('./StyledDrop');

var _StyledDrop2 = _interopRequireDefault(_StyledDrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropContainer = function (_Component) {
  _inherits(DropContainer, _Component);

  function DropContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.addScrollListener = function () {
      var control = _this.props.control;

      _this.scrollParents = (0, _utils.findScrollParents)(control);
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', _this.place);
      });
    }, _this.removeScrollListener = function () {
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', _this.place);
      });
    }, _this.onRemoveDrop = function (event) {
      var onClose = _this.props.onClose;

      if (!(0, _reactDom.findDOMNode)(_this.dropRef).contains(event.target)) {
        if (onClose) {
          onClose();
        }
      }
    }, _this.onResize = function () {
      _this.removeScrollListener();
      _this.addScrollListener();
      _this.place();
    }, _this.place = function () {
      var _this$props = _this.props,
          align = _this$props.align,
          responsive = _this$props.responsive;

      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;

      var control = (0, _reactDom.findDOMNode)(_this.props.control);
      var container = (0, _reactDom.findDOMNode)(_this.dropRef);
      if (container && control) {
        // clear prior styling
        container.style.left = '';
        container.style.width = '';
        container.style.top = '';
        container.style.maxHeight = '';

        // get bounds
        var controlRect = control.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();

        // determine width
        var width = Math.min(Math.max(controlRect.width, containerRect.width), windowWidth);

        // set left position
        var left = void 0;
        if (align.left) {
          if (align.left === 'left') {
            left = controlRect.left;
          } else if (align.left === 'right') {
            left = controlRect.left - width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = controlRect.left - width;
          } else if (align.right === 'right') {
            left = controlRect.left + controlRect.width - width;
          }
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        }

        // set top position
        var top = void 0;
        var maxHeight = void 0;
        if (align.top) {
          if (align.top === 'top') {
            top = controlRect.top;
            maxHeight = Math.min(windowHeight - controlRect.top, windowHeight);
          } else {
            top = controlRect.bottom;
            maxHeight = Math.min(windowHeight - controlRect.bottom, windowHeight - controlRect.height);
          }
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            top = controlRect.bottom - containerRect.height;
            maxHeight = Math.max(controlRect.bottom, 0);
          } else {
            top = controlRect.top - containerRect.height;
            maxHeight = Math.max(controlRect.top, 0);
          }
        }

        // if we can't fit it all, see if there's more room the other direction
        if (containerRect.height > maxHeight) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            if (align.top === 'bottom') {
              if (responsive) {
                top = Math.max(controlRect.top - containerRect.height, 0);
              }
              maxHeight = controlRect.top;
            } else {
              if (responsive) {
                top = Math.max(controlRect.bottom - containerRect.height, 0);
              }
              maxHeight = controlRect.bottom;
            }
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            if (align.bottom === 'bottom') {
              if (responsive) {
                top = controlRect.top;
              }
              maxHeight = Math.min(windowHeight - top, windowHeight);
            } else {
              if (responsive) {
                top = controlRect.bottom;
              }
              maxHeight = Math.min(windowHeight - top, windowHeight - controlRect.height);
            }
          }
        }

        container.style.left = left + 'px';
        // offset width by 0.1 to avoid a bug in ie11 that
        // unnecessarily wraps the text if width is the same
        container.style.width = width + 0.1 + 'px';
        // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering
        container.style.top = top + 'px';
        container.style.maxHeight = windowHeight - top + 'px';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DropContainer.prototype.componentDidMount = function componentDidMount() {
    var restrictFocus = this.props.restrictFocus;

    this.addScrollListener();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('click', this.onRemoveDrop);

    this.place();

    if (restrictFocus) {
      (0, _reactDom.findDOMNode)(this.dropRef).focus();
    }
  };

  DropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('click', this.onRemoveDrop);
  };

  DropContainer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        onClose = _props.onClose,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'onClose', 'theme']);

    return _react2.default.createElement(
      _FocusedContainer2.default,
      null,
      _react2.default.createElement(
        _Keyboard.Keyboard,
        { onEsc: onClose },
        _react2.default.createElement(
          _StyledDrop2.default,
          _extends({
            tabIndex: '-1',
            ref: function ref(_ref) {
              _this2.dropRef = _ref;
            },
            theme: theme
          }, rest),
          children
        )
      )
    );
  };

  return DropContainer;
}(_react.Component);

DropContainer.defaultProps = {
  centered: true
};
exports.default = DropContainer;