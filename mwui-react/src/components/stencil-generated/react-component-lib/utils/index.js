"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineCustomElement = exports.createForwardRef = exports.mergeRefs = exports.setRef = void 0;
var react_1 = __importDefault(require("react"));
exports.setRef = function (ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // Cast as a MutableRef so we can assign current
        ref.current = value;
    }
};
exports.mergeRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        refs.forEach(function (ref) {
            exports.setRef(ref, value);
        });
    };
};
exports.createForwardRef = function (ReactComponent, displayName) {
    var forwardRef = function (props, ref) {
        return <ReactComponent {...props} forwardedRef={ref}/>;
    };
    forwardRef.displayName = displayName;
    return react_1.default.forwardRef(forwardRef);
};
exports.defineCustomElement = function (tagName, customElement) {
    if (customElement !== undefined &&
        typeof customElements !== 'undefined' &&
        !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
__exportStar(require("./attachProps"), exports);
__exportStar(require("./case"), exports);
