'use strict';

exports.__esModule = true;
exports.RoutedAnchor = exports.Anchor = undefined;

var _Anchor = require('./Anchor');

Object.defineProperty(exports, 'Anchor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Anchor).default;
  }
});

var _RoutedAnchor = require('./RoutedAnchor');

Object.defineProperty(exports, 'RoutedAnchor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RoutedAnchor).default;
  }
});

var _Anchor2 = _interopRequireDefault(_Anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Anchor2.default;