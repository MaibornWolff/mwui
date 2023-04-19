import "../../global/global.css";

export default {
  title: "Components/Avatar",
  component: "mw-avatar",
};

const DefaultTemplate = args => `
<mw-avatar src="${args.src}" alt="${args.alt}" size="${args.size}"></mw-avatar>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  testId: "avatar",
  src: "https://i.pravatar.cc/150?img=23",
  alt: "John Doe",
  size: "medium",
};

export const Large = DefaultTemplate.bind({});
Large.args = {
  testId: "avatar",
  src: "https://i.pravatar.cc/150?img=23",
  alt: "John Doe",
  size: "large",
};

export const Small = DefaultTemplate.bind({});
Small.args = {
  testId: "avatar",
  src: "https://i.pravatar.cc/150?img=23",
  alt: "John Doe",
  size: "small",
};

export const XSmall = DefaultTemplate.bind({});
XSmall.args = {
  testId: "avatar",
  src: "https://i.pravatar.cc/150?img=23",
  alt: "John Doe",
  size: "x-small",
};

const FallbackTemplate = args => `
<mw-avatar alt="${args.alt}" size="${args.size}"></mw-avatar>`;

export const Fallback = FallbackTemplate.bind({});
Fallback.args = {
  testId: "avatar",
  alt: "John Doe",
  size: "medium",
};

const IconTemplate = args => `
<mw-avatar size="${args.size}"><mw-icon icon="placeholder"></mw-icon></mw-avatar>`;

export const Icon = IconTemplate.bind({});
Icon.args = {
  testId: "avatar",
  size: "medium",
};
