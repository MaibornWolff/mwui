import React from "react";
import { ReactFlowProvider } from "reactflow";
import Flow from "./editor/relation-view/RelationFlow";
import "./styles/MiddleEditorArea.css";

const MiddleEditorArea = ({ activeToken: rootToken, setActiveToken: setRootToken, setActiveView }) => (
    <div id="editor-area" className="item-center">
        <ReactFlowProvider>
            <Flow rootToken={rootToken} setRootToken={setRootToken} />
        </ReactFlowProvider>
    </div>
);

export default MiddleEditorArea;