import React, { createElement } from "react";

import "react-dom";

import { defineCustomElements } from "@maibornwolff/mwui-stencil/loader/index.js";

const dashToPascalCase = str => str.toLowerCase().split("-").map((segment => segment.charAt(0).toUpperCase() + segment.slice(1))).join("");

const camelToDashCase = str => str.replace(/([A-Z])/g, (m => `-${m[0].toLowerCase()}`));

const attachProps = (node, newProps, oldProps = {}) => {
    if (node instanceof Element) {
        const className = getClassName(node.classList, newProps, oldProps);
        if (className !== "") {
            node.className = className;
        }
        Object.keys(newProps).forEach((name => {
            if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
                return;
            }
            if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                const eventName = name.substring(2);
                const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (!isCoveredByReact(eventNameLc)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            } else {
                node[name] = newProps[name];
                const propType = typeof newProps[name];
                if (propType === "string") {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
            }
        }));
    }
};

const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    const currentClasses = arrayToMap(classList);
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
    const finalClassNames = [];
    currentClasses.forEach((currentClass => {
        if (incomingPropClasses.has(currentClass)) {
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        } else if (!oldPropClasses.has(currentClass)) {
            finalClassNames.push(currentClass);
        }
    }));
    incomingPropClasses.forEach((s => finalClassNames.push(s)));
    return finalClassNames.join(" ");
};

/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ const isCoveredByReact = eventNameSuffix => {
    if (typeof document === "undefined") {
        return true;
    } else {
        const eventName = "on" + eventNameSuffix;
        let isSupported = eventName in document;
        if (!isSupported) {
            const element = document.createElement("div");
            element.setAttribute(eventName, "return;");
            isSupported = typeof element[eventName] === "function";
        }
        return isSupported;
    }
};

const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    });
};

const arrayToMap = arr => {
    const map = new Map;
    arr.forEach((s => map.set(s, s)));
    return map;
};

const setRef = (ref, value) => {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref != null) {
        ref.current = value;
    }
};

const mergeRefs = (...refs) => value => {
    refs.forEach((ref => {
        setRef(ref, value);
    }));
};

const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => React.createElement(ReactComponent, {
        ...props,
        forwardedRef: ref
    });
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        componentEl;
        setComponentElRef=element => {
            this.componentEl = element;
        };
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        }
        render() {
            const {children, forwardedRef, style, className, ref, ...cProps} = this.props;
            let propsToPass = Object.keys(cProps).reduce(((acc, name) => {
                const value = cProps[name];
                if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                } else {
                    const type = typeof value;
                    if (type === "string" || type === "boolean" || type === "number") {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }), {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            const newProps = {
                ...propsToPass,
                ref: mergeRefs(forwardedRef, this.setComponentElRef),
                style
            };
            return createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};

defineCustomElements();

const MwAppBar = createReactComponent("mw-app-bar");

const MwAppBarTitle = createReactComponent("mw-app-bar-title");

const MwAutocomplete = createReactComponent("mw-autocomplete");

const MwAvatar = createReactComponent("mw-avatar");

const MwBackdrop = createReactComponent("mw-backdrop");

const MwButton = createReactComponent("mw-button");

const MwCard = createReactComponent("mw-card");

const MwCardBody = createReactComponent("mw-card-body");

const MwCardFooter = createReactComponent("mw-card-footer");

const MwCardHeader = createReactComponent("mw-card-header");

const MwCardImage = createReactComponent("mw-card-image");

const MwCardTitle = createReactComponent("mw-card-title");

const MwCheckbox = createReactComponent("mw-checkbox");

const MwChip = createReactComponent("mw-chip");

const MwChipInput = createReactComponent("mw-chip-input");

const MwDivider = createReactComponent("mw-divider");

const MwDropdown = createReactComponent("mw-dropdown");

const MwHelperText = createReactComponent("mw-helper-text");

const MwIcon = createReactComponent("mw-icon");

const MwIconGallery = createReactComponent("mw-icon-gallery");

const MwImg = createReactComponent("mw-img");

const MwLabel = createReactComponent("mw-label");

const MwLink = createReactComponent("mw-link");

const MwLogin = createReactComponent("mw-login");

const MwMenu = createReactComponent("mw-menu");

const MwMenuItem = createReactComponent("mw-menu-item");

const MwMenuList = createReactComponent("mw-menu-list");

const MwModal = createReactComponent("mw-modal");

const MwModalFooter = createReactComponent("mw-modal-footer");

const MwModalTitle = createReactComponent("mw-modal-title");

const MwPopover = createReactComponent("mw-popover");

const MwRadio = createReactComponent("mw-radio");

const MwRadioGroup = createReactComponent("mw-radio-group");

const MwSlider = createReactComponent("mw-slider");

const MwSwitch = createReactComponent("mw-switch");

const MwTab = createReactComponent("mw-tab");

const MwTabs = createReactComponent("mw-tabs");

const MwTextfield = createReactComponent("mw-textfield");

export { MwAppBar, MwAppBarTitle, MwAutocomplete, MwAvatar, MwBackdrop, MwButton, MwCard, MwCardBody, MwCardFooter, MwCardHeader, MwCardImage, MwCardTitle, MwCheckbox, MwChip, MwChipInput, MwDivider, MwDropdown, MwHelperText, MwIcon, MwIconGallery, MwImg, MwLabel, MwLink, MwLogin, MwMenu, MwMenuItem, MwMenuList, MwModal, MwModalFooter, MwModalTitle, MwPopover, MwRadio, MwRadioGroup, MwSlider, MwSwitch, MwTab, MwTabs, MwTextfield };
