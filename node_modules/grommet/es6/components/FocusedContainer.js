function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { getBodyChildElements, makeNodeFocusable, makeNodeUnfocusable } from '../utils';

var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};

var FocusedContainer = function (_Component) {
  _inherits(FocusedContainer, _Component);

  function FocusedContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, FocusedContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.removeTrap = function () {
      var restrictScroll = _this.props.restrictScroll;

      var child = findDOMNode(_this.ref);
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeFocusable);
      if (restrictScroll) {
        document.body.style.overflow = 'scroll';
      }
    }, _this.trapFocus = function () {
      var restrictScroll = _this.props.restrictScroll;

      var child = findDOMNode(_this.ref);
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeUnfocusable);

      if (restrictScroll) {
        document.body.style.overflow = 'hidden';
      }
    }, _this.onBlur = function () {
      // timeout needed so it gives enough time for activeElement to be updated
      setTimeout(function () {
        var containerNode = findDOMNode(_this.ref);
        if (!containerNode.contains(document.activeElement)) {
          _this.removeTrap();
        }
      }, 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FocusedContainer.prototype.componentDidMount = function componentDidMount() {
    var hidden = this.props.hidden;

    if (!hidden) {
      this.trapFocus();
    }
  };

  FocusedContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var hidden = _ref.hidden;

    if (hidden !== this.props.hidden) {
      if (!hidden) {
        this.trapFocus();
      } else {
        this.removeTrap();
      }
    }
  };

  FocusedContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeTrap();
  };

  FocusedContainer.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { ref: function ref(_ref2) {
          _this2.ref = _ref2;
        }, onBlur: this.removeTrap },
      this.props.children
    );
  };

  return FocusedContainer;
}(Component);

export default FocusedContainer;