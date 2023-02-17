import { Named, Transform, TransformedToken } from "style-dictionary";

export const appendPxTransform: Named<Transform> = {
    name: "append/px",
    type: "value",
    matcher: (token: TransformedToken) => {
        return typeof token.original.value === "number" && token.original.value != 0;
    },
    transformer: prop => {
        // You can also modify the value here if you want to convert pixels to ems
        return `${prop.original.value}px`;
    },
};
