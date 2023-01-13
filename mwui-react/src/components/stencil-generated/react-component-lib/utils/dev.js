"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecationWarning = exports.isDevMode = void 0;
exports.isDevMode = function () {
    return process && process.env && process.env.NODE_ENV === 'development';
};
var warnings = {};
exports.deprecationWarning = function (key, message) {
    if (exports.isDevMode()) {
        if (!warnings[key]) {
            console.warn(message);
            warnings[key] = true;
        }
    }
};
