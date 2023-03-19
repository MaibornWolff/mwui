import React from "react";
import Flow from "./editor/Relation";
import "./styles/MiddleEditorArea.css";

const Editor = ({ setActiveToken }, { setActiveView }) => (
    <div id="editor" className="item-center">
        <Flow />
    </div>
);

export default Editor;
