export var isDevMode = function () {
    return process && process.env && process.env.NODE_ENV === 'development';
};
var warnings = {};
export var deprecationWarning = function (key, message) {
    if (isDevMode()) {
        if (!warnings[key]) {
            console.warn(message);
            warnings[key] = true;
        }
    }
};
//# sourceMappingURL=dev.js.map