import { Format } from "style-dictionary";
import { FormatterArguments } from "style-dictionary/types/Format";
import { getFontWeightValue, getPrimitiveProperties } from "../../utils/utils";

export const cssVariablesFormat: Format = {
    name: "css/variables",
    formatter: ({ dictionary }: FormatterArguments) => {
        const getValue = prop => {
            // append 'px' if missing
            if (typeof prop.original.value === "number") {
                return `${parseFloat(prop.original.value)}px`;
            }

            // some calculated values in figma are not evaluated and result in values like "4px + 4px + 4px"
            if (typeof prop.original.value === "string" && prop.original.value.includes("+")) {
                const clearedValue = prop.original.value.replaceAll("px", "").replaceAll("+", " ");

                return `${clearedValue.split(" ").reduce((acc, cur) => {
                    acc = Number(acc) + Number(cur);
                    return acc;
                }, 0)}px`;
            }
            // map figma font-weights to CSS conform font-weights
            if (prop.type === "fontWeight") {
                return getFontWeightValue(prop.original.value);
            }

            return prop.value;
        };
        const primitiveProperties = getPrimitiveProperties(dictionary.allProperties);

        return `:root {\n${primitiveProperties.map(prop => `  --${prop.name}: ${getValue(prop)};`).join("\n")}\n}`;
    },
};
