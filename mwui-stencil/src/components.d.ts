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
import { PopoverPlacement } from "./components/mw-popover/mw-popover";
import { PopoverPlacement as PopoverPlacement1 } from "./components/mw-popover/mw-popover";
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
          * Provide unique identifier for automated testing
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
          * Provide unique identifier for automated testing
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
    interface MwCheckbox {
        /**
          * Whether input is checked
         */
        "checked"?: boolean;
        /**
          * Whether input is disabled
         */
        "disabled"?: boolean;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * Name of checkbox input
         */
        "name"?: string;
        /**
          * Provide unique identifier for automated testing
         */
        "testId": string;
        /**
          * Value of checkbox input
         */
        "value"?: string;
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
          * Provide unique identifier for automated testing
         */
        "testId": string;
    }
    interface MwDivider {
        /**
          * Whether the divider is a middle-inset
         */
        "inset"?: boolean;
    }
    interface MwIcon {
        /**
          * Icon color
         */
        "color"?: string;
        /**
          * Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states.
         */
        "fill"?: boolean;
        /**
          * The icon name to be rendered
         */
        "icon": string;
        /**
          * This controls both optical size and font-size. Font-size can be set independently in styles. (Optical) size for the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. Optical size offers a way to automatically adjust the stroke weight when you increase or decrease the symbol size.
         */
        "size": Size1;
        /**
          * Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and bold (700). Weight can also affect the overall size of the symbol.
         */
        "weight": number;
    }
    interface MwIconGallery {
    }
    interface MwMenu {
        /**
          * Whether the menu is open
         */
        "open": boolean;
        /**
          * Placement relative to anchor element
         */
        "placement": PopoverPlacement;
        /**
          * Provide unique identifier for automated testing
         */
        "testId": string;
    }
    interface MwMenuItem {
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * Selected state
         */
        "selected"?: boolean;
        /**
          * Menu item subtitle
         */
        "subtitle"?: string;
        /**
          * Menu item title
         */
        "title": string;
    }
    interface MwMenuList {
        /**
          * Provide unique identifier for automated testing
         */
        "testId": string;
    }
    interface MwPopover {
        /**
          * If set to true, the popover can be closed by clicking outside
         */
        "dismissable"?: boolean;
        /**
          * Name used internally to reference anchor and content elements
         */
        "name"?: string;
        /**
          * disable default padding
         */
        "noPadding"?: boolean;
        /**
          * Whether the popover is visible
         */
        "open": boolean;
        /**
          * Placement relative to anchor element
         */
        "placement": PopoverPlacement;
        /**
          * Provide unique identifier for automated testing
         */
        "testId": string;
    }
    interface MwRadioButton {
        /**
          * Whether the radio button is checked
         */
        "checked"?: boolean;
        /**
          * Visually and functionally radio button
         */
        "disabled"?: boolean;
        /**
          * Analog to HTML 'name' attribute used to group radios for unique selection
         */
        "name": string;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
        /**
          * Value of the radio button
         */
        "value": string;
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
          * Provide unique identifier for automated testing
         */
        "testId": string;
    }
    interface MwTab {
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "selected"?: boolean;
    }
    interface MwTabs {
        /**
          * Dictates which tab is pre-selected. Omit if no tab should be pre-selected.
         */
        "selected": number | null;
        "testId": string;
    }
    interface MwTextfield {
        /**
          * Visually and functionally disabled input
         */
        "disabled"?: boolean;
        /**
          * Use to display input and helper-text in error state
         */
        "hasError"?: boolean;
        /**
          * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
         */
        "helperText"?: string;
        /**
          * Display label and input horizonally
         */
        "inline"?: boolean;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * input field name
         */
        "name": string;
        /**
          * Placeholder to be displayed
         */
        "placeholder"?: string;
        /**
          * Mark input as required
         */
        "required"?: boolean;
        /**
          * HTML Input type
         */
        "type"?: string;
        /**
          * input field value
         */
        "value"?: string | number;
    }
}
export interface MwButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwButtonElement;
}
export interface MwCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwCardElement;
}
export interface MwCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwCheckboxElement;
}
export interface MwChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwChipElement;
}
export interface MwMenuItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwMenuItemElement;
}
export interface MwSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwSwitchElement;
}
export interface MwTextfieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwTextfieldElement;
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
    interface HTMLMwCheckboxElement extends Components.MwCheckbox, HTMLStencilElement {
    }
    var HTMLMwCheckboxElement: {
        prototype: HTMLMwCheckboxElement;
        new (): HTMLMwCheckboxElement;
    };
    interface HTMLMwChipElement extends Components.MwChip, HTMLStencilElement {
    }
    var HTMLMwChipElement: {
        prototype: HTMLMwChipElement;
        new (): HTMLMwChipElement;
    };
    interface HTMLMwDividerElement extends Components.MwDivider, HTMLStencilElement {
    }
    var HTMLMwDividerElement: {
        prototype: HTMLMwDividerElement;
        new (): HTMLMwDividerElement;
    };
    interface HTMLMwIconElement extends Components.MwIcon, HTMLStencilElement {
    }
    var HTMLMwIconElement: {
        prototype: HTMLMwIconElement;
        new (): HTMLMwIconElement;
    };
    interface HTMLMwIconGalleryElement extends Components.MwIconGallery, HTMLStencilElement {
    }
    var HTMLMwIconGalleryElement: {
        prototype: HTMLMwIconGalleryElement;
        new (): HTMLMwIconGalleryElement;
    };
    interface HTMLMwMenuElement extends Components.MwMenu, HTMLStencilElement {
    }
    var HTMLMwMenuElement: {
        prototype: HTMLMwMenuElement;
        new (): HTMLMwMenuElement;
    };
    interface HTMLMwMenuItemElement extends Components.MwMenuItem, HTMLStencilElement {
    }
    var HTMLMwMenuItemElement: {
        prototype: HTMLMwMenuItemElement;
        new (): HTMLMwMenuItemElement;
    };
    interface HTMLMwMenuListElement extends Components.MwMenuList, HTMLStencilElement {
    }
    var HTMLMwMenuListElement: {
        prototype: HTMLMwMenuListElement;
        new (): HTMLMwMenuListElement;
    };
    interface HTMLMwPopoverElement extends Components.MwPopover, HTMLStencilElement {
    }
    var HTMLMwPopoverElement: {
        prototype: HTMLMwPopoverElement;
        new (): HTMLMwPopoverElement;
    };
    interface HTMLMwRadioButtonElement extends Components.MwRadioButton, HTMLStencilElement {
    }
    var HTMLMwRadioButtonElement: {
        prototype: HTMLMwRadioButtonElement;
        new (): HTMLMwRadioButtonElement;
    };
    interface HTMLMwSwitchElement extends Components.MwSwitch, HTMLStencilElement {
    }
    var HTMLMwSwitchElement: {
        prototype: HTMLMwSwitchElement;
        new (): HTMLMwSwitchElement;
    };
    interface HTMLMwTabElement extends Components.MwTab, HTMLStencilElement {
    }
    var HTMLMwTabElement: {
        prototype: HTMLMwTabElement;
        new (): HTMLMwTabElement;
    };
    interface HTMLMwTabsElement extends Components.MwTabs, HTMLStencilElement {
    }
    var HTMLMwTabsElement: {
        prototype: HTMLMwTabsElement;
        new (): HTMLMwTabsElement;
    };
    interface HTMLMwTextfieldElement extends Components.MwTextfield, HTMLStencilElement {
    }
    var HTMLMwTextfieldElement: {
        prototype: HTMLMwTextfieldElement;
        new (): HTMLMwTextfieldElement;
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
        "mw-checkbox": HTMLMwCheckboxElement;
        "mw-chip": HTMLMwChipElement;
        "mw-divider": HTMLMwDividerElement;
        "mw-icon": HTMLMwIconElement;
        "mw-icon-gallery": HTMLMwIconGalleryElement;
        "mw-menu": HTMLMwMenuElement;
        "mw-menu-item": HTMLMwMenuItemElement;
        "mw-menu-list": HTMLMwMenuListElement;
        "mw-popover": HTMLMwPopoverElement;
        "mw-radio-button": HTMLMwRadioButtonElement;
        "mw-switch": HTMLMwSwitchElement;
        "mw-tab": HTMLMwTabElement;
        "mw-tabs": HTMLMwTabsElement;
        "mw-textfield": HTMLMwTextfieldElement;
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
        "onClickEmitter"?: (event: MwButtonCustomEvent<any>) => void;
        /**
          * Button size
         */
        "size"?: ButtonSize;
        /**
          * If using href the target prop can be provided
         */
        "target"?: Target;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
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
        "onClickEmitter"?: (event: MwCardCustomEvent<any>) => void;
        /**
          * Display outline
         */
        "outlined"?: boolean;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
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
    interface MwCheckbox {
        /**
          * Whether input is checked
         */
        "checked"?: boolean;
        /**
          * Whether input is disabled
         */
        "disabled"?: boolean;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * Name of checkbox input
         */
        "name"?: string;
        "onEmitter"?: (event: MwCheckboxCustomEvent<any>) => void;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
        /**
          * Value of checkbox input
         */
        "value"?: string;
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
        "onEmitter"?: (event: MwChipCustomEvent<any>) => void;
        /**
          * Selection state that changes onToggle. Can be set as mutable prop.
         */
        "selected"?: boolean;
        /**
          * Flag wether to show close icon or not
         */
        "showClose"?: boolean;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
    }
    interface MwDivider {
        /**
          * Whether the divider is a middle-inset
         */
        "inset"?: boolean;
    }
    interface MwIcon {
        /**
          * Icon color
         */
        "color"?: string;
        /**
          * Fill gives you the ability to modify the default icon style. A single icon can render both unfilled and filled states.
         */
        "fill"?: boolean;
        /**
          * The icon name to be rendered
         */
        "icon"?: string;
        /**
          * This controls both optical size and font-size. Font-size can be set independently in styles. (Optical) size for the image to look the same at different sizes, the stroke weight (thickness) changes as the icon size scales. Optical size offers a way to automatically adjust the stroke weight when you increase or decrease the symbol size.
         */
        "size"?: Size1;
        /**
          * Weight defines the symbol’s stroke weight, with a range of weights between thin (100) and bold (700). Weight can also affect the overall size of the symbol.
         */
        "weight"?: number;
    }
    interface MwIconGallery {
    }
    interface MwMenu {
        /**
          * Whether the menu is open
         */
        "open"?: boolean;
        /**
          * Placement relative to anchor element
         */
        "placement"?: PopoverPlacement;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
    }
    interface MwMenuItem {
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        "onClickEmitter"?: (event: MwMenuItemCustomEvent<any>) => void;
        /**
          * Selected state
         */
        "selected"?: boolean;
        /**
          * Menu item subtitle
         */
        "subtitle"?: string;
        /**
          * Menu item title
         */
        "title"?: string;
    }
    interface MwMenuList {
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
    }
    interface MwPopover {
        /**
          * If set to true, the popover can be closed by clicking outside
         */
        "dismissable"?: boolean;
        /**
          * Name used internally to reference anchor and content elements
         */
        "name"?: string;
        /**
          * disable default padding
         */
        "noPadding"?: boolean;
        /**
          * Whether the popover is visible
         */
        "open"?: boolean;
        /**
          * Placement relative to anchor element
         */
        "placement"?: PopoverPlacement;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
    }
    interface MwRadioButton {
        /**
          * Whether the radio button is checked
         */
        "checked"?: boolean;
        /**
          * Visually and functionally radio button
         */
        "disabled"?: boolean;
        /**
          * Analog to HTML 'name' attribute used to group radios for unique selection
         */
        "name"?: string;
        /**
          * Must be provided for automated testing
         */
        "testId"?: string;
        /**
          * Value of the radio button
         */
        "value"?: string;
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
        "onEmitter"?: (event: MwSwitchCustomEvent<any>) => void;
        /**
          * Label to be shown when switch state is checked. Overrides label prop
         */
        "onText"?: string;
        /**
          * Provide unique identifier for automated testing
         */
        "testId"?: string;
    }
    interface MwTab {
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "selected"?: boolean;
    }
    interface MwTabs {
        /**
          * Dictates which tab is pre-selected. Omit if no tab should be pre-selected.
         */
        "selected"?: number | null;
        "testId"?: string;
    }
    interface MwTextfield {
        /**
          * Visually and functionally disabled input
         */
        "disabled"?: boolean;
        /**
          * Use to display input and helper-text in error state
         */
        "hasError"?: boolean;
        /**
          * HelperText to be displayed. Can be used as hint or error text when combined with `has-error`
         */
        "helperText"?: string;
        /**
          * Display label and input horizonally
         */
        "inline"?: boolean;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * input field name
         */
        "name"?: string;
        "onValueChanged"?: (event: MwTextfieldCustomEvent<string>) => void;
        /**
          * Placeholder to be displayed
         */
        "placeholder"?: string;
        /**
          * Mark input as required
         */
        "required"?: boolean;
        /**
          * HTML Input type
         */
        "type"?: string;
        /**
          * input field value
         */
        "value"?: string | number;
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
        "mw-checkbox": MwCheckbox;
        "mw-chip": MwChip;
        "mw-divider": MwDivider;
        "mw-icon": MwIcon;
        "mw-icon-gallery": MwIconGallery;
        "mw-menu": MwMenu;
        "mw-menu-item": MwMenuItem;
        "mw-menu-list": MwMenuList;
        "mw-popover": MwPopover;
        "mw-radio-button": MwRadioButton;
        "mw-switch": MwSwitch;
        "mw-tab": MwTab;
        "mw-tabs": MwTabs;
        "mw-textfield": MwTextfield;
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
            "mw-checkbox": LocalJSX.MwCheckbox & JSXBase.HTMLAttributes<HTMLMwCheckboxElement>;
            "mw-chip": LocalJSX.MwChip & JSXBase.HTMLAttributes<HTMLMwChipElement>;
            "mw-divider": LocalJSX.MwDivider & JSXBase.HTMLAttributes<HTMLMwDividerElement>;
            "mw-icon": LocalJSX.MwIcon & JSXBase.HTMLAttributes<HTMLMwIconElement>;
            "mw-icon-gallery": LocalJSX.MwIconGallery & JSXBase.HTMLAttributes<HTMLMwIconGalleryElement>;
            "mw-menu": LocalJSX.MwMenu & JSXBase.HTMLAttributes<HTMLMwMenuElement>;
            "mw-menu-item": LocalJSX.MwMenuItem & JSXBase.HTMLAttributes<HTMLMwMenuItemElement>;
            "mw-menu-list": LocalJSX.MwMenuList & JSXBase.HTMLAttributes<HTMLMwMenuListElement>;
            "mw-popover": LocalJSX.MwPopover & JSXBase.HTMLAttributes<HTMLMwPopoverElement>;
            "mw-radio-button": LocalJSX.MwRadioButton & JSXBase.HTMLAttributes<HTMLMwRadioButtonElement>;
            "mw-switch": LocalJSX.MwSwitch & JSXBase.HTMLAttributes<HTMLMwSwitchElement>;
            "mw-tab": LocalJSX.MwTab & JSXBase.HTMLAttributes<HTMLMwTabElement>;
            "mw-tabs": LocalJSX.MwTabs & JSXBase.HTMLAttributes<HTMLMwTabsElement>;
            "mw-textfield": LocalJSX.MwTextfield & JSXBase.HTMLAttributes<HTMLMwTextfieldElement>;
        }
    }
}
