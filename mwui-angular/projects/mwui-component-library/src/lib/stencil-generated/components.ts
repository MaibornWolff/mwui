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
    inputs: ["alt", "src"],
})
@Component({
    selector: "mw-card-image",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["alt", "src"],
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
    inputs: ["metadata", "subtitle", "title"],
})
@Component({
    selector: "mw-card-title",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["metadata", "subtitle", "title"],
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
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
@Component({
    selector: "mw-checkbox",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
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

export declare interface MwCheckbox extends Components.MwCheckbox {
    /**
     * MwCheckbox emits an event when checkbox checked state is changed
     */
    emitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    inputs: ["disabled", "icon", "selected", "showClose", "testId"],
})
@Component({
    selector: "mw-chip",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "icon", "selected", "showClose", "testId"],
})
export class MwChip {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["emitter"]);
    }
}

export declare interface MwChip extends Components.MwChip {
    /**
     * MwChip emits an event when chip is clicked or chip is closed
     */
    emitter: EventEmitter<CustomEvent<any>>;
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

@ProxyCmp({})
@Component({
    selector: "mw-icon-button",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [],
})
export class MwIconButton {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwIconButton extends Components.MwIconButton {}

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
        proxyOutputs(this, this.el, ["submit"]);
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
    inputs: ["disabled", "selected", "subtitle", "title"],
})
@Component({
    selector: "mw-menu-item",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "selected", "subtitle", "title"],
})
export class MwMenuItem {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEmitter"]);
    }
}

export declare interface MwMenuItem extends Components.MwMenuItem {
    /**
     * MwMenuItem emits an event when its clicked
     */
    clickEmitter: EventEmitter<CustomEvent<any>>;
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
    inputs: ["dismissable", "name", "noPadding", "open", "placement", "testId"],
})
@Component({
    selector: "mw-popover",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["dismissable", "name", "noPadding", "open", "placement", "testId"],
})
export class MwPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface MwPopover extends Components.MwPopover {}

@ProxyCmp({
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
})
@Component({
    selector: "mw-radio",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["checked", "disabled", "label", "name", "testId", "value"],
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
    inputs: ["value"],
})
@Component({
    selector: "mw-radio-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
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
    inputs: ["checked", "disabled", "label", "offText", "onText", "testId"],
})
@Component({
    selector: "mw-switch",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
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

export declare interface MwSwitch extends Components.MwSwitch {
    /**
     * MwSwitch emits an event when switch checked state changes
     */
    emitter: EventEmitter<CustomEvent<any>>;
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
    }
}

export declare interface MwTabs extends Components.MwTabs {}

@ProxyCmp({
    inputs: ["disabled", "hasError", "helperText", "inline", "label", "name", "placeholder", "required", "type", "value"],
})
@Component({
    selector: "mw-textfield",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ["disabled", "hasError", "helperText", "inline", "label", "name", "placeholder", "required", "type", "value"],
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
