import { create } from '@storybook/theming';
import logo from './public/mwui_logo.svg';
import {
  mwCoreColorPurple900,
  mwCoreColorPink500,
  mwCoreFontFontFamiliesBody,
  borderRadiusMedium,
  mwCoreColorNeutral100,
} from '../../tlm-token-farm/dist/js/MW_core';

export default create({
  base: 'light',
  brandTitle: 'MWUI',
  // brandUrl: "https://example.com",
  brandImage: logo,
  brandTarget: '_self',

  colorPink: mwCoreColorPink500,
  colorPurple: mwCoreColorPurple900,

  // UI
  appBg: mwCoreColorNeutral100,
  // appContentBg: 'white',
  // appBorderColor: 'grey',
  appBorderRadius: borderRadiusMedium,

  // Typography
  fontBase: mwCoreFontFontFamiliesBody,
  // fontCode: 'monospace',

  // Text colors
  // textColor: mwCoreColorNeutralWhite,
  // textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  //barSelectedColor: mwCoreColorPink500,
  barBg: mwCoreColorPurple900,
});
