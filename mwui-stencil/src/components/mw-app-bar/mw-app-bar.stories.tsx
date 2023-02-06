import "../../global/global.css";
// @ts-ignore
import docs from "./mw-app-bar.docs.mdx";

export default {
  title: "Molecules/AppBar",
  component: "mw-app-bar",
  parameters: {
    docs: { page: docs },
  },
};

const AppBarWithSearch = args => `
<mw-app-bar position="${args.position}">
  <h3 slot="start">Product Name</h3>
  <div slot="end" style="width: 250px">
    <mw-textfield type="text" placeholder="Search things..." has-error="false">
      <mw-icon slot="icon-start" icon="search"></mw-icon>
    </mw-textfield>
   </div>
  <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
</mw-app-bar>`;

export const WithSearch = AppBarWithSearch.bind({});
WithSearch.args = {
  position: "fixed",
};

const AppBarWithMenu = args => `
<mw-app-bar position="${args.position}">
  <mw-icon slot="start" icon="menu" size="medium"></mw-icon>
  <h3 slot="start">Product Name</h3>
  <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
</mw-app-bar>`;

export const WithMenu = AppBarWithMenu.bind({});
WithMenu.args = {
  position: "fixed",
};
