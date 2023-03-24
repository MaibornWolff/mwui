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

export const Details = (name) => {
    return (
        <h2>{name}</h2>
    )

}
export const SubNav = (dataDic, key) => {
    return (
        <div className="dropdown-sublist">
            <ul>
                {Object.keys(dataDic[key]).map(value => (
                    <li key={value} style={activeToken === value ? { backgroundColor: "#EEF" } : {}}>
                        <a href={"#" + value} key={value} onClick={() => setActiveToken(value)}>
                            {value}
                        </a>
                        <Details />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const DropDown = ({ name, dataDic, activeToken, setActiveToken }) => (
    <div className="dropdown-container">
        {Object.keys(dataDic).map(key => (
            <div key={name}>
                <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                    {key}
                </button>
                <SubNav />
            </div>
        ))}
    </div>
);

export default DropDown;
