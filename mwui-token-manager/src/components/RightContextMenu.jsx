import React from "react";
import DetailsRelations from "./context-menu/DetailsRelations";

const SubMenu = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="submenu" className="item">
        {/* <h4>Beziehungen</h4> */}
        <DetailsRelations activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
    </div>
);

export default SubMenu;
