function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { getNewContainer } from '../../utils';

import { withTheme } from '../hocs';

import DropContainer from './DropContainer';
import doc from './doc';

var Drop = function (_Component) {
  _inherits(Drop, _Component);

  function Drop() {
    var _temp, _this, _ret;

    _classCallCheck(this, Drop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.originalFocusedElement = document.activeElement, _this.dropContainer = getNewContainer(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.render = function render() {
    return createPortal(React.createElement(DropContainer, this.props), this.dropContainer);
  };

  return Drop;
}(Component);

Drop.defaultProps = {
  align: {
    top: 'top',
    left: 'left'
  }
};


if (process.env.NODE_ENV !== 'production') {
  doc(Drop);
}

export default withTheme(Drop);