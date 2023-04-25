import React from "react";
import "./styles/TopMenuBar.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { deserializeTokens } from "../token-data/TokenSerialization";
import { getAllTokensDict } from "../token-data/TokenUtils";

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
    <mw-app-bar position="undefined">
        <div slot="start">
            <img src="static/media/mw_logo.693e45a5.svg" />
            <mw-app-bar-title>Tokenmanager</mw-app-bar-title>
        </div>
        <div slot="end" style={{ width: '250px' }}>
            <mw-search>HAllo</mw-search>
            {/* <ReactSearchAutocomplete items={itemsMapped} onSelect={(result) => handleOnSelect(result, setActiveToken)} styling={{ zIndex: "1" }} /> */}
            <mw-textfield type="text" placeholder="Search things..." has-error="false">
                <mw-icon slot="icon-start" icon="search"></mw-icon>
            </mw-textfield>
            <mw-avatar slot="end" src="https://i.pravatar.cc/150" alt="John Doe" size="medium"></mw-avatar>
        </div>

    </mw-app-bar>
    /*
        <div id="topmenubar">
            <h1>Token Manager</h1>
            <ReactSearchAutocomplete items={itemsMapped} onSelect={(result) => handleOnSelect(result, setActiveToken)} styling={{ zIndex: "1" }} />
        </div>*/
);

export default TopMenuBar;
