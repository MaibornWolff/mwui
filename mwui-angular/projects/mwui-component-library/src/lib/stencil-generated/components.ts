/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./angular-component-lib/utils";

import { Components } from "@maibornwolff/mwui-stencil";

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
     * MwChip emits an event when chip is clicked or chip is closed
     */
    emitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "icon", "selected", "showClose", "testId"],
})
@Component({
    selector: "mw-chip",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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
    clickEmitter: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["disabled", "selected", "subtitle", "title"],
})
@Component({
    selector: "mw-menu-item",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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

export declare interface MwPopover extends Components.MwPopover {}

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ["dismissable", "name", "noPadding", "open", "placement", "testId"],
})
@Component({
    selector: "mw-popover",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
    inputs: ["dismissable", "name", "noPadding", "open", "placement", "testId"],
})
export class MwPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
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
    inputs: ["disabled", "hasError", "helperText", "inline", "label", "name", "placeholder", "required", "type", "value"],
})
@Component({
    selector: "mw-textfield",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<ng-content></ng-content>",
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
