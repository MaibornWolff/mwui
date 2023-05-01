import React from "react";
import DetailsRelations from "./context-menu/relation-view/DetailsRelations";
import "./styles/RightContextMenu.css";

const toggleSidebar = () => {
    var submenu = document.getElementById("submenu-wrapper")
    if (submenu.classList.contains("open")) {
        submenu.classList.remove("open");
    } else {
        submenu.classList.add("open");
    }
}

const hoverSidebar = () => {
    var submenu = document.getElementById("submenu-wrapper")
    if (!submenu.classList.contains("hover")) {
        submenu.classList.add("hover");
    }
}

const unhoverSidebar = () => {
    var sbw = document.getElementById("submenu-wrapper")
    if (sbw.classList.contains("hover")) {
        sbw.classList.remove("hover");
    }
}

const SubMenu = ({ activeToken, setActiveToken, setActiveView }) => (
    <div id="submenu-wrapper">
        <div id="submenu-handle" onClick={toggleSidebar} onMouseEnter={hoverSidebar} onMouseLeave={unhoverSidebar}>
            Beziehungen
        </div>
        <div id="submenu" className="item">
            <DetailsRelations activeToken={activeToken} setActiveToken={setActiveToken} setActiveView={setActiveView} />
        </div>
    </div>
);

export default SubMenu;
