import React from "react";

import { useCallback, useEffect, useState } from "react";
import ReactFlow, { /*nodeOrigin, */ Controls, Background, useNodesState, useEdgesState, addEdge, useStore, useStoreApi, useNodesInitialized } from "reactflow";

import "reactflow/dist/style.css";
import { escapeLeadingUnderscores } from "typescript";
import { origin, initRelationNodeData, calcDimensionOfNodes, createGroupNodes, createRelationNodes, createRootNode, createNodesAndEdges } from "./LayoutUtils";

const createTokenNodes = (rootTokenName, setNodes, setEdges) => {

    if (rootTokenName === "" || rootTokenName === undefined) { return; }

    initRelationNodeData(rootTokenName);

    const tokenNodes = [];
    const tokenEdges = [];

    //createNodesAndEdges(tokenNodes, tokenEdges, setNodes)
    createGroupNodes(tokenNodes)
    createRootNode(tokenNodes)
    createRelationNodes(tokenNodes, tokenEdges)

    setNodes(tokenNodes);
    setEdges(tokenEdges);
};

function Flow({ activeToken, setActiveToken }) {

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    React.useEffect(() => { createTokenNodes(activeToken, setNodes, setEdges); setNodesNeedLayouting(true) }, [activeToken]);

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    // TODO: REVIEW: testweise initialize ausprobieren
    const [nodesNeedLayouting, setNodesNeedLayouting] = useState(true);
    // const [nodeDimensions, setNodeDimensions] = useState(nodes.map(n => {return {width:n.width, height:n.height}}))
    const nodesInitialized = useNodesInitialized();
    // const nodeDimensions = nodes.map(n => n.width !== undefined ? n.width + "," + n.height : undefined)


    // if (nodesNeedLayouting) {
    //     calcDimensionOfNodes(nodes, setNodesNeedLayouting)
    // } else {
    //     console.log("nodes need layouting but values are undefined")
    // }

    // const store = useStoreApi((store) => {
    //     const node = store.nodeInternals.get(activeToken);
    //     console.log("----useStore----: ", node)

    //     if (node !== undefined)
    //         return {
    //             width: node.width,
    //             height: node.height,
    //         };
    //     // store.updateNodeDimensions() // id string, nodeElement (HTMLDivElement), forceUpdate? bool
    //     //return store.nodeInternals//.get(activeToken)
    // })

    // useEffect(() => {
    //     setNodes((nodes) =>
    //         nodes.map(n => {
    //             if (n.id === "MW_dark") {
    //                 n.style = { ...n.style, width: 200, height: 100 };
    //             }
    //             return n
    //         }))
    // }, [nodesInitialized, setNodes])



    // useEffect(() => {
    //     if (nodesInitialized) {
    //         // store.getState().nodeInternals.get("MW_dark")?.width = 1234
    //         // console.log("store", store.getState())
    //         // store.getState().setNodes(nodes.map(n => { n.width = 1234; return n }))
    //         // store.getState().updateNodeDimensions([{ id: "MW_dark", nodeElement: nodes[0], forceUpdate: true }])
    //     }
    // }, [nodesInitialized])

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultViewport={{ zoom: 1, x: 0, y: 0 }}
            fitView
            fitViewOptions={{ padding: 0.4 }}>

            <Controls />
            <Background />
        </ReactFlow>
    );
}

export default Flow;