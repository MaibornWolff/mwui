import { Component, Element, Host, h, State } from "@stencil/core";

@Component({
  tag: "mw-autocomplete",
  styleUrl: "mw-autocomplete.css",
  shadow: true,
})
export class MwAutocomplete {
  @Element() host: HTMLMwAutocompleteElement;
  @State() selectedItems = [];
  componentWillRender(): void {
    const items = this.host.children;
    this.selectedItems = [];
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", event => {
        console.log("clicked", event);
      });
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i].getAttribute("selected") === "true") {
        items[i].setAttribute("disabled", "true");
        this.selectedItems.push(items[i].getAttribute("title"));
      }
    }
    console.log(this.selectedItems);
  }
  render() {
    return (
      <Host>
        <mw-textfield multiple={true} placeholder="Select options" label="Autocomplete" helperText="Multiple options possible">
          {this.selectedItems.map((item, key) => (
            <mw-chip slot="multiple" key={key} showClose>
              {item}
            </mw-chip>
          ))}
          <div id="dropdown-menu" slot="dropdown-menu">
            <slot></slot>
          </div>
        </mw-textfield>
      </Host>
    );
  }
}
