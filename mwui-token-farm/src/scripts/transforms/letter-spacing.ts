import { Named, Transform, TransformedToken } from "style-dictionary";

export const letterSpacingTransform: Named<Transform> = {
    name: "percent/px",
    type: "value",
    matcher: (token: TransformedToken) => ["letterSpacing"].includes(token.type),
    transformer: prop => {
        const letterSpacing = prop.original.value?.replace("%", "");

        return `calc((1em / 100) * ${letterSpacing})`;
    },
};
