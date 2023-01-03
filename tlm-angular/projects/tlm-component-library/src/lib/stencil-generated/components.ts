/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'tlm-stencil';




export declare interface MwAvatar extends Components.MwAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'size', 'src', 'testId']
})
@Component({
  selector: 'mw-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'size', 'src', 'testId']
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
   *  
   */
  clickEmitter: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'href', 'label', 'secondary', 'target', 'testId']
})
@Component({
  selector: 'mw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'label', 'secondary', 'target', 'testId']
})
export class MwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEmitter']);
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
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText']
})
@Component({
  selector: 'mw-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'offText', 'onText']
})
export class MwSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
