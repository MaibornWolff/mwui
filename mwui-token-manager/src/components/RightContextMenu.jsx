import React from "react";
import DetailsRelations from "./context-menu/relation-view/DetailsRelations";

const SubMenu = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="submenu" className="item">
        {/* <h4>Relations</h4> */}
        <DetailsRelations activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
    </div>
);

export default SubMenu;
