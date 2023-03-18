import React from "react";
import "./styles/App.css";
import MainMenu from "./components/MainMenu";
import ContextMenu from "./components/ContextMenu";
import TokenNavigation from "./components/TokenNavigation";
import Editor from "./components/Editor";
import "@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css";
import { MwButton } from "@maibornwolff/mwui-react";
import { initializeTokens, logTokens } from "./components/token-data/TokenDeserialization";

function App() {
    //const currentTokenOverview = false ? <TokenOverview /> : <Editor />;
    // initializeTokens();
    // logTokens();

    return (
        <div className="App">
            <MwButton />
            <MainMenu />
            <div className="container">
                <TokenNavigation />
                <Editor />
                <ContextMenu />
            </div>
        </div>
    );
}

export default App;
