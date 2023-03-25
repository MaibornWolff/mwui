import Tokens from "./tokens.json";
import xtype from 'xtypejs';
import { getAllTokensDict } from "./TokenUtils";

const Token = (name, type, value, group, description = "", extensions = {}) => {
    //TODO: kommt rein wenn die sache mit description und so geklärt ist
    // const newToken = { name: name, type: undefined, value: undefined, group: group };
    // token_setType(newToken, type);
    // token_setValue(newToken, value);
    // return newToken;
    return { name: name, type: type, value: value, group: group };

};

const token_checkDescriptionType = (description = description) => typeof description === "string";
const token_checkValueType = (value = value) => typeof value === "string" || xtype.isNonEmptyObject(value) || xtype.isNonEmptyArray(value);

export const token_includesTokenreferenz = (referenzTokenName, token) => {
    return typeof (token.value) === "string" ? token.value.includes('$' + referenzTokenName) || token.value.includes('{' + referenzTokenName + '}') : false;
}

export const token_setDescription = (token, description) => {
    token_checkDescriptionType(description) ? token.description = description : console.error("TypeError: description are not from type string.");
}
export const token_setValue = (token, value) => {
    token_checkValueType(value) ? token.value = value : console.error("TypeError: value are not from type string or object.");
}
export const token_setType = (token, type) => {
    token.type = type
}



export const groupsDict = {}; //all Tokens clusted under groups (Core, Semantic_*, Component)
export const metaDataDict = {}; //Information for categorize the groups

export const deserializeTokens = () => { createGroupDict(Tokens) };

/**
 * Helper method to generate tokenName and fill the Token(name, type, group, ...).
 * Goes recursively into the json tree to resolve nesting.
 * @param {*} obj JSON-File object
 * @param {*} tokensDict  Dictonary of tokens in one group
 * @param {*} group groupName: String
 * @param {*} name tokenName: String
 * @returns tokensDict
 */
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

/**
 * Helper method to fill the Token(name, type, group, ...) and add to tokensDict.
 * @param {*} key attribute of Token, like: name, type, ...
 * @param {*} value value of attribute, like: #FFFF, $other.token.name, {...}
 * @param {*} name tokenName: String
 * @param {*} group groupName: String
 * @param {*} tokensDict Dictonary of tokens for one group
 */
const fillToken = (key, value, name, group, tokensDict) => {
    if (!(name in tokensDict)) {
        const token = Token(name, "", "", group);
        tokensDict[name] = token;
    }
    switch (key) {
        case "type":
            //TODO:kommt rein wenn die sache mit description und so geklärt ist
            //token_setType(tokensDict[name], value);

            tokensDict[name].type = value;
            break;
        case "value":
            //kommt rein wenn die sache mit description und so geklärt ist
            //token_setValue(tokensDict[name], value);
            if (!token_checkValueType(value)) console.warn("Type of '", name, "' value is not string or object or array: ", value)
            tokensDict[name].value = value;
            break;
        case "description":
            //kommt rein wenn die sache mit description und so geklärt ist
            //token_setDescription(tokensDict[name], value);
            if (!token_checkDescriptionType(value)) console.warn("Type of '", name, "' description is not string: ", value)
            tokensDict[name].description = value;
            break;
        default:
            // not seen in JSON-file yet, but can come after W3C standard
            tokensDict[name].extensions += { key: value };
    }
};

/**
 * Main Method to create tokens groupDict.
 * Splits of metaData for group hierarchy in metaDataDict.
 * @param {*} obj JSON-File input
 * @returns groupDict of Tokens, example: {'MW_core': {...}, 'MW_semantic': {...}, 'MW_component': {...}}.
 */
const createGroupDict = obj => {
    for (const [key, value] of Object.entries(obj)) {
        if (key !== "$themes" && key !== "$metadata") {
            //tokensDict should look like, example: {"my.token.name": Token(name, type, value, description, extenstions*)}
            const tokensDict = {};
            unpack(value, tokensDict, key);
            groupsDict[key] = tokensDict;
        } else {
            metaDataDict[key] = value;
        }
    }
    return groupsDict;
};

/**
 * Get tokens as dictonary, like: {tokenname: Token()}.
 * @param {*} groupName :String
 * @returns Dictionary of tokens from group 'groupName'.
 */
export const getTokensByGroupName = groupName => groupsDict[groupName];

export const getTokenGroupNames = () => {
    const groupNames = Object.keys(groupsDict);
    return groupNames;
};

export const logGroupDict = () => console.log(groupsDict);
//TODO:
//updateToken() in Dict
//updateTokenSerialization() in JSON

//serializeTokens() Dict -> JSON
//deserializeTokens() JSON -> Dict

//checkJSONChanged() -> oder sollte das wo anders stehen?

//isTokenReferenz() $ oder {} > true : false
//isTokenAlias()
//isTokenComposed()
//isTokenComposition()

export const isTokenNameUnique = (tokenName, dict = {}) => {
    dict = dict !== {} ? dict : getAllTokensDict();
    return !(tokenName in dict);
}

//includesTokenNameGroup() enthät der name die gruppe?
//includesTokenNameType() enthält der name den type?