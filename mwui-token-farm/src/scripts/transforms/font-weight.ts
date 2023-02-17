import { Named, Transform, TransformedToken } from "style-dictionary";
import { getFontWeightValue } from "../../utils/utils";

export const fontWeightTransform: Named<Transform> = {
    name: "fontWeight/number",
    type: "value",
    matcher: (token: TransformedToken) => token.type === "fontWeights",
    transformer: prop => {
        // You can also modify the value here if you want to convert pixels to ems
        return getFontWeightValue(prop.original.value);
    },
};
