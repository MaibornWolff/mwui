import "../../global/global.css";

export default {
  title: "Components/Header",
  component: "mw-header",
  // parameters: {
  //   docs: { page: docs },
  // },
};

const DefaultTemplate = () => `
<mw-header>
    <div slot="header-group-start">
        <mw-icon icon="menu" size="medium"></mw-icon>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
        <mw-header-title>
            Product Name
        </mw-header-title>
    </div>
    <div slot="header-group-end">
      <mw-avatar src="https://i.pravatar.cc/150" alt="John Doe"></mw-avatar>
    </div>
</mw-header>`;

const SearchTemplate = () => `
<mw-header>
    <div slot="header-group-start">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
        <mw-header-title>
            Employee Search
        </mw-header-title>
    </div>
    <div slot="header-group-end">
    <mw-textfield
      name="Search"
      placeholder="Search..."
    >
      <mw-icon icon="search" slot="icon-start" size="medium"></mw-icon>
      <mw-icon icon="close" slot="icon-end" size="medium"></mw-icon>
    </mw-textfield>
      <mw-avatar src="https://i.pravatar.cc/150" alt="John Doe"></mw-avatar>
    </div>
</mw-header>`;

const CenterTemplate = () => `
<mw-header>
      <div slot="header-group-start">
        <mw-icon icon="menu" size="medium"></mw-icon>
    </div>
    <div slot="header-group-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAwCAYAAAC13uL+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZpJaBRBFIb/Vz2TcY2JM+IGitEEVKJicBcNLkRB8aAXFxQxihqNigt4cMGIiAsievAgeFHEIOICCuIhKORilJCEkKAYDIoe1ISELLN0l686MyGbWXo6S0t/UFPvvaqprr9f9UY3oQ9I5CcA1SsBsYq9+VxmcziZC8cR4vKbSzHHP3Kf14Tjhd2NN7qoMuAbI7M0iqwgCs8TIpTCdSIhJDQRbmT/JyFYKESwFD6Z/9m/4xv6APWmk8S1qdw1l83t7I1H71GTucXa7xBy62LBpJIfKzWfcYwotI7F+ASFQCIM9qEpm8IQXEiEuA62xEVQ+UWa0G+W+w8+4JnLnjZO3Ys6n8j79wxb+9kdBev84nIuqSLnFekNNyH0jUJEBZhCeidOxcA2Z/ST0IL7ypJPF3S3UYF/CrueBox8x9aJOIUpAk+zUm+PqWn4IklsRNzIVDLwJr0m70J3vbrMnMTVTG56gpbjKW6u7F2AvCMLec9HzKyYmYkrc0Gzn6p5nIci0Zv9gc43dtyu6CzsxjIe4aVdwvIOLcWF3KXoL/jA2yrr6h9lykxPxzbRvuOV6UDkGZvDYQP3Nqfj8r4l6G8kYUNDw5y7HeOt4vjkwbb2grPmhw1UpPhx+OxaDBQGsGtR/YGctrE2mRt5kSXOhE3subSe92ivrjS2IYV+cUVT9rSYb4rj42wiV8dgE/nrZ8riWX25HNoFJYWkfjTmRTOnH+KGYbCJ69kLMWgQdmfUbQ0oMyqOdsMmymf4UZYaGNj12A452uvxbFOW4DMkn/rlRNjE3S1ze7wt6m8I+k5Vc+ZoDWzk/dxJg5i1KAKzMmSGVy3LdMQHn4VRrwzdI2Rp2jjEg5QyCFX6QBd7c/iwyPTlKnNxiKOvPJ3VwAj11LCpcsrY2rBXWB9O0n14E2agWU+BjFwFYHmJSwOTPREYAQ+sToj2E04WRJ3nB3aV8BMEbsMCfCP8PZhs5PzxL449Gp2aVv1sHjRYuhOQ0pggWFgCLBMpbus9zkqrglWIqtoIM+H1/hYW4fuHUXGsoc40en0GhhC2ihtquOKciivOqbjinIorzqm44pyKK86puOKciivOqbjinIorzqm44pyKK86puOKcyn8tTn11U8vvRCKwARJoluZ4nVrML2FaES22bGkxawOyqeO/BGSzOb/o31XRSL3BUT8yNjJig6mI5E5qeAI1/wW0HxlP85CyugAAAABJRU5ErkJggg=="/>
    </div>
    <div slot="header-group-end">
      <mw-avatar src="https://i.pravatar.cc/150" alt="John Doe"></mw-avatar>
    </div>
</mw-header>`;

export const Default = DefaultTemplate.bind({});
export const Search = SearchTemplate.bind({});
export const Center = CenterTemplate.bind({});
Default.args = {};
Search.args = {};
Center.args = {};
