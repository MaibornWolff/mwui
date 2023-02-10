import "../../global/global.css";
import docs from "./mw-icon.docs.mdx";

export default {
  title: "Components/Icon",
  component: "mw-icon",
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-icon icon="${args.icon}" weight="${args.weight}" fill="${args.fill}" size="${args.size}"></mw-icon>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: "icon",
  size: "medium",
  icon: "favorite",
  fill: false,
  weight: 400,
};

export const Fill = DefaultTemplate.bind({});
Fill.args = {
  testId: "icon",
  size: "medium",
  icon: "favorite",
  fill: true,
  weight: 400,
};

const ColorTemplate = args => `
<mw-icon icon="${args.icon}" size="${args.size}" color="${args.color}"></mw-icon>`;

export const Color = ColorTemplate.bind({});
Color.args = {
  testId: "icon",
  size: "medium",
  icon: "favorite",
  color: "#ff00ff",
};

const GalleryTemplate = () => "<mw-icon-gallery></mw-icon-gallery>";
export const IconGallery = GalleryTemplate.bind({});
