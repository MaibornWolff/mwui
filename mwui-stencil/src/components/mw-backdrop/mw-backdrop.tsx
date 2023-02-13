import { Component, Host, h, EventEmitter, Event, Listen, Prop } from "@stencil/core";

@Component({
  tag: "mw-backdrop",
  styleUrl: "mw-backdrop.css",
  shadow: true,
})
export class MwBackdrop {
  /**
   * determines whether the backdrop will be dismissed by click
   */
  @Prop() backdropDismiss = true;

  /**
   * Event after backdrop was clicked
   */
  @Event() backdropClick!: EventEmitter<void>;

  @Listen("click", { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent): void {
    this.emitClick(ev);
  }

  private emitClick(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();

    if (!this.backdropDismiss) {
      return;
    }

    this.backdropClick.emit();
  }

  render() {
    return (
      <Host>
        <div class="backdrop"></div>
      </Host>
    );
  }
}
