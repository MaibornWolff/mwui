import { Named, Transform } from "style-dictionary";

const mathjs = require("mathjs");

export const sizePxTransform: Named<Transform> = {
    name: "size/px",
    type: "value",
    matcher: prop => {
        // You can be more specific here if you only want 'em' units for font sizes
        return ["fontSizes", "spacing", "borderRadius", "borderWidth", "sizing"].includes(prop.type);
    },
    transformer: prop => {
        if (typeof prop.original.value === "number") {
            return `${parseFloat(prop.original.value + "")}px`;
        }

        // evaluate calculated values as they are passed as strings, e.g. "1.5 * 4px + 4px + 4px"
        if (prop.type === "spacing") {
            const clearedValue = prop.original.value.replaceAll("px", "").trim();
            return `${mathjs.evaluate(clearedValue)}px`;
        }

        // You can also modify the value here if you want to convert pixels to ems
        return prop.original.value.includes("px") ? parseFloat(prop.original.value) : `${parseFloat(prop.original.value)}px`;
    },
};
