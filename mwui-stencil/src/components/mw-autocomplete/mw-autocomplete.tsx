import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "mw-autocomplete",
  styleUrl: "mw-autocomplete.css",
  shadow: true,
})
export class MwAutocomplete {
  render() {
    return (
      <Host>
        <mw-textfield multiple={true} placeholder="Select options" label="Autocomplete" helperText="Multiple options possible">
          <div slot="dropdown-menu">
            <slot></slot>
          </div>
        </mw-textfield>
      </Host>
    );
  }
}
