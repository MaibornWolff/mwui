import { create } from "@storybook/theming";
import logo from "./public/mwui_logo.svg";

export default create({
  base: "light",
  brandTitle: "MWUI",
  // brandUrl: "https://example.com",
  brandImage: logo,
  brandTarget: "_self",

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  // appBg: 'white',
  // appContentBg: 'white',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  // fontBase: '"Roboto", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'white',
  barSelectedColor: '#1c174a',
  // barBg: 'lightgrey',
});
