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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React from "react";
import ReactDOM from "react-dom";
import { attachProps, dashToPascalCase, defineCustomElement, setRef } from "./utils";
export var createOverlayComponent = function (tagName, controller, customElement) {
    defineCustomElement(tagName, customElement);
    var displayName = dashToPascalCase(tagName);
    var didDismissEventName = "on".concat(displayName, "DidDismiss");
    var didPresentEventName = "on".concat(displayName, "DidPresent");
    var willDismissEventName = "on".concat(displayName, "WillDismiss");
    var willPresentEventName = "on".concat(displayName, "WillPresent");
    var isDismissing = false;
    var Overlay = /** @class */ (function (_super) {
        __extends(Overlay, _super);
        function Overlay(props) {
            var _this = _super.call(this, props) || this;
            if (typeof document !== "undefined") {
                _this.el = document.createElement("div");
            }
            _this.handleDismiss = _this.handleDismiss.bind(_this);
            return _this;
        }
        Object.defineProperty(Overlay, "displayName", {
            get: function () {
                return displayName;
            },
            enumerable: false,
            configurable: true
        });
        Overlay.prototype.componentDidMount = function () {
            if (this.props.isOpen) {
                this.present();
            }
        };
        Overlay.prototype.componentWillUnmount = function () {
            if (this.overlay) {
                this.overlay.dismiss();
            }
        };
        Overlay.prototype.handleDismiss = function (event) {
            if (this.props.onDidDismiss) {
                this.props.onDidDismiss(event);
            }
            setRef(this.props.forwardedRef, null);
        };
        Overlay.prototype.shouldComponentUpdate = function (nextProps) {
            // Check if the overlay component is about to dismiss
            if (this.overlay && nextProps.isOpen !== this.props.isOpen && nextProps.isOpen === false) {
                isDismissing = true;
            }
            return true;
        };
        Overlay.prototype.componentDidUpdate = function (prevProps) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.overlay) {
                                attachProps(this.overlay, this.props, prevProps);
                            }
                            if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                                this.present(prevProps);
                            }
                            if (!(this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.overlay.dismiss()];
                        case 1:
                            _a.sent();
                            isDismissing = false;
                            /**
                             * Now that the overlay is dismissed
                             * we need to render again so that any
                             * inner components will be unmounted
                             */
                            this.forceUpdate();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        Overlay.prototype.present = function (prevProps) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, children, isOpen, onDidDismiss, onDidPresent, onWillDismiss, onWillPresent, cProps, elementProps, _b;
                var _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this.props, children = _a.children, isOpen = _a.isOpen, onDidDismiss = _a.onDidDismiss, onDidPresent = _a.onDidPresent, onWillDismiss = _a.onWillDismiss, onWillPresent = _a.onWillPresent, cProps = __rest(_a, ["children", "isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);
                            elementProps = __assign(__assign({}, cProps), (_c = { ref: this.props.forwardedRef }, _c[didDismissEventName] = this.handleDismiss, _c[didPresentEventName] = function (e) { return _this.props.onDidPresent && _this.props.onDidPresent(e); }, _c[willDismissEventName] = function (e) { return _this.props.onWillDismiss && _this.props.onWillDismiss(e); }, _c[willPresentEventName] = function (e) { return _this.props.onWillPresent && _this.props.onWillPresent(e); }, _c));
                            _b = this;
                            return [4 /*yield*/, controller.create(__assign(__assign({}, elementProps), { component: this.el, componentProps: {} }))];
                        case 1:
                            _b.overlay = _d.sent();
                            setRef(this.props.forwardedRef, this.overlay);
                            attachProps(this.overlay, elementProps, prevProps);
                            return [4 /*yield*/, this.overlay.present()];
                        case 2:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Overlay.prototype.render = function () {
            /**
             * Continue to render the component even when
             * overlay is dismissing otherwise component
             * will be hidden before animation is done.
             */
            return ReactDOM.createPortal(this.props.isOpen || isDismissing ? this.props.children : null, this.el);
        };
        return Overlay;
    }(React.Component));
    return React.forwardRef(function (props, ref) {
        return React.createElement(Overlay, __assign({}, props, { forwardedRef: ref }));
    });
};
//# sourceMappingURL=createOverlayComponent.js.map