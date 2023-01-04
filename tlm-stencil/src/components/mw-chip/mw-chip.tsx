import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { css } from '@emotion/css';
import { getFontWeightValue } from '../../utils/utils';
import { mwComponentChipsTypo } from '../../../../tlm-token-farm/dist/js/MW_component.js';

const typo = css`
  font-size: ${mwComponentChipsTypo.fontSize}px;
  font-family: ${mwComponentChipsTypo.fontFamily};
  font-weight: ${getFontWeightValue(mwComponentChipsTypo.fontWeight)};
  line-height: ${mwComponentChipsTypo.lineHeight}px;
`;

@Component({
  tag: 'mw-chip',
  styleUrl: 'mw-chip.css',
  shadow: false,
})
export class MwChip {
  /**
   * Must be provided for automated testing
   */
  @Prop() testId!: string;
  /**
   * Name identifier of icon to be displayed in chip
   */
  @Prop() icon?: string;
  /**
   * Visually and functionally disable button
   */
  @Prop() disabled?: boolean;
  /**
   * Flag wether to show close icon or not
   */
  @Prop() showClose?: boolean = false;
  /**
   * Selection state that changes onToggle. Can be set as mutable prop.
   */
  @Prop({ mutable: true }) selected: boolean = false;
  /**
   * 'close' event is fired when the close icon is clicked.
   */
  @Event({
    eventName: 'close',
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter;
  /**
   * 'toggle' event is fired when the chip is clicked. Current selection state is emitted.
   */
  @Event({ eventName: 'toggle', bubbles: true, composed: false, cancelable: false }) selectionChangeEmitter: EventEmitter<boolean>;

  handleClose = (event: Event) => {
    event.stopPropagation();
    if (!this.disabled) {
      this.clickEmitter.emit();
    }
  };

  handleClick = () => {
    this.selected = !this.selected;
    this.selectionChangeEmitter.emit(this.selected);
  };

  render() {
    return (
      <Host>
        <div tabindex="0" class={`chip ${typo} ${this.selected && 'selected'} ${this.disabled && 'disabled'}`} onClick={this.handleClick} test-id={this.testId}>
          {!!this.icon && <mw-icon icon={this.icon} size="medium"></mw-icon>}
          <slot></slot>
          {this.showClose && (
            <span onClick={this.handleClose}>
              <mw-icon icon="close" color="currentcolor" size="small"></mw-icon>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
