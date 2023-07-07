// @ts-ignore
import fallback from "../../../.storybook/public/mw_logo.png";
import docs from "./mw-img.docs.mdx";

export default {
  title: "Components/Image",
  component: "mw-img",
  tags: ["autodocs"],
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
  <div style="height: 300px; width: 300px;">
    <mw-img
      lazy-load="${args.lazyLoad}"
      preload-src=${args.preloadSrc}
      src=${args.src}
      alt=${args.alt}
    ></mw-img>
  </div>
`;

export const Image = DefaultTemplate.bind({});
Image.args = {
  src: "https://i.pravatar.cc/1500?img=24",
  alt: "alt-text",
  lazyLoad: true,
  preloadSrc: "https://i.pravatar.cc/15?img=24",
};

const FallbackTemplate = args => `
  <div style="height: 300px; width: 300px;">
    <mw-img
      lazy-load="${args.lazyLoad}"
      src=${args.src}
      alt=${args.alt}
      fallback=${args.fallback}
    ></mw-img>
  </div>
`;

export const ImageWithFallback = FallbackTemplate.bind({});
ImageWithFallback.args = {
  src: "",
  fallback,
  alt: "alt-text",
  lazyLoad: true,
};

const SrcSetTemplate = args => `
  <div style="display: flex; gap: 12px;">
    <div style="height: 300px; width: 300px;">
      <mw-img
        lazy-load="${args.lazyLoad}"
        src=${args.src}
        alt=${args.alt}
        fallback=${args.fallback}
        srcset="${args.srcSet}"
        preload-src=${args.preloadSrc}
      ></mw-img>
    </div>
    <div style="height: 600px; width: 600px;">
      <mw-img
        lazy-load="${args.lazyLoad}"
        src=${args.src}
        alt=${args.alt}
        fallback=${args.fallback}
        srcset="${args.srcSet}"
        preload-src=${args.preloadSrc}
      ></mw-img>
    </div>
  </div>
`;
const randomImgId = 23;
export const ImageWithAdaptiveSizes = SrcSetTemplate.bind({});
ImageWithAdaptiveSizes.args = {
  src: `https://i.pravatar.cc/2400?img=${randomImgId}`,
  fallback,
  alt: "alt-text",
  lazyLoad: false,
  preloadSrc: `https://i.pravatar.cc/15?img=${randomImgId}`,
  srcSet: `https://i.pravatar.cc/300?img=${randomImgId} 300px, https://i.pravatar.cc/600?img=${randomImgId} 600px, https://i.pravatar.cc/1280?img=${randomImgId} 1280px`,
};

const PreloadTemplate = args => `
  <div style="height: 300px; width: 300px;">
    <mw-img
      lazy-load="${args.lazyLoad}"
      preload-src=${args.preloadSrc}
      src=${args.src}
      alt=${args.alt}
    ></mw-img>
  </div>
`;

export const ImageWithPreload = PreloadTemplate.bind({});
ImageWithPreload.args = {
  src: "",
  fallback,
  alt: "alt-text",
  lazyLoad: true,
  preloadSrc: "https://i.pravatar.cc/15?img=23",
};
