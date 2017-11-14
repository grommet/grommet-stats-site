'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routedAnchor = routedAnchor;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

function routedAnchor(RoutedAnchor) {
  var DocumentedRoutedAnchor = (0, _reactDesc.describe)(RoutedAnchor).availableAt((0, _utils.getAvailableAtBadge)('RoutedAnchor')).description('An Anchor with support for React Router.').usage("import { RoutedAnchor } from 'grommet';\n<RoutedAnchor primary={true} path='/documentation' />");
  DocumentedRoutedAnchor.propTypes = _extends({}, _utils.ROUTER_PROPS);
  return DocumentedRoutedAnchor;
}

exports.default = function (Anchor) {
  var DocumentedAnchor = (0, _reactDesc.describe)(Anchor).availableAt((0, _utils.getAvailableAtBadge)('Anchor')).description('A text link. We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children.').usage("import { Anchor } from 'grommet';\n<Anchor href={location} label='Label' />");

  DocumentedAnchor.propTypes = {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    href: _reactDesc.PropTypes.string.description('Hyperlink reference to place in the anchor.'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the anchor.'),
    label: _reactDesc.PropTypes.node.description('Label text to place in the anchor.'),
    onClick: _reactDesc.PropTypes.func.description('Click handler. It can be used, for example, \n    to add analytics and track who clicked in the anchor.'),
    primary: _reactDesc.PropTypes.bool.description('Whether this is a primary anchor.'),
    reverse: _reactDesc.PropTypes.bool.description('Whether an icon and label should be reversed so that the icon is at the end of the anchor.')
  };

  return DocumentedAnchor;
};