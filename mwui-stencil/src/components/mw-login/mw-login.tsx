import { Component, Event, EventEmitter, h, Host, Prop, State } from "@stencil/core";
import { LoginLayout, LoginLayoutEnum } from "./models/enums/login-layout.enum";
import { LoginFormData } from "./models/interfaces/login-form-data";

@Component({
  tag: "mw-login",
  styleUrl: "./mw-login.scss",
  shadow: true,
})
export class MwLogin {
  private loginForm: HTMLFormElement;

  @State() passwordType: "password" | "text" = "password";

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
   * Wether or not the signUp prompt should be displayed
   */
  @Prop() signUpHref?: string;

  /**
   * Wether or not the forgot password button should be displayed
   */
  @Prop() forgotPasswordHref?: string;

  /**
   * Event emitted after login button was clicked
   */
  @Event({
    bubbles: true,
    cancelable: false,
    composed: false,
  })
  submitEmitter: EventEmitter<LoginFormData>;

  constructor() {
    this.togglePasswordType = this.togglePasswordType.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  private togglePasswordType(): void {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
  }

  private submitLoginForm(): void {
    const formData: LoginFormData = {
      email: "",
      password: "",
    };

    Array.from(this.loginForm.children).forEach((child: HTMLMwTextfieldElement) => {
      formData[child.name] = child.value;
    });

    this.submitEmitter.emit(formData);
  }

  render() {
    return (
      <Host>
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

            <form class="mw-login-container__form" ref={el => (this.loginForm = el as HTMLFormElement)}>
              <mw-textfield id="email" name="email" type="email" label="Email address" required={true}>
                <mw-icon icon="mail" slot="icon-end"></mw-icon>
              </mw-textfield>

              <mw-textfield id="password" name="password" type={this.passwordType} label="Password" required={true} helper-text="min. 7 characters, 1 upper case, 1 lower case">
                <mw-icon icon={this.passwordType === "text" ? "visibility_off" : "visibility"} slot="icon-end" onClick={this.togglePasswordType}></mw-icon>
              </mw-textfield>
            </form>

            <div class="mw-login-container__user-actions">
              <mw-checkbox label="Remember me"></mw-checkbox>
              <span class="spacefiller"></span>
              {this.forgotPasswordHref && <mw-link href={this.forgotPasswordHref}>Forgot your password?</mw-link>}
            </div>

            <mw-button label="Log In" onClick={this.submitLoginForm} id="submit"></mw-button>

            {this.signUpHref && (
              <div class="mw-login-container__sign-up">
                Dont't have an account?{" "}
                <mw-link href={this.signUpHref} underline={true}>
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
