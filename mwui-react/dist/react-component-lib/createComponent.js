var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { createElement } from "react";
import { attachProps, camelToDashCase, createForwardRef, dashToPascalCase, isCoveredByReact, mergeRefs } from "./utils";
export var createReactComponent = function (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) {
    if (defineCustomElement !== undefined) {
        defineCustomElement();
    }
    var displayName = dashToPascalCase(tagName);
    var ReactComponent = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.setComponentElRef = function (element) {
                _this.componentEl = element;
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.componentDidUpdate(this.props);
        };
        class_1.prototype.componentDidUpdate = function (prevProps) {
            attachProps(this.componentEl, this.props, prevProps);
        };
        class_1.prototype.render = function () {
            var _a = this.props, children = _a.children, forwardedRef = _a.forwardedRef, style = _a.style, className = _a.className, ref = _a.ref, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            var propsToPass = Object.keys(cProps).reduce(function (acc, name) {
                var value = cProps[name];
                if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                    var eventName = name.substring(2).toLowerCase();
                    if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
                        acc[name] = value;
                    }
                }
                else {
                    // we should only render strings, booleans, and numbers as attrs in html.
                    // objects, functions, arrays etc get synced via properties on mount.
                    var type = typeof value;
                    if (type === "string" || type === "boolean" || type === "number") {
                        acc[camelToDashCase(name)] = value;
                    }
                }
                return acc;
            }, {});
            if (manipulatePropsFunction) {
                propsToPass = manipulatePropsFunction(this.props, propsToPass);
            }
            var newProps = __assign(__assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style: style });
            /**
             * We use createElement here instead of
             * React.createElement to work around a
             * bug in Vite (https://github.com/vitejs/vite/issues/6104).
             * React.createElement causes all elements to be rendered
             * as <tagname> instead of the actual Web Component.
             */
            return createElement(tagName, newProps, children);
        };
        Object.defineProperty(class_1, "displayName", {
            get: function () {
                return displayName;
            },
            enumerable: false,
            configurable: true
        });
        return class_1;
    }(React.Component));
    // If context was passed to createReactComponent then conditionally add it to the Component Class
    if (ReactComponentContext) {
        ReactComponent.contextType = ReactComponentContext;
    }
    return createForwardRef(ReactComponent, displayName);
};
//# sourceMappingURL=createComponent.js.map