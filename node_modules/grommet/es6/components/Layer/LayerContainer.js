var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import FocusedContainer from '../FocusedContainer';
import { Keyboard } from '../Keyboard';

import StyledLayer, { StyledContainer } from './StyledLayer';

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, LayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.makeLayerVisible = function () {
      var layerNode = findDOMNode(_this.layerNodeRef);
      if (layerNode.scrollIntoView) {
        layerNode.scrollIntoView();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var position = this.props.position;

    if (position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var position = _ref.position;

    if (this.props.position !== position && position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        onEsc = _props.onEsc,
        plain = _props.plain,
        position = _props.position,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'onEsc', 'plain', 'position', 'theme']);

    return React.createElement(
      FocusedContainer,
      { hidden: position === 'hidden', restrictScroll: true },
      React.createElement(
        Keyboard,
        { onEsc: onEsc },
        React.createElement(
          StyledLayer,
          {
            plain: plain,
            position: position,
            theme: theme,
            tabIndex: '-1',
            ref: function ref(_ref2) {
              _this2.layerNodeRef = _ref2;
            }
          },
          React.createElement(
            StyledContainer,
            _extends({}, rest, { theme: theme, position: position, plain: plain }),
            children
          )
        )
      )
    );
  };

  return LayerContainer;
}(Component);

export default LayerContainer;