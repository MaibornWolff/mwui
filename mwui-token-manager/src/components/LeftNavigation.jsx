import React from "react";
import "./styles/LeftNavigation.css";
import { getTokenGroupNames, getTokensByGroupName } from "../token-data/TokenSerialization";


//TODO: clean up

const toggleActive = event => {
    event.target.classList.toggle("active");
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};
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
