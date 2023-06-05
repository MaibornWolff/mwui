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
      forgot-password-href="${args.forgotPasswordHref}"
      sign-up-href="${args.signUpHref}"
    ></mw-login>
`;
export const MwLogin = Template.bind({});
MwLogin.args = {
  headline: "Log in to your account",
  layout: LoginLayoutEnum.CENTER,
  backgroundImage,
  logo,
  forgotPasswordHref: "url-to-password-reset",
  signUpHref: "url-to-sign-up",
};

MwLogin.parameters = {
  layout: "fullscreen",
};

const LoginTemplateWithImage = args => `
    <mw-login
      headline="${args.headline}"
      layout="${args.layout}"
      background-image="${args.backgroundImage}"
      logo="${args.logo}"
      forgot-password-href="${args.forgotPasswordHref}"
      sign-up-href="${args.signUpHref}"
    ></mw-login>
`;
export const MwLoginWithImage = LoginTemplateWithImage.bind({});
MwLoginWithImage.args = {
  headline: "Log in to your account",
  layout: LoginLayoutEnum.END,
  backgroundImage,
  logo,
  forgotPasswordHref: "url-to-password-reset",
  signUpHref: "url-to-sign-up",
};

MwLoginWithImage.parameters = {
  layout: "CENTER",
};
