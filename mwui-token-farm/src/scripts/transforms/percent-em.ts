import { Named, Transform, TransformedToken } from "style-dictionary";

export const percentEmTransform: Named<Transform> = {
    name: "percent/px",
    type: "value",
    matcher: (token: TransformedToken) => ["letterSpacing"].includes(token.type),
    transformer: prop => {
        // You can also modify the value here if you want to convert pixels to ems
        return prop.original.value?.replace("%", "px");
    },
};
