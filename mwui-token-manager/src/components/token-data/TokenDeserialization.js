import Tokens from "./tokens.json";

const Token = (name, type, value, group, description = "", extensions = {}) => {
    return { name: name, type: type, value: value, group: group };
};
export const groupsDict = {}; //all Tokens clusted under groups (Core, Semantic_*, Component)
const metaDataDict = {}; //Information for categorize the groups

export const initializeTokens = () => createGroupDict(Tokens);

const unpack = (obj, tokensDict, group, name = null) => {
    for (const [key, value] of Object.entries(obj)) {
        if (key === "value" || typeof value !== "object") {
            fillToken(key, value, name, group, tokensDict);
        } else {
            unpack(value, tokensDict, group, name === null ? key : name + "." + key);
        }
    }
    return tokensDict;
};

const fillToken = (key, value, name, group, tokensDict) => {
    if (!(name in tokensDict)) {
        const token = Token(name, "", "", group);
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
            unpack(value, tokensDict, key);
            groupsDict[key] = tokensDict;
        } else {
            metaDataDict[key] = value;
        }
    }
    return groupsDict;
};

export const getTokensByGroupName = groupName => groupsDict[groupName];

export const getTokenGroupNames = () => {
    const groupNames = Object.keys(groupsDict);
    return groupNames;
};

export const logTokens = () => console.log(groupsDict);