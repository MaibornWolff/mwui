import "../../global/global.css";
import docs from "./mw-card.docs.mdx";

export default {
  title: "Components/Card",
  component: "mw-card",
  parameters: {
    docs: { page: docs },
  },
};

const BodyTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</mw-card-body>
</mw-card>`;

export const CardBody = BodyTemplate.bind({});
CardBody.args = {
  testId: "card",
  elevated: true,
  outlined: false,
};

const HeaderTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-header header="Header" subheader="Subheader">
    <mw-avatar slot="icon" src="https://i.pravatar.cc/150?img=23" alt="John Doe"></mw-avatar>
  </mw-card-header>
  <mw-card-body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</mw-card-body>
</mw-card>`;

export const CardHeader = HeaderTemplate.bind({});
CardHeader.args = {
  testId: "card",
  elevated: false,
  outlined: true,
};

const TitleTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-title title="Title" subtitle="Subtitle" metadata="Metadata"></mw-card-title>
  <mw-card-body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam.</mw-card-body>
  </mw-card>`;

export const CardTitle = TitleTemplate.bind({});
CardTitle.args = {
  testId: "card",
  elevated: true,
  outlined: false,
};

const FooterTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-title title="Title" subtitle="Subtitle" metadata="Metadata"></mw-card-title>
  <mw-card-body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam.</mw-card-body>
  <mw-card-footer>
    <mw-button label="Cancel" size="small" variant="outline"></mw-button>
    <mw-button label="Save" size="small"></mw-button>
  </mw-card-footer>
  </mw-card>`;

export const CardFooter = FooterTemplate.bind({});
CardFooter.args = {
  testId: "card",
  elevated: true,
  outlined: false,
};

const ImageTopTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-image src="${args.src}" alt="card image"></mw-card-image>
  <mw-card-title title="Title" subtitle="Subtitle" metadata="Metadata"></mw-card-title>
  <mw-card-footer>
    <mw-button label="Cancel" size="small" variant="outline"></mw-button>
    <mw-button label="Save" size="small"></mw-button>
  </mw-card-footer>
</mw-card>`;

export const CardImageTop = ImageTopTemplate.bind({});
CardImageTop.args = {
  testId: "card",
  elevated: true,
  outlined: false,
  src: "https://placedog.net/250/150?id=3",
};

const ImageBottomTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-title title="Title" subtitle="Subtitle" metadata="Metadata"></mw-card-title>
  <mw-card-image src="${args.src}" alt="card image"></mw-card-image>
</mw-card>`;

export const CardImageBottom = ImageBottomTemplate.bind({});
CardImageBottom.args = {
  testId: "card",
  elevated: true,
  outlined: false,
  src: "https://placedog.net/250/150?id=3",
};

const ImageSingleTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-image src="${args.src}" alt="card image"></mw-card-image>
</mw-card>`;

export const CardImageSingle = ImageSingleTemplate.bind({});
CardImageSingle.args = {
  testId: "card",
  elevated: true,
  outlined: false,
  src: "https://placedog.net/250/150?id=3",
};

const FullTemplate = args => `
<mw-card test-id="${args.testId}" elevated="${args.elevated}" outlined="${args.outlined}">
  <mw-card-header header="Header" subheader="Subheader"><mw-avatar slot="icon" src="https://i.pravatar.cc/150?img=23" alt="John Doe"></mw-card-header>
  <mw-card-image src="${args.src}" alt="card image"></mw-card-image>
  <mw-card-title text="Title" subtitle="Subtitle" metadata="Metadata"></mw-card-title>
  <mw-card-body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</mw-card-body>
  <mw-card-footer>
    <mw-button label="Cancel" size="small" variant="outline"></mw-button>
    <mw-button label="Save" size="small"></mw-button>
  </mw-card-footer>
  </mw-card>`;

export const CardFull = FullTemplate.bind({});
CardFull.args = {
  testId: "card",
  elevated: true,
  outlined: false,
  src: "https://placedog.net/250/150?id=3",
};
