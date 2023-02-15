import "../../global/global.css";

export default {
  title: "Components/Image",
  component: "mw-img",
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

export const Default = DefaultTemplate.bind({});
Default.args = {
  src: "https://i.pravatar.cc/1500?img=24",
  alt: "alt-text",
  lazyLoad: true,
  preloadSrc: "https://i.pravatar.cc/15?img=24",
};
