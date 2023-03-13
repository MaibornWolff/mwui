import { Component, Host, State, h, Prop } from "@stencil/core";
import { icons } from "../../../icon-names";

@Component({
  tag: "mw-icon-gallery",
  styleUrl: "mw-icon-gallery.css",
  shadow: true,
})
export class MwIconGallery {
  /**
   * The icons that should be rendered
   */
  @Prop() icons: string[] = icons;

  @State() filteredIcons: string[] = [];
  @State() fill = false;
  @State() weight = 400;

  componentWillLoad(): void {
    this.filteredIcons = this.icons;
    this.weight = 400;
  }

  private onInput = (event: InputEvent & { target: { value: string } }): void => {
    const filterTerm = event.target.value.toLowerCase();
    this.filteredIcons = this.icons.filter(icon => icon.toLowerCase().includes(filterTerm));
  };

  private copyIconName = (name: string): void => {
    navigator.clipboard
      .writeText(name)
      .then(() => console.info(`Copied icon name "${name}"`))
      .catch(e => console.error("Failed to copy icon name", e));
  };

  private onToggleFill = (): void => {
    this.fill = !this.fill;
  };

  private onWeightChange = (event: InputEvent & { target: { value: number } }): void => {
    this.weight = event.target.value;
  };

  render() {
    return (
      <Host>
        <div class="gallery-toolbar">
          <mw-textfield class="gallery-filter" onInput={this.onInput} placeholder="Type to filter icons" id="icon-filter">
            <mw-icon icon="search" slot="icon-start"></mw-icon>
          </mw-textfield>
          <mw-slider inline label="Weight" onInput={this.onWeightChange} id="weight" name="weight" min={100} max={700} step={100} value={this.weight}></mw-slider>
          <mw-switch class="toggle-fill" label="filled styles" onInput={this.onToggleFill}></mw-switch>
        </div>
        <div class="hint">
          <mw-icon icon="content_copy" size="small"></mw-icon>Click item to copy icon name.
        </div>
        <div class="gallery">
          {this.filteredIcons.map(iconName => (
            <div class={`gallery-item-container ${iconName}`} onClick={() => this.copyIconName(iconName)}>
              <div class="gallery-item">
                <mw-icon fill={this.fill} icon={iconName} weight={this.weight} size="large"></mw-icon>
                <p class="gallery-item-text">{iconName.split("_").join(" ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
