const colors = {
  primary: '#0366d6',
  primaryDark: '#044289',
  primaryLight: '#79b8ff',
  gray: '#6a737d',
  darkGray: '#2f363d',
  lightGray: '#d1d5da',
  extraLightGray: '#f6f8fa',
  black: '#1b1f23',
  white: '#fff',
  red: '#d73a49',
};

const margins = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2rem',
  6: '2.5rem',
};

const paddings = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2rem',
  6: '2.5rem',
};

const fonts = {
  family: {
    base: `Spoqa Han Sans Neo, sans-serif`,
    title: `'Oleo Script', cursive`,
  },
  size: {
    0: '1rem',
    1: '1.25rem',
    2: '1.5rem',
    3: '2rem',
    4: '2.5rem',
    5: '6rem',
  },
  weight: {
    light: 300,
    base: 400,
    bold: 600,
    xBold: 800,
  },
  lh: {
    condensed: 1.25,
    default: 1.5,
    distinct: 2.0,
  },
};

const borderRadius = {
  1: '4px',
  2: '6px',
  3: '8px',
};

const boxShadow = {
  base: '0 1px 0 rgba(27, 31, 35, 0.15)',
  md: '0 2px 4px rgba(149, 157, 165, 0.4)',
  lg: '0 8px 24px rgba(149, 157, 165, 0.45)',
  xLg: '0 12px 48px rgba(149, 157, 165, 0.5)',
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.25)',
};

const breakPoints = {
  mobile: '544px',
  tablet: '768px',
  tabletL: '1012px',
  desktop: '1440px',
};

const device = {
  mobile: `@media only screen and (max-width: ${breakPoints.mobile})`,
  tablet: `@media only screen and (max-width: ${breakPoints.tablet})`,
  tabletL: `@media only screen and (max-width: ${breakPoints.tabletL})`,
  desktop: `@media only screen and (max-width: ${breakPoints.desktop})`,
};

export const theme = {
  colors,
  margins,
  paddings,
  fonts,
  borderRadius,
  boxShadow,
  breakPoints,
  device,
};

export default theme;
