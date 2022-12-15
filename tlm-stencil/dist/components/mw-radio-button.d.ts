import type { Components, JSX } from "../types/components";

interface MwRadioButton extends Components.MwRadioButton, HTMLElement {}
export const MwRadioButton: {
  prototype: MwRadioButton;
  new (): MwRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
