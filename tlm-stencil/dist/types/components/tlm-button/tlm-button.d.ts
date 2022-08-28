import { EventEmitter } from '../../stencil-public-runtime';
export declare class TlmButton {
  testId: string;
  disabled?: boolean;
  clickEmitter: EventEmitter<string>;
  handleClick: () => void;
  render(): any;
}
