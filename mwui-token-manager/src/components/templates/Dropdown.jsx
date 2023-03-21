import React from "react";
import "./styles/LeftNavigation.css";
import { getTokenGroupNames, getTokensByGroupName } from "../token-data/TokenDeserialization";

const toggleActive = event => {
    event.target.classList.toggle("active");
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};

const DropDown = ({ dataDic, activeToken, setActiveToken }) => (
    <div id="dropdown-menu" className="item">
        <h4>Tokens</h4>
        <div className="sidenav">
            {Object.keys(dataDic).map(key => (
                <>
                    <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                        {key}
                    </button>
                    <div className="dropdown-container">
                        <ul>
                            {Object.keys(dataDic[key]).map(value => (
                                <li style={activeToken === value ? { backgroundColor: "#EEF" } : {}}>
                                    <a href={"#" + value} key={value} onClick={() => setActiveToken(value)}>
                                        {" "}
                                        {value}{" "}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ))}
        </div>
    </div>
);

export default DropDown;
