import { getTokensByGroupName, groupsDict } from "./TokenSerialization";

//TODO: fill doc

/**
 * 
 * @returns 
 */
export const getAllTokensDict = () => {
    const tokensDict = {};
    Object.values(groupsDict).forEach(tgd => {
        if (tgd.key in tokensDict) { console.warn("Token already exist!") }
        else { Object.assign(tokensDict, tgd) }
    });
    return tokensDict;
};

/**
 * 
 * @param {*} tokenName 
 * @param {*} tokenDict 
 * @returns 
 */
export const getRelationTokensDict = (tokenName, tokenDict) => {
    const relationTokensDict = { "alias": [], "composed": [], "composition": [] }

    if (tokenName === "") return [];
    for (const token of Object.values(tokenDict)) {
        if (typeof token.value === "string" && token.value.includes(tokenName)) {
            relationTokensDict["alias"].push(token)
        } else if (Array.isArray(token.value)) {
            const relationTokens = token.value.map(ele => {
                return filterTokensByValue(tokenName, ele);
            });
            if (relationTokens.some(t => t !== undefined && t.length > 0)) {
                relationTokensDict["composed"].push(token)
            }
        } else {
            const relationTokens = filterTokensByValue(tokenName, token.value);
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

/**
 * 
 * @param {*} tokenType 
 * @param {*} groupName 
 * @returns 
 */
export const filterTokensByType = (tokenType, groupName = null) => {
    const dict = groupName ? getTokensByGroupName(groupName) : getAllTokensDict();
    const tokens = Object.values(dict).filter(value => value.type === tokenType);
    return tokens;
};


/**
 * 
 * @param {*} tokenName 
 * @param {*} dict 
 * @returns 
 */
const filterTokensByValue = (tokenName, dict) => {
    return Object.values(dict).filter(value => (typeof value === "string" ? value.includes(tokenName) : false));
};

export const filterTokensBySubString = (subString, groupName = null) => {
    const tokenNamesList = groupName ? Object.keys(getTokensByGroupName(groupName)) : Object.keys(getAllTokensDict());
    return tokenNamesList.filter(name => name.includes(subString));
};
