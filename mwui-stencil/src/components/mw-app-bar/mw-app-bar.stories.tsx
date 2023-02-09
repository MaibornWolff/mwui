import "../../global/global.css";
// @ts-ignore
import docs from "./mw-app-bar.docs.mdx";

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
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
    <mw-app-bar-title>Product name</mw-app-bar-title>
  </div>
  <div slot="end">
    <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
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
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
</div>
  <div slot="end">
    <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
  </div>
</mw-app-bar>`;

export const Center = CenterTemplate.bind({});
Center.args = {};

const SearchTemplate = args => `
<mw-app-bar position="${args.position}">
  <div slot="start">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
    <mw-app-bar-title>Product name</mw-app-bar-title>
  </div>
  <div slot="end" style="width: 250px">
    <mw-textfield type="text" placeholder="Search things..." has-error="false">
      <mw-icon slot="icon-start" icon="search"></mw-icon>
    </mw-textfield>
    <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
   </div>

</mw-app-bar>`;

export const Search = SearchTemplate.bind({});
Search.args = {};
