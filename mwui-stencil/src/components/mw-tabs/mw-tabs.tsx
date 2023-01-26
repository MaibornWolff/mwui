import { Component, h, Element, Prop, State } from "@stencil/core";

@Component({
  tag: "mw-tabs",
  styleUrl: "mw-tabs.css",
  shadow: true,
})
export class MwTabs {
  @Element() host: HTMLMwTabsElement;
  /**
   * Test Id
   */
  @Prop() testId: string;
  /**
   * Dictates which tab is pre-selected. Omit if no tab should be pre-selected.
   */
  @Prop({ mutable: true, reflect: true }) selected: number | null = null;
  @State() tabs = [];

  componentWillRender(): void {
    this.tabs = [];
    for (let i = 0; i < this.host.children.length; i++) {
      this.host.children[i].setAttribute("index", i.toString());
      if (i === this.selected) {
        this.host.children[i].setAttribute("selected", "");
        this.tabs.push(this.host.children[i]);
      } else {
        this.host.children[i].removeAttribute("selected");
        this.tabs.push(this.host.children[i]);
      }
    }
  }

  render() {
    return (
      <div test-id={this.testId} class="mw-tabs">
        {this.tabs.map((item, key) => (
          <mw-tab key={key} icon={item.icon} label={item.label} selected={item.selected} disabled={item.disabled} onClick={() => (this.selected = key)}></mw-tab>
        ))}
      </div>
    );
  }
}
