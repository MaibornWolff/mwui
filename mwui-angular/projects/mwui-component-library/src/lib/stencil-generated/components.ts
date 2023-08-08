/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";

import { ProxyCmp, proxyOutputs } from "./angular-component-lib/utils";

import { Components } from "@maibornwolff/mwui-stencil";

@ProxyCmp({
    inputs: ["ariaRole", "position"],
})
@Component({
    selector: "mw-app-bar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["ariaRole", "position"],
})
export class MwAppBar {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAppBar extends Components.MwAppBar {}

@ProxyCmp({})
@Component({
    selector: "mw-app-bar-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [],
})
export class MwAppBarTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAppBarTitle extends Components.MwAppBarTitle {}

@ProxyCmp({
    inputs: [
        "disabled",
        "hasError",
        "helperText",
        "label",
        "layout",
        "maximum",
        "maximumText",
        "multiple",
        "name",
        "noSuggestionsText",
        "optionCounter",
        "placeholder",
        "readOnly",
        "required",
        "selection",
        "type",
        "value",
    ],
})
@Component({
    selector: "mw-autocomplete",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [
        "disabled",
        "hasError",
        "helperText",
        "label",
        "layout",
        "maximum",
        "maximumText",
        "multiple",
        "name",
        "noSuggestionsText",
        "optionCounter",
        "placeholder",
        "readOnly",
        "required",
        "selection",
        "type",
        "value",
    ],
})
export class MwAutocomplete {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["selectionChanged"]);
    }
}

export declare interface MwAutocomplete extends Components.MwAutocomplete {
    /**
     * Emits an event when its value changes
     */
    selectionChanged: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
    inputs: ["alt", "icon", "size", "src", "testId"],
})
@Component({
    selector: "mw-avatar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["alt", "icon", "size", "src", "testId"],
})
export class MwAvatar {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAvatar extends Components.MwAvatar {}

@ProxyCmp({
    inputs: ["backdropDismiss"],
})
@Component({
    selector: "mw-backdrop",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["backdropDismiss"],
})
export class MwBackdrop {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["backdropClick"]);
    }
}

export declare interface MwBackdrop extends Components.MwBackdrop {
    /**
     * Event after backdrop was clicked
     */
    backdropClick: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
    inputs: ["disabled", "href", "label", "size", "target", "testId", "variant"],
})
@Component({
    selector: "mw-button",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "href", "label", "size", "target", "testId", "variant"],
})
export class MwButton {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEmitter"]);
    }
}

export declare interface MwButton extends Components.MwButton {
    /**
     * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
     */
    clickEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["elevated", "outlined", "testId"],
})
@Component({
    selector: "mw-card",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["elevated", "outlined", "testId"],
})
export class MwCard {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEmitter"]);
    }
}

export declare interface MwCard extends Components.MwCard {
    /**
     * Emits an event when MwCard is clicked
     */
    clickEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({})
@Component({
    selector: "mw-card-body",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [],
})
export class MwCardBody {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardBody extends Components.MwCardBody {}

@ProxyCmp({
    inputs: [
        "justifyCenter",
        "justifyEnd",
        "justifyFlexEnd",
        "justifyFlexStart",
        "justifyLeft",
        "justifyNormal",
        "justifyRight",
        "justifySpaceAround",
        "justifySpaceBetween",
        "justifySpaceEvenly",
        "justifyStart",
    ],
})
@Component({
    selector: "mw-card-footer",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [
        "justifyCenter",
        "justifyEnd",
        "justifyFlexEnd",
        "justifyFlexStart",
        "justifyLeft",
        "justifyNormal",
        "justifyRight",
        "justifySpaceAround",
        "justifySpaceBetween",
        "justifySpaceEvenly",
        "justifyStart",
    ],
})
export class MwCardFooter {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardFooter extends Components.MwCardFooter {}

@ProxyCmp({
    inputs: ["header", "subheader"],
})
@Component({
    selector: "mw-card-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["header", "subheader"],
})
export class MwCardHeader {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardHeader extends Components.MwCardHeader {}

@ProxyCmp({
    inputs: ["alt", "height", "src"],
})
@Component({
    selector: "mw-card-image",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["alt", "height", "src"],
})
export class MwCardImage {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardImage extends Components.MwCardImage {}

@ProxyCmp({
    inputs: ["metadata", "subtitle", "text"],
})
@Component({
    selector: "mw-card-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["metadata", "subtitle", "text"],
})
export class MwCardTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardTitle extends Components.MwCardTitle {}

@ProxyCmp({
    inputs: ["checked", "disabled", "indeterminate", "label", "labelPosition", "name", "testId", "value"],
})
@Component({
    selector: "mw-checkbox",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["checked", "disabled", "indeterminate", "label", "labelPosition", "name", "testId", "value"],
})
export class MwCheckbox {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["emitter"]);
    }
}

export declare interface MwCheckbox extends Components.MwCheckbox {
    /**
     * MwCheckbox emits an event when checkbox checked state is changed
     */
    emitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["direction", "parentLabel", "value", "wrap"],
})
@Component({
    selector: "mw-checkbox-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["direction", "parentLabel", "value", "wrap"],
})
export class MwCheckboxGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkboxChange"]);
    }
}

export declare interface MwCheckboxGroup extends Components.MwCheckboxGroup {
    /**
     * Event emitted when radioGroup value changes (after radio selection)
     */
    checkboxChange: EventEmitter<CustomEvent<{ value?: Array<string | number> }>>;
}

@ProxyCmp({
    inputs: ["disabled", "icon", "selected", "showClose", "testId", "toggleable", "value"],
})
@Component({
    selector: "mw-chip",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "icon", "selected", "showClose", "testId", "toggleable", "value"],
})
export class MwChip {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwChipClick", "mwChipClose"]);
    }
}

export declare interface MwChip extends Components.MwChip {
    /**
     * MwChip emits an event when chip is clicked
     */
    mwChipClick: EventEmitter<CustomEvent<any>>;
    /**
     * MwChip emits an event when chip is closed
     */
    mwChipClose: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "maximum", "name", "optionCounter", "placeholder", "required", "selectedChips", "value"],
})
@Component({
    selector: "mw-chip-input",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "maximum", "name", "optionCounter", "placeholder", "required", "selectedChips", "value"],
})
export class MwChipInput {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChanged", "inputChange"]);
    }
}

export declare interface MwChipInput extends Components.MwChipInput {
    /**
     * Emits an event when its value changes
     */
    valueChanged: EventEmitter<CustomEvent<string[]>>;
    /**
     * Emits an event when value of input changes
     */
    inputChange: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
    inputs: ["inset"],
})
@Component({
    selector: "mw-divider",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["inset"],
})
export class MwDivider {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwDivider extends Components.MwDivider {}

@ProxyCmp({
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "name", "placeholder", "required", "value", "valueLabel"],
})
@Component({
    selector: "mw-dropdown",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "name", "placeholder", "required", "value", "valueLabel"],
})
export class MwDropdown {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChanged"]);
    }
}

export declare interface MwDropdown extends Components.MwDropdown {
    /**
     * MwDropdown emits an event when value changes
     */
    valueChanged: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
    inputs: ["hasError", "helperText"],
})
@Component({
    selector: "mw-helper-text",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["hasError", "helperText"],
})
export class MwHelperText {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwHelperText extends Components.MwHelperText {}

@ProxyCmp({
    inputs: ["color", "fill", "icon", "size", "weight"],
})
@Component({
    selector: "mw-icon",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["color", "fill", "icon", "size", "weight"],
})
export class MwIcon {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwIcon extends Components.MwIcon {}

@ProxyCmp({
    inputs: ["icons"],
})
@Component({
    selector: "mw-icon-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["icons"],
})
export class MwIconGallery {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwIconGallery extends Components.MwIconGallery {}

@ProxyCmp({
    inputs: ["alt", "fallback", "lazyLoad", "preloadSrc", "src", "srcset"],
})
@Component({
    selector: "mw-img",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["alt", "fallback", "lazyLoad", "preloadSrc", "src", "srcset"],
})
export class MwImg {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["imgDidLoad", "imgLoadError"]);
    }
}

export declare interface MwImg extends Components.MwImg {
    /**
     * Event emitted when image did load
     */
    imgDidLoad: EventEmitter<CustomEvent<any>>;
    /**
     * Event emitted when image could not be loaded
     */
    imgLoadError: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["label", "name", "required"],
})
@Component({
    selector: "mw-label",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["label", "name", "required"],
})
export class MwLabel {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwLabel extends Components.MwLabel {}

@ProxyCmp({
    inputs: ["href", "target", "underline"],
})
@Component({
    selector: "mw-link",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["href", "target", "underline"],
})
export class MwLink {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwLink extends Components.MwLink {}

@ProxyCmp({
    inputs: ["backgroundImage", "forgotPasswordHref", "headline", "layout", "logo", "signUpHref"],
})
@Component({
    selector: "mw-login",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["backgroundImage", "forgotPasswordHref", "headline", "layout", "logo", "signUpHref"],
})
export class MwLogin {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["submitEmitter"]);
    }
}

import type { LoginFormData as IMwLoginLoginFormData } from "@maibornwolff/mwui-stencil";

export declare interface MwLogin extends Components.MwLogin {
    /**
     * Event emitted after login button was clicked
     */
    submitEmitter: EventEmitter<CustomEvent<IMwLoginLoginFormData>>;
}

@ProxyCmp({
    inputs: ["open", "placement", "testId"],
})
@Component({
    selector: "mw-menu",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["open", "placement", "testId"],
})
export class MwMenu {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwMenu extends Components.MwMenu {}

@ProxyCmp({
    inputs: ["disabled", "selected", "subtitle", "text", "value"],
})
@Component({
    selector: "mw-menu-item",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "selected", "subtitle", "text", "value"],
})
export class MwMenuItem {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwMenuItemClick"]);
    }
}

export declare interface MwMenuItem extends Components.MwMenuItem {
    /**
     * MwMenuItem emits an event when its clicked
     */
    mwMenuItemClick: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["testId"],
})
@Component({
    selector: "mw-menu-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["testId"],
})
export class MwMenuList {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwMenuList extends Components.MwMenuList {}

@ProxyCmp({
    inputs: ["backdropDismiss", "dismissTrigger", "isOpen", "size", "trigger"],
    methods: ["present", "dismiss"],
})
@Component({
    selector: "mw-modal",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["backdropDismiss", "dismissTrigger", "isOpen", "size", "trigger"],
})
export class MwModal {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModal extends Components.MwModal {}

@ProxyCmp({})
@Component({
    selector: "mw-modal-footer",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [],
})
export class MwModalFooter {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModalFooter extends Components.MwModalFooter {}

@ProxyCmp({
    inputs: ["description", "headline"],
})
@Component({
    selector: "mw-modal-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["description", "headline"],
})
export class MwModalTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModalTitle extends Components.MwModalTitle {}

@ProxyCmp({
    inputs: ["closeOnClick", "disabled", "dismissable", "name", "noPadding", "open", "placement", "testId"],
})
@Component({
    selector: "mw-popover",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["closeOnClick", "disabled", "dismissable", "name", "noPadding", "open", "placement", "testId"],
})
export class MwPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwPopoverOpen"]);
    }
}

export declare interface MwPopover extends Components.MwPopover {
    /**
     * MwPopover emits an event when the value of the open prop changes
     */
    mwPopoverOpen: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["checked", "disabled", "label", "labelPosition", "name", "testId", "value"],
})
@Component({
    selector: "mw-radio",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["checked", "disabled", "label", "labelPosition", "name", "testId", "value"],
})
export class MwRadio {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwRadio extends Components.MwRadio {}

@ProxyCmp({
    inputs: ["direction", "value", "wrap"],
})
@Component({
    selector: "mw-radio-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["direction", "value", "wrap"],
})
export class MwRadioGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["radioChange"]);
    }
}

export declare interface MwRadioGroup extends Components.MwRadioGroup {
    /**
     * Event emitted when radioGroup value changes (after radio selection)
     */
    radioChange: EventEmitter<CustomEvent<{ value?: string | number }>>;
}

@ProxyCmp({
    inputs: ["disabled", "endIcon", "helperText", "inline", "label", "max", "min", "name", "startIcon", "step", "testId", "value"],
})
@Component({
    selector: "mw-slider",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "endIcon", "helperText", "inline", "label", "max", "min", "name", "startIcon", "step", "testId", "value"],
})
export class MwSlider {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwSlider extends Components.MwSlider {}

@ProxyCmp({
    inputs: ["checked", "disabled", "label", "labelPosition", "name", "off", "on", "testId"],
})
@Component({
    selector: "mw-switch",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["checked", "disabled", "label", "labelPosition", "name", "off", "on", "testId"],
})
export class MwSwitch {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["emitter"]);
    }
}

export declare interface MwSwitch extends Components.MwSwitch {
    /**
     * MwSwitch emits an event when switch checked state changes
     */
    emitter: EventEmitter<CustomEvent<boolean>>;
}

@ProxyCmp({
    inputs: ["disabled", "icon", "label", "selected"],
})
@Component({
    selector: "mw-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "icon", "label", "selected"],
})
export class MwTab {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwTab extends Components.MwTab {}

@ProxyCmp({
    inputs: ["selected", "testId"],
})
@Component({
    selector: "mw-tabs",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["selected", "testId"],
})
export class MwTabs {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["tabsClickEmitter"]);
    }
}

export declare interface MwTabs extends Components.MwTabs {
    /**
     * Emits an event when tab is changed
     */
    tabsClickEmitter: EventEmitter<CustomEvent<{ selected: number }>>;
}

@ProxyCmp({
    inputs: ["cols", "disabled", "form", "hasError", "helperText", "label", "maxlength", "name", "placeholder", "readonly", "required", "resize", "rows", "value"],
})
@Component({
    selector: "mw-textarea",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["cols", "disabled", "form", "hasError", "helperText", "label", "maxlength", "name", "placeholder", "readonly", "required", "resize", "rows", "value"],
})
export class MwTextarea {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["inputEmitter", "changeEmitter", "blurEmitter"]);
    }
}

export declare interface MwTextarea extends Components.MwTextarea {
    /**
     * emit input event
     */
    inputEmitter: EventEmitter<CustomEvent<string>>;
    /**
     * emit change event
     */
    changeEmitter: EventEmitter<CustomEvent<any>>;
    /**
     * emit blur event
     */
    blurEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "name", "placeholder", "readOnly", "required", "type", "value"],
})
@Component({
    selector: "mw-textfield",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "hasError", "helperText", "label", "layout", "name", "placeholder", "readOnly", "required", "type", "value"],
})
export class MwTextfield {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChanged"]);
    }
}

export declare interface MwTextfield extends Components.MwTextfield {
    /**
     * MwTextfield emits an event when textfield value changes
     */
    valueChanged: EventEmitter<CustomEvent<string>>;
}
