import { css } from "@emotion/css"
import {
  letterSpacingButtons,
  mwComponentButtonBorderRadiusDefault,
  mwComponentButtonBorderWidthFilledDefault,
  mwComponentButtonBorderWidthFilledFocused,
  mwComponentButtonBorderWidthOutlineDefault,
  mwComponentButtonBorderWidthOutlineFocused,
  mwComponentButtonFilledColorBgDefault,
  mwComponentButtonFilledColorBgDisabled,
  mwComponentButtonFilledColorBgFocused,
  mwComponentButtonFilledColorBgHover,
  mwComponentButtonFilledColorBgPressed,
  mwComponentButtonFilledColorFgDefault,
  mwComponentButtonFilledColorFgDisabled,
  mwComponentButtonFilledColorFgFocused,
  mwComponentButtonFilledColorFgHover,
  mwComponentButtonFilledColorFgPressed,
  mwComponentButtonFilledColorOutlineFocused,
  mwComponentButtonLabelLgFontFamily,
  mwComponentButtonLabelLgFontSize,
  mwComponentButtonLabelLgFontWeight,
  mwComponentButtonLabelLgLineHeight,
  mwComponentButtonLabelMdFontFamily,
  mwComponentButtonLabelMdFontSize,
  mwComponentButtonLabelMdFontWeight,
  mwComponentButtonLabelMdLineHeight,
  mwComponentButtonLabelSmFontFamily,
  mwComponentButtonLabelSmFontSize,
  mwComponentButtonLabelSmFontWeight,
  mwComponentButtonLabelSmLineHeight,
  mwComponentButtonLabelXlFontFamily,
  mwComponentButtonLabelXlFontSize,
  mwComponentButtonLabelXlFontWeight,
  mwComponentButtonLabelXlLineHeight, mwComponentButtonLgGapBetween, mwComponentButtonLgPaddingIcon,
  mwComponentButtonLgPaddingX,
  mwComponentButtonLgPaddingY, mwComponentButtonMdGapBetween, mwComponentButtonMdPaddingIcon,
  mwComponentButtonMdPaddingX,
  mwComponentButtonMdPaddingY,
  mwComponentButtonOutlineGhostColorBgDefault,
  mwComponentButtonOutlineGhostColorBorderDefault,
  mwComponentButtonOutlineGhostColorBorderDisabled,
  mwComponentButtonOutlineGhostColorBorderFocused,
  mwComponentButtonOutlineGhostColorBorderHover,
  mwComponentButtonOutlineGhostColorBorderPressed,
  mwComponentButtonOutlineGhostColorFgDefault,
  mwComponentButtonOutlineGhostColorFgDisabled,
  mwComponentButtonOutlineGhostColorFgFocused,
  mwComponentButtonOutlineGhostColorFgHover,
  mwComponentButtonOutlineGhostColorFgPressed, mwComponentButtonSmGapBetween, mwComponentButtonSmPaddingIcon,
  mwComponentButtonSmPaddingX,
  mwComponentButtonSmPaddingY, mwComponentButtonXlGapBetween, mwComponentButtonXlPaddingIcon,
  mwComponentButtonXlPaddingX,
  mwComponentButtonXlPaddingY,
  mwComponentSizeButtonFilledOutlineMinW,
} from "@mwui-token-farm/MW_component"
import { getFontWeightValue } from "../../utils/utils"

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(letterSpacingButtons.replace('%', '').trim()) / 100;

export const base = css`
  appearance: none;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: ${letterSpacing}em;
  border-top-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-top-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonFilledOutlineMinW};

  &.small {
    padding: ${mwComponentButtonSmPaddingY} ${mwComponentButtonSmPaddingX};
    font-family: ${mwComponentButtonLabelSmFontFamily};
    line-height: ${mwComponentButtonLabelSmLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelSmFontWeight)};
    font-size: ${mwComponentButtonLabelSmFontSize}px;
  }

  &.medium {
    padding: ${mwComponentButtonMdPaddingY} ${mwComponentButtonMdPaddingX};
    font-family: ${mwComponentButtonLabelMdFontFamily};
    line-height: ${mwComponentButtonLabelMdLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelMdFontWeight)};
    font-size: ${mwComponentButtonLabelMdFontSize}px;
  }

  &.large {
    padding: ${mwComponentButtonLgPaddingY} ${mwComponentButtonLgPaddingX};
    font-family: ${mwComponentButtonLabelLgFontFamily};
    line-height: ${mwComponentButtonLabelLgLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelLgFontWeight)};
    font-size: ${mwComponentButtonLabelLgFontSize}px;
  }

  &.x-large {
    padding: ${mwComponentButtonXlPaddingY} ${mwComponentButtonXlPaddingX};
    font-family: ${mwComponentButtonLabelXlFontFamily};
    line-height: ${mwComponentButtonLabelXlLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelXlFontWeight)};
    font-size: ${mwComponentButtonLabelXlFontSize}px;
  }
`;

export const filledButtonStyles = css`
  ${base};
  border: ${mwComponentButtonBorderWidthFilledDefault};
  color: ${mwComponentButtonFilledColorFgDefault};
  background-color: ${mwComponentButtonFilledColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonFilledColorBgHover};
    color: ${mwComponentButtonFilledColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthFilledFocused}px ${mwComponentButtonFilledColorOutlineFocused};
    background-color: ${mwComponentButtonFilledColorBgFocused};
    color: ${mwComponentButtonFilledColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonFilledColorBgPressed};
    color: ${mwComponentButtonFilledColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonFilledColorBgDisabled};
    color: ${mwComponentButtonFilledColorFgDisabled};
  }
`;

export const outlineButtonStyles = css`
  ${base};
  border: 0;
  box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDefault};
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderHover};
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused};
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderPressed};
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
  }
  &:disabled {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDisabled};
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
  }
`;

export const ghostButtonStyles = css`
  ${base};
  outline: none;
  box-shadow: none;
  border: none;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused};
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
    box-shadow: none;
  }
  &:disabled {
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
    box-shadow: none;
  }
`;

export const iconButtonStyles = css`
  &.small {
    padding: ${mwComponentButtonSmPaddingIcon};
  }
  &.medium {
    padding: ${mwComponentButtonMdPaddingIcon};
  }
  &.large {
    padding: ${mwComponentButtonLgPaddingIcon};
  }
  &.x-large {
    padding: ${mwComponentButtonXlPaddingIcon};
  }
  min-width: 0px;
`;

export const flexStyles = css`
  display: flex;
  align-items: center;
`;

export const iconStartStyles = css`
  &.small {
    margin-right: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-right: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-right: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-right: ${mwComponentButtonXlGapBetween};
  }
`;

export const iconEndStyles = css`
  &.small {
    margin-left: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-left: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-left: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-left: ${mwComponentButtonXlGapBetween};
  }
`;
