import type { Components, JSX } from "../types/components";

interface MwCheckboxButton extends Components.MwCheckboxButton, HTMLElement {}
export const MwCheckboxButton: {
  prototype: MwCheckboxButton;
  new (): MwCheckboxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
