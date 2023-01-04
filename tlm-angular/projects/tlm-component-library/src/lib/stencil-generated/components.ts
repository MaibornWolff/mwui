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
  clickEmitter: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'href', 'label', 'target', 'testId', 'variant']
})
@Component({
  selector: 'mw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'label', 'target', 'testId', 'variant']
})
export class MwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
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
  inputs: ['color', 'icon', 'size']
})
@Component({
  selector: 'mw-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'icon', 'size']
})
export class MwIcon {
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
