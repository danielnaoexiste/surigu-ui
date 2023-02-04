// @ts-nocheck
const breakpoints = ["414px", "768px", "1024px", "1366px", "1920px"];
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.web = breakpoints[2];
breakpoints.hd = breakpoints[3];
breakpoints.fullhd = breakpoints[4];

const borderRadius = [0, 8, 20, 30];
borderRadius.none = borderRadius[0];
borderRadius.sm = borderRadius[1];
borderRadius.md = borderRadius[2];
borderRadius.lg = borderRadius[3];

const fonts = {
  default: "Roboto Mono, monospace",
};

const fontSizes = ["10px", "12px", "14px", "16px", "18px", "20px", "25px"];
fontSizes.xsmall = fontSizes[0];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.default = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.xlarge = fontSizes[5];
fontSizes.xxlarge = fontSizes[6];

const fontWeights = { regular: 400, medium: 500, semiBold: 600, bold: 700 };

const buttonSizes = {
  sm: {
    fontSize: fontSizes.small,
    padding: ".13rem .35rem",
  },
  md: {
    fontSize: fontSizes.medium,
    padding: ".25rem .75rem",
  },
  lg: {
    fontSize: fontSizes.large,
    padding: ".35rem 1rem",
  },
  xlg: {
    fontSize: fontSizes.xlarge,
    padding: ".5rem 1.25rem",
  },
};

const space = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40, 50, 60, 70, 80, 90, 100,
];

const colors = {
  // grey scale
  white: "#ffffff",
  lightGrey: "#f5f5f5",
  mediumGrey: "#dedede",
  grey: "#bfbfbf",
  darkGrey: "#8c8c8c",
  darkerGrey: "#434343",
  almostBlack: "#262626",
  black: "#000000",

  // brand
  primaryLightest: "#D699C3",
  primaryLight: "#D08ABA",
  primary: "#C979B0",
  primaryMedium: "#C56DA9",
  primaryDark: "#BF5FA0",
  secondaryLightest: "#ADB0D7",
  secondaryLight: "#9FA3D0",
  secondary: "#8489C2",
  secondaryMedium: "#767CBC",
  secondaryDark: "#696FB5",
  background: "#352A43",
  foreground: "#453758",

  // actions
  info: "#CF6998",
  success: "#98CF69",
  warning: "#CCCF69",
  error: "#CF6A69",

  // common
  red: "#CF6A69",
  pink: "#EB5387",
  purple: "#A652B4",
  deepPurple: "#8654DE",
  indigo: "#4C60D0",
  blue: "#4AAFFF",
  cyan: "#69D6E3",
  teal: "#33A59A",
  green: "#78C77C",
  lime: "#B5BF56",
  yellow: "#FFCD38",
  orange: "#F8A23D",
  deepOrange: "#FD825B",
  brown: "#C9775D",
};

const defaultTheme = {
  borderRadius,
  breakpoints,
  colors,
  buttonSizes,
  fonts,
  fontSizes,
  fontWeights,
  space,
};

export default defaultTheme;
