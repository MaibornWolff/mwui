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

  componentWillLoad() {
    this.filteredIcons = this.icons;
  }

  private onInput = (event) => {
    const filterTerm = event.target.value.toLowerCase();
    this.filteredIcons = this.icons.filter(icon => icon.toLowerCase().includes(filterTerm));
  }

  private copyIconName = (name: string) => {
    navigator.clipboard
      .writeText(name)
      .then(() => console.info(`Copied icon name "${name}"`))
      .catch(e => console.error('Failed to copy icon name', e));
  }

  render() {
    return (
      <Host>
        <mw-textfield class="gallery-filter" onInput={this.onInput} placeholder="Type to filter icons" id="icon-filter">
          <mw-icon icon="search" slot="icon-start"></mw-icon>
        </mw-textfield>
        <div class="hint">
          <mw-icon icon="placeholder"></mw-icon>Click item to copy icon name.
        </div>
        <div class="gallery">
          {this.filteredIcons.map(i => (
            <mw-card title={`Click to copy name to clipboard: ${i}`} class="gallery-item-container" onClick={() => this.copyIconName(i)} testId={`icon-gallery-item-${i}`}>
              <mw-card-body>
                <div class="gallery-item">
                  <mw-icon icon={i} size="large"></mw-icon>
                  <p class="gallery-item-text">{i}</p>
                </div>
              </mw-card-body>
            </mw-card>
          ))}
        </div>
      </Host>
    );
  }
}
