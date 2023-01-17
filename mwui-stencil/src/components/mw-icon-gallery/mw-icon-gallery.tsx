import { Component, Host, State, h } from '@stencil/core';
import { icons } from '../../../icon-names.js';

@Component({
  tag: 'mw-icon-gallery',
  styleUrl: 'mw-icon-gallery.css',
  shadow: true,
})
export class MwIconGallery {
  @State() icons: string[] = icons;
  @State() filteredIcons: string[] = [];
  @State() fill: boolean = false;

  componentWillLoad() {
    this.filteredIcons = this.icons;
  }

  private onInput = event => {
    const filterTerm = event.target.value.toLowerCase();
    this.filteredIcons = this.icons.filter(icon => icon.toLowerCase().includes(filterTerm));
  };

  private copyIconName = (name: string) => {
    navigator.clipboard
      .writeText(name)
      .then(() => console.info(`Copied icon name "${name}"`))
      .catch(e => console.error('Failed to copy icon name', e));
  };

  private onToggleFill = () => {
    this.fill = !this.fill;
  };

  render() {
    return (
      <Host>
        <div class="gallery-toolbar">
          <mw-textfield class="gallery-filter" onInput={this.onInput} placeholder="Type to filter icons" id="icon-filter">
            <mw-icon icon="search" slot="icon-start"></mw-icon>
          </mw-textfield>
          <mw-switch label="filled styles" onInput={this.onToggleFill}></mw-switch>
        </div>
        <div class="hint">
          <mw-icon icon="content_copy" size="small"></mw-icon>Click item to copy icon name.
        </div>
        <div class="gallery">
          {this.filteredIcons.map(i => (
            <div class="gallery-item-container" onClick={() => this.copyIconName(i)}>
              <div class="gallery-item">
                <mw-icon fill={this.fill} icon={i} size="large"></mw-icon>
                <p class="gallery-item-text">{i.split('_').join(' ')}</p>
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
