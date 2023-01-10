import { defineContainer } from './vue-component-lib/utils';
export const MwAvatar = defineContainer('mw-avatar', undefined, [
    'testId',
    'src',
    'icon',
    'alt',
    'size'
]);
export const MwButton = defineContainer('mw-button', undefined, [
    'testId',
    'disabled',
    'label',
    'variant',
    'size',
    'href',
    'target',
    'clickEmitter'
]);
export const MwCard = defineContainer('mw-card', undefined, [
    'testId',
    'outlined',
    'elevated',
    'clickEmitter'
]);
export const MwCardBody = defineContainer('mw-card-body', undefined);
export const MwCardFooter = defineContainer('mw-card-footer', undefined, [
    'justifyCenter',
    'justifyStart',
    'justifyEnd',
    'justifyNormal',
    'justifyLeft',
    'justifyRight',
    'justifyFlexStart',
    'justifyFlexEnd',
    'justifySpaceAround',
    'justifySpaceBetween',
    'justifySpaceEvenly'
]);
export const MwCardHeader = defineContainer('mw-card-header', undefined, [
    'header',
    'subheader'
]);
export const MwCardImage = defineContainer('mw-card-image', undefined, [
    'src',
    'alt'
]);
export const MwCardTitle = defineContainer('mw-card-title', undefined, [
    'title',
    'subtitle',
    'metadata'
]);
export const MwCheckbox = defineContainer('mw-checkbox', undefined, [
    'value',
    'name',
    'disabled',
    'checked'
]);
export const MwChip = defineContainer('mw-chip', undefined, [
    'testId',
    'icon',
    'disabled',
    'showClose',
    'selected',
    'close',
    'toggle'
]);
export const MwIcon = defineContainer('mw-icon', undefined, [
    'icon',
    'size',
    'fill',
    'stroke'
]);
export const MwIconGallery = defineContainer('mw-icon-gallery', undefined);
export const MwSwitch = defineContainer('mw-switch', undefined, [
    'testId',
    'disabled',
    'label',
    'onText',
    'offText',
    'checked'
]);
export const MwTextfield = defineContainer('mw-textfield', undefined, [
    'type',
    'value',
    'name',
    'label',
    'placeholder',
    'helperText',
    'hasError',
    'inline',
    'required',
    'disabled',
    'valueChanged'
]);
//# sourceMappingURL=components.js.map