import React from "react";

import { useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Position } from "reactflow";

import "reactflow/dist/style.css";
import { getTokenGroupNames } from "../token-data/TokenDeserialization";
import { getAllTokensDict } from "../token-data/TokenfilterUtils";
import { getRelationTokensDict, getTokenByName } from "../token-data/TokenfilterUtils";

const createTokenNodes = (activeToken, setNodes, setEdges) => {
    // REVIEW: activeToken ist leer, das macht probleme
    if (activeToken === "") { return; }
    const tokenNodes = [];
    const tokenEdges = [];
    let idCounter = 0;
    let xPosCounter = 0;
    let yPosCounter = 0;

    let r = 255, g = 0, b = 0;

    //Group Container
    for (const group of getTokenGroupNames()) {
        tokenNodes.push({
            id: group,
            data: { label: group },
            type: 'input',
            position: { x: xPosCounter, y: yPosCounter },
            className: 'group',
            style: { backgroundColor: 'rgba(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ', 0.2)', width: 200, height: 800 }
        },)
        idCounter += 1;
        xPosCounter += 200;
        b = g
        g = r
        r = b
    }

    //Active Node
    tokenNodes.push({ id: "activeToken", position: { x: 10, y: 50 }, data: { label: activeToken }, style: { background: "#EFF" }, parentNode: getTokenByName(activeToken).group })
    idCounter += 1;
    yPosCounter += 50;
    for (const [key, value] of Object.entries(getRelationTokensDict(activeToken, getAllTokensDict()))) {
        for (const token of value) {
            yPosCounter += 50; // REVIEW: Wenn es zweizeilig ist, muss mehr abstand rein. Kann man evtl. damit rausfinden: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText
            tokenNodes.push({ id: token.name, position: { x: 10, y: yPosCounter * 1.2 }, data: { label: token.name }, parentNode: token.group }); // REVIEW: hab x und y veränert, war vorher 0 und count2 - zu testzwecken
            tokenEdges.push(createEdge("activeToken", tokenNodes[tokenNodes.length - 1].id, key))
            idCounter += 1;
        }
    }
    setEdges(tokenEdges)
    setNodes(tokenNodes);
};

const createEdge = (tokenNodeSourceId, tokenNodeTargetId, label) => {
    return { id: "e_" + tokenNodeSourceId + "-" + tokenNodeTargetId, source: tokenNodeSourceId, target: tokenNodeTargetId, label: label }
}

// REVIEW: neue methode, soll die beziehungen aufbauen, macht noch praktisch nix
const createEdges = (tokenNodes, setEdges) => {
    if (tokenNodes.length < 2) {
        setEdges([])
        return;
    }
    setEdges(tokenNodes.slice(1).map(tn => { return { id: "e" + tokenNodes[0].id + "-" + tn.id, source: tokenNodes[0].id, target: tn.id, type: "straight" } }))
}

function Flow({ activeToken, setActiveToken }) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    React.useEffect(() => createTokenNodes(activeToken, setNodes, setEdges), [activeToken]);
    //React.useEffect(() => createEdges(nodes, setEdges), [nodes]); // REVIEW: verdrahtung der edges

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    return (
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
            {/* <MiniMap /> */}
            <Controls />
            <Background />
        </ReactFlow>
    );
}

export default Flow;
