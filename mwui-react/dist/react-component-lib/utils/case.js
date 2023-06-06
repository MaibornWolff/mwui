export var dashToPascalCase = function (str) {
    return str
        .toLowerCase()
        .split("-")
        .map(function (segment) { return segment.charAt(0).toUpperCase() + segment.slice(1); })
        .join("");
};
export var camelToDashCase = function (str) { return str.replace(/([A-Z])/g, function (m) { return "-".concat(m[0].toLowerCase()); }); };
//# sourceMappingURL=case.js.map