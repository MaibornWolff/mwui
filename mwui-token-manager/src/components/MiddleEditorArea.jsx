import React from "react";
import { ReactFlowProvider } from "reactflow";
import Flow from "./editor/Relation";
import "./styles/MiddleEditorArea.css";

const MiddleEditorArea = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="editor-area" className="item-center">
        <ReactFlowProvider>
            <Flow activeToken={activeToken} setActiveToken={setActiveToken} />
        </ReactFlowProvider>
    </div>
);

export default MiddleEditorArea;