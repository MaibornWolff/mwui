import React from "react";
import { getTokensByGroupName, initializeTokens, getAllTokensDict } from "./token-data/TokenDeserialization";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import "./styles/TopMenuBar.css";

const handleOnSelect = (item, setActiveToken) => {
    console.log("selected:", item);
    console.log(item.name);
    setActiveToken(item.name);
};

initializeTokens();

const items = Object.keys(getAllTokensDict());
const itemsMapped = items.map((value, index) => {
    return { id: index, name: value };
});

const TopMenuBar = ({ setActiveToken }, { setActiveView }) => (
    <div id="topmenubar">
        <h1>Token Manager</h1>
        <ReactSearchAutocomplete items={itemsMapped} onSelect={() => handleOnSelect(result, setActiveToken)} />
    </div>
);

export default TopMenuBar;
