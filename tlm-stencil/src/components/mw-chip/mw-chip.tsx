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
  @Prop() close?: boolean = false;
  @State() selected: boolean = false;
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  clickEmitter: EventEmitter<string>;

  handleClose = () => {
    this.clickEmitter.emit('onClose');
  };

  handleClick = () => {
    this.selected = !this.selected;
  };

  render() {
    return (
      <Host>
        <div tabindex="0" class={`chip ${typo} ${this.selected && 'selected'} ${this.disabled && 'disabled'}`} onClick={this.handleClick} test-id={this.testId}>
          {!!this.icon && <mw-icon icon={this.icon} size="medium"></mw-icon>}
          <slot></slot>
          {this.close && (
            <span onClick={this.handleClose}>
              <mw-icon icon="close" color="currentcolor" size="small"></mw-icon>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
