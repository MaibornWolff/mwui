import React from "react";
import { getTokensByGroupName, initializeTokens, getAllTokensDict } from "./token-data/TokenDeserialization";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import "./styles/MainMenu.css";

const handleOnSelect = item => {
    console.log("selected:", item);
};

initializeTokens();

const items = Object.keys(getAllTokensDict());
const itemsMapped = items.map((value, index) => {
    return { id: index, name: value };
});

const MainMenu = () => (
    <div id="mainmenu">
        <h1>Token Manager</h1>
        <ReactSearchAutocomplete items={itemsMapped} onSelect={handleOnSelect} />
    </div>
);

export default MainMenu;
