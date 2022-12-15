import type { Components, JSX } from "../types/components";

interface TlmButton extends Components.TlmButton, HTMLElement {}
export const TlmButton: {
  prototype: TlmButton;
  new (): TlmButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
