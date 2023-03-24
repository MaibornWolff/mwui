import React from "react";
import * as RiIcons from "react-icons/ri";
import { filterTokensBySubString } from "../token-data/TokenfilterUtils";
import { getTokenGroupNames, getTokensByGroupName } from "../token-data/TokenDeserialization"
import { DefaultContext } from "react-icons/lib";

// Das fängt noch nicht wenn mehrere tokens in einem untermenü sind, der macht dann viel zu viele menüs, vllt
const createSubNav = (tokenName, groupName, index, deep, tokenSubCategory) => {
    console.log("INDEX, DEEP: ", index, deep);
    const filteredTokens = filterTokensBySubString(tokenSubCategory.slice(0, deep).join("."), groupName);
    if (filteredTokens.length > 10 && deep <= tokenSubCategory.length) {
        console.log("in dem if");
        const subNavName = tokenSubCategory[index];
        index++;
        deep++;
        return {
            title: { subNavName },
            path: { subNavName },
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: createSubNav(tokenName, groupName, index, deep, tokenSubCategory),
        };
    } else {
        console.log("in dem else");
        return {
            title: { tokenName },
            path: { tokenName },
        };
    }
};

export const SidebarData = getTokenGroupNames().map(groupName => ({
    title: { groupName },
    path: { groupName },
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: Object.keys(getTokensByGroupName(groupName)).map(tokenName => {
        let tokenSubCategory = tokenName.split(".").slice(0, -1); //not the identifyer
        tokenSubCategory = tokenSubCategory[0] === "mw" ? tokenSubCategory.slice(1) : tokenSubCategory; // not the domain
        tokenSubCategory = tokenSubCategory[0] === groupName.split('_')[1].toLowerCase ? tokenSubCategory.slice(1) : tokenSubCategory; // not the group
        console.log("SubCategory: ", tokenSubCategory);
        return createSubNav(tokenName, groupName, 0, 1, tokenSubCategory);
    }),
}));

export default SidebarData;
