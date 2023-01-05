/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Size } from "./components/mw-avatar/mw-avatar";
import { ButtonSize, ButtonVariant, Target } from "./components/mw-button/mw-button";
import { Size as Size1 } from "./components/mw-avatar/mw-avatar";
export namespace Components {
    interface MwAvatar {
        /**
          * Alt text, first letter used as fallback when no src or icon given
         */
        "alt"?: string;
        /**
          * Icon name. Will be ignored if `src` is provided
         */
        "icon"?: string;
        /**
          * Size variant
         */
        "size"?: Size;
        /**
          * Image source
         */
        "src"?: string;
        /**
          * Test Id
         */
        "testId"?: string;
    }
    interface MwButton {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * If provided the button will act as a link
         */
        "href"?: string;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * Button size
         */
        "size"?: ButtonSize;
        /**
          * If using href the target prop can be provided
         */
        "target"?: Target;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
        /**
          * Button variants
         */
        "variant"?: ButtonVariant;
    }
    interface MwCard {
        /**
          * Use box-shadow for elevation style
         */
        "elevated"?: boolean;
        /**
          * Display outline
         */
        "outlined"?: boolean;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwCardBody {
    }
    interface MwCardFooter {
        /**
          * justify-content: center
         */
        "justifyCenter"?: boolean;
        /**
          * justify-content: end
         */
        "justifyEnd"?: boolean;
        /**
          * justify-content: flex-end
         */
        "justifyFlexEnd"?: boolean;
        /**
          * justify-content: flex-start
         */
        "justifyFlexStart"?: boolean;
        /**
          * justify-content: left
         */
        "justifyLeft"?: boolean;
        /**
          * justify-content: normal
         */
        "justifyNormal"?: boolean;
        /**
          * justify-content: right
         */
        "justifyRight"?: boolean;
        /**
          * justify-content: space-around
         */
        "justifySpaceAround"?: boolean;
        /**
          * justify-content: space-between
         */
        "justifySpaceBetween"?: boolean;
        /**
          * justify-content: space-evenly
         */
        "justifySpaceEvenly"?: boolean;
        /**
          * justify-content: start
         */
        "justifyStart"?: boolean;
    }
    interface MwCardHeader {
        "header": string;
        "subheader": string;
    }
    interface MwCardImage {
        /**
          * Alt text for the image
         */
        "alt": string;
        /**
          * Image source
         */
        "src": string;
    }
    interface MwCardTitle {
        "metadata": string;
        "subtitle": string;
        "title": string;
    }
    interface MwChip {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * Name identifier of icon to be displayed in chip
         */
        "icon"?: string;
        /**
          * Selection state that changes onToggle. Can be set as mutable prop.
         */
        "selected": boolean;
        /**
          * Flag wether to show close icon or not
         */
        "showClose"?: boolean;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwIcon {
        /**
          * Overwrite default color
         */
        "color"?: string;
        /**
          * The icon name to be rendered
         */
        "icon": string;
        /**
          * Size variant
         */
        "size": Size1;
    }
    interface MwSwitch {
        /**
          * Switch state
         */
        "checked": boolean;
        /**
          * Visually and functionally disable switch
         */
        "disabled"?: boolean;
        /**
          * Fixed label to be displayed next to the toggle switch
         */
        "label"?: string;
        /**
          * Label to be shown when switch state is unchecked. Overrides label prop
         */
        "offText"?: string;
        /**
          * Label to be shown when switch state is checked. Overrides label prop
         */
        "onText"?: string;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
}
export interface MwButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwButtonElement;
}
export interface MwChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwChipElement;
}
declare global {
    interface HTMLMwAvatarElement extends Components.MwAvatar, HTMLStencilElement {
    }
    var HTMLMwAvatarElement: {
        prototype: HTMLMwAvatarElement;
        new (): HTMLMwAvatarElement;
    };
    interface HTMLMwButtonElement extends Components.MwButton, HTMLStencilElement {
    }
    var HTMLMwButtonElement: {
        prototype: HTMLMwButtonElement;
        new (): HTMLMwButtonElement;
    };
    interface HTMLMwCardElement extends Components.MwCard, HTMLStencilElement {
    }
    var HTMLMwCardElement: {
        prototype: HTMLMwCardElement;
        new (): HTMLMwCardElement;
    };
    interface HTMLMwCardBodyElement extends Components.MwCardBody, HTMLStencilElement {
    }
    var HTMLMwCardBodyElement: {
        prototype: HTMLMwCardBodyElement;
        new (): HTMLMwCardBodyElement;
    };
    interface HTMLMwCardFooterElement extends Components.MwCardFooter, HTMLStencilElement {
    }
    var HTMLMwCardFooterElement: {
        prototype: HTMLMwCardFooterElement;
        new (): HTMLMwCardFooterElement;
    };
    interface HTMLMwCardHeaderElement extends Components.MwCardHeader, HTMLStencilElement {
    }
    var HTMLMwCardHeaderElement: {
        prototype: HTMLMwCardHeaderElement;
        new (): HTMLMwCardHeaderElement;
    };
    interface HTMLMwCardImageElement extends Components.MwCardImage, HTMLStencilElement {
    }
    var HTMLMwCardImageElement: {
        prototype: HTMLMwCardImageElement;
        new (): HTMLMwCardImageElement;
    };
    interface HTMLMwCardTitleElement extends Components.MwCardTitle, HTMLStencilElement {
    }
    var HTMLMwCardTitleElement: {
        prototype: HTMLMwCardTitleElement;
        new (): HTMLMwCardTitleElement;
    };
    interface HTMLMwChipElement extends Components.MwChip, HTMLStencilElement {
    }
    var HTMLMwChipElement: {
        prototype: HTMLMwChipElement;
        new (): HTMLMwChipElement;
    };
    interface HTMLMwIconElement extends Components.MwIcon, HTMLStencilElement {
    }
    var HTMLMwIconElement: {
        prototype: HTMLMwIconElement;
        new (): HTMLMwIconElement;
    };
    interface HTMLMwSwitchElement extends Components.MwSwitch, HTMLStencilElement {
    }
    var HTMLMwSwitchElement: {
        prototype: HTMLMwSwitchElement;
        new (): HTMLMwSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "mw-avatar": HTMLMwAvatarElement;
        "mw-button": HTMLMwButtonElement;
        "mw-card": HTMLMwCardElement;
        "mw-card-body": HTMLMwCardBodyElement;
        "mw-card-footer": HTMLMwCardFooterElement;
        "mw-card-header": HTMLMwCardHeaderElement;
        "mw-card-image": HTMLMwCardImageElement;
        "mw-card-title": HTMLMwCardTitleElement;
        "mw-chip": HTMLMwChipElement;
        "mw-icon": HTMLMwIconElement;
        "mw-switch": HTMLMwSwitchElement;
    }
}
declare namespace LocalJSX {
    interface MwAvatar {
        /**
          * Alt text, first letter used as fallback when no src or icon given
         */
        "alt"?: string;
        /**
          * Icon name. Will be ignored if `src` is provided
         */
        "icon"?: string;
        /**
          * Size variant
         */
        "size"?: Size;
        /**
          * Image source
         */
        "src"?: string;
        /**
          * Test Id
         */
        "testId"?: string;
    }
    interface MwButton {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * If provided the button will act as a link
         */
        "href"?: string;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
         */
        "onClickEmitter"?: (event: MwButtonCustomEvent<string>) => void;
        /**
          * Button size
         */
        "size"?: ButtonSize;
        /**
          * If using href the target prop can be provided
         */
        "target"?: Target;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
        /**
          * Button variants
         */
        "variant"?: ButtonVariant;
    }
    interface MwCard {
        /**
          * Use box-shadow for elevation style
         */
        "elevated"?: boolean;
        /**
          * Display outline
         */
        "outlined"?: boolean;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwCardBody {
    }
    interface MwCardFooter {
        /**
          * justify-content: center
         */
        "justifyCenter"?: boolean;
        /**
          * justify-content: end
         */
        "justifyEnd"?: boolean;
        /**
          * justify-content: flex-end
         */
        "justifyFlexEnd"?: boolean;
        /**
          * justify-content: flex-start
         */
        "justifyFlexStart"?: boolean;
        /**
          * justify-content: left
         */
        "justifyLeft"?: boolean;
        /**
          * justify-content: normal
         */
        "justifyNormal"?: boolean;
        /**
          * justify-content: right
         */
        "justifyRight"?: boolean;
        /**
          * justify-content: space-around
         */
        "justifySpaceAround"?: boolean;
        /**
          * justify-content: space-between
         */
        "justifySpaceBetween"?: boolean;
        /**
          * justify-content: space-evenly
         */
        "justifySpaceEvenly"?: boolean;
        /**
          * justify-content: start
         */
        "justifyStart"?: boolean;
    }
    interface MwCardHeader {
        "header"?: string;
        "subheader"?: string;
    }
    interface MwCardImage {
        /**
          * Alt text for the image
         */
        "alt"?: string;
        /**
          * Image source
         */
        "src"?: string;
    }
    interface MwCardTitle {
        "metadata"?: string;
        "subtitle"?: string;
        "title"?: string;
    }
    interface MwChip {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * Name identifier of icon to be displayed in chip
         */
        "icon"?: string;
        /**
          * 'close' event is fired when the close icon is clicked.
         */
        "onClose"?: (event: MwChipCustomEvent<any>) => void;
        /**
          * 'toggle' event is fired when the chip is clicked. Current selection state is emitted.
         */
        "onToggle"?: (event: MwChipCustomEvent<boolean>) => void;
        /**
          * Selection state that changes onToggle. Can be set as mutable prop.
         */
        "selected"?: boolean;
        /**
          * Flag wether to show close icon or not
         */
        "showClose"?: boolean;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwIcon {
        /**
          * Overwrite default color
         */
        "color"?: string;
        /**
          * The icon name to be rendered
         */
        "icon"?: string;
        /**
          * Size variant
         */
        "size"?: Size1;
    }
    interface MwSwitch {
        /**
          * Switch state
         */
        "checked"?: boolean;
        /**
          * Visually and functionally disable switch
         */
        "disabled"?: boolean;
        /**
          * Fixed label to be displayed next to the toggle switch
         */
        "label"?: string;
        /**
          * Label to be shown when switch state is unchecked. Overrides label prop
         */
        "offText"?: string;
        /**
          * Label to be shown when switch state is checked. Overrides label prop
         */
        "onText"?: string;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface IntrinsicElements {
        "mw-avatar": MwAvatar;
        "mw-button": MwButton;
        "mw-card": MwCard;
        "mw-card-body": MwCardBody;
        "mw-card-footer": MwCardFooter;
        "mw-card-header": MwCardHeader;
        "mw-card-image": MwCardImage;
        "mw-card-title": MwCardTitle;
        "mw-chip": MwChip;
        "mw-icon": MwIcon;
        "mw-switch": MwSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mw-avatar": LocalJSX.MwAvatar & JSXBase.HTMLAttributes<HTMLMwAvatarElement>;
            "mw-button": LocalJSX.MwButton & JSXBase.HTMLAttributes<HTMLMwButtonElement>;
            "mw-card": LocalJSX.MwCard & JSXBase.HTMLAttributes<HTMLMwCardElement>;
            "mw-card-body": LocalJSX.MwCardBody & JSXBase.HTMLAttributes<HTMLMwCardBodyElement>;
            "mw-card-footer": LocalJSX.MwCardFooter & JSXBase.HTMLAttributes<HTMLMwCardFooterElement>;
            "mw-card-header": LocalJSX.MwCardHeader & JSXBase.HTMLAttributes<HTMLMwCardHeaderElement>;
            "mw-card-image": LocalJSX.MwCardImage & JSXBase.HTMLAttributes<HTMLMwCardImageElement>;
            "mw-card-title": LocalJSX.MwCardTitle & JSXBase.HTMLAttributes<HTMLMwCardTitleElement>;
            "mw-chip": LocalJSX.MwChip & JSXBase.HTMLAttributes<HTMLMwChipElement>;
            "mw-icon": LocalJSX.MwIcon & JSXBase.HTMLAttributes<HTMLMwIconElement>;
            "mw-switch": LocalJSX.MwSwitch & JSXBase.HTMLAttributes<HTMLMwSwitchElement>;
        }
    }
}
