import React from "react";
import "./styles/LeftNavigation.css";
import { getTokenGroupNames, getTokensByGroupName } from "./token-data/TokenDeserialization";
import { getAllTokensDict } from "./token-data/TokenfilterUtils";

//import { SidebarData } from "./token-navigation/SidebarData";


const toggleActive = event => {
    event.target.classList.toggle("active");
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};
/*
const createSubNav = mainNavName => {
    const tokensNameListByGroup = Object.keys(getTokensByGroupName(mainNavName));
    tokensNameListByGroup.map(tokenName => {
        let tokenSubCategory = tokenName.split(".").slice(0, -1); //not the identifyer
        tokenSubCategory = tokenSubCategory.slice(0, 1).contains() ? tokenSubCategory.slice(1) : tokenSubCategory;
        tokenSubCategory = tokenSubCategory[0] === "mw" ? tokenSubCategory.slice(1) : tokenSubCategory; // not the domain
        tokenSubCategory = tokenSubCategory[0] === mainNavName.toLowerCase ? tokenSubCategory.slice(1) : tokenSubCategory; // not the group
        console.log("SubCategory: ", tokenSubCategory);
    });

    {
        <ul>
            {tokensNameListByGroup.map(tokenName => (
                <li>
                    <a href={"#${key}"} key={tokenName}>
                        {" "}
                        {tokenName}{" "}
                    </a>
                </li>
            ))}
        </ul>;
    }
};
*/

const TokenNavigation = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="token-overview" className="item">
        <h4>Tokens</h4>
        <div key="sidenav" className="sidenav">
            {/* {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })} */}
            {getTokenGroupNames().map(groupName => (
                <div key={groupName}>
                    <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                        {groupName}
                        {/* <i className="fa fa-caret-down"></i> */}
                    </button>
                    <div className="dropdown-container">
                        {/*createSubNav(groupName)*/}
                        <ul>
                            {Object.keys(getTokensByGroupName(groupName)).map(tokenName => (
                                <li key={tokenName} style={activeToken === tokenName ? { backgroundColor: "#EEF" } : {}}>
                                    <a href={"#" + tokenName} onClick={() => setActiveToken(tokenName)}>
                                        {/* REVIEW: href geändert von "#${tokenName}" zu "#"+tokenName (siehe URL wenn etwas geklickt wird)*/}
                                        {/* Kann übrigens mit window.location.hash abgerufen werden; beim Seitenaufruf könntest du damit activeToken direkt befüllen (siehe App.js) */}
                                        {tokenName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default TokenNavigation;
