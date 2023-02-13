import { Component, h, Host, Prop, State } from "@stencil/core";
import { LoginLayout, LoginLayoutEnum } from "./models/enums/login-layout.enum";

@Component({
  tag: "mw-login",
  styleUrl: "mw-login.scss",
  shadow: true,
})
export class MwLogin {
  @State() passwordType: "password" | "text" = "text";

  /**
   * Headline text
   */
  @Prop() headline?: string | undefined;
  /**
   * In which layout the Login component should be displayed
   */
  @Prop() layout: LoginLayout = LoginLayoutEnum.CENTER;

  /**
   * URL to the image that should be displayed
   */
  @Prop() backgroundImage?: string | undefined;

  /**
   * URL to the image that should be displayed
   */
  @Prop() logo?: string | undefined;

  /**
   * Wether or not the forgot password button should be displayed
   */
  @Prop() showForgotPasswordButton = true;

  /**
   * Wether or not the signUp prompt should be displayed
   */
  @Prop() showSignUpPrompt = true;

  private togglePasswordType(): void {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
  }

  render() {
    return (
      <Host>
        <mw-button label="Log In"></mw-button>
        <div class={`mw-login mw-login--${this.layout}`}>
          {this.backgroundImage && this.layout !== LoginLayoutEnum.CENTER && (
            <div class={`mw-login-background mw-login-background--${this.layout}`}>
              <img class="mw-login-background__image" src={this.backgroundImage} />
            </div>
          )}
          <div class={`mw-login-container mw-login-container--${this.layout}`}>
            {this.logo && (
              <div class="mw-login-container__logo">
                <img src={this.logo} />
              </div>
            )}
            {this.headline && <div class="mw-login-container__headline">{this.headline}</div>}

            <form class="mw-login-container__form">
              <mw-textfield id="email" type="email" label="Email address" required={true}>
                <mw-icon icon="mail" slot="icon-end"></mw-icon>
              </mw-textfield>
              <mw-textfield id="password" type={this.passwordType} label="Password" required={true} helper-text="min. 7 characters, 1 upper case, 1 lower case">
                <mw-icon icon="remove_red_eye" slot="icon-end" onClick={this.togglePasswordType}></mw-icon>
              </mw-textfield>
            </form>

            <div class="mw-login-container__user-actions">
              <mw-checkbox label="Remember me"></mw-checkbox>
              <span class="spacefiller"></span>
              {this.showForgotPasswordButton && <mw-link href="">Forgot your password?</mw-link>}
            </div>

            <mw-button label="Log In"></mw-button>

            {this.showSignUpPrompt && (
              <div class="mw-login-container__sign-up">
                Dont't have an account?{" "}
                <mw-link href="" underline={true}>
                  Sign up
                </mw-link>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
