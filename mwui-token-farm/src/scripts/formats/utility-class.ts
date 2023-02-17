import { utilities } from "../../utils/utility-classes";
import { Format } from "style-dictionary";
import { FormatterArguments } from "style-dictionary/types/Format";

/**
 * @deprecated - i think this can be removed
 */
export const utilityClassFormat: Format = {
    name: "utilityClass",
    formatter: ({ dictionary }: FormatterArguments) => {
        let output = "";
        dictionary.allProperties.forEach(({ type, name, value }) => {
            utilities.forEach(utility => {
                // do not include spacings like xl-left
                if (type === utility.tokenType && !name.includes("-")) {
                    const utilityClass = `${utility.name}-${name}`;
                    console.log(utilityClass);
                    // support x and y utilities, e.g. mx = ml & mr
                    if (utility.CSSprop.length > 1) {
                        output += `.${utilityClass} {
            ${utility.CSSprop[0]}: ${value}px;
            ${utility.CSSprop[1]}: ${value}px;
            }\n\n`;
                    } else {
                        output += `.${utilityClass} {
            ${utility.CSSprop[0]}: ${value}px;
            }\n\n`;
                    }
                }
            });
        });
        return output;
    },
};
