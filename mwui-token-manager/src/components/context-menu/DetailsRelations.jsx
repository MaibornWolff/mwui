import React from "react";
import "./DetailsRelations.css";
import { getAllTokensDict, getRelationTokensDict } from "../token-data/TokenfilterUtils";

const toggleActive = event => {
    event.target.classList.toggle("active");
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};

const DetailsRelations = ({ activeToken, setActiveToken, setActiveView }) => {
    if (activeToken !== "") {
        let relationsDict = getRelationTokensDict(activeToken, getAllTokensDict())
        relationsDict = Object.entries(relationsDict).filter(relationList => relationList[1].length !== 0)
        if (relationsDict.length !== 0) {
            return (
                <div id="token-overview" className="item">
                    <h4>Tokens</h4>
                    <div className="sidenav">
                        {relationsDict.map((relationGroup) => (
                            <>
                                <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                                    {relationGroup[0]}
                                </button>
                                <div className="dropdown-container">
                                    <ul>
                                        {Object.values(relationGroup[1]).map(token => (
                                            <li style={activeToken === token.name ? { backgroundColor: "#EEF" } : {}}>
                                                <a href={"#" + token.name} key={token.name} onClick={e => toggleActive(e)}>
                                                    {token.name}
                                                </a>
                                                <div className="code-block">
                                                    <pre><span>Code:</span><br /> {JSON.stringify(token.value, null, 2)}</pre></div>                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            )
        }
    } else {

        return (<p>Nichts zu sehen</p>)
    }
};

export default DetailsRelations;
