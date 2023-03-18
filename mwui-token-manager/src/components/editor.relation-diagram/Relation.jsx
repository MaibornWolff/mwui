import React from "react";

import { useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from "reactflow";

import "reactflow/dist/style.css";
import { createTokens, getTokensByGroupName, filterTokensByType, logTokens, getRelationTokens } from "../token-data/TokenDeserialization";

const initialNodes = [];

const createTokenNodes = () => {
    let count = 0;
    let count2 = 0;
    for (const token of filterTokensByType("sizing")) {
        initialNodes.push({ id: count.toString(), position: { x: 0, y: count2 }, data: { label: token.name } });
        count += 1;
        count2 += 50;
    }
    getRelationTokens("mw.core.sizing.base");
    //console.log("NODES: ", initialNodes)
};

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    React.useEffect(() => createTokenNodes(), []);

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
