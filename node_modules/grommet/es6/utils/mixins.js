import { css } from 'styled-components';

export function parseMetricToInt(fontAsString) {
  return parseInt(fontAsString.replace(/[^0-9]/g, ''), 10);
}

export function fontSize(size, lineHeight) {
  return css(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToInt(size) / parseMetricToInt(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToInt(size) / parseMetricToInt(props.theme.global.lineHeight)) * (parseMetricToInt(props.theme.global.lineHeight) / parseMetricToInt(size)) + 'px';
  });
}

export function lapAndUp(content) {
  return css(['@media only screen and (min-width:', '){', ';}'], function (props) {
    return props.theme.global.breakpoints.narrow + 1 + 'px';
  }, content);
}

export function palm(content) {
  return css(['@media only screen and (max-width:', '){', ';}'], function (props) {
    return props.theme.global.breakpoints.narrow + 'px';
  }, content);
}

export function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
}

export function getAvailableAtBadge(availableAt) {
  return {
    url: 'https://codesandbox.io/s/github/grommet/grommet-site?initialpath=' + availableAt.toLowerCase() + '&amp;module=%2Fscreens%2F' + availableAt + '.js',
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg'
  };
}

export default {
  fontSize: fontSize, findAllByType: findAllByType, getAvailableAtBadge: getAvailableAtBadge, lapAndUp: lapAndUp, palm: palm
};