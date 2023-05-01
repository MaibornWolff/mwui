import React, { useState } from "react";
import { ReactFlowProvider } from "reactflow";
import Flow, { FlowLayoutTypes } from "./editor/relation-view/RelationFlow";
import "./styles/MiddleEditorArea.css";

const changeFlowLayout = (event, setFlowLayoutType) => {
    setFlowLayoutType(event.target.value)
}

const MiddleEditorArea = ({ activeToken, setActiveToken: setActiveToken, setActiveView }) => {
    const [flowLayoutType, setFlowLayoutType] = useState();

    return <div id="editor-area" className="item-center">
        <select id="flow-type-selector" onChange={(event) => changeFlowLayout(event, setFlowLayoutType)}>
            <option value={FlowLayoutTypes.default}>Default Layout</option>
            <option value={FlowLayoutTypes.mindmap}>Mindmap</option>
        </select>
        <ReactFlowProvider>
            <Flow activeToken={activeToken} setActiveToken={setActiveToken} flowLayoutType={flowLayoutType} />
        </ReactFlowProvider>
    </div>
};

export default MiddleEditorArea;