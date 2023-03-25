import React, { useState } from "react";
import "./App.css";
import TopMenuBar from "./components/TopMenuBar";
import RightContextMenu from "./components/RightContextMenu";
import LeftNavigation, { TokenNavigationButDifferent } from "./components/LeftNavigation";
import MiddleEditorArea from "./components/MiddleEditorArea";
import LoginPage from "./pages/LoginPage";

function App() {
    const [activeToken, setActiveToken] = useState(window.location.hash.substring(1)); // REVIEW: könntest hier z.B. window.location.hash.substring(1) ausprobieren; siehe LeftNavigation.jsx
    const [loginUser, setLoginUser] = useState("");
    const [activeView, setActiveView] = useState("designView");


    if (loginUser !== "") {
        //drehen wenn funktioniert!!!
        return <LoginPage setLoginUser={setLoginUser} />;
    } else {

        //macht es sinn hier seiten zu benutzen?? wahrscheinlich nicht, ich hab ja immer das gleiche standard layout
        return (
            <div className="App">
                <TopMenuBar setActiveToken={setActiveToken} setActiveView={setActiveView} />
                <div className="container">
                    <LeftNavigation activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
                    <MiddleEditorArea activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
                    <RightContextMenu activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
                </div>
            </div>);
    }
}

export default App;
