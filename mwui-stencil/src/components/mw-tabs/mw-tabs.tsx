import { Component, h, Element, Prop, State } from "@stencil/core";
import { Event, EventEmitter } from "@stencil/core/internal";

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

  /**
   * Emits an event when tab is changed
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  emitter: EventEmitter<{ selected: number }>;

  private handleClick(key: number): void {
    this.selected = key;
    this.emitter.emit({ selected: key });
  }

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
          <mw-tab key={key} icon={item.icon} label={item.label} selected={item.selected} disabled={item.disabled} onClick={() => this.handleClick(key)}></mw-tab>
        ))}
      </div>
    );
  }
}
