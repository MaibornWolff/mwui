import React from "react";
import "./styles/TopMenuBar.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { deserializeTokens } from "../token-data/TokenSerialization";
import { getAllTokensDict } from "../token-data/TokenUtils";


//TODO: in App.js wird das nicht ausgeführt, warum auch immer. im zweifel so lassen und kommentare löschen
deserializeTokens();


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
