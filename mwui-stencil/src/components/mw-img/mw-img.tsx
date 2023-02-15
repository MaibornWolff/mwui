import { Component, Host, h, Prop, Element, Event, State, EventEmitter } from "@stencil/core";

@Component({
  tag: "mw-img",
  styleUrl: "mw-img.scss",
  shadow: true,
})
export class MwImg {
  private observer: IntersectionObserver;
  private imgElement: HTMLImageElement | null;

  @State() isLoaded = false;

  @Element() el: HTMLMwImgElement;

  /**
   * Event emitted when image did load
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: true,
  })
  imgDidLoad: EventEmitter;

  /**
   * Event emitted when image could not be loaded
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: true,
  })
  imgLoadError: EventEmitter;

  /**
   * Image source for preload
   */
  @Prop() preloadSrc: string;
  /**
   * Image source
   */
  @Prop() src: string;
  /**
   * Alt text for the image
   */
  @Prop() alt: string;
  /**
   * If the image should be lazy loaded
   */
  @Prop() lazyLoad = true;

  componentDidLoad(): void {
    const { imgElement, lazyLoad } = this;

    if (imgElement && lazyLoad) {
      this.connectObserver(imgElement);
    }
  }

  private connectObserver(el: HTMLElement): void {
    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.observe(el);
  }

  private disconnectObserver(): void {
    this.observer.disconnect();
  }

  private onIntersection = async (entries): Promise<void> => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
          this.disconnectObserver();
        }

        if (entry.target.getAttribute("data-src")) {
          entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
          entry.target.removeAttribute("data-src");
        }
      }
    }
  };

  private onLoad(): void {
    this.isLoaded = true;
    this.imgDidLoad.emit();
  }

  private onError(): void {
    this.imgLoadError.emit();
  }

  render() {
    const { src, alt, preloadSrc, isLoaded, onLoad, onError } = this;

    return (
      <Host class="mw-img">
        <img decoding="async" data-src={src} alt={alt} part="image" onLoad={onLoad.bind(this)} onError={onError.bind(this)} ref={el => (this.imgElement = el)} />
        {preloadSrc && !isLoaded && (
          <span>
            <img decoding="sync" src={preloadSrc} alt={alt} id="preload-img" />
            <div class="blur"></div>
          </span>
        )}
      </Host>
    );
  }
}
