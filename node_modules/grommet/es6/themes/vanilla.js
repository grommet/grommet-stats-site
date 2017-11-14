import { rgba } from 'polished';
import { css } from 'styled-components';

import { colorForName, deepFreeze } from '../utils';

var brandColor = '#865CD6';
var accentColors = ['#00CCEB', '#FF7D28'];
var neutralColors = ['#0A64A0', '#DC2878', '#501EB4', '#49516F'];
var statusColors = {
  critical: '#FF324D',
  error: '#FF324D',
  warning: '#FFD602',
  ok: '#8CC800',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var darkColors = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
var lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
var backgroundColor = '#FFFFFF';
var textColor = '#333333';
var borderColor = 'rgba(0, 0, 0, 0.15)';
var activeColor = rgba('#DDDDDD', 0.5);
var fontPath = 'https://fonts.gstatic.com/s/worksans/v2';

var baseSpacing = 24;

var borderWidth = 2;

export default deepFreeze({
  global: {
    animation: {
      duration: '1s'
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: baseSpacing / 8 + 'px',
      large: baseSpacing / 4 + 'px',
      xlarge: baseSpacing + 'px'
    },
    breakpoints: {
      narrow: 699
    },
    centerColumnWidth: baseSpacing * 48 + 'px',
    colors: {
      active: activeColor,
      accent: accentColors,
      background: backgroundColor,
      black: '#000000',
      border: borderColor,
      brand: brandColor,
      dark: darkColors,
      darkBackground: {
        text: 'rgba(255, 255, 255, 0.85)'
      },
      light: lightColors,
      neutral: neutralColors,
      placeholder: '#AAAAAA',
      status: statusColors,
      text: textColor,
      white: '#FFFFFF'
    },
    control: {
      border: {
        width: '2px'
      },
      font: {
        weight: 600,
        size: '19px'
      }
    },
    drop: {
      backgroundColor: '#f8f8f8',
      border: {
        width: '0px',
        radius: '0px'
      },
      shadow: '0px 3px 8px rgba(100, 100, 100, 0.50)'
    },
    edgeSize: {
      xsmall: baseSpacing / 4 + 'px',
      small: baseSpacing / 2 + 'px',
      medium: baseSpacing + 'px',
      large: baseSpacing * 2 + 'px',
      xlarge: baseSpacing * 4 + 'px'
    },
    focus: {
      border: {
        color: css(['', ''], function (props) {
          return colorForName('accent-1', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: '\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 300;\n          src:\n            local(\'Work Sans Light\'),\n            local(\'WorkSans-Light\'),\n            url("' + fontPath + '/FD_Udbezj8EHXbdsqLUplxampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local(\'Work Sans\'),\n            local(\'WorkSans-Regular\'),\n            url("' + fontPath + '/ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 500;\n          src:\n            local(\'Work Sans Medium\'),\n            local(\'WorkSans-Medium\'),\n            url("' + fontPath + '/Nbre-U_bp6Xktt8cpgwaJBampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local(\'Work Sans SemiBold\'),\n            local(\'WorkSans-SemiBold\'),\n            url("' + fontPath + '/z9rX03Xuz9ZNHTMg1_ghGRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 700;\n          src:\n            local(\'Work Sans Bold\'),\n            local(\'WorkSans-Bold\'),\n            url("' + fontPath + '/4udXuXg54JlPEP5iKO5AmRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n      ',
      size: '16px'
    },
    hover: {
      backgroundColor: css(['', ''], function (props) {
        return props.theme.global.colors.active;
      }),
      textColor: '#000000'
    },
    input: {
      border: {
        width: '1px',
        radius: '4px',
        color: css(['', ''], function (props) {
          return props.theme.global.colors.border;
        })
      }
    },
    lineHeight: '24px',
    opacity: {
      weak: '0.8',
      medium: '0.4',
      strong: '0.1'
    },
    spacing: baseSpacing + 'px',
    size: {
      xxsmall: baseSpacing * 2 + 'px', // 48
      xsmall: baseSpacing * 4 + 'px', // 96
      small: baseSpacing * 8 + 'px', // 192
      medium: baseSpacing * 16 + 'px', // 384
      large: baseSpacing * 32 + 'px', // 768
      xlarge: baseSpacing * 48 + 'px', // 1152
      full: '100%'
    }
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: css(['', ''], function (props) {
      return props.theme.global.colors.brand;
    })
  },
  button: {
    border: {
      color: css(['', ''], function (props) {
        return props.theme.global.colors.brand;
      }),
      width: borderWidth + 'px',
      radius: '5px'
    },
    colors: {
      accent: css(['', ''], function (props) {
        return colorForName('accent-1', props.theme);
      }),
      critical: css(['', ''], function (props) {
        return props.theme.global.colors.status.critical;
      }),
      secondary: css(['', ''], function (props) {
        return colorForName('neutral-2', props.theme);
      }),
      text: css(['', ''], function (props) {
        return props.theme.global.colors.text;
      })
    },
    minWidth: baseSpacing * 4 + 'px',
    maxWidth: baseSpacing * 16 + 'px',
    padding: {
      vertical: baseSpacing / 2 - borderWidth + 'px',
      horizontal: baseSpacing / 2 - borderWidth + 'px'
    }
  },
  checkBox: {
    check: {
      color: css(['', ''], function (props) {
        return props.theme.global.colors.brand;
      }),
      width: '4px'
    },
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)'
      },
      radius: '4px',
      width: '2px'
    },
    size: baseSpacing + 'px',
    toggle: {
      color: '#d9d9d9',
      radius: baseSpacing + 'px',
      size: baseSpacing * 2 + 'px'
    }
  },
  grommet: {},
  heading: {
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    level: {
      1: {
        medium: { size: '48px', height: 1.125, maxWidth: baseSpacing * 48 + 'px' },
        small: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
        large: { size: '96px', height: 1.125, maxWidth: baseSpacing * 96 + 'px' }
      },
      2: {
        medium: { size: '36px', height: 1.23, maxWidth: baseSpacing * 36 + 'px' },
        small: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        large: { size: '48px', height: 1.125, maxWidth: baseSpacing * 48 + 'px' }
      },
      3: {
        medium: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
        small: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        large: { size: '36px', height: 1.23, maxWidth: baseSpacing * 36 + 'px' }
      },
      4: {
        medium: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        small: { size: '16px', height: 1.375, maxWidth: baseSpacing * 16 + 'px' },
        large: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' }
      }
    },
    weight: 300
  },
  icon: {
    extend: css(['', ' ', ''], function (props) {
      return props.color && props.color !== 'plain' && '\n        fill: ' + colorForName(props.color, props.theme) + ';\n        stroke: ' + colorForName(props.color, props.theme) + ';\n      ';
    }, function (props) {
      return props.dark && '\n        fill: ' + props.theme.global.colors.darkBackground.text + ';\n        stroke: ' + props.theme.global.colors.darkBackground.text + ';\n      ';
    })
  },
  layer: {
    backgroundColor: '#FFFFFF',
    border: {
      radius: '4px'
    },
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  paragraph: {
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    medium: { size: '16px', height: 1.375, maxWidth: baseSpacing * 16 + 'px' },
    small: { size: '14px', height: 1.43, maxWidth: baseSpacing * 14 + 'px' },
    large: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
    xlarge: { size: '32px', height: 1.1875, maxWidth: baseSpacing * 32 + 'px' }
  },
  radioButton: {
    check: {
      color: css(['', ''], function (props) {
        return props.theme.global.colors.brand;
      })
    },
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)'
      },
      radius: '100%',
      width: '2px'
    },
    size: baseSpacing + 'px'
  },
  rangeInput: {
    track: {
      color: css(['', ''], function (props) {
        return rgba(props.theme.global.colors.text, 0.2);
      })
    }
  },
  text: {
    medium: { size: '16px', height: 1.375 },
    xsmall: { size: '12px', height: 1.5 },
    small: { size: '14px', height: 1.43 },
    large: { size: '24px', height: 1.167 },
    xlarge: { size: '32px', height: 1.1875 },
    xxlarge: { size: '48px', height: 1.125 }
  },
  video: {
    captions: {
      background: rgba(0, 0, 0, 0.7)
    }
  }
});