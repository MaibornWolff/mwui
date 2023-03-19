import React from "react";

import { useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";
import { getRelationTokens, getAllTokensDict } from "../token-data/TokenDeserialization";

const createTokenNodes = (activeToken, setNodes, setEdges) => {
    const tokenNodes = [];
    const tokenEdges = [];
    let count = 0;
    let count2 = 0;

    tokenNodes.push({ id: count.toString(), position: { x: 0, y: count2 }, data: { label: activeToken }, style: { background: "#EFF" } })
    count += 1;

    for (const [key, value] of Object.entries(getRelationTokens(activeToken, getAllTokensDict()))) {
        console.log("Key, value", key, value)
        for (const token of value) {
            count2 += 50; // REVIEW: Wenn es zweizeilig ist, muss mehr abstand rein. Kann man evtl. damit rausfinden: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText
            tokenNodes.push({ id: count.toString(), position: { x: 200, y: count2 * 1.2 }, data: { label: token.name } }); // REVIEW: hab x und y veränert, war vorher 0 und count2 - zu testzwecken
            tokenEdges.push(createEdge(tokenNodes[0], tokenNodes[tokenNodes.length - 1], key))
            count += 1;
        }

    }
    console.log(tokenEdges)
    setEdges(tokenEdges)
    setNodes(tokenNodes);
};

const createEdge = (tokenNodeSource, tokenNodeTarget, label) => {
    return { id: "e" + tokenNodeSource.id + "-" + tokenNodeTarget.id, source: tokenNodeSource.id, target: tokenNodeTarget.id, type: "straight", label: label }
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
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    );
}

export default Flow;
