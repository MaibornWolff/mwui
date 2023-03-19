import Tokens from "./tokens.json";

const Token = (name, type, value, description = "", extensions = {}) => {
    return { name: name, type: type, value: value };
};
const groupsDict = {}; //all Tokens clusted under groups (Core, Semantic_*, Component)
const metaDataDict = {}; //Information for categorize the groups

export const filterTokensBySubString = (subString, groupName = "") => {
    const tokenNamesList = groupName ? Object.keys(getTokensByGroupName(groupName)) : Object.keys(getAllTokensDict());
    return tokenNamesList.filter(name => name.includes(subString));
};

const unpack = (obj, tokensDict, name = null) => {
    for (const [key, value] of Object.entries(obj)) {
        if (key === "value" || typeof value !== "object") {
            fillToken(key, value, name, tokensDict);
        } else {
            unpack(value, tokensDict, name === null ? key : name + "." + key);
        }
    }
    return tokensDict;
};

const fillToken = (key, value, name, tokensDict) => {
    if (!(name in tokensDict)) {
        const token = Token(name, "", "");
        tokensDict[name] = token;
    }
    switch (key) {
        case "type":
            tokensDict[name].type = value;
            break;
        case "value":
            tokensDict[name].value = value;
            break;
        case "description":
            tokensDict[name].description = value;
            break;
        default:
            // not seen in JSON-file yet, but can come after W3C standard
            tokensDict[name].extensions += { key: value };
    }
};

const createGroupDict = obj => {
    for (const [key, value] of Object.entries(obj)) {
        if (key !== "$themes" && key !== "$metadata") {
            const tokensDict = {}; // example: {"my.token.name": Token(name, type, value, description, extenstions*)}
            unpack(value, tokensDict);
            groupsDict[key] = tokensDict;
        } else {
            metaDataDict[key] = value;
        }
    }
    return groupsDict;
};

export const getAllTokensDict = () => {
    const tokensDict = {};
    Object.values(groupsDict).forEach(tgd => Object.assign(tokensDict, tgd));
    return tokensDict;
};

export const initializeTokens = () => createGroupDict(Tokens);

export const logTokens = () => console.log(groupsDict);

export const getTokensByGroupName = groupName => groupsDict[groupName];

export const filterTokensByType = (tokenType, groupName = null) => {
    const dict = groupName ? getTokensByGroupName(groupName) : getAllTokensDict();
    const tokens = Object.values(dict).filter(value => value.type === tokenType);
    return tokens;
};
const filterDictByTokenreferenz = (tokenName, dict) => {
    return Object.values(dict).filter(value => (typeof value === "string" ? value.includes(tokenName) : false));
};

export const getRelationTokens = (tokenName, tokenDict) => {
    const tokens = Object.values(tokenDict).filter(token => {
        if (typeof token.value === "string") {
            return token.value.includes(tokenName);
        } else if (Array.isArray(token.value)) {
            const relationTokens = token.value.map(ele => {
                filterDictByTokenreferenz(tokenName, ele);
            });
            return relationTokens.some(t => t !== undefined);
        } else {
            const relationTokens = filterDictByTokenreferenz(tokenName, token.value);
            return relationTokens.length !== 0;
        }
    });
    console.log("Relation Tokens: ", tokens);
    return tokens;
};

export const getTokenGroupNames = () => {
    const groupNames = Object.keys(groupsDict);
    return groupNames;
};
