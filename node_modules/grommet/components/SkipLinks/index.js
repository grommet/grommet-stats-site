'use strict';

exports.__esModule = true;
exports.SkipLinkTarget = exports.SkipLinks = exports.SkipLink = undefined;

var _SkipLink = require('./SkipLink');

Object.defineProperty(exports, 'SkipLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SkipLink).default;
  }
});

var _SkipLinks = require('./SkipLinks');

Object.defineProperty(exports, 'SkipLinks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SkipLinks).default;
  }
});

var _SkipLinkTarget = require('./SkipLinkTarget');

Object.defineProperty(exports, 'SkipLinkTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SkipLinkTarget).default;
  }
});

var _SkipLinks2 = _interopRequireDefault(_SkipLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SkipLinks2.default;