/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./angular-component-lib/utils";

import { Components } from "@maibornwolff/mwui-stencil";

export declare interface MwAppBar extends Components.MwAppBar {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["ariaRole", "position"],
})
@Component({
    selector: "mw-app-bar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["ariaRole", "position"],
})
export class MwAppBar {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAppBarTitle extends Components.MwAppBarTitle {}

@ProxyCmp({
    defineCustomElementFn: undefined,
})
@Component({
    selector: "mw-app-bar-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
})
export class MwAppBarTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAutocomplete extends Components.MwAutocomplete {}

@ProxyCmp({
    defineCustomElementFn: undefined,
})
@Component({
    selector: "mw-autocomplete",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
})
export class MwAutocomplete {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwAvatar extends Components.MwAvatar {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["alt", "icon", "size", "src", "testId"],
})
@Component({
    selector: "mw-avatar",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["alt", "icon", "size", "src", "testId"],
})
export class MwAvatar {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwBackdrop extends Components.MwBackdrop {
    /**
     * Event after backdrop was clicked
     */
    backdropClick: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["backdropDismiss"],
})
@Component({
    selector: "mw-backdrop",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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

export declare interface MwButton extends Components.MwButton {
    /**
     * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
     */
    clickEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "href", "label", "size", "target", "testId", "variant"],
})
@Component({
    selector: "mw-button",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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

export declare interface MwCard extends Components.MwCard {
    /**
     * Emits an event when MwCard is clicked
     */
    clickEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["elevated", "outlined", "testId"],
})
@Component({
    selector: "mw-card",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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

export declare interface MwCardBody extends Components.MwCardBody {}

@ProxyCmp({
    defineCustomElementFn: undefined,
})
@Component({
    selector: "mw-card-body",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
})
export class MwCardBody {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardFooter extends Components.MwCardFooter {}

@ProxyCmp({
    defineCustomElementFn: undefined,
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

export declare interface MwCardHeader extends Components.MwCardHeader {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["header", "subheader"],
})
@Component({
    selector: "mw-card-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["header", "subheader"],
})
export class MwCardHeader {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardImage extends Components.MwCardImage {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["alt", "src"],
})
@Component({
    selector: "mw-card-image",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["alt", "src"],
})
export class MwCardImage {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCardTitle extends Components.MwCardTitle {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["metadata", "subtitle", "title"],
})
@Component({
    selector: "mw-card-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["metadata", "subtitle", "title"],
})
export class MwCardTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwCheckbox extends Components.MwCheckbox {
    /**
     * MwCheckbox emits an event when checkbox checked state is changed
     */
    emitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
@Component({
    selector: "mw-checkbox",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
export class MwCheckbox {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["emitter"]);
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
    defineCustomElementFn: undefined,
    inputs: ["disabled", "icon", "selected", "showClose", "testId", "value"],
})
@Component({
    selector: "mw-chip",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["disabled", "icon", "selected", "showClose", "testId", "value"],
})
export class MwChip {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwChipClick", "mwChipClose"]);
    }
}

export declare interface MwDivider extends Components.MwDivider {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["inset"],
})
@Component({
    selector: "mw-divider",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["inset"],
})
export class MwDivider {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwDropdown extends Components.MwDropdown {
    /**
     * MwDropdown emits an event when value changes
     */
    valueChanged: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "hasError", "helperText", "inline", "label", "name", "placeholder", "required", "value", "valueLabel"],
})
@Component({
    selector: "mw-dropdown",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["disabled", "hasError", "helperText", "inline", "label", "name", "placeholder", "required", "value", "valueLabel"],
})
export class MwDropdown {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChanged"]);
    }
}

export declare interface MwIcon extends Components.MwIcon {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["color", "fill", "icon", "size", "weight"],
})
@Component({
    selector: "mw-icon",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["color", "fill", "icon", "size", "weight"],
})
export class MwIcon {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwIconGallery extends Components.MwIconGallery {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["icons"],
})
@Component({
    selector: "mw-icon-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["icons"],
})
export class MwIconGallery {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
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
    defineCustomElementFn: undefined,
    inputs: ["alt", "fallback", "lazyLoad", "preloadSrc", "src", "srcset"],
})
@Component({
    selector: "mw-img",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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

export declare interface MwLink extends Components.MwLink {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["href", "target", "underline"],
})
@Component({
    selector: "mw-link",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["href", "target", "underline"],
})
export class MwLink {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

import type { LoginFormData as IMwLoginLoginFormData } from "@maibornwolff/mwui-stencil";
export declare interface MwLogin extends Components.MwLogin {
    /**
     * Event emitted after login button was clicked
     */
    submit: EventEmitter<CustomEvent<IMwLoginLoginFormData>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["backgroundImage", "forgotPasswordHref", "headline", "layout", "logo", "signUpHref"],
})
@Component({
    selector: "mw-login",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["backgroundImage", "forgotPasswordHref", "headline", "layout", "logo", "signUpHref"],
})
export class MwLogin {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["submit"]);
    }
}

export declare interface MwMenu extends Components.MwMenu {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["open", "placement", "testId"],
})
@Component({
    selector: "mw-menu",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["open", "placement", "testId"],
})
export class MwMenu {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwMenuItem extends Components.MwMenuItem {
    /**
     * MwMenuItem emits an event when its clicked
     */
    mwMenuItemClick: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "selected", "subtitle", "title", "value"],
})
@Component({
    selector: "mw-menu-item",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["disabled", "selected", "subtitle", "title", "value"],
})
export class MwMenuItem {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwMenuItemClick"]);
    }
}

export declare interface MwMenuList extends Components.MwMenuList {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["testId"],
})
@Component({
    selector: "mw-menu-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["testId"],
})
export class MwMenuList {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModal extends Components.MwModal {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["backdropDismiss", "dismissTrigger", "isOpen", "size", "trigger"],
    methods: ["present", "dismiss"],
})
@Component({
    selector: "mw-modal",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["backdropDismiss", "dismissTrigger", "isOpen", "size", "trigger"],
})
export class MwModal {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModalFooter extends Components.MwModalFooter {}

@ProxyCmp({
    defineCustomElementFn: undefined,
})
@Component({
    selector: "mw-modal-footer",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
})
export class MwModalFooter {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwModalTitle extends Components.MwModalTitle {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["description", "headline"],
})
@Component({
    selector: "mw-modal-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["description", "headline"],
})
export class MwModalTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwPopover extends Components.MwPopover {
    /**
     * MwPopover emits an event when the value of the open prop changes
     */
    mwPopoverOpen: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["closeOnClick", "dismissable", "name", "noPadding", "open", "placement", "testId"],
})
@Component({
    selector: "mw-popover",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["closeOnClick", "dismissable", "name", "noPadding", "open", "placement", "testId"],
})
export class MwPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["mwPopoverOpen"]);
    }
}

export declare interface MwRadio extends Components.MwRadio {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
@Component({
    selector: "mw-radio",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
export class MwRadio {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwRadioGroup extends Components.MwRadioGroup {
    /**
     * Event emitted when radioGroup value changes (after radio selection)
     */
    radioChange: EventEmitter<CustomEvent<{ value?: string | number }>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["value"],
})
@Component({
    selector: "mw-radio-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["value"],
})
export class MwRadioGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["radioChange"]);
    }
}

export declare interface MwSlider extends Components.MwSlider {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "endIcon", "helperText", "inline", "label", "max", "min", "name", "startIcon", "step", "testId", "value"],
})
@Component({
    selector: "mw-slider",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["disabled", "endIcon", "helperText", "inline", "label", "max", "min", "name", "startIcon", "step", "testId", "value"],
})
export class MwSlider {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwSwitch extends Components.MwSwitch {
    /**
     * MwSwitch emits an event when switch checked state changes
     */
    emitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["checked", "disabled", "label", "offText", "onText", "testId"],
})
@Component({
    selector: "mw-switch",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["checked", "disabled", "label", "offText", "onText", "testId"],
})
export class MwSwitch {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["emitter"]);
    }
}

export declare interface MwTab extends Components.MwTab {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "icon", "label", "selected"],
})
@Component({
    selector: "mw-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["disabled", "icon", "label", "selected"],
})
export class MwTab {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwTabs extends Components.MwTabs {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["selected", "testId"],
})
@Component({
    selector: "mw-tabs",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["selected", "testId"],
})
export class MwTabs {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwTextfield extends Components.MwTextfield {
    /**
     * MwTextfield emits an event when textfield value changes
     */
    valueChanged: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: [
        "disabled",
        "hasError",
        "helperText",
        "inline",
        "label",
        "multiple",
        "multipleMaximum",
        "multipleValues",
        "name",
        "placeholder",
        "readOnly",
        "required",
        "type",
        "value",
    ],
})
@Component({
    selector: "mw-textfield",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: [
        "disabled",
        "hasError",
        "helperText",
        "inline",
        "label",
        "multiple",
        "multipleMaximum",
        "multipleValues",
        "name",
        "placeholder",
        "readOnly",
        "required",
        "type",
        "value",
    ],
})
export class MwTextfield {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChanged"]);
    }
}
