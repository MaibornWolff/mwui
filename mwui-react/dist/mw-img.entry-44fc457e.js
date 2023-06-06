'use strict';

var index = require('./index-2d942898.js');

/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */

const mwImgCss = ":host{display:block;position:relative;width:100%;height:100%}:host img,:host span,:host .blur{display:block;position:absolute;top:0;left:0;width:100%;height:100%}:host #preload-img{z-index:2}:host .blur{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:3}";

const MwImg = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.imgDidLoad = index.createEvent(this, "imgDidLoad", 6);
    this.imgLoadError = index.createEvent(this, "imgLoadError", 6);
    this.onIntersection = async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (this.observer) {
            this.disconnectObserver();
          }
          this.setSrc(entry.target);
        }
      }
    };
    this.isLoaded = false;
    this.srcSetState = undefined;
    this.preloadSrc = undefined;
    this.src = undefined;
    this.alt = undefined;
    this.lazyLoad = true;
    this.fallback = undefined;
    this.srcset = undefined;
  }
  onSrcSet(srcset) {
    /**
     *
     */
    this.setSrcSet(srcset);
  }
  connectedCallback() {
    if (this.srcset) {
      this.setSrcSet(this.srcset);
    }
  }
  componentDidLoad() {
    const { imgElement, lazyLoad } = this;
    if (imgElement && lazyLoad) {
      this.connectObserver(imgElement);
    }
    else {
      this.setSrc(imgElement);
    }
  }
  setSrcSet(srcSet) {
    this.srcSetState = Array.isArray(srcSet) ? srcSet.map(set => `${set.src} ${set.size}`).join(",") : srcSet;
  }
  setSrc(imgEl) {
    if (imgEl.getAttribute("data-src")) {
      imgEl.setAttribute("src", imgEl.getAttribute("data-src"));
      imgEl.removeAttribute("data-src");
    }
  }
  connectObserver(el) {
    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.observe(el);
  }
  disconnectObserver() {
    this.observer.disconnect();
  }
  onLoad() {
    this.isLoaded = true;
    this.imgDidLoad.emit();
  }
  onError() {
    this.imgLoadError.emit();
    if (this.fallback) {
      this.imgElement.setAttribute("src", this.fallback);
    }
  }
  render() {
    const { src, alt, preloadSrc, isLoaded, srcSetState, onLoad, onError } = this;
    return (index.h(index.Host, { class: "mw-img" }, index.h("img", { decoding: "async", "data-src": src, alt: alt, part: "image", onLoad: onLoad.bind(this), onError: onError.bind(this), ref: el => (this.imgElement = el), srcset: srcSetState }), preloadSrc && !isLoaded && (index.h("span", null, index.h("img", { decoding: "sync", src: preloadSrc, alt: alt, id: "preload-img" }), index.h("div", { class: "blur" })))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "srcset": ["onSrcSet"]
  }; }
};
MwImg.style = mwImgCss;

exports.mw_img = MwImg;
