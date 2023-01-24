/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@maibornwolff/mwui-stencil';


@ProxyCmp({
  inputs: ['alt', 'icon', 'size', 'src', 'testId']
})
@Component({
  selector: 'mw-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'icon', 'size', 'src', 'testId'],
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
  inputs: ['disabled', 'href', 'label', 'size', 'target', 'testId', 'variant']
})
@Component({
  selector: 'mw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'label', 'size', 'target', 'testId', 'variant'],
})
export class MwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
  }
}


export declare interface MwButton extends Components.MwButton {
  /**
   * 'onClick' event is fired when clicking the button, unless it is used with a `href` prop.
   */
  clickEmitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['elevated', 'outlined', 'testId']
})
@Component({
  selector: 'mw-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elevated', 'outlined', 'testId'],
})
export class MwCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
  }
}


export declare interface MwCard extends Components.MwCard {

  clickEmitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'mw-card-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
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
  inputs: ['justifyCenter', 'justifyEnd', 'justifyFlexEnd', 'justifyFlexStart', 'justifyLeft', 'justifyNormal', 'justifyRight', 'justifySpaceAround', 'justifySpaceBetween', 'justifySpaceEvenly', 'justifyStart']
})
@Component({
  selector: 'mw-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['justifyCenter', 'justifyEnd', 'justifyFlexEnd', 'justifyFlexStart', 'justifyLeft', 'justifyNormal', 'justifyRight', 'justifySpaceAround', 'justifySpaceBetween', 'justifySpaceEvenly', 'justifyStart'],
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
  inputs: ['header', 'subheader']
})
@Component({
  selector: 'mw-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['header', 'subheader'],
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
  inputs: ['alt', 'src']
})
@Component({
  selector: 'mw-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'src'],
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
  inputs: ['metadata', 'subtitle', 'title']
})
@Component({
  selector: 'mw-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['metadata', 'subtitle', 'title'],
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
  inputs: ['checked', 'disabled', 'label', 'name', 'testId', 'value']
})
@Component({
  selector: 'mw-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'testId', 'value'],
})
export class MwCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['emitter']);
  }
}


export declare interface MwCheckbox extends Components.MwCheckbox {

  emitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'icon', 'selected', 'showClose', 'testId']
})
@Component({
  selector: 'mw-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'selected', 'showClose', 'testId'],
})
export class MwChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['emitter']);
  }
}


export declare interface MwChip extends Components.MwChip {

  emitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['inset']
})
@Component({
  selector: 'mw-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inset'],
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
  inputs: ['color', 'fill', 'icon', 'size', 'weight']
})
@Component({
  selector: 'mw-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'fill', 'icon', 'size', 'weight'],
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
})
@Component({
  selector: 'mw-icon-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  inputs: ['href']
})
@Component({
  selector: 'mw-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
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
  inputs: ['open', 'placement', 'testId']
})
@Component({
  selector: 'mw-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['open', 'placement', 'testId'],
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
  inputs: ['disabled', 'selected', 'subtitle', 'title']
})
@Component({
  selector: 'mw-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'subtitle', 'title'],
})
export class MwMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
  }
}


export declare interface MwMenuItem extends Components.MwMenuItem {

  clickEmitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['testId']
})
@Component({
  selector: 'mw-menu-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['testId'],
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
  inputs: ['dismissable', 'name', 'noPadding', 'open', 'placement', 'testId']
})
@Component({
  selector: 'mw-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissable', 'name', 'noPadding', 'open', 'placement', 'testId'],
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
  inputs: ['checked', 'disabled', 'label', 'name', 'testId', 'value']
})
@Component({
  selector: 'mw-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'testId', 'value'],
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
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText', 'testId']
})
@Component({
  selector: 'mw-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText', 'testId'],
})
export class MwSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['emitter']);
  }
}


export declare interface MwSwitch extends Components.MwSwitch {

  emitter: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'icon', 'label', 'selected']
})
@Component({
  selector: 'mw-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'label', 'selected'],
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
  inputs: ['selected', 'testId']
})
@Component({
  selector: 'mw-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'testId'],
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
  inputs: ['disabled', 'hasError', 'helperText', 'inline', 'label', 'name', 'placeholder', 'required', 'type', 'value']
})
@Component({
  selector: 'mw-textfield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'hasError', 'helperText', 'inline', 'label', 'name', 'placeholder', 'required', 'type', 'value'],
})
export class MwTextfield {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface MwTextfield extends Components.MwTextfield {

  valueChanged: EventEmitter<CustomEvent<string>>;
}


