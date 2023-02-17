import { Format } from "style-dictionary";
import { FormatterArguments } from "style-dictionary/types/Format";
import { getPrimitiveProperties } from "../../utils/utils";

export const cssVariablesFormat: Format = {
    name: "css/variables",
    formatter: ({ dictionary }: FormatterArguments) => {
        const primitiveProperties = getPrimitiveProperties(dictionary.allProperties);

        return `:root {\n${primitiveProperties.map(prop => `  --${prop.name}: ${prop.value};`).join("\n")}\n}`;
    },
};
