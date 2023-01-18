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
  @State() weight: number = 400;

  componentWillLoad() {
    this.filteredIcons = this.icons;
    this.weight = 400;
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

  private onWeightChange = (event: any) => {
    console.log(event.target.value);
    this.weight = event.target.value;
  };

  render() {
    return (
      <Host>
        <div class="gallery-toolbar">
          <mw-textfield class="gallery-filter" onInput={this.onInput} placeholder="Type to filter icons" id="icon-filter">
            <mw-icon icon="search" slot="icon-start"></mw-icon>
          </mw-textfield>
          <div>
            {/* TODO: replace with mw-slider once implemented */}
            <input onInput={this.onWeightChange} type="range" id="weight" name="weight" min="100" max="700" step="100" value={this.weight}></input>
            <label htmlFor="weight">Weight: {this.weight}</label>
          </div>
          <mw-switch label="filled styles" onInput={this.onToggleFill}></mw-switch>
        </div>
        <div class="hint">
          <mw-icon icon="content_copy" size="small"></mw-icon>Click item to copy icon name.
        </div>
        <div class="gallery">
          {this.filteredIcons.map(i => (
            <div class="gallery-item-container" onClick={() => this.copyIconName(i)}>
              <div class="gallery-item">
                <mw-icon fill={this.fill} icon={i} weight={this.weight} size="large"></mw-icon>
                <p class="gallery-item-text">{i.split('_').join(' ')}</p>
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
