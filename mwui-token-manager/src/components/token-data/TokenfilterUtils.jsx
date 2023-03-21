import { getTokensByGroupName, groupsDict } from "./TokenDeserialization";

export const getAllTokensDict = () => {
    const tokensDict = {};
    Object.values(groupsDict).forEach(tgd => {
        if (tgd.key in tokensDict) { console.log("WARNING token already exist!") }
        else { Object.assign(tokensDict, tgd) }
    });
    return tokensDict;
};

export const getRelationTokensDict = (tokenName, tokenDict) => {
    const relationTokensDict = { "alias": [], "composed": [], "composition": [] }

    if (tokenName === "") return [];
    for (const token of Object.values(tokenDict)) {
        if (typeof token.value === "string" && token.value.includes(tokenName)) {
            relationTokensDict["alias"].push(token)
        } else if (Array.isArray(token.value)) {
            const relationTokens = token.value.map(ele => {
                return filterDictByTokenreferenz(tokenName, ele);
            });
            if (relationTokens.some(t => t !== undefined && t.length > 0)) {
                relationTokensDict["composed"].push(token)
            }
        } else {
            const relationTokens = filterDictByTokenreferenz(tokenName, token.value);
            if (relationTokens.length !== 0) {
                relationTokensDict["composition"].push(token)
            }
        }
    }
    return relationTokensDict
};

export const getTokenByName = (tokenName) => {
    return getAllTokensDict()[tokenName]
}

export const filterTokensByType = (tokenType, groupName = null) => {
    const dict = groupName ? getTokensByGroupName(groupName) : getAllTokensDict();
    const tokens = Object.values(dict).filter(value => value.type === tokenType);
    return tokens;
};
const filterDictByTokenreferenz = (tokenName, dict) => {
    return Object.values(dict).filter(value => (typeof value === "string" ? value.includes(tokenName) : false));
};

export const filterTokensBySubString = (subString, groupName = "") => {
    const tokenNamesList = groupName ? Object.keys(getTokensByGroupName(groupName)) : Object.keys(getAllTokensDict());
    return tokenNamesList.filter(name => name.includes(subString));
};
