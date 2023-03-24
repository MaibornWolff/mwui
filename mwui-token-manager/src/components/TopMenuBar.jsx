import React from "react";
import { initializeTokens } from "./token-data/TokenDeserialization";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getAllTokensDict } from "./token-data/TokenfilterUtils";

import "./styles/TopMenuBar.css";

initializeTokens();

const handleOnSelect = (item, setActiveToken) => {
    setActiveToken(item.name);
};

const items = Object.keys(getAllTokensDict());
const itemsMapped = items.map((value, index) => {
    return { id: index, name: value };
});

const TopMenuBar = ({ setActiveToken, setActiveView }) => (
    <div id="topmenubar">
        <h1>Token Manager</h1>
        <ReactSearchAutocomplete items={itemsMapped} onSelect={(result) => handleOnSelect(result, setActiveToken)} styling={{ zIndex: "1" }} />
    </div>
);

export default TopMenuBar;
