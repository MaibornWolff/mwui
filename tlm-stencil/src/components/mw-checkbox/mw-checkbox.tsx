import {Component, getAssetPath, h, Prop} from '@stencil/core';

@Component({
  tag: 'mw-checkbox',
  styleUrl: 'mw-checkbox.css',
  assetsDirs: ['./../assets'],
  shadow: true,
})
export class MwCheckbox {
  @Prop() value: string;
  @Prop() name: string;
  @Prop() disabled?: boolean;
  @Prop({mutable:true}) checked?: boolean;

  handleCheck = () => {
    if (!this.disabled) {
      this.checked = !this.checked
    }
  }

  render() {
    return (
      <div class="mw-checkbox-container" onClick={this.handleCheck}>
        <input type="checkbox" checked={this.checked} value={this.value} name={this.name}/>
        <span class={`mw-checkbox ${this.checked ? "selected" : "unselected"} ${this.disabled ? "disabled" : "enabled"}`}>
          <img
            class={`mw-checkmark ${this.checked ? "selected" : "unselected"}`}
            src={getAssetPath("./../assets/mw-checkbox_icon.svg")}
            alt="Checkmark"
          />
        </span>
        <span class="mw-checkbox-label"><slot></slot></span>
      </div>
    );
  }

}
