/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'tlm-stencil';




export declare interface MwAvatar extends Components.MwAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'icon', 'size', 'src', 'testId']
})
@Component({
  selector: 'mw-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'icon', 'size', 'src', 'testId']
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
  inputs: ['disabled', 'href', 'label', 'size', 'target', 'testId', 'variant']
})
@Component({
  selector: 'mw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'label', 'size', 'target', 'testId', 'variant']
})
export class MwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
  }
}


export declare interface MwCard extends Components.MwCard {
  /**
   *  
   */
  clickEmitter: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['elevated', 'outlined', 'testId']
})
@Component({
  selector: 'mw-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['elevated', 'outlined', 'testId']
})
export class MwCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
  }
}


export declare interface MwCardBody extends Components.MwCardBody {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'mw-card-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
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
  inputs: ['justifyCenter', 'justifyEnd', 'justifyFlexEnd', 'justifyFlexStart', 'justifyLeft', 'justifyNormal', 'justifyRight', 'justifySpaceAround', 'justifySpaceBetween', 'justifySpaceEvenly', 'justifyStart']
})
@Component({
  selector: 'mw-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['justifyCenter', 'justifyEnd', 'justifyFlexEnd', 'justifyFlexStart', 'justifyLeft', 'justifyNormal', 'justifyRight', 'justifySpaceAround', 'justifySpaceBetween', 'justifySpaceEvenly', 'justifyStart']
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
  inputs: ['header', 'subheader']
})
@Component({
  selector: 'mw-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['header', 'subheader']
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
  inputs: ['alt', 'src']
})
@Component({
  selector: 'mw-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'src']
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
  inputs: ['metadata', 'subtitle', 'title']
})
@Component({
  selector: 'mw-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['metadata', 'subtitle', 'title']
})
export class MwCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MwChip extends Components.MwChip {
  /**
   * 'close' event is fired when the close icon is clicked. 
   */
  close: EventEmitter<CustomEvent<any>>;
  /**
   * 'toggle' event is fired when the chip is clicked. Current selection state is emitted. 
   */
  toggle: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'icon', 'selected', 'showClose', 'testId']
})
@Component({
  selector: 'mw-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'icon', 'selected', 'showClose', 'testId']
})
export class MwChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close', 'toggle']);
  }
}


export declare interface MwIcon extends Components.MwIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fill', 'icon', 'size', 'stroke']
})
@Component({
  selector: 'mw-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fill', 'icon', 'size', 'stroke']
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
  defineCustomElementFn: undefined
})
@Component({
  selector: 'mw-icon-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MwIconGallery {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MwSwitch extends Components.MwSwitch {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText', 'testId']
})
@Component({
  selector: 'mw-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText', 'testId']
})
export class MwSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MwTextfield extends Components.MwTextfield {
  /**
   *  
   */
  valueChanged: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'hasError', 'helperText', 'inline', 'label', 'name', 'placeholder', 'required', 'type', 'value']
})
@Component({
  selector: 'mw-textfield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'hasError', 'helperText', 'inline', 'label', 'name', 'placeholder', 'required', 'type', 'value']
})
export class MwTextfield {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}
