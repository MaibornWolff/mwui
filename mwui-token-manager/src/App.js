import React, { useState } from "react";
import "./styles/App.css";
import TopMenuBar from "./components/TopMenuBar";
import RightContextMenu from "./components/RightContextMenu";
import LeftNavigation from "./components/LeftNavigation";
import MiddleEditorArea from "./components/MiddleEditorArea";
import LoginPage from "./pages/LoginPage";

const [activeToken, setActiveToken] = useState("");
const [loginUser, setLoginUser] = useState("");
const [activeView, setActiveView] = useState("designView");

function App() {
    if (loginUser !== "") {
        //drehen wenn funktioniert!!!
        return <LoginPage setLoginUser={setLoginUser} />;
    } else {
        //macht es sinn hier seiten zu benutzen?? wahrscheinlich nicht, ich hab ja immer das gleiche standard layout
        <div className="App">
            <TopMenuBar setActiveToken={setActiveToken} setActiveView={setActiveView} />
            <div className="container">
                <LeftNavigation setActiveToken={setActiveToken} setActiveView={setActiveView} />
                <MiddleEditorArea setActiveToken={setActiveToken} setActiveView={setActiveView} />
                <RightContextMenu setActiveToken={setActiveToken} setActiveView={setActiveView} />
            </div>
        </div>;
    }
}

export default App;
