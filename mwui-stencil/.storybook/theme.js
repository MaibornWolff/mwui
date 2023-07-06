import { create } from "@storybook/theming";
// import "../src/global/global.css";
import "../../mwui-token-farm/dist/css/MW_component.css";

import {
  mwCoreColorDarkblue900,
  mwCoreColorPink500,
  mwCoreFontFontFamiliesBody,
  mwCoreColorNeutral100,
  borderRadiusStandardMd,
  mwCoreColorNeutral50,
} from "../../mwui-token-farm/dist/js/MW_core";

export default create({
  base: "light",
  brandTitle: "MWUI",
  // brandUrl: "https://example.com",
  // brandImage: logo,
  brandTarget: "_self",

  // UI
  colorPrimary: mwCoreColorPink500,
  colorSecondary: mwCoreColorDarkblue900,
  appBg: mwCoreColorNeutral100,
  appContentBg: mwCoreColorNeutral50,
  appBorderColor: "grey",
  appBorderRadius: borderRadiusStandardMd,

  // Typography
  fontBase: mwCoreFontFontFamiliesBody,

  // Text colors
  // textColor: 'white',
  // textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: mwCoreColorDarkblue900,
  barSelectedColor: mwCoreColorPink500,
  // barBg: mwCoreColorDarkblue900,
});
