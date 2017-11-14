'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

var ANIMATION_TYPE = _reactDesc.PropTypes.oneOf(['fadeIn', 'fadeOut', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);
var ANIMATION_SHAPE = _reactDesc.PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: _reactDesc.PropTypes.number,
  duration: _reactDesc.PropTypes.number
});

exports.default = function (Box) {
  var DocumentedBox = (0, _reactDesc.describe)(Box).availableAt((0, _utils.getAvailableAtBadge)('Box')).description('A flexible box that lays out its contents along a single direction.').usage("import { Box } from 'grommet';\n<Box />");
  DocumentedBox.propTypes = {
    a11yTitle: _utils.a11yTitlePropType,
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']).description('How to align the contents along the cross axis.'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents when there is extra space in the cross axis.').defaultValue('stretch'),
    alignSelf: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align along the cross axis when contained in a Box or along\nthe column axis when contained in a Grid.'),
    animation: _reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description('Animation effect(s) to use. \'duration\' and \'delay\' should be in milliseconds.'),
    background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      dark: _reactDesc.PropTypes.bool,
      image: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
    })]).description('Either a color identifier to use for the background color. For example:\n\'neutral-1\'. Or, a \'url()\' for an image. Dark is not needed if color is provided.'),
    basis: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4']).description('A fixed or relative size along its container\'s main axis.'),
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('Include a border.'),
    direction: _reactDesc.PropTypes.oneOf(['row', 'column']).description('The orientation to layout the child components in.').defaultValue('column'),
    flex: _reactDesc.PropTypes.oneOf(['grow', 'shrink', true, false]).description('Whether flex-grow and/or flex-shrink is true.'),
    full: _reactDesc.PropTypes.oneOf(['horizontal', 'vertical', true, false, 'grow']).description('Whether the width and/or height should take the full viewport size.'),
    gridArea: _reactDesc.PropTypes.string.description('The name of the area to place this Box in inside a parent Grid.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'between', 'end']).description('How to align the contents along the main axis.'),
    justifySelf: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align along the row axis when contained in a Grid.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of margin around the box. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the box'),
    overflow: _reactDesc.PropTypes.oneOf(['auto', 'hidden', 'scroll']).description('box overflow.'),
    pad: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of padding around the box contents. An object can be specified to\ndistinguish horizontal padding, vertical padding, and padding on a\nparticular side of the box'),
    responsive: _reactDesc.PropTypes.bool.description('Whether children laid out in a row direction should be switched to a\ncolumn layout when the display area narrows.'),
    reverse: _reactDesc.PropTypes.bool.description('Whether to reverse the order of the child components.'),
    round: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']).description('How much to round the corners.'),
    tag: _reactDesc.PropTypes.string.description('The DOM tag to use for the element.').defaultValue('div'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the box.'),
    wrap: _reactDesc.PropTypes.bool.description('Whether children can wrap if they can\'t all fit.')
  };
  return DocumentedBox;
};