var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
export var setRef = function (ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
export var mergeRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        refs.forEach(function (ref) {
            setRef(ref, value);
        });
    };
};
export var createForwardRef = function (ReactComponent, displayName) {
    var forwardRef = function (props, ref) {
        return React.createElement(ReactComponent, __assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};
export var defineCustomElement = function (tagName, customElement) {
    if (customElement !== undefined && typeof customElements !== "undefined" && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
export * from "./attachProps.js";
export * from "./case.js";
//# sourceMappingURL=index.js.map