import {Component, Element, h, Prop} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
/*import { css } from '@emotion/css';*/

/*const container = css`
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const hideDefaultStyles = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
const radioButtonStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
`*/
@Component({
  tag: 'mw-radio-button',
  styleUrl: 'mw-radio-button.css',
  shadow: false,
})
export class MwRadioButton {
  @Element() hostElement: HTMLStencilElement;
  @Prop() disabled?: boolean;
  @Prop() checked?: boolean;
  @Prop() value: string;
  @Prop() name: string;


  render() {
    return (
      <label class="container">
        <input type="radio" value={this.value} name={this.name} checked={this.checked} disabled={this.disabled}/>
        <span class="checkmark"></span>
        <slot></slot>
      </label>
    );
  }

}
