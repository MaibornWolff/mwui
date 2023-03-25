import React from "react";
import "./styles/Dropdown.css";

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

export const SubNav = (dataDic, key, activeToken, setActiveToken) => {
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



export const DropDown = ({ name, dataDic, activeToken, setActiveToken }) => (
    <div className="dropdown-container">
        {Object.keys(dataDic).map(key => (
            <div key={name}>
                <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                    {key}
                </button>
                <SubNav dataDic={dataDic} key={key} activeToken={activeToken} setActiveToken={setActiveToken} />
            </div>
        ))}
    </div>
);

export default DropDown;
