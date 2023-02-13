import "../../global/global.css";
import logo from "../../../.storybook/public/mw_logo.svg";
// @ts-ignore
import backgroundImage from "../../../.storybook/public/login_bg.png";
import { LoginLayoutEnum } from "./models/enums/login-layout.enum";

export default {
  title: "Components/Login",
  component: "mw-login",
};

const Template = args => `
    <mw-login
      headline="${args.headline}"
      layout="${args.layout}"
      background-image="${args.backgroundImage}"
      logo="${args.logo}"
      show-forgot-password-button="${args.showForgotPasswordButton}"
      show-sign-up-prompt="${args.showSignUpPrompt}"
    ></mw-login>
`;
export const Default = Template.bind({});
Default.args = {
  headline: "Log in to your account",
  layout: LoginLayoutEnum.CENTER,
  backgroundImage,
  logo,
  showForgotPasswordButton: true,
  showSignupPrompt: true,
};

Default.parameters = {
  layout: "fullscreen",
};
