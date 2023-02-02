import { create } from "@storybook/theming";
import logo from "./public/mw_logo.png";
import "../src/global/global.css";

import { mwCoreColorDarkblue900, mwCoreColorPink500, mwCoreFontFontFamiliesBody, mwCoreColorNeutral100, borderRadiusStandardMd } from "../../mwui-token-farm/dist/js/MW_core";

export default create({
  base: "light",
  brandTitle: "MWUI",
  // brandUrl: "https://example.com",
  // brandImage: logo,
  brandTarget: "_self",

  colorPink: mwCoreColorPink500,
  colorPurple: mwCoreColorDarkblue900,

  // UI
  appBg: mwCoreColorNeutral100,
  // appContentBg: 'white',
  // appBorderColor: 'grey',
  appBorderRadius: borderRadiusStandardMd,

  // Typography
  fontBase: mwCoreFontFontFamiliesBody,
  // fontCode: 'monospace',

  // Text colors
  // textColor: mwCoreColorNeutralWhite,
  // textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: "white",
  //barSelectedColor: mwCoreColorPink500,
  barBg: mwCoreColorDarkblue900,
});
