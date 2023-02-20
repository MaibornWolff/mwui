import { Component, Host, h, Prop, Element, Event, State, EventEmitter, Watch } from "@stencil/core";

export type SrcSetItem = {
  size: string;
  src: string;
};

@Component({
  tag: "mw-img",
  styleUrl: "mw-img.scss",
  shadow: true,
})
export class MwImg {
  private observer: IntersectionObserver;
  private imgElement: HTMLImageElement | null;

  @State() isLoaded = false;
  @State() srcSetState?: string;

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
  /**
   * URL of the image to be displayed when an error on load occurs
   */
  @Prop() fallback: string;

  /**
   * Different resolutions for different viewport sizes can be passed
   * e.g. "img/vasen-420.webp 420w,
   *       img/vasen-980.webp 980w,
   *       img/vasen-1680.webp 1680w,
   *       img/vasen-2400.webp 2400w"
   */
  @Prop() srcset: string | SrcSetItem[];
  @Watch("srcset") onSrcSet(srcset: string | SrcSetItem[]): void {
    /**
     *
     */
    this.setSrcSet(srcset);
  }

  connectedCallback(): void {
    if (this.srcset) {
      this.setSrcSet(this.srcset);
    }
  }

  componentDidLoad(): void {
    const { imgElement, lazyLoad } = this;

    if (imgElement && lazyLoad) {
      this.connectObserver(imgElement);
    } else {
      this.setSrc(imgElement);
    }
  }

  private setSrcSet(srcSet: string | SrcSetItem[]): void {
    this.srcSetState = Array.isArray(srcSet) ? srcSet.map(set => `${set.src} ${set.size}`).join(",") : srcSet;
  }

  private setSrc(imgEl: HTMLImageElement): void {
    if (imgEl.getAttribute("data-src")) {
      imgEl.setAttribute("src", imgEl.getAttribute("data-src"));
      imgEl.removeAttribute("data-src");
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

        this.setSrc(entry.target);
      }
    }
  };

  private onLoad(): void {
    this.isLoaded = true;
    this.imgDidLoad.emit();
  }

  private onError(): void {
    this.imgLoadError.emit();
    if (this.fallback) {
      this.imgElement.setAttribute("src", this.fallback);
    }
  }

  render() {
    const { src, alt, preloadSrc, isLoaded, srcSetState, onLoad, onError } = this;

    return (
      <Host class="mw-img">
        <img
          decoding="async"
          data-src={src}
          alt={alt}
          part="image"
          onLoad={onLoad.bind(this)}
          onError={onError.bind(this)}
          ref={el => (this.imgElement = el)}
          srcset={srcSetState}
        />
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
