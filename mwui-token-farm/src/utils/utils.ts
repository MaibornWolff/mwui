import { TransformedTokens } from "style-dictionary";

export const createArray = ({ dictionary }): string => {
    const arr = dictionary.allTokens;
    return JSON.stringify(arr);
};

export const getFontWeightValue = (fontWeight: string): number => {
    return {
        "light": 300,
        "regular": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700,
        "italic": 300,
        "light italic": 300,
    }[fontWeight.toLowerCase()];
};

export const getPrimitiveProperties = (props: TransformedTokens[]): TransformedTokens[] => {
    return props.filter(p => typeof p.value === "number" || typeof p.value === "string");
};
