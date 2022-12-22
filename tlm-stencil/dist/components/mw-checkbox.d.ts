import type { Components, JSX } from "../types/components";

interface MwCheckbox extends Components.MwCheckbox, HTMLElement {}
export const MwCheckbox: {
  prototype: MwCheckbox;
  new (): MwCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
