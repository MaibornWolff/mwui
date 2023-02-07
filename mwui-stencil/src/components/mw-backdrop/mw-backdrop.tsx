import { Component, Host, h, EventEmitter, Event, Listen } from "@stencil/core";

@Component({
  tag: "mw-backdrop",
  styleUrl: "mw-backdrop.css",
  shadow: true,
})
export class MwBackdrop {
  @Event() ionBackdropTap!: EventEmitter<void>;

  @Listen("click", { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent) {
    this.emitTap(ev);
  }

  private emitTap(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.ionBackdropTap.emit();
  }

  render() {
    return (
      <Host>
        <div class="backdrop"></div>
      </Host>
    );
  }
}
