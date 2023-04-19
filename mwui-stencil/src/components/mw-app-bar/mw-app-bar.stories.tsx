import "../../global/global.css";
import docs from "./mw-app-bar.docs.mdx";
import logo from "../../../.storybook/public/mw_logo.svg";

export default {
  title: "Components/AppBar",
  component: "mw-app-bar",
  parameters: {
    docs: { page: docs },
  },
};

const DefaultTemplate = args => `
<mw-app-bar position="${args.position}">
  <div slot="start">
    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>
    <img src="${logo}"/>
    <mw-app-bar-title>Company name</mw-app-bar-title>
  </div>
  <div slot="end">
    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>
  </div>
</mw-app-bar>`;

export const Default = DefaultTemplate.bind({});
Default.args = {};

const CenterTemplate = args => `
<mw-app-bar position="${args.position}">
  <div slot="start">
    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>
  </div>
  <div slot="center">
   <img src="${logo}"/>
</div>
  <div slot="end">
    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>
  </div>
</mw-app-bar>`;

export const Center = CenterTemplate.bind({});
Center.args = {};

const SearchTemplate = args => `
<mw-app-bar position="${args.position}">
  <div slot="start">
    <img src="${logo}"/>
    <mw-app-bar-title>Product name</mw-app-bar-title>
  </div>
  <div slot="end" style="width: 250px">
    <mw-textfield type="text" placeholder="Search things..." has-error="false">
      <mw-icon slot="icon-start" icon="search"></mw-icon>
    </mw-textfield>
    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>
   </div>

</mw-app-bar>`;

export const Search = SearchTemplate.bind({});
Search.args = {};
