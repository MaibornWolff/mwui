import React from "react";
import "./DetailsRelations.css";
import SubMenu from "../templates/SubMenu";
import SidebarData from "../templates/SidebarData";
import { getAllTokensDict, getRelationTokensDict } from "../token-data/TokenfilterUtils";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const toggleActive = event => {
    event.target.classList.toggle("active");
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
};

const handleTextFieldChange = (id) => {
    const ele = document.getElementById(id)
    console.log("Textfiled ist set: ", ele.value)
}

const DetailsRelations = ({ activeToken, setActiveToken, setActiveView }) => {
    if (activeToken !== "") {
        let relationsDict = getRelationTokensDict(activeToken, getAllTokensDict())
        relationsDict = Object.entries(relationsDict).filter(relationList => relationList[1].length !== 0)
        if (relationsDict.length !== 0) {
            return (
                <div id="relation-overview">
                    {/*REVIEW: da war als id token-overview gesetzt - das ist allerdings links auch dieselbe id, somit nicht unique.
                    außerdem habe ich die class "item" entfernt, das parent element hat es ja schon.*/}
                    <h4>Beziehungen</h4>
                    <div className="sidenav">
                        {relationsDict.map((relationGroup) => (
                            <div key={relationGroup[0]}>
                                <button className="dropdown-btn" onClick={e => toggleActive(e)}>
                                    {relationGroup[0]}
                                </button>
                                <div className="dropdown-container">
                                    <ul>
                                        {Object.values(relationGroup[1]).map(token => (
                                            <li key={token.name} style={activeToken === token.name ? { backgroundColor: "#EEF" } : {}}>
                                                <a href={"#" + token.name} key={token.name} onClick={e => toggleActive(e)}>
                                                    {token.name}
                                                </a>
                                                <div className="code-block" >
                                                    <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }} autoComplete="off">
                                                        <TextField id={"input_" + token.name} label="Code:" variant="filled" multiline defaultValue={JSON.stringify(token.value)} />
                                                        <button onClick={() => handleTextFieldChange("input_" + token.name)}>save</button>
                                                    </Box>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <SubMenu item={SidebarData} /> */}
                </div>
            )
        }
    } else {

        return (<p>Nichts zu sehen</p>)
    }
};

export default DetailsRelations;
