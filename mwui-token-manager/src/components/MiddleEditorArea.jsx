import React from "react";
import Flow from "./editor/Relation";
import "./styles/MiddleEditorArea.css";

const MiddleEditorArea = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="editor-area" className="item-center">
        <Flow activeToken={activeToken} setActiveToken={setActiveToken} />
    </div>
);

export default MiddleEditorArea;