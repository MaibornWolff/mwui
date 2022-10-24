import type { Components, JSX } from "../types/components";

interface TlmButtonGroup extends Components.TlmButtonGroup, HTMLElement {}
export const TlmButtonGroup: {
  prototype: TlmButtonGroup;
  new (): TlmButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
