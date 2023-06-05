import { defineContainer } from "./vue-component-lib/utils";
export const MwAppBar = defineContainer("mw-app-bar", undefined, ["ariaRole", "position"]);
export const MwAppBarTitle = defineContainer("mw-app-bar-title", undefined);
export const MwAutocomplete = defineContainer("mw-autocomplete", undefined, [
    "type",
    "value",
    "name",
    "label",
    "placeholder",
    "helperText",
    "hasError",
    "noSuggestionsText",
    "inline",
    "required",
    "disabled",
    "readOnly",
    "multiple",
    "maximum",
    "maximumText",
    "optionCounter",
    "selected",
    "mwAutocompleteValueChanged",
]);
export const MwAvatar = defineContainer("mw-avatar", undefined, ["testId", "src", "icon", "alt", "size"]);
export const MwBackdrop = defineContainer("mw-backdrop", undefined, ["backdropDismiss", "backdropClick"]);
export const MwButton = defineContainer("mw-button", undefined, ["testId", "disabled", "label", "variant", "size", "href", "target", "clickEmitter"]);
export const MwCard = defineContainer("mw-card", undefined, ["testId", "outlined", "elevated", "clickEmitter"]);
export const MwCardBody = defineContainer("mw-card-body", undefined);
export const MwCardFooter = defineContainer("mw-card-footer", undefined, [
    "justifyCenter",
    "justifyStart",
    "justifyEnd",
    "justifyNormal",
    "justifyLeft",
    "justifyRight",
    "justifyFlexStart",
    "justifyFlexEnd",
    "justifySpaceAround",
    "justifySpaceBetween",
    "justifySpaceEvenly",
]);
export const MwCardHeader = defineContainer("mw-card-header", undefined, ["header", "subheader"]);
export const MwCardImage = defineContainer("mw-card-image", undefined, ["src", "alt"]);
export const MwCardTitle = defineContainer("mw-card-title", undefined, ["text", "subtitle", "metadata"]);
export const MwCheckbox = defineContainer("mw-checkbox", undefined, ["testId", "value", "name", "checked", "disabled", "label", "emitter"]);
export const MwChip = defineContainer("mw-chip", undefined, ["testId", "icon", "disabled", "toggleable", "showClose", "value", "selected", "mwChipClick", "mwChipClose"]);
export const MwChipInput = defineContainer("mw-chip-input", undefined, [
    "name",
    "label",
    "placeholder",
    "disabled",
    "maximum",
    "helperText",
    "hasError",
    "inline",
    "required",
    "optionCounter",
    "selectedChips",
    "mwChipListValueChanged",
    "mwChipListInputChange",
]);
export const MwDivider = defineContainer("mw-divider", undefined, ["inset"]);
export const MwDropdown = defineContainer("mw-dropdown", undefined, [
    "value",
    "valueLabel",
    "name",
    "label",
    "placeholder",
    "helperText",
    "hasError",
    "inline",
    "required",
    "disabled",
    "valueChanged",
]);
export const MwHelperText = defineContainer("mw-helper-text", undefined, ["helperText", "hasError"]);
export const MwIcon = defineContainer("mw-icon", undefined, ["icon", "size", "fill", "color", "weight"]);
export const MwIconGallery = defineContainer("mw-icon-gallery", undefined, ["icons"]);
export const MwImg = defineContainer("mw-img", undefined, ["preloadSrc", "src", "alt", "lazyLoad", "fallback", "srcset", "imgDidLoad", "imgLoadError"]);
export const MwLabel = defineContainer("mw-label", undefined, ["name", "label", "required"]);
export const MwLink = defineContainer("mw-link", undefined, ["href", "target", "underline"]);
export const MwLogin = defineContainer("mw-login", undefined, ["headline", "layout", "backgroundImage", "logo", "signUpHref", "forgotPasswordHref", "submitEmitter"]);
export const MwMenu = defineContainer("mw-menu", undefined, ["testId", "placement", "open"]);
export const MwMenuItem = defineContainer("mw-menu-item", undefined, ["text", "subtitle", "disabled", "selected", "value", "mwMenuItemClick"]);
export const MwMenuList = defineContainer("mw-menu-list", undefined, ["testId"]);
export const MwModal = defineContainer("mw-modal", undefined, ["backdropDismiss", "size", "trigger", "dismissTrigger", "isOpen"]);
export const MwModalFooter = defineContainer("mw-modal-footer", undefined);
export const MwModalTitle = defineContainer("mw-modal-title", undefined, ["headline", "description"]);
export const MwPopover = defineContainer("mw-popover", undefined, ["testId", "open", "disabled", "placement", "dismissable", "closeOnClick", "noPadding", "name", "mwPopoverOpen"]);
export const MwRadio = defineContainer("mw-radio", undefined, ["disabled", "checked", "value", "name", "testId", "label"]);
export const MwRadioGroup = defineContainer("mw-radio-group", undefined, ["value", "radioChange"]);
export const MwSlider = defineContainer("mw-slider", undefined, [
    "testId",
    "name",
    "label",
    "helperText",
    "startIcon",
    "endIcon",
    "min",
    "max",
    "step",
    "value",
    "inline",
    "disabled",
]);
export const MwSwitch = defineContainer("mw-switch", undefined, ["testId", "disabled", "label", "on", "off", "checked", "emitter"]);
export const MwTab = defineContainer("mw-tab", undefined, ["selected", "icon", "label", "disabled"]);
export const MwTabs = defineContainer("mw-tabs", undefined, ["testId", "selected", "tabsClickEmitter"]);
export const MwTextfield = defineContainer("mw-textfield", undefined, [
    "type",
    "value",
    "name",
    "label",
    "placeholder",
    "helperText",
    "hasError",
    "inline",
    "required",
    "disabled",
    "readOnly",
    "mwTextfieldValueChanged",
]);
//# sourceMappingURL=components.js.map
