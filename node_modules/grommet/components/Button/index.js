'use strict';

exports.__esModule = true;
exports.RoutedButton = exports.Button = undefined;

var _Button = require('./Button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _RoutedButton = require('./RoutedButton');

Object.defineProperty(exports, 'RoutedButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RoutedButton).default;
  }
});

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;