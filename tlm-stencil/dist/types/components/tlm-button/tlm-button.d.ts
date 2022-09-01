import { EventEmitter } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
export declare class TlmButton {
  hostElement: HTMLStencilElement;
  testId: string;
  disabled?: boolean;
  clickEmitter: EventEmitter<string>;
  hasIconStartSlot: boolean;
  hasIconEndSlot: boolean;
  componentWillLoad(): void;
  handleClick: () => void;
  render(): any;
}
