import { EventEmitter } from '../../stencil-public-runtime';
import '../../global/global.css';
export declare class TlmButton {
  testId: string;
  disabled?: boolean;
  clickEmitter: EventEmitter<string>;
  handleClick: () => void;
  render(): any;
}
