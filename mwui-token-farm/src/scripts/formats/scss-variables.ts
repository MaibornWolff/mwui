import { Format } from "style-dictionary";
import { FormatterArguments } from "style-dictionary/types/Format";

export const scssVariablesFormat: Format = {
    name: "scss/variables",
    formatter: ({ dictionary }: FormatterArguments) => {
        const getValue = prop => prop.value;
        const primitiveProperties = dictionary.allProperties.filter(p => typeof p.value === "number" || typeof p.value === "string");

        return `\n${primitiveProperties.map(prop => `$${prop.name}: ${getValue(prop)};`).join("\n")}\n`;
    },
};
