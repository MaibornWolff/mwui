import React from "react";
import "./styles/TopMenuBar.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { deserializeTokens } from "../token-data/TokenSerialization";
import { getAllTokensDict } from "../token-data/TokenUtils";
import { MwAppBar, MwAppBarTitle } from "@maibornwolff/mwui-react";
import '@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css';


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
    <MwAppBar id="topmenubar">
        <div slot="start">
            <MwAppBarTitle>Token Manager</MwAppBarTitle>
        </div>
        <div slot="end" style={{ minWidth: "400px", display: "block" }}>
            <ReactSearchAutocomplete items={itemsMapped} placeholder="Search token..." onSelect={(result) => handleOnSelect(result, setActiveToken)} styling={{ zIndex: "1" }}><mw-icon slot="icon-start" icon="search"></mw-icon></ReactSearchAutocomplete>
        </div>
        <div slot="end">
            <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
        </div>
    </MwAppBar>
);

export default TopMenuBar;
