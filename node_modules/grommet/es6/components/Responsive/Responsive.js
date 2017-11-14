function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Children, Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import doc from './doc';

var Responsive = function (_Component) {
  _inherits(Responsive, _Component);

  function Responsive() {
    var _temp, _this, _ret;

    _classCallCheck(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onResize = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          theme = _this$props.theme;
      var narrow = _this.state.narrow;

      if (window.innerWidth > theme.global.breakpoints.narrow) {
        if (narrow) {
          _this.setState({ narrow: false }, function () {
            return onChange('wide');
          });
        }
      } else if (narrow !== true) {
        _this.setState({ narrow: true }, function () {
          return onChange('narrow');
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Responsive.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  Responsive.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  Responsive.prototype.render = function render() {
    var children = this.props.children;

    return Children.only(children);
  };

  return Responsive;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(Responsive);
}

export default compose(withTheme)(Responsive);